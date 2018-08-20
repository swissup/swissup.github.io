---
layout: default
title: AMP developers documentation
description: How to write AMP-friendly module
category: Accelerated Mobile Pages
---

# AMP developers documentation

Our AMP module uses several features in order to render AMP-compatible page.

 -  Layout updates whitelist
 -  Block types whitelist
 -  Resources to include per block instance

Let's assume, you have a `Yournamespace_News` module with layout
updates and `Yournamespace\News\Block\List` block that you want to render at AMP site.

### Contents
{:.no_toc}

* TOC
{:toc}

### Blocks and layout updates whitelist

In order to prevent broken AMP markup, all third-party blocks and layout updates
are skipped when AMP is used.
If your module is AMP-friendly, you need to tell AMP about that:
open (or create) `etc/config.xml` in your extension folder and add following content:

```xml
<?xml version="1.0"?>
<config xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="urn:magento:module:Magento_Store:etc/config.xsd">
    <default>
        ...
        <swissup_amp>
            <whitelist>
                <layout_updates>
                    <yournamespace_news>Yournamespace_News</yournamespace_news>
                </layout_updates>
                <block_types>
                    <yournamespace_news>
                        <list>
                            <class>Yournamespace\News\Block\List</class>
                        </list>
                    </yournamespace_news>
                </block_types>
            </whitelist>
        </swissup_amp>
    </default>
</config>
```

That's all. Now your layout update instructions will be readed by AMP module
and block will be rendered as well.

### AMP specific template

In most cases you can use the same template that is used for desktop theme. You
don't need to care about img, iframe, video, audio tags since our AMP module will
convert these tags into amp compatible tags automatically.

You can even add `data-swissupamp-` attributes to your elements and they will be
used for AMP tags. This feature can be used, to manually set `layout`
attribute that is used to render elements in AMP. Example:

```html
<!-- This image -->
<img src=".." alt="." data-swissupamp-layout="fixed"/>

<!-- Will be transformed into (We will calculate width and height automatically): -->

<amp-img src=".." alt="." layout="fixed" with="." height="."></amp-img>
```

