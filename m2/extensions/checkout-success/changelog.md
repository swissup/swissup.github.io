---
layout: default
title: Checkout Success Changelog
description: Checkout Success changelog
keywords: Checkout Success changelog
category: Checkout Success
---

# Changelog

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
