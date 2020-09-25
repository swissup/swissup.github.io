---
layout: default
title: Helpdesk Changelog
description: Helpdesk changelog
keywords: Helpdesk changelog
category: Helpdesk
---

### Version 1.2.1

> Sep 25, 2020

**Fixes**
 - Remove Mail/Message code dublicate; replace at Reflection (close #18)

**Features**
 - Smaller icon and match other icons color df97dd
 - Do not show notification count when empty be2df1

### Version 1.2.0

> Sep 14, 2020

**Fixes**
 - Fix message plain_text not update after ajaxSave
 - Fix double intallation bug
 - Fix message plain_text not update after ajaxSave
 - Fix 'enable' single-checkbox set value wrong behaviour
 - Fix save message button not work

**Features**
 - Change ticket edit interface layout (2column-right)
 - Add store encrypted data in db (#17)
 - Add ticket archivate/restore action and interfaces (#16)
 - Add etc/db_schema.xml

### Version 1.1.10

> Aug 5, 2020

 - Magento 2.4 compatibility (Error on contacts page)
 - Improve contact form styles
 - Translations updated

### Version 1.1.8

> Jul 22, 2020

**Fixes**
 - Removed add session param to url: 2.3.5 compatibility
 - Remove wrong data-mage-init in notifications

**Features**
 - Add custom grid severity styles
 - Add ticket preview (#15)
 - Add new ticket indicating

### Version 1.1.7

> Mar 2, 2020

**Fixes**
 - Fix Call to undefined method 'addBcc'

### Version 1.1.6

> Feb 13, 2020

**Fixes**
 - Add i18n translates for statuses,priotity,department
 - Improve translate on frontend (#14)
 - Email backward compatability with 2.3(3-4)
 - Marketplace data added 90fe85

### Version 1.1.5

> Jan 16, 2020

**Fixes**
 - Add AuthorName in email templates (re close #9)

### Version 1.1.4

> Nov 15, 2019

**Fixes**
 - Meqp improvements (severity 8)
 - Fix typo
 - Fix filename conflict for apache %2f+ AllowEncodedSlashes On (close #10)
 - Fix typo in department::addStoreIdFilter

### Version 1.1.3

> Oct 25, 2019

**Fixes**
 - MEQP2 Fix: md5 => sha1
 - Possible fix for store silter
 - Revert gravatar url
 - Installation instructions for clients added

### Version 1.1.2

> Sep 12, 2019

**Fixes**
 - Add param deparment for select by default in form
 - Add store filter(s)

### Version 1.1.1

> Jul 8, 2019

**Fixes**
 - Fix 'No captcha at default contacts form' #11
 - Fix get relitive path logic for attachments #10

### Version 1.1.0

> Jun 7, 2019

**Features**
 - Add author_name column

**Fixes**
 - Fix 'No contacts form when module disabled'


### Version 1.0.5

> Apr 25, 2019

**Fixes**
 - Fix Call to undefined method CurrentCustomer::getEmail() in ResourceModel/Ticket.php:206
 - Fix comma typos in email templates

### Version 1.0.4

> Apr 16, 2019

**Fixes**
 - Add Mail/Message::setFromAddress for 2.3.1 compataqbility

### Version 1.0.3

> Mar 18, 2019

**Features**
 - Added nl2br

**Fixes**
 - Fixed customer and order ui-select (s) js freezing

### Version 1.0.2

> Mar 11, 2019

**Features**
 - Added footer link
 - Added translations
 - Make priority labels translatable

**Fixes**
 - Fixed table prefix bug
 - Fixed in 'Warning: array_merge()' Model/Ticket/Source/Order.php:44
 - Fixed 'Warning: Invalid argument supplied for foreach' ResourceModel/Ticket.php:351

### Version 1.0.0

 -  Initial Release
