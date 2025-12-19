---
layout: default
title: AMP custom styles
description: How to change AMP styles
keywords: amp custom styles
category: Accelerated Mobile Pages
---

# Custom Styles

AMP uses [SASS](http://sass-lang.com/guide) preprocessing to minify resulting
CSS styles and to allow you easily change main styles preferences.

> **WARNING!**
>
> Never change AMP core files, as they will be overwritten on the next update.

Extension provides easy and quick way to customize styles without worrying about further updates.

> You can create \_custom.scss file inside your active theme
> (eg. “app/design/frontend/Magento/luma/Swissup_Amp/web/css/scss/\_custom.scss)
> and it will be automatically included by amp.
>
> This allows you to keep original files clean and upgrade to the latest
> amp version without worrying to lose your changes.

Customization can be accomplished with two custom files:

 -  app/design/frontend/Magento/luma/Swissup_Amp/web/css/scss/abstracts/\_custom.scss
 -  app/design/frontend/Magento/luma/Swissup_Amp/web/css/scss/\_custom.scss

AMP will automatically include these files as soon as you'll create them.

The first one is for SASS variables. You can change any existing
[AMP variable](../sass-variables/) in this file. Example:

```scss
$header-fixed: true;
$breadcrumbs-enabled: true;
$footer-background: #fff;
$footer-text-color: $dark-grey;
```

The second one is for custom styles. You can add additional styles here, or
reset existing style, if it's not customizable with SASS variables. Example:

```scss
.cms-index-index {
    .page-main {
        padding: 0 10px;
    }
}
```

##### Next Up

 -  [Back to Home](/m2/extensions/amp/)
 -  [Custom layout and templates](/m2/extensions/amp/customization/design/custom-layout-templates/)
