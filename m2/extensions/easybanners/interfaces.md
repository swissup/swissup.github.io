---
layout: default
title: Easy Banners
description:
keywords: "magento banner, magento banner slider, adding magento banners,
magento extension, magento module"
category: Easy Banners
---

## Easy Banners admin interfaces

Easy Banners extension provides user friendly interfaces to manage banners and placeholders.

### Banners

In order to edit banner or create new one, go Magento Admin > Swissup > Easy Banner > Manage Banners.

![Grid](/images/m2/easybanners/banner-grid.png)

After clicking on any banner from the submitted list, you will be able to edit the settings of Banner information.

##### General configuration

![General](/images/m2/easybanners/general.png)

 * Identifier - the name of the banner
 * Type - banner appearance. Possible values are Banner, Lightbox, Awesomebar.
 * Hide url - if you select Yes, the Url will be hidden
 * Target - please select target window to open URL destination. Possible values are Popup, Blank or Self.
 * Sort order - please set the sort order
 * Store view - please select target store view for current banner
 * Placeholder - please select target placeholder for current banner
 * Status - enables or disables current banner

##### Banner Content

![Content](/images/m2/easybanners/content.png)

 * Url - sets banner URL (the page which will be opened by clicking on the banner)
 * Css Class - unique banner css class name
 * Mode - please select banner content mode. Possible values are Image or HTML.
 * Image - please upload the image
 * Title - banner Title
 * Width, Height - banner dimensions resize image
 * Use image resizer - enabled resize image
 * Retina support - add support for retina display
 * Background Color - background color for resized image
 * Content - please enter html, javascript or flash code, that get html content mode

##### Banner Conditions

![Conditions](/images/m2/easybanners/conditions.png)

Using the following settings, you can place your banner on specific page or show it in specific custom group.

 * Category - places your banner to specific category
 * Clicks Count - allows to display banner for specific clicks count condition
 * Customer Group - shows your banner for specific customer group
 * Date - reserves your banner active during specified date range
 * Display Count - allows to display banner for specific displays count condition
 * Page - places your banner on specific page
 * Product - places your banner on specific product
 * Time - reserves your banner active during specified time range
 * Display Count per Customer - allows to display banner for specific displays count per Customer condition
 * Lightbox/Awesomebar: Customer activity time (seconds)
 * Lightbox/Awesomebar: Customer browsing time (seconds)
 * Lightbox/Awesomebar: Customer inactivity time (seconds)
 * Lightbox/Awesomebar: Scroll offset

##### Banner Statistics

This interface provides overview of banners hits and clicks.

![Statistics](/images/m2/easybanners/statistics.png)

### Placeholders

To edit placeholder or create new one, go Magento Admin > Swissup > Easy Banner > Manage Placeholders.

![PlaceGrid](/images/m2/easybanners/placeholder-grid.png)

The placeholders specified above in screenshot, were configured to show banners on most popular places of Magento store.

After clicking any placeholder from the submitted list, you will be able to edit the settings of Placeholder General information.

![PlaceGrid](/images/m2/easybanners/placeholder_general.png)

 * Placeholder Name - please enter the name of placeholder
 * Banners limit per rotate - please set the number of banners, that will be displayed each time
 * Status - allows you to enable or disable the current placeholder

Additionally you can place your placeholder manually to specified position through Magento xml files, widgets or inline php code.

```xml
<block class="Swissup\Easybanner\Block\Banner" name="unique_banner_name">
    <arguments>
        <argument name="banner" xsi:type="string">BannerID</argument>
    </arguments>
</block>
<block class="Swissup\Easybanner\Block\Placeholder" name="unique_placeholder_name">
    <arguments>
        <argument name="placeholder" xsi:type="string">PlaceholderID</argument>
    </arguments>
</block>
```

```php
<?php echo $this->getLayout()->createBlock('Swissup\Easybanner\Block\Banner')->setBanner(BannerID)->toHtml(); ?>
<?php echo $this->getLayout()->createBlock('Swissup\Easybanner\Block\Placeholder')->setPlaceholder(PlaceholderID)->toHtml(); ?>
```

#### You can also check:

* [Installation](../installation/)
* [Support](https://swissuplabs.com/contacts/)
* [Forum](https://swissuplabs.com/magento-forum/)