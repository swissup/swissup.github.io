---
layout: default
title: Navigationpro Amazon Menu
description: How to create amazon menu with Navigationpro module
category: Navigationpro
---

# Amazon Menu

* TOC
{:toc}

### Top Menu

![Amazon Menu](/images/m2/navigationpro/menu-types/amazon-top.png)

#### Steps to create Menu

 1. Navigate to _Swissup > NavigationPro_ page, and press "Add New Menu".
 2. Fill the with following values:

    ```
    Name: Some name that will explicitly describe the menu
    Type: Amazon Top Menu
    Import Categories From: Select Root Category
    Replace Top Menu at: Select Stores that will use this menu
    ```

 3. Save the form. Now you can open your store frontend and check if everything
    works fine.

#### Tips and Tricks

We use [EasyCatalogImages](/m2/extensions/easycatalogimages/) to add thumbnail
attribute to each category. You can replace it with any other attribute. Open menu
in backend, then navigate to _Menu Settings > Open Dropdown Settings > Second level dropdown settings_.
Here you can edit template that shows category image:

```html
{% raw %}<div style="overflow: hidden; max-height: 550px;">
    {{depend remote_entity.thumbnail}}
        <img class="xs-hide sm-hide" src="{{media url=''}}/catalog/category/{{var remote_entity.thumbnail}}" />
    {{/depend}}
</div>{% endraw %}
```

Sometimes you may want to change dropdown layout for particular item only.
Open menu in backend, click on the category to edit in categories tree on the left
and turn off "Use Menu Settings" in dropdown settings on the right. Here is a
screenshot of dropdown settings for "Women" category:

![Per-item Dropdown Settings](/images/m2/navigationpro/use-cases/amazon-menu/per-item-dropdown-settings.png)

### Sidebar menu

![Amazon Sidebar screenshot](/images/m2/navigationpro/use-cases/amazon-menu/amazon-sidebar-frontend.png)

#### Steps to create Menu

 1. Navigate to _Swissup > NavigationPro_ page, and press "Add New Menu".
 2. Fill the with following values:

    ```
    Name: Some name that will explicitly describe the menu
    Type: Amazon Sidebar Menu
    Import Categories From: Select Root Category
    Replace Top Menu at: Don't select any

    Design Theme: Select the design that your store use
    Assign to Store Views: Select the stores you need
    ```

 3. Save the form.
 3. That's all. Clear Magento's cache and check the sidebar on category pages.

#### Next up
{:.no_toc}

 -  [Back to Main Page](/m2/extensions/navigationpro/)
 -  [Dropdown Width Modes](/m2/extensions/navigationpro/ui/dropdown-width-modes/)
 -  [Dropdown Layout Builder](/m2/extensions/navigationpro/ui/dropdown-layout-builder/)

[simple-menu]: /m2/extensions/navigationpro/use-cases/simple-menu/ "Simple Menu"
[css-helpers]: /m2/extensions/navigationpro/customization/css-helpers/ "CSS Helpers"
[config]: /m2/extensions/navigationpro/configuration/ "Configuration"
