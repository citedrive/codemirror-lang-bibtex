import {parser} from "./syntax.grammar"
import {styleTags, tags as t} from "@lezer/highlight"
import {LRLanguage, LanguageSupport, delimitedIndent, flatIndent, continuedIndent,
        indentNodeProp, foldNodeProp, foldInside} from "@codemirror/language"
import {completeFromList, ifIn, ifNotIn} from "@codemirror/autocomplete"
import {entrySnippets, fieldSnippets} from "./snippets"

// TODO: setup highlight tags correctly lol
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
        Entry: foldInside,
        FieldValue: foldInside
      }),
    ]
  }),
  languageData: {
    commentTokens: {line: "%"},
  }
})

/// BibTeX support. Includes [snippet](#lang-bibtex.snippets) and smartly suggests entries and fields when valid
export function bibtex() {
  return new LanguageSupport(bibtexLanguage, [
    bibtexLanguage.data.of({
      autocomplete: ifIn("EntryValue", completeFromList(fieldSnippets))
    }),
    bibtexLanguage.data.of({
      autocomplete: ifNotIn("EntryValue", completeFromList(entrySnippets))
    })
  ])
}
