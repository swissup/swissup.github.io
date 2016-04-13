---
layout: default
body_class: no-anchors no-edit
---

<div class="clearfix products-group group-extensions">
  <h3>Magento 1.x Extensions</h3>
  <ul class="list-products">
    {% for hash in site.data.extensions %}
      {% assign extension = hash[1] %}

      {% if extension.urls.m1 == null %}
        {% continue %}
      {% endif %}

      <li>
        <a href="{{ extension.urls.m1 | prepend: site.baseurl }}" title="{{ extension.title }}">{{ extension.title }}</a>
      </li>
    {% endfor %}
  </ul>
</div>
