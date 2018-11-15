---
layout: default
title: Facebook API Configuration
description: Facebook API Configuration
keywords: configure facebook api
category: SocialLogin
---

# Facebook API Configuration

To use Facebook login feature, you need to create Facebook application and link
it to your site. Facebook will generate application id and secret, which you
need to copy and set in Social Suite extension configuration.

**1. To create Facebook application, please follow the next steps:**

  - Go to [developers.facebook.com](https://developers.facebook.com/)
  and select `My Apps > Add New App`.

  ![Facebook For Developers](/images/m2/sociallogin/api/facebook/step-1.png)

  - In popup enter application name and contact email, press `Create App ID` and
    complete security check (captcha).

  ![Create New App](/images/m2/sociallogin/api/facebook/step-2.png)

  - Select `Settings > Basic` in left menu and fill `App Domains`,
    `Privacy Policy URL` and `Terms of Service URL` fields.
    Also you can select `Category` for your app here.

  ![Basic App Settings](/images/m2/sociallogin/api/facebook/step-3.png)

  - Press `Add Platform` button at page bottom,

    ![Add Platform](/images/m2/sociallogin/api/facebook/step-4.png)

    select `Website`

    ![Select Website](/images/m2/sociallogin/api/facebook/step-5.png)

    and fill your site url in `Site URL` field. Press `Save changes`.

    ![Site URL](/images/m2/sociallogin/api/facebook/step-6.png)

  - To make application public, go to `App Review` and enable it.
    Select app category if prompted.

    ![App Review](/images/m2/sociallogin/api/facebook/step-7.png)

**2. To enable login feature in your application, follow the next steps:**

  - Click plus near `PRODUCTS` at left menu and then `Set Up` button
    in `Facebook Login` card.

    ![Add Facebook Login](/images/m2/sociallogin/api/facebook/step-8.png)

  - Go to the `Facebook Login > Settings`, fill `Valid OAuth Redirect URIs`
    field with value `https://[your.domain]/sociallogin/social/login/id/facebook`
    and press `Save Changes` button.

    ![Facebook Login Settings](/images/m2/sociallogin/api/facebook/step-9.png)

    > If you are not sure what redirect URI to use, go to Magento admin
    >
    > **Stores > Configuration > Swissup Social Suite > Social login > Social Networks > Facebook**
    >
    > and copy generated value from `Redirect URI` field

    ![Social Login Redirect URI](/images/m2/sociallogin/api/facebook/step-10.png)

**3. Finally, you need to set app id and secret in Social Login configuration:**

  - In your application, go to `Settings > Basic` and copy `App ID` and `App Secret`.

    ![App Credentials](/images/m2/sociallogin/api/facebook/step-11.png)

  - In Magento admin, go to
    `Stores > Configuration > Swissup Social Suite > API Credentials > Facebook`
    and insert `Application ID` and `Application Secret` from your app.

    ![App Credentials](/images/m2/sociallogin/api/facebook/step-12.png)

**4. Now you can enable Facebook login feature in**
    `Stores > Configuration > Swissup Social Suite > Social login > Social Networks > Facebook`
