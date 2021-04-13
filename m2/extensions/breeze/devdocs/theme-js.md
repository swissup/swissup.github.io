---
layout: default
title: Prepare theme js
description: How to add make theme js works with Breeze
category: Breeze
---

# Theme Js

Let's assume that your theme has `web/js/theme.js` file:

```js
define([
    'jquery'
], function ($) {
    'use strict';

    $('.panel.header > .header.links').clone().appendTo('#store\\.links');
});
```

To copy the logic from this file to the breeze-powered theme you need to create
`Magento_Theme/layout/breeze_default.xml` layout update file with following
content:

```xml
<?xml version="1.0"?>
<page xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:noNamespaceSchemaLocation="urn:magento:framework:View/Layout/etc/page_configuration.xsd">
    <body>
        <referenceBlock name="breeze.js">
            <arguments>
                <argument name="bundles" xsi:type="array">
                    <item name="default" xsi:type="array">
                        <item name="items" xsi:type="array">
                            <item name="your-theme-name-js" xsi:type="string">js/breeze/theme</item>
                        </item>
                    </item>
                </argument>
            </arguments>
        </referenceBlock>
    </body>
</page>
```

> Read more about [Breeze layout](/m2/extensions/breeze/devdocs/layout/).

Then, create the js file itself `web/js/breeze/theme.js` and modify it to get it
work without jQuery and other libraries that are not available in Breeze:

```js
(function () {
    'use strict';

    $('.panel.header > .header.links').clone().appendTo(
        document.getElementById('store.links')
    );
})();
```

> Read more about [Breeze js libraries](/m2/extensions/breeze/devdocs/js-stack/).

#### Next up
{:.no_toc}

 -  [Back to DevDocs](/m2/extensions/breeze/devdocs/)
