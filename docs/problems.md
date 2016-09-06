---
layout: page
title: Problem Sets
author: Austen Lamacraft
---

<div class="toc">
  <ul class="post">
  {% assign pages_list = site.problems | sort:"chapter" %}
  {% for node in pages_list %}
    {% if node.title != null %}
      {% if node.layout == "page" %}
        <h3>
          <a href="{{ site.baseurl }}{{ node.url }}">
            {{ node.title }}
          </a>
        </h3>
        {{ node.summary }}
      {% endif %}
    {% endif %}
  {% endfor %}
  </ul>
</div>
