---
layout: default
title: Prepare module js
description: How to integrate customer module with Breeze
category: Breeze
---

# Module Js

Breeze provides two types of js components:

 - Widget (breeze.widget)
 - View (breeze.view)

The only difference between them is that the view component will apply knockout
bindings to the element. You should to use the view component only if you need
knockout template. Otherwise stick to widget component type.

* TOC
{:toc}

## First Example (Widget component)

### Module code

Let's assume that your module adds js carousel to Magento. It has a template
that renders carousel items and js module that handles template instructions.

Template example `vendor/module/view/frontend/templates/carousel.phtml`:

```html
<div class="carousel" data-mage-init='{"Vendor_Module/js/carousel": {}}'>
    slides
</div>
```

Js code example `vendor/module/view/frontend/web/js/carousel.js`:

```js
define([
    'jquery'
], function ($) {
    'use strict';

    // it could return a function
    return function (options, element) {};

    // or widget
    $.widget('vendor.carousel', {
        _create: function () {}
    });
});
```

### Breeze integration

#### Layout update

First, you need to register `Vendor_Module/js/carousel` component handler.
Create `breeze_default.xml` layout update with the following content:

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
                            <item name="Vendor_Module/js/carousel" xsi:type="string">Vendor_Module/js/breeze/carousel</item>
                        </item>
                    </item>
                </argument>
            </arguments>
        </referenceBlock>
    </body>
</page>
```

The code above will add `Vendor_Module/js/breeze/carousel` script to
the page when `Vendor_Module/js/carousel` declaration is found on the page.

> Read more about [Breeze layout](/m2/extensions/breeze/devdocs/layout/).

#### Widget component

```js
(function () {
    'use strict';

    // declare widget that can be used later
    breeze.widget('carousel', {
        options: {
            default: 'value'
        },

        create: function () {
            console.log(this.element);
            console.log(this.options);
        }
    });

    // instantiate widget for the element with Vendor_Module/js/carousel declaration.
    $(document).on('breeze:mount:Vendor_Module/js/carousel', function (event, data) {
        $(data.el).carousel(data.settings);
    });
})();
```

> Read more about [Breeze js libraries](/m2/extensions/breeze/devdocs/js-stack/).

That's all. Breeze will automatically dispatch `breeze:mount:Vendor_Module/js/carousel`
event for every element with `Vendor_Module/js/carousel` declaration.

## Second Example (View component)

### Module code

Let's assume that your module adds js carousel to Magento. It has a template
that renders carousel items and js module that handles template instructions.

Template example `vendor/module/view/frontend/templates/carousel.phtml`:

```html
<div class="carousel" data-bind="scope: 'carousel'">
    <!-- ko if flag(): -->
        code
    <!-- /ko -->
</div>

<script type="text/x-magento-init">
{
    "*": {
        "Magento_Ui/js/core/app": {
            "components": {
                "carousel": {
                    "component": "Vendor_Module/js/carousel",
                    "config": {}
                }
            }
        }
    }
}
</script>
```

Js code example `vendor/module/view/frontend/web/js/carousel.js`:

```js
define([
    'jquery'
], function ($) {
    'use strict';

    // it could return a function
    return function (options, element) {};

    // or ui element
    return Component.extend({});
});
```

### Breeze integration

#### Layout update

First, you need to register `Vendor_Module/js/carousel` component handler.
Create `breeze_default.xml` layout update with the following content:

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
                            <item name="Vendor_Module/js/carousel" xsi:type="string">Vendor_Module/js/breeze/carousel</item>
                        </item>
                    </item>
                </argument>
            </arguments>
        </referenceBlock>
    </body>
</page>
```

The code above will add `Vendor_Module/js/breeze/carousel` script to
the page when `Vendor_Module/js/carousel` declaration is found on the page.

> Read more about [Breeze layout](/m2/extensions/breeze/devdocs/layout/).

#### View component

```js
(function () {
    'use strict';

    // declare view that can be used later
    breeze.view('carousel', {
        options: {
            default: 'value'
        },

        create: function () {
            console.log(this.element);
            console.log(this.options);
        }
    });

    // instantiate vuew for the element with Vendor_Module/js/carousel declaration.
    $(document).on('breeze:mount:Vendor_Module/js/carousel', function (event, data) {
        $(data.el).carousel(data.settings);
    });
})();
```

> Read more about [Breeze js libraries](/m2/extensions/breeze/devdocs/js-stack/).

That's all. Breeze will automatically dispatch `breeze:mount:Vendor_Module/js/carousel`
event for every element with `Vendor_Module/js/carousel` declaration.

#### Next up
{:.no_toc}

 -  [Back to DevDocs](/m2/extensions/breeze/devdocs/)
