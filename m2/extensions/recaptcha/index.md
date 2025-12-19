---
layout: default
title: reCAPTCHA
description: magento2 recaptcha module
keywords: " magento2 captcha, recaptcha extension"
category: reCAPTCHA
---

# ReCAPTCHA from Google

![reCAPTCHA exapmles](/images/m2/recaptcha/examples.png)

 1. [Installation](installation/)
 2. [Changelog](changelog/)
 3. [Configuration](configuration/)
 4. [Use Cases](use-cases/)
     -  [Captcha at checkout](use-cases#captcha-at-checkout)
 5. [Third-party modules compatibility](compatibility/)

Protect your website from spam and abuse while letting real people pass through check with ease. Your customers can now attest they are human without having to solve a CAPTCHA. They will be allowed to confirm they are not a robot via single click only.

Our Magento extension replaces default Magento CAPTCHA with more secure Google reCAPTCHA. You can choose one of two available types of reCAPTCHA:

 -  `reCAPTCHA v2` - requires the user to click a checkbox indicating the user
    is not a robot.

    ![reCAPTCHA v2](https://developers.google.com/recaptcha/images/newCaptchaAnchor.gif){:width="300"}

 -  `Invisible reCAPTCHA` - does not require the user to click on a checkbox,
    instead it is invoked directly when the user submits form.
    
    ![Invisible reCAPTCHA](https://developers.google.com/recaptcha/images/invisible_badge.png)

**Notice:** current version of this extension does not provide security CAPTCHAs to any other form than your Magento instance does. It just replaces default Magento CAPTCHA. So if your store has a disabled CAPTCHA, then you have to enable it first. Please, read Magento User Guide how to do that - [Security CAPTCHA](https://docs.magento.com/m2/ce/user_guide/stores/security-captcha.html).

**Notice:** One exception is "Subscribe to Newsletter" form. With our module you can add reCAPTCHA to this form to secure it from bots. This feature is available since version 1.2.0. Check module configuration to enabale this feature.
