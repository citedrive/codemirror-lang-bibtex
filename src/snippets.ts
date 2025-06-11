import {snippet} from "@codemirror/autocomplete"

const sectionNames = [
    "Entry",
    "Field",
    "Recommended",
    "Standard",
    "Optional",
    "Alias",
    "Special"
];

const sections = [
    ({name: sectionNames[0], rank: 0}),
    ({name: sectionNames[1], rank: 0}),
    ({name: sectionNames[2], rank: 1}),
    ({name: sectionNames[3], rank: 1}),
    ({name: sectionNames[4], rank: 2}),
    ({name: sectionNames[5], rank: 3}),
    ({name: sectionNames[6], rank: 4})
];

// funcs for dynamic snippet creation
export const createEntry = (label: string, section: string, detail: string, fields: string[]) => {
    return ({
        // matching options
        label: `@${label}`,
        detail: detail,

        //expansion
        apply: snippet(`@${label}{#{<citationkey>},${fields.map(f => `\n\t${f} = {#{<${f}>}}`)}\n}`),

        // render options
        section: sections[sectionNames.indexOf(section)],
        type: "class"
    })
};

export const createField = (label: string, section: string, detail: string) => {
    return ({
        // matching options
        label: label,
        detail: detail,

        // expansion
        apply: snippet(`${label} = {#{<${label}>}}#{,}\n#{}`),

        // render options
        section: sections[sectionNames.indexOf(section)],
        type: "property",
    })
};
