---
layout: default
title: Argento grid system
description: How to use bootstrap powered grid system in Argento
keywords: >
    argento grid, bootstrap grid
category: Argento
gallery:
  - href: /images/m2/argento/customization/grid-system/slider.png
    src: /images/m2/argento/customization/grid-system/slider-small.png
    w: 980
    h: 770
    alt: Grid usage by Slider and Banners
    title: >
        Slider and banner content are using col-md-8 and col-md-4 classes.
        Three banners are wrapped into additional grid, that works on small
        devices only: each of banner has col-md-12 and col-xs-4 class that makes
        them organized into 1 column for tablets and desktops and 3 columns
        for the phones.
  - href: /images/m2/argento/customization/grid-system/widgets.png
    src: /images/m2/argento/customization/grid-system/widgets-small.png
    w: 980
    h: 770
    alt: Grid usage by Highlight widgets
    title: >
        Homepage tabs and additional sidebar are wrapped into col-md-8 and
        col-md-4 classed. Testiomonials, Bestsellers and Popular products
        are wrapped into additional grid for tablet and mobile devices:
        Testimonials block expands to full screen width, while Bestsellers
        and Popular products stays on the same line in two columns. Each of
        blocks have the following classes for mobile grid:
        col-xs-12 (full width), col-xs-6 (half width)
  - href: /images/m2/argento/customization/grid-system/footer.png
    src: /images/m2/argento/customization/grid-system/footer-small.png
    w: 980
    h: 320
    alt: Grid usage in footer
    title: >
        Footer cms content and footer contacts sections are wrapped into col-md-9
        and col-md-3 classes to fit nicely on tablets and desktops. You can also
        see that each of "About us", "Customer center" and other footer link
        groups are using col-md-3 and col-xs-6 classed, that maked them organized
        into 4 columns on tablets and desktops and 2 columns on phones.
---

# Argento grid system

Argento utilize Bootstrap powered 12 columns grid system to organize cms content.

Typical grid markup with three equal width columns on all devices:

```html
<div class="argento-grid">
    <div class="col-xs-4">
        col-1
    </div>
    <div class="col-xs-4">
        col-2
    </div>
    <div class="col-xs-4">
        col-3
    </div>
</div>
```

`col-xs` means that this rule will work on all screen dimensions. If you would
like to specify separate rules for different devices, use couple of classes with
appropriate suffix.

Column size prefix | Description
-------------------|------------
`-xs` | All screens rule
`-sm` | Small screen / tablet
`-md` | Medium screen / desktop
`-lg` | Large screen / wide desktop

See more examples at [official Bootstrap documentation](http://getbootstrap.com/css/#grid-example-mixed).

### Examples

{% include gallery.html images=page.gallery class="scroll phone-up-2 tablet-up-3 photoswipe" %}
