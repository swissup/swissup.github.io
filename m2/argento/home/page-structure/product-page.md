---
layout: default
title: Argento Home Product Page
keywords: Argento Home, product page, soldtogehter, product questions, tabs
category: Argento
---

# Product Page
{:.no_toc}

* TOC
{:toc}

### Layout

Argento Home uses `1column` layout for the product page. Follow our [customization guide](/m2/argento/customization/change-page-layout/)
to change it to another one. Or use [product page builder](/m2/argento/customization/theme-editor/#product-page-builder) in theme editor.

### Add to Cart Form

![Add to cart form](/images/m2/argento/home/product/add-form.png)

Main part of product page is "add to cart" form. It is on the top of the page  in Argento Home. "Add to cart" consists of product images gallery (left side) and form itself (right side).

Product images gallery is powered by [Lightbox Pro](/m2/extensions/lightboxpro/) module. This module allows you to change thumbnails position and size, enable zoom and change image popup type.

#### Quantity field

Qty field is powered by [Quantity Switcher](/m2/extensions/qty-switcher/) module. By default qty field has "+" and "-" buttons to change value. You can change +/- buttons (arrows) with dropdown. Check module docs to figure out how to do this.

*Notice:* For configurable products qty buttons don't change value until user select all of the product options.

### Frequently Bought Together

![Frequently Bought Together](/images/m2/argento/home/product/bought-together.png)

It is "Frequently bouth together" block of [Sold Together](/m2/extensions/soldtogether/) module. Check its docs to get more details to configure it.

### Tabs

![Tabs](/images/m2/argento/home/product/tabs.png)

Next important part of product page is product tabs. They located under "Add to Cart" form (or "Frequently Bought Together" block when it is visisble). Product tabs powered by [EasyTabs](m2/extensions/easytabs/) module. You can rearrange, disable existing and create new tabs with this module. Dive deep into module features and intefaces by checking its docs.

#### Details tab

This is the tab with product description.

Argento Home has enabled [Photo in Description](/m2/argento/customization/add-photo-in-description/) feature. It adds product into description automatically. To disable feature you need to create cutom theme and set *target* as empty string in `view.xml`. For more details check article about this feature.

PS: you can disable "Photo in Description" via theme editor. Check [product page builder](/m2/argento/customization/theme-editor/#product-page-builder). Subsection "Additional".

#### Reviews tab

![Reviews tab](/images/m2/argento/home/product/tab-reviews.png)

This tab shows product reviews and it is default Magento functionality.

#### Questions tab

![Questions tab](/images/m2/argento/home/product/tab-questions.png)

This is product questions tab. It shows "Product Questions" block of [AskIt](/m2/extensions/askit/) module. As always feel free to know more about AskIt at its docs.

### Customers ... Also Bought

![Customer Also Bought](/images/m2/argento/home/product/customers-also-bought.png)

At the bottom of product page there is a block where you can promote your other products. It is "Customers Also Bought" from [Sold Together](/m2/extensions/soldtogether/) module. You can configure content of this block or show random products from current category. Check module docs to find out how to do this.

##### Next up
{:.no_toc}

- [Small css customizations](/m2/argento/customization/custom-css/)
- [Create Argento based custom theme](/m2/argento/customization/custom-theme/)
- [Argento Home docs homepage](/m2/argento/home/)
