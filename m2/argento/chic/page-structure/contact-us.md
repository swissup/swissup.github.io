---
layout: default
title: Argento Chic Contact Us Page
description: Argento Chic contact us page
keywords: Argento Chic, contact us page
category: Argento
---

# Argento Chic Contact Us Page

{:.no_toc}

* TOC
{:toc}

![Contacts Page](/images/m2/argento/chic/contact-us-page.png)

Contact Us page has CMS Block with the map and contact form. Our stores information is placed underneath. It is CMS block also.

### Contact Form

Contact form is default Magento 2 functionality.

### Map

Map is added with Page Builder and located in CMS Block with identifier `contact_aside`.

### Our Stores

It is CMS block with identifier `contact_bottom`. Here is block content:

```html
<div class="page-container block-stores">
    <div class="content">
        <h2 class="block-title">Our stores</h2>
        <div class="stores">
            <div class="store">
                <h3>New York</h3>
                <div class="font-serif">
                    <p>88 Street, 11965</p>
                    <p><a tabindex="0" href="mailto:ny@argentotheme.com">ny@argentotheme.com</a></p>
                    <p>1-212-1234567</p>
                </div>
            </div>
            <div class="store">
                <h3>Berlin</h3>
                <div class="font-serif">
                    <p>67 House RD, 11954</p>
                    <p><a tabindex="0" href="mailto:sales@argentochic.com">berlin@argentotheme.com</a></p>
                    <p>160-5556-417</p>
                </div>
            </div>
            <div class="store">
                <h3>Paris</h3>
                <div class="font-serif">
                    <p>213 Monteux, 11954</p>
                    <p><a tabindex="0" href="mailto:sales@argentochic.com">paris@argentotheme.com</a></p>
                    <p>01-23-45-67-89</p>
                </div>
            </div>
        </div>
    </div>
</div>
```

##### Next up
{:.no_toc}

- [Small css customizations](/m2/argento/customization/custom-css/)
- [Create Argento based custom theme](/m2/argento/customization/custom-theme/)
- [Argento Chic docs homepage](/m2/argento/chic/)
