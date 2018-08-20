---
layout: default
title: AMP footer customization
description: Accelerated Mobile Pages footer content explained
keywords: amp footer
category: Accelerated Mobile Pages
---

# Footer

AMP uses separate cms block to show footer links. You can edit it
at _Content > Elements > Blocks_ page. Just search the block by `swissupamp_footer`
identifier.

![Footer Links](/images/m2/amp/customization/footer/footer-links.png)

Code:

```html
{% raw %}<div class="links">
    <a href="{{store direct_url='about'}}">About</a>
    <a href="{{store direct_url='user-agreement'}}">User Agreement</a>
    <a href="{{store direct_url='privacy'}}">Privacy</a>
    <a href="{{store direct_url='cookies'}}">Cookies</a>
</div>{% endraw %}
```

Copyright label - is a standard Magento 2 label taken from
_Content > Design > Configuration_ page. Check the "Footer" section in active theme.

##### Next Up

 -  [Back to Home](/m2/extensions/amp/)
