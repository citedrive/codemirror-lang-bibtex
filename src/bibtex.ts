import {createEntry, createField} from "./snippets"

// ENTRIES
export const bibtexEntrySnippets = [
    createEntry("article", "Entry", "An article from a journal or magazine.", ["author", "title", "journal", "year"]),
    createEntry("book", "Entry", "A book with a publisher.", ["author", "editor", "title", "publisher", "year"]),
    createEntry("booklet", "Entry", "A work that is printed and bound, but without a named publisher or sponsoring institution.", ["title"]),
    createEntry("conference", "Entry", "An article in a conference proceedings.", ["author", "title", "booktitle", "year"]),
    createEntry("inbook", "Entry", "A part of a book, which may be a chapter (or section or whatever) and/or a range of pages.", ["author/editor", "title", "chapter/pages", "publisher", "year"]),
    createEntry("incollection", "Entry", "A part of a book having its own title.", ["author", "title", "booktitle", "publisher", "year"]),
    createEntry("inproceedings", "Entry", "An article in a conference proceedings.", ["author", "title", "booktitle", "year"]),
    createEntry("manual", "Entry", "Technical documentation.", ["title"]),
    createEntry("mastersthesis", "Entry", "A Master’s thesis.", ["author", "title", "school", "year"]),
    createEntry("misc", "Entry", "Use this type when nothing else fits.", []),
    createEntry("phdthesis", "Entry", "A PhD thesis.", ["author", "title", "school", "year"]),
    createEntry("proceedings", "Entry", "The proceedings of a conference.", ["title", "year"]),
    createEntry("techreport", "Entry", "A report published by a school or other institution.", ["author", "title", "institution", "year"]),
    createEntry("unpublished", "Entry", "A document having an author and title, but not formally published.", ["author", "title", "note"]),
];

// FIELDS
export const bibtexFieldSnippets = [
    createField("address", "Field", "The address of the publisher or other type of institution."),
    createField("annote", "Field", "An annotation."),
    createField("author", "Field", "The name(s) of the author(s)."),
    createField("booktitle", "Field", "The title of the book."),
    createField("chapter", "Field", "The chapter (or section or whatever) number."),
    createField("crossref", "Field", "The database key of the entry being cross referenced."),
    createField("doi", "Field", "The Digital Object Identifier of the work."),
    createField("edition", "Field", "The edition of a book, as an ordinal."),
    createField("editor", "Field", "The name(s) of the editor(s)."),
    createField("email", "Field", "The email address(es) of the author(s)."),
    createField("howpublished", "Field", "How something strange has been published."),
    createField("institution", "Field", "The sponsoring institution of a technical report."),
    createField("isbn", "Field", "The International Standard Book Number of the work."),
    createField("journal", "Field", "The journal name."),
    createField("key", "Field", "The citation key (for use in a `\\cite{}` command)."),
    createField("keywords", "Field", "Keywords that describe the work being cited."),
    createField("month", "Field", "The month in which the work was published or written."),
    createField("note", "Field", "Any additional information that can help the reader."),
    createField("number", "Field", "The number of a journal, magazine, technical report, or of a work in a series."),
    createField("organization", "Field", "The organization that sponsors a conference or that publishes a manual."),
    createField("pages", "Field", "One or more page numbers or range of numbers."),
    createField("publisher", "Field", "The publisher’s name."),
    createField("school", "Field", "The name of the school where a thesis was written."),
    createField("series", "Field", "The name of a series or set of books."),
    createField("title", "Field", "The work’s title."),
    createField("type", "Field", "The type of a technical report."),
    createField("volume", "Field", "The volume of a journal or multivolume book."),
    createField("year", "Field", "The year of publication or written.")
];

/// BibTeX autocomplete [snippets](#autocomplete.snippet)
export const bibtexSnippets = bibtexEntrySnippets.concat(bibtexFieldSnippets);
