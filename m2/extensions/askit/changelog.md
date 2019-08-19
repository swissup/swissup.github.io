---
layout: default
title: AskIt Changelog
description: >
    magento2 product questions askit module
keywords: >
    magento product questions module, product questions on magento
     product page, magento askit module installation
category: AskIt
---

# Changelog

### Version 1.6.1

> Aug 19, 2019

 - Fixed grid mass action title(s).

### Version 1.6.0

> Jun 20, 2019

 -  Integrated with [Swissup AMP module](../../amp/). Works for tabbed Askit blocks as well as questions pages.

### Version 1.5.0

> Jun 12, 2019

 -  Improved storefront styles.
 -  Button "Ask Your Question" to show ask question form. Form initially hidden.
 -  Fixed error 'The element with "left" id was not found' in admin at some Magento instances.

### Version 1.4.4

> May 29, 2019

 -  Fix answer wysiwyg editor initialization after ajax response
 -  No questions message was changed
 -  Improve collection status filter function
 -  Hide wysiwyg editor by default
 -  Changed question status by answer status
 -  Set 'approved' question status if added new answer

### Version 1.4.3

> May 24, 2019

 -  Add abstract save message action
 -  Add explain error message(s) in save question action(close #37)
 -  Fixed invalid data in the grid after filters reset
 -  Fix Phpstan warnings

### Version 1.4.2

> May 13, 2019

 -  Add 'review_product_list' use case
 -  Fix magento 2.2 compatability (GraphQl interface not exist)

### Version 1.4.1

> Mar 27, 2019

 -  Removed potential information leak

### Version 1.4.0

> Feb 26, 2019

 -  Added ability to write response with HTML code (for admin users only)
 -  Removed duplicate ids in HTML output
 -  Disaply proper questions and answers on the "Edit Cart Item" page

### Version 1.3.1

 -  Fixed form visibility at the homepage

### Version 1.2.17

 - Added email template subject translation

### Version 1.2.16

 -  Removed email header and footer templates, to be compatible with Magento 2.2.4
 -  Added client-side form validators

### Version 1.2.15

 - Fix captcha with full page cache (varnish)
 - Fixed missing answer and customer email send

### Version 1.2.14

 - Few technical changes to submit question form on storefront. Major one - removed css class `.primary` from Submit button.

### Version 1.2.13

- Add i18n translation
- Fix customer session bug
- etc.

### Version 1.2.12

- Fixed getEntityTypeLabel return null bug
- etc.

### Version 1.2.11

- Fixed not unique form element ids
- etc.

### Version 1.2.10

- Fix escapeHtmlAttr for old version (< 2.2)
- Update ui_components according to the latest requirements

### Version 1.2.9

- Fix blockGroup bug
- Make no questions notification optional

### Version 1.2.8

- Code dublicate cleanup (phpcpd)
- Fix gravatar proto
- Add new answer action
- Fix listing collection logic
- Show message for guest users that they should login
- Improve customer account questions page
- Add js forms validation
- etc.

### Version 1.2.7

- ACL instructions added to ui components
- Code cleanup (phpcbf)

### Version 1.2.6

- Add integration for cms pages
- Add integration for catalog categories
- Rename table (interfaces, models) swisup_askit_item to swissup_askit_message
- Add backend global search by questions
- Fix grid massactions logic
- Fix grid filterpool index search
- etc.
