---
layout: default
title: ArgentoBreeze custom css
category: ArgentoBreeze
---

# Argento custom css

> Make sure to [create and change](/m2/argento-breeze/customization/custom-theme/)
> your theme to `Local/argentobreeze-custom`
> before start.

ArgentoBreeze themes are based on [Breeze frontend](https://breezefront.com/).
This means that we can repeat the [same steps](https://breezefront.com/custom-styles)
to apply custom CSS.

## Example

 1. Navigate to `Local/argentobreeze-custom` directory

    ```
    cd <MAGENTO_ROOT>/app/design/frontend/Local/argentobreeze-custom
    ```

 2. Create `web/css/` folder and navigate inside:

    ```bash
    mkdir -p web/css && cd web/css
    ```

 3. Create `_custom.less` file with the following content:

    ```less
    @theme__brand-color: @blue-600;
    @theme__accent-color: @black;

    @header__dark: false;

    @listing-grid-item__details-height: false;
    @listing-grid-item__hover__box-shadow: false;
    @listing-grid-item-name__line-clamp: false;
    ```

 4. Save the file and run following commands to regenerate compiled styles:

    ```bash
    cd <MAGENTO_ROOT>
    rm -rf var/view_preprocessed pub/static/frontend
    bin/magento setup:static-content:deploy
    ```

##### Next up

 -  [Customization](../)
