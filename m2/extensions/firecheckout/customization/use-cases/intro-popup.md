---
layout: default
title: Intro Popup Examples
description: Ready to use examples for checkout intro popup window
keywords: >
    intro popup, upsell, login popup, welcome popup
category: Firecheckout
---

# Intro Popup Examples

> This feature supported since v.1.19.0

Each example has a screenshot and a code to use. Want to use some example?
Grab the code below screenshot, create CMS block at _Content > Blocks_ page
and select it in the
[Additional Content](/m2/extensions/firecheckout/configuration/#additional-content-section)
option.

* TOC
{:toc}

### Crosssell Products

![Crosssell Products](/images/m2/firecheckout/customization/use-cases/intro-popup-crosssell.png)

Code for CMS block:

```html
{% raw %}<section class="fc-product-list cols-3">
    <h2 class="section-title">Special Offers!</h2>
    {{block class="Magento\Checkout\Block\Cart\Crosssell" type="crosssell" template="Magento_Catalog::product/list/items.phtml"}}
</section>{% endraw %}
```

### Frequently Bought Together

![Soldtogether Products](/images/m2/firecheckout/customization/use-cases/intro-popup-sold-together.png)

Code for CMS block:

> [swissup/sold-together](/m2/extensions/soldtogether/) v.1.5.1 or newer
> is required

```html
{% raw %}<section class="fc-product-list cols-3">
    <h2 class="section-title">We found other products you might like!</h2>
    {{block class="Swissup\SoldTogether\Block\Order" products_count="3" type="crosssell" template="Magento_Catalog::product/list/items.phtml"}}
</section>{% endraw %}
```

### Join our Community

This content is supposed to show for guest customers only.

![Join our Community](/images/m2/firecheckout/customization/use-cases/intro-popup-join-us.png)

Code for CMS block:

```html
{% raw %}<section>
    <h2 class="section-title">Join our Community!</h2>
    <div class="fc-flex fc-customer-block">
        <div class="fc-col">
            <div class="block">
                <h3 class="block-title">Register new Account</h3>
                <p>Register with us for future convenience:</p>
                <ul>
                    <li>Fast and easy check out</li>
                    <li>Easy access to your order history and status</li>
                </ul>
                <div class="actions-toolbar">
                    <a class="action primary" href="{{store url='customer/account/create'}}">Create Account</a>
                </div>
            </div>
        </div>
        <div class="fc-col">
            <div class="block">
                <h3 class="block-title">Already registered?</h3>
                <div class="actions-toolbar">
                    <button class="action primary button" data-fc-intro-click=".action-auth-toggle">Login</button>
                </div>
            </div>
            <div class="block">
                <h3 class="block-title">Don't want to create an account?</h3>
                <div class="actions-toolbar">
                    <button class="action primary button" data-role="closeBtn">Guest Checkout</button>
                </div>
            </div>
        </div>
    </div>
</section>{% endraw %}
```

##### Next up
{:.no_toc}

 -  [Back to customization page](/m2/extensions/firecheckout/customization/)
 -  [Back to home](/m2/extensions/firecheckout/)
