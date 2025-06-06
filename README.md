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

<dd><p>BibTeX support. Includes <a href="#user-content-snippets">snippet</a> and <a href="#user-content-completion">completion</a></p>
</dd>
<dt id="user-content-bibtexlanguage">
  <code><strong><a href="#user-content-bibtexlanguage">bibtexLanguage</a></strong>: <a href="https://codemirror.net/docs/ref#language.LRLanguage">LRLanguage</a></code></dt>

<dd></dd>
<dt id="user-content-bibtexsnippets">
  <code><strong><a href="#user-content-bibtexsnippets">bibtexSnippets</a></strong>: <a href="https://codemirror.net/docs/ref#autocomplete.Completion">Completion</a>[]</code></dt>

<dd></dd>
<dt id="user-content-entrysnippets">
  <code><strong><a href="#user-content-entrysnippets">entrySnippets</a></strong>: <a href="https://codemirror.net/docs/ref#autocomplete.Completion">Completion</a>[]</code></dt>

<dd></dd>
<dt id="user-content-fieldsnippets">
  <code><strong><a href="#user-content-fieldsnippets">fieldSnippets</a></strong>: <a href="https://codemirror.net/docs/ref#autocomplete.Completion">Completion</a>[]</code></dt>

<dd></dd>
<dt id="user-content-bibtexcompletion">
  <code><strong><a href="#user-content-bibtexcompletion">bibtexCompletion</a></strong>: <a href="https://codemirror.net/docs/ref#state.Extension">Extension</a></code></dt>

<dd><p>BibTeX smart-suggest <a href="https://codemirror.net/docs/ref/#autocomplete.completion">completion</a></p>
</dd>
</dl>
