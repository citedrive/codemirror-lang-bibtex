import { sections } from "./snippets";

// ENTRIES
export const bibtexEntries = [
    {
        name: "article",
        type: sections.Entry,
        description: "An article from a journal or magazine.",
        fields: {
            recommended: [
                "author",
                "title",
                "year",
                "month",
                "journal",
                "publisher",
                "doi",
                "url",
            ],
            optional: ["volume", "number", "pages", "issn"],
            required: ["author", "title", "journal", "year"],
        },
    },
    {
        name: "book",
        type: sections.Entry,
        description: "A book with a publisher.",
        fields: {
            recommended: [
                "author",
                "title",
                "year",
                "month",
                "publisher",
                "address",
                "isbn",
            ],
            optional: ["volume", "number", "pages", "series", "edition"],
            required: ["author", "editor", "title", "publisher", "year"],
        },
    },
    {
        name: "booklet",
        type: sections.Entry,
        description:
            "A work that is printed and bound, but without a named publisher or sponsoring institution.",
        fields: {
            recommended: ["author", "title", "year", "month", "isbn"],
            optional: ["volume", "number", "pages", "series", "edition"],
            required: ["title"],
        },
    },
    {
        name: "conference",
        type: sections.Entry,
        description: "An article in a conference proceedings.",
        fields: {
            recommended: [
                "author",
                "title",
                "year",
                "month",
                "organization",
                "address",
                "doi",
            ],
            optional: ["volume", "number", "pages", "issn"],
            required: ["author", "title", "booktitle", "year"],
        },
    },
    {
        name: "inbook",
        type: sections.Entry,
        description:
            "A part of a book, which may be a chapter (or type: section or whatever) and/or a range of pages.",
        fields: {
            recommended: [
                "author",
                "title",
                "year",
                "month",
                "publisher",
                "address",
                "isbn",
            ],
            optional: ["volume", "number", "pages", "series", "edition"],
            required: [
                "author/editor",
                "title",
                "chapter/pages",
                "publisher",
                "year",
            ],
        },
    },
    {
        name: "incollection",
        type: sections.Entry,
        description: "A part of a book having its own title.",
        fields: {
            recommended: [
                "author",
                "title",
                "booktitle",
                "year",
                "month",
                "publisher",
                "address",
                "isbn",
            ],
            optional: ["volume", "number", "pages", "series", "edition"],
            required: ["author", "title", "booktitle", "publisher", "year"],
        },
    },
    {
        name: "inproceedings",
        type: sections.Entry,
        description: "An article in a conference proceedings.",
        fields: {
            recommended: [
                "author",
                "title",
                "year",
                "month",
                "organization",
                "address",
                "doi",
            ],
            optional: ["volume", "number", "pages", "issn"],
            required: ["author", "title", "booktitle", "year"],
        },
    },
    {
        name: "manual",
        type: sections.Entry,
        description: "Technical documentation.",
        fields: {
            recommended: ["title", "year", "month", "institution", "doi"],
            optional: ["edition", "pages", "issn"],
            required: ["title"],
        },
    },
    {
        name: "mastersthesis",
        type: sections.Entry,
        description: "A Master’s thesis.",
        fields: {
            recommended: ["title", "year", "month", "institution", "doi"],
            optional: ["pages", "issn"],
            required: ["author", "title", "school", "year"],
        },
    },
    {
        name: "misc",
        type: sections.Entry,
        description: "Use this type when nothing else fits.",
        fields: {
            recommended: ["title", "year", "month"],
            optional: ["url"],
            required: [],
        },
    },
    {
        name: "phdthesis",
        type: sections.Entry,
        description: "A PhD thesis.",
        fields: {
            recommended: ["title", "year", "month", "institution", "doi"],
            optional: ["pages", "issn"],
            required: ["author", "title", "school", "year"],
        },
    },
    {
        name: "proceedings",
        type: sections.Entry,
        description: "The proceedings of a conference.",
        fields: {
            recommended: ["year", "month", "organization", "address", "doi"],
            optional: ["volume", "number", "issn"],
            required: ["title", "year"],
        },
    },
    {
        name: "techreport",
        type: sections.Entry,
        description: "A report published by a school or other institution.",
        fields: {
            recommended: ["title", "year", "month", "institution", "doi"],
            optional: ["pages", "issn"],
            required: ["author", "title", "institution", "year"],
        },
    },
    {
        name: "unpublished",
        type: sections.Entry,
        description:
            "A document having an author and title, but not formally published.",
        fields: {
            recommended: ["author", "title", "year", "month"],
            optional: ["note"],
            required: ["author", "title", "note"],
        },
    },
];

