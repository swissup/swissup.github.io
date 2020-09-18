---
layout: default
title: Argento Home Footer
description: Argento Home footer
category: Argento
---

# Footer
{:.no_toc}

* TOC
{:toc}

![Footer](/images/m2/argento/home/footer/footer.png)

Argento Home footer consists of three CMS blocks:

 -  `footer_benefits` - Footer Benefits;
 -  `footer_cms_content` - Footer CMS Content;
 -  `footer_newsletter` - Footer Newsletter.

### Footer Benefits

![Footer Benefits](/images/m2/argento/home/footer/benefits.png)

Original CMS block content:

```html
<div class="argento-grid block-benefits">
    <div class="col-md-4 item">
        <i class="home-icon home-icon-big home-shipping"></i>
        <span class="text">Free shipping anywhere</span>
    </div>
    <div class="col-md-4 item">
        <i class="home-icon home-icon-big home-calendar"></i>
        <span class="text">30 day free returns</span>
    </div>
    <div class="col-md-4 item">
        <i class="home-icon home-icon-big home-eco"></i>
        <span class="text">Environmentally friendly</span>
    </div>
</div>
```

### Footer CMS Content

![Footer CMS Content](/images/m2/argento/home/footer/cms-content.png)

Original CMS block content:

```html
<div class="footer-links">
    <div class="footer-logo"><img src="{{view url='images/footer-logo.svg'}}" alt="Footer Logo"/></div>
    <div class="argento-grid">
        <div class="col-md-4 item">
            <div class="title">Contact us</div>
            <div class="content">
                <div>Marcus Terson</div>
                <div>3 Uphold Drive</div>
                <div>Santa Bay, LL29 8LA</div>
                <div class="social-icons colorize-fa-stack-hover">
                    <a href="https://twitter.com/" class="icon icon-twitter">
                        <span class="fa-stack fa-lg">
                            <i class="fa fa-circle fa-stack-2x"></i>
                            <i class="fa fa-twitter fa-stack-1x fa-inverse"></i>
                        </span>
                    </a>
                    <a href="https://facebook.com/" class="icon icon-facebook">
                        <span class="fa-stack fa-lg">
                            <i class="fa fa-circle fa-stack-2x"></i>
                            <i class="fa fa-facebook fa-stack-1x fa-inverse"></i>
                        </span>
                    </a>
                    <a href="https://www.linkedin.com/" class="icon icon-linkedin">
                        <span class="fa-stack fa-lg">
                            <i class="fa fa-circle fa-stack-2x"></i>
                            <i class="fa fa-linkedin fa-stack-1x fa-inverse"></i>
                        </span>
                    </a>
                </div>
            </div>
        </div>
        <div class="col-md-4 item">
            <div class="title">Support</div>
            <ul class="links">
                <li><a href='{{store direct_url="contact#map"}}'>Store location</a></li>
                <li><a href='{{store direct_url="privacy-policy-cookie-restriction-mode"}}'>Privacy policy</a></li>
                <li><a href='{{store direct_url="company"}}'>Our company</a></li>
                <li><a href='{{store direct_url="about-us"}}'>About Us</a></li>
            </ul>
        </div>
        <div class="col-md-4 item">
            <div class="title">About us</div>
            <ul class="links">
                <li><a href='{{store direct_url="blog"}}'>Blog</a></li>
                <li><a href='{{store direct_url="wishlist"}}'>Wishlist</a></li>
                <li><a href='{{store direct_url="terms"}}'>Terms of Use</a></li>
                <li><a href='{{store direct_url="carriers"}}'>Carriers</a></li>
            </ul>
        </div>
    </div>
    <div class="payments">
        <img src="{{view url='images/payments/visa.svg'}}" alt="Visa"/>
        <img src="{{view url='images/payments/mastercard.svg'}}" alt="MasterCard"/>
        <img src="{{view url='images/payments/paypal.svg'}}" alt="PayPal"/>
        <img src="{{view url='images/payments/sagepay.svg'}}" alt="SagePay"/>
    </div>
</div>

```

### Footer Newsletter

![Footer Newsletter](/images/m2/argento/home/footer/newsletter.png)

Original CMS block content:

```html
<div class="footer-newsletter">
    {% raw %}{{block class="Magento\Newsletter\Block\Subscribe" name="footer.newsletter" template="Magento_Newsletter::subscribe.phtml"}}{% endraw %}
    <div class="privacy">Your information is safe and secure with us. Read our <a href='{{store direct_url="privacy-policy-cookie-restriction-mode"}}'>privacy policy.</a></div>
</div>
```

##### Next up
{:.no_toc}

- [Small css customizations](/m2/argento/customization/custom-css/)
- [Create Argento based custom theme](/m2/argento/customization/custom-theme/)
- [Argento Force docs homepage](/m2/argento/home/)
