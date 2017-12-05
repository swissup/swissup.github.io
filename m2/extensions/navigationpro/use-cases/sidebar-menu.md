---
layout: default
title: Navigationpro Sidebar Menu
description: How to create sidebar menu with Navigationpro module
category: Navigationpro
---

# Sidebar Menu

> Available since 1.1.0

{% include gallery.html images=site.data.gallery.m2.navigationpro.sidebar class="scroll phone-up-1 tablet-up-3 photoswipe" %}

* TOC
{:toc}

> Don't have a menu yet? Create [simple menu][simple-menu] and come back!

 1. Navigate to _Content > Widgets_ and press **Add Widget** button.
 2. Select "Navigationpro" widget and the theme you use in teh first screen.

    ![Settings](/images/m2/navigationpro/use-cases/sidebar/widget-type.png)

 3. Click **Continue** and fill the next page with the following values:

    ```
    Widget Title:           Navigationpro Sidebar for [Your Theme]
    Assign to Store Views:  Select the store views you need
    Sort Order:             0
    ```

    **Layout Updates:**

    ```
    Display on: Specified Page
    Page:       Catalog Category
    Container:  Sidebar Main Top
    ```

 4. Switch to _Widget Options_ tab and fill the values according to desired result.
    
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
