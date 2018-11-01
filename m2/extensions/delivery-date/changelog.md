---
layout: default
title: Delivery Date changelog
keywords: Delivery Date changelog
category: Delivery Date
---

# Changelog

### Version 1.3.1

 -  [Delivery time](/m2/extensions/delivery-date/configuration/#time-field-settings)
    feature added
 -  Improved config interfaces
 -  Added ability to add DeliveryDate information to the
    [order email](/m2/extensions/delivery-date/use-cases/#add-info-to-the-order-email)
 -  Removed `serialize/unserialize` methods usage during configuration save
 -  Fixed rare bug, when date wasn't saved to the DB
 -  Minor bugfixes

### Version 1.1.3

 -  Properly hide delivery date section if it's invisible
 -  Improved compatibility with third-party modules

### Version 1.1.2

 -  Added 'Enabled' option (Disabled by default)

### Version 1.1.1

 -  Fixed too wide input field
 -  Fixed js error, when no shipping methods are available

### Version 1.1.0

 -  Improved configuration readability
 -  Fixed broken calendar popup at backend order edit page
 -  Fixed date formatting for certain locales (de_DE)

### Version 1.0.4

 -  Fixed compatibility with Magento 2.1 (Including 2.1.8)

### Version 1.0.3

 -  Fixed 'Dec 2, 2' null bug
 -  Improved the code to MEQP2 standard
 -  Fixed DeliveryDate editing in adminhtml
 -  Imrpoved date rendering in admin grid
 -  Added show delivery date on frontend order view page

### Version 1.0.2

 -  Fixed `1column` layout forcing at checkout page

### Version 1.0.1

 -  PHP warnings where fixed

### Version 1.0.1

 -  Initial release
