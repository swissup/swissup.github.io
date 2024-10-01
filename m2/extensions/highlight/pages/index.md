---
layout: default
title: Highlight Pages
description: >
    Highlight pages - magento landing pages for the promoted products
keywords: >
    magento landing page, highlight pages, featured products page, bestsellers
    products page, highlight settings
category: Highlight
---

# Highlight Pages

 1. [Available Pages](#available-pages)
 2. [Settings](#settings)
 3. [Create Custom Page](#create-custom-page)

## Available Pages

There are following pages available:

Page            | Default Url
----------------|------------
New Products    | https://example.com/highlight/new.html
Featured        | https://example.com/highlight/featured.html
OnSale Products | https://example.com/highlight/onsale.html
Popular         | https://example.com/highlight/popular.html
Bestsellers (By orders count)       | https://example.com/highlight/bestsellers.html
Bulk Bestsellers (By quantity sold) | https://example.com/highlight/bulksellers.html

## Settings

Configuration is located at _Stores > Configuration > Swissup > Highlight Pages_
page.

Each page has configuration settings that allow to change page title and URL.

![Highlight Pages Configuration](/images/m2/highlight/pages/configuration.png)

Bestsellers and Popular products settings allow to set the `Calculation period`
option. It allows to filter products collection by time period in order to get
recent Bestsellers and Popular products.

## Advanced settings

You can use layout update xml file to change other settings that are not
available in admin. To do that create the file at `<theme_dir>/Swissup_Highlight/layout`
folder.

Possible file names:

 -  `highlight_view_index.xml` - layout update for all pages.
 -  `highlight_view_bestsellers.xml`
 -  `highlight_view_bulksellers.xml`
 -  `highlight_view_featured.xml`
 -  `highlight_view_newaction.xml`
 -  `highlight_view_onsale.xml`
 -  `highlight_view_popular.xml`

`<theme_dir>/Swissup_Highlight/layout/highlight_view_onsale.xml` example:

```xml
<?xml version="1.0"?>
<page xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
      xsi:noNamespaceSchemaLocation="urn:magento:framework:View/Layout/etc/page_configuration.xsd">
    <body>
        <referenceBlock name="category.products.list">
            <action method="setOrder">
                <argument name="order" xsi:type="string">price</argument>
            </action>
            <action method="setDir">
                <argument name="dir" xsi:type="string">asc</argument>
            </action>
        </referenceBlock>
    </body>
</page>
```

## Create custom page

Let's create a widget and a page that will show all bestsellers from "Fitness Equipment"
category only:

![Widget](/images/m2/highlight/pages/custom-page-widget.png)

Open your homepage in backend and add "Highlight: Bestsellers" widget.
When using "Bestsellers" widget, "View All" link is generated automatically
according to highlight settings. But, in order show bestsellers from
"Fitness Equipment" category we need to show url to another "custom" page.
To do this, simply fill "URL" field when inserting a widget:

![Page URL](/images/m2/highlight/pages/custom-page-url.png)

Now our widget leads to non-existing "fitness-bestsellers" page. Let's create it!
Create a regular CMS page with following settings:

Option          | Value
----------------|----------
Page Title      | Fitness Equipments Bestsellers
Content Heading | Fitness Equipments Bestsellers
Contents        | Insert highlight widget with `page_count=10` and filter by "Fitness" category.
URL Key         | fitness-bestsellers

Result:

![Custom page with highlight widget](/images/m2/highlight/pages/custom-page.png)

##### Next up

Great! Now you might want to see next:

- [Documentation homepage](/m2/extensions/highlight/)
