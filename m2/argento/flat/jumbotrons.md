---
layout: default
title: Argento Flat Jumbotrons
description: How to customize Argento Flat jumbotron colors
category: Argento
---

# Jumbotrons customization

Jumbotrons — are the wide colorful blocks at the Argento Flat homepage.

Let's change default colors. [Scroll down](#result) to see results.

 1. Create `_argento_custom.less` inside
    `app/design/frontend/Swissup/argento-flat/web/css/source` folder.
 3. Add your custom styles

    ```scss
    @jubmotron__background: #fff;
    @jubmotron-bright__background: #22a0f1;
    @jubmotron-pastel__background: #842293;
    @jubmotron-pastel-alt__background: #6820a5;
    @jubmotron-dark__background: #222;
    @jubmotron-pattern__background: url(../images/custom/seigaiha.png) 50% 0;
    @jumbotron-image__background: url(../images/custom/noisy.png) 50% 0;
    ```

    > If you would like to replace pattern or image backgrounds — place them into
    > `app/design/frontend/Swissup/argento-flat/web/images/custom` folder.

 4. Save the file and run following bash commands to regenerate compiled styles

    ```bash
    cd magento/root/folder
    rm -rf var/view_preprocessed
    bin/magento setup:static-content:deploy
    ```

### Result

{% include gallery.html images=site.data.gallery.m2.argento.flat.jumbotrons class="scroll phone-up-2 photoswipe" %}

##### Next up

- [Create Argento based custom theme](/m2/argento/customization/custom-theme/)
- [Page structure manuals](/m2/argento/flat/page-structure/)

