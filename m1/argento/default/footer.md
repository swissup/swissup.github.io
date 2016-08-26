---
layout: default
title: Argento Default theme Footer
description: Argento Default theme footer configuration
keywords: "ArgentoArgento, default, argento default, footer, social icons, links, copyright, contacts"
category: Argento
---

# Argento Default Theme Footer

![Argento Default theme footer](/images/argento/default/footer-links.png)

### Newsletter and Social icons block

You can add or remove additional links in `Cms > Static Blocks > footer_toolbar`
block.

Code:

```html
{% raw %}<div class="footer-toolbar-container">
    <div class="footer-toolbar">
        {{block type="newsletter/subscribe" template="newsletter/subscribe.phtml"}}
        <div class="footer-social">
            <span class="label">Join our community</span>
            <ul class="icons">
                <li class="facebook"><a href="facebook.com">Facebook</a></li>
                <li class="twitter"><a href="twitter.com">Twitter</a></li>
                <li class="youtube"><a href="youtube.com">YouTube</a></li>
                <li class="rss"><a href="rss.com">Rss</a></li>
            </ul>
        </div>
    </div>
</div>{% endraw %}
```

### Links and Contacts blocks

You can add or remove additional links, change phone number and text in
`Cms > Static Blocks > footer_cms` block.

Code:

```html
{% raw %}<div class="footer-cms-container">
    <div class="footer-cms">
        <div class="row">
            <div class="col-md-9">
                <ul class="footer-links row">
                    <li class="col-md-3 col-xs-6">
                        <div class="h6">About us</div>
                        <ul>
                            <li><a href="{{store direct_url='about'}}">About Us</a></li>
                            <li><a href="{{store direct_url='our-company'}}">Our company</a></li>
                            <li><a href="{{store direct_url='carriers'}}">Carriers</a></li>
                            <li><a href="{{store direct_url='shipping'}}">Shipping</a></li>
                        </ul>
                    </li>
                    <li class="col-md-3 col-xs-6">
                        <div class="h6">Customer center</div>
                        <ul>
                            <li><a href="{{store direct_url='customer/account'}}">My Account</a></li>
                            <li><a href="{{store direct_url='sales/order/history'}}">Order Status</a></li>
                            <li><a href="{{store direct_url='wishlist'}}">Wishlist</a></li>
                            <li><a href="{{store direct_url='exchanges'}}">Returns and Exchanges</a></li>
                        </ul>
                    </li>
                    <li class="col-md-3 col-xs-6">
                        <div class="h6">Info</div>
                        <ul>
                            <li><a href="{{store direct_url='privacy'}}">Privacy policy</a></li>
                            <li><a href="{{store direct_url='delivery'}}">Delivery information</a></li>
                            <li><a href="{{store direct_url='returns'}}">Returns policy</a></li>
                        </ul>
                    </li>
                    <li class="col-md-3 col-xs-6">
                        <div class="h6">Contacts</div>
                        <ul>
                            <li><a href="{{store direct_url='contacts'}}">Contact Us</a></li>
                            <li><a href="{{store direct_url='location'}}">Store location</a></li>
                        </ul>
                    </li>
                </ul>
            </div>

            <div class="col-md-3 footer-contacts">
                <div class="h6">Visit Argento  Store</div>
                <address>
                221B Baker Street<br/>
                West Windsor, NJ  08550<br/>
                <strong>1.800.555.1903</strong><br/>
                </address>
                <a href="{{store url='map'}}">get directions</a><br/>
                <img width="200" height="60" style="margin-top: 10px;" src="{{skin url='images/security_sign.gif'}}" srcset="{{skin url='images/security_sign@2x.gif"}} 2x" alt="Security Seal"/>
            </div>
        </div>
    </div>
</div>{% endraw %}
```

### Copyright block

You can change the copyright block by navigating to `System > Configuration > General > Design`.
The copyright information can be edited in the footer field.

### Additional links block

You can find the code of the block at `app/design/frontend/base/default/layout/page.xml` file.

```xml
<block type="page/html_footer" name="footer" as="footer" template="page/html/footer.phtml">
<block type="page/template_links" name="footer_links" as="footer_links" template="page/template/links.phtml"/>
```

Please notice, that all links are collected from different xml files. For example,
if you want to edit the Advanced search link, you have to find
`app/design/frontend/base/default/layout/catalogsearch.xml` file:

```xml
<reference name="footer_links">
    <action method="addLink" translate="label title" module="catalogsearch" ifconfig="catalog/seo/search_terms">
        <label>Search Terms</label>
        <url helper="catalogsearch/getSearchTermUrl" />
        <title>Search Terms</title>
    </action>
    <action method="addLink" translate="label title" module="catalogsearch">
        <label>Advanced Search</label>
        <url helper="catalogsearch/getAdvancedSearchUrl" />
        <title>Advanced Search</title>
    </action>
</reference>
```

### Short footer layout

Short footer layout is used on checkout page to increase conversion rate.

You can disable short footer using [custom layout update file](/m1/argento/theme-customization/small-changes/#custom-layout-update-file)

```xml
<short_header_footer>
    <reference name="footer">
        <action method="setTemplate"><template>page/html/footer.phtml</template></action>
    </reference>
</short_header_footer>
```
