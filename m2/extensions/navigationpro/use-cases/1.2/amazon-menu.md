---
layout: default
title: Navigationpro Amazon Menu (deprecated)
description: How to create amazon menu with Navigationpro module
category: Navigationpro
---

# Amazon Menu

* TOC
{:toc}

### Top Menu

**Upgrade to 1.3.0 and create amazon menu with a [few clicks](../../amazon-menu/)!**

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

 2. Click **Menu Settings** button.
 3. Set **CSS Class** value to `navpro-amazon`, and **Maximal Depth** value to 3.
    This will limit number of loaded navigation levels.

    ![General Settings](/images/m2/navigationpro/use-cases/amazon-menu/general-settings.png)

 4. Change **Second Level Dropdown Settings**:

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

 5. Save Menu Settings and see the result on Frontend.
 6. The rest of the top level links are the links to the cms pages. Following
    [CSS helpers][css-helpers] are used for them:

    - `text-small` — Added to decrease links size
    - `ml-auto` — Added to the "Help" item to move it and all next the items to
        the right edge.

P.S. If you'd like to apply additional changes to the specific dropdown only,
you can select the item in the tree and edit **Dropdown Settings** fields for
this particular item.

### Sidebar menu

**Upgrade to 1.3.0 and create amazon menu with a [few clicks](../../amazon-menu/)!**

> Available since 1.1.0

> Our settings for top navigation will show the first 3 category levels only.
> So, we need to create sidebar menu that will show subcategories of
> currently viewed department.

![Amazon Sidebar screenshot](/images/m2/navigationpro/use-cases/amazon-menu/amazon-sidebar-frontend.png)

 1. Create [simple menu][simple-menu]
 2. Navigate to _Content > Widgets_
 3. Create new **Navigationpro** widget with following settings:

    **Layout Updates**

    ![Layout Update Settings](/images/m2/navigationpro/use-cases/amazon-menu/widget-layout-updates.png)

    **Widget Options**

    ![Amazon Sidebar Menu Settings](/images/m2/navigationpro/use-cases/amazon-menu/widget-options.png)

 4. Save the widget.

#### Next up
{:.no_toc}

 -  [Back to Main Page](/m2/extensions/navigationpro/)
 -  [Dropdown Width Modes](/m2/extensions/navigationpro/ui/dropdown-width-modes/)
 -  [Dropdown Layout Builder](/m2/extensions/navigationpro/ui/dropdown-layout-builder/)

[simple-menu]: /m2/extensions/navigationpro/use-cases/simple-menu/ "Simple Menu"
[css-helpers]: /m2/extensions/navigationpro/customization/css-helpers/ "CSS Helpers"
[config]: /m2/extensions/navigationpro/configuration/ "Configuration"

