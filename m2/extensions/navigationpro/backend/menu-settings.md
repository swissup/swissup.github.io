---
layout: default
title: Navigationpro Menu Settings page
description: Navigationpro menu settings page overview
category: Navigationpro
---

# Menu Settings

This page is accessible when editing existing menu settings.

## General settings

![Menu General Settings](/images/m2/navigationpro/backend/menu-settings/general-settings.png)

Option          | Description
----------------|-----------------------
Identifier      | Unique menu identifier.
Maximal Depth   | Use this option to limit number of loaded dropdown levels. Use `0` to disable limits.
Modifiers       | Set of useful css modifiers to change menu styles and behaviour.
CSS Class       | Usefull for [menu customization][menu-modifiers] and some kind of [menu types][use-cases].
Replace Top Menu at         | Select Store Views where menu should replace standard top navigation
Default Dropdown Settings   | Show popup with global dropdown layout settings.
Default Item Settings       | Show popup with global item settings.
Custom CSS Styles | Add plain CSS styles when need some extra perfection.

##### Modifiers

Modifiers - are the set of css classes that could be easily applied to the menu:

![Modifiers](/images/m2/navigationpro/backend/menu-settings/modifiers.png)

## Global Dropdown settings

![Global Dropdown Settings](/images/m2/navigationpro/backend/menu-settings/dropdown-settings.png)

There are three fieldsets are avialable:

 -  Global dropdown settings.
 -  First level dropdown settings.
 -  Second level dropdown settings.

As you may guess, the first one — is for all dropdown levels; second — for the
first dropdown levels only; and the third — for the second dropdown levels only.

Option              | Description
--------------------|-----------------------
Width               | Change [dropdown width][dropdown-width]
Dropdown Position   | Change [dropdown position][dropdown-position]. _Available for "First level dropdown settings" only_
Layout              | Change [dropdown layout][dropdown-layout]

## Global Item settings

![Global Item Settings](/images/m2/navigationpro/backend/menu-settings/item-settings.png)

There are four fieldsets are avialable:

 -  Global item settings — for all item levels.
 -  First level item settings — for the first item levels only.
 -  Second level item settings — for the second item levels only.
 -  Third level item settings — for the third item levels only.

Option       | Description
-------------|-----------------------
Name as Html | Replace regular template with [your own][item-name-renderer]. See ready to use [examples page](/m2/extensions/navigationpro/use-cases/category-name-templates/).

#### Next up

 -  [Back to Main Page](/m2/extensions/navigationpro/)
 -  [Edit Menu and Menu Items](/m2/extensions/navigationpro/backend/menu-edit/)

[use-cases]: /m2/extensions/navigationpro/use-cases/ "NavigationPro Use Cases"
[menu-modifiers]: /m2/extensions/navigationpro/customization/css-helpers/#menu-modifiers "Menu CSS Modifiers"
[dropdown-width]: /m2/extensions/navigationpro/ui/dropdown-width-modes/ "Dropdown Width Modes"
[dropdown-position]: /m2/extensions/navigationpro/ui/dropdown-position/ "Dropdown Position"
[dropdown-layout]: /m2/extensions/navigationpro/ui/dropdown-layout-builder/ "Dropdown Layout Builder"
[item-name-renderer]: /m2/extensions/navigationpro/ui/menu-item-name-as-html/ "Item Name Renderer"
