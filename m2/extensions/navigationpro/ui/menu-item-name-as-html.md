---
layout: default
title: Navigationpro Menu Items Name
description: Navigationpro menu items tree overview
category: Navigationpro
---

# Menu Item Name Renderer

This element allows you to change default item name renderer with oyur own.

![New Item Panel](/images/m2/navigationpro/ui/menu-item-name.png)

Default item name renderer:

```html
{% raw %}<a href="{{navpro data='url'}}" class="{{navpro data='class'}}">
    {{navpro data='name'}}
</a>{% endraw %}
```

Available placeholders:

Code                                            | Description
------------------------------------------------|------------
`{% raw %}{{navpro data='url'}}{% endraw %}`    | Item Url
`{% raw %}{{navpro data='class'}}{% endraw %}`  | Item Class Names
`{% raw %}{{navpro data='name'}}{% endraw %}`   | Item Name
`{% raw %}{{navpro data='remote_entity.image'}}{% endraw %}` | Category Image (If item was created during import)
`{% raw %}{{navpro data='remote_entity.thumbnail'}}{% endraw %}` | Category Thubmnail (If item was created during import)

#### Next up

 -  [Back to Main Page](/m2/extensions/navigationpro/)
