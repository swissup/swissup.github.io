---
layout: default
title: Twitter API Configuration
description: Twitter API Configuration
keywords: configure twitter api
category: SocialLogin
---

# Twitter API Configuration

To use Twitter login feature, you need to create Twitter application and link
it to your site. Twitter will generate application id and secret, which you
need to copy and set in Social Suite extension configuration.

**1. Create Twitter developer account:**

  - Go to [developer.twitter.com](https://developer.twitter.com/)
  and press `Apply` link at top right and then `Apply for a developer account`.

    ![Twitter Developer Account](/images/m2/sociallogin/api/twitter/step-1.png)

  - Select Twitter account to use and add phone number if you didn't add it before.

  - Follow steps to create account. In `Describe in your own words what you are building`
    you can write something like this:

    ```txt
    1. I am using Twitter's API to login or register customers in Magento 2 store.
    2. I do not plan to analyze Tweets, i only need user email and name to login or create account in shop.
    3. No, my solution will not tweet, retweet or like content.
    4. I will not display Twitter content in my solution. Only user email and name will be displayed in customer account.
    ```

  - Wait until developer account will be approved.

    ![Twitter Developer Account Approved](/images/m2/sociallogin/api/twitter/step-2.png)

**2. Configure Twitter application:**

  - On [developer.twitter.com](https://developer.twitter.com/) go to `Apps`
  and press `Create An App`.

    ![Create An App](/images/m2/sociallogin/api/twitter/step-3.png)

  - Fill required app details: App name, Application description, Website URL
    and Tell us how this app will be used.

    ![App Details](/images/m2/sociallogin/api/twitter/step-4.png)

    Check `Enable Sign in with Twitter` checkbox and fill `Callback URLs`
    with value `https://[your.domain]/sociallogin/social/login/id/twitter`.

    ![Enable Sign in with Twitter](/images/m2/sociallogin/api/twitter/step-5.png)

    > If you are not sure what callback URL to use, go to Magento admin
    >
    > **Stores > Configuration > Swissup Social Suite > Social login > Social Networks > Twitter**
    >
    > and copy generated value from `Redirect URI` field.

    ![Redirect URI](/images/m2/sociallogin/api/twitter/step-6.png)

    Also fill `Terms of Service URL` and `Privacy policy URL`, as they are required to enable
    `Request email address from users` on the next step. Finally, press `Create` button.

    ![Finish App Creation](/images/m2/sociallogin/api/twitter/step-7.png)

  - Go to `Permissions` tab and press `Edit`. In `Access permission` select `Read-only`.
  In `Additional permissions` check `Request email address from users` checkbox.
  Press `Save` button.

    ![App Permissions](/images/m2/sociallogin/api/twitter/step-8.png)

**3. Set app id and secret in Social Login configuration:**

  - In your application, go to `Keys and tokens` page and copy `Consumer API keys`.

    ![Keys and tokens](/images/m2/sociallogin/api/twitter/step-9.png)

  - In Magento admin, go to
    `Stores > Configuration > Swissup Social Suite > API Credentials > Twitter`
    and insert `Consumer Key` and `Consumer Secret` from your app.

    ![App Credentials](/images/m2/sociallogin/api/twitter/step-10.png)

**4. Now you can enable Twitter login feature in**
    `Stores > Configuration > Swissup Social Suite > Social login > Social Networks > Twitter`
