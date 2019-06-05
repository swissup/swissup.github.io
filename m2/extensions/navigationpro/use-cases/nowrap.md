---
layout: default
title: Navigationpro Nowrap Feature
description: >
    How to move top-level items into separate dropdown, when there is not
    enough space to fit menu in a single line
category: Navigationpro
---

# Nowrap (Single row menu)

Nowrap - is a feature that allows to move top-level items into separate dropdown,
when there is not enough space to fit on a single row.

![Nowrap](/images/m2/navigationpro/use-cases/nowrap.png)

Nowrap feature automatically hides last menu items to guarantee that menu will
fit on a single row.

To activate nowrap feature, you need to add `navpro-nowrap` class to the
[CSS Class field](/m2/extensions/navigationpro/backend/menu-settings/#general-settings).

> **Warning!**
>
> Nowrap works well with the following conditions only:
>  - Menu is on the separate row
>  - Menu takes all amout of available width of parent container
>
> Otherwise it may be tricky to
> make it work properly (Custom work and advanced CSS knowledge may be required).
>
> **Since version 1.11.0 you can use "Offset Feature" to make it work flawlessly!**

### Offset feature

> This feature available since 1.11.0

Offset feature should be used when menu doesn't takes all amount of width in
parent container. The best way to explain this feature - is to show an example.

Let's imagine the following header:

![Nowrap](/images/m2/navigationpro/use-cases/nowrap-offset.png)

In the example above, menu is placed near logo (300px width),
cart and search icons (100px width). To activate nowrap feature for this
header type, you need to:

 -  Add `navpro-nowrap` class to the
    [CSS Class field](/m2/extensions/navigationpro/backend/menu-settings/#general-settings)
 -  Add `navpro-nowrap-offset-400` class to the
    [CSS Class field](/m2/extensions/navigationpro/backend/menu-settings/#general-settings)

#### Next up

 -  [Back to Main Page](/m2/extensions/navigationpro/)
 -  [CSS Helpers][css-helpers]

[css-helpers]: /m2/extensions/navigationpro/customization/css-helpers/ "CSS Helpers"
