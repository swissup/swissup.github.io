---
layout: default
title: Speculation Rules Usage
description: How to setup email package
keywords: "pagespeed setup usage guide"
category: Speculation Rules
---

# Speculation Rules setup

`Store` > `Configuration` > `Swissup` > `Speculation Rules`

### Main section

Option             | Description
-------------------|------------------------------------------------------------
Enable             | Allows to enable/disable module per store view
Speculation  Rules | Textarea allows to change predefined Speculations Rules

Speculation rules take the form of a JSON structure that determine what resources should be prefetched or prerendered by the browser. This is part of the [Speculation Rules API](https://developer.mozilla.org/en-US/docs/Web/API/Speculation_Rules_API).

[Speculation Rules Syntax Docs](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/script/type/speculationrules#syntax)


#### Predefined Rules

```
{
    'prerender': [{
        'source': 'document',
        'where': {
            'and': [
                { 'href_matches': '/*' },
                { 'not': {'selector_matches': [ '.action', '.skip-prerender']}},
                { 'not': {'selector_matches': '[rel~=nofollow]'}},
                { 'not': {'href_matches': [
                    'checkout',
                    'customer',
                    'search',
                    'catalogsearch',
                    'product_compare',
                    'wishlist'
                ]}}
            ]
        },
        'eagerness': 'moderate'
    }]
}
```

##### See also

Great! Now you might want to see previous:

- [Installation](/m2/extensions/speculation-rules/installation/)
- [Changelog](/m2/extensions/speculation-rules/changelog/)
