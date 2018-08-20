---
layout: default
title: AMP custom layout and templates
description: How to change AMP layout and templates
keywords: amp custom layout and templates
category: Accelerated Mobile Pages
---

# Custom Layout and Templates

AMP provides an easy way to modify layout updates or override existing templates.

In order to apply custom changes, you need to create new files inside
your active theme folder (eg. “app/design/frontend/Magento/luma/Swissup_Amp/layout/swissupamp_default.xml).

Use layout handles with `swissupamp_` prefix to modify only amp pages
without affecting main theme.

##### Layout Modification Example

Let's remove search icon and form from the header.

 1. Create `app/design/frontend/Magento/luma/Swissup_Amp/layout/swissupamp_default.xml`
    file with following content:

    ```xml
    <layout xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="urn:magento:framework:View/Layout/etc/layout_generic.xsd">
        <body>
            <referenceBlock name="top.search" remove="true" />
        </body>
    </layout>
    ```

 2. Create `app/design/frontend/Magento/luma/Swissup_Amp/web/css/scss/_custom.scss`
    file with following content:

    ```scss
    .header .search-icon {
        @extend .hidden;
    }
    ```

 3. Clear cache and check result at frontend.

##### Template Modification Example

 1. Copy template you need to modify from AMP extension to your theme folder
    and apply your customizations in it, for example
    `app/design/frontend/Magento/luma/Swissup_Amp/templates/header/nav-right.phtml`

 2. Clear cache and check result at frontend.

##### Next Up

 -  [Back to Home](/m2/extensions/amp/)
 -  [Custom styles](/m2/extensions/amp/customization/design/custom-styles/)
