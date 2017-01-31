---
layout: default
title: AMP custom styles
description: How to change AMP styles
keywords: amp custom styles
category: Accelerated Mobile Pages
---

# Custom Styles

AMP uses [SASS](http://sass-lang.com/guide) preprocessing to minify resulting
CSS styles and to allow you easily change main theme preferences.

> **WARNING!**
>
> Never change AMP core files, as they will be overwritten on the next update.

Theme customization can be accomplished with two custom files:

 -  skin/frontend/tmamp/default/scss/abstracts/_custom.scss
 -  skin/frontend/tmamp/default/scss/_custom.scss

AMP will automatically include these files as soon as you'll create them.

The first one is for SASS variables. You can change any existing
[AMP variable](../sass-variables) in this file. Example:

```scss
$header-fixed: false;
$breadcrumbs-enabled: true;
$footer-background: #fff;
$footer-text-color: $dark-grey;
```

The second one is for custom styles. You can add additional styles here, or
reset existing style, if it's not customizable with SASS variables. Example:

```scss
.cms-index-index {
    .main.container {
        padding: 0 10px;
    }
}
```

##### Next Up

 -  [Back to Home](/m1/extensions/amp/)
 -  [Custom theme](/m1/extensions/amp/customization/design/custom-theme/)
