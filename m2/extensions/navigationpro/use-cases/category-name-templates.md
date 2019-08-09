---
layout: default
title: Navigationpro Category Name Templates
category: Navigationpro
---

# Category Name Templates

There are multiple ways to apply custom template for menu item:

 -  Change it for particular item only - Select some item in the tree, and use
    [Item Name Renderer](/m2/extensions/navigationpro/ui/menu-item-name-as-html/).
 -  Change it for multiple items at once - Use
    [Mass Edit](/m2/extensions/navigationpro/ui/menu-items-mass-edit/) popup.
 -  Change template for all items at particular level - Open
    [Menu Settings](/m2/extensions/navigationpro/backend/menu-settings/#item-settings),
    Click _Item Settings_ and work with level you'd like to affect.

##### Default renderer

```html
{% raw %}<a href="{{var item.url}}" class="{{var item.class}}">
    <span>{{var item.name}}</span>
</a>{% endraw %}
```

##### Category tips

> View more information about category badges at
> [separate page](/m2/extensions/navigationpro/use-cases/category-tips/)

![Category tips](/images/m2/navigationpro/use-cases/category-tip-new.png)

```html
{% raw %}<a href="{{var item.url}}" class="{{var item.class}}">
    <span>{{var item.name}}</span>
    <span style="top: 5px;" class="tip top accent">New</span>
</a>{% endraw %}
```

##### Category images

> Thumbnail - is the attribute created by our another awesome module -
> [EasyCatalogImages](/m2/extensions/easycatalogimages/).

![Category images](/images/m2/navigationpro/use-cases/category-thumbnails.png)

```html
{% raw %}<a href="{{var item.url}}" class="{{var item.class}}{{depend remote_entity.thumbnail}} navpro-a-with-thumbnail{{/depend}}">
    <span>{{var item.name}}</span>
    {{depend remote_entity.thumbnail}}
        <img src="{{media url=''}}/catalog/category/{{var remote_entity.thumbnail}}" />
    {{/depend}}
</a>{% endraw %}
```

##### Category icons

> Thumbnail - is the attribute created by our another awesome module -
> [EasyCatalogImages](/m2/extensions/easycatalogimages/).

![Category icons](/images/m2/navigationpro/use-cases/category-icons.png)

```html
{% raw %}<a href="{{var item.url}}" class="{{var item.class}}">
    {{depend remote_entity.thumbnail}}
        <img style="margin:-2px 7px 0 0" class="va-middle" src="{{media url=''}}/catalog/category/{{var remote_entity.thumbnail}}" />
    {{/depend}}
    <span>{{var item.name}}</span>
</a>{% endraw %}
```

#### Next up

 -  [Back to Main Page](/m2/extensions/navigationpro/)
