---
layout: default
title: Configuration
description: magento 2 seo images configuration
keywords: "seo images backend settings, seo images backend configuration"
category: SEO Images
---

# Extension configuration
{:.no_toc}

* TOC
{:toc}

In order to change module settings, go to `Stores` ➔ `Configuration`
➔ `Swissup` section → `SEO Suite` ➔ `SEO Images`.

SEO Images settings have three sections.

![SEO Images system config](/images/m2/seo-images/backend/config.png)

### General

In section General you can enable/disable module.

### Misc. string in path of resized image

Magento codes all resize parameters of image into hash string. Later, Magento adds this hash to resized image path. With option `Use clear parameters for product images` you can enable clear parameters presentation.


### Image Name

And the most intesting section is "Image Name". Here you can specify template for product image.

Template supports directives:

 -  **`{% raw %}{{sku}}{% endraw %}`** - product SKU. It is a short hand for `{% raw %}{{attribute code="sku"}}{% endraw %}`.

 -  **`{% raw %}{{name}}{% endraw %}`** - product name. It is a short hand for `{% raw %}{{attribute code="name"}}{% endraw %}`.

 -  **`{% raw %}{{attribute code="…" [prefix="…"] [sufix="…"] [exclude="…"] [limit="…"] [separator="…"]  [max_length="…" [break_words="…" etc="…"]]}}{% endraw %}`** - value of attribute by its code. You can set multiple codes separated with comma. It will return first not empty value. For example, some of your products have attribute manufacturer and other have - brand. In such case you can use `{% raw %}{{attribute code="brand,manufacturer"}}{% endraw %}`. With configurable product this directive can return values of attribute from child products. You can set max number of values (`limit="5"`) and separator (`separator=", "`). `exclude` option allows you to exclude some values from output. It can containe multiple values separated with comma.
`max_length` sets max length in characters for output. By default it respects words and doesn't cut them. `break_words="1"` will force to cut words. `etc` sets trailing string that will be added after output truncate.

### Production Mode

![SEO Images system config - part 2](/images/m2/seo-images/backend/config-part-2.png)

Production mode can be enabled as a final step before going live. It is all about speed.

But this feature is still a beta. It was tested on single-store Magento instances. And instances where products have the same values of their attributes on all store views.

Here are restrictions of production mode:

 -  production mode expects that product has same attribute values (used for image name) at all store views;
 -  image name become static and don't change after you edit product;
 -  image name won't be generated after product created or new images added as well;
 -  run `bin/magento catalog:images:resize` before enabling production mode to make sure all images have seo names generated.

### Caching and Indexing

![SEO Images system config - part 3](/images/m2/seo-images/backend/config-part-3.png).

Module has its own index "SEO Images (product to image relation)". You can find it at Index Management grid. We rely heavily on this index. Empty index can increase server response time for category page when it is generated first time after cleaning Magento FPC.

Run command `bin/magento indexer:reindex swissup_seoimages_index` to reindex this specific index. Take into consideration that it can take 5-10 mins. Execution time depends on products number and images assigned to them.

Cached image names are another important part of SEO Images module. We use cache to figure out what name must be used for what image when Magento generates (resizes) images for storefront. Cache is the only source of SEO names for images when production mode enabled in the upper section. So clean this cache wisely!

Big number of cache records can also affect time of initial page generation. However, this effect is really small. Change of product image template, product name or other attributes used in image name template adds new records into cache.

Number of cached names and number of indexed images can be equal only in perfect world when Magento instance is single-store.

After cleaning SEO names cache you can fill it up again when run `bin/magento catalog:images:resize` or flush Magento cache and browse your store. Cache Warmer can be useful in the second case.

