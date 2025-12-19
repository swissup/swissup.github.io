---
layout: default
title: AMP custom theme
description: How to create custom AMP theme
keywords: amp custom theme
category: Accelerated Mobile Pages
---

# Custom Theme

AMP provides an easy way to create custom theme with ability to add additional
layout updates with `local.xml` or override existing templates.

In order to apply custom theme, you need to create new folder inside
`app/design/frontend/tmamp` folder and select it in
[AMP configuration][amp_config_design] section.

> You can also use [custom styles](../custom-styles/) files inside your custom
> theme skin folder

##### Example

Let's remove search icon and form from the header.

 1. Create `app/design/frontend/tmamp/MYTHEME/layout/local.xml` file with
    following content:

    ```xml
    <layout version="0.1.0">
        <default>
            <remove name="top.search"/>
        </default>
    </layout>
    ```

 2. Create `skin/frontend/tmamp/MYTHEME/scss/_custom.scss` file with
    following content:

    ```scss
    .header .search-icon {
        @extend .hidden;
    }
    ```

 3. Navigate to [AMP configuration][amp_config_design] and select `MYTHEME` value
    for theme option.
 4. Clear cache and check result at frontend.

##### Next Up

 -  [Back to Home](/m1/extensions/amp/)
 -  [Custom styles](/m1/extensions/amp/customization/design/custom-styles/)

[amp_config_design]: /m1/extensions/amp/configuration/#design
