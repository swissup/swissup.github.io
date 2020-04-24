---
layout: default
title: Product page sticky tocart button
description: How to add sticky tocart button at product page
keywords: >
    sticky tocart button, product page
category: Argento
---

# Product page sticky tocart button
{:.no_toc}

![Sticky tocart at Argento Stripes](/images/m2/argento/customization/product/sticky-tocart.png)

* TOC
{:toc}

> **Notice**
>
> 1. This tutorial assumes that you already created [custom theme](../custom-theme/)
>    based on one of Argento themes.
>
>    If you did not &mdash; [go ahead](../custom-theme/), it will take 15 minutes.
>
> 2. Argento theme must have version 1.13.0 or above.

### Enable sticky button

Sticky tocart button is available in all Argento themes but it is disabled by default. Except Argento Force where it is enabled.

Create `view.xml` file at directory `etc` of your custom theme with follow content. In case your theme has such file go to next paragraph.

```xml
<?xml version="1.0"?>
<view xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="urn:magento:framework:Config/etc/view.xsd">
    <!-- settings go here -->
</view>
```

Add settings to `view.xml`. Insert them before closing 'view' node (`</view>`).

```xml
<vars module="Argento_Theme">
    <var name="sticky_add_to_cart">
        <var name="enabled">1</var>
    </var>
</vars>
```

Save file. Clear Magento Cache.

### Disable sticky button

If you want to disable sticky button then please follow all steps described above. And set value "enabled" as 0 in "sticky_add_to_cart" node.

### Additional options

You can set some additional options for sticky button if you need via `view.xml`.

`offset_top` - offset from window top in pixels when button is stuck. Can be useful if your store has sticky menu also.

`media` - media query rule. It specifies when tocart button can stick.
