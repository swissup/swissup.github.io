---
layout: default
title: Argento Stripes Contact Us Page
description: ArgentoStripes contact us page
keywords: ArgentoStripes, Stripes, contact us page
category: Argento
---

# Argento Stripes Contact Us Page

Contact Us page contains two static blocks:

 -  contact_aside_cms_content
 -  contact_footer_map

### Contents

 -  [Contacts Block](#contacts-block)
 -  [Map](#map)

### Contacts Block

![Contacts Block](/images/m2/argento/stripes/contact-us/contacts.png)

Code:

```html
<article>
    <h2>Got Questions?</h2>
    <p>If you’d like to learn more about us and our products, get in touch!</p>
    <div class="argento-grid">
        <div class="col-xs-6">
            <h5>Company Info</h5>
            <p>STRIPES COMMERCE <br />FifthAve Street 31 <br />New York, USA</p>
        </div>
        <div class="col-xs-6">
            <h5>Contact Info</h5>
            <p>contact@company.com <br /> +01 122 334 566</p>
        </div>
    </div>
    <h5>Follow Us</h5>
    <div class="social-icons colorize-fa-stack-hover red-on-gray">
        <a href="https://facebook.com/" class="icon icon-facebook">
            <span class="fa-stack fa-2x">
                <i class="fa fa-circle fa-stack-2x"></i>
                <i class="fa fa-facebook fa-stack-1x fa-inverse"></i>
            </span>
        </a>
        <a href="https://youtube.com/" class="icon icon-youtube">
            <span class="fa-stack fa-2x">
                <i class="fa fa-circle fa-stack-2x"></i>
                <i class="fa fa-youtube-play fa-stack-1x fa-inverse"></i>
            </span>
        </a>
        <a href="https://twitter.com/" class="icon icon-twitter">
            <span class="fa-stack fa-2x">
                <i class="fa fa-circle fa-stack-2x"></i>
                <i class="fa fa-twitter fa-stack-1x fa-inverse"></i>
            </span>
        </a>
        <a href="https://www.instagram.com/" class="icon icon-instagram">
            <span class="fa-stack fa-2x">
                <i class="fa fa-circle fa-stack-2x"></i>
                <i class="fa fa-instagram fa-stack-1x fa-inverse"></i>
            </span>
        </a>
    </div>
</article>
```

### Map

![Map](/images/m2/argento/stripes/contact-us/map.png)

Code:

```html
{% raw %}<div class="contact-map-placeholder" style='background-image: url({{media url="wysiwyg/contact-map.png"}})'>
</div>{% endraw %}
```
