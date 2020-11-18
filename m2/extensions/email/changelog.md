---
layout: default
title: Email Changelog
description: Email changelog
keywords: email changelog, email updates
category: Email
---

# Changelog

### Version 0.3.15

> Nov 18, 2020

**Fixes**
 - Improve exception prepare in check service action (#16)
 - Fix Laminas many addTo validation warning
 - Add frontend form validation before 'Check Service' (#16)

### Version 0.3.14

> Nov 16, 2020

**Fixes**
 - Move slm/mail and aws packages to 'optional' dependencies (#15)
 - Fix code styles improvments (magento/magento-coding-standard)

### Version 0.3.13

> Oct 30, 2020

**Fixes**
 - Filter invalid header values

### Version 0.3.12

> Oct 2, 2020

**Fixes**
 - Fix encodings+umlaut (fix for double headers fix)

### Version 0.3.11

> Sep 14, 2020

**Fixes**
 - Fix unique headers bug only for converted objects
 - Fix non utf-8 headers bug

### Version 0.3.10

> Aug 4, 2020

**Fixes**
 - Fixed invalid 'delete' message
 - Translations updated

### Version 0.3.9

> Jul 29, 2020

**Fixes**
 - Allow to install on Magento 2.4

### Version 0.3.8

> Jul 16, 2020

**Fixes**
 - Add/Fix dependencies (without [zend|laminas]-mail) 11e6cb

### Version 0.3.7

> May 26, 2020

**Fixes**
 - 'Fix' desposition 2.3.5 bug
 - Fix web tester checking
 - Add magento 2.3 requirements

### Version 0.3.6

> Mar 27, 2020

**Fixes**
 - Small encoding fix (ascii is utf-8 subset)
 - Clear dublicated mail headers

### Version 0.3.5

> Mar 25, 2020

**Fixes**
 - Fix: Duplicate 'Content-Disposition'

### Version 0.3.4

> Mar 6, 2020

**Fixes**
 - Fix 'Call to undefined method ArrayIterator::getFieldValue'
 - Fix 'Call to undefined method ..\Mail\Message::toString()'

### Version 0.3.3

> Mar 3, 2020

**Fixes**
 - 2.3.4 (2.4-dev) compatability getRawMessage => toString
 - Fix history body transfer encodings
 - Fix history subject encodings

**Features**
 - Marketplace data added

### Version 0.3.2

> Feb 3, 2020

**Fixes**
 -  Fixed wrong encoding in Magento 2.3.4

### Version 0.3.1

> Dec 6, 2019

 -  Fixed issues with encoding.

### Version 0.3.0

> Oct 25, 2019

**Fixes**
 - Fix: Backward-incompatible Changes in the Mail Library for Magento 2.3.3
 - Magento 2.1 mime boundary fix

### Version 0.2.5

> Jun 7, 2019

**Fixes**
 - Add default 'auth' for predefined smtp providers
 - Fixed invalid data in the grid after filters reset
 - Fixed invalid filters type in the grid

### Version 0.2.4

> Mar 11, 2019

**Features**
 - Added option for no authentication
 - Added new option "None" for SMTP authentication type.
 - 'preference' replaced with TransportPlugin
 - Improve service(s) grid - click open service


### Version 0.2.3

**Features**
 - Added Magento 2.3 compatibility
 - Replace Zend_Mail (ZF1) with Zend\Mail\Message (ZF2)
 - Move transports classes to Mail dir
 - One point for test connection and real mail sending
 - Add verification code to check service action

**Fixes**
 - Fixed backward compatibility with Magento 2.2

### Version 0.2.1

**Features**
 - Add email logging

**Fixes**
 - Remove objectManager calls_

### Version 0.1.6

**Features**
 - Add www.mail-tester.com integration

**Fixes**
 - Fix class name \ warning

### Version 0.1.5

 - Add predefined smtp providers settings
 - Fix integaration with magento 2.2.4
 - etc.
