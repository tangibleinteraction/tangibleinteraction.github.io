# How to Add Content to the Site

## Table of Contents

- [How to Create a Project Page](#how-to-create-a-project-page)
- [How to Create a Theory Blog Entry](#how-to-create-a-theory-blog-entry)

## How to Create a Project Page

Welcome! This guide explains how to build your own project page for the site. Follow these steps to get started:

---

### Step 1: Copy the Template Folder

- Go to `assets/template/`
- Copy the folder named `template_project` to the main project directory in `projects/.../<your-project>`.
- Rename the copied folder to match your project name (e.g. `interactive-sound`)

---

### Step 2: Insert Your Images

- Add all your project images into the new folder
- Delete the default `echoes.jpg` image
- Make sure all filenames are **simple and lowercase** (e.g. `installation.jpg`)

---

### Step 3: Edit the Template Metadata

At the top of the `index.md` file, update the front matter:

```yaml
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

```

In the list of `images` you have to add an image caption (for the `alt` text). Below you need to reference one of your uploaded images by its name including the extension. Optionally, you can provide `space-above` and `space-below` to adjust the vertical position of the images next to the text on the right side.

### Step 4: Customize the Content

Inside index.md, you can add your content using strict Markdown (or Kramdown) syntax:

The content area of thhe file appears on the right side of the project page. You can adjust the image positioning of the images on the left side (which is generated automatically from the list in the front matter above) by applying `space-above` and `space-below` to match this text.

Note that the author names and description text is automatically added as the first content, along with the teaser image.

### Finalize

You can now upload your project folder to the Github repository. Once you're done editing, your project will appear beautifully on the site with your chosen layout and content.

## How to Create a Theory Blog Entry

Creating an entry for the theory blog works very similar to creating a new project. You will find the `template_theory` also in the folder `assets/template` to copy and rename in the `theory` folder in the root directory of the page.

The front matter is almost identical to the project blog entries, except for a different layout and the date added.

```yaml
---
title: My Blog Title Capitalized
authors: The author or authors of the blog post
date: date in YYYY/MM/DD format such as 2026/03/17
description: Short teaser text for the blog entry to be displayed on the overview page. 
layout: blog
order: 1
images:
  - image: Figure 1&colon; Provide an image description and possibly a copyright note or reference
    url: example.jpg
  - image: Figure 2&colon; Another image description
    url: example.jpg
    space-above: 10
    space-below: 4
---

... your content goes here ...

```

Positioning of images is also achieved via the `space-above` and `space-below` variables. The spacing definition goes from 1 to 30, with predefined values in the `_sass/libs/_mixins.scss` style file (look for the `$heights` array).

Be sure to set the correct `order` desirable for the blog posts.
