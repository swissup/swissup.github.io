---
layout: default
title: Field Manager
description: >
    How to change field label, placeholder, classname, mask or any
    other attribute, using Firecheckout utils.
keywords: >
    mask, formatter, label, placeholder, field size
category: Firecheckout
---

# Field manager

> This feature supported since v.1.11.0

FieldManager component allows to change form field properties like placeholder,
label, classname, apply [mask/formatter][field-mask].
This feature could be useful to [improve the look of the form][field-size],
create [housenumber field][housenumber] and other custom changes.

Here is a syntax:

```js
define([
    'Swissup_Firecheckout/js/utils/form-field/manager'
], function(manager) {
    'use strict';

    manager('[name="fax"]', {
        label: 'Custom Label',
        placeholder: 'Custom Placeholder',
        classname: 'fc-col-newline fc-size-l:fc-col-6', // see http://docs.swissuplabs.com/m2/extensions/firecheckout/customization/css-helpers/
        mask: 'phone', // see http://docs.swissuplabs.com/m2/extensions/firecheckout/customization/field-mask/
        attr: {
            'data-hello': 'world'
        }
    });
});
```

> All custom js should be placed in [custom.js file](../custom-js/)

There are also separate utils available for each of the property:

Util                                                    | Example                             | Usage Examples
--------------------------------------------------------|-------------------------------------|---------------
`Swissup_Firecheckout/js/utils/form-field/label`        | `label(selector, label)`            | [Housenumber][housenumber]
`Swissup_Firecheckout/js/utils/form-field/placeholder`  | `placeholder(selector, placeholder)`| [Housenumber][housenumber]
`Swissup_Firecheckout/js/utils/form-field/classname`    | `classname(selector, classname)`    | [CSS helpers][css-helpers], [Housenumber][housenumber], [Change field size][field-size]
`Swissup_Firecheckout/js/utils/form-field/mask`         | `mask(selector, mask)`              | [Field mask][field-mask], [Postcode mask][postcode-mask]
`Swissup_Firecheckout/js/utils/form-field/attr`         | `attr(selector, attributes)`        | Validator

##### Next up

 -  [Back to home](/m2/extensions/firecheckout)

[css-helpers]: /m2/extensions/firecheckout/customization/css-helpers/ "CSS Helpers"
[housenumber]: /m2/extensions/firecheckout/customization/use-cases/housenumber/ "Housenumber"
[field-size]: /m2/extensions/firecheckout/customization/use-cases/field-size/ "Change field size"
[field-mask]: /m2/extensions/firecheckout/customization/field-mask/ "Field mask"
[postcode-mask]: /m2/extensions/firecheckout/customization/use-cases/postcode-mask/ "Postcode mask"
