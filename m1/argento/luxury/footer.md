---
layout: default
title: Argento Luxury Footer
description: Argento Luxury footer configuration
keywords: "ArgentoLuxury, luxury, footer, social icons, links, call us"
category: Argento
---

# Argento Luxury Footer

![Luxury footer](/images/argento/luxury/footer/footer.png)

### Social icons

You can add or remove additional links in `Cms > Static Blocks > footer_cms` block.

Here is a full list of supported icons right "from the box":

```html
<div class="block block-social">
    <ul class="icons">
        <li><a href="http://instagram.com"><i class="luxury-icon luxury-instagram"></i></a></li>
        <li><a href="http://twitter.com"><i class="luxury-icon luxury-twitter"></i></a></li>
        <li><a href="http://facebook.com"><i class="luxury-icon luxury-facebook"></i></a></li>
    </ul>
</div>
```

### Company information, Call Us

You can add or remove additional links, change phone number and text in
`Cms > Static Blocks > footer_cms` block.

### Newsletter

You can remove sign up for our newsletter in `Cms > Static Blocks > footer_toolbar` block.

### Short footer layout

Short footer layout is used on checkout page to increase conversion rate.

You can disable short footer using [custom layout update file](/m1/argento/theme-customization/small-changes/#custom-layout-update-file)

```xml
<short_header_footer>
    <reference name="footer">
        <action method="setTemplate"><template>page/html/footer.phtml</template></action>
    </reference>
</short_header_footer>
```
