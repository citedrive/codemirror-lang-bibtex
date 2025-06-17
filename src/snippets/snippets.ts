import {bibtexEntries, bibtexFields} from "./bibtex"
import {biblatexEntries, biblatexFields} from "./biblatex"
import {createEntry, createField} from "./helpers"

// NOTE: temp until config for recommended-optional/default implemented
let snipRecs = true;

const bibtexEntrySnippets = bibtexEntries.map(entry => createEntry(entry.name, entry.type, entry.description, entry.fields, snipRecs));
const bibtexFieldSnippets = bibtexFields.map(field => createField(field.name, field.type, field.description));

const biblatexEntrySnippets = bibtexEntrySnippets; // NOTE: temporary
const biblatexFieldSnippets = biblatexFields.map(field => createField(field.name, field.type, field.description));

/// A complete ([opinionated](https://www.citedrive.com/en/blog/codemirror-bibtex-plugin)) collection of BibTeX autocomplete [snippets](#autocomplete.snippet).
export const bibtexSnippets = {
    entries: bibtexEntrySnippets,
    fields: bibtexFieldSnippets,
    all: bibtexEntrySnippets.concat(bibtexFieldSnippets)
};

/// A complete ([opinionated](https://www.citedrive.com/en/blog/codemirror-bibtex-plugin)) collection of BibLaTeX autocomplete [snippets](#autocomplete.snippet).
export const biblatexSnippets = {
    entries: biblatexEntrySnippets,
    fields: biblatexFieldSnippets,
    all: biblatexEntrySnippets.concat(biblatexFieldSnippets)
};
