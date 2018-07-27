---
layout: default
title: Navigationpro Link Bar
description: >
    How to create `Link Bar` navigation for mobile devices
keywords: mobile navigation, linkbar, link bar
category: Navigationpro
---

# Link Bar - Alternative Mobile Navigation

As you probably know, Magento hides default navigation menu on mobile devices
and shows the "hamburger menu" instead.

The problem is many clients do not use this icon, because they simply don't
know that they will find the navigation behind it. This results in
decreased category page views, which is obviously not good.

> You can read more about "hamburger menu" troubles and possible
> solution in [this great article][link-bar]
> by [growthrock.co](http://growthrock.co).

Let's create a "LinkBar" menu for mobile devices with top category links and
show it under the header:

![Result](/images/m2/navigationpro/use-cases/link-bar/result.png)

Proceed with the following steps:

 1. Navigate to _Swissup > NavigationPro_ page and press **Add New Menu** button
 2. Create "LinkBar" menu using ["Empty Menu" type](/m2/extensions/navigationpro/backend/menu-new/#general-settings)
 3. [Import your store category tree](/m2/extensions/navigationpro/ui/menu-items-tree/#import-item)
    using **Import Item** button
 4. Press **Menu Settings** and change the following values:

    Option          | Value
    ----------------|-------
    Maximal Depth   | 1
    CSS Class       | navpro-linkbar navpro-nowrap md-hide lg-hide

    > If you would like to show all categories without "More" button, remove
    > `navpro-nowrap` class. In this case we recommend to add `navpro-pills`
    > class.

 5. Navigate to _Content > Widgets_ page and press **Add Widget** button
 6. Create "Navigationpro" widget and assign it you your active theme. Press **Continue**
 7. Fill the form as follows:

    **Storefront properties tab**

    Option          | Value
    ----------------|------
    Widget Title    | Navigationpro LinkBar
    Assign to Store Views | All store views
    **Layout updates** |
    Display on      | Specified Page
    Page            | CMS Home Page
    Container       | After Page Header Top

    **Widget Options tab**

    Option  | Value
    --------|------
    Menu    | LinkBar

    Save the widget.

 8. That's all. Navigate to your store homepage from mobile device and check
    your new "LinkBar" navigation.

#### Additional styles

You can also combine this menu with other NavigationPro features.
For example, if you have a nice icons for all of your categories, you can try
to use [iconic menu][iconic-menu] and [category tips][category-tips]:

![LinkBar with Icons](/images/m2/navigationpro/use-cases/link-bar/iconic.png)

#### Next up

 -  [Back to Main Page](/m2/extensions/navigationpro/)

[link-bar]: http://growthrock.co/ecommerce-mobile-home-page-navigation/ "The Link Bar, an Ecommerce Mobile Homepage Navigation Alternative"
[iconic-menu]: /m2/extensions/navigationpro/use-cases/iconic-menu/ "Iconic Menu"
[category-tips]: /m2/extensions/navigationpro/use-cases/category-tips/ "Category tips (Labels)"
