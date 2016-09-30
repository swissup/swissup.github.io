---
layout: default
title: Argento changelog
description: Argento changelog
category: Argento
---

# Argento Changelog

### Version 1.8.2

**New Features**

 -  New homepage and footer markup in ArgentoFlat design using Bootstrap grid system

**Fixes and Improvements**

 -  20 overriden templates removed from Flat theme


### Version 1.8.1

**Perfomance Improvements**

 -  AjaxSearch scripts refactored and inline js completely removed from templates
 -  Js improvents for currency and language dropdowns in all argento themes

**Bugfixes**

 -  Fixed custom.css sort order:
    Custom.css should be added after theme.css to allow to customize all theme
    styles
 -  Fixed highlight filters by stock status and quantity for the following
    product types:
    - Bestsellers
    - Popular
    - Products
    - Recent reviews

### Version 1.8.0

[Upgrade Instructions](../upgrade-instructions/#version-174---180)

**New Features**

 -  Bootstrap grid system added
    - New homepage and footer markup in ArgentoArgento design
    - Resized homepage images to match Bootstrap powered grid system sizing

**Fixes and Improvements**

 -  Fixed css resources sort order to improve CSS parallel loading
 -  Fixed catalog configurable swatches on non-anchored categories
 -  EasyTabs: fixed JS error on product page when it has no tabs
 -  Easyslide: overall performance improvements and optimization
 -  Highlight: widget interface improvements, new filters by inventory added
 -  Lightbox Pro: css optimizations
 -  Review Reminder:
    - Use proper settings according order store id
    - Fixed translations for mail sent via cron

### Version 1.7.4

 -  FontAwesome updated to version 4.6.3
 -  backend CSS loads depends on request - secured or unsecured
 -  AskIt: new frontend responsive design, question can be assigned to multiple products, question create date fix
 -  LightboxPro: significant code refactoring, JS files load with 'defer' attribute and do not block page rendering,  no more inline JS
 -  Navigation Pro: fixed third level drop-downs on tablet devices
 -  ProLabels: fixed label priority determination
 -  Testimonials: stars for 'Rating' field at new testimonial form, JS files load with 'defer' attribute
 -  SuggestPage: avoided potential error with multiple calls of event 'sales_quote_product_add_after'
