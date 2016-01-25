---
layout: default
title: Navigationpro
description: Navigationpro documentation
keywords: "navigationpro, menu, structure"
category: Navigationpro
---

# Navigation Pro

NavigationPro is a powerfull Magento module, that allows to create outstanding
frontend menus without html and css knowledge. Current module provides menus base on categories of your store.

General settings of module you can change at backend. Go to menu `System` -> `Configuration` -> `Navigation Pro` (in section 'Templates-master' on left side)`

Go to menu `Templates Master` -> `Navigation Pro` when you need to create or modify frontend menus.

### Contents
 1. [Menu "from the box"](#menu-from-the-box)
    - [Menu styles](#menu-styles)
 2. [Navigation structure on the screenshot](#navigation-structure)
 3. [Siblings](siblings/)
    - [Backend Interface](siblings/#backend)
    - Use Cases:
      - ["Shop By" sibling with subcategories dropdown content](siblings/shop-by-with-dropdown-content/)
      - ["Brands" sibling with dropdown content](siblings/brands-with-dropdown-content/)
      - ["Browse By" sibling with attributepages list](siblings/browse-by-with-attributepages-list/)
 4. Dropdown top and bottom content
 5. [Dropdown columns](dropdown-columns/)
    - [Backend Interface](dropdown-columns/#backend)
    - Use Cases:
      - [Replace standard subcategories dropdown with Easy Catalog Images widget](dropdown-columns/easycatalogimages-widget/)
 6. Customization
    - [Open accordion on category click](open-accordion-on-category-click)

### Menu "from the box"

With NavigationPro you can add top menu, left menu and right menu to your store. Obviously, top menu is a menu that always appears in header of your store. Left and right menus displays in left and right columns, if they are shown at your store's layout.

You get three menus aftre intallation: "top", "left" and "right". Basicly, they are representation of your category tree.

Use NavigationPro general settings to specify where should every menu appears (`System` -> `Configuration` -> `Navigation Pro`).

![System > Configuration](/images/navigationpro/system-config.png)

#### Menu styles

Extension provides you two kinds of menu behavior (menu style):

| Dropdown style | Accordion style |
|-|:-:|
| ![Dropdown style](/images/navigationpro/dropdown-style.gif) | ![Accordion style](/images/navigationpro/accordion-style.gif) |

As you can see, best style for top menu is dropdown. And accordion style we recommend to use for menu in column. But in the end it's only your choice.

Menu style specifies for every menu individually. Go to menu `Templates Master` -> `Navigation Pro`. Select menu that you want to modify in left side and select option "Style".

![Menu style setting](/images/navigationpro/menu-style.png)

### Navigation structure

![Fronend navigation](https://cldup.com/ilpzHHCngW-2000x2000.png)
