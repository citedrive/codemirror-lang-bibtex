import {parser} from "./syntax.grammar"
import {styleTags, tags as t} from "@lezer/highlight"
import {LRLanguage, LanguageSupport, delimitedIndent, flatIndent, continuedIndent,
    indentNodeProp, foldNodeProp, foldInside} from "@codemirror/language"
import {autocompletion, completeFromList, ifIn, ifNotIn} from "@codemirror/autocomplete"
import {bibtexCompletion} from "./completion"
import {bibtexSnippets, bibtexEntrySnippets, bibtexFieldSnippets,
    biblatexSnippets, biblatexEntrySnippets, biblatexFieldSnippets} from "./snippets/index"

/// BibTeX Language configuration with syntax [highlighting](#language.syntaxHighlighting), [folding](#language.foldNodeProp), and [indentation](#language.indentNodeProp).
export const bibtexLanguage = LRLanguage.define({
    name: "BibTeX",
    extensions: ["bib"],
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
        closeBrackets: { brackets: ["{", "\'", "\""] },
        commentTokens: { line: "%" },
    }
})

/// BibLaTeX Language configuration as a [dialect](https://lezer.codemirror.net/docs/ref/#lr.ParserConfig.dialect) of BibTeX.
export const biblatexLanguage = bibtexLanguage.configure({dialect: "biblatex"}, "BibLaTeX");

/// BibTeX [language](#language.LRLanguage) support with BibLaTeX [dialect](https://lezer.codemirror.net/docs/ref/#lr.ParserConfig.dialect), autocompletion [configuration](#autocomplete.autocompletion^config), and autocompletion [snippets](#autocomplete.snippet) that are suggested based on the editor [context](#autocomplete.CompletionContext).
export function bibtex(config: {biblatex?: boolean} = {}) {
    let lang = config.biblatex ? biblatexLanguage : bibtexLanguage;
    let snippets = config.biblatex
        ? { entries: biblatexEntrySnippets, fields: biblatexFieldSnippets }
        : { entries: bibtexEntrySnippets, fields: bibtexFieldSnippets };
    return new LanguageSupport(
        lang,
        [
            bibtexLanguage.data.of({
                autocomplete: ifIn(["EntryValue"], completeFromList(snippets.fields))
            }),
            bibtexLanguage.data.of({
                autocomplete: ifNotIn(["EntryValue"], completeFromList(snippets.entries))
            }),
            bibtexCompletion
        ]
    );
}
