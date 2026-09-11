---
layout: default
title: Projects
permalink: /projects/
---

{% assign projects = site.projects | sort: 'date' | reverse %}

<div class="projects">
{% if projects.size == 0 %}
  <p class="empty-state">No projects yet — check back soon.</p>
{% else %}
  {% for project in projects %}
  <article class="project-card">
    <h2><a href="{{ project.url | relative_url }}">{{ project.title }}</a></h2>
    <p class="project-meta">
      {% if project.date %}<time datetime="{{ project.date | date: '%Y-%m-%d' }}">{{ project.date | date: "%B %Y" }}</time>{% endif %}
      {% if project.tags %} · {% for tag in project.tags %}<span class="tag">{{ tag }}</span>{% endfor %}{% endif %}
    </p>
    {% if project.summary %}<p>{{ project.summary }}</p>{% endif %}
    {% if project.links %}
    <p class="project-links">
      {% for link in project.links %}<a href="{{ link.url }}" target="_blank" rel="noopener">{{ link.label }}</a>{% unless forloop.last %} · {% endunless %}{% endfor %}
    </p>
    {% endif %}
  </article>
  {% endfor %}
{% endif %}
</div>
