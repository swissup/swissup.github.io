---
layout: default
title: Easy Banners use cases
description:
keywords: "magento banner, magento banner slider, adding magento banners,
magento extension, magento module"
category: Easy Banners
---

# Use cases

-   [Placing banner on Checkout page](#placing-banner-on-checkout-page)
-   [Placing banner on Homepage](#placing-banner-on-homepage)
-   [Placing banner on Product page](#placing-banner-on-product-page)
-   [How to create banner with Free Shipping information](#how-to-create-banner-with-free-shipping-information)
-   [How to track banner clicks on link](#how-to-track-banner-clicks-on-link)

Go `Admin > Templates-Master > Easy Banner > Manage Banners`.

### Placing banner on Checkout page

Click on a banner that should be changed. At **Banner information** choose a **Conditions** tab. Then follow steps below:

1 Add new condition by clicking the green plus button.
2 Select and click the “page” option in the appeared conditions dropdown.
3 Then click on three dots near the “is one of” line.
4 Now you see an input field with icons on the right. Please click on the blue **Open Chooser** icon.
5 Select the page where you want to show the banner. In order to make a banner shown on the checkout page, please select the **checkout_onepage_index** value.
6 Press **Save Banner**.

### Placing banner on Homepage

You can use the sample with the checkout page. Please except **item # 5** in order to repeat the steps mentioned above. Choose the **cms_index_index** value.

### Placing banner on Product page

**Note**: the process of placing banner on the product page will be shown by the sample of creating banner Free Shipping to `logged in users` (before some date) for all items on the product page after price information.

After buying the Easy Banners extension, you will get a list of created placeholders. They are shown in left, right, central columns and in the page headers and footers.

**In order to place the banner on product page, you have to create a new placeholder. It must be linked to the one of root Magento blocks.**

In order to find the block and start working, please open the product view template `/app/design/frontend/base/default/template/catalog/product/view.phtml` and select any suitable block to you (it will be parent block to your placeholder). There you will see the line where the block **extrahint** (line 63 in original Magento template) is outputted. Please specify the name of this block. You can get the name from catalog.xml file on the line 228 of original Magento catalog.xml file: name=**product.info.extrahint**.

Then go `Admin > Templates-Master > Easy Banner > Manage Banners` and follow the settings shown below to create a placeholder:

-   In the `Placeholder Name field` enter the **product-extrahint**.
-   In the `Parent Block field` specify **product.info.extrahint**.
-   Please leave the `Position field` **blank.**
-   In the `Banners limit per rotate field` set 100 (you can output all banners that linked with placeholder at once).
-   In the `Status field` select **Enabled**.

### How to create banner with Free Shipping information

In `General information` fieldset do as follows:

-   In the `Name` field enter **Free Shipping
-   In the `Hide url` field select **No**.
-   In the `Target` field select **popup**.
-   In the `Sort Order` field set 0.
-   In the `Store view` field select **All Store views**.
-   In the `Placeholder` field enter **product-extrahint**.
-   In the `Status` field select **Enabled**.

`Content fieldset`:

-   In the `Title` field enter **Free Shipping**.
-   Please leave the `Url` field **blank**.
-   In the `Mode field` select **Html**.
-   Please leave the `Image` field **blank**.
-   In `Content` enter `<h3><span style="color: #993300; background-color: #ffcc99;">Free Shipping is available!</span></h3>`

`Conditions fieldset`:

All of these conditions are true:

**Customer Group is not one of 0 (Not Guest)**

**Date is equal or less than (please set date)**

Press Save Banner button.

### How to track banner clicks on link

This can be useful, if you want to track clicks on links with **tel:** or other non-standard scheme.

Banner html content:

```
<a id="link-id" href="tel:555">Call us</a>
```

Add the following js code to the bottom of html content:

```
<script>
$('link-id').observe('click', function(e) {
    new Ajax.Request('{{tm_banner_url}}');
});
</script>
```

### Placing banner in lightbox window

Our module allows you to show an important information for your customers as a banner in lightbox window. There are filters which allow you to limit a visibility of the banner. The following sample will show you how to display a banner in popup to users who were inactive for a long time. 

![Easy Banners](/images/m1/extensions/easybanners/banner-in-popup.png)

-   Go `Admin > Templates-Master > Easy Banner > Manage Banners` and click on **Add banner**. In case you edit the existing one, you have to change **Conditions** tab.
-   Please choose a condition **Lightbox/Awesomebar: Customer browsing time (seconds)** from a dropdown.

![Easy Banners](/images/m1/extensions/easybanners/banner-lightbox.png)

-   Enter a time in seconds. You can also define a day when this lightbox banner will be shown.

![Easy Banners](/images/m1/extensions/easybanners/use-case-conditions.png)

#### You can also check:

*   [Installation](../installation/)
*   [Managing placeholders](../managing-placeholders/)
*   [Managing banners](../managing-banners/)
*   [Support](https://swissuplabs.com/contacts/)
*   [Forum](https://swissuplabs.com/magento-forum/)