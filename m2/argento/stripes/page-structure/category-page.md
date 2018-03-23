---
layout: default
title: Argento Stripes Category Page
description: ArgentoStripes category page
keywords: ArgentoStripes, Stripes, category page, highlight, featured attributes
category: Argento
---

# Argento Stripes Category Page

### Contents

 -  [Special Offers](#special-offers)
 -  [Featured Attributes](#featured-attributes)

### Special Offers

![Special Offers](/images/m2/argento/stripes/category-page/special-offers.png)

To show special offers block on selected category, follow the steps:

 1. go to `Content > Blocks` and create static block
 2. insert [Highlight](/m2/extensions/highlight/) widget with [Magazine Layout](/m2/extensions/highlight/widgets/css-helpers/#magazine-layout) in block content
 3. select category in `Products > Categories` and configure:
     -  Display Settings > Display Mode: Static Block and Products;
     -  select created static block in Content > Add CMS Block.
 4. save category and refresh cache.

Widget Code:

```
{% raw %}{{widget type="Swissup\Highlight\Block\ProductList\Onsale" title="Special<br><span>Offers</span>" carousel="1" products_count="3" column_count="3" page_count="3" order="default" dir="desc" template="Magento_Catalog::product/list.phtml" mode="grid" show_page_link="0" hide_when_filter_is_used="1" css_class="hl-magazine hl-blue hl-contain" title_image_url="pub/media/highlight/argento/stripes/headphones-small.png"}}{% endraw %}
```

### Featured Attributes

![Featured Attributes](/images/m2/featured-attributes/featured-attributes.png)

Stripes theme includes [Featured Attributes](/m2/extensions/featured-attributes/)
extension which allows to display selected product attributes on category page.
You can select attributes in [extension configuration](/m2/extensions/featured-attributes/configuration).
