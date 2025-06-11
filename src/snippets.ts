import {snippet} from "@codemirror/autocomplete"

// funcs for dynamic snippet creation
export const createEntry = (label: string, section: string, detail: string, fields: string[]) => ({
    // matching options
    label: `@${label}`,
    detail: detail,

    //expansion
    apply: snippet(`@${label}{#{<citationkey>},${fields.map(f => `\n\t${f} = {#{<${f}>}}`)}\n}`),

    // render options
    section: section,
    type: "class"
});

export const createField = (label: string, section: string, detail: string) => ({
    // matching options
    label: label,
    detail: detail,

    // expansion
    apply: snippet(`${label} = {#{<${label}>}}#{,}\n#{}`),

    // render options
    section: section,
    type: "property",
});
