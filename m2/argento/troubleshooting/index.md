---
layout: default
title: Argento for Magento 2 Troubleshooting
description: Fixing some problems in Argento on Magento 2
category: Argento
---

# Troubleshooting

### Argento "Can't generate content" at Magento 2.2 homepage

**Magento 2.2** version is not using that widget part anymore:

```
conditions_encoded="a:1:[i:1;a:4:[s:4:`type`;s:50:`Magento|CatalogWidget|Model|
Rule|Condition|Combine`;s:10:`aggregator`;s:3:`all`;s:5:`value`;s:1:`1`;
s:9:`new_child`;s:0:``;]]"
```

but it is included in installation for earlier versions support.

**Fixing**

 1. Open your homepage content and turn off **WYSIWYG** editor to see the raw code
 2. Find all **Highlight** widgets
 3. Remove that part ```conditions_encoded="a:1:[i:1;a:4....;]]"``` from every widget
 4. Save. Enjoy!

### Getting error: Required parameter 'theme_dir' was not passed

Such errors can happen if you have __"virtual"__ themes instead of __"normal"__.
That sometimes happens during the upgrade.

**Fixing**

* Go to `PhpMyAdmin` > `Your Magento2 database`
* Find the `"theme"` table
* And make sure that all theme types are set to `'0'`
* In case any of them have `type` = `'1'` change it to `'0'`
* Error should be gone

##### Next up

 -  [Small css customizations](/m2/argento/customization/custom-css/)
 -  [Create Argento based custom theme](/m2/argento/customization/custom-theme/)
 -  [View list of included modules](/m2/argento/#extensions)
