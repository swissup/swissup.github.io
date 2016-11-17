---
layout: default
title: Form field manager
description: How to add labels, placeholders and formatters for checkout fields
keywords: >
    label, placeholder, formatter, FormFieldManager
category: Firecheckout
---

# Form field manager

> Available since 3.8.1

Firecheckout can add, modify, remove field labels and placeholders with
"FormFieldManager" component. Additionally it can add field formatter to any field
at checkout page (currently in beta).

All you need is to call the javascript initialization from firecheckout page.

> [See usage example](../street-line-labels/)

### Supported options

The shortest way to understand supported options is the next code example:

```js
{% raw %}new FC.FormFieldManager({
    '#billing\\:street1': {
        label: 'Street',        // can be a string or false to remove label
        placeholder: 'Street'   // can be a string or false to remove placeholer
    },

    '#billing\\:street2': {
        label: 'Apartments',
        placeholder: 'Apt.'
    },

    '#billing\\:telephone': {
        placeholder: '202-555-0198',
        formatter: {
            // 9 - is any number
            // a - is any alpha
            // * - is any number or alpha
            // see more info at http://firstopinion.github.io/formatter.js/
            pattern: '{{999}}-{{999}}-{{9999}}'

            // Example of other pattern to match different placeholders:
            // 1. '(800) 123-4567'  : '({{999}}) {{999}}-{{9999}}'
            // 2. '+1-202-555-0198' : '+{{9}}-{{999}}-{{999}}-{{9999}}'
        }
    }
});{% endraw %}
```
