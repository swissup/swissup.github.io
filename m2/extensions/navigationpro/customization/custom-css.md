---
layout: default
title: Navigationpro Custom CSS
description: Custom CSS for Navigationpro module
category: Navigationpro
---

# Custom CSS

Navigationpro provides easy and quick way to customize menu styles without
worrying about further updates.

You can place `_custom.less` and `_custom-variables.less` files inside your active theme
and they will be automatically included by the module:

 -  app/design/frontend/Magento/luma/Swissup_Navigationpro/web/css/_custom.less
 -  app/design/frontend/Magento/luma/Swissup_Navigationpro/web/css/abstracts/_custom-variables.less

This allows you to keep original files clean and upgrade to the latest
navigationpro version without worrying to lost your changes.

### Example

Let's make a dark dropdowns. [Scroll down](#result) to see the result.

 1. Create `_custom.less` and `_custom-variables.less` files inside your active
    theme:

    ```
    app
    ├── design
        └── frontend
            └── [Magento]
                └── [luma]
                    └── Swissup_Navigationpro
                        └── web
                            └── css
                                ├── abstracts
                                |   └── _custom-variables.less
                                ├── _custom.less
    ```

 2. Redefine navigationpro variable with `abstracts/_custom-variables.less` file:

    ```scss
    @navpro-dropdown__background: #4a4a4a;
    @navpro-dropdown__border-color: #444;
    @navpro-parent-item__caret: @navpro-parent-item__caret-light;
    @navpro-dropdown__box-shadow: 0 20px 50px -20px rgba(0, 0, 0, 0.3);
    ```

 3. Add additional styles with `_custom.less`

    ```scss
    .navpro-dropdown,
    .navpro-dropdown h3,
    .navpro-dropdown .children a,
    .navpro-dropdown .children .parent > a {
        color: #eaeaea;
    }
    ```

 4. Save the file and run following bash commands to regenerate compiled styles

    ```bash
    cd magento/root/folder

    # remove previously deployed firecheckout styles
    find pub/static var/view_preprocessed -type d -regex ".*Navigationpro.*css" -exec rm -rf {} \;

    # run deployment command
    php bin/magento setup:static-content:deploy en_US
    ```

#### Result

> Customization was done under [Swissup/argento-luxury](/m2/argento/luxury/) theme.

![Customized Menu](/images/m2/navigationpro/customization/custom-css.png)

##### Next up

 -  [List of navigationpro less variables](/m2/extensions/navigationpro/customization/less-variables/)
 -  [Back to Main Page](/m2/extensions/navigationpro/)
