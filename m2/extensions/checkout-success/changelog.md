---
layout: default
title: Checkout Success Changelog
description: Checkout Success changelog
keywords: Checkout Success changelog
category: Checkout Success
---

# Changelog

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
