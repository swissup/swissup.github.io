---
layout: default
title: Navigationpro Sidebar Menu
description: How to create sidebar menu with Navigationpro module
category: Navigationpro
---

# Sidebar Menu

{% include gallery.html images=site.data.gallery.m2.navigationpro.sidebar class="scroll phone-up-1 tablet-up-3 photoswipe" %}

* TOC
{:toc}

### Create Menu and Widget

 1. Navigate to _Swissup > NavigationPro_ page, and press "Add New Menu".
 2. Fill the [form](/m2/extensions/navigationpro/backend/menu-new/) according to
    your needs and press "Save".
 3. That's all. Clear Magento's cache and check out the sidebar menu on the
    category pages.

### Edit Widget Settings

Proceed the following steps, if you'd like to customize sidebar menu styles:

 1. Navigate to _Content > Widgets_.
 2. Find the newly created widget in the widgets grid.
 3. Switch to _Widget Options_ tab and fill the values according to desired result.

    [**Simple dropdown settings:**](/m2/extensions/navigationpro/use-cases/sidebar-menu/#&gid=1&pid=1)

    ```
    Menu:                           Select newly created simple menu
    Show Active Branch Only:        No
    Initially Shown Levels Count:   1
    Theme:                          Blank
    Orientation:                    Vertical
    Dropdown Positioning:           Standard
    Wrap into Block Template:       Yes
    Block Title:                    Categories
    ```

    [**Sidebar with initially expanded levels:**](/m2/extensions/navigationpro/use-cases/sidebar-menu/#&gid=1&pid=2)

    ```
    Menu:                           Select newly created simple menu
    Show Active Branch Only:        No
    Initially Shown Levels Count:   2
    Theme:                          Flat
    Orientation:                    Vertical
    Dropdown Positioning:           Standard
    Wrap into Block Template:       Yes
    Block Title:                    Categories
    ```

    [**Sidebar with active branch only:**](/m2/extensions/navigationpro/use-cases/sidebar-menu/#&gid=1&pid=3)

    ```
    Menu:                           Select newly created simple menu
    Show Active Branch Only:        Yes
    Show Parent Category:           Yes
    Theme:                          Compact
    Orientation:                    Vertical
    Dropdown Positioning:           Standard
    Wrap into Block Template:       Yes
    Block Title:                    [Leave Empty]
    ```

 5. Save Widget and check out the result!

#### Next up
{:.no_toc}

 -  [Back to Main Page](/m2/extensions/navigationpro/)
 -  [Widget Options](/m2/extensions/navigationpro/widget/)

[simple-menu]: /m2/extensions/navigationpro/use-cases/simple-menu/ "Simple Menu"
