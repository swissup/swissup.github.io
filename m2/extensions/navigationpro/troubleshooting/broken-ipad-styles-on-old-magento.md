---
layout: default
title: Broken styles on iPad in old Magento versions
description: How to fix iPad broken styles when using old magento version
category: Navigationpro
---

# Broken styles on iPad

Old Magento versions (before 2.4.4) use different media query formula and this 
affects Navigationpro module.

To fix this issue you need to create [_custom-variables.less](/m2/extensions/navigationpro/customization/custom-css/) 
file with the following content:

```scss
@navpro__sm__max-width: 767px;
```

Save the file, clear cache, and redeploy static content.

#### Next up
{:.no_toc}

 -  [Back to Main Page](/m2/extensions/navigationpro/)
