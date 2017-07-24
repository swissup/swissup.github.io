---
layout: default
title: AMP developers documentation
description: How to write AMP-friendly module
category: Accelerated Mobile Pages
sidebar: sidebar.md
---

Our AMP module uses several features in order to render AMP-compatible page.

 -  Layout updates whitelist
 -  Block types whitelist
 -  Resources to include per block instance

Let's assume, you have a "News" module with `yournamespace_news.xml` layout
update and `news/list` block that you want to render at AMP site.

### Contents

<!-- MarkdownTOC -->

- [Blocks and layout updates whitelist](#blocks-and-layout-updates-whitelist)
- [AMP specific template](#amp-specific-template)
- [AMP specific layout update](#amp-specific-layout-update)
- [Include module styles](#include-module-styles)
- [Include AMP component](#include-amp-component)
- [Add AMP support for the third-party page](#add-amp-support-for-the-third-party-page)
- [Working examples of third-party modules](#working-examples-of-third-party-modules)
    - [Next Up](#next-up)

<!-- /MarkdownTOC -->

### Blocks and layout updates whitelist

In order to prevent broken AMP markup, all third-party blocks and layout updates
are skipped when AMP theme is used.
If your module is AMP-friendly, you need to tell AMP about that:
open `Mymodule/etc` folder and create `tmamp.xml` file with following content:

```xml
<config>
    <tmamp>
        <whitelist>
            <layout_updates>
                <mymodule>
                    <xml>mymodule_news.xml</xml>
                </mymodule>
            </layout_updates>
            <block_types>
                <mymodule>
                    <page>mymodule_news/list</page>
                </mymodule>
            </block_types>
        </whitelist>
    </tmamp>
</config>
```

That's all. Now your layout update instructions will be readed by AMP module
and block will be rendered as well.

### AMP specific template

In most cases you can use the same template that is used for desktop theme. You
don't need to care about img, iframe, video, audio tags since our AMP module will
convert these tags into amp compatible tags automatically.

You can even add `data-tmamp-` attributes to your elements and they will be
used for AMP tags. This feature can be used, to manually set `layout`
attribute that is used to render elements in AMP. Example:

```html
<!-- This image -->
<img src=".." alt="." data-tmamp-layout="fixed"/>

<!-- Will be transformed into (We will calculate width and height automatically): -->

<amp-img src=".." alt="." layout="fixed" with="." height="."></amp-img>
```

However if you really want to use specific markup in template for AMP site, you
can choose one of the following ways to accomplish your needs:

 -  Place copy of your original template into `app/design/frontend/tmamp/default/[../..]`
    folder and change that copy
 -  Or you can add [specific xml layout update](#amp-specific-layout-update) for
    the amp theme with `tmamp_` prefixed handle

### AMP specific layout update

All page handles are duplicated with with `tmamp_` prefix, when AMP theme is used.

For example, when your module using the following layout for desktop theme:

```xml
<?xml version="1.0"?>
<layout version="0.1.0">
    <default>
        <reference name="top.search">
            <action method="setTemplate">
                <template>mymodule/search.phtml</template>
            </action>
        </reference>
    </default>
    <catalog_category_layered>
        <reference name="product_list">
            <action method="setTemplate">
                <template>mymodule/product/list.phtml</template>
            </action>
        </reference>
    </catalog_category_layered>
</layout>
```

You can add the following update for tmamp theme only:

```xml
<?xml version="1.0"?>
<layout version="0.1.0">
    <tmamp_default>
        <reference name="top.search">
            <action method="setTemplate">
                <template>mymodule/search_tmamp.phtml</template>
            </action>
        </reference>
    </tmamp_default>
    <tmamp_catalog_category_layered>
        <reference name="product_list">
            <action method="setTemplate">
                <template>mymodule/product/list_tmamp.phtml</template>
            </action>
        </reference>
    </tmamp_catalog_category_layered>
</layout>
```

### Include module styles

In case if you need to apply some extra styles to your block, open `Mymodule/etc`
folder and create `tmamp.xml` file if it's not there. Now add additional includes
instructions:

```xml
<config>
    <tmamp>
        <includes>
            <blocks>
                <Yournamespace_News_Block_List>
                    <styles>
                        <!-- Inlude tmamp.scss from skin/frontend/base/default/yournamespace/news/css folder -->
                        <news>yournamespace/news/css/tmamp</news>
                    </styles>
                </Yournamespace_News_Block_List>
            </blocks>
        </includes>
    </tmamp>
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

```xml
<?xml version="1.0" encoding="UTF-8"?>
<layout version="0.1.0">
    <tmamp_mymodule_index_index>
        <reference name="tmamp.styles">
            <!-- Inlude tmamp.scss from skin/frontend/base/default/yournamespace/news/css folder -->
            <action method="addItem"><name>yournamespace/news/css/tmamp</name></action>
        </reference>
    </tmamp_mymodule_index_index>
</layout>
```

The difference between tmamp.xml and layout update xml is that in first case
styles will be included if the block was rendered. In the second case styles will
be always incuded despite of which blocks where rendered on the page.

> The first approach is recommended as it will skip styles that is not needed on
> the page.

### Include AMP component

In case if you need to activate one of [AMP components][amp_components] for your
block, open `Mymodule/etc` folder and create `tmamp.xml` file if it's not there.
Now add additional includes instructions:

```xml
<config>
    <tmamp>
        <includes>
            <blocks>
                <Yournamespace_News_Block_List>
                    <scripts>
                        <carousel>
                            <custom-element>amp-carousel</custom-element>
                            <src>https://cdn.ampproject.org/v0/amp-carousel-0.1.js</src>
                        </carousel>
                    </scripts>
                </Yournamespace_News_Block_List>
            </blocks>
        </includes>
    </tmamp>
</config>
```

That's all. Now AMP will include this resource automatically, when your block
will be rendered.

### Add AMP support for the third-party page

In order to add your page into supported list you should add the following
event listener in your config.xml:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<config>
    <global>
        <events>
            <tmamp_prepare_pages_config>
                <observers>
                    <my_module>
                        <class>my_module/observer</class>
                        <method>preparePagesForTmamp</method>
                    </highlight>
                </my_module>
            </tmamp_prepare_pages_config>
        </events>
    </global>
</config>
```

And add `preparePagesForTmamp` implementation:

```php
<?php

class My_Module_Model_Observer
{
    public function preparePagesForTmamp($observer)
    {
        $pages = $observer->getPages();
        $optionArray = $pages->getData();
        $optionArray['mymodule_index_index'] = Mage::helper('mymodule')->__('My module');
        $pages->setData($optionArray);
    }
}
```

You're done. The page will be rendered in AMP mode in case if you are using AMP
for all supported pages. Otherwise, you need to enable your page in AMP
[configuration](/m1/extensions/amp/configuration/#general).

### Working examples of third-party modules

 -  [Easy Catalog Images](https://github.com/tmhub/easycatalogimg/)

##### Next Up

 -  [Back to Home](/m1/extensions/amp/)
 -  [SASS variables](/m1/extensions/amp/customization/design/sass-variables/)

[amp_components]: https://www.ampproject.org/docs/reference/components
