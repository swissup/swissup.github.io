---
layout: default
title: Navigationpro Slideout Menu
description: Navigationpro Slideout Menu
category: Navigationpro
---

# Slideout Menu

Slideout menu is not visible by default. User toggles slideout menu by
clicking the 'hamburger' icon in the header. Please note, that 'hamburger' icon
is not a part of menu functionality, but the standard element of Magento 2 theme.
Slideout menu just reveal it for desktop devices with simple CSS styles.

{% include gallery.html images=site.data.gallery.m2.navigationpro.slideout class="scroll phone-up-1 tablet-up-3 photoswipe" %}

### How to create slideout menu

 1. Navigate to _Swissup > NavigationPro_ page and press **Add New Menu** button.
 2. Fill the form with the following values:

    ```
    Name: Some name that will explicitly describe the menu
    Type: Slideout
    Import Categories From: Select Root Category
    Replace Top Menu at: Select Stores that will use this menu
    ```

    > **Attention!**
    >
    > Selected stores must use selected Root Category.
    >
    > For example:
    > When "Store 1" uses "Root Category 1" and "Store 2" uses "Root Category 2",
    > you should create two separate menu's for each store.

 3. Save the form. Now you can open your store frontend and check if everything
    works fine.
 4. Pay attention to [Modifiers field](/m2/extensions/navigationpro/backend/menu-settings/).
    It allows to enable one of the Slideout Menu variations: Accordion, Ribbon, Stacked:

    > You can also uncheck all variations and use simple dropdown styles.

    ![Dropdown Types](/images/m2/navigationpro/slideout/dropdown-type.png)

### Third-party themes integration

When using third-party theme, there is a high chance that the 'hamburger'
icon will stay inivisible, or will appear in wrong place.

In this case you need to contact with your theme developers and ask them
for advice on how to show 'hamburger' icon for desktop devices.

Here is a LESS styles that is applied by default when slideout menu is used:

```scss
.navpro-with-slideout { // <-- body class
    .page-header .nav-toggle {
        display: block;
        .lib-css(position, @navpro-slideout-toggle__position);
        .margin(@navpro-slideout-toggle__margin);
    }
    .page-header .header.content .nav-toggle + .logo {
        .margin-left(@navpro-slideout-logo__margin-left);
    }
    .nav-sections {
        margin: 0;
    }
}
```

Default variables values:

```scss
@navpro-slideout-logo__margin-left: 50px;
@navpro-slideout-toggle__margin: 8px 0 8px 8px;
@navpro-slideout-toggle__position: false;
```

#### Next up
{:.no_toc}

 -  [Back to Main Page](/m2/extensions/navigationpro/)
 -  [CSS Helpers][css-helpers]

[css-helpers]: /m2/extensions/navigationpro/customization/css-helpers/ "CSS Helpers"
