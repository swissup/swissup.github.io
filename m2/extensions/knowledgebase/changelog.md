---
layout: default
title: KnowledgeBase Changelog
description: KnowledgeBase changelog
keywords: KnowledgeBase changelog
category: KnowledgeBase
---

# Changelog

### Version 1.1.20

> Feb 7, 2023

 - Fix: Division by zero

### Version 1.1.19

> Jan 25, 2023

 - Remove comments

### Version 1.1.18

> Jan 25, 2023

 - Add toolbar sizes component breeze integration

### Version 1.1.17

> Jan 24, 2023

 - Set pageSize param(s) false value by default (works with all items)

### Version 1.1.16

> Jan 20, 2023

 - Fix FaqComplexTextContent logic (always return '')
 - Fix total_pages counting in knowledgeBaseCategories query
 - Add isLoading() listing component
 - Split graphql queries in js code
 - Add articlesListSize property

### Version 1.1.15

> Jan 13, 2023

 - add (import) css styles to breeze theme(s)
 - Fix broken markup at breeze http:div

### Version 1.1.13

> Jan 9, 2023

 - Fix richsnippet hard dependency

### Version 1.1.12

> Jan 9, 2023

 - Improve richsnippets integration

### Version 1.1.11

> Jan 5, 2023

 - Improve data provider; add id(s) filter
 - Update composer requirements


### Version 1.1.10

> Sep 26, 2022

 - Fix: Back button does not work (close #10)

### Version 1.1.9

> Sep 8, 2022

 - Add cache identity for correct cache invalidating

### Version 1.1.8

> Aug 23, 2022

 - Remove depracated and unused Registry component
 - Fix wranings '@deprecated on version '2.4.5'
 - Add module dependencies
 - Add composer requirements
 - Use new messageManager methods (addSuccessMessage)
 - Decomposite abstract action
 - Breeze: fixed not working graphql request

### Version 1.1.7

> Aug 9, 2022

 - Fix phpstan
 - Improve graphql schema

### Version 1.1.6

> Jun 15, 2022

 -  Fix compatibility with Magento PageBuilder

### Version 1.1.5

> Feb 8, 2022

 -  Fix: there is no option to attach to category in single-store mode
 -  Fixed rendering ko template when breeze enabled.

### Version 1.1.4

> Jan 28, 2022

 -  [Breeze Theme](https://breezefront.com) integration added
 -  Fixed PHP notice about undefined variable

### Version 1.1.3

> Jan 21, 2022

 - Improve router logic, redirect dublicates urls, add m1 urls compatability (close #7)
 - Fix:Avoid using self-closing tag with non-void html element (meqp)
 - Show normal url(s) instead of #


### Version 1.1.2

> Jan 18, 2022

 - Display search FAQs result separate from category list. Updated styles.


### Version 1.1.1

> Dec 23, 2021

 - Display categories according to relevant search FAQ;
 - Display empty message only on empty FAQ result.

### Version 1.1.0

> Dec 21, 2021

 - Redesigned custom design;
 - Set categoies pagination;
 - Do not show empty categories;
 - Aligned toolbar into row;
 - Fixed not working action back to root (with Breeze enabled).

### Version 1.0.15

> Dec 10, 2021

 - Add articles list for category item

### Version 1.0.14

> Dec 1, 2021

 - Prevent break graphql query with js minification

### Version 1.0.13

> Sep 14, 2021

 - Updated breeze integration.

### Version 1.0.10

> Jun 23, 2020

**Improvements**
 - Add breeze integration
 - Move index.less to source/_module.less
 - Remove js debugging
 - Updated readMore rendering

**Bugfixes**
 - Fixed jumping faq-content section.
 - Replace magento custom binding to ko binding

### Version 1.0.9

> Nov 19, 2020

**Bugfixes**
 - Replaced 'Live chat' button to 'contact us' button (close #3)

### Version 1.0.8

> Nov 18, 2020

**Bugfixes**
 - Fix 'Unable to use faq1... as url for articles' (close #2)
 - Fix 'Disabled articles are shown in Category title popup' (#2)

### Version 1.0.7

> Oct 6, 2020

**Bugfixes**
 - Fixed FK error during setup:upgrade (added db_schema_whitelist.json)
 - Fixed back button position on question page

### Version 1.0.6

> Oct 1, 2020

**Bugfixes**
 - Rename select2.min to select2 (Fix compilation warnings)

### Version 1.0.5

> Sep 8, 2020

**Bugfixes**
 - Fixed cropped a FAQ content height.
 - Changed full FAQ content background on search input focus.

### Version 1.0.4

> Sep 4, 2020

**Improvements**
 - Add sitemap integration
 - Add i18n
 - Add internalization for 'Search' placeholder

**Bugfixes**
 - Don't show the link More with a little content. Some css improvements.

### Version 1.0.3

> Aug 6, 2020

**Bugfixes**
 - Fix not filtering by category


### Version 1.0.2

> Aug 6, 2020

**Improvements**
 - Frontend design improvements
 - Add enable/disable contacts block config option
 - Blur faq text on input focus

**Bugfixes**
 - Fix paggination (hide single 1)
 - Fix ui component load first with statefull search
 - Increase default page size to six
 - Fix enable/disable option logic

### Version 1.0.1

> Jul 27, 2020

**Bugfixes**
 - Fix custom /graphql endpoint part
 - Fix load() method by custom field value

### Version 1.0.0

 -  Initial Release
