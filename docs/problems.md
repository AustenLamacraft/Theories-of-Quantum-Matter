---
layout: page
title: Problem Sets
author: Austen Lamacraft
---

<p>
  I once had a student evaluation that complained about the number of problems I had a written for a course. This struck me as a bit like complaining about the number of books in a library. 
</p>

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
