---
layout: default
title: Google API Configuration
description: Google API Configuration
keywords: configure google api
category: SocialLogin
---

# Google API Configuration

To use Google login feature, you need to create Google application and link
it to your site. Google will generate application id and secret, which you
need to copy and set in Social Suite extension configuration.

**1. To create Google application, please follow the next steps:**

  - Go to [console.developers.google.com](https://console.developers.google.com/)
  and login with your account. Press `Create Project` and then `Create` buttons.

  ![Google Developers Console](/images/m2/sociallogin/api/google/step-1.png)

  - Enter `Project Name` and press `Create` button.

  ![New Project](/images/m2/sociallogin/api/google/step-2.png)

  - Go to `Credentials` page and switch to `OAuth consent screen`.
    Fill `Application name` and add your site domain to `Authorized domains` and press `Save`.

  ![Credentials](/images/m2/sociallogin/api/google/step-3.png)

  - Go back to `Credentials` page and in `Create credentials` dropdown select `OAuth Client ID`

  ![OAuth Client ID](/images/m2/sociallogin/api/google/step-4.png)

  - On the `Create OAuth Client ID` page select `Web application` type and fill the fields:

      - Name
      - In `Authorized JavaScript origins` enter your site url
      - In `Authorized redirect URIs` fill `https://[your.domain]/sociallogin/social/login/id/google/`

  ![Create OAuth Client ID](/images/m2/sociallogin/api/google/step-5.png)

  > If you are not sure about redirect URI, go to Magento admin
  >
  > **Stores > Configuration > Swissup Social Suite > Social login > Social Networks > Google**
  >
  > and copy generated value from `Redirect URI` field

  ![Redirect URI](/images/m2/sociallogin/api/google/step-6.png)

  - Press `Create` button

**2. Add app id and app secret to Social Login configuration:**

  - On `Credentials` page of your application, click on the application name
    in `OAuth 2.0 client IDs` list

    ![Credentials](/images/m2/sociallogin/api/google/step-7.png)

    and copy `Client ID` and `Client secret`.

    ![Client ID and Secret](/images/m2/sociallogin/api/google/step-8.png)

  - In Magento admin, go to
    `Stores > Configuration > Swissup Social Suite > API Credentials > Google`
    and insert `Client ID` and `Client secret` from your app.

    ![App Credentials](/images/m2/sociallogin/api/google/step-9.png)

**3. Now you can enable Google login feature in**
    `Stores > Configuration > Swissup Social Suite > Social login > Social Networks > Google`
