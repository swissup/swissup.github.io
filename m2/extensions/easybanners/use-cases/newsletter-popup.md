---
layout: default
title: Newsletter Popup
category: Easy Banners
---

# Newsletter Popup

![Screenshot](/images/m2/easybanners/frontend/lightbox.png)

To create popup with newsletter form, create a new `Lightbox` banner with
following values:

Field       | Value
------------|---------
Enabled     | Yes
Type        | Lightbox
Url         | Any dummy text (We will not use it)
Css Class   | no-border permanent-close-hide
Mode        | HTML Content

HTML Content:

```html
<div class="easybanner-layout-book">
    <img src="{% raw %}{{media url='wysiwyg/samsung.png'}}{% endraw %}" alt="" />
    <div class="content center">
        <h2 class="easybanner-title"><strong>Don't miss out!</strong></h2>
        <p>
            Sign up for our newsletter to get the latest news about our company,
            your favorite products, and great deals.
        </p>
        <div class="easybanner-newsletter">
            {% raw %}{{block class="Magento\Newsletter\Block\Subscribe" name="easybanner.newsletter-subscribe" template="Magento_Newsletter::subscribe.phtml"}}{% endraw %}
        </div>
    </div>
</div>
```

Save the banner and check your store frontend.

p.s. Don't forget to setup banner conditions to show it just once per client!

#### Next up
{:.no_toc}

 -  [Back to Home](/m2/extensions/easybanners/)
 -  [Layouts for HTML banners](/m2/extensions/layouts-for-html-banners/)
 -  [CSS Class Helpers](/m2/extensions/css-class-helpers/)
