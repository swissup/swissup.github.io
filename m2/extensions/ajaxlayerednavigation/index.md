---
layout: default
title: Ajax Layered Navigation
description: Magento2 Ajax Layered Navigation
keywords: "layered navigation, ajax layered navigation, ajax filters, multiple filters"
category: Ajax Layered Navigation
---

# Ajax Layered Navigation

Layered navigation is one of the most popular magento features created in order to make shopping quick and easy. Let's improve your store layered navigation with additional useful features! So, now you can use multiply attributes choice for more prices navigation.

*  Allows to use multiply choices for same filterable attribute
*  Use price slider instead of default price ranges
*  Provides the optional ajax page content update
*  Multi-store and multi-language support

### Contents

 1. [Installation](installation/)
 2. [Changelog](changelog/)
 3. [Frontend](#frontend)
    - [Category Page](#category-page)
    - [Search Result](#search-result)
 4. [Backend](#backend)
    - [Configuration](#configuration)

## Frontend

#### Category

Please remember, you should always set a category as `Anchor` in case you want to to make the category have a filter functionality.
Please remember, you should always set a attribute config `Use in Layered Navigation` to `Yes` in case you want to to make the attribute have a filter functionality on `Category Pages`.

Can be used only with catalog input type `Dropdown, Multiple Select and Price` attribute settings.

![Ajax Layered Navigation on Category Page](/images/m2/ajaxlayerednavigation/category.png)

#### Search Result

Please remember, you should always set a attribute config `Use in Search Results Layered Navigation` to `Yes` in case you want to to make the attribute have a filter functionality on `Search Result Page`.

Can be used only with catalog input type `Dropdown, Multiple Select and Price` attribute settings.

![Ajax Layered Navigation on Search Result Page](/images/m2/ajaxlayerednavigation/search.png)

## Backend

#### Configuration

The **Ajax Layered Navigation** extension offers flexible and easy to use configuration.
In order to start working with configuration, please go to
`Magento Admin > Stores > Configuration > Swissup > AjaxLayeredNavigation`.

`Use Ajax` - Enable/Disable ajax page content update

![Backend Configuration](/images/m2/ajaxlayerednavigation/config.png)
