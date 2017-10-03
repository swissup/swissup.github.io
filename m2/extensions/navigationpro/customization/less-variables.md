---
layout: default
title: Navigationpro LESS Variables
description: LESS Variables for Navigationpro module
category: Navigationpro
---

# LESS Variables

Use these variables to quickly customize menu styles with [custom-css][custom-css]
feature.

Variable                        | Default Value | Description
--------------------------------|---------------|--------------------
**Layout**                      |               |
@navpro__xs__max-width          | `480px`       | Extra small screen size
@navpro__sm__max-width          | `767px`       | Small screen size
@navpro__lg__min-width          | `1024px`      | Large screen size
@navpro-container__max-width    | `1280px`      | Menu container max-width
@navpro-container__width        | `100%`        | Menu container width
**Parent Item Caret Icon**      |               |
@navpro-parent-item__caret-dark | `data:image/base64` | Dark caret image
@navpro-parent-item__caret-light| `data:image/base64` | Light caret image
@navpro-parent-item-level0__caret | `@navpro-parent-item__caret-dark` | Caret for the top level items
@navpro-parent-item__caret      | `@navpro-parent-item__caret-dark` | Caret for the all level items except the top level
**Dropdown Variables**          |               |
@navpro-dropdown__use-shevron   | `true`        | Use shevron on the top of dropdown submenu
@navpro-dropdown__use-animation | `true`        | Use dropdown animation
@navpro-dropdown__background    | `#fff`        | Dropdown background color
@navpro-dropdown__border-color  | `#eaeaea`     | Dropdown border color
@navpro-dropdown__border        | `1px solid @navpro-dropdown__border-color` | Dropdown border styles
@navpro-dropdown__box-shadow    | `0 2px 2px -2px rgba(0, 0, 0, 0.1)` | Dropdown box shadow
@navpro-dropdown__padding       | `12px`        | Dropdown inner padding
@navpro-dropdown__z-index       | `500`         | z-index
**Top Level Link Styles**       |               |
@navpro-link-level0__padding    | `11px 12px`   | Top level items padding
@navpro-link-level0-caret__padding | `20px`     | Top level items padding for caret icon
**Category Tips (Labels)**      |               |
@navpro-tip__font-family        | `'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif` | Font for category tips
@navpro-tip__font-size          | `.7em`        | Font size for category tips
@navpro-tip__font-weight        | `normal`      | Font weight
@navpro-tip__color              | `#fff`        | Text color
@navpro-tip__black__color       | `#fff`        | Text color for black tip
@navpro-tip__background-color   | `#1979c3`     | Default tip background
@navpro-tip__accent__background-color | `#ff7103` | Accent tip background
@navpro-tip__muted__background-color  | `#555`  | Muted tip background
@navpro-tip__black__background-color  | `#000`  | Black tip background

##### Next up

 -  [Back to Main Page](/m2/extensions/navigationpro/)

[custom-css]: /m2/extensions/navigationpro/customization/custom-css/ "Custom CSS"
