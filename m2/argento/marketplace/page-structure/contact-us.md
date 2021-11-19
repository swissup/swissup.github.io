---
layout: default
title: Argento Marketplace Contact Us Page
description: Argento Marketplace contact us page
keywords: Argento Marketplace, contact us page
category: Argento
---

# Argento Marketplace Contact Us Page

{:.no_toc}

* TOC
{:toc}

![Contacts Page](/images/m2/argento/marketplace/contact-us-page.png)

Contact Us page has CMS Block with contact information and contact form. Frequently asked questions placed underneath. It is CMS block also.

### Contact Form

Contact form is default Magento 2 functionality.

The form background image is located in the `contact_bg` CMS block:

```html
<div class="contact-bg hidden-xs"><img src="{% raw %}{{media url='wysiwyg/contact/contact-bg.jpg'}}{% endraw %}" alt="Contact Us Background" /></div>
```

### Contact Info

It is CMS Block with identifier is `contact_info`.

Block content is below.

```html
<div class="contact-info">
    <div>
        <div class="icon"><svg width="34" height="25" viewBox="0 0 34 25" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M30.4524 23.3689H2.61553C1.74563 23.3689 1 22.6233 1 21.7534V9.82328V3.1126C1 2.2427 1.74563 1.49707 2.61553 1.49707H30.4524C31.3223 1.49707 32.068 2.2427 32.068 3.1126V21.7534C32.068 22.6233 31.3223 23.3689 30.4524 23.3689Z" stroke="#FABB1A" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/><path d="M32.068 2.73978L18.2738 14.732C17.2796 15.6019 15.7883 15.6019 14.732 14.732L1 2.73978" stroke="#FABB1A" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/><path d="M11.6871 12.0602L4.79004 18.0252" stroke="#FABB1A" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/><path d="M28.2154 18.0252L21.3184 12.0602" stroke="#FABB1A" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/></svg></div>
        <div class="content"><strong>Email</strong><div>info@example.com</div></div>
    </div>
    <div class="divider"></div>
    <div>
        <div class="icon"><svg width="25" height="34" viewBox="0 0 25 34" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.6029 16.5C15.4196 16.5 17.7029 14.3062 17.7029 11.6C17.7029 8.89382 15.4196 6.70001 12.6029 6.70001C9.78628 6.70001 7.50293 8.89382 7.50293 11.6C7.50293 14.3062 9.78628 16.5 12.6029 16.5Z" stroke="#FABB1A" stroke-width="2" stroke-miterlimit="10"/><path d="M23.6029 11.6C23.6029 19.2 12.5029 31.7 12.5029 31.7C12.5029 31.7 1.50293 19.2 1.50293 11.6C1.50293 5.8 6.40293 1 12.6029 1C18.8029 1 23.6029 5.8 23.6029 11.6Z" stroke="#FABB1A" stroke-width="2" stroke-miterlimit="10"/></svg></div>
        <div class="content"><strong>Address</strong><div>195 Broaddus Maple Court Avenue,<br>United States of America</div></div>
    </div>
    <div class="divider"></div>
    <div>
        <div class="icon"><svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13.0745 7.04763L10.0268 2.09525C9.45542 1.33334 8.50304 1.14287 7.74113 1.52382L3.1697 4.38096C0.693514 5.90477 1.26494 7.80953 2.4078 10.4762C5.07447 17.1429 8.69351 23.0476 13.4554 28.381C15.3602 30.4762 16.884 32 19.3602 30.4762L23.9316 27.6191C24.6935 27.0476 24.884 26.0952 24.503 25.3333L21.4554 20.381C20.884 19.6191 19.9316 19.4286 19.1697 19.8095L17.2649 20.9524C16.6935 21.3333 16.1221 21.1429 15.7411 20.7619C13.0745 18.6667 11.1697 15.8095 10.0268 12C9.83637 11.4286 10.0268 10.8572 10.5983 10.4762L12.503 9.33334C13.2649 8.95239 13.4554 7.80953 13.0745 7.04763Z" stroke="#FABB1A" stroke-width="2" stroke-miterlimit="10"/><path d="M20.8838 0.952393C24.3124 1.90477 27.1695 4.19049 28.8838 7.04763C30.5981 9.90477 31.36 13.3333 30.5981 16.9524" stroke="#FABB1A" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round"/><path d="M19.1689 6.66669C23.1689 7.80954 25.4547 11.8095 24.6928 15.8095" stroke="#FABB1A" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round"/></svg></div>
        <div class="content"><strong>Phone</strong><div>+146-4567890</div></div>
    </div>
</div>
```

### Frequently asked questions

It is CMS block with identifier `contact_faq`. Here is block content:

```html
<div class="block-title a-center">
    <h2>Frequently asked questions</h2>
</div>
<div class="block-content">
    <details open>
        <summary>Can I use different payment methods?</summary>
        <p>Yes, you are free to use our themes on as many websites as you like. We do not place any restrictions on how many times you can download or use a theme, nor do we limit the number of domains that you can install our themes to.</p>
    </details>
    <details>
        <summary>Can I use different payment methods?</summary>
        <p>Yes, you are free to use our themes on as many websites as you like. We do not place any restrictions on how many times you can download or use a theme, nor do we limit the number of domains that you can install our themes to.</p>
    </details>
    <details>
        <summary>Can I use different payment methods?</summary>
        <p>Yes, you are free to use our themes on as many websites as you like. We do not place any restrictions on how many times you can download or use a theme, nor do we limit the number of domains that you can install our themes to.</p>
    </details>
    <details>
        <summary>Can I use different payment methods?</summary>
        <p>Yes, you are free to use our themes on as many websites as you like. We do not place any restrictions on how many times you can download or use a theme, nor do we limit the number of domains that you can install our themes to.</p>
    </details>
    <details>
        <summary>Can I use different payment methods?</summary>
        <p>Yes, you are free to use our themes on as many websites as you like. We do not place any restrictions on how many times you can download or use a theme, nor do we limit the number of domains that you can install our themes to.</p>
    </details>
</div>
```

##### Next up
{:.no_toc}

- [Small css customizations](/m2/argento/customization/custom-css/)
- [Create Argento based custom theme](/m2/argento/customization/custom-theme/)
- [Argento Marketplace docs homepage](/m2/argento/marketplace/)
