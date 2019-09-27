---
layout: default
title: Navigationpro Megamenu
description: How to create megamenu dropdowns with Navigationpro module
category: Navigationpro
---

# Megamenu

![Megamenu](/images/m2/navigationpro/use-cases/megamenu.png)

### Steps to create Menu

 1. Navigate to _Swissup > NavigationPro_ page, and press "Add New Menu".
 2. Fill the with following values:

    ```
    Name: Some name that will explicitly describe the menu
    Type: Megamenu
    Import Categories From: Select Root Category
    Replace Top Menu at: Select Stores that will use this menu
    ```

 3. Save the form. Now you can open your store frontend and check if everything
    works fine.

### Tips and Tricks

##### "Shop All" Link

If you whould like to limit the number of categories to display on the second
dropdown level (Show 'Shop All' link), navigate to
_Menu Settings > Open Dropdown Settings > Second level dropdown settings_
and edit "Layout" settings:

![Second level dropdown settings](/images/m2/navigationpro/use-cases/megamenu/second-level-dropdown-settings.png)

##### Category Image in Dropdown

We use [EasyCatalogImages](/m2/extensions/easycatalogimages/) to add thumbnail
attribute to each category. You can replace it with any other attribute. Open menu
in backend, then navigate to _Menu Settings > Open Dropdown Settings > First level dropdown settings_.
Here you can edit template that shows category image:

```html
{% raw %}<div style="overflow: hidden; max-height: 350px;">
    {{depend remote_entity.thumbnail}}
        <img class="xs-hide sm-hide" src="{{media url=''}}/catalog/category/{{var remote_entity.thumbnail}}" />
    {{/depend}}
</div>{% endraw %}
```

##### Per-item Dropdown Settings

Sometimes you may want to change dropdown layout for particular item only.
Open menu in backend, click on the category to edit in categories tree on the left
and turn off "Use Menu Settings" in dropdown settings on the right. Here is a
screenshot of dropdown settings for "Women" category:

![Item dropdown settings](/images/m2/navigationpro/use-cases/megamenu/item-dropdown-settings.png)

#### Next up
{:.no_toc}

 -  [Back to Main Page](/m2/extensions/navigationpro/)
 -  [Dropdown Width Modes](/m2/extensions/navigationpro/ui/dropdown-width-modes/)
 -  [Dropdown Layout Builder](/m2/extensions/navigationpro/ui/dropdown-layout-builder/)

[simple-menu]: /m2/extensions/navigationpro/use-cases/simple-menu/ "Simple Menu"
[css-helpers]: /m2/extensions/navigationpro/customization/css-helpers/ "CSS Helpers"

