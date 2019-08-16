---
layout: default
title: Argento Force Footer
description: Argento Force footer
category: Argento
---

# Footer
{:.no_toc}

* TOC
{:toc}

Argento Force footer consists of two CMS blocks:

 -  `footer_information` - Footer Information;
 -  `footer_cms_content` - Footer CMS Content.

### Footer Information

![Footer Information](/images/m2/argento/force/footer/information.png)

Original CMS block content:

```html
<div class="footer-information">
    <ul class="footer argento-grid">
        <li class="col-md-3 col-xs-12">
            <div data-role="title" class="h4">Connect with us</div>
            <div data-role="content" class="social-icons colorize-fa-stack-hover">
                <a href="https://facebook.com/" class="icon icon-facebook">
                    <span class="fa-stack">
                        <i class="fa fa-square fa-stack-2x fa-inverse"></i>
                        <i class="fa fa-facebook fa-stack-1x"></i>
                    </span>
                </a>
                <a href="https://twitter.com/" class="icon icon-twitter">
                    <span class="fa-stack">
                        <i class="fa fa-square fa-stack-2x fa-inverse"></i>
                        <i class="fa fa-twitter fa-stack-1x"></i>
                    </span>
                </a>
                <a href="https://www.linkedin.com/" class="icon icon-linkedin">
                    <span class="fa-stack">
                        <i class="fa fa-square fa-stack-2x fa-inverse"></i>
                        <i class="fa fa-linkedin fa-stack-1x"></i>
                    </span>
                </a>
                <a href="https://youtube.com/" class="icon icon-youtube">
                    <span class="fa-stack">
                        <i class="fa fa-square fa-stack-2x fa-inverse"></i>
                        <i class="fa fa-youtube-play fa-stack-1x"></i>
                    </span>
                </a>
            </div>
        </li>
        <li class="col-md-3 col-xs-12">
            <div data-role="title" class="h4">Store locator</div>
            <div data-role="content">
                <a href='{% raw %}{{store direct_url="find-store"}}{% endraw %}'>Find a store near your location.</a>
            </div>
        </li>
        <li class="col-md-3 col-xs-12">
            <div data-role="title" class="h4">Support</div>
            <div data-role="content" class="links">
                <a href='{% raw %}{{store direct_url="helpdesk"}}{% endraw %}'>Questions? We’d be happy to help.</a>
            </div>
        </li>
        <li class="col-md-3 col-xs-12">
            <div data-role="title" class="h4">Sign up for latest offers</div>
            <div data-role="content">{% raw %}{{block class="Magento\Newsletter\Block\Subscribe" template="subscribe.phtml"}}{% endraw %}</div>
        </li>
    </ul>
</div>
```

### Footer CMS Content

![Footer CMS Content](/images/m2/argento/force/footer/cms-content.png)

Original CMS block content:

```html
<div class="footer-links">
    <ul class="footer links argento-grid">
        <li class="col-md-3 col-xs-12">
            <div data-role="title" class="h4">About Us</div>
            <ul data-role="content" class="links">
                <li><a href='{% raw %}{{store direct_url="retail-store"}}{% endraw %}'>Our retail store</a></li>
                <li><a href='{% raw %}{{store direct_url="privacy-policy-cookie-restriction-mode"}}{% endraw %}'>Data Privacy</a></li>
                <li><a href='{% raw %}{{store direct_url="terms-and-conditions"}}{% endraw %}'>Terms and conditions</a></li>
            </ul>
        </li>
        <li class="col-md-3 col-xs-12">
            <div data-role="title" class="h4">Learn More</div>
            <ul data-role="content" class="links">
                <li><a href='{% raw %}{{store direct_url="contact#contact-links"}}{% endraw %}'>Social media</a></li>
                <li><a href='{% raw %}{{store direct_url="contact"}}{% endraw %}'>Contact Us</a></li>
                <li><a href='{% raw %}{{store direct_url="contact#map"}}{% endraw %}'>Map</a></li>
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
            <div data-role="title" class="h4">Force Store</div>
            <div data-role="content">
                <div class="argento-grid">
                    <div class="col-lg-6">FifthAve Street 31</div>
                    <div class="col-lg-6"><a href="mailto:contact@company.com">Email Us</a></div>
                </div>
                <div class="argento-grid ">
                    <div class="col-lg-6">New York USA</div>
                    <div class="col-lg-6">+01 122 334 566</div>
                </div>
            </div>
        </li>
    </ul>
</div>
```

##### Next up
{:.no_toc}

- [Small css customizations](/m2/argento/customization/custom-css/)
- [Create Argento based custom theme](/m2/argento/customization/custom-theme/)
- [Argento Force docs homepage](/m2/argento/force/)
