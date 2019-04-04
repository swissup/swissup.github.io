---
layout: default
title: Customize maintenance page
description: Store Maintenance customization
category: Store Maintenance
---

# Customize maintenance page

Maintenance page content configuration that comes with module is just an example. You can change it any way you want. Or you can create your own page.

### Example

Example is the best way to show how to customize page. So, we will build our own custom maintenance page. It will be realy simple page with picture and text under it.

Download image from [this link](/images/m2/store-maintenance/construction.svg) and save it with name `construction.svg` into `<MAGENTO_ROOT>/pub/media`. 

> Origins of image is [https://undraw.co/illustrations](https://undraw.co/illustrations). Feel free to browse undraw for any other image you may need.

Go to Store Maintenance settings in Magento Configuration. In section 'Maintenance Page Content' clear 'Style' and 'Body' options. Copy code below. Insert into 'Body' option.

```html
<center style="margin: 40px"><img src="/pub/media/construction.svg" /></center>
<center>Our store is currently under reconstruction. We'll be back online soon.</center>
```

With instant preview feature you will see result right away.

And final touch. Change background color for page. Paste code below into option 'Style'.

```css
body {
  background-color: lavender;
}
```

Your new maintenance page should look like this:

![Custom page](/images/m2/store-maintenance/preview-1.png)
