---
layout: default
title: Firecheckout upgrade instructions
category: Firecheckout
---

# Upgrade Instructions

### Version 1.12.0 - 1.13.0

**If you use default firecheckout styles, no action is required. You may skip
this instruction.**

If you use `_custom.less` files to modify firecheckout styles you need to move/rename
your custom.less files as shown below:

Old file (v1.12.0)          | New File (v1.13.0)
----------------------------|-------------------
`css/_custom.less`          | `css/custom/_main.less`
`css/abstracts/_custom.less`| `css/custom/abstracts/_variables.less`

We've also renamed all `less` variables and mixins. In most cases we've
replaced `@firecheckout-` prefix with `@fc-`. Please see
[Less variables page](/m2/extensions/firecheckout/customization/less-variables/)
for more information.
