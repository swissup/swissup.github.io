---
layout: default
title: Delivery Date changelog
keywords: Delivery Date changelog
category: Delivery Date
---

# Changelog

### Version 1.5.5

> Nov 23, 2020

 -  Fixed invalid date for holidays in frontend calendar when server's default
    timezone is not UTC.

### Version 1.5.3

> Sep 24, 2020

 -  Fixed possible invalid delivery date on success page (timezone issue).
 -  Added ability to get delivery information via orders API. Example:

    Request:

    ```
    curl -X GET "https://example.com/rest/all/V1/orders/ORDER_ID" \
         -H "accept: application/json" \
         -H "Authorization: Bearer ACCESS_TOKEN"
    ```

    Response:

    ```json
    {
        ...
        "extension_attributes": {
            ...
            "swissup_delivery_date": {
                "date": "2020-09-29 00:00:00",
                "timerange": "01:00 — 02:00"
            }
        }
    }
    ```

### Version 1.5.1

> Aug 5, 2020

 -  Magento 2.3.5 and 2.4.0 compatibilty (Email was missing delivery-date block).

### Version 1.5.0

> Jan 8, 2020

 -  Fixed possible error at checkout success page
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

### Version 1.4.5

> Oct 16, 2019

 -  Fixed calendar icon positioning on some third-party themes.

### Version 1.4.4

> Sep 27, 2019

 -  Magento Coding Standard fixes

### Version 1.4.3

> Sep 9, 2019

 -  Make delivery date editable at backend order view page.
 -  Improved server-side validation logic.

### Version 1.4.2

> Jun 4, 2019

 -  Fixed ability to enable delivery for all weekdays. Previously at least one
    day was marked as day-off.

### Version 1.4.1

> Mar 21, 2019

 -  RTL languages support added

### Version 1.4.0

> Dec 04, 2018

 -  Added ability to show delivery date information at the
    [CheckoutSuccess](/m2/extensions/checkout-success/) page
 -  Fixed 'undefined' word inside calendar icon

### Version 1.3.2

> Nov 08, 2018

 -  Magento 2.1 compatibility

### Version 1.3.1

> Nov 01, 2018

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
