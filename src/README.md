<!-- NOTE: README.md is generated from src/README.md -->

# @citedrive/codemirror-lang-bibtex

[ [**WEBSITE**](https://codemirror.net/) | [**ISSUES**](https://github.com/citedrive/codemirror-lang-bibtex/issues) | [**FORUM**](https://discuss.codemirror.net/c/next/) | [**CHANGELOG**](https://github.com/citedrive/codemirror-lang-bibtex/blob/main/CHANGELOG.md) ]

This package implements BibTeX language support for the
[CodeMirror](https://codemirror.net/) code editor.

The [project page](https://codemirror.net/) has more information, a
number of [examples](https://codemirror.net/examples/) and the
[documentation](https://codemirror.net/docs/).

This code is released under an
[MIT license](https://github.com/citedrive/codemirror-lang-bibtex/tree/main/LICENSE).

## Usage

```javascript
import { EditorView, basicSetup } from "codemirror";
import { bibtex } from "@citedrive/codemirror-lang-bibtex";

const view = new EditorView({
    parent: document.body,
    doc: `fmt.Println("hello world")`,
    extensions: [basicSetup, bibtex()],
});
```

## API Reference

@bibtex

@bibtexLanguage

@biblatexLanguage

@bibtexCompletion

@bibtexLinter
