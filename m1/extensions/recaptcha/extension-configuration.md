---
layout: default
title: Extension configuration
description: magento recaptcha module system config options
keywords: " magento recaptcha extension, backend, recaptcha system config"
category: reCAPTCHA
---

# Extension configuration

In order to change general extension settings, go to your Magento backend. Then select menu `System` -> `Configuration` and on left side panel find `Templates-Master`-> `reCAPTCHA`.

![ReCAPTCHA system config options](/images/m1/extensions/recaptcha/system-config.png)

In section `API keys` you have to insert Site Key and Secret Key. Google creates these keys  for your domain. If you do not specify keys, then you get a message instead of captcha:

> **Add your keys for reCAPTCHA**
> 
>If you still do not have keys, please visit [https://www.google.com/recaptcha/admin](https://www.google.com/recaptcha/admin) to generate them. Set them into respective fields of reCAPTCHA extension config.

In section `General` you can disable or enable reCAPTCHA. As you can see, you may enable recaptcha only for store frontend or only for magento backend.

You can see only 2 Google options to customize reCAPTCHA:

 *  color (light/dark)
 *  size (normal/compact)
  
These settings you can find in section `Design`.
