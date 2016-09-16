---
layout: default
title: Google API Configuration
description: magento Google API configuration
keywords: >
  magento social media extension, magento social login extension,
  magento social media, magento social media plugin, magento social share,
  magento social share extension, magento facebook login
category: Social Suite
---

### Google API Creation

Before starting using Google integration features configuration, you have to
create application. Please go [Google API Console](https://console.developers.google.com/project){:target="_blank"}
and follow next recommendations:

![Create API](/images/socialsuite/magentosocialsuiteconfig6.png)

1.  Please press **Create Project** button. Then fill the appropriate
    fields and click on **Create**.

    ![New Project](/images/socialsuite/magentosocialsuiteconfig7.png)

2.  At the left top of the page click on **APIs&auth** and select **Credentials** condition.
    A new form will be opened.

    ![Credentials](/images/socialsuite/magentosocialsuiteconfig8.png)

3.  Put the mark on **Web Application**. After that fill next fields.
    Please notice, that in the **Authorised Redirect URL** you should enter the
    following **GOOGLE app REDIRECT URI** parameter `http://YOURDOMAIN/customer/account/login/`

    ![Web Application](/images/socialsuite/magentosocialsuiteconfig9-1.png)

4.  Now you see your **Client ID** and **Client Secret key**.
    Please use it in the configuration process.

    ![Client ID and Client Secret Key](/images/socialsuite/magentosocialsuiteconfig10.png)


___

#### After you set Google Api you can check:

*   [Facebook API Creation](../facebook/)
*   [Twitter API creation](../twitter/)
*   [Yahoo API creation](../yahoo/)
*   [Support](https://swissuplabs.com/contacts/)
*   [Forum](https://swissuplabs.com/magento-forum/)
