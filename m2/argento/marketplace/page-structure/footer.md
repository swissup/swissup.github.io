---
layout: default
title: Argento Marketplace Footer
description: Argento Marketplace footer
category: Argento
---

# Footer
{:.no_toc}

* TOC
{:toc}

![Footer](/images/m2/argento/marketplace/footer/footer.png)

Argento Marketplace footer contains the following CMS blocks:

 -  `footer_contacts` - Footer Contacts;
 -  `footer_cms_content` - Footer CMS Content;
 -  `footer_logo` - Footer Logo;
 -  `social_icons` - Social Icons.

### Footer Contacts

![Footer Contacts](/images/m2/argento/marketplace/footer/contacts.png)

Original CMS block content:

```html
<div class="footer-contacts argento-grid">
    <div class="col-md-4">
        <div class="title"><strong>Questions?</strong> Talk to a specialist</div>
    </div>
    <div class="argento-grid a-center col-md-8 contacts">
        <div class="col-md-4">
            <div class="icon"><svg width="36" height="36" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11.2 21.3c2 3.2 4 5.6 4.4 5.4l2.2-1.4a1.5 1.5 0 0 1 2 .4l3.2 4.9a1.5 1.5 0 0 1-.5 2l-3.3 2.2a2 2 0 0 1-2 0A26.5 26.5 0 0 1 1.5 10a2 2 0 0 1 1-1.7l3.3-2a1.5 1.5 0 0 1 2 .4l3.1 4.8a1.5 1.5 0 0 1-.5 2.1L8.2 15c-.4.2.9 3 3 6.3Z" fill="#FABB1A"/><path d="M19.6 1.9a18.7 18.7 0 0 1 12.6 20M17.7 7.8A12.5 12.5 0 0 1 26 21.1M15.7 13.8a6.2 6.2 0 0 1 4.1 6.6" stroke="#FABB1A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></div>
            <div class="text">1-800-672-4399</div>
        </div>
        <div class="col-md-4">
            <div class="icon"><svg width="36" height="36" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.4 14h2.9a.7.7 0 0 1 .7.6v8.6a.7.7 0 0 1-.7.7H4.4A2.4 2.4 0 0 1 2 21.5v-5.1a2.4 2.4 0 0 1 2.4-2.5ZM31 24h-2.8a.7.7 0 0 1-.7-.8v-8.6a.7.7 0 0 1 .7-.7H31a2.4 2.4 0 0 1 2.5 2.5v5.1a2.4 2.4 0 0 1-2.5 2.4Z" fill="#FABB1A"/><path d="M19.7 29.3h-4c-.9 0-1.6.8-1.6 1.7v.2c0 .9.7 1.6 1.6 1.6h4c1 0 1.7-.7 1.7-1.6V31c0-1-.7-1.7-1.7-1.7ZM6 14a11.7 11.7 0 0 1 23.4 0M29.2 23a8 8 0 0 1-7.5 8M12.8 19.8a5.8 5.8 0 0 0 9.9 0" stroke="#FABB1A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></div>
            <div class="text">Chat now</div>
        </div>
        <div class="col-md-4">
            <div class="icon"><svg width="36" height="36" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14 5C7.2 5 2 9.2 2 14.3a8.5 8.5 0 0 0 4 7 .8.8 0 0 1 .4.6v5.2a.8.8 0 0 0 1.2.7l6.1-4 .5-.1c6.4-.1 11.7-4.3 11.7-9.4 0-5-5.4-9.3-12-9.3ZM8.7 16a1.7 1.7 0 1 1 1.7-1.7A1.7 1.7 0 0 1 8.8 16Zm5.4 0a1.7 1.7 0 1 1 1.7-1.7 1.7 1.7 0 0 1-1.7 1.7Zm5.4 0a1.7 1.7 0 1 1 1.8-1.7 1.7 1.7 0 0 1-1.8 1.7Z" fill="#FABB1A"/><path d="M19.3 25a8.4 8.4 0 0 0 6.4 2.7l5 3.2v-4.6a5.6 5.6 0 0 0 2.8-4.6c0-2.7-2.2-5-5.3-5.7" stroke="#FABB1A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></div>
            <div class="text">Message us</div>
        </div>
    </div>
</div>
```

### Footer CMS Content

![Footer CMS Content](/images/m2/argento/marketplace/footer/cms-content.png)

