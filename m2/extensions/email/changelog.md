---
layout: default
title: Email Changelog
description: Email changelog
keywords: email changelog, email updates
category: Email
---

# Changelog


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
