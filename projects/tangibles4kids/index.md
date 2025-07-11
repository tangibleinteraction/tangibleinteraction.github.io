---
title: Tangibles4Kids
description: Interactive projects for children
layout: default
---


<!-- Pages subtitle -->
<h2 class="absolute top-8 right-4">[{{page.title}}]</h2>

<!-- Section -->
<section id="projets">
  <h2>{{page.title}}</h2>
  {% for project in site.pages %}
    {% if project.path contains "projects/tangibles4kids" and project.path != "projects/tangibles4kids/index.md" %}
      <div class="carte-projet">
        <div class="image-zone">
          <img src="{{ project.image | prepend: project.url | replace: 'index.html', '' }}" alt="Image of project {{ project.title }}">
        </div>
        <div class="titre-zone">
          <h3>{{ project.title }}</h3>
        </div>
        <div class="description-zone">
          <p>{{ project.description }}</p>
          <a href="{{ project.url }}" class="btn-projet">To the project →</a>
        </div>
      </div>
      <hr class="separateur">
    {% endif %}
  {% endfor %}
</section>