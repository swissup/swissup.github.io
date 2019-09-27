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
➔ `Swissup SEO Suite` section ➔ `SEO Images`.

SEO Images settings have three sections.

![Metadata templates system config](/images/m2/seo-images/backend/config.png)

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
