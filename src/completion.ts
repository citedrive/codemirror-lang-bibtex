import {autocompletion} from "@codemirror/autocomplete"

/// BibTeX autocomplete [completion](#autocomplete.completion)
export const bibtexCompletion = autocompletion({
    activateOnTyping: true,
    activateOnTypingDelay: 100,
    tooltipClass: () => "editor-tooltip",
    optionClass: () => "editor-option"
});
