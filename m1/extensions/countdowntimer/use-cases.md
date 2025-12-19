---
layout: default
title: Use Cases
description: magento Countdown Timer module use cases
keywords: "countdown timer use case, countdown timer extension"
category: Countdown Timer
---

# Use cases

- [Change flip timer color](#change-flip-timer-color)
- [Timer can not find jQuery](#timer-can-not-find-jquery)
- [jQuery(...) is not a function](#jquery-is-not-a-function)

#### Change flip timer color

You can change color of flip timer tiles. In order to do that, please add new CSS style:

```css
.custom-class-name ul li a div div.inn, .custom-class-name .flip-clock-dot {
    background-color: #f78708;
}
```

Type `custom-class-name` into field "Custom CSS class" in Flip Timer widget.
Check the image below.

| Backend setting | Fronend result |
|-----------------|:--------------:|
| ![Custom CSS class for flip timer widget](/images/countdowntimer/custom-css-flip.png) | ![Custom CSS for flip timer - result on frontend](/images/countdowntimer/custom-css-flip-frontend.png) |

You can replace `custom-class-name` with any other name. The same with color
`#f78708`. You can set any color you want.  

#### Timer can not find jQuery

If you see the text on frontend  `Flip timer can not find jQuery` or
`Simple timer can not find jQuery`, then you have to open CountdownTimer
[extension configuration](../#extension-configuration) and enable jQuery.

#### jQuery(...) is not a function

>  Solution works only for module version 1.1.0 and lower

Such java script error occurs when any other extension uses jQuery, too. That
extension loads jQuery after the timer was initilized. To solve this problem
you have to turn off jQuery loading for that extension. Here are some our
extensions that can cause such problem (every of it has option turn off jQuery
loading):

* [Ajax Layered Navigation](/m1/extensions/ajaxlayerednavigation/)
* [Product Videos](/m1/extensions/product-videos/)

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
