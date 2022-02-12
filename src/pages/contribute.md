# How to Contribute

## General information

This website (articles, design, ...) is developed via [Github](https://github.com/trayimurti/lcc). And everybody is welcome to help out. All you need is a Github account.

Generated pages are compiled and published at [https://trayimurti.github.io/lcc](https://trayimurti.github.io/lcc).

In order to make contribution consider the following steps:

1. Go to an article that you want to change, and click the pencil icon given at the end of article.
2. Fork the repository if requested.
3. Modify the article.
4. Make a commit by clicking the _Propose changes_ button.
5. Create a pull-request by clicking the _Compare & pull request_ button.
6. Somebody from the core team will look over the changes. This might take a few hours/days.

In case you want to make some bigger changes, like adding a new article, or edit multiple files, you should fork the project in the traditional way, create a branch, modify the files in the Github UI or locally on your computer, and create a pull-request.
If you are unfamiliar with the workflow, read [Step-by-step guide to contributing on GitHub](https://www.dataschool.io/how-to-contribute-on-github/).

## Syntax

We use [Markdown](https://daringfireball.net/projects/markdown) for the articles, and use the [Docusaurus](https://docusaurus.io) to render the Markdown articles into HTML.

For advanced Markdown features of Docusaurus see their [documents](https://docusaurus.io/docs), like:

- [Math formulas with Katex](https://docusaurus.io/docs/markdown-features/math-equations)
  Notice that you need to have an empty line before and after a `$$` math block.

By default the first header (`# header`) will be also the HTML title of the article. In case the header contains a math formula, you can define a different HTML title with:

```markdown
---
title: Alternative HTML title
---
# Proof of $a^2 + b^2 = c^2$

remaining article
```

## Adding Problems

Try to add problems in ascending order of their difficulty. If you don't have enough time to do so, still add the problem. Lets hope that the next person will sort them accordingly.

## Local development

## Tests

If your article involves code snippets, then it would be great you also contribute tests for them.
This way we can make sure that the snippets actually work, and don't contain any bugs.
