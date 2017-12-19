---
layout: default
title: AskIt changelog
description: AskIt changelog
category: AskIt
gallery:
  - href: /images/m1/extensions/askit/askit-2.3-questions.png
    src: /images/m1/extensions/askit/askit-2.3-questions.png
    w: 987
    h: 925
    alt: New frontend design
    title: New frontend design
  - href: /images/m1/extensions/askit/askit-2.3customer.png
    src: /images/m1/extensions/askit/askit-2.3customer.png
    w: 1299
    h: 981
    alt: Customer questions
    title: Customer questions
  - href: /images/m1/extensions/askit/askit-2.3-product-backend.png
    src: /images/m1/extensions/askit/askit-2.3-product-backend.png
    w: 1813
    h: 696
    alt: New backend interface assigned question to product
    title: New backend interface assigned question to product
  - href: /images/m1/extensions/askit/askit-2.3.assigns.png
    src: /images/m1/extensions/askit/askit-2.3.assigns.png
    w: 1833
    h: 696
    alt: New backend interface assigning
    title: New backend interface assignimg
---

# AskIt Changelog

### Version 2.3.13

 -  Fixed ‘reached 100 match iterations’ when URL end with /.
 -  Fixed customer email template in nl_NL locale.

### Version 2.3.11

 -  Sort questions by votes count in widget.

### Version 2.3.9

 -  Remove "select all" at backend grid (it does not work correctly)

### Version 2.3.8

 -  Captcha model check fix
 -  Fix create spam empty question bug

### Version 2.3.7

 -  Add canonical url
 -  Fix double pages
 -  cdata minification fixed
 -  Add product.js on askit_index_product

### Version 2.3.6

 -  Improve backed grid with questions (fix issues with filters)
 -  Fix javascript with initialization to make it work after HTML/JS
    minification

### Version 2.3.4

 -  Missing translations added
 -  Change mass status action parameter renamed

### Version 2.3.3

 -  Status filtering for answers was added (show pending answers bug was fixed)
 -  Fixed product url generation for emails
 -  Mass answers status change action add

### Version 2.3.2

 -  export action was fixed
 -  correct block type for askit_tabbed block in layout
 -  vote table customer foreign key bug was fixed

### Version 2.3.1

 -  create unique key bug was fixed
 -  drop all foreign keys to upgrade was added

### Version 2.3.0

**Features**

 -   Now you can assign question to multiple products (items)
 -   New frontend design
 -   Mobile design
 -   New question tab on product edit page

**Improvements & Fixes**

 -  created time change functionality was fixed
 -  statusess logic was refactored

{% include gallery.html images=page.gallery class="scroll phone-up-1 tablet-up-3 photoswipe" %}
