import {parser} from "./syntax.grammar"
import {styleTags, tags as t} from "@lezer/highlight"
import {LRLanguage, LanguageSupport, delimitedIndent, flatIndent, continuedIndent,
        indentNodeProp, foldNodeProp, foldInside} from "@codemirror/language"
import {autocompletion, completeFromList, ifIn, ifNotIn} from "@codemirror/autocomplete"
import {entrySnippets, fieldSnippets} from "./snippets"
import {bibtexCompletion} from "./completion"

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
        Entry: context => { return {from: context.node.firstChild.to , to: context.node.lastChild.to + 1}; },
        FieldValue: context => { return { from: context.node.from + 1, to: context.node.to - 1 }; }
      }),
      indentNodeProp.add({
        EntryHeading: context => { return context.column(context.node.parent.from) + context.unit; },
        FieldValue: context => { return context.column(context.node.parent.from) + context.unit; }
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
    }),
    bibtexCompletion
  ])
}
