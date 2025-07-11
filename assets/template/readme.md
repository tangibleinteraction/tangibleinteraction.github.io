# 🚀 How to Create a Project Page

Welcome! This guide explains how to build your own project page for the site. Follow these steps to get started:

---

## 🧩 Step 1: Copy the Template Folder

- Go to `assets/template/`
- Copy the folder named `template_project`
- Rename the copied folder to match your project name (e.g. `interactive_sound`)

---

## 📸 Step 2: Insert Your Images

- Add all your project images into the new folder
- Delete the default `echoes.jpg` image
- Make sure all filenames are **simple and lowercase** (e.g. `installation.jpg`)

---

## 🖋 Step 3: Edit the Template Metadata

At the top of the `index.md` file, update the front matter:


---
title: My Project Title
description: A short description of what your project is about.
image: name-of-your-thumbnail.jpg
layout: page
---

## ✏️ Step 4: Customize the HTML Content
Inside index.md, you can modify the HTML structure to tell the story of your project.

Each content block looks like this:

html
<div class="markdown-row">
  <div class="image-side">
    <img src="your-image.jpg" alt="Description">
    <p class="caption">Your image caption goes here.</p>
  </div>
  <div class="text-side">
    <h2 class="block-title">Section Title</h2>
    <p>Your project paragraph. You can also use <strong>bold</strong> text!</p>
  </div>
</div>
➡️ You can duplicate and modify these blocks as needed.

✅ That's it!
Once you're done editing, your project will appear beautifully on the site with your chosen layout and content.

Need help creating new styles or customizing your layout further? Don’t hesitate to ask!