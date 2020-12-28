---
layout: default
title: Pagebuilder Changelog
description: Pagebuilder changelog
keywords: pagebuilder changelog
category: Pagebuilder
---

# Changelog

### Version 1.0.4

> Dec 8, 2020

 -  Quick filter was added to the sections tree. You can activate it with
    forwardslash `/` keyboard shortcut and deactivate with `esc` key.
    [See short video on Vimeo](https://vimeo.com/488575714)
 -  Config is now saved to the same scope level where it was taken from.
    Previously if was always saved to the current store view scope.
 -  Sections tree is now correctly updated after ajax response and shows all
    available blocks to edit.
 -  Improved overlay size calculation when parent element height/width is collapsed
    due to applied floats on its children.
 -  Fixed js error when nested editable blocks returned in ajax response.
 -  Preserve correct blocks sort order when nested blocks are rendered in ajax.
 -  Prevent js error when DOM node was not found for the editable section.

### Version 1.0.3

> Dec 1, 2020

 -  Magento 2.4: Fixed buggy users selector when trying to select more than 1 pagebuilder user.
 -  Don't show file preview in logo and other image related editors when filename is empty.

### Version 1.0.2

> Nov 24, 2020

 -  Fixed not working Pagebuilder when Pagespeed module removes all comments.
 -  Fixed php error on section save after image upload in Magento 2.4.1.
 -  Tippyjs updated to the latest version.

### Version 1.0.1

> Oct 20, 2020

 -  Fixed not working Pagebuilder in production mode.
 -  Do not enable Pagebuilder when frontend editor is not fully logged in
    (Persistent Cookie is active).

### Version 1.0.0

> Oct 12, 2020

 -  Initial Release.
