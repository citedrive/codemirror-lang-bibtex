import {syntaxTree} from "@codemirror/language";
import {linter} from "@codemirror/lint";

// import { tidy } from "bibtex-tidy";

export const bibtexLinter = linter(view => {
    let diagnostics = [];
    syntaxTree(view.state).cursor().iterate(node => {
        let badSyntax = {
            isBad: node.name === "FieldValue",
            start: node.from,
            end: node.to
        };

        if (badSyntax.isBad) diagnostics.push({
            from: badSyntax.start,
            to: badSyntax.end,
            severity: "error",
            message: "Invalid syntax"
        });
    });
    return diagnostics;
});
