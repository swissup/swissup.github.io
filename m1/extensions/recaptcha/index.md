---
layout: default
title: reCAPTCHA
description: magento recaptcha module
keywords: " magento captcha, recaptcha extension"
category: reCAPTCHA
---

# ReCAPTCHA from Google

![reCAPTCHA exapmles](/images/m1/extensions/recaptcha/cover.png)

 1. [Installation](installation/)
 2. [Changelog](changelog/)
 3. [Extension Configuration](extension-configuration/)

Protect your website from spam and abuse while letting real people pass through check with ease. Your customers can now attest they are human without having to solve a CAPTCHA. They will be allowed to confirm they are not a robot via single click only.

Our Magento extension replaces default Magento CAPTCHA with more secure Google reCAPTCHA. It also can add reCAPTCHA to "Contact Us" form. You can choose one of two available types of reCAPTCHA:

 -  `reCAPTCHA v2` - requires the user to click a checkbox indicating the user
    is not a robot.

    ![reCAPTCHA v2](https://developers.google.com/recaptcha/images/newCaptchaAnchor.gif){:width="300"}

 -  `Invisible reCAPTCHA` - does not require the user to click on a checkbox,
    instead it is invoked directly when the user submits form.
    
    ![Invisible reCAPTCHA](https://developers.google.com/recaptcha/images/invisible_badge.png)

**Notice:** current version of this extension replaces default Magento CAPTCHA. So if your store has a disabled CAPTCHA, then you have to enable it first. Please, read Magento User Guide how to do that - [Security CAPTCHA](http://docs.magento.com/m1/ce/user_guide/store-operations/security-captcha.html).

**Notice:** One exception is "Contact Us" form. With our module you can add reCAPTCHA to this form to protect it. This feature is available since version 1.2.0.