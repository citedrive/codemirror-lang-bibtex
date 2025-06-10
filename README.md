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

<dd><p>BibTeX support. Includes autocompletion configuration and autocompletion <a href="https://codemirror.net/docs/ref/#autocomplete.snippet">snippets</a> that are suggested based on <a href="https://codemirror.net/docs/ref/#autocomplete.CompletionContext">context</a></p>
</dd>
<dt id="user-content-biblatex">
  <code><strong><a href="#user-content-biblatex">biblatex</a></strong>() → <a href="https://codemirror.net/docs/ref#language.LanguageSupport">LanguageSupport</a></code></dt>

<dd><p>BibLaTeX support. Includes autocompletion configuration and autocompletion <a href="https://codemirror.net/docs/ref/#autocomplete.snippet">snippets</a> that are suggested based on <a href="https://codemirror.net/docs/ref/#autocomplete.CompletionContext">context</a></p>
</dd>
<dt id="user-content-bibtexsnippets">
  <code><strong><a href="#user-content-bibtexsnippets">bibtexSnippets</a></strong>: {label: <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String">string</a>, detail: <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String">string</a>, apply: fn(<a id="user-content-bibtexsnippets.apply^editor" href="#user-content-bibtexsnippets.apply^editor">editor</a>: {state: <a href="https://codemirror.net/docs/ref#state.EditorState">EditorState</a>, dispatch: fn(<a id="user-content-bibtexsnippets.apply^editor.dispatch^tr" href="#user-content-bibtexsnippets.apply^editor.dispatch^tr">tr</a>: <a href="https://codemirror.net/docs/ref#state.Transaction">Transaction</a>)}, <a id="user-content-bibtexsnippets.apply^completion" href="#user-content-bibtexsnippets.apply^completion">completion</a>: <a href="https://codemirror.net/docs/ref#autocomplete.Completion">Completion</a> | <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/null">null</a>, <a id="user-content-bibtexsnippets.apply^from" href="#user-content-bibtexsnippets.apply^from">from</a>: <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number">number</a>, <a id="user-content-bibtexsnippets.apply^to" href="#user-content-bibtexsnippets.apply^to">to</a>: <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number">number</a>), section: <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String">string</a>, type: <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String">string</a>}[]</code></dt>

<dd></dd>
<dt id="user-content-bibtexentrysnippets">
  <code><strong><a href="#user-content-bibtexentrysnippets">bibtexEntrySnippets</a></strong>: {label: <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String">string</a>, detail: <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String">string</a>, apply: fn(<a id="user-content-bibtexentrysnippets.apply^editor" href="#user-content-bibtexentrysnippets.apply^editor">editor</a>: {state: <a href="https://codemirror.net/docs/ref#state.EditorState">EditorState</a>, dispatch: fn(<a id="user-content-bibtexentrysnippets.apply^editor.dispatch^tr" href="#user-content-bibtexentrysnippets.apply^editor.dispatch^tr">tr</a>: <a href="https://codemirror.net/docs/ref#state.Transaction">Transaction</a>)}, <a id="user-content-bibtexentrysnippets.apply^completion" href="#user-content-bibtexentrysnippets.apply^completion">completion</a>: <a href="https://codemirror.net/docs/ref#autocomplete.Completion">Completion</a> | <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/null">null</a>, <a id="user-content-bibtexentrysnippets.apply^from" href="#user-content-bibtexentrysnippets.apply^from">from</a>: <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number">number</a>, <a id="user-content-bibtexentrysnippets.apply^to" href="#user-content-bibtexentrysnippets.apply^to">to</a>: <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number">number</a>), section: <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String">string</a>, type: <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String">string</a>}[]</code></dt>

<dd></dd>
<dt id="user-content-bibtexfieldsnippets">
  <code><strong><a href="#user-content-bibtexfieldsnippets">bibtexFieldSnippets</a></strong>: {label: <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String">string</a>, detail: <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String">string</a>, apply: fn(<a id="user-content-bibtexfieldsnippets.apply^editor" href="#user-content-bibtexfieldsnippets.apply^editor">editor</a>: {state: <a href="https://codemirror.net/docs/ref#state.EditorState">EditorState</a>, dispatch: fn(<a id="user-content-bibtexfieldsnippets.apply^editor.dispatch^tr" href="#user-content-bibtexfieldsnippets.apply^editor.dispatch^tr">tr</a>: <a href="https://codemirror.net/docs/ref#state.Transaction">Transaction</a>)}, <a id="user-content-bibtexfieldsnippets.apply^completion" href="#user-content-bibtexfieldsnippets.apply^completion">completion</a>: <a href="https://codemirror.net/docs/ref#autocomplete.Completion">Completion</a> | <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/null">null</a>, <a id="user-content-bibtexfieldsnippets.apply^from" href="#user-content-bibtexfieldsnippets.apply^from">from</a>: <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number">number</a>, <a id="user-content-bibtexfieldsnippets.apply^to" href="#user-content-bibtexfieldsnippets.apply^to">to</a>: <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number">number</a>), section: <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String">string</a>, type: <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String">string</a>}[]</code></dt>

<dd></dd>
<dt id="user-content-biblatexsnippets">
  <code><strong><a href="#user-content-biblatexsnippets">biblatexSnippets</a></strong>: {label: <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String">string</a>, detail: <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String">string</a>, apply: fn(<a id="user-content-biblatexsnippets.apply^editor" href="#user-content-biblatexsnippets.apply^editor">editor</a>: {state: <a href="https://codemirror.net/docs/ref#state.EditorState">EditorState</a>, dispatch: fn(<a id="user-content-biblatexsnippets.apply^editor.dispatch^tr" href="#user-content-biblatexsnippets.apply^editor.dispatch^tr">tr</a>: <a href="https://codemirror.net/docs/ref#state.Transaction">Transaction</a>)}, <a id="user-content-biblatexsnippets.apply^completion" href="#user-content-biblatexsnippets.apply^completion">completion</a>: <a href="https://codemirror.net/docs/ref#autocomplete.Completion">Completion</a> | <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/null">null</a>, <a id="user-content-biblatexsnippets.apply^from" href="#user-content-biblatexsnippets.apply^from">from</a>: <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number">number</a>, <a id="user-content-biblatexsnippets.apply^to" href="#user-content-biblatexsnippets.apply^to">to</a>: <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number">number</a>), section: <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String">string</a>, type: <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String">string</a>}[]</code></dt>

<dd></dd>
<dt id="user-content-biblatexentrysnippets">
  <code><strong><a href="#user-content-biblatexentrysnippets">biblatexEntrySnippets</a></strong>: {label: <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String">string</a>, detail: <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String">string</a>, apply: fn(<a id="user-content-biblatexentrysnippets.apply^editor" href="#user-content-biblatexentrysnippets.apply^editor">editor</a>: {state: <a href="https://codemirror.net/docs/ref#state.EditorState">EditorState</a>, dispatch: fn(<a id="user-content-biblatexentrysnippets.apply^editor.dispatch^tr" href="#user-content-biblatexentrysnippets.apply^editor.dispatch^tr">tr</a>: <a href="https://codemirror.net/docs/ref#state.Transaction">Transaction</a>)}, <a id="user-content-biblatexentrysnippets.apply^completion" href="#user-content-biblatexentrysnippets.apply^completion">completion</a>: <a href="https://codemirror.net/docs/ref#autocomplete.Completion">Completion</a> | <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/null">null</a>, <a id="user-content-biblatexentrysnippets.apply^from" href="#user-content-biblatexentrysnippets.apply^from">from</a>: <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number">number</a>, <a id="user-content-biblatexentrysnippets.apply^to" href="#user-content-biblatexentrysnippets.apply^to">to</a>: <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number">number</a>), section: <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String">string</a>, type: <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String">string</a>}[]</code></dt>

<dd></dd>
<dt id="user-content-biblatexfieldsnippets">
  <code><strong><a href="#user-content-biblatexfieldsnippets">biblatexFieldSnippets</a></strong>: {label: <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String">string</a>, detail: <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String">string</a>, apply: fn(<a id="user-content-biblatexfieldsnippets.apply^editor" href="#user-content-biblatexfieldsnippets.apply^editor">editor</a>: {state: <a href="https://codemirror.net/docs/ref#state.EditorState">EditorState</a>, dispatch: fn(<a id="user-content-biblatexfieldsnippets.apply^editor.dispatch^tr" href="#user-content-biblatexfieldsnippets.apply^editor.dispatch^tr">tr</a>: <a href="https://codemirror.net/docs/ref#state.Transaction">Transaction</a>)}, <a id="user-content-biblatexfieldsnippets.apply^completion" href="#user-content-biblatexfieldsnippets.apply^completion">completion</a>: <a href="https://codemirror.net/docs/ref#autocomplete.Completion">Completion</a> | <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/null">null</a>, <a id="user-content-biblatexfieldsnippets.apply^from" href="#user-content-biblatexfieldsnippets.apply^from">from</a>: <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number">number</a>, <a id="user-content-biblatexfieldsnippets.apply^to" href="#user-content-biblatexfieldsnippets.apply^to">to</a>: <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number">number</a>), section: <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String">string</a>, type: <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String">string</a>}[]</code></dt>

<dd></dd>
<dt id="user-content-bibtexlanguage">
  <code><strong><a href="#user-content-bibtexlanguage">bibtexLanguage</a></strong>: <a href="https://codemirror.net/docs/ref#language.LRLanguage">LRLanguage</a></code></dt>

<dd></dd>
<dt id="user-content-bibtexcompletion">
  <code><strong><a href="#user-content-bibtexcompletion">bibtexCompletion</a></strong>: <a href="https://codemirror.net/docs/ref#state.Extension">Extension</a></code></dt>

<dd><p>configure BibTeX autocomplete <a href="https://codemirror.net/docs/ref/#autocomplete.completion">completion</a></p>
</dd>
</dl>
