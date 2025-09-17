import { parser } from "./syntax.grammar";
import { styleTags, tags as t } from "@lezer/highlight";
import {
    LRLanguage,
    LanguageSupport,
    indentNodeProp,
    foldNodeProp,
} from "@codemirror/language";
import {
    autocompletion,
    completeFromList,
    ifIn,
    ifNotIn,
} from "@codemirror/autocomplete";
import { bibtexCompletion } from "./completion";
import { bibtexLinter } from "./linter";
import {
    bibtexEntries,
    bibtexFields,
    biblatexEntries,
    biblatexFields,
    createEntry,
    createField,
    createKeyword,
} from "./snippets/index";

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
                Entry: (context) => {
                    return {
                        from: context.node.firstChild.to,
                        to: context.node.lastChild.to + 1,
                    };
                },
                FieldValue: (context) => {
                    return {
                        from: context.node.from + 1,
                        to: context.node.to - 1,
                    };
                },
            }),
            indentNodeProp.add({
                Entry: (context) => {
                    return (
                        context.column(context.node.parent.from) + context.unit
                    );
                },
                FieldValue: (context) => {
                    return (
                        context.column(context.node.parent.from) + context.unit
                    );
                },
            }),
        ],
    }),
    languageData: {
        closeBrackets: { brackets: ["{", "\'", '"'] },
        commentTokens: { line: "%" },
    },
});

/// BibLaTeX Language configuration as a [dialect](https://lezer.codemirror.net/docs/ref/#lr.ParserConfig.dialect) of [BibTeX](#lang-bibtex.bibtexLanguage).
export const biblatexLanguage = bibtexLanguage.configure(
    { dialect: "biblatex" },
    "BibLaTeX",
);

