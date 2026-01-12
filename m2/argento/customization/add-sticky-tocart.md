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
> 1. This tutorial assumes that you already created a [custom theme](../custom-theme/)
>    based on one of the Argento themes.
>
>    If you did not &mdash; [go ahead](../custom-theme/), it will take 15 minutes.
>
> 2. Argento theme must have version 1.13.0 or above.

### Enable sticky button

A sticky to-cart button is available in all Argento themes but is enabled by default only in Argento Force.

Create a file `view.xml` in the directory `etc` of your custom theme with the following content. If your theme already contains this file, proceed to the next step.

```xml
<?xml version="1.0"?>
<view xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="urn:magento:framework:Config/etc/view.xsd">
    <!-- settings go here -->
</view>
```

Add the following section to `view.xml` before closing the 'view' node (`</view>`).

```xml
<vars module="Argento_Theme">
    <var name="sticky_add_to_cart">
        <var name="enabled">1</var>
    </var>
</vars>
```

Save the file. Clear Magento Cache.

### Disable sticky button

If you want to disable the sticky button, please, follow the above steps but set the value of "enabled" to 0 in the "sticky_add_to_cart" node.

### Additional options

You can configure the sticky button via `view.xml`.

`offset_top` - offset from the window top in pixels when the button is stuck. This ption could be useful if your store has a sticky menu.

`media` - a media query rule that specifies when the tocart button can stick.
