---
layout: default
title: Menu item "Home" as category sibling
description: Create navigation pro sibling Home
keywords: "home menu item, menu, siblings"
category: Navigationpro
---

# Create menu item "Home"

##### Expected result

![Item menu Home](/images/navigationpro/siblings/home-menu-item.png)

##### How to add

Please, follow next few steps and you will create menu item "Home".

1.  Navigate to NavigationPro backend interface and select menu to edit
2.  Select first visible category. It is "Women" on screenshot below:

    ![Create item home - 1](/images/navigationpro/siblings/home-menu-item-1.png)

3.  Open tab `Siblings` and setup new sibling. Click button `Add New Sibling`.
    Input data into fields:

    | Field       | Value |
    |-------------|-------|
    | **Content** | `<a href="{% raw %}{{store url="/"}}{% endraw %}" class="nav-a"><span>Home</span></a>` |
    | **Dropdown Content** | *emprty* |
    | **Sort Order** | -200 |
    | **Status** | Enabled |
    | **Dropdown css styles** | *empty* |

    ![Create item home - 2](/images/navigationpro/siblings/home-menu-item-2.png)

4.  Save changes, flush cache and check frontend.
