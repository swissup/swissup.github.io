---
layout: default
title: Easy Banners managing banners
description:
keywords: "magento banner, magento banner slider, adding magento banners,
magento extension, magento module"
category: Easy Banners
---

# Managing banners

-   [General banner information](#general-banner-information)
-   [Banner content](#banner-content)
-   [Banner conditions](#banner-conditions)
-   [Banner statistics](#banner-statistics)
-   [Adding banners manually](#adding-banners-manually)

Please go Magento `Admin > Templates-Master > Easy Banner > Manage Banners`.

![Easy Banners](/images/m1/extensions/easy-banners/managing-banners-grid.png)

You can see already created banners in this grid. Сlick on the banner you like and keep editing that. You can also add a new banner. Please press **Add banner** in the upper right corner of the page. You will see the following settings:

### General banner information

![Easy Banners](/images/m1/extensions/easy-banners/banner-general.png)

-   `Name` - specify the name for the banner.
-   `Hide url` - if you select **Yes**, the Url will be hidden.
-   `Target` - select the target window to open URL destination. Possible values are Popup, Blank or Self.
-   `Sort order` - set the sort order of banner display.
-   `Store view` - select the target store view for current banner.
-   `Placeholder` - select the target placeholder for current banner.
-   `Status` - select **Yes** to enable a banner.

### Banner content

![Easy Banners](/images/m1/extensions/easy-banners/banner-content.png)

-   `Title` - specify the banner title.
-   `Url` - set a banner URL (the page which will be opened by clicking on the banner).
-   `Mode` - select banner content mode. Possible values are Image or HTML.
-   `Image` - upload the image.
-   `Content` - enter html, javascript or flash code, that gets html content mode.

### Banner conditions

![Easy Banners](/images/m1/extensions/easy-banners/banner-conditions.png)

Using the following settings, you can place your banner on specific page or show it in specific custom group.

-   `Category` - assign your banner to the specific category.
-   `Clicks Count` - set the display banner based on relevant clicks count condition.
-   `Customer Group` - set the banner display for specific customer group.
-   `Date` - reserves your banner active during specified date range.
-   `Display Count` - set the display banner based on relevant display count condition.
-   `Page` - place your banner on specific page.
-   `Product` - assign your banner to specific product
-   `Time` - reserves your banner active during specified time range.

### Banner statistics

Through the interface you can track the banners' hits and clicks.

![Easy Banners](/images/m1/extensions/easy-banners/banner-statistics.png)

Using the following settings, you can track the total number of views and impressions of a banner.

-   `Display Count` - shows the number of banner impressions.
-   `Clicks Count` - shows the number of clicks on this banner.

**Note:** Easy Banners extension provides `views and clicks statistics` for only **image banner**. **Html** banners are provided with `views statistics` only.

### Adding banners manually 

Our module also allows you to put your banner manually via Magento xml files, widgets or inline php code.

```Xml
<reference name="content">
    <block type="easybanner/banner" name="unique_banner_name">
        <action method="setBannerName"><name>test</name></action>
    </block>
 </reference>
 ```

**Widget**:

```
{% raw %}{{block type="easybanner/banner" banner_name="name"}}{% endraw %}
```

```php
<?php echo $this->getLayout()->createBlock('easybanner/banner')->setBannerName('name')->toHtml(); ?>
```
 
#### You can also check:

*   [Installation](../installation/)
*   [Use cases](../use-cases/)
*   [Managing placeholders](../managing-placeholders/)
*   [Support](https://swissuplabs.com/contacts/)
*   [Forum](https://swissuplabs.com/magento-forum/)