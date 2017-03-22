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
- [Include module styles](#include-module-styles)
- [Include AMP component](#include-amp-component)
- [Working examples of third-party modules](#working-examples-of-third-party-modules)
    - [Next Up](#next-up)

<!-- /MarkdownTOC -->

### Blocks and layout updates whitelist

Open your module `config.xml` and add whitelist section inside "tmamp" scope:

```xml
<tmamp>
    <whitelist>
        <layout_updates>
            <yournamespace>
                <news>yournamespace_news.xml</news>
            </yournamespace>
        </layout_updates>
        <block_types>
            <yournamespace>
                <news>news/list</news>
            </yournamespace>
        </block_types>
    </whitelist>
</tmamp>
```

That's all. Now your layout update instructions will be readed by AMP module
and block will be rendered as well.

### AMP specific template

In most cases you can use the same template that is used for desktop theme. You
don't need to care about img, iframe, video, audio tags since our AMP module will
convert these tags into amp compatible tags automatically.

You can even add `data-amp-` attributes to your elements and they will be
used for AMP tags. This feature can be used, to manually set `layout`
attribute that is used to render elements in AMP. Example:

```html
<!-- This image -->
<img src=".." alt="." data-amp-layout="fixed"/>

<!-- Will be transformed into (We will calculate width and height automatically): -->

<amp-img src=".." alt="." layout="fixed" with="." height="."></amp-img>
```

However if you really want to use specific markup in template for AMP site, you
can place copy of your original template into `app/design/frontend/tmamp/default/[../..]`
folder and change that copy.

### Include module styles

In case if you need to apply some extra styles to your block, open your module
`config.xml` again and add additional includes instructions:

```xml
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
}
```

### Include AMP component

In case if you need to activate one of [AMP components][amp_components] for your
block, open your module `config.xml` again and add additional includes
instructions:

```xml
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
```

That's all. Now AMP will include this resource automatically, when your block
will be rendered.

### Working examples of third-party modules

 -  [Easy Catalog Images](https://github.com/tmhub/easycatalogimg/)

##### Next Up

 -  [Back to Home](/m1/extensions/amp/)
 -  [SASS variables](/m1/extensions/amp/customization/design/sass-variables/)

[amp_components]: https://www.ampproject.org/docs/reference/components
