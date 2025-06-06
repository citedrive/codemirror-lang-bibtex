import {parser} from "./syntax.grammar"
import {styleTags, tags as t} from "@lezer/highlight"
import {LRLanguage, LanguageSupport, delimitedIndent, flatIndent, continuedIndent,
        indentNodeProp, foldNodeProp, foldInside} from "@codemirror/language"
import {completeFromList, ifIn, ifNotIn} from "@codemirror/autocomplete"
import {entrySnippets, fieldSnippets} from "./snippets"

export const bibtexLanguage = LRLanguage.define({
  parser: parser.configure({
    props: [
      styleTags({
        EntryType: t.className,
        EntryKey: t.keyword,
        FieldType: t.labelName,
        FieldContent: t.literal,
        Comment: t.lineComment,
        "{ }": t.brace,
        "=": t.operator,
        ",": t.separator,
      }),
      foldNodeProp.add({
        EntryContent: foldInside,
        FieldValue: foldInside
      }),
      indentNodeProp.add({
        EntryValue: context => { return context.column(context.node.from) + context.unit; },
        FieldValue: context => { return context.column(context.node.from) + context.unit; }
      })
    ]
  }),
  languageData: {
    commentTokens: {line: "%"},
  }
})

/// BibTeX support. Includes [snippet](#lang-bibtex.snippets) and smart-suggests entries and fields when valid
export function bibtex() {
  return new LanguageSupport(bibtexLanguage, [
    bibtexLanguage.data.of({
      autocomplete: ifIn(["EntryValue"], completeFromList(fieldSnippets))
    }),
    bibtexLanguage.data.of({
      autocomplete: ifNotIn(["EntryValue"], completeFromList(entrySnippets))
    })
  ])
}
