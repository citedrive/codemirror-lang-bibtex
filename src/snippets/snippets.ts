import { snippet, CompletionSection } from "@codemirror/autocomplete";

// struct with ranked section objects
export const sections = {
    Entry: { name: "Entry", rank: 0 },
    Field: { name: "Field", rank: 0 },
    Keyword: { name: "Keyword", rank: 0 },
    Recommended: { name: "Recommended", rank: 1 },
    Optional: { name: "Optional", rank: 2 },
    Alias: { name: "Alias", rank: 3 },
    Special: { name: "Special", rank: 4 },
};

// funcs for dynamic snippet creation
export const createEntry = (
    label: string,
    section: CompletionSection,
    detail: string,
    fields: { recommended: string[]; optional: string[]; required: string[] },
    snipRecs: boolean,
    autoCursor: boolean,
    suppressComments: boolean, // Suppress inline comments in the snippet
) => {
    let applySnip = snipRecs
        ? autoCursor
            ? snippet(
                `@${label}{#{<citationkey>},${suppressComments ? '' : '\n\t% Recommended Fields:'}${fields.recommended.map((f) => `\n\t${f} = {#{<${f}>}}`)},${suppressComments ? '' : '\n\n\t% Optional Fields:'}${fields.optional.map((f) => `\n\t${f} = {#{<${f}>}}`)}\n}`,
            )
            : snippet(
                  `@${label}{#{citationkey},${suppressComments ? '' : '\n\t% Recommended Fields:'}${fields.recommended.map((f) => `\n\t${f} = {}`)},${suppressComments ? '' : '\n\n\t% Optional Fields:'}${fields.optional.map((f) => `\n\t${f} = {}`)}\n}`,
              )
        : autoCursor
            ? snippet(
                `@${label}{#{<citationkey>},${fields.required.map((f) => `\n\t${f} = {#{<${f}>}}`)}\n}`,
            )
            : snippet(
                `@${label}{#{citationkey},${fields.required.map((f) => `\n\t${f} = {}`)}\n}`,
            );
    return {
        // matching options
        label: `@${label}`,
        detail: detail,
        //expansion
        apply: applySnip,
        // render options
        section: section,
        type: "class",
    };
};

export const createField = (
    label: string,
    section: CompletionSection,
    detail: string,
    autoCursor: boolean,
) => {
    return {
        // matching options
        label: label,
        detail: detail,

        // expansion
        apply: autoCursor
            ? snippet(`${label} = {#{<${label}>}}#{,}\n#{}`)
            : snippet(`${label} = {#{}}`),

        // render options
        section: section,
        type: "property",
    };
};

export const createKeyword = (label: string) => {
    return {
        // matching options
        label: label,
        detail: "Custom Keyword",

        // expansion
        apply: snippet(`${label}`),

        // render options
        section: sections.Keyword,
        type: "property",
    };
};
