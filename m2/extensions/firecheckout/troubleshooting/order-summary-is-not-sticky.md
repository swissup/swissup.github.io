---
layout: default
title: Order summary block is not sticky
category: Firecheckout
---

# Order summary block is not sticky

The following styles breaks `position: sticky` style:

 - `overflow: hidden` on any parent element.
 - `overflow-y: hidden` on any parent element.
 - `overflow-x: hidden` on any parent element except body and html.

So, if you are using [1-column layout](/m2/extensions/firecheckout/configuration/#layout)
and Order Summary block is not sticked when you scroll the page, please remove
mentioned styles.

> You can have `overflow-x: hidden` on body and html elements only.

Example of valid CSS with `overflow-x: hidden` style:

```css
html, body {
    overflow-x: hidden;
}

.page-wrapper, .page-main {
    overflow: initial;
}
```

#### Next up

 -  [Back to Main Page](../)
