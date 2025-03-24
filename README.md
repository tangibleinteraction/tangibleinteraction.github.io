# Tangible Interaction Project Blog

This blog serves as the documentation of the projects in the module Tangible Interaction at the University of Applied Sciences in Dresden.

## Using the Blog

Add/edit a new Markdown file in the root directory for your project team, e.g. `group_one.md`. Make sure your team blog is properly linked to in the file `_includes/sidebar.html` in the list of teams:

```html
<li>
	<span class="opener">Teams</span>
	<ul>
	<li><a href="{{ 'group_one.html' | absolute_url }}">Group 1</a></li>
	<li><a href="#">Group 2</a></li>
	<li><a href="#">Group 3</a></li>
	<li><a href="#">Group 4</a></li>
	<li><a href="#">Group 5</a></li>
	</ul>
</li>
```

Feel free to rename your team with an individual group name at the beginning or during the semester. Make sure your team is also properly linked in the file `index.md` in the section on teams:

```html
<section>
	<header class="major">
		<h2>Teams</h2>
	</header>
	<div class="posts">
		<article>
			<a href="#" class="image"><img src="assets/images/pic01.jpg" alt="" /></a>
			<h3>Group One</h3>
			<p>Aenean ornare velit lacus, ac varius enim lorem ullamcorper dolore. Proin aliquam facilisis ante interdum. Sed nulla amet lorem feugiat tempus aliquam.</p>
			<ul class="actions">
				<li><a href="{{ 'group_one.html' | absolute_url }}" class="button">More</a></li>
			</ul>
		</article>
		...
```

Name your team members briefly in the description of your group. Please find and add a copyright free image of your group, project or as an inspiration. 

Edit your continuous group blog in your markdown file in the root directory. Please add images and videos (copyright free) in the directory `assets`. You may create a sub folder for your group there. You can mix HTML and Markdown in your file as you like: 

```yaml
---
layout: page
title: Group One
---

## Example Blog

### Week 1: Start of the project

Praesent ac adipiscing ullamcorper semper ut amet ac risus. Lorem sapien ut odio odio nunc. Ac adipiscing nibh porttitor erat risus justo adipiscing adipiscing amet placerat accumsan. Vis. Faucibus odio magna tempus adipiscing a non. In mi primis arcu ut non 
accumsan vivamus ac blandit adipiscing adipiscing arcu metus praesent turpis eu ac lacinia nunc ac commodo gravida adipiscing eget accumsan ac nunc adipiscing adipiscing lorem ipsum dolor sit amet nullam veroeros adipiscing.

...
```

## Photo Credits

Photo by <a href="https://unsplash.com/de/@kellysikkema?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Kelly Sikkema</a> auf <a href="https://unsplash.com/de/fotos/spielbaustein-spielzeug-fur-kleinkinder-JRVxgAkzIsM?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>
      

## Theme Credits

### (WIP) Editorial - Jekyll Theme

A Jekyll version of the "Editorial" theme by [HTML5 UP](https://html5up.net/). Find the original here. [https://github.com/andrewbanchich/editorial-jekyll-theme](https://github.com/andrewbanchich/editorial-jekyll-theme).

![Editorial Theme](assets/images/screenshot.jpg "Editorial Theme")

### How to Use

For those unfamiliar with how Jekyll works, check out [https://jekyllrb.com/](https://jekyllrb.com/) for all the details,
or read up on just the basics of [front matter](https://jekyllrb.com/docs/frontmatter/), [writing posts](https://jekyllrb.com/docs/posts/),
and [creating pages](https://jekyllrb.com/docs/pages/).

- **GitLab**: Simply fork this repository and start editing the `_config.yml` file!
- **GitHub**: Fork this reposity and create a branch named `gh-pages`, then start editing the `_config.yml` file!

### Added Features

* Add your **social profiles** easily in `_config.yml`.

### Configuration

You can use the following custom parameters in `_config.yml`.

#### Site
- `subtitle` sets the text for the lighter colored text next to your site's title.

#### Social
- `500px_url`
- `facebook_url`
- `github_url`
- `gitlab_url`
- `googleplus_url`
- `instagram_url`
- `linkedin_url`
- `pinterest_url`
- `slack_url`
- `twitter_url`

### Credits

Original README from HTML5 UP:

```
Editorial by HTML5 UP
html5up.net | @ajlkn
Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)


Say hello to Editorial, a blog/magazine-ish template built around a toggleable "locking"
sidebar (scroll down to see what I mean) and an accordion-style menu. Not the usual landing
page/portfolio affair you'd expect to see at HTML5 UP, but I figured for my 41st (!!!)
template I'd change it up a little. Enjoy :)

Demo images* courtesy of Unsplash, a radtastic collection of CC0 (public domain) images
you can use for pretty much whatever.

(* = not included)

AJ
aj@lkn.io | @ajlkn


Credits:

	Demo Images:
		Unsplash (unsplash.com)

	Icons:
		Font Awesome (fortawesome.github.com/Font-Awesome)

	Other:
		jQuery (jquery.com)
		html5shiv.js (@afarkas @jdalton @jon_neal @rem)
		Misc. Sass functions (@HugoGiraudel)
		Respond.js (j.mp/respondjs)
		Skel (skel.io)
```

Repository [Jekyll logo](https://github.com/jekyll/brand) icon licensed under a [Creative Commons Attribution 4.0 International License](http://choosealicense.com/licenses/cc-by-4.0/).