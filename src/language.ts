import {parser} from "./syntax.grammar"
import {styleTags, tags as t} from "@lezer/highlight"
import {LRLanguage, LanguageSupport, delimitedIndent, flatIndent, continuedIndent,
        indentNodeProp, foldNodeProp, foldInside} from "@codemirror/language"
import {autocompletion, completeFromList, ifIn, ifNotIn} from "@codemirror/autocomplete"
import {bibtexCompletion} from "./completion"
import {bibtexSnippets, bibtexEntrySnippets, bibtexFieldSnippets} from "./bibtex"
import {biblatexSnippets, biblatexEntrySnippets, biblatexFieldSnippets} from "./biblatex"

/// BibTeX Language configuration with syntax [highlighting](#language.syntaxHighlighting), [folding](#language.foldNodeProp), and [indentation](#language.indentNodeProp).
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
        Entry: context => { return context.column(context.node.parent.from) + context.unit; },
        FieldValue: context => { return context.column(context.node.parent.from) + context.unit; }
      })
    ]
  }),
  languageData: {
    commentTokens: {line: "%"},
  }
})

/// BibTeX support with autocompletion configuration and autocompletion [snippets](#autocomplete.snippet) that are suggested based on [context](#autocomplete.CompletionContext).
export function bibtex() {
  return new LanguageSupport(bibtexLanguage, [
    bibtexLanguage.data.of({
      autocomplete: ifIn(["EntryValue"], completeFromList(bibtexFieldSnippets))
    }),
    bibtexLanguage.data.of({
      autocomplete: ifNotIn(["EntryValue"], completeFromList(bibtexEntrySnippets))
    }),
    bibtexCompletion
  ])
}

/// BibLaTeX support with autocompletion configuration and autocompletion [snippets](#autocomplete.snippet) that are suggested based on [context](#autocomplete.CompletionContext).
export function biblatex() {
  return new LanguageSupport(bibtexLanguage, [
    bibtexLanguage.data.of({
      autocomplete: ifIn(["EntryValue"], completeFromList(biblatexFieldSnippets))
    }),
    bibtexLanguage.data.of({
      autocomplete: ifNotIn(["EntryValue"], completeFromList(biblatexEntrySnippets))
    }),
    bibtexCompletion
  ])
}
