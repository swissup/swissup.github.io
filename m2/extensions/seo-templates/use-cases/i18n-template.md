---
layout: default
title: Template localize and translate
description: Localize and translate metadata templates
keywords: "metadata templates localize, metadata templates translate"
category: SEO Metadata Templates
---

# Template localize and translate

> Since module version 1.7.0

Meeting our users requests we added support of translation for static text in templates.

Directive `i18n` translates/localizes text. This directive Magento processes on storefront. So it uses translations of storeview user is currently browsing. Some examples are below:

Template of title for categories with free shipping.


```
{% raw %}&#x1F4E6; {{i18n "Free shipping for"}} {{attribute code="name"}}{% endraw %}
```

Or

```
{% raw %}&#x1F4E6; {{attribute code="name" prefix="i18n:Free shipping for "}}{% endraw %}
```

Both templates for catergory with name "Coffee mugs" generate title **"&#x1F4E6; Free shipping for Coffee mugs"** on storefront.

And in template log you get "&#x1F4E6; {% raw %}{{i18n "Free shipping for"}}{% endraw %} Coffee mugs".
