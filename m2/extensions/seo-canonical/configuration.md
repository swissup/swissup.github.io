---
layout: default
title: Configuration
description: Canonical URL Configuration
keywords: magento2 seo canonical url extension configuration
category: Canonical URL
---

# Configuration
{:.no_toc}

* TOC
{:toc}

You can configure canonical URLs at
_Stores → Configuration → Swissup → SEO Suite → Canonical URLs_ page.

### Categories

![Category setting](/images/m2/seo-canonicals/categories.png)

Add canonical URL for category pages with respective option. Please remember enabled [**Pagination module**](/m2/extensions/seo-pager/) **can overpower** this setting.

You can also force canonical url point to different store view - *"Use Store View for canonical"*.

### Products

![Products setting](/images/m2/seo-canonicals/products.png)

You can enable or disable canonical URL on product page.

Force canonical url point to different store view with option *"Use Store View for canonical"* if needed.

Sometimes store owners need to specify canonical urls for products manually. In such case store owner has to create text product attribute and assign it to nessecery attribute groups. Then he selects this attribute in option *"Use product attribute for canonical"*.

Other fun option is *"Use parent product for canonical"*. For product that is a part of configurable, bundle or grouped product, this option forces it to use parent product url as canonical. This feature consolidates Google indexes and can be usefull for stores with huge number of products.

*"Allowed parent types"* - here you can select when feature 'Use parent product for canonical' should work. For example, you can select only bundle and grouped products.

### CMS Pages

![CMS Pages setting](/images/m2/seo-canonicals/cms-pages.png)

Here you can see one and pretty obvious config option.
