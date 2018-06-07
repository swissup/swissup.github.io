---
layout: default
title: Third-party modules compatibility
description: magento 2 checkout success page compatibility
keywords: " magento 2 checkout success page compatibility, Magecomp, Gstcharge "
category: Checkout Success
---

# Third-party modules compatibility
{:.no_toc}

* TOC
{:toc}

Our Success Page extension works greate with core Magento functionality.

But it may require some manual integration with other third-party modules that affect order info output on storefront.

You can find detailed instruction below.

#### Magecomp_Gstcharge

This module changes templates for Order Items and Order Info blocks. So you have to create addition layout update file for success page in this module.

Make a copy of file "*app/code/Magecomp/Gstcharge/view/frontend/layout/sales_order_view.xml*" with new name "*swissup_checkoutsuccess.xml*". Clear Magento cache and check Success Page with preview feature.
