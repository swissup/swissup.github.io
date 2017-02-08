---
layout: default
title: Manage Banners
description: Easybanner banner management interfaces
category: Easy Banners
---

# Manage banners

### Contents

- [Banners Grid](#grid)
- [Banner form](#banner-form)
    - [General information](#general-information)
    - [Content](#content)
    - [Conditions](#conditions)
    - [Statistics](#statistics)

### Grid

The grid with all banners is available at _Admin > Templates-Master > Easy Banner > Manage Banners_
page.

![Banners grid](/images/m1/easy-banners/backend/banner/grid.png)

You can also add a new banner from this page. Use **Add banner** button in the
upper right corner of the page to create a new banner.

## Banner form

### General information

![General Information Tab](/images/m1/easy-banners/backend/banner/form-general-information.png)

Field       | Description
------------|------------
Name        | The name of the banner
Sort Order  | Sort order, used by placeholder to show banners one-by-one
Store View  | Show banner at specific store views
Type        | Allows to create Lightbox, Awesomebar or Standard banner
Placeholder | Attach banner to specific placeholder (This option is available for Standard banner type only)
Status      | Ability to enable/disable banner

### Content

There are two content modes available (**image** and **html**):

{% include gallery.html images=site.data.gallery.m1.easy-banners.backend.banner.form-content class="phone-up-2 tablet-up-2 photoswipe scroll" %}

Field       | Description
------------|------------
**General Information** |
URL | Url to open
Hide URL | Set 'Yes' and destination url will be invisible at frontend
Target | Allows to open URL in a same window, new tab or popup window
Css Class | Useful to apply specific styles to the banner
Mode | Allows to use Image or Html banner
**Image Options** |
Title | Link title
Image | Image to show
Width | Image width
Height | Image height
Use image resizer | Allows to resize banner on server-side, before output. When set to 'No' banner will be resized with width/height attributes only.
Retina support | When set to 'Yes', srcset will be generated for retina display with double sized image
Background color | Color to use to fill empty space, when resizer is used
**Html Content Options** |
Content | Allows to use any valid HTML tags and Magento Widgets.  {% raw %}{{tm_banner_url}}{% endraw %} variable is available to generate trackable banner url

### Conditions

Conditions tab allows you to use flexible rules to display the banner:

{% include gallery.html images=site.data.gallery.m1.easy-banners.backend.banner.form-conditions class="phone-up-3 tablet-up-3 photoswipe scroll" %}

Condition | Description
----------|------------
Product Attribute Combination   | Allows to create rule based on currently viewing product attributes. Attribute with "Use for Promo Rule Conditions" property is visible only in this list.
Conditions Combination          | Allows to create additional conditions branch.
**General Conditions** |
Category        | Current category rule
Product         | Current product rule
Page            | Current page rule
Page URL        | Page URL based rule
Customer Group  | Customer group based rule
**Banner Statistics** |
Clicks Count        | Allows to hide banner when more than X clicks are logged
Display Count       | Allows to hide banner when more than X displays are logged
**Cart Conditions** |
Subtotal (Excl.Tax) | Show/hide banner according to client's cart subtotal
Subtotal (Incl.Tax) | Show/hide banner according to client's cart subtotal
**Date Conditions** |
Day of Week     | Show/hide banner periodically on specific day of the week
Day of Month    | Show/hide banner periodically on specific day of the month
Current Date    | Show/hide banner on specific date, or daterange (holiday, promo day, etc)
Current Time    | Show/hide banner at specified time or timerange
**Lightbox and Awesomebar Conditions** |
Display Count per Customer          | Do not show banner more than X times for particular customer
Customer browsing time (seconds)    | Show banner after X seconds of browsing time (idle + activity)
Customer inactivity time (seconds)  | Show banner after X seconds of idle time
Customer activity time (seconds)    | Show banner after X seconds of active browsing
Scroll offset                       | Show banner customer scrolled down for more than X pixels

### Statistics

Basic charts for recent activity can be found at statistics tab:

![Statistics tab](/images/m1/easy-banners/backend/banner/form-statistics.png)

> Easy Banners provides views and clicks statistics for **Image** banners only.
> In order to receive clicks statistics for **Html** banners you should use
> {% raw %}{{tm_banner_url}}{% endraw %} variable for all links in banner content.

#### Next Up:

 -  [Back to Home](../../)
 -  [Manage Placeholders](../manage-placeholders/)
 -  [Using Widgets](../widgets/)
 -  [Use cases](../../use-cases/)
