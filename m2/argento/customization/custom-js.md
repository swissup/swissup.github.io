---
layout: default
title: Argento custom js
description: How to include additional javascripts
keywords: >
    argento scripts, argento js, js modifications, argento_custom.js
category: Argento
---

# Argento custom js

> **Notice**
>
> This tutorial assumes that you already created [custom theme](../custom-theme/)
> based on one of Argento themes.
>
> If you did not &mdash; [go ahead](../custom-theme/), it will take 15 minutes.

Argento allows one to create a new `argento-custom.js` file that will be
automatically included on all pages.

 1. Create a new directory in your custom Argento sub-theme:

    ```
    app/design/frontend/Local/argento-[essence|flat]-custom/web/js
    ```

 2. Create `argento-custom.js` inside the `js` folder
 3. Add script skeleton:

    ```js
    define([
        'jquery',
        'domReady!'
    ], function($) {
        alert("Hi, I'm custom js file");
    });
    ```

 4. Save the file and run the following bash commands to deploy the script

    ```bash
    cd magento/root/folder
    php bin/magento setup:static-content:deploy
    ```

##### Next up

 -  [Back to Argento customization home](../)
 -  [Create Argento based custom theme](/m2/argento/customization/custom-theme/)
