---
layout: default
title: Navigationpro CSS helpers
description: CSS Helpers for Navigationpro module
category: Navigationpro
---

# CSS Helpers

Navigationpro gives unlimited posibilities in creating custom dropdowns. In order
to make it easier to add styles to your custom content a plenty of css helpers
comes together with the module. Here you can find most commonly used helpers.

## Global Modifiers

These classes may be used in [layout builder][layout-builder] for custom HTML content.

Class Name      | Description
----------------|--------------------------
**Common Utilities** |
`panel`         | Adds minor paddings and [light-grey background][complex-dropdown]
`links`         | Use this on the `ul` element to give more space around [li's][complex-dropdown]
`transparent`   | Makes transparent background color
`text-small`    | Use [smaller font size][amazon-menu]
`text-big`      | Use bigger font size
`row`           | Element will place whole line and it will be centered
**Display**     |
`flex`          | Apply display:flex style. Useful to make [horizontal lists][complex-dropdown]
`flex-column`   | Use to make vertical lists
**Typography**  |
`bold`          | **Bold** font weight
`regular`       | Regular font weight
`italic`        | _Italic_ font style
`caps`          | UPPERCASE text transform
`text-left`     | Align text to the left
`text-center`   | Align text to the center
`text-right`    | Align text to the right
`text-justify`  | Justify text alignment
**Visibility**  |
`hide`          | Hide element except for screen readers
`display-none`  | Hide element completely
`xs-hide`       | Hide element on mobile devices
`sm-hide`       | Hide element on tablet devices
`md-hide`       | Hide element on laptop devices
`lg-hide`       | Hide element on desktop devices

Additionally, navigationpro utilize following [basscss](http://basscss.com/) modules:

 -  [Margin](http://basscss.com/#basscss-margin)
 -  [Padding](http://basscss.com/#basscss-padding)

You can also use `xs-` prefix modifers for these margin and padding modules.

## Menu Modifiers

These classes may be used in `Custom CSS` field at [Menu Settings][menu-settings] page.

Class Name      | Description
----------------|--------------------------
**Layout**      |
`navpro-amazon` | Use dropdown positioning for [amazon menu][amazon-menu]
`navpro-iconic` | Allows to use [icons/images in item name][iconic-menu]
`iconic-vertical` | Place item [icon/image in separate row][iconic-menu]
`navpro-stacked`| Use [stacked][stacked-menu] dropdown positioning
**Effects**     |
`navpro-overlay`| Use [overlay][overlay] when dropdown is active
**Top Level Caret Icons** |
`caret-bottom`  | Place parent item caret icon [below the item name][iconic-menu]
`caret-hidden`  | Hide parent item caret icon
`caret-light`   | Use [white caret icon][amazon-menu]
`caret-dark`    | Use dark caret icon
**Top level Items Alignment** |
`justify-start` | Align items to the left edge
`justify-center`| Align items to the center
`justify-evenly`| Spread items [across the menu width][iconic-menu]

## Item Modifiers

These classes may be used in `Custom CSS` field at [Item Settings][item-settings] page.

Class Name          | Description
--------------------|--------------------------
**Effects**         |
`navpro-overlay`    | Use [overlay][overlay] when dropdown is active
**Dropdown Visibility** |
`xs-hide-dropdown`  | Hide dropdown on mobile devices
`sm-hide-dropdown`  | Hide dropdown on tablet devices
`md-hide-dropdown`  | Hide dropdown on laptop devices
`lg-hide-dropdown`  | Hide dropdown on desktop devices
**Text Styles**     |
`text-small`        | Use smaller font size
`text-big`          | Use bigger font size
**Caret Icons**     |
`caret-light`       | Use white parent item caret icon
`caret-dark`        | Use dark parent item caret icon
**Top Level Caret Icons** |
`caret-bottom`      | Place caret below the item name
`caret-hidden`      | Hide caret icon

##### Next up

 -  [Back to Main Page](/m2/extensions/navigationpro/)

[menu-settings]:  /m2/extensions/navigationpro/backend/menu-settings/#general-settings "Menu Settings"
[item-settings]:  /m2/extensions/navigationpro/backend/menu-edit/#advanced-settings "Item Settings"
[category-tips]:  /m2/extensions/navigationpro/use-cases/category-tips/ "Category Tips (Labels)"
[layout-builder]: /m2/extensions/navigationpro/ui/dropdown-layout-builder/ "Layout Builder"
[complex-dropdown]: /m2/extensions/navigationpro/use-cases/complex-content/ "Complex Dropdown Content"
[amazon-menu]: /m2/extensions/navigationpro/use-cases/amazon-menu/ "Amazon Menu"
[iconic-menu]: /m2/extensions/navigationpro/use-cases/iconic-menu/ "Iconic Menu"
[stacked-menu]: /m2/extensions/navigationpro/use-cases/stacked-dropdowns/ "Stacked Menu"
[overlay]: /m2/extensions/navigationpro/use-cases/overlay/ "Overlay"
