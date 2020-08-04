---
layout: default
title: Invalid category image path in Magento 2.4
description: How to fix broken image in navigationpro when using magento 2.4
category: Navigationpro
---

# Invalid category image path

Starting from version 2.4, Magento changed the path to the category image and
thumbnail returned from database. Because of this backward incompatible change
you may face with broken images in navigationpro dropdowns.

To fix this issue you need to manually open dropdown settings in navigationpro
menu and find the similar code:

```html
{% raw %}<img class="xs-hide sm-hide" src="{{media url=''}}/catalog/category/{{var remote_entity.thumbnail}}" />{% endraw %}
```

Replace image `src` attribute with new value:

```html
{% raw %}<img class="xs-hide sm-hide" src="{{config path='web/secure/base_url'}}{{var remote_entity.thumbnail}}" />{% endraw %}
```

Save the value and check if everything is fixed on the frontend.

#### Next up
{:.no_toc}

 -  [Back to Main Page](/m2/extensions/navigationpro/)
