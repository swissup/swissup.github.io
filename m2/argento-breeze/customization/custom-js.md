---
layout: default
title: ArgentoBreeze custom js
category: ArgentoBreeze
---

# Argento custom js

> Make sure to [create and change](/custom-theme) your theme to `Local/argentobreeze-custom`
> before start.

ArgentoBreeze themes are based on [Breeze frontend](https://breezefront.com/).
This means that we can repeat the [same steps](https://breezefront.com/custom-javascript)
to add custom JS.

## Example

 1. Navigate to `Local/argentobreeze-custom` directory

    ```
    cd <MAGENTO_ROOT>/app/design/frontend/Local/argentobreeze-custom
    ```

 2. Create `web/js/breeze/` folder and navigate inside:

    ```bash
    mkdir -p web/js/breeze && cd web/js/breeze
    ```

 3. Create `custom.js` file with the following content:

    ```js
    (function () {
        'use strict';

        $(document).on('breeze:load', function () {
            console.log('Hello');
        });
    });
    ```

 4. Save the file and run following commands to deploy js file

    ```bash
    cd magento/root/folder
    php bin/magento setup:static-content:deploy
    ```

#### Next Up

- [Customization](../)
