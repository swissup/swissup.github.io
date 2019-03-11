---
layout: default
title: Collapsible.js utility
description: How to transform some block into collapsible
keywords: >
    collapsible
category: Firecheckout
---

# Collapsible.js

> This feature supported since v.1.17.0

Collapsible.js utility allows to transform some elements into collapsible blocks.

Syntax examples:

```js
define([
    'Swissup_Firecheckout/js/utils/collapsible'
], function(collapsible) {
    'use strict';

    // Basic example
    // The script will find '.swissup-checkout-fields' block and transform its
    // first child into collapsible header. The second child will be transformed
    // into collapsible content.
    collapsible('.swissup-checkout-fields');

    // Advanced examples
    // 1. Collapsible additional checkout fields section
    collapsible('.swissup-checkout-fields', {
        header: '.step-title',
        content: '.fieldset',
        openedState: '_active',
        active: true
    });
    // 2. Collapsible order review section ('header' is required in the configuration)
    collapsible('.opc-block-shipping-information', {
        header: '.fc-heading',
        active: true
    });
});
```

##### Next up

 -  [Collapsible Checkout Fields section](/m2/extensions/firecheckout/customization/use-cases/collapsible-checkout-fields/)
 -  [Back to customization page](/m2/extensions/firecheckout/customization/)
 -  [Back to home](/m2/extensions/firecheckout)