// FIELDS
export const bibtexFields = [
    {
        name: "address",
        type: sections.Field,
        description:
            "The address of the publisher or other type of institution.",
    },
    { name: "annote", type: sections.Field, description: "An annotation." },
    {
        name: "author",
        type: sections.Field,
        description: "The name(s) of the author(s).",
    },
    {
        name: "booktitle",
        type: sections.Field,
        description: "The title of the book.",
    },
    {
        name: "chapter",
        type: sections.Field,
        description: "The chapter (or section or whatever) number.",
    },
    {
        name: "crossref",
        type: sections.Field,
        description: "The database key of the entry being cross referenced.",
    },
    {
        name: "doi",
        type: sections.Field,
        description: "The Digital Object Identifier of the work.",
    },
    {
        name: "edition",
        type: sections.Field,
        description: "The edition of a book, as an ordinal.",
    },
    {
        name: "editor",
        type: sections.Field,
        description: "The name(s) of the editor(s).",
    },
    {
        name: "email",
        type: sections.Field,
        description: "The email address(es) of the author(s).",
    },
    {
        name: "howpublished",
        type: sections.Field,
        description: "How something strange has been published.",
    },
    {
        name: "institution",
        type: sections.Field,
        description: "The sponsoring institution of a technical report.",
    },
    {
        name: "isbn",
        type: sections.Field,
        description: "The International Standard Book Number of the work.",
    },
    {
        name: "issn",
        type: sections.Field,
        description:
            "The International Standard Serial Number of a periodical.",
    },
    { name: "journal", type: sections.Field, description: "The journal name." },
    {
        name: "key",
        type: sections.Field,
        description: "The citation key (for use in a `\\cite{}` command).",
    },
    {
        name: "keywords",
        type: sections.Field,
        description: "Keywords that describe the work being cited.",
    },
    {
        name: "month",
        type: sections.Field,
        description: "The month in which the work was published or written.",
    },
    {
        name: "note",
        type: sections.Field,
        description: "Any additional information that can help the reader.",
    },
    {
        name: "number",
        type: sections.Field,
        description:
            "The number of a journal, magazine, technical report, or of a work in a series.",
    },
    {
        name: "organization",
        type: sections.Field,
        description:
            "The organization that sponsors a conference or that publishes a manual.",
    },
    {
        name: "pages",
        type: sections.Field,
        description: "One or more page numbers or range of numbers.",
    },
    {
        name: "publisher",
        type: sections.Field,
        description: "The publisher’s name.",
    },
    {
        name: "school",
        type: sections.Field,
        description: "The name of the school where a thesis was written.",
    },
    {
        name: "series",
        type: sections.Field,
        description: "The name of a series or set of books.",
    },
    { name: "title", type: sections.Field, description: "The work’s title." },
    {
        name: "type",
        type: sections.Field,
        description: "The type of a technical report.",
    },
    {
        name: "url",
        type: sections.Field,
        description: "The url of an online publication.",
    },
    {
        name: "volume",
        type: sections.Field,
        description: "The volume of a journal or multivolume book.",
    },
    {
        name: "year",
        type: sections.Field,
        description: "The year of publication or written.",
    },
];
