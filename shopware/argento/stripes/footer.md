---
layout: default
title: Argento Stripes Footer
description: Argento Stripes for Shopware Footer
category: Argento Shopware
gallery:
  - href: /images/shopware/argento/stripes/footer/footer.png
    src: /images/shopware/argento/stripes/footer/small/footer.png
    title: Argento Stripes Footer
    w: 2780
    h: 1397
---

# Argento Stripes Footer

{% include gallery.html images=page.gallery class="phone-up-1 tablet-up-3 photoswipe scroll mdl-typography--text-center" %}

<p class="mdl-typography--text-center"><em>Click the image to enlarge</em></p>

In this article, we'll describe Argento Stripes footer elements.

### Footer Top

![Footer Top](/images/shopware/argento/stripes/footer/footer-top.png)

The top footer block contains three columns:

 - Footer image. It can be changed in the theme configuration: [Footer Image Configuration][footer_media]
 - Contact information. Contacts can be changed in `footer.serviceHotline` and `footer.serviceContactLink` snippets. More about snippets here: [Shopware Snippets][edit_snippet]
 - Social icons. You can select icons to show in theme configuration, more information here: [Social Icons Configuration][social_icons]

### Footer Navigation

![Footer Navigation](/images/shopware/argento/stripes/footer/footer-nav.png)

To display some useful store links in the footer, you need to create a new category tree:

![Footer Navigation Category Tree](/images/shopware/argento/stripes/footer/config/footer-nav-cats.png)

and select it as footer navigation entry point in the sales channel configuration:

![Footer Navigation Entry Point](/images/shopware/argento/stripes/footer/config/footer-nav-store.png)

### Footer Logos

![Footer Logos](/images/shopware/argento/stripes/footer/footer-logos.png)

In this section, the theme will automatically display the logos for payment methods enabled in your store.

Read more about payment methods in Shopware 6 manual: [Payment Methods Settings][payment_methods]

### Footer Bottom

![Footer Bottom](/images/shopware/argento/stripes/footer/footer-bottom.png)

The bottom footer section contains three rows:

 -  Service menu. It can be created in the same way as Footer Navigation. Create category with menu items:

    ![Footer Bottom](/images/shopware/argento/stripes/footer/config/footer-service.png)

    and assign it to footer service navigation entry point in the sales channel configuration.

 -  VAT notice. It can be changed in `footer.includeVat` snippet. More about snippets here: [Shopware Snippets][edit_snippet]
 -  Copyright. It can be changed in `argento.footer.copyright` snippet. More about snippets here: [Shopware Snippets][edit_snippet]

[footer_media]: /shopware/argento/stripes/configuration/footer/#footer-media
[edit_snippet]: https://docs.shopware.com/en/shopware-6-en/settings/snippets#edit-snippet
[social_icons]: /shopware/argento/stripes/configuration/footer/#social-icons
[payment_methods]: https://docs.shopware.com/en/shopware-6-en/settings/Paymentmethods
