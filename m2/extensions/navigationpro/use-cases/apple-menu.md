---
layout: default
title: Navigationpro Apple menu
description: Navigationpro Apple Menu
category: Navigationpro
---

# Apple Menu

> This feature is available since 1.6.0

![Apple Menu](/images/m2/navigationpro/use-cases/apple-menu/result.png)

Apple menu — is a combination of two menu's. The first one shows top-level
categories only, the second one - shows children of active category with nice
icons.

> Of course, nobody can stop you from creating the same menu without
> using two menu's - you can show the same children in a dropdown of the first menu.
> Intrested? Go ahead - it's [available too](/m2/extensions/navigationpro/use-cases/iconic-menu/#dropdown-menu)

## Contents
{:.no_toc}

* TOC
{:toc}

### Top-level Menu

 1. Navigate to _Swissup > NavigationPro_ page, and press **Add New Menu**.
 2. Create [new "AppleMenu" menu](/m2/extensions/navigationpro/backend/menu-new/)
    using "Simple Menu" preset.
 3. Click **Menu Settings** button and change the following fields:

    ```
    Maximal Depth: 1
    CSS Class: justify-evenly caret-hidden
    ```

 4. That's all. Clear Magento's cache and see the result on the frontend.

### Secondary Menu

 1. Navigate to _Swissup > NavigationPro_ page, and press **Add New Menu**.
 2. Create [new "AppleMenuSecondary" menu](/m2/extensions/navigationpro/backend/menu-new/)
    using "Simple Menu" preset. Leave "Replace Top Menu at" option empty.
 3. Expand top-level category in the tree on the left side, and fill its
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

 4. Navigate to _Content > Widgets_ and press **Add Widget** button
 5. Create "Navigationpro" widget and assign it you your active theme. Press **Continue**
 6. Fill the form as follows:

    **Storefront properties tab**

    Option          | Value
    ----------------|------
    Widget Title    | Navigationpro AppleMenuSecondary
    Assign to Store Views | All store views
    **Layout updates** |
    Display on      | Specified Page
    Page            | Catalog Category
    Container       | After Page Header Top

    **Widget Options tab**

    Option                  | Value
    ------------------------|-------------------
    Menu                    | AppleMenuSecondary
    Show Active Branch Only | Yes
    Show Parent Category    | No
    Additional CSS Class    | justify-evenly text-center navpro-linkbar xs-hide sm-hide

    Save the widget.

 7. That's all. Clear Magento's cache and see the result on the frontend.

### Custom CSS

 1. [Create `_custom.less`](/m2/extensions/navigationpro/customization/custom-css/)
    file in your active theme with the following content:

    ```scss
    @media (min-width: 768px) {
        .page-wrapper {
            .nav-sections {
                margin-bottom: 0;
                .navpro {
                    .li-item {
                        &.active {
                            background: #fafafa;
                            > a {
                                padding-left: 20px;
                                padding-right: 20px;
                            }
                        }
                    }
                }
            }
            .top-container {
                margin: 0 0 15px;
                max-width: none;
                background: #fafafa;
                .navpro {
                    margin: 0 auto;
                    max-width: 1280px;
                    a {
                        color: #333;
                    }
                }
            }
        }
    }
    ```

    Save the file.

 2. Run following commands to regenerate compiled styles:

    ```bash
    cd magento/root/folder

    # remove previously deployed navigationpro styles
    find pub/static var/view_preprocessed -type d -regex ".*Navigationpro.*css" -exec rm -rf {} \;

    # run deployment command
    php bin/magento setup:static-content:deploy en_US en_GB
    ```

#### Next up
{:.no_toc}

 -  [Back to Main Page](/m2/extensions/navigationpro/)
 -  [CSS Helpers][css-helpers]

[simple-menu]: /m2/extensions/navigationpro/use-cases/simple-menu/ "Simple Menu"
[css-helpers]: /m2/extensions/navigationpro/customization/css-helpers/ "CSS Helpers"
[config]: /m2/extensions/navigationpro/configuration/ "Configuration"
