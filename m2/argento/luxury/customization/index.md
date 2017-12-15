---
layout: default
title: Argento Luxury Customization
description: Argento Luxury Customization
category: Argento
---

### Change the view of homepage slider

> Starting from Argento version 1.1.0 you can configure it in admin under `Stores > Configuration > Swissup Theme Editor > Argento Luxury > Home Page > Enable Fullscreen Slider`.

In Argento Luxury theme slider on home page is displayed fullscreen under header.
You can disable it by setting less variable in your
[_argento_custom.less](/m2/argento/customization/custom-css/) file:

```less
@homepage-fullscreen-slider: false;
```

Fullscreen Slider Enabled  | Fullscreen Slider Disabled
---------------------------|-------------------------------------------
![Fullscreen Enabled][Fullscreen Enabled] | ![Fullscreen Disabled][Fullscreen Disabled]

### Use Luxury Icons

Argento Luxury includes own set of svg icons. You can show icon using css class,
for example:

```html
<div class="luxury-icon luxury-cart"></div>
```

Also you can assign icon to any element with less using `.luxury-icon` mixin,
for example:

```less
.minicart-wrapper .action.showcart .text {
    .luxury-icon('cart');
}
```

List of available icons:

 - heart
 - heart-listing
 - customer
 - cart
 - cart-listing
 - search
 - hamburger
 - letter
 - cart-alt
 - lock
 - headphones
 - arrow-left
 - arrow-right
 - bulb
 - compass
 - alert
 - success
 - error
 - warning
 - info

[Fullscreen Enabled]: /images/m2/argento/luxury/customization/fullscreen-slider-enabled.png
[Fullscreen Disabled]: /images/m2/argento/luxury/customization/fullscreen-slider-disabled.png
