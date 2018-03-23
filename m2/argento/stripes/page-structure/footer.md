---
layout: default
title: Argento Stripes Footer
description: Argento Stripes footer
category: Argento
---

# Footer

Stripes footer includes three cms blocks:

 -  footer_contacts
 -  footer_cms
 -  footer_payments

### Footer Contacts

![Footer Contacts](/images/m2/argento/stripes/footer/contacts.png)

Code:

```html
{% raw %}<div class="footer-contacts argento-grid">
    <div class="col-md-3 hidden-xs">
        <img width="192" height="241"
            src="{{view url='images/support.png'}}"
            srcset="{{view url='images/support.png'}} 1x, {{view url='images/support@2x.png'}} 2x"
            alt="need help?"
        />
    </div>
    <div class="col-md-6 col-xs-12">
        <div data-role="title" class="h4">Need Help?</div>
        <div class="argento-grid">
            <div class="col-lg-6 col-md-12 block">
                <div class="block-icon">
                    <span class="fa-stack fa-2x">
                        <i class="fa fa-circle fa-stack-2x"></i>
                        <i class="fa fa-map-marker fa-stack-1x fa-inverse"></i>
                    </span>
                </div>
                <div class="block-content">
                    <div data-role="title">Address</div>
                    <div data-role="content">
                        <div>FifthAve Street 31</div>
                        <div>New York</div>
                        <div>USA</div>
                    </div>
                </div>
            </div>
            <div class="col-lg-6 col-md-12">
                <div class="block">
                    <div class="block-icon">
                        <span class="fa-stack fa-2x">
                            <i class="fa fa-circle fa-stack-2x"></i>
                            <i class="fa fa-envelope fa-stack-1x fa-inverse"></i>
                        </span>
                    </div>
                    <div class="block-content">
                        <div data-role="title">Email</div>
                        <div data-role="content">contact@company.com</div>
                    </div>
                </div>
                <div class="block">
                    <div class="block-icon">
                        <span class="fa-stack fa-2x">
                            <i class="fa fa-circle fa-stack-2x"></i>
                            <i class="fa fa-mobile fa-stack-1x fa-inverse"></i>
                        </span>
                    </div>
                    <div class="block-content">
                        <div data-role="title">Phone</div>
                        <div data-role="content">+01 122 334 566</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="col-md-3 col-xs-12">
        <div data-role="title" class="h4">Connect With Us</div>
        <div class="social-icons colorize-fa-stack-hover">
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
    </div>
</div>{% endraw %}
```

### Footer CMS Content

![Footer Contacts](/images/m2/argento/stripes/footer/cms.png)

Code:

```html
{% raw %}<div class="footer-links">
    <ul class="footer links argento-grid">
        <li class="col-md-3 col-xs-12">
            <div data-role="title" class="h4">Get help</div>
            <ul data-role="content" class="links">
                <li><a href='{{store direct_url="faq"}}'>FAQ</a></li>
                <li><a href='{{store direct_url="forum"}}'>Forum</a></li>
                <li><a href='{{store direct_url="sales/guest/form/"}}'>Returns and Exchanges</a></li>
            </ul>
        </li>
        <li class="col-md-3 col-xs-12">
            <div data-role="title" class="h4">Learn more</div>
            <ul data-role="content" class="links">
                <li><a href='{{store direct_url="terms-and-conditions"}}'>Terms & Conditions</a></li>
                <li><a href='{{store direct_url="privacy-policy-cookie-restriction-mode"}}'>Privacy Policy</a></li>
                <li><a href='{{store direct_url="affiliate"}}'>Affiliate program</a></li>
            </ul>
        </li>
        <li class="col-md-3 col-xs-12">
            <div data-role="title" class="h4">Be inspired by</div>
            <ul data-role="content" class="links">
                <li><a href='{{store direct_url="blog"}}'>Blog</a></li>
                <li><a href='{{store direct_url="typography"}}'>Typography page</a></li>
                <li><a href='{{store direct_url="testimonials"}}'>Testimonials</a></li>
            </ul>
        </li>
        <li class="col-md-3 col-xs-12">
            <div data-role="title" class="h4">Get in touch</div>
            <ul data-role="content" class="links">
                <li><a href='{{store direct_url="social"}}'>Social media</a></li>
                <li><a href='{{store direct_url="contact"}}'>Contact Us</a></li>
                <li><a href='{{store direct_url="map"}}'>Map</a></li>
            </ul>
        </li>
    </ul>
</div>{% endraw %}
```

### Footer Payments

![Footer Contacts](/images/m2/argento/stripes/footer/payments.png)

Code:

```html
{% raw %}<div class="footer-payments a-center">
    <img width="625" height="35"
        src="{{view url='images/payments.png'}}"
        srcset="{{view url='images/payments.png'}} 1x, {{view url='images/payments@2x.png'}} 2x"
        alt="Credit cards, we accept"
    />
</div>{% endraw %}
```
