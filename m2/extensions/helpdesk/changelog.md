---
layout: default
title: Helpdesk Changelog
description: Helpdesk changelog
keywords: Helpdesk changelog
category: Helpdesk
---

### Version 1.2.25

> May 17, 2022

**Fixes**
 - Fix: PHP 8.1 compatibility. count expect countable argument, boolean given.
 - Fixed php error in CloudCommerce on PHP 8.1 (Fixed missing nameInLayout)

### Version 1.2.24

> Mar 9, 2022

**Fixes**
 - Fix: 'Duplicate entry '1' for key 'PRIMARY', query was: INSERT INTO'

### Version 1.2.23

> Feb 10, 2022

**Fixes**
 - Fix: array_combine(): Both parameters should have an equal number of elements

### Version 1.2.22

> Feb 10, 2022

**Fixes**
 - Fix: Item with the same ID "" already exists.
 - Fix: Fix: array_merge(): Expected parameter 2 to be an array, null given

### Version 1.2.21

> Feb 8, 2022

**Fixes**
 - Fix: initial setup data patch does't work with setup_version
 - Fix: in unArchivate action add prevention for error like 'same ID already exists'
 - Fix: 'NOTICE: TRYING TO ACCESS ARRAY OFFSET ON VALUE OF TYPE BOOL IN ABSTRACTNOTIFICATION.PHP ON LINE 94'

### Version 1.2.20

> Jan 25, 2022

**Fixes**
 - Fix: InstallData scripts are obsolete.
 - Fix: InstallSchema scripts are obsolete.
 - Fix: Avoid using self-closing tag with non-void html element
 - Add custom frontname(module_name) for helpdesk page(s) (close #36)

### Version 1.2.17

> Nov 3, 2021

**Fixes**
 - Remove old zend composer requirement (close #35)

### Version 1.2.16

> Aug 30, 2021

**Fixes**
 - Fixed broken customer edit page at backend

### Version 1.2.15

> Aug 19, 2021

**Fixes**
 - Fix potential php warnings/errors (phpstan)
 - Use separate group for merged css. This makes global bundle persistent across all site.

### Version 1.2.14

> Jan 20, 2021

**Features**
 - Added short messages about status, department, priority, etc.  changes

### Version 1.2.13

> Nov 20, 2020

**Fixes**
 - Fix: disable strong email hostname validation (close #34)

### Version 1.2.12

> Nov 19, 2020

**Fixes**
 - Add dynamic_id:true in wysiwig for fix hiding broken 'Show/Hide Editor' (close #33)
 - Hide My Tickets tab in account if extension disabled
 - Fix :Column 'created_at' in where clause is ambiguous

### Version 1.2.11

> Nov 18, 2020

**Fixes**
 - Fix unarchive CONSTRAINT errors
 - Rename AutoClose button
 - Prevent to delete a department if this department is assigned to the ticket.
 - Fix 'The department is displayed at the storefront if it disable.'

### Version 1.2.10

> Nov 13, 2020

**Fixes**
 - Added disabling behavior for submit button to prevent many cloned tickets (close #30)
 - Fix Deprecated Functionality: strpos() Non-string needles
 - Fix Warning rand with 1 argument
 - Add checking imap functions support
 - Disable some file uploading exceptions
 - Small grammar improvments.
 - Rename title column to subject (close #29)
 - Hide ecrypted text in subject column

### Version 1.2.8

> Nov 9, 2020

**Fixes**
 - Fixed Undefined index: text in Ui/Component/Listing/Column/Title.php:66 (#28).

### Version 1.2.7

> Nov 7, 2020

**Fixes**
 - Fix :Column 'store_id' in where clause is ambiguous (#27).

### Version 1.2.6

> Nov 2, 2020

**Fixes**
 - Fix :Column 'email' in where clause is ambiguous (#26 1)
 - In Ticket Form the Field 'email' is required now (#26 2).

### Version 1.2.5

> Oct 30, 2020

**Fixes**
 - Fix customer searching logic (#24)
 - Fix order searching action (#24)

### Version 1.2.4

> Oct 28, 2020

**Fixes**
 - Fix file allowed extension logic (close #23)
 - Implement IdentityInterface in abstract ticket block
 - Add cacheable=false for ticketMessage listing block
 - Set open status for ticket when customer add new answer (close #22)


### Version 1.2.3

> Oct 15, 2020

**Fixes**
 - Fix wysiwyg add_images: false bug
 - Add toggle_button:false (disable wysiwyg editor)
 - Disable pagebuilder integration (#20)
 - Fix saving empty message text but with adding files

### Version 1.2.2

> Oct 9, 2020

**Fixes**
 - Fix archive.csv file doesn't exist (close #19)
 - Fix null given to string convertation error

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
