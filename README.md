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
  <code><strong><a href="#user-content-bibtex">bibtex</a></strong>(<a id="user-content-bibtex^config" href="#user-content-bibtex^config">config</a>&#8288;?: {biblatex&#8288;?: <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean">boolean</a>} = {}) → <a href="https://codemirror.net/docs/ref#language.LanguageSupport">LanguageSupport</a></code></dt>

<dd><p>BibTeX <a href="https://codemirror.net/docs/ref/#language.LRLanguage">language</a> support with BibLaTeX <a href="https://lezer.codemirror.net/docs/ref/#lr.ParserConfig.dialect">dialect</a>, autocompletion <a href="https://codemirror.net/docs/ref/#autocomplete.autocompletion%5Econfig">configuration</a>, and autocompletion <a href="https://codemirror.net/docs/ref/#autocomplete.snippet">snippets</a> that are suggested based on the editor <a href="https://codemirror.net/docs/ref/#autocomplete.CompletionContext">context</a>.</p>
</dd>
<dt id="user-content-bibtexlanguage">
  <code><strong><a href="#user-content-bibtexlanguage">bibtexLanguage</a></strong>: <a href="https://codemirror.net/docs/ref#language.LRLanguage">LRLanguage</a></code></dt>

<dd><p>BibTeX Language configuration with syntax <a href="https://codemirror.net/docs/ref/#language.syntaxHighlighting">highlighting</a>, <a href="https://codemirror.net/docs/ref/#language.foldNodeProp">folding</a>, and <a href="https://codemirror.net/docs/ref/#language.indentNodeProp">indentation</a>.</p>
</dd>
<dt id="user-content-biblatexlanguage">
  <code><strong><a href="#user-content-biblatexlanguage">biblatexLanguage</a></strong>: <a href="https://codemirror.net/docs/ref#language.LRLanguage">LRLanguage</a></code></dt>

<dd><p>BibLaTeX Language configuration as a <a href="https://lezer.codemirror.net/docs/ref/#lr.ParserConfig.dialect">dialect</a> of BibTeX.</p>
</dd>
</dl>
