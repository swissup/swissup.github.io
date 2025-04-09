---
layout: default
title: Delivery Date changelog
keywords: Delivery Date changelog
category: Delivery Date
---

# Changelog

### Version 1.7.11

> April 9, 2025

 -  PHP 8.4 support added.
 -  Magento 2.4.8 support added.

### Version 1.7.10

> Mar 12, 2024

 -  Fixed possible incorrect date in backend calendar when editing order.

### Version 1.7.8

> Jul 24, 2023

 -  Stability improvements.

### Version 1.7.7

> Apr 28, 2023

 -  Hide delivery date if no shipping method is selected and filter per shipping 
    method is used

### Version 1.7.6

> Nov 16, 2022

 -  Fixed error in PHP 8.1 when delivery time is used without delivery date.

### Version 1.7.5

> Oct 5, 2022

 -  Fixed possible incorrect delivery date in backend order view page

### Version 1.7.4

> Aug 9, 2022

 - Update integration with Checkout Success module.
 - Compatibility with PHP 8.1.

### Version 1.7.2

> Apr 15, 2022

 -  Magento 2.4.4 and PHP 8.1 compatibility.
 -  Improved delivery date validation.

### Version 1.7.1

> Feb 9, 2022

 -  Fixed error during `setup:di:compile` on Magento 2.3

### Version 1.7.0

> Feb 4, 2022

 -  Added ability to set different order processing day time
    [per each day of the week](/m2/extensions/delivery-date/configuration/#first-available-delivery-date-rules)
 -  Magento Coding Standard fixes.

### Version 1.6.4

> Feb 1, 2022

 -  [Breeze Theme](https://breezefront.com) integration added

### Version 1.6.3

> Jan 12, 2022

 -  Fixed possbile wrong date in backend interface when German locale is used.

### Version 1.6.0

> Jan 25, 2021

 -  Added ability to calculate delivery date offset
    [since first business day](/m2/extensions/delivery-date/configuration/#first-available-delivery-date-rules)
    after order was placed.
 -  Delivery date validation improvements.

### Version 1.5.8

> Jan 13, 2021

  - Checkout modules dropdown over module config at System Configuration.
  - Convert section "Swissup Checkout" into item "Checkout" under section "Swissup" at System Config page.

### Version 1.5.7

> Nov 27, 2020

 -  Fixed not working holidays for 1, 2, and 3 days of the month. This bug
    was accidently produced in version 1.5.5.

### Version 1.5.6

> Nov 25, 2020

 -  Hide "Delivery Date" column in orders grid by default. You can bring it back
    with "Columns" button above the grid.
 -  Added ability to sort and filter by "Delivery Date" column in orders grid.

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
