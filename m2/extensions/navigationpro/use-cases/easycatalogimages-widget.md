---
layout: default
title: Navigationpro and EasyCatalogImages Widget
description: Using EasyCatalogImages Widget instead of standard dropdown
category: Navigationpro
---

# Easy Catalog Images Widget

> Don't have a menu yet? Create [simple menu][simple-menu], activate it the
> [config][config] and come back!

![EasyCatalogImages Widget](/images/m2/navigationpro/use-cases/easycatalogimages-widget.png)

Navigate to _Swissup > NavigationPro_ page, select item to edit and use
[layout builder][layout-builder] to remove standard subcategories and add
custom HTML content:

![EasyCatalogImages Widget Backend](/images/m2/navigationpro/use-cases/easycatalogimages-widget-backend.png)

Use **Insert Widget** button in html content editor to insert the widget. Result:

```html
{% raw %}<div class="text-center">
{{widget type="Swissup\Easycatalogimg\Block\Widget\SubcategoriesList" category_id="category/20" category_count="100" subcategory_count="0" column_count="4" show_image="1" image_width="294" image_height="450" template="Swissup_Easycatalogimg::list.phtml" hide_when_filter_is_used="0"}}
</div>{% endraw %}
```

> **Warning!**
>
> Don't copy-paste the code above as you will have slightly different code for
> the `category_id="category/20"` property.

#### Next up
{:.no_toc}

 -  [Back to Main Page](/m2/extensions/navigationpro/)
 -  [CSS Helpers][css-helpers]

[layout-builder]: /m2/extensions/navigationpro/ui/dropdown-layout-builder/ "Layout Builder"
[item-renderer]: /m2/extensions/navigationpro/ui/menu-item-name-as-html/ "Item Name Renderer"
[menu-settings]: /m2/extensions/navigationpro/backend/menu-settings/ "Menu Settings Panel"
[css-helpers]: /m2/extensions/navigationpro/customization/css-helpers/ "CSS Helpers"
[simple-menu]: /m2/extensions/navigationpro/use-cases/simple-menu/ "Simple Menu"
[config]: /m2/extensions/navigationpro/configuration/ "Configuration"
