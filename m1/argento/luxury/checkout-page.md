---
layout: default
title: Argento Luxury Checkout Page
description: Argento Luxury checkout page
keywords: "ArgentoLuxury, luxury, checkout, short header and footer layout"
category: Argento
---

# Argento Luxury Checkout Page

### Short header and footer layout

Short header and footer layout is used to increse conversion rate.

You can disable short header and footer using [custom layout update file][custom_xml]

```xml
<short_header_footer>
    <reference name="header">
        <action method="setTemplate"><template>page/html/header.phtml</template></action>
    </reference>
    <reference name="footer">
        <action method="setTemplate"><template>page/html/footer.phtml</template></action>
    </reference>
</short_header_footer>
```

[custom_xml]: /m1/argento/theme-customization/small-changes/#custom-layout-update-file "custom.xml layout"
