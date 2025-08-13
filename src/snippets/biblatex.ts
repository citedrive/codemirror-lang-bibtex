import { sections } from "./snippets";

// ENTRIES
export const biblatexEntries = [
    // Recommended Entries
    {
        name: "article",
        type: sections.Recommended,
        description: "An article in a periodical.",
        fields: {
            recommended: ["author", "title", "journaltitle", "date"],
            optional: [
                "subtitle",
                "volume",
                "number",
                "pages",
                "eid",
                "note",
                "issn",
                "doi",
                "url",
                "eprint",
            ],
            required: ["author", "title", "journaltitle", "date"],
        },
    },
    {
        name: "book",
        type: sections.Recommended,
        description: "A single-volume book.",
        fields: {
            recommended: [
                "author",
                "editor",
                "title",
                "publisher",
                "location",
                "date",
            ],
            optional: [
                "subtitle",
                "edition",
                "series",
                "volume",
                "number",
                "isbn",
                "note",
                "doi",
                "url",
            ],
            required: ["author", "title", "date"],
        },
    },
    {
        name: "booklet",
        type: sections.Recommended,
        description: "A book-like work without a formal publisher.",
        fields: {
            recommended: ["author", "title", "howpublished", "date"],
            optional: ["subtitle", "address", "edition", "note", "url", "doi"],
            required: ["author", "title", "date"],
        },
    },
    {
        name: "collection",
        type: sections.Recommended,
        description: "A single-volume collection.",
        fields: {
            recommended: ["editor", "title", "publisher", "location", "date"],
            optional: [
                "subtitle",
                "edition",
                "series",
                "volume",
                "number",
                "note",
                "doi",
                "url",
            ],
            required: ["editor", "title", "date"],
        },
    },
    {
        name: "dataset",
        type: sections.Recommended,
        description: "A data set or similar collection of raw data.",
        fields: {
            recommended: ["editor", "title", "date"],
            optional: [
                "subtitle",
                "version",
                "doi",
                "url",
                "note",
                "archive",
                "location",
            ],
            required: ["editor", "title", "date"],
        },
    },
    {
        name: "manual",
        type: sections.Recommended,
        description: "Technical or other documentation.",
        fields: {
            recommended: ["author", "title", "date"],
            optional: [
                "subtitle",
                "edition",
                "organization",
                "address",
                "note",
                "doi",
                "url",
            ],
            required: ["author", "title", "date"],
        },
    },
    {
        name: "online",
        type: sections.Recommended,
        description: "An online resource.",
        fields: {
            recommended: ["author", "title", "date", "url"],
            optional: [
                "subtitle",
                "organization",
                "urldate",
                "note",
                "doi",
                "language",
            ],
            required: ["author", "title", "date", "url"],
        },
    },
    {
        name: "patent",
        type: sections.Recommended,
        description: "A patent or patent request.",
        fields: {
            recommended: ["author", "title", "number", "date"],
            optional: [
                "subtitle",
                "holder",
                "location",
                "day",
                "note",
                "doi",
                "url",
            ],
            required: ["author", "title", "number", "date"],
        },
    },
    {
        name: "periodical",
        type: sections.Recommended,
        description: "A complete issue of a periodical.",
        fields: {
            recommended: ["editor", "title", "publisher", "location", "date"],
            optional: [
                "subtitle",
                "volume",
                "number",
                "series",
                "note",
                "issn",
                "doi",
                "url",
            ],
            required: ["editor", "title", "date"],
        },
    },
    {
        name: "proceedings",
        type: sections.Recommended,
        description: "A single-volume conference proceedings.",
        fields: {
            recommended: ["title", "publisher", "location", "date"],
            optional: [
                "subtitle",
                "editor",
                "organization",
                "series",
                "volume",
                "number",
                "edition",
                "note",
                "doi",
                "url",
            ],
            required: ["title", "date"],
        },
    },
    {
        name: "reference",
        type: sections.Recommended,
        description: "A single-volume work of reference.",
        fields: {
            recommended: ["editor", "title", "publisher", "location", "date"],
            optional: [
                "subtitle",
                "edition",
                "series",
                "volume",
                "number",
                "note",
                "doi",
                "url",
            ],
            required: ["editor", "title", "date"],
        },
    },
    {
        name: "report",
        type: sections.Recommended,
        description: "A report of some kind published by an institution.",
        fields: {
            recommended: [
                "author",
                "title",
                "type",
                "institution",
                "location",
                "date",
            ],
            optional: ["subtitle", "series", "number", "note", "doi", "url"],
            required: ["author", "title", "type", "institution", "date"],
        },
    },
    {
        name: "software",
        type: sections.Recommended,
        description: "A piece of computer software.",
        fields: {
            recommended: ["author", "title", "version", "date"],
            optional: [
                "subtitle",
                "publisher",
                "location",
                "doi",
                "url",
                "note",
            ],
            required: ["author", "title", "date"],
        },
    },
    {
        name: "thesis",
        type: sections.Recommended,
        description: "A thesis written for an educational institution.",
        fields: {
            recommended: [
                "author",
                "title",
                "type",
                "institution",
                "location",
                "date",
            ],
            optional: ["subtitle", "series", "address", "note", "doi", "url"],
            required: ["author", "title", "type", "institution", "date"],
        },
    },

    // Optional Entries
    {
        name: "artwork",
        type: sections.Optional,
        description: "A work of the visual arts.",
        fields: {
            recommended: ["author", "title", "date"],
            optional: [
                "subtitle",
                "institution",
                "location",
                "url",
                "note",
                "doi",
            ],
            required: ["author", "title", "date"],
        },
    },
    {
        name: "audio",
        type: sections.Optional,
        description: "An audio recording.",
        fields: {
            recommended: ["author", "title", "date"],
            optional: [
                "subtitle",
                "medium",
                "publisher",
                "location",
                "doi",
                "url",
                "note",
            ],
            required: ["author", "title", "date"],
        },
    },
    {
        name: "bookinbook",
        type: sections.Optional,
        description:
            "An <@inbook> that was originally published as its own work.",
        fields: {
            recommended: [
                "author",
                "title",
                "booktitle",
                "publisher",
                "location",
                "date",
            ],
            optional: [
                "subtitle",
                "series",
                "volume",
                "number",
                "edition",
                "note",
                "url",
                "doi",
            ],
            required: ["author", "title", "booktitle", "date"],
        },
    },
    {
        name: "commentary",
        type: sections.Optional,
        description: "A legal or other commentary.",
        fields: {
            recommended: ["author", "title", "date"],
            optional: [
                "subtitle",
                "journaltitle",
                "volume",
                "number",
                "pages",
                "note",
                "doi",
                "url",
            ],
            required: ["author", "title", "date"],
        },
    },
    {
        name: "image",
        type: sections.Optional,
        description: "An image or similar media.",
        fields: {
            recommended: ["author", "title", "date"],
            optional: ["subtitle", "medium", "location", "url", "doi", "note"],
            required: ["author", "title", "date"],
        },
    },
    {
        name: "inbook",
        type: sections.Optional,
        description: "A part of a book which is its own titled work.",
        fields: {
            recommended: [
                "author",
                "title",
                "booktitle",
                "publisher",
                "location",
                "date",
            ],
            optional: [
                "subtitle",
                "volume",
                "part",
                "pages",
                "edition",
                "series",
                "doi",
                "url",
                "note",
            ],
            required: ["author", "title", "booktitle", "date"],
        },
    },
    {
        name: "incollection",
        type: sections.Optional,
        description:
            "A contribution to a collection which is its own titled work.",
        fields: {
            recommended: [
                "author",
                "title",
                "editor",
                "booktitle",
                "publisher",
                "location",
                "date",
            ],
            optional: [
                "subtitle",
                "series",
                "volume",
                "number",
                "edition",
                "pages",
                "note",
                "doi",
                "url",
            ],
            required: ["author", "title", "editor", "booktitle", "date"],
        },
    },
    {
        name: "inproceedings",
        type: sections.Optional,
        description: "An article in a conference proceedings.",
        fields: {
            recommended: [
                "author",
                "title",
                "booktitle",
                "publisher",
                "location",
                "date",
            ],
            optional: [
                "subtitle",
                "editor",
                "pages",
                "organization",
                "series",
                "volume",
                "number",
                "note",
                "doi",
                "url",
            ],
            required: ["author", "title", "booktitle", "date"],
        },
    },
    {
        name: "inreference",
        type: sections.Optional,
        description: "An article in a work of reference.",
        fields: {
            recommended: [
                "editor",
                "title",
                "booktitle",
                "publisher",
                "location",
                "date",
            ],
            optional: [
                "subtitle",
                "series",
                "volume",
                "number",
                "edition",
                "pages",
                "note",
                "doi",
                "url",
            ],
            required: ["editor", "title", "date"],
        },
    },
    {
        name: "jurisdiction",
        type: sections.Optional,
        description: "A court decision, recording, or similar.",
        fields: {
            recommended: ["author", "title", "date", "court"],
            optional: ["volume", "reporter", "pages", "url", "note"],
            required: ["author", "title", "date"],
        },
    },
    {
        name: "legal",
        type: sections.Optional,
        description: "A legal document such as a treaty.",
        fields: {
            recommended: ["organization", "title", "date"],
            optional: [
                "subtitle",
                "type",
                "location",
                "number",
                "url",
                "doi",
                "note",
            ],
            required: ["organization", "title", "date"],
        },
    },
    {
        name: "legislation",
        type: sections.Optional,
        description: "A law, bill, proposal, or similar.",
        fields: {
            recommended: ["organization", "title", "date"],
            optional: ["subtitle", "type", "number", "location", "url", "note"],
            required: ["organization", "title", "date"],
        },
    },
    {
        name: "letter",
        type: sections.Optional,
        description: "Personal correspondence.",
        fields: {
            recommended: ["author", "title", "date"],
            optional: ["recipient", "location", "venue", "url", "doi", "note"],
            required: ["author", "title", "date"],
        },
    },
    {
        name: "misc",
        type: sections.Special,
        description:
            "A fallback for entries which do not fit in other categories.",
        fields: {
            recommended: ["author", "title", "date"],
            optional: ["howpublished", "note", "url", "doi"],
            required: ["author", "title", "date"],
        },
    },
    {
        name: "movie",
        type: sections.Optional,
        description: "A motion picture.",
        fields: {
            recommended: ["publisher", "title", "date"],
            optional: [
                "director",
                "producer",
                "location",
                "medium",
                "note",
                "url",
                "doi",
            ],
            required: ["publisher", "title", "date"],
        },
    },
    {
        name: "music",
        type: sections.Optional,
        description: "A musical recording.",
        fields: {
            recommended: ["publisher", "title", "date"],
            optional: [
                "composer",
                "performer",
                "location",
                "medium",
                "note",
                "url",
                "doi",
            ],
            required: ["publisher", "title", "date"],
        },
    },
    {
        name: "mvbook",
        type: sections.Optional,
        description: "A multi-volume book.",
        fields: {
            recommended: ["author", "title", "series", "volume", "date"],
            optional: [
                "publisher",
                "location",
                "edition",
                "note",
                "doi",
                "url",
            ],
            required: ["author", "title", "date"],
        },
    },
    {
        name: "mvcollection",
        type: sections.Optional,
        description: "A multi-volume collection.",
        fields: {
            recommended: ["editor", "title", "series", "volume", "date"],
            optional: [
                "publisher",
                "location",
                "edition",
                "note",
                "doi",
                "url",
            ],
            required: ["editor", "title", "date"],
        },
    },
    {
        name: "mvproceedings",
        type: sections.Optional,
        description: "A multi-volume conference proceedings.",
        fields: {
            recommended: ["title", "series", "volume", "date"],
            optional: [
                "editor",
                "publisher",
                "location",
                "edition",
                "organization",
                "note",
                "doi",
                "url",
            ],
            required: ["title", "date"],
        },
    },
    {
        name: "mvreference",
        type: sections.Optional,
        description: "A multi-volume work of reference.",
        fields: {
            recommended: ["editor", "title", "series", "volume", "date"],
            optional: [
                "publisher",
                "location",
                "edition",
                "note",
                "doi",
                "url",
            ],
            required: ["editor", "title", "date"],
        },
    },
    {
        name: "performance",
        type: sections.Optional,
        description: "A work of the performing arts.",
        fields: {
            recommended: ["organization", "title", "date"],
            optional: [
                "location",
                "venue",
                "duration",
                "medium",
                "note",
                "url",
            ],
            required: ["organization", "title", "date"],
        },
    },
    {
        name: "review",
        type: sections.Optional,
        description: "A review of some other work.",
        fields: {
            recommended: ["author", "title", "journaltitle", "date"],
            optional: [
                "subtitle",
                "journal",
                "volume",
                "number",
                "pages",
                "doi",
                "url",
                "note",
            ],
            required: ["author", "title", "journaltitle", "date"],
        },
    },
    {
        name: "standard",
        type: sections.Optional,
        description:
            "A National or Institutional standard issued by a standards body.",
        fields: {
            recommended: ["organization", "title", "date", "number"],
            optional: ["series", "edition", "url", "doi", "note"],
            required: ["organization", "title", "date"],
        },
    },
    {
        name: "suppbook",
        type: sections.Optional,
        description: "Supplemental material in a book.",
        fields: {
            recommended: [
                "author",
                "title",
                "booktitle",
                "publisher",
                "location",
                "date",
            ],
            optional: [
                "subtitle",
                "series",
                "volume",
                "number",
                "edition",
                "note",
                "doi",
                "url",
            ],
            required: ["author", "title", "booktitle", "date"],
        },
    },
    {
        name: "suppcollection",
        type: sections.Optional,
        description: "Supplemental material in a collection.",
        fields: {
            recommended: ["editor", "title", "publisher", "location", "date"],
            optional: [
                "subtitle",
                "series",
                "volume",
                "number",
                "edition",
                "note",
                "doi",
                "url",
            ],
            required: ["editor", "title", "date"],
        },
    },
    {
        name: "suppperiodical",
        type: sections.Optional,
        description: "Supplemental material in a periodical.",
        fields: {
            recommended: [
                "editor",
                "title",
                "journaltitle",
                "volume",
                "number",
                "date",
            ],
            optional: ["subtitle", "series", "note", "doi", "url"],
            required: ["editor", "title", "date"],
        },
    },
    {
        name: "unpublished",
        type: sections.Optional,
        description: "A work which has not been formally published.",
        fields: {
            recommended: ["author", "title", "date", "note"],
            optional: ["subtitle", "location", "url", "doi"],
            required: ["author", "title", "date"],
        },
    },
    {
        name: "video",
        type: sections.Optional,
        description: "An audiovisual recording.",
        fields: {
            recommended: ["author", "title", "date"],
            optional: [
                "director",
                "producer",
                "location",
                "medium",
                "duration",
                "note",
                "url",
                "doi",
            ],
            required: ["author", "title", "date"],
        },
    },

    // Special Entries
    {
        name: "bibnote",
        type: sections.Special,
        description:
            "Used by the `notes2bib` package (and others) to place notes within the bibliography.",
        fields: {
            recommended: ["note"],
            optional: [],
            required: ["note"],
        },
    },
    {
        name: "custom",
        type: sections.Special,
        description: "Custom types for special bibliography styles.",
        fields: {
            recommended: [],
            optional: [],
            required: [],
        },
    },
    {
        name: "set",
        type: sections.Special,
        description: "An entry set.",
        fields: {
            recommended: ["entryset"],
            optional: [],
            required: ["entryset"],
        },
    },
    {
        name: "xdata",
        type: sections.Special,
        description:
            "Holds data which may be inherited by other entries using the <xdata> field.",
        fields: {
            recommended: [],
            optional: [],
            required: [],
        },
    },

    // Entry Aliases (mostly for backwards compatibility with BibTeX)
    {
        name: "conference",
        type: sections.Alias,
        description: "An alias for <@inproceedings>.",
        fields: {
            recommended: [
                "author",
                "title",
                "booktitle",
                "publisher",
                "location",
                "date",
            ],
            optional: [
                "subtitle",
                "editor",
                "series",
                "volume",
                "number",
                "edition",
                "pages",
                "month",
                "note",
                "doi",
                "url",
            ],
            required: ["author", "title", "booktitle", "date"],
        },
    },
    {
        name: "electronic",
        type: sections.Alias,
        description: "An alias for <@online>.",
        fields: {
            recommended: ["author", "title", "date", "url"],
            optional: [
                "subtitle",
                "organization",
                "urldate",
                "note",
                "doi",
                "language",
            ],
            required: ["author", "title", "date", "url"],
        },
    },
    {
        name: "mastersthesis",
        type: sections.Alias,
        description: "An alias for <@thesis>.",
        fields: {
            recommended: [
                "author",
                "title",
                "type",
                "institution",
                "location",
                "date",
            ],
            optional: [
                "subtitle",
                "series",
                "address",
                "month",
                "note",
                "doi",
                "url",
            ],
            required: ["author", "title", "institution", "date"],
        },
    },
    {
        name: "phdthesis",
        type: sections.Alias,
        description: "An alias for <@thesis>.",
        fields: {
            recommended: [
                "author",
                "title",
                "type",
                "institution",
                "location",
                "date",
            ],
            optional: [
                "subtitle",
                "series",
                "address",
                "month",
                "note",
                "doi",
                "url",
            ],
            required: ["author", "title", "institution", "date"],
        },
    },
    {
        name: "techreport",
        type: sections.Alias,
        description: "An alias for <@report>.",
        fields: {
            recommended: [
                "author",
                "title",
                "type",
                "institution",
                "location",
                "date",
            ],
            optional: [
                "subtitle",
                "series",
                "number",
                "month",
                "note",
                "doi",
                "url",
            ],
            required: ["author", "title", "institution", "date"],
        },
    },
    {
        name: "www",
        type: sections.Alias,
        description: "An alias for <@online>.",
        fields: {
            recommended: ["author", "title", "date", "url"],
            optional: [
                "subtitle",
                "organization",
                "urldate",
                "note",
                "doi",
                "language",
            ],
            required: ["author", "title", "date", "url"],
        },
    },
];

