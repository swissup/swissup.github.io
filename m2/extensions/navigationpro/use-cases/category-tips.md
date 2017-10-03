---
layout: default
title: Navigationpro Category Tips (Labels)
description: Category Tips for Navigationpro module
category: Navigationpro
---

# Category Tips

> Don't have a menu yet? Create [simple menu][simple-menu], activate it the
> [config][config] and come back!

![Category Tips](/images/m2/navigationpro/use-cases/category-tips.png)

In order to add tip (label) to the item, you need to open menu in backend,
select this item in the tree, and use
[Advanced Settings fieldset](/m2/extensions/navigationpro/ui/menu-item-name-as-html/).

Examples:

```html
{% raw %}<!-- Default Tip -->
<a href="{{navpro data='url'}}" class="{{navpro data='class'}}">
    <span>{{navpro data='name'}}</span>
    <span class="tip">Featured</span>
</a>

<!-- Accent Tip, placed on the top -->
<a href="{{navpro data='url'}}" class="{{navpro data='class'}}">
    <span>{{navpro data='name'}}</span>
    <span class="tip top accent">New</span>
</a>{% endraw %}
```

#### Tips Modifiers

Class Name      | Description
----------------|--------------------------
**Tip Positioning** |
`top`           | Place tip above the item name
**Tip Colors**  |
`accent`        | Bright tip background
`muted`         | Muted tip background
`black`         | Back tip
`inverted`      | Switch tip background and color
**Tip Font**    |
`text-small`    | Small tip font-size
`text-big`      | Large tip font-size

#### Next up

 -  [Back to Main Page](/m2/extensions/navigationpro/)
 -  [CSS Helpers][css-helpers]

[css-helpers]: /m2/extensions/navigationpro/customization/css-helpers/ "CSS Helpers"
[simple-menu]: /m2/extensions/navigationpro/use-cases/simple-menu/ "Simple Menu"
[config]: /m2/extensions/navigationpro/configuration/ "Configuration"
