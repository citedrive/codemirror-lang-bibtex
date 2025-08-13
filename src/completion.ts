import { autocompletion } from "@codemirror/autocomplete";

/// BibTeX autocompletion [configuration](#autocomplete.autocompletion^config).
export const bibtexCompletion = autocompletion({
    activateOnTyping: true,
    activateOnTypingDelay: 100,
    tooltipClass: () => "editor-tooltip",
    optionClass: () => "editor-option",
});
