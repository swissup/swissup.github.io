---
layout: default
title: PWA-Firecheckout
description: firecheckout module integration with pwa-studio
keywords: pwa, spa, firecheckout for magento 2, onestepcheckout for magento 2
category: PWA
---

# pwa-firecheckout

 firecheckout module integration with [pwa-studio](https://developer.adobe.com/commerce/pwa-studio/)

- [Original magento 2 module](https://github.com/swissup/firecheckout)
- [Magento 2 module documentation](https://docs.swissuplabs.com/m2/extensions/firecheckout/)

### Magento PWA Studio Setup

[Magento PWA Studio setup](https://magento.github.io/pwa-studio/tutorials/pwa-studio-fundamentals/project-setup/)


### Pre-Install

All action runs in pwa-studio project root dir.


Show trusted vendor list.

```bash
cat package.json | jq '."pwa-studio"."trusted-vendors"'
```

#### Add @swissup to trusted vendors

1. In your pwa-studio project root open package.json
2. Find "pwa-studio" section
3. Add "trusted-vendors" section if not exist
3. Add "@swissup" vendor to "trusted-vendors"

```json
{
    ...
    "pwa-studio": {
        "targets": {
          "intercept": "./local-intercept.js"
        },
        "trusted-vendors": [
          "@swissup"
        ]
    }
}
```


### Install module

```
 yarn add @swissup/pwa-firecheckout
```

##### With github access

```
 yarn add ssh://git@github.com:swissup/pwa-firecheckout.git
```

##### For developers

```
 mkdir -p pwa-studio-custom-packages/swissup
 cd pwa-studio-custom-packages/swissup

 git clone git@github.com:swissup/pwa-firecheckout.git
 cd pwa-firecheckout
 pwd

 # goto pwa project root dir
 cd  ../../../pwa-studio-fundamentals

 yarn add file:[some path]/pwa-studio-custom-packages/swissup/pwa-firecheckout
 yarn run watch
```
