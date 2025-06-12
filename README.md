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
  <code><strong><a href="#user-content-bibtex">bibtex</a></strong>(<a id="user-content-bibtex^config" href="#user-content-bibtex^config">config</a>&#8288;?: {biblatex&#8288;?: <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean">boolean</a>, smartSuggest&#8288;?: <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean">boolean</a>} = {}) → <a href="https://codemirror.net/docs/ref#language.LanguageSupport">LanguageSupport</a></code></dt>

<dd><p><a href="#user-content-bibtexlanguage">BibTeX</a> language support with optional <a href="#user-content-biblatexlanguage">BibLaTeX</a> dialect support, autocompletion <a href="#user-content-bibtexcompletion">configuration</a>, and both <a href="#user-content-bibtexsnippets">BibTeX snippets</a> and <a href="#user-content-biblatexsnippets">BibLaTeX snippets</a> that are optionally suggested based on the editor <a href="https://codemirror.net/docs/ref/#autocomplete.CompletionContext">context</a>.</p>
<p>The smart-suggestion feature only suggests snippets for bibliography <code>entries</code> (i.e. <code>@article</code>) when the user <em>is not</em> currently editing an entry and only suggests snippets for bibliography <code>fields</code> (i.e. <code>author = {Donald Knuth}</code>) when the user <em>is</em> currently editing an entry.</p>
<p>Snippets have been scaffolded as per the current <a href="https://ctan.org/ctan-ann/id/mailman.3109.1292253131.2307.ctan-ann@dante.de">BibTeX</a>/<a href="https://ctan.org/ctan-ann/id/mailman.404.1656879977.32352.ctan-ann@ctan.org">BibLaTeX</a> specs. Both the snippet <a href="https://codemirror.net/docs/ref/#autocomplete.CompletionSection">render config</a> and exclusion of certain snippets are done in an <a href="https://www.citedrive.com/en/blog/codemirror-bibtex-plugin">opinionated</a> manner (<a href="https://github.com/vaisriv/codemirror-lang-bibtex/issues">suggestions</a> welcome).</p>
</dd>
<dt id="user-content-bibtexlanguage">
  <code><strong><a href="#user-content-bibtexlanguage">bibtexLanguage</a></strong>: <a href="https://codemirror.net/docs/ref#language.LRLanguage">LRLanguage</a></code></dt>

<dd><p>BibTeX Language configuration with <a href="https://codemirror.net/docs/ref/#language.syntaxHighlighting">syntax highlighting</a>, <a href="https://codemirror.net/docs/ref/#language.foldNodeProp">folding</a>, and <a href="https://codemirror.net/docs/ref/#language.indentNodeProp">indentation</a>.</p>
</dd>
<dt id="user-content-biblatexlanguage">
  <code><strong><a href="#user-content-biblatexlanguage">biblatexLanguage</a></strong>: <a href="https://codemirror.net/docs/ref#language.LRLanguage">LRLanguage</a></code></dt>

<dd><p>BibLaTeX Language configuration as a <a href="https://lezer.codemirror.net/docs/ref/#lr.ParserConfig.dialect">dialect</a> of <a href="#user-content-bibtexlanguage">BibTeX</a>.</p>
</dd>
<dt id="user-content-bibtexsnippets">
  <code><strong><a href="#user-content-bibtexsnippets">bibtexSnippets</a></strong>: {label: <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String">string</a>, detail: <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String">string</a>, apply: fn(<a id="user-content-bibtexsnippets.apply^editor" href="#user-content-bibtexsnippets.apply^editor">editor</a>: {state: <a href="https://codemirror.net/docs/ref#state.EditorState">EditorState</a>, dispatch: fn(<a id="user-content-bibtexsnippets.apply^editor.dispatch^tr" href="#user-content-bibtexsnippets.apply^editor.dispatch^tr">tr</a>: <a href="https://codemirror.net/docs/ref#state.Transaction">Transaction</a>)}, <a id="user-content-bibtexsnippets.apply^completion" href="#user-content-bibtexsnippets.apply^completion">completion</a>: <a href="https://codemirror.net/docs/ref#autocomplete.Completion">Completion</a> | <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/null">null</a>, <a id="user-content-bibtexsnippets.apply^from" href="#user-content-bibtexsnippets.apply^from">from</a>: <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number">number</a>, <a id="user-content-bibtexsnippets.apply^to" href="#user-content-bibtexsnippets.apply^to">to</a>: <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number">number</a>), section: {name: <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String">string</a>, rank: <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number">number</a>}, type: <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String">string</a>}[]</code></dt>

<dd><p>A complete (<a href="https://www.citedrive.com/en/blog/codemirror-bibtex-plugin">opinionated</a>) collection of BibTeX autocomplete <a href="https://codemirror.net/docs/ref/#autocomplete.snippet">snippets</a>.</p>
</dd>
<dt id="user-content-biblatexsnippets">
  <code><strong><a href="#user-content-biblatexsnippets">biblatexSnippets</a></strong>: {label: <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String">string</a>, detail: <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String">string</a>, apply: fn(<a id="user-content-biblatexsnippets.apply^editor" href="#user-content-biblatexsnippets.apply^editor">editor</a>: {state: <a href="https://codemirror.net/docs/ref#state.EditorState">EditorState</a>, dispatch: fn(<a id="user-content-biblatexsnippets.apply^editor.dispatch^tr" href="#user-content-biblatexsnippets.apply^editor.dispatch^tr">tr</a>: <a href="https://codemirror.net/docs/ref#state.Transaction">Transaction</a>)}, <a id="user-content-biblatexsnippets.apply^completion" href="#user-content-biblatexsnippets.apply^completion">completion</a>: <a href="https://codemirror.net/docs/ref#autocomplete.Completion">Completion</a> | <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/null">null</a>, <a id="user-content-biblatexsnippets.apply^from" href="#user-content-biblatexsnippets.apply^from">from</a>: <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number">number</a>, <a id="user-content-biblatexsnippets.apply^to" href="#user-content-biblatexsnippets.apply^to">to</a>: <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number">number</a>), section: {name: <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String">string</a>, rank: <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number">number</a>}, type: <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String">string</a>}[]</code></dt>

<dd><p>A complete (<a href="https://www.citedrive.com/en/blog/codemirror-bibtex-plugin">opinionated</a>) collection of BibLaTeX autocomplete <a href="https://codemirror.net/docs/ref/#autocomplete.snippet">snippets</a>.</p>
</dd>
<dt id="user-content-bibtexcompletion">
  <code><strong><a href="#user-content-bibtexcompletion">bibtexCompletion</a></strong>: <a href="https://codemirror.net/docs/ref#state.Extension">Extension</a></code></dt>

<dd><p>BibTeX autocompletion <a href="https://codemirror.net/docs/ref/#autocomplete.autocompletion%5Econfig">configuration</a></p>
</dd>
</dl>
