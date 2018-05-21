---
layout: default
title: Navigationpro custom variables for third-party themes
description: Custom NavigationPro variables in third-party themes
category: Navigationpro
---

# Custom theme variables

> This tutorial for third-party themes developers only!
>
> If you purchased some theme and looking for a ways to customize it -
> use [custom-css](../custom-css/) feature instead.

If you are Magento theme developer and would like to customize some styles,
you can use `_custom-theme-variables.less` file, which allows to redefine
variables without copying all of them into your theme.

### Example

 1. Create `_custom-theme-variables.less` files inside your theme:

    ```
    app
    ├── design
        └── frontend
            └── [Vendor]
                └── [theme]
                    └── Swissup_Navigationpro
                        └── web
                            └── css
                                └── abstracts
                                    └── _custom-theme-variables.less
    ```

 2. Redefine navigationpro [variables][less-variables]:

    ```scss
    @navpro-dropdown__background: #4a4a4a;
    @navpro-dropdown__border-color: #444;
    @navpro-dropdown__box-shadow: 0 20px 50px -20px rgba(0, 0, 0, 0.3);
    @navpro-parent-item__caret: @navpro-parent-item__caret-light;
    @navpro-parent-item-level0__caret: @navpro-parent-item__caret-dark;
    ```

 4. Save the file.

##### Next up

 -  [List of navigationpro less variables][less-variables]
 -  [Back to Main Page](/m2/extensions/navigationpro/)

[less-variables]: /m2/extensions/navigationpro/customization/less-variables/ "Less Variables List"
