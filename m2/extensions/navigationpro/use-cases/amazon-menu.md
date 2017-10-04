---
layout: default
title: Navigationpro Amazon Menu
description: How to create amazon menu with Navigationpro module
category: Navigationpro
---

# Amazon Menu

> Don't have a menu yet? Create [simple menu][simple-menu], activate it the
> [config][config] and come back!

![Amazon Menu](/images/m2/navigationpro/use-cases/amazon-menu.png)

 1. Navigate to _Swissup > NavigationPro_ page, open menu to edit.

    > Please note, that you need to create **Departaments** item and move all
    > categories inside it.
    >
    > You can use a link to CMS page for the **Deparataments** item. Referenced
    > CMS page can utilize [EasyCatalogImages](/m2/extensions/easycatalogimages/)
    > widget to list all of your categories.

 2. Click **Menu Settings** button and change **Second Level Dropdown Settings**:

    ![Second level dropdown settings](/images/m2/navigationpro/use-cases/amazon-menu/second-level-dropdown-settings.png)

    Subacategories Settings:

    Option                      | Value
    ----------------------------|-------
    Columns Count               | 2
    Columns Direction           | Vertical
    Nested Levels Per Dropdown  | 2

    HTML Content Settings:

    Option  | Value
    --------|------
    Content | Upload image with **Insert Image** button

 3. Save Menu Settings and see the result on Frontend.
 4. The rest of the top level links are the links to the cms pages. Following
    [CSS helpers][css-helpers] are used for them:

    - `text-small` — Added to decrease links size
    - `ml-auto` — Added to the "Help" item to move it and all next the items to
        the right edge.

P.S. If you'd like to apply additional changes to the specific dropdown only,
you can select the item in the tree and edit **Dropdown Settings** fields:

![Item dropdown settings](/images/m2/navigationpro/use-cases/megamenu/item-dropdown-settings.png)

#### Next up
{:.no_toc}

 -  [Back to Main Page](/m2/extensions/navigationpro/)
 -  [Dropdown Width Modes](/m2/extensions/navigationpro/ui/dropdown-width-modes/)
 -  [Dropdown Layout Builder](/m2/extensions/navigationpro/ui/dropdown-layout-builder/)

[simple-menu]: /m2/extensions/navigationpro/use-cases/simple-menu/ "Simple Menu"
[css-helpers]: /m2/extensions/navigationpro/customization/css-helpers/ "CSS Helpers"
[config]: /m2/extensions/navigationpro/configuration/ "Configuration"

