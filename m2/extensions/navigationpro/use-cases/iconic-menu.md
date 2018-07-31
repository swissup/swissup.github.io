---
layout: default
title: Navigationpro Iconic Menu
description: Creating navigationpro iconic menu
category: Navigationpro
---

# Iconic Menu

> Don't have a menu yet? Create [simple menu][simple-menu], activate it the
> [config][config] and come back!

## Contents
{:.no_toc}

* TOC
{:toc}

### Top Menu

![Iconic Menu](/images/m2/navigationpro/use-cases/iconic-menu.png)

 1. Navigate to _Swissup > NavigationPro_ page, open menu to edit
 2. Apply custom [item renderer][item-renderer] to each top level category as
    shown below:

    ![Iconic Menu Backend](/images/m2/navigationpro/use-cases/iconic-menu-backend.png)

    ```html
    {% raw %}<a href="{{navpro data='url'}}" class="{{navpro data='class'}} text-center">
        <img src="{{media url='wysiwyg/image.png'}}" alt="" />
        {{navpro data="name"}}
    </a>{% endraw %}
    ```

 3. Click on **Menu Settings** button and fill the following CSS classes
    in [Menu Settings][menu-settings] panel: `justify-around caret-bottom navpro-iconic iconic-vertical`.

 4. That's all. Clear Magento's cache and see the result on the frontend.

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
[config]: /m2/extensions/navigationpro/configuration/ "Configuration"
[apple-menu]: /m2/extensions/navigationpro/use-cases/apple-menu/ "Apple Menu"
