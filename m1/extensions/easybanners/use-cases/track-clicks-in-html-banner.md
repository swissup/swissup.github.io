---
layout: default
title: Track clicks in html banner
description: How to track user clicks in HTML banner
category: Easy Banners
---

# Track clicks in html banner

In order to track clicks in html banner, use `{% raw %}{{tm_banner_url}}{% endraw %}`
variable for all links:

```html
{% raw %}<a href="{{tm_banner_url}}" title="Trackable Link">Click Me!</a>{% endraw %}
```

You can also track clicks on link with ajax request:

```html
{% raw %}<a id="link-id" href="tel:555" title="Call us">Call us</a>

<script>
$('link-id').observe('click', function(e) {
    new Ajax.Request('{{tm_banner_url}}');
});
</script>{% endraw %}
```

#### Next Up:

 -  [Back to all use cases](../../use-cases/)
 -  [More about banner content](../../backend/manage-banners/#content)
