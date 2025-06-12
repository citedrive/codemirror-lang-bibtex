import {parser} from "./syntax.grammar"
import {styleTags, tags as t} from "@lezer/highlight"
import {LRLanguage, LanguageSupport, delimitedIndent, flatIndent, continuedIndent,
    indentNodeProp, foldNodeProp, foldInside} from "@codemirror/language"
import {autocompletion, completeFromList, ifIn, ifNotIn} from "@codemirror/autocomplete"
import {bibtexCompletion} from "./completion"
import {bibtexSnippets, bibtexEntrySnippets, bibtexFieldSnippets,
    biblatexSnippets, biblatexEntrySnippets, biblatexFieldSnippets} from "./snippets/index"

/// BibTeX Language configuration with [syntax highlighting](#language.syntaxHighlighting), [folding](#language.foldNodeProp), and [indentation](#language.indentNodeProp).
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

/// BibLaTeX Language configuration as a [dialect](https://lezer.codemirror.net/docs/ref/#lr.ParserConfig.dialect) of [BibTeX](#lang-bibtex.bibtexLanguage).
export const biblatexLanguage = bibtexLanguage.configure({dialect: "biblatex"}, "BibLaTeX");

/// [BibTeX](#lang-bibtex.bibtexLanguage) language support with optional [BibLaTeX](#lang-bibtex.biblatexLanguage) dialect support, autocompletion [configuration](#lang-bibtex.bibtexCompletion), and both [BibTeX snippets](#lang-bibtex.bibtexSnippets) and [BibLaTeX snippets](#lang-bibtex.biblatexSnippets) that are optionally suggested based on the editor [context](#autocomplete.CompletionContext).
///
/// The smart-suggestion feature only suggests snippets for bibliography `entries` (i.e. `@article`) when the user *is not* currently editing an entry and only suggests snippets for bibliography `fields` (i.e. `author = {Donald Knuth}`) when the user *is* currently editing an entry.
///
/// Snippets have been scaffolded as per the current [BibTeX](https://ctan.org/ctan-ann/id/mailman.3109.1292253131.2307.ctan-ann@dante.de)/[BibLaTeX](https://ctan.org/ctan-ann/id/mailman.404.1656879977.32352.ctan-ann@ctan.org) specs. Both the snippet [render config](#autocomplete.CompletionSection) and exclusion of certain snippets are done in an [opinionated](https://www.citedrive.com/en/blog/codemirror-bibtex-plugin) manner ([suggestions](https://github.com/vaisriv/codemirror-lang-bibtex/issues) welcome).
export function bibtex(config: {biblatex?: boolean, smartSuggest?: boolean} = {}) {
    let lang = config.biblatex ? biblatexLanguage : bibtexLanguage;
    let snippets = config.biblatex
        ? { entries: biblatexEntrySnippets, fields: biblatexFieldSnippets, all: biblatexSnippets }
        : { entries: bibtexEntrySnippets, fields: bibtexFieldSnippets, all: bibtexSnippets };
    let snippetExtension = config.smartSuggest
        ? [
            bibtexLanguage.data.of({
                autocomplete: ifIn(["EntryValue"], completeFromList(snippets.fields))
            }),
            bibtexLanguage.data.of({
                autocomplete: ifNotIn(["EntryValue"], completeFromList(snippets.entries))
            }),
        ]
        : [
            bibtexLanguage.data.of({
                autocomplete: completeFromList(snippets.all)
            }),
        ];
    return new LanguageSupport(
        lang,
        [
            snippetExtension,
            bibtexCompletion
        ]
    );
}
