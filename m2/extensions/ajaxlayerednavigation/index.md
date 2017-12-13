---
layout: default
title: Ajax Layered Navigation
description: Magento2 Ajax Layered Navigation
keywords: "layered navigation, ajax layered navigation, ajax filters, multiple filters"
category: Ajax Layered Navigation
---

# Ajax Layered Navigation

Layered navigation is one of the most popular Magento features created in order to make shopping quick and easy. Let's improve your store layered navigation with additional useful features! So, now you can use multiple attributes choice for more prices navigation.

*  Allows using multiple choices for same filterable attribute
*  Use price slider instead of default price ranges
*  Provides the optional ajax page content update
*  Multi-store and multi-language support

### Contents

 1. [Installation](installation/)
 2. [Changelog](changelog/)
 3. [Frontend](#frontend)
    - [Category Page](#category-page)
    - [Search Result](#search-result)
    - [One column layout](#one-column-layout)
 4. [Backend](#backend)
    - [Configuration](#configuration)
 5. [Use cases](cases/)
## Frontend

#### Category

Please remember, you should always set a category as `Anchor` in case you want to to make the category have a filter functionality.
Please remember, you should always set an attribute config `Use in Layered Navigation` to `Yes` in case you want to to make the attribute have a filter functionality on `Category Pages`.

Can be used only with catalog input type `Dropdown, Multiple Select and Price` attribute settings.

![Ajax Layered Navigation on Category Page](/images/m2/ajaxlayerednavigation/category.png)

#### Search Result

Please remember, you should always set an attribute config `Use in Search Results Layered Navigation` to `Yes` in case you want to to make the attribute have a filter functionality on `Search Result Page`.

Can be used only with catalog input type `Dropdown, Multiple Select and Price` attribute settings.

![Ajax Layered Navigation on Search Result Page](/images/m2/ajaxlayerednavigation/search.png)

#### One column layout

![One column layout](/images/m2/ajaxlayerednavigation/one-column-layout.png)


## Backend

#### Configuration

The **Ajax Layered Navigation** extension offers flexible and easy to use configuration.
In order to start working with configuration, please go to
`Magento Admin > Stores > Configuration > Swissup > AjaxLayeredNavigation`.

`Use Ajax` - Enable/Disable ajax page content update

![Backend Configuration](/images/m2/ajaxlayerednavigation/config.png)

`Enable scroll to top after ajax reload` - Enable/Disable scroll to top after ajax response. See image below

![Scrool on top](/images/m2/ajaxlayerednavigation/scrollontop.gif)

`Enable sticky layered navigation` - Enable/Disable sticky behavior. See below

![Enable sticky layered navigation - yes](/images/m2/ajaxlayerednavigation/sticky-yes.gif)

`Enable filters slideout` - Enable/Disable explode-implode filter sidebar behaviour. See below

![Enable slideout - yes](/images/m2/ajaxlayerednavigation/slideout.gif)

`Display active filters` - Show/Hide Applied filters. See below

![Applied filters](/images/m2/ajaxlayerednavigation/applied.png)

`Enable pre-exploded filters` - Enable/Disable pre-exploded logic.

`Pre-exploded filters` - List of the attribute. If checked then explode on the frontend.

![Pre-explode backend](/images/m2/ajaxlayerednavigation/explode-back.png)
![Pre-explode frontend](/images/m2/ajaxlayerednavigation/explode-front.png)

`Show options qty`  - Enable/Disable quantity

![Quantity enabled](/images/m2/ajaxlayerednavigation/qty-yes.png)
![Quantity disabled](/images/m2/ajaxlayerednavigation/qty-no.png)

`Show search by options` - Enable/Disable search by filter options

`Show search form when options count is larger than` - Show search if options more then 5 for example. It depends on the previous config option.

![Search by list disabled](/images/m2/ajaxlayerednavigation/searchlist-no.png)
![Search by list enabled](/images/m2/ajaxlayerednavigation/searchlist-yes.png)
![Search by list in action](/images/m2/ajaxlayerednavigation/searchlist-result.png)

`Show + More button` - Enable/Disable + More behaviour

`Show '+ More' when options count is larger than` - Show + More if options more then 6 for example. It depends on the previous config option.

![+ More in action](/images/m2/ajaxlayerednavigation/more.gif)

- [Installation](installation/)
- [Changelog](changelog/)
- [Use cases](cases/)