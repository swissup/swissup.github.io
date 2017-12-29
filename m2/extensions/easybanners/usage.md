---
layout: default
title: Easy Banners Usage
description: How to show banners and placeholders on frontend
category: Easy Banners
---

# Banners and Placeholders Usage

First, you need to create a banner. See the 
[Admin Interfaces section](/m2/extensions/easybanners/interfaces/) page.

> Awesomebar and Lightbox banners will be shown **automatically**. No further 
> actionis required.

* TOC
{:toc}

### Show banner on frontend

> If a banner is linked to the placeholder, scroll down to the 
> "Show placeholder on frontend" section.

After you saved a banner you need to accomplish the following steps to make it
visible on frontend:
 
#### Add banner to CMS Page content

Use Magento's WYSIWYG's **Insert Widget** button.

#### Add banner to other pages or sidebar

Use Magento's _Content > Widgets_ interface.

#### Add banner with XML or PHP code

**XML**

```xml
<block class="Swissup\Easybanner\Block\Banner" name="block_name_1">
    <arguments>
        <argument name="banner" xsi:type="string">BannerIdentifier</argument>
    </arguments>
</block>
```

**PHP**

```php
<?php 
echo $this->getLayout()
    ->createBlock('Swissup\Easybanner\Block\Banner')
    ->setBanner('BannerIdentifier')
    ->toHtml(); 
?>
```

### Show placeholder on frontend

After you saved a placeholder you need to accomplish the following steps to make it 
visible on frontend:
 
#### Add placeholder to CMS Page content

Use Magento's WYSIWYG's **Insert Widget** button.

#### Add placeholder to other pages or sidebar

Use Magento's _Content > Widgets_ interface.

#### Add placeholder with XML or PHP code

**XML**

```xml
<block class="Swissup\Easybanner\Block\Placeholder" name="block_name_2">
    <arguments>
        <argument name="placeholder" xsi:type="string">PlaceholderName</argument>
    </arguments>
</block>
```

**PHP**

```php
<?php 
echo $this->getLayout()
    ->createBlock('Swissup\Easybanner\Block\Placeholder')
    ->setPlaceholder('PlaceholderName')
    ->toHtml(); 
```

#### Next up
{:.no_toc}

* [Back to Home](/m2/extensions/easybanners/)