Original CMS block content:

```html
<div class="footer-links">
    <ul class="footer links argento-grid">
        <li class="col-md-3 col-xs-12">
            <div data-role="title" class="h4">Get help</div>
            <ul data-role="content" class="links">
                <li><a href='{% raw %}{{store direct_url="faq"}}{% endraw %}'>FAQ</a></li>
                <li><a href='{% raw %}{{store direct_url="forum"}}{% endraw %}'>Forum</a></li>
                <li><a href='{% raw %}{{store direct_url="sales/guest/form/"}}{% endraw %}'>Returns and Exchanges</a></li>
            </ul>
        </li>
        <li class="col-md-3 col-xs-12">
            <div data-role="title" class="h4">Learn more</div>
            <ul data-role="content" class="links">
                <li><a href='{% raw %}{{store direct_url="terms-and-conditions"}}{% endraw %}'>Terms & Conditions</a></li>
                <li><a href='{% raw %}{{store direct_url="privacy-policy-cookie-restriction-mode"}}{% endraw %}'>Privacy Policy</a></li>
                <li><a href='{% raw %}{{store direct_url="affiliate"}}{% endraw %}'>Affiliate program</a></li>
            </ul>
        </li>
        <li class="col-md-3 col-xs-12">
            <div data-role="title" class="h4">Be inspired by</div>
            <ul data-role="content" class="links">
                <li><a href='{% raw %}{{store direct_url="blog"}}{% endraw %}'>Blog</a></li>
                <li><a href='{% raw %}{{store direct_url="typography"}}{% endraw %}'>Typography page</a></li>
                <li><a href='{% raw %}{{store direct_url="testimonials"}}{% endraw %}'>Testimonials</a></li>
            </ul>
        </li>
        <li class="col-md-3 col-xs-12">
            <div data-role="title" class="h4">Get in touch</div>
            <ul data-role="content" class="links">
                <li><a href='{% raw %}{{store direct_url="contact#contact-links"}}{% endraw %}'>Social media</a></li>
                <li><a href='{% raw %}{{store direct_url="contact"}}{% endraw %}'>Contact Us</a></li>
                <li><a href='{% raw %}{{store direct_url="contact#map"}}{% endraw %}'>Map</a></li>
            </ul>
        </li>
    </ul>
</div>
```

### Footer Logo

It contains the logo displayed in the bottom footer toolbar.

Original CMS block content:

