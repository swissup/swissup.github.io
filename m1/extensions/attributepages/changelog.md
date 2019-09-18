---
layout: default
title: Attributepages changelog
description: Attribute based pages changelog
category: Attributepages
---

# Changelog

### Version 1.4.3

 -  Page Title field is now used for H1 tag only. (Previously it was used for
    meta title too). Current setup:
    - Title is used for Meta, H1, and attribute-based page/widget lists.
    - Page Title is used for H1.
    - To change meta title, use `xml_layout_update` field.
 -  Added ability to set meta title using `xml_layout_update` field:

    ```xml
    <reference name="head">
        <action method="setTitle"><title>Title</title></action>
    </reference>
    ```

### Version 1.4.2

 -  Fixed error when page identifier is entered in invalid registry.
 -  Use unified image uploader from TM Core in admin interfaces.

### Version 1.4.1

 -  Improve compatibility with Magento Enterprise Edition.

### Version 1.4.0

 -  [TM_Amp 1.6.0](/m1/extensions/amp/changelog/#version-160) support added

### Version 1.3.9

 -  PHP code cleanup to pass MEQP validation

### Version 1.3.8

 -  Magento 1.9.3.3 image validator added
 -  Added support for MassDelete action in backend grids
 -  Small fixes and improvements

### Version 1.3.5

 -  Fixed duplicated options, when single store mode is used
 -  Integration with MageWorx SeoFriendlyLN added

### Version 1.3.3

**New Features**

 -  Added new [Product_Option widget](/m1/extensions/attributepages/widgets-and-blocks/product-option-block/#widget-interface)

**Improvements & Fixes**

 -  Fixed invalid canonical url on brand pages
 -  Fixed possible 404 page, when page with empty url is saved in DB
 -  Added LIMIT option to Attribute options widget
 -  Improved image mode page styles

### Version 1.3.2

 -  Magento 1.9.2.2 update. Module blocks added to whitelist:

    ```
    attributepages/product_option
    ```

 -  Added integration with latest `AjaxLayeredNavigation` module

### Version 1.3.1

 -  Magento 1.7 compatibility
 -  Added notice, when no attributes are available during page creation
 -  Added PKR_Catalog compatibility
 -  Security fix to _isAllowed method(strtolower)
 -  Responsive themes compatibility
 -  Added ability to call inline product option block with various settings
