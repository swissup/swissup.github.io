---
layout: default
title: Navigationpro Widget
description: Navigationpro Widget for Magento 2
keywords: sidebar navigation
category: Navigationpro
---

# Widget

NavigationPro provides its own widget that can be used across the site with the
help of _Content > Widgets_ page or could be inserted directly into supported
content areas (The one with _Insert Widget_ button above the textarea).

![Insert Widget Button](/images/m2/navigationpro/widget/insert-widget-button.png)

You can also use widget programmatically via layout xml instructions.
The options below will help you to find option code to use:

#### Widget Options

Option Name             | Code          | Description
------------------------|---------------|-------------------
Menu                    | identifier    | NavigationPro menu indentfier
Show Active Branch Only | show_active_branch | Enable Amazon-like [sidebar menu](/m2/extensions/navigationpro/use-cases/amazon-menu/#sidebar-menu)
Initially Shown Levels Count | visible_levels | Menu with initially [expanded levels][sidebar-expanded]. Could be used separately from **Show Active Branch Only** option
Theme                   | theme         | Menu [theme][themes]
Orientation             | orientation   | Choose between horizontal (Top), vertical (Sidebar), and accordion (Sidebar) menus.
Dropdown Positioning    | dropdown_side | Choose between Standard, Left (Useful when menu is added to right column), and Top dropdown sides
Additional CSS Class    | css_class     | Additional css class for menu
Wrap into Block Template | wrap         | Usefull, when placing menu into sidebar
Block Title             | block_title   | Block wrapper title
Block CSS Class         | block_css     | Block wrapper class

#### Layout XML usage

```xml
<referenceContainer name="sidebar.main.top">
    <block class="Swissup\Navigationpro\Block\Widget\Menu" name="sidebar.menu" template="Swissup_Navigationpro::menu.phtml">
        <arguments>
            <argument name="identifier" xsi:type="string">sidebar</argument>
            <argument name="show_active_branch" xsi:type="boolean">true</argument>
            <argument name="theme" xsi:type="string">compact</argument>
            <argument name="orientation" xsi:type="string">vertical</argument>
            <argument name="wrap" xsi:type="boolean">true</argument>
        </arguments>
    </block>
</referenceContainer>
```

#### PHP Code

```php
echo $block->getLayout()
    ->createBlock('Swissup\Navigationpro\Block\Widget\Menu')
    ->addData([
        'identifier' => 'sidebar',
        'show_active_branch' => true,
        'theme' => 'compact',
        'orientation' => 'vertical',
        'wrap' => true,
    ])
    ->toHtml();
```

#### Next up

 -  [How to create Sidebar Menu](/m2/extensions/navigationpro/use-cases/sidebar-menu/)
 -  [How to create Amazon-like Sidebar Menu](/m2/extensions/navigationpro/use-cases/amazon-menu/#sidebar-menu)
 -  [Themes][themes]
 -  [Back to Main Page](/m2/extensions/navigationpro/)

[sidebar-expanded]: /m2/extensions/navigationpro/use-cases/sidebar-menu/ "Sidebar Menu with expanded levels"
[themes]: /m2/extensions/navigationpro/themes/ "Navigationpro Themes"