However, if you really want to use specific markup in template for AMP site, you
can choose one of the following ways to accomplish your needs:

 -  Create amp template in your extension folder `view/frontend/templates/swissupamp/list.phtml`
    and point to it when whitelisting your block in `etc/config.xml`:

    ```xml
    <swissup_amp>
        <whitelist>
            ...
            <block_types>
                <yournamespace_news>
                    <list>
                        <class>Yournamespace\News\Block\List</class>
                        <template>swissupamp/list.phtml</template>
                    </list>
                </yournamespace_news>
            </block_types>
        </whitelist>
    </swissup_amp>
    ```

 -  Or you can add [specific xml layout update](#amp-specific-layout-update) for
    the amp theme with `swissupamp_` prefixed handle.

### AMP specific layout update

All page handles are duplicated with `swissupamp_` prefix, when AMP extension is used.

For example, when your module uses the following layouts for desktop theme:

  - default.xml:

    ```xml
    <layout xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="urn:magento:framework:View/Layout/etc/layout_generic.xsd">
        <body>
            <referenceBlock name='top.search' template="Namespace_Module::search.phtml" />
        </body>
    </layout>
    ```

  - catalog_category_view.xml:

    ```xml
    <layout xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="urn:magento:framework:View/Layout/etc/layout_generic.xsd">
        <body>
            <referenceBlock name="category.products.list" template="Namespace_Module::product/list.phtml" />
        </body>
    </layout>
    ```

You can add the following update for Swissup Amp only:

  - swissupamp_default.xml:

    ```xml
    <layout xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="urn:magento:framework:View/Layout/etc/layout_generic.xsd">
        <body>
            <referenceBlock name='top.search' template="Namespace_Module::search_swissupamp.phtml" />
        </body>
    </layout>
    ```

  - swissupamp_catalog_category_view.xml:

    ```xml
    <layout xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="urn:magento:framework:View/Layout/etc/layout_generic.xsd">
        <body>
            <referenceBlock name="category.products.list" template="Namespace_Module::product/list_swissupamp.phtml" />
        </body>
    </layout>
    ```

### Include module styles

In case if you need to apply some extra styles to your block, open (or create)
`Mymodule/etc/config.xml` file. Now add additional includes instructions:

```xml
<?xml version="1.0"?>
<config xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="urn:magento:module:Magento_Store:etc/config.xsd">
    <default>
        <swissup_amp>
            <includes>
                <blocks>
                    <yournamespace_news_list>
                        <class>Yournamespace\News\Block\List</class>
                        <styles>
                            <!-- Include swissupamp.scss from extension's view/frontend/web/css/scss folder -->
                            <news>Yournamespace_News::swissupamp.scss</news>
                        </styles>
                    </yournamespace_news_list>
                </blocks>
            </includes>
        </swissup_amp>
    </default>
</config>
```

We recommend to use `@extend` directives in your scss in order to serve compact
css styles for mobile clients. For example, if you need to apply styles similar
to listing, don't write much, use extend feature:

```scss
.news {
    @extend %listing;

    &-item {
        @extend %listing-item;
    }
    &-title {
        @extend %listing-item-title;
    }

    .actionbar {
        @extend %actionbar;
    }
}
```

You can add the styles from layout update xml also:

  - swissupamp_mymodule_index_index.xml:

    ```xml
    <layout xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="urn:magento:framework:View/Layout/etc/layout_generic.xsd">
        <body>
            <referenceBlock name="swissupamp.styles">
                <action method="addItem">
                    <!-- Include swissupamp.scss from extension's view/frontend/web/css/scss folder -->
                    <argument name="name" xsi:type="string">Yournamespace_News::swissupamp.scss</argument>
                </action>
            </referenceBlock>
        </body>
    </layout>
    ```

The difference between config.xml and layout update xml is that in first case
styles will be included if the block is actually rendered. In the second case styles will
be always included despite of which blocks were rendered on the page.

> The first approach is recommended as it will skip styles that is not needed on
> the page.

### Include AMP component

In case if you need to activate one of [AMP components][amp_components] for your
block, open (or create) `Mymodule/etc/config.xml` file. Now add additional includes instructions:

```xml
<?xml version="1.0"?>
<config xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="urn:magento:module:Magento_Store:etc/config.xsd">
    <default>
        <swissup_amp>
            <includes>
                <blocks>
                    <yournamespace_news_list>
                        <class>Yournamespace\News\Block\List</class>
                        <scripts>
                            <carousel>
                                <custom-element>amp-carousel</custom-element>
                                <src>https://cdn.ampproject.org/v0/amp-carousel-0.1.js</src>
                            </carousel>
                        </scripts>
                    </yournamespace_news_list>
                </blocks>
            </includes>
        </swissup_amp>
    </default>
</config>
```

That's all. Now AMP will include this resource automatically, when your block
will be rendered.

### Add AMP support for the third-party page

#### Single page module

In order to add your page to supported list you should add the following
event listener in etc/events.xml:

```xml
<event name="swissupamp_prepare_pages_config">
    <observer name="vendor_module_amp_prepare_config" instance="Vendor\Module\Observer\SwissupAmpPrepareConfig" />
</event>
```

And add `SwissupAmpPrepareConfig` implementation:

```php
<?php
namespace Vendor\Module\Observer;

class SwissupAmpPrepareConfig implements \Magento\Framework\Event\ObserverInterface
{
    public function execute(\Magento\Framework\Event\Observer $observer)
    {
        $pages = $observer->getPages();
        $optionArray = $pages->getData();
        $optionArray['mymodule_index_index'] = __('My module');
        $pages->setData($optionArray);
    }
}
```

You're done. The page will be rendered in AMP mode in case if you are using AMP
for all supported pages. Otherwise, you need to enable your page in AMP
[configuration](/m2/extensions/amp/configuration/#general).

#### Multiple pages module

In case if your module has multiple handles and you want to support all of them,
you can follow instructions below:

Add the following event listeners in your etc/events.xml:

```xml
<event name="swissupamp_prepare_pages_config">
    <observer name="vendor_module_amp_prepare_config" instance="Vendor\Module\Observer\SwissupAmpPrepareConfig" />
</event>
<event name="swissupamp_is_page_supported">
    <observer name="vendor_module_is_page_supported" instance="Vendor\Module\Observer\SwissupAmpPageSupported" />
</event>
```

Add `SwissupAmpPrepareConfig` implementation:

```php
<?php
namespace Vendor\Module\Observer;

class SwissupAmpPrepareConfig implements \Magento\Framework\Event\ObserverInterface
{
    public function execute(\Magento\Framework\Event\Observer $observer)
    {
        $pages = $observer->getPages();
        $optionArray = $pages->getData();
        $optionArray['mymodule'] = __('My module');
        $pages->setData($optionArray);
    }
}
```

Add `SwissupAmpPageSupported` implementation:

```php
<?php
namespace Vendor\Module\Observer;

class SwissupAmpPageSupported implements \Magento\Framework\Event\ObserverInterface
{
    public function execute(\Magento\Framework\Event\Observer $observer)
    {
        $result = $observer->getResult();
        $page = $result->getCurrentPage();
        $supportedPages = $result->getSupportedPages();

        if (0 === strpos($page, 'mymodule') && in_array('mymodule', $supportedPages)) {
            $result->setIsPageSupported(true);
        }
    }
}
```

You're done. The page will be rendered in AMP mode in case if you are using AMP
for all supported pages. Otherwise, you need to enable your page in AMP
[configuration](/m2/extensions/amp/configuration/#general).

### Working examples of third-party modules

 -  [Easy Catalog Images](https://github.com/swissup/easycatalogimg)

##### Next Up
{:.no_toc}

 -  [Back to Home](/m2/extensions/amp/)
 -  [SASS variables](/m2/extensions/amp/customization/design/sass-variables/)

[amp_components]: https://www.ampproject.org/docs/reference/components
