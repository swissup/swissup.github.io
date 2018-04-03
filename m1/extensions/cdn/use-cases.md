---
layout: default
title: CDN DNS based uses cases
description: How to configurate dns based cdn providers
keywords: >
    magento cdn, magento cdn cloudflare, magento maxcdn, magento keycdn, magento cdn.net
category: CDN
---

# Use Cases

 - [CloudFlare](#cloudflare)
 - [KeyCDN](#keycdn)
 - [MaxCDN](#maxcdn)
 - [CDN77](#cdn77)

## CloudFlare

1.  Create a CloudFlare account
If you don’t have a CloudFlare account, create one and add a domain using this [tutorial](https://support.cloudflare.com/hc/en-us/articles/201720164-Step-2-Create-a-CloudFlare-account-and-add-a-website).

2.  Create a subdomain
    Using cPanel, create a subdomain for your CDN content and point it to your Magento install directory. Here my install is in public_html/magento.

    You can call the subdomain anything you like but we recommend something similar to cdn for ease of recognition.

    ![Create subdomain](/images/m1/extensions/cdn/cloudflare/create_subdomain_cpanel.png)

3.  Create a CNAME record in CloudFlare’s DNS settings
    Follow this guide to add a CNAME record in your CloudFlare dashboard, though instead of using “blog” use “cdn” or whatever subdomain you created in step 2, as below.

![Create cname](/images/m1/extensions/cdn/cloudflare/cloudflare_cdn_cname.png)

4.  Review CloudFlare’s DNS settings
    Check that the only record that has its traffic routed through CloudFlare’s servers is the one you created in step 3.

    In the image below you can see that only the CNAME record cdn is passing through CloudFlare’s network, as indicated by the orange cloud.

    If there are any other records that are passing through CloudFlare’s network, i.e. those that have an orange cloud, click on them and ensure they are grey and therefore no longer being passed through CloudFlare’s network.

![Review settings](/images/m1/extensions/cdn/cloudflare/cloudflare_dns.png)

5.  Edit Url
    Navigate to System > Configuration > Templates Master > CDN > Dns-Based Cloud > Url
    Set you cdn url and save

![Option](/images/m1/extensions/cdn/cdn-based-option.png)

6.  Clear your Magento cache by navigating to System > Cache Management > Flush Magento Cache
    Your Magento 1.9 store’s static content should now be being served by CloudFlare and you should notice a performance improvement.

## KeyCDN

1.  Create a [pull zone](https://www.keycdn.com/support/create-a-pull-zone/) or a [push zone](https://www.keycdn.com/support/create-a-push-zone/).
2.  Log in to the Magento admin panel.
3.  Edit Url

    Navigate to System > Configuration > Templates Master > CDN > Dns-Based Cloud > Url
    Set you cdn url
    ![Option](/images/m1/extensions/cdn/cdn-based-option.png)

4.  Once this is complete save the config.
5.  Clear your Magento cache by navigating to System > Cache Management > Flush Magento Cache

## MaxCDN

1.  Create a [Pull Zone](https://www.maxcdn.com/one/tutorial/how-to-create-a-pull-zone/)
2.  Log in to the Magento admin panel.
3.  Edit Url

    Navigate to System > Configuration > Templates Master > CDN > Dns-Based Cloud > Url
    Set you cdn url
    ![Option](/images/m1/extensions/cdn/cdn-based-option.png)

4.  Once this is complete save the config.
5.  Clear your Magento cache by navigating to System > Cache Management > Flush Magento Cache

## CDN77

1.  Log in to the Magento admin panel.
2.  Edit Url

    Navigate to System > Configuration > Templates Master > CDN > Dns-Based Cloud > Url
    Set you cdn url
    ![Option](/images/m1/extensions/cdn/cdn-based-option.png)

3.  Update the following with your CDN URL or CNAME (You will find both under [Manage CDNs](https://client.cdn77.com/auth/login) in CDN77 CROP).

4.  Once this is complete save the config.
5.  Clear your Magento cache by navigating to System > Cache Management > Flush Magento Cache

