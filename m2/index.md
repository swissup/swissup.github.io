---
layout: default
body_class: no-anchors no-edit
title: Magento 2.x
---

<div class="clearfix products-group group-argento">
  <h3>Argento for Magento 2.x (beta)</h3>
  <div class="card mdl-grid">
    <div class="card-content mdl-cell mdl-cell--5-col mdl-cell--8-col-tablet mdl-cell--4-col-phone mdl-cell--order-2">
      <h4>
        Most Advanced Magento Responsive Theme, powered with Top-Quality
        Popular Extensions
      </h4>
      <div class="description">
        <p>Argento is more than just another template created for Magento. It was created right from the ground based on the best ecommerce stores practices and according to Magento developers guidelines.</p>
      </div>
      <div class="actions">
        <a class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent" href="{{ '/m2/argento/' | prepend: site.baseurl }}">
          View docs
        </a>
      </div>
    </div>
    <div class="carousel js-flickity card-thumbnail mdl-cell mdl-cell--7-col mdl-cell--8-col-tablet mdl-cell--4-col-phone"
      data-flickity-options='{ "wrapAround": true, "pageDots": false, "prevNextButtons": false, "autoPlay": true, "imagesLoaded": true }'>
      <img src="{{ '/images/site/homepage/argento/desktop.png' | prepend: site.baseurl }}" alt="Argento desktop screenshot"/>
      <img src="{{ '/images/site/homepage/argento/tablet_and_phone.png' | prepend: site.baseurl }}" alt="Argento tablet and phone screenshot"/>
    </div>
  </div>
</div>

<div class="clearfix products-group group-extensions">
  <h3>Magento 2.x Extensions</h3>
  <ul class="list-products">
    {% for hash in site.data.extensions %}
      {% assign extension = hash[1] %}

      {% if extension.urls.m2 == null %}
        {% continue %}
      {% endif %}

      <li>
        <a href="{{ extension.urls.m2 | prepend: site.baseurl }}" title="{{ extension.title }}">{{ extension.title }}</a>
      </li>
    {% endfor %}
  </ul>
</div>

<div class="clearfix products-group group-themes-m1">
  <h3>
    Magento 1.x Themes
  </h3>
  <ul class="list-products onecolumn">
    {% for hash in site.data.themes %}
      {% assign theme = hash[1] %}

      {% if theme.urls.m2 == null %}
        {% continue %}
      {% endif %}

      <li>
        <a href="{{ theme.urls.m2 | prepend: site.baseurl }}" title="{{ theme.title }}">{{ theme.title }}</a>
      </li>
    {% endfor %}
  </ul>
</div>
