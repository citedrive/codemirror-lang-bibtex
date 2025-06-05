import {parser} from "./syntax.grammar"
import {LRLanguage, LanguageSupport, indentNodeProp, foldNodeProp, foldInside, delimitedIndent} from "@codemirror/language"
import {styleTags, tags as t} from "@lezer/highlight"

// TODO: setup highlight tags correctly lol
export const BibTeXLanguage = LRLanguage.define({
  parser: parser.configure({
    props: [
      /* indentNodeProp.add({
        Entry: delimitedIndent({closing: "}", align: false}),
        BracedValue: delimitedIndent({closing: "}", align: false})
      }),
      foldNodeProp.add({
        Entry: foldInside,
        FieldValue: foldInside
      }),
      styleTags({
        Entry: t.keyword,
        EntryType: t.className,
        EntryValue: t.literal,
        EntryKey: t.keyword,
        Field: t.keyword,
        FieldType: t.propertyName,
        FieldValue: t.keyword,
        Comment: t.lineComment,
        "{ }": t.brace,
        "=": t.operator,
        ",": t.separator,
      }) */
    ]
  }),
  languageData: {
    commentTokens: {line: "%"}
  }
})

export function bibtex() {
  return new LanguageSupport(BibTeXLanguage)
}
