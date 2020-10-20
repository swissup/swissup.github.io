---
layout: default
title: Changelog
description: magento2 recaptcha module changelog
keywords: " magento2 recaptcha, recaptcha extension, changelog "
category: reCAPTCHA
---

# Changelog

### Version 1.3.12

> Oct 20, 2020

  - Fixed recaptcha validation on checkout when payment does mulptiple server requests to place an order.

### Version 1.3.11

> Oct 1, 2020

 -  Recaptcha validation on client side. Validate if checkmark is checked right before placing order.

### Version 1.3.10

> Aug 5, 2020

 -  Make friends with braintree payment method.

### Version 1.3.9

> Jun 10, 2020

  - Checkout: prevent "Invalid recaptcha" message for next "Place Order" when first attempt failed due to some incorrect data.

### Version 1.3.8

> May 22, 2020

  -  Fixed missing [OrderAttachements](/m2/extensions/order-attachments/) block when recaptcha is enabled

### Version 1.3.7

> May 15, 2020

  -  Magento 2.3.5 CSP compatibility.

### Version 1.3.6

> Apr 13, 2020

 -  Fixed unable to place order when recaptcha protects checkout and paypalflow method is selected.

### Version 1.3.5

> Mar 20, 2020

 -  Integrate with latest version of Swissup AskiIt module (version 1.7.0+).

### Version 1.3.4

> Mar 11, 2020

 -  Improve recaptcha behavior at checkout. Fixed missing recaptcha when customer uses stored with braintree payment card.

### Version 1.3.3

> Mar 6, 2020

 -  Fixed defaultCaptcha.js error when recaptcha disabled on frontend.
 -  Make Recaptcha and Amazon Payment friends (integrate with amzn/amazon-pay-module).
 -  Add Recaptcha to login form at checkout when only virtual product is in cart.

### Version 1.3.2

> Mar 2, 2020

 -  Show missing recaptcha at checkout shipping address section when user input email address of existed customer and store asks him to login. Works when captcha at signin form enabled.

### Version 1.3.0

> Feb 6, 2020

 -  Protect checkout with recaptcha.
 -  Config recaptcha look for any form with ["Design Exceptions"](../configuration/).

### Version 1.2.3

> Dec 6, 2019

 -  Remove 'jquery/ui' dependency to prevent message about slow performance in browser console at Magento 2.3.

### Version 1.2.2

> Jul 29, 2019

 -  Fixed error - No property exists by the name 'formId' in Magento 2.1.x.
 -  Slightly improve recaptcha styles for newsletter. Prevent recaptcha from streching newsletter form on small screens.

### Version 1.2.1

> Jun 12, 2019

 -  Fixed missing recaptcha at some pages for newsletter form. Forgot password page is one of them.
 -  Added comment to general section of Recaptcha settings at Magento Configuration.

### Version 1.2.0

> May 13, 2019

 -  New feature - protect "Subscribe to newsletter" with recaptcha.

### Version 1.1.3

> Mar 29, 2019

 -  Magento 2.3.1 compatibility (Fixed frontend js error)

### Version 1.1.2

> Dec 4th, 2018

 -  Updated google/recaptcha requirement to get latest stable version.
    (Magento 2.3.0 compatibility)

### Version 1.1.1

> Nov 8th, 2018

 -  Use curl to request recaptcha validation. It makes request slightly quicker.
 -  Improve module stability.

### Version 1.1.0

Internal module naming convention was updated. We applied this changes to reach full compatibility with Magento Marketplace policy.

### Version 1.0.1

 -  Add reCAPTCHA in authentication popup.
 -  Do not load JS ans CSS for default Magento Captcha when reCAPTCHA enabled.

### Version 1.0.0

Initial release.

Extension replaces default Magento Captcha with Google reCAPTCHA.
