import {snippet} from "@codemirror/autocomplete"

// funcs for dynamic snippet creation
export const createEntry = (label: string, detail: string, fields: string[]) => ({
    // matching options
    label: `@${label}`,
    detail: detail,

    //expansion
    apply: snippet(`@${label}{#{<citationkey>},${fields.map(f => `\n\t${f} = {#{<${f}>}}`)}\n}`),

    // render options
    section: "Entry",
    type: "class"
});

export const createField = (label: string, detail: string) => ({
    // matching options
    label: label,
    detail: detail,

    // expansion
    apply: snippet(`${label} = {#{<${label}>}}#{,}\n#{}`),

    // render options
    section: "Field",
    type: "property",
});
