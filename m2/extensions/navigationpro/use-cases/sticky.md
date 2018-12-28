---
layout: default
title: Navigationpro Sticky Menu Feature
description: >
    How make sticky menu using navigationpro module
category: Navigationpro
---

# Sticky menu

> This feature is available since 1.9.0

Sticky menu will stuck to the screen edge when you scroll the page.

![Sticky menu](/images/m2/navigationpro/use-cases/sticky/sticky.png)

To activate sticky menu, you need to add `navpro-sticky` class to the
[CSS Class field](/m2/extensions/navigationpro/backend/menu-settings/#general-settings)
in the menu settings form. When menu is added to the [sidebar](/m2/extensions/navigationpro/use-cases/sidebar-menu/)
add class to the "Additional CSS Class" field in the widget form.

Additionally you may use `navpro-top10..navpro-top-100` classes to set the gap
between stuck element and screen edge.

> **Warning!**
>
> 1. When sticky is used - [overlay](/m2/extensions/navigationpro/use-cases/overlay/)
>    is automatically disabled due to numerous CSS conflicts with third-party themes.
>
> 2. Sticky menu 'stuck' **inside parent element bounds** only.
>
>    Examples:
>    - When menu is rendered at the bottom of the `.header` sticky will not work because of header bounds.
>    - When menu is rendered at the top of the `.header` sticky will work fine (inside header bounds only).
>    - When menu is rendered inside a `.page-wrapper` sticky will work fine since it's a long container.
>
> 3. IE is not supported.

#### Next up

 -  [Back to Main Page](/m2/extensions/navigationpro/)
 -  [CSS Helpers][css-helpers]

[css-helpers]: /m2/extensions/navigationpro/customization/css-helpers/ "CSS Helpers"
