---
layout: project
title: Echoes
authors: Some Name, Some Other
description: This is the teaser text that appears first on the project site and in the overview of the projects
teaser: echoes.jpg
images: 
  - image: Development process
    url: echoes.jpg
    space-above: 20
    space-below: 30
  - image: Target audience and approach
    url: echoes.jpg
  - image: Technology and models
    url: echoes.jpg
---

## Project Overview

This text appears on the right side of the project page. You can adjust the image positioning of the images on the left side (which is generated automatically from the list in the front matter above) by applying `space-above` and `space-below` to match this text.

## How to Use Markdown

This file uses **headings starting from level 2**, which means you should begin your sections with `##` instead of `#`.

### Text Formatting

- *Italic*: Wrap text in `*asterisks*` or `_underscores_`
- **Bold**: Wrap text in `**double asterisks**` or `__double underscores__`
- `Code`: Use backticks to indicate inline code

### Headings

Use `##` for the main section title (since we skip level-1 here):

```markdown
## Section Title
```

### Unordered Lists

Use `-`, `*`, or `+` to create unordered lists:

```markdown
- Item A
- Item B
  - Subitem B1
  - Subitem B2
```

### Ordered Lists

Use numbers followed by a period:

```markdown
1. First item
2. Second item
   1. Subitem
   2. Subitem
```

### Tables

Use pipes `|` and dashes `-` to create tables:

```markdown
| Name     | Age | Role      |
|----------|-----|-----------|
| Alice    | 30  | Designer  |
| Bob      | 25  | Developer |
```

Tables must have a header row and a separator line using dashes.

### Links and Images

```markdown
[OpenAI](https://openai.com)

![Alt text](image.png)
```

That’s it! You can now format documents using markdown starting from heading level 2.
