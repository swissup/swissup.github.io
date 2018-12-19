---
layout: default
title: Dependent Fields
description: Setup a dependency between fields on the Firecheckout page
keywords: dependency, dependent fields
category: Firecheckout
---

# Dependent Fields

> This feature supported since v.1.12.0

DependentFields utility allows to setup dependencies between fields. You can
show or hide some field, when other field/fields values matches some condition.

> DependentFields utility uses [FieldWatcher][field-watcher] under the hood. So,
> if you don't need to change field status, but do need to do something specific,
> you should use [FieldWatcher][field-watcher] instead.

Shorthand syntax example:

```js
define([
    'Swissup_Firecheckout/js/utils/form-field/dependency'
], function (dependency) {
    'use strict';

    // The code below will make required fax field when company field is not empty,
    // and optional when company is empty
    dependency('.form-shipping-address [name="company"]', {
        '.form-shipping-address [name="fax"]': 'required|optional' // Supported values: required, optional, hidden
    });
});
```

The code above will be automatically expanded into full-featured syntax:

```js
define([
    'Swissup_Firecheckout/js/utils/form-field/dependency'
], function (dependency) {
    'use strict';

    dependency({
        // Use it to simplify field selectors.
        // For example, when all of the fields are inside payment form,
        // you can use `.payment-method._active` as a scope.
        scope: false,

        // Object with fields to watch
        watch: {
            '.form-shipping-address [name="company"]': '*' // any non-empty value
        },

        // Object with fields to react when watched fields are updated
        react: {
            '.form-shipping-address [name="fax"]': {
                match: 'required',
                unmatch: 'optional'
            }
        },

        match: function () {
            // additional logic may be placed here
        },
        unmatch: function () {
            // additional logic may be placed here
        }
    });
});
```

> All custom js should be placed in [custom.js file](/m2/extensions/firecheckout/customization/custom-js/)

##### Next up

 -  [Business account checkbox][business-account-checkbox]
 -  [Back to customization page](/m2/extensions/firecheckout/customization/)
 -  [Back to home](/m2/extensions/firecheckout)

[field-watcher]: /m2/extensions/firecheckout/customization/field-watcher/ "Field watcher"
[business-account-checkbox]: /m2/extensions/firecheckout/customization/use-cases/business-account-checkbox/ "Business account checkbox"
