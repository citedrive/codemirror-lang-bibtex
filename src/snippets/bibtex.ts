import {sections, createEntry, createField} from "./snippets"

// ENTRIES
export const bibtexEntrySnippets = [
    createEntry("article", sections.Entry, "An article from a journal or magazine.", ["author", "title", "journal", "year"]),
    createEntry("book", sections.Entry, "A book with a publisher.", ["author", "editor", "title", "publisher", "year"]),
    createEntry("booklet", sections.Entry, "A work that is printed and bound, but without a named publisher or sponsoring institution.", ["title"]),
    createEntry("conference", sections.Entry, "An article in a conference proceedings.", ["author", "title", "booktitle", "year"]),
    createEntry("inbook", sections.Entry, "A part of a book, which may be a chapter (or section or whatever) and/or a range of pages.", ["author/editor", "title", "chapter/pages", "publisher", "year"]),
    createEntry("incollection", sections.Entry, "A part of a book having its own title.", ["author", "title", "booktitle", "publisher", "year"]),
    createEntry("inproceedings", sections.Entry, "An article in a conference proceedings.", ["author", "title", "booktitle", "year"]),
    createEntry("manual", sections.Entry, "Technical documentation.", ["title"]),
    createEntry("mastersthesis", sections.Entry, "A Master’s thesis.", ["author", "title", "school", "year"]),
    createEntry("misc", sections.Entry, "Use this type when nothing else fits.", []),
    createEntry("phdthesis", sections.Entry, "A PhD thesis.", ["author", "title", "school", "year"]),
    createEntry("proceedings", sections.Entry, "The proceedings of a conference.", ["title", "year"]),
    createEntry("techreport", sections.Entry, "A report published by a school or other institution.", ["author", "title", "institution", "year"]),
    createEntry("unpublished", sections.Entry, "A document having an author and title, but not formally published.", ["author", "title", "note"]),
];

// FIELDS
export const bibtexFieldSnippets = [
    createField("address", sections.Field, "The address of the publisher or other type of institution."),
    createField("annote", sections.Field, "An annotation."),
    createField("author", sections.Field, "The name(s) of the author(s)."),
    createField("booktitle", sections.Field, "The title of the book."),
    createField("chapter", sections.Field, "The chapter (or section or whatever) number."),
    createField("crossref", sections.Field, "The database key of the entry being cross referenced."),
    createField("doi", sections.Field, "The Digital Object Identifier of the work."),
    createField("edition", sections.Field, "The edition of a book, as an ordinal."),
    createField("editor", sections.Field, "The name(s) of the editor(s)."),
    createField("email", sections.Field, "The email address(es) of the author(s)."),
    createField("howpublished", sections.Field, "How something strange has been published."),
    createField("institution", sections.Field, "The sponsoring institution of a technical report."),
    createField("isbn", sections.Field, "The International Standard Book Number of the work."),
    createField("issn", sections.Field, "The International Standard Serial Number of a periodical."),
    createField("journal", sections.Field, "The journal name."),
    createField("key", sections.Field, "The citation key (for use in a `\\cite{}` command)."),
    createField("keywords", sections.Field, "Keywords that describe the work being cited."),
    createField("month", sections.Field, "The month in which the work was published or written."),
    createField("note", sections.Field, "Any additional information that can help the reader."),
    createField("number", sections.Field, "The number of a journal, magazine, technical report, or of a work in a series."),
    createField("organization", sections.Field, "The organization that sponsors a conference or that publishes a manual."),
    createField("pages", sections.Field, "One or more page numbers or range of numbers."),
    createField("publisher", sections.Field, "The publisher’s name."),
    createField("school", sections.Field, "The name of the school where a thesis was written."),
    createField("series", sections.Field, "The name of a series or set of books."),
    createField("title", sections.Field, "The work’s title."),
    createField("type", sections.Field, "The type of a technical report."),
    createField("volume", sections.Field, "The volume of a journal or multivolume book."),
    createField("year", sections.Field, "The year of publication or written.")
];

/// A complete ([opinionated](https://www.citedrive.com/en/blog/codemirror-bibtex-plugin)) collection of BibTeX autocomplete [snippets](#autocomplete.snippet).
export const bibtexSnippets = bibtexEntrySnippets.concat(bibtexFieldSnippets);
