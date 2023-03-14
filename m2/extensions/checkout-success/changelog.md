---
layout: default
title: Checkout Success Changelog
description: Checkout Success changelog
keywords: Checkout Success changelog
category: Checkout Success
---

# Changelog

### Version 2.0.5

> Mar 14, 2023

 -  Stability improvements.

### Version 2.0.4

> Jan 18, 2023

  - Fix not working Success Page Builder in Magento Admin when storefront has different domain than Magento Admin.

### Version 2.0.2

> Sep 12, 2022

  - PHP 7.x and Magento 2.4.3 compatibility fixes.
  - Fix error "Call to a member function addData()".

### Version 2.0.0

> Aug 9, 2022

 - Totally reimagened Checkout Success Page layout builder.

### Version 1.4.16

> Jul 12, 2022

 -  Fix PHP error when order has no shipping address and directive
    `{{orderShippingAddress}}` is used on success page.

### Version 1.4.15

> Apr 15, 2022

 -  Magento 2.4.4 and PHP 8.1 compatibility.

### Version 1.4.13

> Feb 1, 2022

 -  [Breeze Theme](https://breezefront.com) integration added

### Version 1.4.12

> Jan 12, 2022

 -  Fixed wrong product image when customer purchased configurable product.
 -  Stability improvements.

### Version 1.4.10

> Aug 12, 2021

  - Magento 2.4.3 compatibility. Fixed js error in backend configuration page
    caused by new knockout.js library.

### Version 1.4.9

> Fab 19, 2021

  - Set proper image container width in third-party themes.

### Version 1.4.8

> Jan 13, 2021

  - Get parent grouped product image if its child is empty at ordered items grid at success order page.
  - Checkout modules dropdown over module config at System Configuration.
  - Convert section "Swissup Checkout" into item "Checkout" under section "Swissup" at System Config page.
  - Fixed compatibility with magento 2.4.1.

### Version 1.4.7

> Oct 22, 2020

 -  Added config notice about unsupported multishipping checkout page. Standard checkout
    page will be shown when using multishipping checkout.

### Version 1.4.6

> Oct 19, 2020

 -  Stability improvements.

### Version 1.4.5

> Aug 5, 2020

  - Fixed ordered items output in Magento 2.4
  - PHP 7.4 compatibility fix.

### Version 1.4.4

> May 14, 2020

  - Add Danish locale.
  - Updated CodeMirror module.

### Version 1.4.3

> Mar 19, 2020

 -  Compatibility with Magento 2.2.6. There was error when Order Items block added to success page layout `Call to a member function getOptionById()...`.

### Version 1.4.2

> Feb 17, 2020

 -  Force to use order date template from Magento_Sales module. Some third-party checkout modules break success page when there is no clear specification of Magento_Sales in template path.

### Version 1.4.1

> Feb 17, 2020

 -  Add product images to ordered items list at success page.

### Version 1.4.0

> Jan 8, 2020

 -  Added syntax highlighter to the "Miscellaneous scripts and HTML" config field.
    Writing custom HTML and javascript is much more pleasant now.
 -  16 locales added to translate backend and frontend phrases:
    - Arabic
    - Chinese
    - Dutch
    - French
    - Hebrew
    - Italian
    - German
    - Japanese
    - Norwegian
    - Korean
    - Polish
    - Portuguese
    - Russian
    - Spanish
    - Swedish
    - Ukrainian

### Version 1.3.5

> Oct 16, 2019

 -  Remove direct 'jquery/ui' dependency to improve js performance.

### Version 1.3.4

> Sep 9, 2019

 -  Fixed success page preview feature on Magento 2.3.x.

### Version 1.3.3

> Mar 21, 2019

 -  RTL languages support added

### Version 1.3.2

> Dec 04, 2018

 -  Prevent Warning/Error when tring to render child block that doesn't exists
 -  Added third-party modules blocks support via `di.xml` instructions:
    -  CheckoutField
    -  DeliveryDate
    -  OrderAttachment
 -  Added margin for delivery date block

### Version 1.3.1

> Nov 01, 2018

 -  Fixed non working page preview functionality in backend, when backend and
    frontend has different timezone settings.
 -  Small JS improvements

### Version 1.2.0

 -  Stability improvements in PHP code
 -  New variables added into Miscellaneous scripts:
     -  `{% raw %}{{orderBillingAddress}}{% endraw %}`
     -  `{% raw %}{{orderShippingAddress}}{% endraw %}`

### Version 1.1.3

 -  New variable added into Miscellaneous scripts: `{% raw %}{{orderItems}}{% endraw %}`.
    [Read docs](/m2/extensions/checkout-success/miscellaneous-scripts-snippets/)
    for more information.

### Version 1.1.2

 -  Fixed missing 'registration' block in some third-party themes

### Version 1.1.1

 -  Fixed typo in config section name

### Version 1.1.0

 -  Brand new backend [drag-and-drop layout](/m2/extensions/checkout-success/settings/#page-layout)
    builder with much more possibilities to customize checkout success page
 -  Page preview functionality added

### Version 1.0.1

 -  Acl fixes

### Version 1.0.0

 -  Initial Release
