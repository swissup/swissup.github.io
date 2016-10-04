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

Argento brings possibility to create new `argento_custom.js` file, that will be
automatically included on all pages.

 1. Create new directory in yout custom Argento sub-theme:

    ```
    app/design/frontend/Local/argento-[essence]-custom/web/js
    ```

 2. Create `argento_custom.js` inside `js` folder
 3. Add script skeleton:

    ```js
    define([
        'jquery',
        'domReady!'
    ], function($) {
        alert("Hi, I'm custom js file");
    });
    ```

 4. Save the file and run following bash commands to deploy script

    ```bash
    cd magento/root/folder
    php bin/magento setup:static-content:deploy
    ```

##### Next up

 -  [Back to Argento customization home](../)
 -  [Create Argento based custom theme](/m2/argento/customization/custom-theme/)
