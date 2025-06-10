<!-- NOTE: README.md is generated from src/README.md -->

# codemirror-lang-bibtex

[ [**WEBSITE**](https://codemirror.net/) | [**ISSUES**](https://github.com/vaisriv/codemirror-lang-bibtex/issues) | [**FORUM**](https://discuss.codemirror.net/c/next/) | [**CHANGELOG**](https://github.com/vaisriv/codemirror-lang-bibtex/blob/main/CHANGELOG.md) ]

This package implements BibTeX language support for the
[CodeMirror](https://codemirror.net/) code editor.

The [project page](https://codemirror.net/) has more information, a
number of [examples](https://codemirror.net/examples/) and the
[documentation](https://codemirror.net/docs/).

This code is released under an
[MIT license](https://github.com/vaisriv/codemirror-lang-bibtex/tree/main/LICENSE).

We aim to be an inclusive, welcoming community. To make that explicit,
we have a [code of
conduct](http://contributor-covenant.org/version/1/1/0/) that applies
to communication around the project.

## Usage

```javascript
import {EditorView, basicSetup} from "codemirror"
import {bibtex} from "codemirror-lang-bibtex"

const view = new EditorView({
  parent: document.body,
  doc: `fmt.Println("hello world")`,
  extensions: [basicSetup, bibtex()]
})
```

## API Reference

<dl>
<dt id="user-content-bibtex">
  <code><strong><a href="#user-content-bibtex">bibtex</a></strong>() → <a href="https://codemirror.net/docs/ref#language.LanguageSupport">LanguageSupport</a></code></dt>

<dd><p>BibTeX support with autocompletion configuration and autocompletion <a href="https://codemirror.net/docs/ref/#autocomplete.snippet">snippets</a> that are suggested based on <a href="https://codemirror.net/docs/ref/#autocomplete.CompletionContext">context</a>.</p>
</dd>
<dt id="user-content-biblatex">
  <code><strong><a href="#user-content-biblatex">biblatex</a></strong>() → <a href="https://codemirror.net/docs/ref#language.LanguageSupport">LanguageSupport</a></code></dt>

<dd><p>BibLaTeX support with autocompletion configuration and autocompletion <a href="https://codemirror.net/docs/ref/#autocomplete.snippet">snippets</a> that are suggested based on <a href="https://codemirror.net/docs/ref/#autocomplete.CompletionContext">context</a>.</p>
</dd>
<dt id="user-content-bibtexlanguage">
  <code><strong><a href="#user-content-bibtexlanguage">bibtexLanguage</a></strong>: <a href="https://codemirror.net/docs/ref#language.LRLanguage">LRLanguage</a></code></dt>

<dd><p>BibTeX Language configuration with syntax <a href="https://codemirror.net/docs/ref/#language.syntaxHighlighting">highlighting</a>, <a href="https://codemirror.net/docs/ref/#language.foldNodeProp">folding</a>, and <a href="https://codemirror.net/docs/ref/#language.indentNodeProp">indentation</a>.</p>
</dd>
</dl>
