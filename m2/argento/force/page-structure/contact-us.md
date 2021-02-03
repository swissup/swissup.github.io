---
layout: default
title: Argento Force Contact Us Page
description: ArgentoForce contact us page
keywords: ArgentoForce, Force, contact us page
category: Argento
---

# Argento Force Contact Us Page

{:.no_toc}

* TOC
{:toc}

![Contacts Page](/images/m2/argento/force/contact-us-page.png)

Contact Us page contains one CMS Block (left side) and conatct form (right side).

### General Contact Information

It is CMS Block with identifier is `contact_aside_cms`.

Block content is below.

```html
<div class="block block-contact-info">
    <div class="block-title">
        <strong role="heading" aria-level="3">General Contact Information</strong>
    </div>
    <div class="block-content">
        <h4>Online Order Queries? <br>Telephone Online Customer Service Team</h4>
        <p>From EU: (094) 90 20 386</p>
        <p>From outside EU: (+353) 94 9020386</p>
        <p>Online customer service desk (Opening Hours): Mon-Fri: 9am to 5pm</p>

        <h4>Email Us</h4>
        <p>Email us at <a href="mailto:{% raw %}{{config path='trans_email/ident_sales/email'}}{% endraw %}" class="link-accent">{% raw %}{{config path='trans_email/ident_sales/email'}}{% endraw %}</a></p>

        <h4>Feedback On Our Service</h4>
        <p>For any feedback on our service in store or online please email us at <a href="mailto:{% raw %}{{config path='trans_email/ident_general/email'}}{% endraw %}" class="link-accent">{% raw %}{{config path='trans_email/ident_general/email'}}{% endraw %}</a></p>
    </div>
</div>
```

### Contact Form

Contact form is default Magento 2 functionality.

##### Next up
{:.no_toc}

- [Small css customizations](/m2/argento/customization/custom-css/)
- [Create Argento based custom theme](/m2/argento/customization/custom-theme/)
- [Argento Force docs homepage](/m2/argento/force/)
