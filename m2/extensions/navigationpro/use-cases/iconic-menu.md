---
layout: default
title: Navigationpro Iconic Menu
description: Creating navigationpro iconic menu
category: Navigationpro
---

# Iconic Menu

![Iconic Menu](/images/m2/navigationpro/use-cases/iconic-menu.png)

Navigate to _Swissup > NavigationPro_ page, open menu to edit, apply the custom
[item renderer][item-renderer] to each top level category as shown below:

![Iconic Menu Backend](/images/m2/navigationpro/use-cases/iconic-menu-backend.png)

Click on **Menu Settings** button and fill the following CSS classes
in [Menu Settings][menu-settings] panel:
`justify-around caret-bottom navpro-iconic iconic-vertical`.

Explanation:

 - `justify-around` — Preserve space around each category
 - `caret-hidden` — Hide parent caret icon
 - `navpro-iconic` — Nicely align category name and category image
 - `iconic-vertical` — Place category icon on a separate row

#### Next up
{:.no_toc}

 -  [Back to Main Page](/m2/extensions/navigationpro/)
 -  [CSS Helpers][css-helpers]

[item-renderer]: /m2/extensions/navigationpro/ui/menu-item-name-as-html/ "Item Name Renderer"
[menu-settings]: /m2/extensions/navigationpro/backend/menu-settings/ "Menu Settings Panel"
[css-helpers]: /m2/extensions/navigationpro/customization/css-helpers/ "CSS Helpers"
