---
layout: default
body_class: no-anchors no-edit
title: Themes
---

<div class="products-group group-themes-m1">
  <h3>
    Magento 1.x Themes
  </h3>
  <ul class="list-products onecolumn">
    {% for hash in site.data.themes %}
      {% assign theme = hash[1] %}

      {% if theme.urls.m1 == null %}
        {% continue %}
      {% endif %}

      <li>
        <a href="{{ theme.urls.m1 | prepend: site.baseurl }}" title="{{ theme.title }}">{{ theme.title }}</a>
      </li>
    {% endfor %}
  </ul>
</div>
