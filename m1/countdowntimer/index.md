---
layout: default
title: Countdown Timer
description: magento Countdown Timer module installation
keywords: " magento countdown timer, countdown timer extension"
category: Countdown Timer
---

# Countdown Timer

* [Extension configuration](#extension-configuration)
* [Use cases](#use-cases)
	- [Timer can not find jQuery](#timer-can-not-find-jquery)
	- [jQuery(...) is not a function](#jquery-is-not-a-function)

This module has accurate timer which counts backward. It can help you to inform
customers about any special event. Such as, start of grand sale or arrive of new
products at your store.

Countdown Timer provides two widgets with pretty simple interface. They can
be placed in any CMS page, CMS block or other content, which allows widgets.

List of widgets:

* Countdown Timer - Flip timer
* Countdown Timer - Simple timer


Also includes:

* jQuery verion 1.11.1

### Extension configuration

![Extension config extample](/images/countdowntimer/extension-config.png)

System configuration for Countdown Timer is very simple. Just one option (check
image above). Go to menu `System` -> `Configuration`. Then in side menu select
`Countdown Timer` in menu group `Templates-Master`.

`Add jQuery library` - with this option you can manage jQuery loading. If your
store already use jQuery, then you can set this option to `No`.

### Use cases

#### Timer can not find jQuery

If on frontend you see text `Flip timer can not find jQuery` or
`Simple timer can not find jQuery`, then you have to open CountdownTimer
[extension configuration](#extension-configuration) and enable jQuery.

#### jQuery(...) is not a function

Such java script error occurs when any other extension uses jQuery too. That
other extension loads jQuery after timer was initilized. To solve this problem
you have to turn off jQuery loading for that extension.

In case of Argento theme package this error can be caused by
`/app/design/frontend/base/default/layout/tm/configurableswatches.xml`. To solve
it, open that XML-file and comment jQuery loading (check code below):

```xml
<?xml version="1.0"?>
<layout version="0.1.0">
    <default>
        <reference name="head">
            <!-- CODE TO COMMENT
            <action method="addJs"><script>lib/jquery/jquery-1.10.2.min.js</script></action>
            -->
            <action method="addJs"><script>lib/jquery/noconflict.js</script></action>
            <action method="addItem"><type>skin_js</type><name>js/lib/modernizr.custom.min.js</name></action>
```