```html
<div class="footer-logo">
    <svg width="204" height="32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M50 28 45 14.2a33.2 33.2 0 0 1 0 4.3V28h-1.8V12.3h3l4.8 12.9 5-13h3V28h-2v-9.7a57.9 57.9 0 0 1 .1-4L51.6 28H50Zm24.3 0-2-4.9h-6.1l-2 4.9h-2l6.2-15.8h1.8L76.3 28h-2ZM70 16.6a21.6 21.6 0 0 1-.7-2.3 20 20 0 0 1-.7 2.3l-1.8 4.8h5L70 16.6Zm14.1-4.3c2 0 3.4.4 4.3 1.1 1 .7 1.4 1.9 1.4 3.4 0 .8-.1 1.5-.4 2a4 4 0 0 1-1.2 1.4l-1.5.8 4.3 7h-2.3l-3.8-6.5h-3.1V28h-2V12.3H84Zm0 1.7h-2.3v5.8H84c1.3 0 2.2-.2 2.8-.7.6-.5.9-1.3.9-2.3 0-1-.3-1.7-1-2.1-.5-.5-1.5-.7-2.8-.7Zm22.2 14h-2.4l-5.5-7.5-1.6 1.4V28h-2V12.3h2V20l1.3-1.5 1.4-1.5 4.2-4.7h2.3L99.8 19l6.5 8.9Zm12.2 0h-8.8V12.3h8.8V14h-6.8v5h6.4v1.7h-6.4v5.6h6.8V28Zm9.7 0h-2V14h-4.8v-1.7H133V14h-4.9v14ZM141 12.3c2 0 3.5.4 4.5 1.2.9.8 1.4 2 1.4 3.4 0 .9-.2 1.7-.6 2.5-.4.7-1 1.3-2 1.8-.9.4-2.1.7-3.7.7h-1.8V28h-2V12.3h4.2Zm-.2 1.7h-2v6.2h1.6c1.5 0 2.6-.3 3.3-.7.8-.5 1.1-1.3 1.1-2.5 0-1-.3-1.8-1-2.3-.6-.5-1.6-.7-3-.7Zm10.7 14V12.3h2v14h6.8V28h-8.8Zm22.7 0-2-4.9h-6.1l-2 4.9h-2l6.2-15.8h1.8l6.1 15.8h-2Zm-4.3-11.4a22.6 22.6 0 0 1-.7-2.3 20.2 20.2 0 0 1-.7 2.3l-1.8 4.8h5l-1.8-4.8Zm16-2.8a5 5 0 0 0-3.9 1.7 6.9 6.9 0 0 0-1.4 4.6c0 2 .4 3.5 1.3 4.7 1 1.1 2.3 1.7 4 1.7.8 0 1.4 0 2-.2a18 18 0 0 0 1.8-.4v1.7l-1.8.5-2.2.1c-1.6 0-3-.3-4-1-1-.6-1.9-1.6-2.4-2.8-.6-1.2-.8-2.6-.8-4.3 0-1.6.3-3 .8-4.2a6.5 6.5 0 0 1 2.6-2.8c1.1-.7 2.5-1 4.1-1 1.7 0 3.1.3 4.3.9l-.7 1.7c-.5-.3-1-.4-1.7-.6-.6-.2-1.2-.3-2-.3ZM203.4 28h-8.8V12.3h8.8V14h-6.8v5h6.4v1.7h-6.4v5.6h6.8V28Z" fill="#2D9CDB"/><path d="m29.6 29.4-3-18.7a1.2 1.2 0 0 0-1.1-1h-3v-2a7.7 7.7 0 0 0-15.4 0v2H4a1.2 1.2 0 0 0-1.2 1L0 29.4a1.2 1.2 0 0 0 1.2 1.3 72 72 0 0 0 28.1-.4 1.2 1.2 0 0 0 .3-1ZM9.2 9.7v-2a5.6 5.6 0 1 1 11.2 0v2H9.2Z" fill="#FABB1A"/><path d="M7.8 14.5a1.3 1.3 0 1 0 0-2.6 1.3 1.3 0 0 0 0 2.6ZM21.2 14.5a1.3 1.3 0 1 0 0-2.6 1.3 1.3 0 0 0 0 2.6ZM21 26.6h-2.4a.5.5 0 0 1-.5-.4l-.5-3.8a.5.5 0 0 0-.9-.2l-2 2a.5.5 0 0 1-.6 0l-2-2a.5.5 0 0 0-.8.2l-.5 3.8a.5.5 0 0 1-.5.4H7.9a.5.5 0 0 1-.5-.6l1.5-9a.5.5 0 0 1 .5-.3h1.3a.5.5 0 0 1 .4.1l.9 1 2 2a.5.5 0 0 0 .8 0l2-2 1-1a.5.5 0 0 1 .3-.1h1.4a.5.5 0 0 1 .5.4l1.5 9a.5.5 0 0 1-.5.5Z" fill="#fff"/></svg>
</div>
```

### Social Icons

The icons displayed in the bottom footer toolbar.

Original CMS block content:

```html
<div class="social-icons colorize-fa-stack-hover">
    <a href="https://facebook.com/" class="icon icon-facebook">
        <span class="fa-stack fa-lg">
            <i class="fa fa-circle fa-stack-2x"></i>
            <i class="fa fa-facebook fa-stack-1x fa-inverse"></i>
        </span>
    </a>
    <a href="https://www.instagram.com/" class="icon icon-instagram">
        <span class="fa-stack fa-lg">
            <i class="fa fa-circle fa-stack-2x"></i>
            <i class="fa fa-instagram fa-stack-1x fa-inverse"></i>
        </span>
    </a>
    <a href="https://twitter.com/" class="icon icon-twitter">
        <span class="fa-stack fa-lg">
            <i class="fa fa-circle fa-stack-2x"></i>
            <i class="fa fa-twitter fa-stack-1x fa-inverse"></i>
        </span>
    </a>
</div>
```

##### Next up
{:.no_toc}

- [Small css customizations](/m2/argento/customization/custom-css/)
- [Create Argento based custom theme](/m2/argento/customization/custom-theme/)
- [Argento Marketplace docs homepage](/m2/argento/marketplace/)
