import { linter } from "@codemirror/lint";
import { tidy } from "bibtex-tidy";

/// BibTeX [syntax linter](#lint.Diagnostic).
export const bibtexLinter = linter((view) => {
    let diagnostics = [];
    let currentDocText = view.state.doc.toString();
    try {
        let tidyOutput = tidy(currentDocText, { modify: false });
    } catch (err) {
        let errNode = view.domAtPos(err.pos);
        diagnostics.push({
            from: err.pos,
            to: view.state.toText(currentDocText).lineAt(err.pos).to,
            severity: "error",
            message: "Invalid BibTeX Syntax",
        });
    }
    return diagnostics;
});
