---
layout: default
title: Easy Banners Admin Interfaces
category: Easy Banners
---

# Admin Interfaces

Easy Banners extension provides user friendly interfaces to manage banners and
placeholders.

* TOC
{:toc}

## Placeholders

Placeholders allows you to group banners and show them by their sort order.
Placeholder will automatically rotate banners on each page refresh when
assigned banners count is larger then placeholder's `Display Count` property.

#### Grid

Grid with available placeholders is located at
_Swissup > Easy Banner > Manage Placeholders_ page.

![Grid with placeholder](/images/m2/easybanners/placeholder-grid.png)

#### Form

![Placeholder form](/images/m2/easybanners/placeholder-form.png)

Field                   | Description
:-----------------------|:-----------------------------
Enabled                 | Enable or Disable Placeholder
Name                    | Placeholder name
Banners Display Count   | How many banners will be shown per page refresh
Sort Mode               | Ability to sort banners by sort_order or randomly
Additional Css Class    | Css class for additional customizations
Parent Container        | See the list of common [placeholder positions](/m2/extensions/easybanners/common-placeholder-positions/)
Position                | Ability to change placeholder's position inside a parent container

## Banners

#### Grid

Grid with available banners is located at
_Swissup > Easy Banner > Manage Banners_ page.

![Grid with Banners](/images/m2/easybanners/banner-grid.png){:width="1100" height="588"}

After clicking on any banner from the submitted list, you will be able to edit
the settings of Banner information.

#### Form

##### General Tab

![General](/images/m2/easybanners/general.png)

Field                   | Description
:-----------------------|:-----------------------------
Enabled                 | Enable or Disable Banner
Identifier              | Banner name
Type                    | Possible values are: Banner, Lightbox, Awesomebar
Enable Statistics       | Enable or Disable Statistics (Clicks count)
Sort Order              | Allows to sort banners inside a placeholder
Store View              | Assign Banner to Specific Store Views
Placeholder             | Select placeholder. Not visible for Lightbox and Awesomebar banners. You can leave it empty to show the banner [manually](/m2/extensions/easybanners/usage/#show-banner-on-frontend)

##### Content Tab

Content tab includes 3 regions:

 -  [Content](#content-region), where you can set the banner link and it's behavior
 -  [Image Options](#image-options-region), where you can upload image and set it's dimensions if needed
 -  [Html content](#html-content-region), where you can write HTML content for current banner

###### Content Region

![Content region](/images/m2/easybanners/content-region-content.png)

Field                   | Description
:-----------------------|:-----------------------------
Url                     | Link to open on banner click
Hide Url                | Ability to hide banner url on the frontend. When url is hidden, banner will have the following url: example.com/easybanner/click/index/id/:id. Otherwise, the url will be visible: example.com/easybanner/click/index/id/:id/url/:url
Open Link in            | Select where the link should be opened when customer clicks on the banner. Available options: Same Tab, New Tab, Popup Window
Css Class               | [Additional Css classes](/m2/extensions/easybanners/css-class-helpers/) to add when rendering banner
Mode                    | Slect between Image and Html banner modes

###### Image Options Region

![Image options region](/images/m2/easybanners/content-region-image.png)

Field                   | Description
:-----------------------|:-----------------------------
Image                   | An image to display
Title                   | Image title
Width                   | Width (px), optional
Height                  | Height (px), optional
Use Image Resizer       | Ability to use backend resizer instead of css styles. Width and Height are required to make it visible
Background Color        | Will be used when you want to resize image without keeping original aspect ratio
Use Responsive Images   | Ability to set different banner size per screen size. This feature allows to improve pagespeed score when properly configured.
Sizes                   | Media rules use use when generating responsive images.

###### Html Content Region

![Html content region](/images/m2/easybanners/content-region-html.png){:width="819" height="505"}

Any html content could be placed here. If you would like to place trackable
banner url from the content region, use the following placeholder:
`{% raw %}{{swissup_easybanner_url}}{% endraw %}`

##### Conditions Tab

General Conditions | Product Attribute Conditions
-------------------|------------------------------
![Conditions](/images/m2/easybanners/conditions.png) | ![Product Attribute Conditions](/images/m2/easybanners/conditions-product-attribute.png)

Group | Condition               | Description
:-----|:-----------------------|:-----------------------------
**General**||
| Category                | Show banner at specifiied categories
| Product                 | Show banner at specified products
| Page                    | Show banner at specified pages
| Page URL                | Show banner when specified parameter is found in URL
| Customer Group          | Show banner for specifiied customer groups only
**Banner Statistics**||
| Clicks Count            | Allow to hide banner when clicks count is larger then specified value
| Display Count (Temporarily Disabled) | Hide banner when displays count is larger then specified value
**Cart Conditions**||
| Subtotal (Excl.Tax)     | Show banner when cart subtotal matches this condition
| Subtotal (Incl.Tax)     | Show banner when cart subtotal matches this condition
**Date Conditions**||
| Day of Week             | Show banner on specified day of week
| Day of Month            | Show banner on specified day of month
| Current Date            | Show banner on specified date condition
| Current Time            | Show banner on specified time condition
**Lightbox and Awesomebar Conditions**||
| Display Count per Customer | Hide banner for specific visitor according to his personal displays count of this banner
| Display Count per Customer (Per Day) | Hide banner for specific visitor according to his personal displays count of this banner
| Display Count per Customer (Per Week) | Hide banner for specific visitor according to his personal displays count of this banner
| Display Count per Customer (Per Month) | Hide banner for specific visitor according to his personal displays count of this banner
| Customer browsing time (seconds) | Show banner when customer browsing time is larger than specified value (Activity time + Idle time)
| Customer inactivity time (seconds) | Show banner when customer is idle for more than specified value
| Customer activity time (seconds) | Show banner when customer actively browsing current page for more than specified value
| Scroll offset     | Show banner when visitor scrolls the page for more pixels than specified
| Exit intent time (seconds) | Show banner when visitor's cursor moves out of the page for specified amount of time. (Mobile users will see popup after scroll up event - since this is a standard operation to show browser toolbar.)

##### Statistics Tab

This interface provides overview of banner display and clicks count.

![Statistics](/images/m2/easybanners/statistics.png)

#### Next up
{:.no_toc}

* [Back to Home](/m2/extensions/easybanners/)
* [Banners and Placeholders usage](/m2/extensions/easybanners/usage/)
