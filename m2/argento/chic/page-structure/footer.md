---
layout: default
title: Argento Chic Footer
description: Argento Chic footer
category: Argento
---

# Footer
{:.no_toc}

* TOC
{:toc}

![Footer](/images/m2/argento/chic/footer/footer.png)

Argento Chic footer contains the following CMS blocks:

 -  `benefits` - benefits block is displayed in `footer-toolbar-top` container;
 -  `footer_cms_content` - Footer CMS Content block includes useful store links, social icons and newsletter form;
 -  `footer_payments` - logos of the payment methods used on your site.

### Footer Benefits

![Footer Benefits](/images/m2/argento/chic/footer/benefits.png)

Original CMS block content:

```html
<div class="benefits argento-grid a-center">
    <div class="col-md-4">
        <div class="title font-serif">
            <i class="chic-icon chic-icon-medium chic-shipping"></i><span>Free shipping</span>
        </div>
        <div class="text">Delivery is free above a certain threshold. Discover more in our <a href="{% raw %}{{store direct_url='faq'}}{% endraw %}">FAQ</a>.</div>
    </div>
    <div class="col-md-4">
        <div class="title font-serif">
            <i class="chic-icon chic-icon-medium chic-return"></i><span>30-day Returns</span>
        </div>
        <div class="text">We provide easy 30-day returns for our clients. Discover more in our <a href="{% raw %}{{store direct_url='faq'}}{% endraw %}">FAQ</a>.</div>
    </div>
    <div class="col-md-4">
        <div class="title font-serif">
            <i class="chic-icon chic-icon-medium chic-secure"></i><span>Secure Payment</span>
        </div>
        <div class="text">We use secure payments to take care of your privacy. Discover more in our <a href="{% raw %}{{store direct_url='faq'}}{% endraw %}">FAQ</a>.</div>
    </div>
</div>
```

### Footer CMS Content

![Footer CMS Content](/images/m2/argento/chic/footer/cms-content.png)

Original CMS block content:

```html
<div class="footer-links">
    <div class="footer links argento-grid">
        <div class="col-md-2 col-sm-12">
            <div><img width="135" height="42" src="{% raw %}{{view url='images/logo.svg'}}{% endraw %}" alt="Logo"/></div>
            <div class="social-icons">
                <a href="https://x.com" class="icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"></path></svg></a>
                <a href="https://instagram.com" class="icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path></svg></a>
                <a href="https://facebook.com" class="icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"></path></svg></a>
            </div>
        </div>
        <div class="col-md-5 col-sm-12">
            <ul class="argento-grid">
                <li class="col-xs-6">
                    <div data-role="title" class="h4">Explore</div>
                    <ul data-role="content" class="links">
                        <li><a href='{% raw %}{{store direct_url="size-guide"}}{% endraw %}'>Size guide</a></li>
                        <li><a href='{% raw %}{{store direct_url="clothing-care"}}{% endraw %}'>Clothing care</a></li>
                        <li><a href='{% raw %}{{store direct_url="contact"}}{% endraw %}'>Contact us</a></li>
                        <li><a href='{% raw %}{{store direct_url="typography"}}{% endraw %}'>Typography</a></li>
                    </ul>
                </li>
                <li class="col-xs-6">
                    <div data-role="title" class="h4">Collections</div>
                    <ul data-role="content" class="links">
                        <li><a href='{% raw %}{{store direct_url="women.html"}}{% endraw %}'>Women</a></li>
                        <li><a href='{% raw %}{{store direct_url="men.html"}}{% endraw %}'>Men</a></li>
                        <li><a href='{% raw %}{{store direct_url="gear.html"}}{% endraw %}'>Gear</a></li>
                        <li><a href='{% raw %}{{store direct_url="training.html"}}{% endraw %}'>Training</a></li>
                        <li><a href='{% raw %}{{store direct_url="gear/fitness-equipment.html"}}{% endraw %}'>Fitness equipment</a></li>
                        <li><a href='{% raw %}{{store direct_url="gear/watches.html"}}{% endraw %}'>Watches</a></li>
                        <li><a href='{% raw %}{{store direct_url="sale.html"}}{% endraw %}'>Sale</a></li>
                    </ul>
                </li>
            </ul>
        </div>
        <div class="col-md-5 col-sm-12">
            <ul class="argento-grid">
                <li class="col-xs-6">
                    <div data-role="title" class="h4">Customer service</div>
                    <ul data-role="content" class="links">
                        <li><a href='{% raw %}{{store direct_url="faq"}}{% endraw %}'>FAQs</a></li>
                        <li><a href='{% raw %}{{store direct_url="sales/guest/form"}}{% endraw %}'>Track my order</a></li>
                        <li><a href='{% raw %}{{store direct_url="shipping-info"}}{% endraw %}'>Shipping</a></li>
                        <li><a href='{% raw %}{{store direct_url="payment-info"}}{% endraw %}'>Payment</a></li>
                        <li><a href='{% raw %}{{store direct_url="returns-and-exchanges"}}{% endraw %}'>Returns</a></li>
                    </ul>
                </li>
                <li class="col-xs-6">
                    <div data-role="title" class="h4">Legal info</div>
                    <ul data-role="content" class="links">
                        <li><a href='{% raw %}{{store direct_url="returns-and-exchanges"}}{% endraw %}'>Returns and exchanges</a></li>
                        <li><a href='{% raw %}{{store direct_url="privacy-policy-cookie-restriction-mode"}}{% endraw %}'>Privacy policy</a></li>
                        <li><a href='{% raw %}{{store direct_url="terms-and-conditions"}}{% endraw %}'>Terms and conditions</a></li>
                    </ul>
                </li>
            </ul>
            <div class="newsletter-wrapper">
                <div class="h4">Sign up for our offers</div>
                <div>{% raw %}{{block class="Magento\Newsletter\Block\Subscribe" template="Magento_Newsletter::subscribe.phtml"}}{% endraw %}</div>
            </div>
        </div>
    </div>
</div>
```

### Footer Payments

Original CMS block content:

```html
<div class="payments" data-content-type="html" data-appearance="default" data-element="main">&lt;img alt="We accept Visa, MasterCard, American Express, Stripe, Amazon, Sage, and Paypal"
  width="292" height="21" loading="lazy"
  src="{% raw %}{{media url=wysiwyg/argento/chic/payments.webp}}{% endraw %}"
  srcset="{% raw %}{{media url=wysiwyg/argento/chic/payments.webp}}{% endraw %} 1x,
          {% raw %}{{media url=wysiwyg/argento/chic/payments@2x.webp}}{% endraw %} 2x" /&gt;</div>
```

##### Next up
{:.no_toc}

- [Small css customizations](/m2/argento/customization/custom-css/)
- [Create Argento based custom theme](/m2/argento/customization/custom-theme/)
- [Argento Chic docs homepage](/m2/argento/chic/)
