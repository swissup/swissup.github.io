---
layout: default
title: AMP for Magento 2 installation from Marketplace
description: How to install AMP on Magento 2 from Marketplace
category: Accelerated Mobile Pages
exclude_from_search: true
---

# Installation from Marketplace

{% include installation/m2/marketplace.html package="swissup/amp" installer="true" %}

## Magento 2.1.x users should apply additional changes

 -  [Add 'view_block_abstract_to_html_after' event][m21_add_event]
 -  [Allow attribute 'template' for 'blockReferenceType'][m21_allow_template]

## Result

Navigate to you store with `?amp=1` parameter in url to check how it looks.

{% include gallery.html images=site.data.gallery.m2.amp.index class="phone-up-2 tablet-up-3 photoswipe scroll" %}

##### Next Up
{:.no_toc}

 -  [Configuration](../../configuration/)
 -  [Homepage](../../customization/homepage/)
 -  [Footer](../../customization/footer/)
 -  [Google Analytics](../../google-analytics/)
 -  [FAQ](../../faq/)

[m21_add_event]: /m2/extensions/amp/known-issues/#broken-amp-pages-on-magento-21x
[m21_allow_template]: /m2/extensions/amp/known-issues/#the-attribute-template-is-not-allowed-error-on-magento-21x
