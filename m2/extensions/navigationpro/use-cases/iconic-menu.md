---
layout: default
title: Navigationpro Iconic Menu
description: Creating navigationpro iconic menu
category: Navigationpro
---

# Iconic Menu

## Contents
{:.no_toc}

* TOC
{:toc}

### Top Menu

![Iconic Menu](/images/m2/navigationpro/use-cases/iconic-menu.png)

#### Steps to create Menu

 1. Navigate to _Swissup > NavigationPro_ page, and press "Add New Menu".
 2. Fill the with following values:

    ```
    Name: Some name that will explicitly describe the menu
    Type: Iconic
    Import Categories From: Select Root Category
    Replace Top Menu at: Select Stores that will use this menu
    ```

 3. Save the form. Now you can open your store frontend and check if everything
    works fine.

#### Tips and Tricks

##### Category Icons

We use [EasyCatalogImages](/m2/extensions/easycatalogimages/) to add thumbnail
attribute to each category. You can replace it with any other attribute. Open menu
in backend, then navigate to
_Menu Settings > Open Item Settings > First level item settings_.
Here you can edit template that shows category icon:

```html
{% raw %}<a href="{{var item.url'}}" class="{{var item.class}}">
    {{depend remote_entity.thumbnail}}
        <img class="xs-hide sm-hide" width="50px" src="{{media url=''}}/catalog/category/{{var remote_entity.thumbnail}}" />
    {{/depend}}
    <span>{{var item.name}}</span>
</a>{% endraw %}
```

##### Per-item Icon Settings

Sometimes you may want to change icon for particular item only.
Open menu in backend, click on the category to edit in categories tree on the left,
and use "Name as Html" on the right ("Advanced Settings" fieldset).
Here is an example:

```html
{% raw %}<a href="{{var item.url}}" class="{{var item.class}}">
    <img class="xs-hide sm-hide" src="{{media url=&quot;wysiwyg/iconfinder_multimedia-37_2849799.png&quot;}}" alt="" />
    <span>{{var item.name}}</span>
</a>{% endraw %}
```

### Dropdown Menu

![Iconic Menu in a Dropdown](/images/m2/navigationpro/use-cases/iconic-menu-dropdown.png)

This menu looks similar to [Apple Menu][apple-menu], except it shows dropdowns
and uses one menu instance only.

 1. Navigate to _Swissup > NavigationPro_ page, open menu to edit.
 2. Click **Menu Settings** button and change the following fields:

    ```
    Maximal Depth: 0
    CSS Class: justify-evenly caret-hidden
    ```

    **First level dropdown settings**

    ```
    Width: Full-Width
    Layout:
        Edit subcategories item:
            Columns Count 5
    ```

    Save the changes.

 4. Expand top-level category in the tree on the left side, and fill its
    children ["Advanced Settings"](/m2/extensions/navigationpro/backend/menu-edit/#advanced-settings)
    with following values:

    Change "Name as Html" option only:

    ```html
    {% raw %}<a href="{{navpro data='url'}}" class="{{navpro data='class'}} text-center flex flex-column items-center">
        <img src="{{media url='wysiwyg/image.png'}}" alt="" />
        {{navpro data="name"}}
    </a>{% endraw %}
    ```

    Repeat this operation for each child.

    > "Name as Html" content is identical for all chilren. You need to change
    > `<img src="{% raw %}{{media url='wysiwyg/image.png'}}{% endraw %}" alt="" />` only.

 5. That's all. Clear Magento's cache and see the result on the frontend.

#### Next up
{:.no_toc}

 -  [Back to Main Page](/m2/extensions/navigationpro/)
 -  [CSS Helpers][css-helpers]

[item-renderer]: /m2/extensions/navigationpro/ui/menu-item-name-as-html/ "Item Name Renderer"
[menu-settings]: /m2/extensions/navigationpro/backend/menu-settings/ "Menu Settings Panel"
[css-helpers]: /m2/extensions/navigationpro/customization/css-helpers/ "CSS Helpers"
[simple-menu]: /m2/extensions/navigationpro/use-cases/simple-menu/ "Simple Menu"
[apple-menu]: /m2/extensions/navigationpro/use-cases/apple-menu/ "Apple Menu"
