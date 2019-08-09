---
layout: default
title: Navigationpro Menu Items Name
description: Navigationpro menu items tree overview
category: Navigationpro
---

# Menu Item Name Renderer

* TOC
{:toc}

This element allows you to change default item name renderer with your own.

![New Item Panel](/images/m2/navigationpro/ui/menu-item-name.png)

There are multiple ways to apply custom template for menu item:

 -  Change it for particular item only - Select that particular item in the tree.
 -  Change it for multiple items at once - Use
    [Mass Edit](/m2/extensions/navigationpro/ui/menu-items-mass-edit/) popup.
 -  Change template for all items at particular level - Open
    [Menu Settings](/m2/extensions/navigationpro/backend/menu-settings/#item-settings),
    Click _Item Settings_ and work with level you'd like to affect.

### Available placeholders

> Since version 1.12.0, this functionality is fully replaced with `variables`.
> See the next chapter for more information.

Code                                            | Description
------------------------------------------------|------------
`{% raw %}{{navpro data='url'}}{% endraw %}`    | Item Url
`{% raw %}{{navpro data='class'}}{% endraw %}`  | Item Class Names
`{% raw %}{{navpro data='name'}}{% endraw %}`   | Item Name
`{% raw %}{{navpro data='remote_entity.image'}}{% endraw %}` | Category Image (If item was created during import)
`{% raw %}{{navpro data='remote_entity.thumbnail'}}{% endraw %}` | Category Thubmnail (If item was created during import)

### Available variables

Since **Navigatiopro 1.12.0** you can use Magento's native `depend` and `var`
directives instead of `navpro` placeholders:

```html
{% raw %}<a href="{{var item.url}}" class="{{var item.class}}{{depend remote_entity.thumbnail}} navpro-a-with-thumbnail{{/depend}}">
    {{var item.name}}
    {{depend remote_entity.thumbnail}}
        <img src="{{media url=''}}/catalog/category/{{var remote_entity.thumbnail}}" />
    {{/depend}}
</a>{% endraw %}
```

Variable        | Description
----------------|---------------------------
`item`          | The navigation item itself
`remote_entity` | When the item is the imported category - you can refer that category with `remote_entity` variable

### Usage Examples

View ready to use examples at
[Category Name Templates](/m2/extensions/navigationpro/use-cases/category-name-templates/)
page.

#### Next up
{:.no_toc}

 -  [Back to Main Page](/m2/extensions/navigationpro/)
