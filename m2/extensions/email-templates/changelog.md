---
layout: default
title: Changelog
description: Email Template changelog
keywords: email templates changelog, email templates updates
category: Email Templates
---

# Changelog

### Version 1.2.2

> Jan 24, 2024

 -  Define email variables when previewing templates for invoices, creditmemo and shipment.

### Version 1.2.1

> Nov 3, 2023

 -  Fix not loaded product image in order emails when storefront theme is Olegnax/athlete2.
 -  Improve source code to meet Magento Coding Standarts.

### Version 1.2.0

> Aug 2, 2023

 -  Reworked all templates and styles. Updated email templates look great in all most common mail clients (including Outlook) and devices.

### Version 1.1.5

> Mar 14, 2023

 -  PHP 8.2 compatibility.

### Version 1.1.4

> Feb 27, 2023

  - Email preview for desktop/tablet/mobile.
  - Minor updates for supplied with module email templates (reset password, new order).
  - Fixed overpurified html in email template preview in Magento 2.4.5.
  - Solve jquery migration warnings on email preview.


### Version 1.1.2

> Jun 22, 2021

  - Improve module stability. Compatibility with Yireo_EmailTester2.
  - Added ACL.
  - Fixed conflict with Lof_RequestForQuote (... must be instance of Magento\Sales\Model\Order\Item, instance of Magento\Quote\Model\Quote\Item\Intercepter given ...).
  - Pass flag 'rendering_email' to render product image block.This can be useful for third-party theme where lazy-loading for images is implemented.

### Version 1.1.1

> Feb 26, 2021
 
  - Fixed missing product image in ordere items grid when there are styles for 'product-name'.
  - Argento Force design - better ordered items table styles.

### Version 1.1.0

> Dec 24, 2020

  - New cool feature - [email designs](../designs/). Easy to apply email design. Check ["Apply Email Design"](../apply-design/) article.
  - Add store view selector in email preview.

### Version 1.0.5

> Dec 3, 2020

  - Prevent PHP error in email preview when there are no frontend customers.
  - One more update to order template for Magento 2.3.x and Magento 2.4.x.

### Version 1.0.4

> Dec 2, 2020

  - Add missing module-codemirror requirement.
  - Update order template to work with Magento 2.3.x and Magento 2.4.x.

### Version 1.0.3

> Dec 2, 2020

  - Gmail doesn't support SVG images. Replaced with PNG images in templates offered with module.
  - Clean up mess at ordered items table in new order template at Magento 2.3.6+.
  - Use simple product image for configurable product at ordered items table in new order template when respective options selected for shopping cart.
  - Update new order template to work with Magento 2.3.x and Magento 2.4.x.
  - Fixed missing module-codemirror requirement.

### Version 1.0.2

> May 7, 2020

  - Prevent error in template preview when order has deleted product.
  - Compatibility with M2.2.6.

### Version 1.0.1

> Jan 27, 2020

 -  Fixed "Allowed memory size of ... bytes exhausted" for order emails.

### Version 1.0.0

> Jan 24, 2020

 -  Initial release.
