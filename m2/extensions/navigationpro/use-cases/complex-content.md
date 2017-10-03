---
layout: default
title: Navigationpro Complex Content Dropdopwns
description: Creating navigationpro dropdowns with complex content
category: Navigationpro
---

# Complex Dropdown Content

> Don't have a menu yet? Create [simple menu][simple-menu], activate it the
> [config][config] and come back!

![Complex Content](/images/m2/navigationpro/use-cases/complex-content.png)

Navigate to _Swissup > NavigationPro_ page, open menu to edit, select item
that will have a complex dropdown. Add and resize additional content blocks
with [layout builder][layout-builder] to get something similar to the
screenshot below:

![Complex Content Backend](/images/m2/navigationpro/use-cases/complex-content-backend.png)

Let's see content and settings for each of the blocks:

* TOC
{:toc}


### Top HTML content

```html
<div class="panel mb2">
    <ul class="flex links">
        <li class="label">Popular Categories:</li>
        <li><a href="#">Hoodies</a></li>
        <li><a href="#">Tops</a></li>
        <li><a href="#">Jackets</a></li>
        <li><a href="#">Pants</a></li>
        <li class="ml-auto"><a href="#">Another</a></li>
        <li><a href="#">Links</a></li>
    </ul>
</div>
```

The classes that used to build the panel:

 -  `panel` — Adds minor paddings and light-grey background;
 -  `mb2` — Add bottom margin;
 -  `flex` — Use horizontal list;
 -  `links` — Add some padding to the li's;
 -  `ml-auto` — Align this and all next items to the right;

### Graphical banner

```html
{% raw %}<img src="{{media url='wysiwyg/pexels-photo-24657-square2.jpg'}}" alt="Special Goodies" />
<div class="text-center">
    <h3>Looking for Something Special?</h3>
    <p>Easily create your own artwork, text and more!</p>
    <p><a href="#" class="action primary">Create now</a></p>
</div>{% endraw %}
```

The classes that used to build the panel:

 -  `text-center` — Align text to the center;
 -  `action primary` — Show link as a button (not a Navigationpro class,
    must be supported by the theme you use);

### Subcategories

 -  Columns count — 3
 -  Nested Levels per Dropdown — 3

Images above the category names added with custom item name renderer.
The same approach is used to build the [iconic menu][iconic-menu].

### Right side banner

```html
<img src="http://via.placeholder.com/187x395" alt="Dummy placeholder"/>
```

### Bottom content

```html
<div class="panel bold text-center text-big mb0">Free shipping for all orders!</div>
```

The classes that used to build the panel:

 -  `panel` — Adds minor paddings and light-grey background;
 -  `bold` — Use bold font;
 -  `text-center` — Alight text to the center;
 -  `text-big` — Increase font size;
 -  `mb0` — Don't use the margin at the bottom;

#### Next up
{:.no_toc}

 -  [Back to Main Page](/m2/extensions/navigationpro/)
 -  [CSS Helpers][css-helpers]

[layout-builder]: /m2/extensions/navigationpro/ui/dropdown-layout-builder/ "Layout Builder"
[item-renderer]: /m2/extensions/navigationpro/ui/menu-item-name-as-html/ "Item Name Renderer"
[iconic-menu]: /m2/extensions/navigationpro/use-cases/iconic-menu/ "Iconic Menu"
[css-helpers]: /m2/extensions/navigationpro/customization/css-helpers/ "CSS Helpers"
[simple-menu]: /m2/extensions/navigationpro/use-cases/simple-menu/ "Simple Menu"
[config]: /m2/extensions/navigationpro/configuration/ "Configuration"
