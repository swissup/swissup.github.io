---
layout: default
title: Lightbox Pro use cases
description: magento lightbox module installation
keywords: " magento lightbox popup, magento lightbox extension, magento
product lightbox extension, lightbox magento extension "
category: Lightbox Pro
---

# Lightbox Pro

- [Creating AJAX based lightbox window with html content based on content of CMS page](#creating-ajax-based-lightbox-window-with-html-content-based-on-content-of-cms-page)
- [Creating image gallery using Lightbox Pro widget](#creating-image-gallery-using-lightbox-pro-widget)
- [Placing lightbox widget into categories description](#placing-lightbox-widget-into-categories-description)
- [Placing youtube video in lightbox window on the cms page](#placing-youtube-video-in-lightbox-window-on-the-cms-page)


### Creating AJAX based lightbox window with html content based on content of CMS page

Please go to `Admin > CMS` and follow next steps:

1.   At CMS pages please create new CMS page with content you want to show in lightbox window.
2.   In the `Content` field specify the text and click on **Save block**.
3.   In the `Design settings` please set Layout * to ”empty” so that page will output only the content without store layout.

Now you are ready to create ajax based lightbox with the next code:

```
<a href="&#123;&#123;store url="YOURCMSCONTENTPAGEURL"&#125;&#125;" onclick="return hs.htmlExpand(this, { objectType: 'ajax'})" class="highslide">Ajax Modal Window </a>.
```

**Note**: you should change YOURCMSCONTENTPAGEURL to URL of page you have created in #1.

### Creating image gallery using Lightbox Pro widget

![Lightbox popup](/images/m1/extensions/lightbox-pro/use-case-widget-gallery.png)

Go `Admin > CMS > Pages` and do as follows:

-   Open the page where you want to place the gallery.
-   At `Page information` tab in the Content field please press **Insert Widget** button.
-   At `Widget type` select **Lightbox Pro Gallery**.
-   At `Widget options` tab browse the gallery images. Click on `Insert Widge`t at upper right corner of the page.
-   Save page.

### Placing lightbox widget into categories description

Go to `Admin > CMS` and do as follows:

-   At `Static blocks` add new one.
-   At `Block information` tab press **Insert Widget** button in the `Content` field. Click on **Save block**.
-   Select `Lightbox Pro Image widget` type and fill the appropriate fields.
-   Click on **Save Block**.
-   Then go to `System > Catalog > Manage Categories` and select `Display settings` tab.
-   In the `CMS block` field select the block, that you created before and click on **Save category**.

### Placing youtube video in lightbox window on the cms page

Go to `Admin > CMS > Pages` and follow next steps:

1. Select the page to edit.
2. At `Page information` tab press **Insert Widget** button in the `Content` field.
3. Select `LightboxPro Inner HTML widget` type.
4. Fill the fields according to your needs.