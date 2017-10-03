---
layout: default
title: Navigationpro Edit Menu page
description: Navigationpro menu and items page overview
category: Navigationpro
---

# Edit Menu Page

The page has the following sections:

 -  [Top toolbar](#top-toolbar)
 -  [Menu Items Tree](#menu-items-tree)
 -  [General settings](#general-settings)
 -  [Advanced settings](#advanced-settings)
 -  [Dropdown settings](#dropdown-settings)

## Top Toolbar

![Top toolbar](/images/m2/navigationpro/backend/menu-edit/top-toolbar.png)

From the top toolbar you can switch active store view and save specific values
for that store, open menu settings, and save current menu item.

**Menu Settings** button will open
[menu settings form](/m2/extensions/navigationpro/backend/menu-settings/)
in modal panel.

## Menu Items Tree

![Menu Items Tree](/images/m2/navigationpro/backend/menu-edit/menu-items-tree.png)

You can **Create**, **Import**, and **Move** items in the tree.
[Read more](/m2/extensions/navigationpro/ui/menu-items-tree/) about
tree element.

> Please note, that in order to move one item inside other, you need to expand
> destination item first.

## General Settings

![General Settings](/images/m2/navigationpro/backend/menu-edit/general-settings.png)

Option | Description
-------|------------
Enabled | Ability to enable or disable item visibility
Sync Name and URL with Category Data | This option is visible if the item was imported only. When enabled, item name and url will be taken from original category. When disabled, you can override this data with your own.
Name | Text to show on frontend
Url | Item link

## Advanced Settings

![Advanced Settings](/images/m2/navigationpro/backend/menu-edit/advanced-settings.png)

Option | Description
-------|------------
Name as Html | Replace regular name renderer with [your own][item-name-renderer]. This is how you can add [category labels][category-tips], [icons and images][iconic-menu] near the category text.
CSS Class | Usefull to apply custom css class to the item. See available item [css helpers][item-modifiers].

## Dropdown Settings

![Advanced Settings](/images/m2/navigationpro/backend/menu-edit/dropdown-settings.png)

By default, **Use Menu Settings** is active and all other options are not visible.
In order to apply custom dropdown settings, switch off **Use Menu Settings**
option.

Option  | Description
--------|----------------------------------------
Width   | Change [dropdown width][dropdown-width]
Layout  | Change [dropdown layout][dropdown-layout]
CSS Class | Additional CSS classes could be useful when customizing dropdown styles

#### Next up

 -  [Back to Main Page](/m2/extensions/navigationpro/)

[item-name-renderer]: /m2/extensions/navigationpro/ui/menu-item-name-as-html/ "Item Name Renderer"
[item-modifiers]: /m2/extensions/navigationpro/customization/css-helpers/#item-modifiers "Item CSS Modifiers"
[dropdown-width]: /m2/extensions/navigationpro/ui/dropdown-width-modes/ "Dropdown Width Modes"
[dropdown-layout]: /m2/extensions/navigationpro/ui/dropdown-layout-builder/ "Dropdown Layout Builder"
[category-tips]: /m2/extensions/navigationpro/use-cases/category-tips/ "Category Tips (Labels)"
[iconic-menu]: /m2/extensions/navigationpro/use-cases/iconic-menu/ "Iconic Menu"
