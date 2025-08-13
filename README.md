<!-- NOTE: README.md is generated from src/README.md -->

# @citedrive/codemirror-lang-bibtex

[ [**WEBSITE**](https://codemirror.net/) | [**ISSUES**](https://github.com/citedrive/codemirror-lang-bibtex/issues) | [**FORUM**](https://discuss.codemirror.net/c/next/) | [**CHANGELOG**](https://github.com/citedrive/codemirror-lang-bibtex/releases) ]

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

<dl>
<dt id="user-content-bibtex">
  <code><strong><a href="#user-content-bibtex">bibtex</a></strong>(<a id="user-content-bibtex^config" href="#user-content-bibtex^config">config</a>&#8288;?: {biblatex&#8288;?: <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean">boolean</a>, smartSuggest&#8288;?: <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean">boolean</a>, snippetRecs&#8288;?: <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean">boolean</a>, syntaxLinter&#8288;?: <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean">boolean</a>, keywords&#8288;?: readonly <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String">string</a>[]} = {}) → <a href="https://codemirror.net/docs/ref#language.LanguageSupport">LanguageSupport</a></code></dt>

<dd><p><a href="#user-content-bibtexlanguage">BibTeX</a> language support with <a href="#user-content-biblatexlanguage">BibLaTeX</a> dialect support, autocompletion <a href="#user-content-bibtexcompletion">configuration</a>, and <a href="https://codemirror.net/docs/ref/#autocomplete.snippet">snippets</a> for both BibTeX and BibLaTeX that are suggested based on the editor <a href="https://codemirror.net/docs/ref/#autocomplete.CompletionContext">context</a>.</p>
<p>There are configuration options for the following:</p>
<ul>
<li><strong>BibTeX</strong> vs <strong>BibLaTeX</strong> language support:
<ul>
<li>default: <code>biblatex: false</code></li>
<li>defaults to BibTeX</li>
</ul>
</li>
<li><strong>Snippet Smart-Suggestion:</strong>
<ul>
<li>default: <code>smartSuggest: true</code></li>
<li>The smart-suggestion feature only suggests snippets for bibliography <code>entries</code> (i.e. <code>@article = {...}</code>) when the user <em>is not</em> currently editing an entry and only suggests snippets for bibliography <code>fields</code> (i.e. <code>author = {Donald Knuth}</code>) when the user <em>is</em> currently editing an entry.</li>
</ul>
</li>
<li><strong>Opinionated Snippets</strong>:
<ul>
<li>default: <code>snippetRecs: true</code></li>
<li>Snippets have been scaffolded as per the current <a href="https://ctan.org/ctan-ann/id/mailman.3109.1292253131.2307.ctan-ann@dante.de">BibTeX</a>/<a href="https://ctan.org/ctan-ann/id/mailman.404.1656879977.32352.ctan-ann@ctan.org">BibLaTeX</a> specs. The snippet <a href="https://codemirror.net/docs/ref/#autocomplete.CompletionSection">render config</a>, exclusion of certain snippets, and entry snippets' suggestion of recommendation/optional fields are done in an <a href="https://www.citedrive.com/en/blog/codemirror-bibtex-plugin">opinionated</a> manner (<a href="https://github.com/citedrive/codemirror-lang-bibtex/issues">suggestions</a> are welcome!).</li>
</ul>
</li>
<li><strong>Syntax Linting</strong>:
<ul>
<li>default: <code>syntaxLinter: true</code></li>
<li>Invalid BibTeX (and BibLaTeX) syntax is underlined in red and a warning is issued, thanks to <a href="https://github.com/flamingtempura/bibtex-tidy">bibtex-tidy</a>.</li>
</ul>
</li>
<li><strong>Custom Keywords</strong>:
<ul>
<li>default: <code>keywords: []</code></li>
<li>Users can specify custom keywords/values that will be auto-suggested when within a <code>FieldValue</code> syntax node.</li>
</ul>
</li>
</ul>
</dd>
<dt id="user-content-bibtexlanguage">
  <code><strong><a href="#user-content-bibtexlanguage">bibtexLanguage</a></strong>: <a href="https://codemirror.net/docs/ref#language.LRLanguage">LRLanguage</a></code></dt>

<dd><p>BibTeX Language configuration with <a href="https://codemirror.net/docs/ref/#language.syntaxHighlighting">syntax highlighting</a>, <a href="https://codemirror.net/docs/ref/#language.foldNodeProp">folding</a>, and <a href="https://codemirror.net/docs/ref/#language.indentNodeProp">indentation</a>.</p>
</dd>
<dt id="user-content-biblatexlanguage">
  <code><strong><a href="#user-content-biblatexlanguage">biblatexLanguage</a></strong>: <a href="https://codemirror.net/docs/ref#language.LRLanguage">LRLanguage</a></code></dt>

<dd><p>BibLaTeX Language configuration as a <a href="https://lezer.codemirror.net/docs/ref/#lr.ParserConfig.dialect">dialect</a> of <a href="#user-content-bibtexlanguage">BibTeX</a>.</p>
</dd>
<dt id="user-content-bibtexcompletion">
  <code><strong><a href="#user-content-bibtexcompletion">bibtexCompletion</a></strong>: <a href="https://codemirror.net/docs/ref#state.Extension">Extension</a></code></dt>

<dd><p>BibTeX autocompletion <a href="https://codemirror.net/docs/ref/#autocomplete.autocompletion%5Econfig">configuration</a>.</p>
</dd>
<dt id="user-content-bibtexlinter">
  <code><strong><a href="#user-content-bibtexlinter">bibtexLinter</a></strong>: <a href="https://codemirror.net/docs/ref#state.Extension">Extension</a></code></dt>

<dd><p>BibTeX <a href="https://codemirror.net/docs/ref/#lint.Diagnostic">syntax linter</a>.</p>
</dd>
</dl>