// FIELDS
export const biblatexFields = [
    // Recommended Fields
    {
        name: "author",
        type: sections.Recommended,
        description: "The author(s) of <title>.",
    },
    {
        name: "title",
        type: sections.Recommended,
        description: "The title of the work.",
    },
    {
        name: "publisher",
        type: sections.Recommended,
        description: "The name(s) of the publisher(s).",
    },
    {
        name: "date",
        type: sections.Recommended,
        description: "The publication date.",
    },
    {
        name: "doi",
        type: sections.Recommended,
        description: "The Digital Object Identifier of the work.",
    },
    {
        name: "url",
        type: sections.Recommended,
        description: "The url of an online publication.",
    },
    {
        name: "urldate",
        type: sections.Recommended,
        description: "The access date of the <url>.",
    },
    // Optional Fields
    {
        name: "abstract",
        type: sections.Optional,
        description: "The abstract of the work being cited.",
    },
    {
        name: "addendum",
        type: sections.Optional,
        description: "Miscellaneous bibliographic data.",
    },
    {
        name: "afterword",
        type: sections.Optional,
        description: "The author(s) of an afterword to the work.",
    },
    {
        name: "annotation",
        type: sections.Optional,
        description: "An annotation for use in annotated bibliographies.",
    },
    {
        name: "annotator",
        type: sections.Optional,
        description: "The author(s) of annotations within the work.",
    },
    {
        name: "authortype",
        type: sections.Optional,
        description: "The type of <author>.",
    },
    {
        name: "bookauthor",
        type: sections.Optional,
        description: "The author(s) of <booktitle>",
    },
    {
        name: "bookpagination",
        type: sections.Optional,
        description: "The pagination scheme of the enclosing work.",
    },
    {
        name: "booksubtitle",
        type: sections.Optional,
        description: "The subtitle related to the <booktitle>.",
    },
    {
        name: "booktitle",
        type: sections.Optional,
        description:
            "The title of a work which is part of a larger publication.",
    },
    {
        name: "booktitleaddon",
        type: sections.Optional,
        description: "An annex to the <booktitle>.",
    },
    {
        name: "chapter",
        type: sections.Optional,
        description: "A chapter or section or any other unit of a work.",
    },
    {
        name: "commentator",
        type: sections.Optional,
        description: "The author(s) of a commentary to the work.",
    },
    {
        name: "edition",
        type: sections.Optional,
        description: "The edition of a printed publication, as an integer.",
    },
    {
        name: "editor",
        type: sections.Optional,
        description: "The editor(s) of the work.",
    },
    {
        name: "editora",
        type: sections.Optional,
        description:
            "The secondary editor(s), performing a different editorial role.",
    },
    {
        name: "editorb",
        type: sections.Optional,
        description: "More secondary editor(s), performing a different role.",
    },
    {
        name: "editorc",
        type: sections.Optional,
        description: "More secondary editor(s), performing a different role.",
    },
    {
        name: "editortype",
        type: sections.Optional,
        description: "The type of editorial role performed by <editor>.",
    },
    {
        name: "editoratype",
        type: sections.Optional,
        description: "The type of editorial role performed by <editora>.",
    },
    {
        name: "editorbtype",
        type: sections.Optional,
        description: "The type of editorial role performed by <editorb>.",
    },
    {
        name: "editorctype",
        type: sections.Optional,
        description: "The type of editorial role performed by <editorc>.",
    },
    {
        name: "eid",
        type: sections.Optional,
        description: "The Electronic Identifier of a section of a larger work.",
    },
    {
        name: "entrysubtype",
        type: sections.Optional,
        description: "The subtype of an entry type.",
    },
    {
        name: "eprint",
        type: sections.Optional,
        description: "The Electronic Identifier of an online publication.",
    },
    {
        name: "eprintclass",
        type: sections.Optional,
        description: "Additional information related to the <eprinttype>.",
    },
    {
        name: "eprinttype",
        type: sections.Optional,
        description: "The type of <eprint> identifier.",
    },
    {
        name: "eventdate",
        type: sections.Optional,
        description: "The date of an event in a <@proceedings> entry.",
    },
    {
        name: "eventtitle",
        type: sections.Optional,
        description: "The title of an event in a <@proceedings> entry.",
    },
    {
        name: "eventtitleaddon",
        type: sections.Optional,
        description: "An annex to the <eventtitle>.",
    },
    {
        name: "file",
        type: sections.Optional,
        description: "A local link to a file containing the work.",
    },
    {
        name: "foreword",
        type: sections.Optional,
        description: "The author(s) of a foreword to the work.",
    },
    {
        name: "holder",
        type: sections.Optional,
        description: "The holder(s) of a <@patent>.",
    },
    {
        name: "howpublished",
        type: sections.Optional,
        description: "A publication notice for unusual publications.",
    },
    {
        name: "indextitle",
        type: sections.Optional,
        description:
            "A title to use for indexing instead of the regular <title>.",
    },
    {
        name: "institution",
        type: sections.Optional,
        description: "The name of a university or some other institution.",
    },
    {
        name: "introduction",
        type: sections.Optional,
        description: "The author(s) of an introduction to the work.",
    },
    {
        name: "isan",
        type: sections.Optional,
        description:
            "The International Standard Audiovisual Number of an audiovisual work.",
    },
    {
        name: "isbn",
        type: sections.Optional,
        description: "The International Standard Book Number of a book.",
    },
    {
        name: "ismn",
        type: sections.Optional,
        description:
            "The International Standard Music Number of a piece of printed music.",
    },
    {
        name: "isrn",
        type: sections.Optional,
        description:
            "The International Standard Technical Report Number of a technical report.",
    },
    {
        name: "issn",
        type: sections.Optional,
        description:
            "The International Standard Serial Number of a periodical.",
    },
    {
        name: "issue",
        type: sections.Optional,
        description: "The issue of a journal or other periodical.",
    },
    {
        name: "issuesubtitle",
        type: sections.Optional,
        description: "The subtitle of a specific issue of a periodical.",
    },
    {
        name: "issuetitle",
        type: sections.Optional,
        description: "The title of a specific issue of a periodical.",
    },
    {
        name: "issuetitleaddon",
        type: sections.Optional,
        description: "An annex to the <issuetitle>.",
    },
    {
        name: "iswc",
        type: sections.Optional,
        description: "The International Standard Work Code of a musical work.",
    },
    {
        name: "journalsubtitle",
        type: sections.Optional,
        description: "The subtitle of a periodical.",
    },
    {
        name: "journaltitle",
        type: sections.Optional,
        description: "The title of a periodical.",
    },
    {
        name: "journaltitleaddon",
        type: sections.Optional,
        description: "An annex to the <journaltitle>.",
    },
    {
        name: "label",
        type: sections.Optional,
        description: "A fallback for the auto-generated label.",
    },
    {
        name: "language",
        type: sections.Optional,
        description: "The language(s) of the work.",
    },
    {
        name: "library",
        type: sections.Optional,
        description: "The library name and/or call number.",
    },
    {
        name: "location",
        type: sections.Optional,
        description: "The place(s) of publication.",
    },
    {
        name: "mainsubtitle",
        type: sections.Optional,
        description: "The subtitle related to the <maintitle>.",
    },
    {
        name: "maintitle",
        type: sections.Optional,
        description: "The main title of a multi-volume publication.",
    },
    {
        name: "maintitleaddon",
        type: sections.Optional,
        description: "An annex to the <maintitle>.",
    },
    {
        name: "nameaddon",
        type: sections.Optional,
        description: "An addon to be printed after the author name.",
    },
    {
        name: "note",
        type: sections.Optional,
        description:
            "Miscellaenous bibliographic data which does not fit into any other field.",
    },
    {
        name: "number",
        type: sections.Optional,
        description:
            "The number or volume number of a periodical or other work in a series.",
    },
    {
        name: "organization",
        type: sections.Optional,
        description: "The organization(s) that published or sponsored a work.",
    },
    {
        name: "origdate",
        type: sections.Optional,
        description: "The publication date of the original edition of a work.",
    },
    {
        name: "origlanguage",
        type: sections.Optional,
        description: "The language(s) of the original edition of a work.",
    },
    {
        name: "origlocation",
        type: sections.Optional,
        description:
            "The place(s) of publication of the original edition of a work.",
    },
    {
        name: "origpublisher",
        type: sections.Optional,
        description: "The publisher of the original edition of a work.",
    },
    {
        name: "origtitle",
        type: sections.Optional,
        description: "The title of the original edition of a work.",
    },
    {
        name: "pages",
        type: sections.Optional,
        description: "One or more page numbers or page ranges.",
    },
    {
        name: "pagetotal",
        type: sections.Optional,
        description: "The total number of pages of the work.",
    },
    {
        name: "pagination",
        type: sections.Optional,
        description: "The pagination of the work.",
    },
    {
        name: "part",
        type: sections.Optional,
        description: "The number of a partial volume.",
    },
    {
        name: "pubstate",
        type: sections.Optional,
        description: "The publication state of the work.",
    },
    {
        name: "reprinttitle",
        type: sections.Optional,
        description: "The title of a reprint of the work.",
    },
    {
        name: "series",
        type: sections.Optional,
        description:
            "The name of a publication series or the number of a periodical series.",
    },
    {
        name: "shortauthor",
        type: sections.Optional,
        description: "The author(s) of the work, given in an abbreviated form.",
    },
    {
        name: "shorteditor",
        type: sections.Optional,
        description: "The editor(s) of the work, given in an abbreviated form.",
    },
    {
        name: "shorthand",
        type: sections.Optional,
        description: "An override for the auto-generated label.",
    },
    {
        name: "shorthandintro",
        type: sections.Optional,
        description:
            "An override for the standard introduction for shorthand citations.",
    },
    {
        name: "shortjournal",
        type: sections.Optional,
        description: "A short version or acronym of the <journal title>.",
    },
    {
        name: "shortseries",
        type: sections.Optional,
        description: "A short version or acronym of the <series>.",
    },
    {
        name: "shorttitle",
        type: sections.Optional,
        description: "A short version or acronym of the <title>.",
    },
    {
        name: "subtitle",
        type: sections.Optional,
        description: "The subtitle of the work.",
    },
    {
        name: "titleaddon",
        type: sections.Optional,
        description: "An annex to the <title>.",
    },
    {
        name: "translator",
        type: sections.Optional,
        description: "The translator(s) of the work.",
    },
    {
        name: "type",
        type: sections.Optional,
        description: "The type of a work.",
    },
    {
        name: "venue",
        type: sections.Optional,
        description: "The location of an event in a <@proceedings> entry.",
    },
    {
        name: "version",
        type: sections.Optional,
        description: "The revision number of a work.",
    },
    {
        name: "volume",
        type: sections.Optional,
        description:
            "The volume number of a series or periodical, as an integer.",
    },
    {
        name: "volumes",
        type: sections.Optional,
        description: "The total number of volumes of a series, as an integer.",
    },
    // WARN: opinion: exclude `month` and `year` fields as the user gets significantly more functionality from the `date` field
    // { name: "month", type: sections.Optional, description: "The month of publication." },
    // { name: "year", type: sections.Optional, description: "The year of publication." },

    // Special Fields
    {
        name: "crossref",
        type: sections.Special,
        description: "An entry key for the cross-referencing feature.",
    },
    {
        name: "entryset",
        type: sections.Special,
        description: "A set of entry keys.",
    },
    {
        name: "gender",
        type: sections.Special,
        description: "The gender of the author(s) or editor(s).",
    },
    {
        name: "langid",
        type: sections.Special,
        description: "The language id of the entry.",
    },
    {
        name: "langidopts",
        type: sections.Special,
        description: "Specific language options for the entry.",
    },
    {
        name: "ids",
        type: sections.Special,
        description: "Aliases for the main citation key.",
    },
    {
        name: "indexsorttitle",
        type: sections.Special,
        description: "The title used when sorting the index.",
    },
    {
        name: "keywords",
        type: sections.Special,
        description: "A separated list of keywords.",
    },
    {
        name: "options",
        type: sections.Special,
        description: "A separated list of entry options.",
    },
    {
        name: "presort",
        type: sections.Special,
        description:
            "Used to modify the sorting order of the bibliography. (Takes precedence over sortkey.)",
    },
    {
        name: "related",
        type: sections.Special,
        description: "Citation keys of other related entries.",
    },
    {
        name: "relatedoptions",
        type: sections.Special,
        description: "Per-type options to set for a related entry.",
    },
    {
        name: "relatedtype",
        type: sections.Special,
        description: "The type of relationship for entry in <related>.",
    },
    {
        name: "relatedstring",
        type: sections.Special,
        description:
            "An override for the bibliography string from <relatedtype>.",
    },
    {
        name: "sortkey",
        type: sections.Special,
        description: "Used to modify the sorting order of the bibliography.",
    },
    {
        name: "sortname",
        type: sections.Special,
        description:
            "A name used to modify the sorting order of the bibliography.",
    },
    {
        name: "sortshorthand",
        type: sections.Special,
        description:
            "Used to modify the sorting order of the list of shorthands.",
    },
    {
        name: "sorttitle",
        type: sections.Special,
        description:
            "A title used to modify the sorting order of the bibliography.",
    },
    {
        name: "xdata",
        type: sections.Special,
        description: "Inherits data from one or more specified entry keys.",
    },
    {
        name: "xref",
        type: sections.Special,
        description: "Cross-references from one or more specified entry keys.",
    },
    // WARN: opinion: exclude `sortyear` field for the same reason as the `month` and `year` exclusions
    // { name: "sortyear", type: sections.Special, description: "A year used to modify the sorting order of the bibliography." },
    // WARN: `execute` allows arbitrary LaTeX code execution when building file, don't necessarily want users having access to this
    // { name: "execute", type: sections.Special, description: "Arbitrary LaTeX code to be executed." },

    // Field Aliases (mostly for backwards compatibility with BibTeX)
    {
        name: "address",
        type: sections.Alias,
        description: "An alias for <location>.",
    },
    {
        name: "annote",
        type: sections.Alias,
        description: "An alias for <annotation>.",
    },
    {
        name: "archiveprefix",
        type: sections.Alias,
        description: "An alias for <eprinttype>.",
    },
    {
        name: "journal",
        type: sections.Alias,
        description: "An alias for <journaltitle>.",
    },
    {
        name: "key",
        type: sections.Alias,
        description: "An alias for <sortkey>.",
    },
    { name: "pdf", type: sections.Alias, description: "An alias for <file>." },
    {
        name: "primaryclass",
        type: sections.Alias,
        description: "An alias for <eprintclass>.",
    },
    {
        name: "school",
        type: sections.Alias,
        description: "An alias for <institution>.",
    },
];
