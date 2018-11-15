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

  - Press `Library` in the left panel, select `Google+ API` from the list

  ![Google+ API](/images/m2/sociallogin/api/google/step-3.png)

  and press `Enable`.

  ![Google+ API Enable](/images/m2/sociallogin/api/google/step-4.png)

  - On the `Overview` (or `Credentials`) page press `Create Credentials` button.

  ![Create Credentials](/images/m2/sociallogin/api/google/step-5.png)

  - You will see step-by-step wizard `Add credentials to your project`

      (select `Help me choose` from `Create Credentials` dropdown if you don't).

      ![Credentials](/images/m2/sociallogin/api/google/step-6.png)

      - _Step 1: Find out what kind of credentials you need_:

          - In `Which API are you using?` select `Google+ API`
          - In `Where will you be calling the API from?` select `Web server`
          - In `What data will you be accessing?` select `User data`
          - Press `What credentials do i need?` and proceed to step 2

          ![What kind of credentials you need](/images/m2/sociallogin/api/google/step-7.png)

      - _Step 2: Create an OAuth 2.0 client ID_:

          - Fill application name
          - In `Authorized JavaScript origins` enter your site url
          - In `Authorized redirect URIs` fill `https://[your.domain]/sociallogin/social/login/id/google`

          ![Create OAuth client ID](/images/m2/sociallogin/api/google/step-8.png)

          > If you are not sure about redirect URI, go to Magento admin
          >
          > **Stores > Configuration > Swissup Social Suite > Social login > Social Networks > Google**
          >
          > and copy generated value from `Redirect URI` field

          ![Redirect URI](/images/m2/sociallogin/api/google/step-9.png)

          - Press `Create OAuth client ID` button

      - _Step 3: Set up the OAuth 2.0 consent screen_:

          - Select your email address
          - Fill `Product name shown to users`
          - Optionally, press `More customization options` and fill your `Homepage URL`
          - Press `Continue` and on `Download credentials` select `I'll do this later`
          to finish application configuration

          ![Consent Screen Setup](/images/m2/sociallogin/api/google/step-10.png)

**2. Add app id and app secret to Social Login configuration:**

  - On `Credentials` page of your application, click on the application name
    in `OAuth 2.0 client IDs` list

    ![Credentials](/images/m2/sociallogin/api/google/step-11.png)

    and copy `Client ID` and `Client secret`.

    ![Client ID and Secret](/images/m2/sociallogin/api/google/step-12.png)

  - In Magento admin, go to
    `Stores > Configuration > Swissup Social Suite > API Credentials > Google`
    and insert `Client ID` and `Client secret` from your app.

    ![App Credentials](/images/m2/sociallogin/api/google/step-13.png)

**3. Now you can enable Google login feature in**
    `Stores > Configuration > Swissup Social Suite > Social login > Social Networks > Google`
