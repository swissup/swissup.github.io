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

There are following pages are available:

Page            | Default Url
----------------|------------
New Products    | https://example.com/highlight/new.html
Featured        | https://example.com/highlight/featured.html
OnSale Products | https://example.com/highlight/onsale.html
Popular         | https://example.com/highlight/popular.html
Bestsellers     | https://example.com/highlight/bestsellers.html

## Settings

Configuration is located at _Stores > Configuration > Swissup > Highlight Pages_
page.

Each page has configuration settings that allow to change page title and URL.

![Highlight Pages Configuration](/images/m2/highlight/pages/configuration.png)

Bestsellers and Popular products settings allow to set the `Calculation period`
option. It allows to filter products collection by time period in order to get
recent Bestsellers and Popular products.

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
