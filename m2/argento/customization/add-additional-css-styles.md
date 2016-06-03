---
layout: default
title: Additional css styles
description: How to add additional css styles
keywords: css styles, custom css, split custom styles, css import
category: Argento
---

# Additional css styles

Please use [custom css](../custom-css/) file to add additional css styles.

If you would like to split your styles across multiple less files, use the
`@import` directive inside `_argento_custom.less` file:

```scss
@import 'custom/_typography.less'
@import 'custom/_layout.less'
```
