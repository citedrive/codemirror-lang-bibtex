import {snippet, CompletionSection} from "@codemirror/autocomplete"

// struct with ranked section objects
export const sections = {
    Entry: {name: "Entry", rank: 0},
    Field: {name: "Field", rank: 0},
    Recommended: {name: "Recommended", rank: 1},
    Optional: {name: "Optional", rank: 2},
    Alias: {name: "Alias", rank: 3},
    Special: {name: "Special", rank: 4}
};

// funcs for dynamic snippet creation
export const createEntry = (label: string, section: CompletionSection, detail: string, fields: string[]) => {
    return ({
        // matching options
        label: `@${label}`,
        detail: detail,

        //expansion
        apply: snippet(`@${label}{#{<citationkey>},${fields.map(f => `\n\t${f} = {#{<${f}>}}`)}\n}`),

        // render options
        section: section,
        type: "class"
    })
};

export const createField = (label: string, section: CompletionSection, detail: string) => {
    return ({
        // matching options
        label: label,
        detail: detail,

        // expansion
        apply: snippet(`${label} = {#{<${label}>}}#{,}\n#{}`),

        // render options
        section: section,
        type: "property",
    })
};
