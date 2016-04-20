---
layout: default
title: Social Suite Configuration
description: magento social suite module configuration
keywords: >
  magento social media extension, magento social login extension,
  magento social media, magento social media plugin, magento social share,
  magento social share extension, magento facebook login
category: Social Suite
---

# Social Suite configuration

*   [Basic Setup](#basic-setup)
*   [Google API Creation](#google-api-creation)
*   [Facebook API creation](#facebook-api-creation)

### Basic Setup

1.  Navigate to `System > Configuration > Templates-Master > Social Suite` and
enable extension for any store you need.
2.  Set Up New [Facebook Application](https://developers.facebook.com/apps){:target="_blank"}
3.  Set Up New [Google  Application](https://code.google.com/apis/console/#access){:target="_blank"}
4.  If you are planning on using **XFBML** buttons, you will need to edit some
    template files:
    *   Change the opening `html` tag to read:

        ```html
        <html xmlns:fb="http://ogp.me/ns/fb#">
        ```
    at next template files:

        ```
        app/design/frontend/[package]/[theme]/template/page/1column.phtml
        app/design/frontend/[package]/[theme]/template/page/2columns-left.phtml
        app/design/frontend/[package]/[theme]/template/page/2columns-right.phtml
        app/design/frontend/[package]/[theme]/template/page/3columns.phtml
        ```
    *   Code listed below should be added to **phtml** file in order to display
        social buttons.
        For example `app/design/frontend/[package]/[theme]/template/catalog/product/view.phtml`

        ```php
        <?php echo $this->getLayout()->createBlock('core/template')->setTemplate('tm/socialsuite/facebook_like/like.phtml')->toHtml(); ?>
        ```
    *   Code listed below should be added to phtml file in order to display
        social buttons. For example `app/design/frontend/[package]/[theme]/template/catalog/product/list.phtml`

        ```php
        <?php echo Mage::helper('socialsuite')->getCategoryLikeButton($_product) ?>
        ```

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
    following **GOOGLE app REDIRECT URI** parameter `http://YOURDOMAIN/social/socialsuite/auth/gtunnel/`

    ![Web Application](/images/socialsuite/magentosocialsuiteconfig9-1.png)

4.  Now you see your **Client ID** and **Client Secret key**.
    Please use it in the configuration process.

    ![Client ID and Client Secret Key](/images/socialsuite/magentosocialsuiteconfig10.png)

### Facebook API Creation

Before starting using Facebook integration features configuration, you have to
create application. Please go to [developers.facebook.com](https://developers.facebook.com){:target="_blank"}.
At first click on **My Apps** at the top of the page and select the **Add a new App** condition
from the drop down.

![Create API](/images/socialsuite/facebook1.png)

![Choose website](/images/socialsuite/facebook2.png)

1.  Now you see a new form that must be filled. Press **Create App ID** button.

    ![Create App ID](/images/socialsuite/facebook3.png)

    After filling your info pass to **Next Steps** section:

    ![Next steps](/images/socialsuite/facebook4.png)

2.  At the left navigation tree please choose **Dashboard**. Now you see your
    **App ID** and **App secret key**, that should be set in the extension configuration.

    ![Dashboard](/images/socialsuite/facebook5.png)

3.  Please choose **Settings** condition and before you continue to fill the
    appropriate fields, you should **Add Platform**.

    ![Add platform](/images/socialsuite/facebook6.png)

4.  Now go to **Advanced** tab at the top of the page. And check
    if **Client OAuth Login** condition is set to **Yes**. That's all.

    ![Client OAuth Login](/images/socialsuite/facebook7.png)