---
layout: default
title: Navigationpro Menu Settings page
description: Navigationpro menu settings page overview
category: Navigationpro
---

# Menu Settings

This page is accessible from _Swissup > NavigationPro_ page when creating new
menu. This page is also shown when editing existing menu settings.

The page has two sections: [General settings](#general-settings), where you can
setup menu preferences, and [Dropdown settings](#dropdown-settings), where dropdown
preferences could be changed.

## General settings

![Menu General Settings](/images/m2/navigationpro/backend/menu-settings/general-settings.png)

Option          | Description
----------------|-----------------------
Identifier      | Unique menu identifier.
Maximal Depth   | Use this option to limit number of loaded dropdown levels. Use `0` to disable limits.
CSS Class       | Usefull for [menu customization][menu-modifiers] and some kind of [menu types][use-cases].

## Dropdown settings

![Menu Dropdown Settings](/images/m2/navigationpro/backend/menu-settings/dropdown-settings.png)

There are three fieldsets are avialable:

 -  Default dropdown settings
 -  First level dropdown settings
 -  Second level dropdown settings.

As you may guess, the first one — is for all dropdown levels; second — for the
first dropdown levels only; and the third — for the second dropdown levels only.

Option              | Description
--------------------|-----------------------
Width               | Change [dropdown width][dropdown-width]
Dropdown Position   | Change [dropdown position][dropdown-position]. _Available for "First level dropdown settings" only_
Layout              | Change [dropdown layout][dropdown-layout]

#### Next up

 -  [Back to Main Page](/m2/extensions/navigationpro/)
 -  [Edit Menu and Menu Items](/m2/extensions/navigationpro/backend/menu-edit/)

[use-cases]: /m2/extensions/navigationpro/use-cases/ "NavigationPro Use Cases"
[menu-modifiers]: /m2/extensions/navigationpro/customization/css-helpers/#menu-modifiers "Menu CSS Modifiers"
[dropdown-width]: /m2/extensions/navigationpro/ui/dropdown-width-modes/ "Dropdown Width Modes"
[dropdown-position]: /m2/extensions/navigationpro/ui/dropdown-position/ "Dropdown Position"
[dropdown-layout]: /m2/extensions/navigationpro/ui/dropdown-layout-builder/ "Dropdown Layout Builder"
