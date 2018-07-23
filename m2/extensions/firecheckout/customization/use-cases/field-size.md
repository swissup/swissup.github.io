---
layout: default
title: Change Field Size
description: Change size for some of the form fields
keywords: >
    field size
category: Firecheckout
---

# Change field size

> This feature supported since v.1.12.0
>
> Works with [compact form style][compact-form] only.

Firecheckout uses equal size for all of the address form fields. If you'd like
to resize some of the fields you can use [grid system][css-helpers] classes:

```js
define([
    'Swissup_Firecheckout/js/utils/form-field/classname'
], function (classname) {
    'use strict';

    /**
     * Resize firstname and lastname fields to 50% by default,
     * and 100% when parent container is small.
     */
    classname(
        '[name="firstname"], [name="lastname"]',
        'fc-col-6 fc-size-xs:fc-col-12'
    );

    /**
     * Resize company and street fields to take the whole row
     */
    classname(
        '[name="company"], [name="street[0]"], [name="street[1]"]',
        'fc-col-12'
    );

    /**
     * Place country, region, postcode, and city fields in a single row
     * when parent container is large
     */
    classname(
        [
            '[name="country_id"]',
            '[name="region_id"], [name="region"]',
            '[name="postcode"]',
            '[name="city"]'
        ].join(', '),
        'fc-size-l:fc-col-3'
    );

    /**
     * Resize telephone and fax fields to 50% by default,
     * and 100% when parent container is small.
     */
    classname(
        '[name="telephone"], [name="fax"]',
        'fc-col-6 fc-size-xs:fc-col-12'
    );
});
```

> **Attention!**
>
> Don't forget to rearrange these fields via
> [AddressFieldsManager grid](/m2/extensions/address-field-manager/usage/grid/)

#### Result

![Resized fields](/images/m2/firecheckout/customization/use-cases/field-size.png)

##### Next up

 -  [Back to home](/m2/extensions/firecheckout/)

[compact-form]: /m2/extensions/firecheckout/configuration/#form-styles "Compact Form Style"
[css-helpers]: /m2/extensions/firecheckout/customization/css-helpers/ "CSS Helpers"
