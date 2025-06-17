import {parser} from "./syntax.grammar"
import {styleTags, tags as t} from "@lezer/highlight"
import {LRLanguage, LanguageSupport, indentNodeProp, foldNodeProp} from "@codemirror/language"
import {autocompletion, completeFromList, ifIn, ifNotIn} from "@codemirror/autocomplete"
import {bibtexCompletion} from "./completion"
import { bibtexEntries, bibtexFields, biblatexEntries, biblatexFields, createEntry, createField } from "./snippets/index"

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

/// [BibTeX](#lang-bibtex.bibtexLanguage) language support with [BibLaTeX](#lang-bibtex.biblatexLanguage) dialect support, autocompletion [configuration](#lang-bibtex.bibtexCompletion), and [snippets](#autocomplete.snippet) for both BibTeX and BibLaTeX that are suggested based on the editor [context](#autocomplete.CompletionContext).
///
/// There are configuration options for the following:
/// - **BibTeX** vs **BibLaTeX** language support: defaults to BibTeX
/// - **Snippet Smart-Suggestion:** The smart-suggestion feature only suggests snippets for bibliography `entries` (i.e. `@article = {...}`) when the user *is not* currently editing an entry and only suggests snippets for bibliography `fields` (i.e. `author = {Donald Knuth}`) when the user *is* currently editing an entry.
/// - **Opinionated Snippets**: Snippets have been scaffolded as per the current [BibTeX](https://ctan.org/ctan-ann/id/mailman.3109.1292253131.2307.ctan-ann@dante.de)/[BibLaTeX](https://ctan.org/ctan-ann/id/mailman.404.1656879977.32352.ctan-ann@ctan.org) specs. The snippet [render config](#autocomplete.CompletionSection), exclusion of certain snippets, and entry snippets' suggestion of recommendation/optional fields are done in an [opinionated](https://www.citedrive.com/en/blog/codemirror-bibtex-plugin) manner ([suggestions](https://github.com/vaisriv/codemirror-lang-bibtex/issues) are welcome!).
export function bibtex(config: {biblatex?: boolean, smartSuggest?: boolean, snippetRecs?: boolean} = {biblatex: false, smartSuggest: true, snippetRecs: true}) {
    // allow user to only specify config options that they care about
    // it's a little hack-y because we're defining the defaults twice, but the defaults in the function signature are there for the documentation
    let userConfig = { biblatex: false, smartSuggest: true, snippetRecs: true, ...config };

    // create snippets
    const bibtexEntrySnippets = bibtexEntries.map(entry => createEntry(entry.name, entry.type, entry.description, entry.fields, userConfig.snippetRecs));
    const bibtexFieldSnippets = bibtexFields.map(field => createField(field.name, field.type, field.description));
    const biblatexEntrySnippets = biblatexEntries.map(entry => createEntry(entry.name, entry.type, entry.description, entry.fields, userConfig.snippetRecs));
    const biblatexFieldSnippets = biblatexFields.map(field => createField(field.name, field.type, field.description));

    const bibtexSnippets = {
        entries: bibtexEntrySnippets,
        fields: bibtexFieldSnippets,
        all: bibtexEntrySnippets.concat(bibtexFieldSnippets)
    };
    const biblatexSnippets = {
        entries: biblatexEntrySnippets,
        fields: biblatexFieldSnippets,
        all: biblatexEntrySnippets.concat(biblatexFieldSnippets)
    };

    // setup language/autocompletion behavior based on user config
    let bibLanguage = userConfig.biblatex ? biblatexLanguage : bibtexLanguage;
    let bibSnippets = userConfig.biblatex
        ? biblatexSnippets
        : bibtexSnippets;
    let bibSnippetExtension = userConfig.smartSuggest
        ? [
            bibLanguage.data.of({
                autocomplete: ifIn(["EntryValue"], completeFromList(bibSnippets.fields))
            }),
            bibLanguage.data.of({
                autocomplete: ifNotIn(["EntryValue"], completeFromList(bibSnippets.entries))
            }),
        ]
        : [
            bibLanguage.data.of({
                autocomplete: completeFromList(bibSnippets.all)
            }),
        ];

    // actually create the language object
    return new LanguageSupport(
        bibLanguage,
        [
            bibtexCompletion,
            bibSnippetExtension
        ]
    );
}
