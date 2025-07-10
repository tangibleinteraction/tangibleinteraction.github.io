---
layout: default
---


<!-- Section -->
<section id="projets">
  <h2>Projects</h2>
  {% for project in site.pages %}
    {% if project.path contains "projects/" %}
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