/// [BibTeX](#lang-bibtex.bibtexLanguage) language support with [BibLaTeX](#lang-bibtex.biblatexLanguage) dialect support, autocompletion [configuration](#lang-bibtex.bibtexCompletion), and [snippets](#autocomplete.snippet) for both BibTeX and BibLaTeX that are suggested based on the editor [context](#autocomplete.CompletionContext).
///
/// There are configuration options for the following:
/// - **BibTeX** vs **BibLaTeX** language support:
///     - default: `biblatex: false`
///     - defaults to BibTeX
/// - **Snippet Smart-Suggestion:**
///     - default: `smartSuggest: true`
///     - The smart-suggestion feature only suggests snippets for bibliography `entries` (i.e. `@article = {...}`) when the user *is not* currently editing an entry and only suggests snippets for bibliography `fields` (i.e. `author = {Donald Knuth}`) when the user *is* currently editing an entry.
/// - **Opinionated Snippets**:
///     - default: `snippetRecs: true`
///     - Snippets have been scaffolded as per the current [BibTeX](https://ctan.org/ctan-ann/id/mailman.3109.1292253131.2307.ctan-ann@dante.de)/[BibLaTeX](https://ctan.org/ctan-ann/id/mailman.404.1656879977.32352.ctan-ann@ctan.org) specs. The snippet [render config](#autocomplete.CompletionSection), exclusion of certain snippets, and entry snippets' suggestion of recommendation/optional fields are done in an [opinionated](https://www.citedrive.com/en/blog/codemirror-bibtex-plugin) manner ([suggestions](https://github.com/citedrive/codemirror-lang-bibtex/issues) are welcome!).
/// - **Automatic Cursor Placement**:
///     - default: `autoCursor: true`
///     - Automatically place the cursor in ideal location(s) when expanding a snippet. This, as well, is [opinionated](https://www.citedrive.com/en/blog/codemirror-bibtex-plugin).
///     - Please note that this feature relies on the cursor state (which is tracked by [EditorState](#state.EditorState)). When overwriting the EditorState (in a non user-input related manner, i.e. via a formatting plugin), the future cursor locations do not always persist, leading to a clunky (or sometimes fully inoperable) experience.
///     - Thus, if your CodeMirror implementation relies heavily on modifying/overwriting EditorState, I would recommend testing both with and without this feature, to see which works best for your use-case.
///     - _(As an aside: I have some ideas on how to fix this issue, but I have just started a new semester at uni and will likely not have much time to work on the plugin for the next few months. - Vai)_
/// - **Syntax Linting**:
///     - default: `syntaxLinter: true`
///     - Invalid BibTeX (and BibLaTeX) syntax is underlined in red and a warning is issued, thanks to [bibtex-tidy](https://github.com/flamingtempura/bibtex-tidy).
/// - **Custom Keywords**:
///     - default: `keywords: []`
///     - Users can specify custom keywords/values that will be auto-suggested when within a `FieldValue` syntax node.
/// - **Suppress Comments**:
///     - default: `suppressComments: false`
///     - When enabled, suppresses inline comments like "% Recommended Fields:" and "% Optional Fields:" in generated snippets.
export function bibtex(
    config: {
        biblatex?: boolean;
        smartSuggest?: boolean;
        snippetRecs?: boolean;
        autoCursor?: boolean;
        syntaxLinter?: boolean;
        keywords?: readonly string[];
        suppressComments?: boolean;
    } = {},
) {
    // allow user to only specify config options that they care about
    let userConfig = {
        biblatex: false,
        smartSuggest: true,
        snippetRecs: true,
        autoCursor: true,
        syntaxLinter: true,
        keywords: [],
        suppressComments: false,
        ...config,
    };

    // create snippets
    const bibtexEntrySnippets = bibtexEntries.map((entry) =>
        createEntry(
            entry.name,
            entry.type,
            entry.description,
            entry.fields,
            userConfig.snippetRecs,
            userConfig.autoCursor,
            userConfig.suppressComments,
        ),
    );
    const bibtexFieldSnippets = bibtexFields.map((field) =>
        createField(
            field.name,
            field.type,
            field.description,
            userConfig.autoCursor,
        ),
    );
    const biblatexEntrySnippets = biblatexEntries.map((entry) =>
        createEntry(
            entry.name,
            entry.type,
            entry.description,
            entry.fields,
            userConfig.snippetRecs,
            userConfig.autoCursor,
            userConfig.suppressComments,
        ),
    );
    const biblatexFieldSnippets = biblatexFields.map((field) =>
        createField(
            field.name,
            field.type,
            field.description,
            userConfig.autoCursor,
        ),
    );
    const userKeywordSnippets = userConfig.keywords.map((keyword) =>
        createKeyword(keyword),
    );

    const bibtexSnippets = {
        entries: bibtexEntrySnippets,
        fields: bibtexFieldSnippets,
        keywords: userKeywordSnippets,
        all: bibtexEntrySnippets.concat(
            bibtexFieldSnippets,
            userKeywordSnippets,
        ),
    };
    const biblatexSnippets = {
        entries: biblatexEntrySnippets,
        fields: biblatexFieldSnippets,
        keywords: userKeywordSnippets,
        all: biblatexEntrySnippets.concat(
            biblatexFieldSnippets,
            userKeywordSnippets,
        ),
    };

    // setup language/autocompletion behavior based on user config
    let bibLanguage = userConfig.biblatex ? biblatexLanguage : bibtexLanguage;
    let bibSnippets = userConfig.biblatex ? biblatexSnippets : bibtexSnippets;
    let bibSnippetExtension = userConfig.smartSuggest
        ? [
              bibLanguage.data.of({
                  autocomplete: ifIn(
                      ["FieldType"],
                      ifIn(
                          ["EntryValue"],
                          completeFromList(bibSnippets.fields),
                      ),
                  ),
              }),
              bibLanguage.data.of({
                  autocomplete: ifNotIn(
                      ["EntryValue"],
                      completeFromList(bibSnippets.entries),
                  ),
              }),
              bibLanguage.data.of({
                  autocomplete: ifIn(
                      ["FieldValue"],
                      completeFromList(bibSnippets.keywords),
                  ),
              }),
          ]
        : [
              bibLanguage.data.of({
                  autocomplete: completeFromList(bibSnippets.all),
              }),
          ];

    let bibExtensions = userConfig.syntaxLinter
        ? [bibtexLinter, bibtexCompletion, bibSnippetExtension]
        : [bibtexCompletion, bibSnippetExtension];

    // actually create the language object
    return new LanguageSupport(bibLanguage, bibExtensions);
}
