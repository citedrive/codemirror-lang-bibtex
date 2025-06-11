import {snippet} from "@codemirror/autocomplete"

// funcs for dynamic snippet creation
export const createEntry = (label: string, section: string, detail: string, fields: string[]) => {
    let boost = (section === "Recommended" ? 99 : -99);
    console.log(section);
    console.log(boost);
    return ({
        // matching options
        label: `@${label}`,
        detail: detail,

        //expansion
        apply: snippet(`@${label}{#{<citationkey>},${fields.map(f => `\n\t${f} = {#{<${f}>}}`)}\n}`),

        // render options
        section: section,
        boost: boost,
        type: "class"
    })
};

export const createField = (label: string, section: string, detail: string) => {
    let boost = (section === "Recommended" ? 99 : -99);
    console.log(section);
    console.log(boost);
    return ({
        // matching options
        label: label,
        detail: detail,

        // expansion
        apply: snippet(`${label} = {#{<${label}>}}#{,}\n#{}`),

        // render options
        section: section,
        boost: boost,
        type: "property",
    })
};
