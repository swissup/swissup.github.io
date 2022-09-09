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

### Version 1.12.4

> Sep 9, 2022

 - Fix: Notice: Undefined property: Controller\Question\Save::_eventManager_ (consequence of decomposition)

### Version 1.12.3

> Sep 8, 2022

 - Add cache identity for correct cache invalidating
 - Replace deprecated dependency Magento\Backend\Helper\Data
 - Remove duplicated code
 - Replace registry to custom service
 - Remove unused coreRegistry calls

### Version 1.12.2

> Aug 30, 2022

 - Fix _construct context initialization order (Call to a member function getHomePageId() on null)

### Version 1.12.1

> Aug 26, 2022

 - Fix UCT 'critical' errors
 - Controller(s) decomposition
 - changed deprecated messageManager functionality
 - update composer requirements

### Version 1.12.0

> Jun 15, 2022

 - Remove unused layout update files. Fixes incorrect layout on cms edit page.
 - Improve Magento Coding Standarts
 - Fix phpstan errors

### Version 1.11.6

> Jun 15, 2022

 -  Fixed "My Questions" link visibility when module is disabled
 -  Breeze fix: do not write fullname to the storage when submit question as guest

### Version 1.11.5

> May 5, 2022

 -  Fixed potential possibility to create question even if module is disabled
 -  Strict type convert

### Version 1.11.4

> Apr 20, 2022

 -  Fixed missing helper method exception after commit

### Version 1.11.3

> Apr 19, 2022

 -  Fix JQMIGRATE: jQuery.fn.click() event shorthand is deprecated.
 -  Fix meqp warnings
 -  Revert last change for both PHP 8.1 and 7.4 compatiblity

### Version 1.11.2

> Apr 13, 2022

 -  Php 8.1 - remove deprecated zend dependency (since 2.3.0), jsonSerialize must return mixed
 -  Php 8.1 - strip_tags doesn't work with nulls

### Version 1.11.1

> Jan 28, 2022

 -  Magento Coding Standard fixes
 -  [Breeze Theme](https://breezefront.com) integration added

### Version 1.10.6

> Sep 14, 2021

 -  Updates breeze integration.
 -  Fixed undefined index notice when persistent shopping cart is used.

### Version 1.10.0

> May 19, 2021

**Bugfixes**

 -  Escape question text inside MessageAssignDataProvider to prevent XSS
 -  Fix 'Removing answer lead to removing question'
 -  Remove not exists grid mass action 'Edit'

### Version 1.9.6

> May 14, 2021

 -  [Breeze](/m2/extensions/breeze/) integration added.

### Version 1.9.5

> Apr 26, 2021

  - Add answer in admin notification email

### Version 1.9.4

> Feb 26, 2021

  - Added Persian translation

### Version 1.9.3

> Feb 17, 2021

  - Fixed JS error related to questions form component.
It doesn't occur in dev enviorement. But often appears when JS bundling enabled
  - Disable cache at customer questions page.
This fixes PHP error with Mageplaza_Blog module.

### Version 1.9.2

> Jan 13, 2021

  - Don't hide 'Ask Your Question' button on click

### Version 1.9.1

> Nov 30, 2020

  - Rework ajax listing of questions. Get rid of controller action listAjax
  - Fix to integrate AskIt Listing with SEO Pager module.

### Version 1.9.0

> Oct 15, 2020

  - Add/Update graphQl queries and mutations
  - Do not show askit questions on 404 page. Closes #47

### Version 1.8.4

> Sep 23, 2020

  - Styles improvements.
  - AMP: Product questions are missing
  - Improve validator(s) for magento 2.3.5 integration

### Version 1.8.3

> Aug 25, 2020

  - Fixed notice at Magento less than 2.4.x about undefined varual in Magento Admin when adding new question or editing one.
  - Minor styles improvements on frontend.
  - Slight change in translations.

### Version 1.8.2

> Aug 5, 2020

 -  Fixed issue when unable to assign product/category/page to question.
 -  Magento 2.4 compatibility (unexpected token 'case' error in backend).

### Version 1.8.0

> Jun 22, 2020

  - New mass actions in Questions grid - "Assign to...".
  - Added few spaces in customer notification email for better look.
  - Fixed error when post answer from Admin grid with questions.
  - Improvements and fixes to admin interfaces of edit questions/answers.

### Version 1.7.5

> Apr 30, 2020

 -  Correct '%' symbol in tranlation file.
 -  Remove common phrases found in Magento. Typo fix: wan't => want.
 -  Add/Update translations ar_SA, uk_UA, sw_SE, es_ES, ru_RU, pt_PT, pl_PL, nb_NO, ko_KR,
    ja_JP, it_IT, he_IL, de_DE, fr_FR, nl_NL, zh_CN etc.

### Version 1.7.1

> Apr 6, 2020

 -  Fixed poorly working askit widget at homepage. Question didn't assigned to correct page. Questions list not showing up.
 -  Remove template and js that is no more in use.

### Version 1.7.0

> Mar 20, 2020

 -  Totally reworked internal implementation at frontend.
 -  Question and Answer forms build with UI Component according latest Magento trends.
 -  Questions list loaded with Ajax request reacts immediately on customer actions (voating, page changing).
 -  Improved UX at backend also.

### Version 1.6.4

> Feb 3, 2020

 - Check 2.3.4 compatability
 - Update Json serializer
 - Add/Update module dependencies
 - Fix 2.3.4 setMassactionIdField bug (close #41)

### Version 1.6.3

> Oct 23, 2019

**Bugfixes**

 - Fix 2.3.3 compatability

### Version 1.6.2

> Sep 12, 2019

**Bugfixes**
 - Fix:redirect+coockie message.

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
