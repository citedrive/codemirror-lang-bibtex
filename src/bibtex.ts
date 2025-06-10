import {createEntry, createField} from "./snippets"

// create BibTeX autocomplete [snippets](#autocomplete.snippet)

// ENTRIES
export const bibtexEntrySnippets = [
    createEntry("article", "An article from a journal or magazine.", ["author", "title", "journal", "year"]),
    createEntry("book", "A book with a publisher.", ["author", "editor", "title", "publisher", "year"]),
    createEntry("booklet", "A work that is printed and bound, but without a named publisher or sponsoring institution.", ["title"]),
    createEntry("conference", "An article in a conference proceedings.", ["author", "title", "booktitle", "year"]),
    createEntry("inbook", "A part of a book, which may be a chapter (or section or whatever) and/or a range of pages.", ["author/editor", "title", "chapter/pages", "publisher", "year"]),
    createEntry("incollection", "A part of a book having its own title.", ["author", "title", "booktitle", "publisher", "year"]),
    createEntry("inproceedings", "An article in a conference proceedings.", ["author", "title", "booktitle", "year"]),
    createEntry("manual", "Technical documentation.", ["title"]),
    createEntry("mastersthesis", "A Master’s thesis.", ["author", "title", "school", "year"]),
    createEntry("misc", "Use this type when nothing else fits.", []),
    createEntry("phdthesis", "A PhD thesis.", ["author", "title", "school", "year"]),
    createEntry("proceedings", "The proceedings of a conference.", ["title", "year"]),
    createEntry("techreport", "A report published by a school or other institution.", ["author", "title", "institution", "year"]),
    createEntry("unpublished", "A document having an author and title, but not formally published.", ["author", "title", "note"]),
];

// FIELDS
export const bibtexFieldSnippets = [
    createField("address", "The address of the publisher or other type of institution."),
    createField("annote", "An annotation."),
    createField("author", "The name(s) of the author(s)."),
    createField("booktitle", "The title of the book."),
    createField("chapter", "The chapter (or section or whatever) number."),
    createField("crossref", "The database key of the entry being cross referenced."),
    createField("doi", "The Digital Object Identifier of the work."),
    createField("edition", "The edition of a book, as an ordinal."),
    createField("editor", "The name(s) of the editor(s)."),
    createField("email", "The email address(es) of the author(s)."),
    createField("howpublished", "How something strange has been published."),
    createField("institution", "The sponsoring institution of a technical report."),
    createField("isbn", "The International Standard Book Number of the work."),
    createField("journal", "The journal name."),
    createField("key", "The citation key (for use in a `\\cite{}` command)."),
    createField("keywords", "Keywords that describe the work being cited."),
    createField("month", "The month in which the work was published or written."),
    createField("note", "Any additional information that can help the reader."),
    createField("number", "The number of a journal, magazine, technical report, or of a work in a series."),
    createField("organization", "The organization that sponsors a conference or that publishes a manual."),
    createField("pages", "One or more page numbers or range of numbers."),
    createField("publisher", "The publisher’s name."),
    createField("school", "The name of the school where a thesis was written."),
    createField("series", "The name of a series or set of books."),
    createField("title", "The work’s title."),
    createField("type", "The type of a technical report."),
    createField("volume", "The volume of a journal or multivolume book."),
    createField("year", "The year of publication or written.")
];

export const bibtexSnippets = bibtexEntrySnippets.concat(bibtexFieldSnippets);
