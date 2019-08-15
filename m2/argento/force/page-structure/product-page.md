---
layout: default
title: Argento Force Product Page
keywords: Argento Force, Stripes, product page, soldtogehter, product questions, tabs, sizing chart
category: Argento
---

# Product Page
{:.no_toc}

* TOC
{:toc}

### Layout

Argento Force uses `1column` layout for the product page. Follow our [customization guide](/m2/argento/customization/change-page-layout/)
to change it to another one.

### Add to Cart Form

![Add to cart form](/images/m2/argento/force/product/add-form.png)

Main part of product page is "add to cart" form. It is on the top of the page  in Argento Force. "Add to cart" consists of product images gallery (left side) and form itself (right side).

Product images gallery is powered by [Lightbox Pro](/m2/extensions/lightboxpro/) module. This module allows you to change thumbnails position and size, enable zoom and change image popup type.

For add to cart form we recommend:

 -  for product **"Size"** attribute set *"Catalog Input Type for Store Owner"* as **Dropdown**;
 -  for product **"Color"** attribute set *"Catalog Input Type for Store Owner"* as **Visual Swatch** and *"Use Product Image for Swatch if Possible"* as **Yes**.

#### Sizing Chart

![Sizing Chart](/images/m2/argento/force/product/sizing-chart.png)

Please pay close attention to screenshot in "Add to Cart Form" paragraph. There is link "View Sizing Chart". It opens sizing chart popup.

"View Sizing Chart" link appears near size otion at every product page. It is added via CMS Block.

Block identifier is `sizing_chart`. If you want to disable sizing char then simple disable CMS Block via Magento Admin.

If you need to modifiy content of the popup then modify content inside `<div data-role="sizing-chart" ...>...</div>`. Remember to disable WYSIWYG editor before everything. All the magic happens at the bottom of content with JavaScript. You can rename link or add it in other place their. It requires basic JavaScript knowledge. Or you can conatct our support ad they will be glad to help you.

##### CMS Block original content
{:.no_toc}
{:.collapsible.collapsed}

```html
<div data-role="sizing-chart" style="display: none;">
    <h3 style="margin: -10px 0 20px;">Sizing Charts</h3>
    <h4>Women</h4>
    <table class="table-grid table-striped">
        <thead>
            <tr>
                <th>Size</th>
                <th>XS</th>
                <th>S</th>
                <th>S</th>
                <th>M</th>
                <th>M</th>
                <th>L</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>EU</td>
                <td>32</td>
                <td>34</td>
                <td>36</td>
                <td>38</td>
                <td>40</td>
                <td>42</td>
            </tr>
            <tr>
                <td>UK</td>
                <td>4</td>
                <td>6</td>
                <td>8</td>
                <td>10</td>
                <td>12</td>
                <td>14</td>
            </tr>
            <tr>
                <td>US</td>
                <td>0</td>
                <td>2</td>
                <td>4</td>
                <td>6</td>
                <td>8</td>
                <td>10</td>
            </tr>
            <tr>
                <td>Bust</td>
                <td>79.5cm / 31"</td>
                <td>82cm / 32"</td>
                <td>84.5cm / 33"</td>
                <td>89.5cm / 35"</td>
                <td>94.5cm / 37"</td>
                <td>99.5cm / 39"</td>
            </tr>
            <tr>
                <td>Waist</td>
                <td>61.5cm / 24"</td>
                <td>64cm / 25"</td>
                <td>66.5cm / 26"</td>
                <td>71.5cm / 28"</td>
                <td>76.5cm / 30"</td>
                <td>81.5cm / 32"</td>
            </tr>
            <tr>
                <td>Hip</td>
                <td>86.5cm / 34"</td>
                <td>89cm / 35"</td>
                <td>91.5cm / 36"</td>
                <td>96.5cm / 38"</td>
                <td>101.5cm / 40"</td>
                <td>106.5cm / 42"</td>
            </tr>
        </tbody>
    </table>
    <h4>Men</h4>
    <table class="table-grid table-striped">
        <thead>
            <tr>
                <th>Size</th>
                <th>XS</th>
                <th>S</th>
                <th>M</th>
                <th>L</th>
                <th>XL</th>
                <th>XXL</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>UK/US</td>
                <td>34</td>
                <td>36</td>
                <td>38</td>
                <td>40</td>
                <td>42</td>
                <td>44</td>
            </tr>
            <tr>
                <td>Neck</td>
                <td>37cm / 14.5"</td>
                <td>38cm /15"</td>
                <td>39.5cm / 15.5"</td>
                <td>41cm / 16"</td>
                <td>42cm / 16.5"</td>
                <td>43cm / 17"</td>
            </tr>
            <tr>
                <td>Chest</td>
                <td>86.5cm / 34"</td>
                <td>91.5cm / 36"</td>
                <td>96.5cm / 38"</td>
                <td>101.5cm / 40"</td>
                <td>106.5cm / 42"</td>
                <td>111.5cm / 44"</td>
            </tr>
            <tr>
                <td>Waist</td>
                <td>71.5cm / 28"</td>
                <td>76.5cm / 30"</td>
                <td>81.5cm / 32"</td>
                <td>86.5cm / 34"</td>
                <td>91.5cm / 36"</td>
                <td>96.5cm / 38"</td>
            </tr>
            <tr>
                <td>Seat</td>
                <td>90cm / 35.4"</td>
                <td>95cm / 37.4"</td>
                <td>100cm / 39.4"</td>
                <td>105cm / 41.3"</td>
                <td>110cm / 43.3"</td>
                <td>115cm / 45.3"</td>
            </tr>
        </tbody>
    </table>
</div>
<script type="text/javascript">
require([
    'Magento_Ui/js/lib/view/utils/async',
    'Magento_Ui/js/modal/modal',
    'mage/translate'
], function ($, modal) {
    'use strict';
    $.async('[data-role=swatch-options] .swatch-attribute.size .swatch-attribute-options', function (element) {
        var html = [
            '<div class="action-wrapper">',
                '<a href="#" data-action="view-sizing-chart">' +  $.mage.__('View sizing chart') + '</a>',
            '</div>'
        ].join('');
        $(element).addClass('with-link').append(html);
        $(element).find('option[value=0]').text($.mage.__('Select a Size'));
        modal({
                responsive: true,
                trigger: '[data-action=view-sizing-chart]',
                buttons: []
            },
            $('[data-role=sizing-chart]').show()
        );
    });
});
</script>
```

#### Related products

There is a list of related products under form. You can maintain that list by yourself in Magento Admin. Check how to do it at [Magento Docs](https://docs.magento.com/m2/ce/user_guide/catalog/settings-advanced-related-products.html#to-set-up-related-products).


#### Sticky tocart button

![Sticky tocart](/images/m2/argento/force/product/sticky-tocart.png)

Argento Force has enabled [sticky tocart](/m2/argento/customization/add-sticky-tocart/) feature.

When user scrolls down product page "Add to cart" button sticks to window's top when button's original position is out of viewport.

Sticky tocart is disbaled for mobile and devices with small screens.

### Tabs

![Tabs](/images/m2/argento/force/product/tabs.png)

Next important part of product page is product tabs. They located under "Add to Cart" form. Product tabs powered by [EasyTabs](m2/extensions/easytabs/) module. You can rearrange, disable existing and create new tabs with this module. Dive deep into module features and intefaces by checking its docs.

Magento create some tabs for your store during Argento Force installtion.

#### Details tab

This is the tab with product description.

Argento Force has enabled [Photo in Description](/m2/argento/customization/add-photo-in-description/) feature. It adds product into description automatically. To disable feature you need to create cutom theme and set *target* as empty string in `view.xml`. For more details check article about this feature.

#### More Info tab

![More Info tab](/images/m2/argento/force/product/tab-more-info.png)

This tab shows additional product attributes. Product attribute must have *"Visible on Catalog Pages on Storefront"* property set to **Yes** to appear here.

Check [Product Attributes](https://docs.magento.com/m2/ce/user_guide/stores/attributes-product.html) article to know more.

#### Bought Together tab

![Bought Together tab](/images/m2/argento/force/product/tab-bought-together.png)

It shows "Frequently bouth together" block of [Sold Together](/m2/extensions/soldtogether/) module. Check its docs to get more details for to configure it.

#### Reviews tab

![Reviews tab](/images/m2/argento/force/product/tab-reviews.png)

This tab shows product reviews and it is default Magento functionality.

#### Questions tab

![Questions tab](/images/m2/argento/force/product/tab-questions.png)

This is product questions tab. It shows "Product Questions" block of [AskIt](/m2/extensions/askit/) module. As always feel free to know more about AkIt at its docs.

#### Other tabs

For downloadbale product there is tab with samples. Its alians is `samples`.


### Customers ... Also Bought

![Customer Also Bought](/images/m2/argento/force/product/customers-also-bought.png)

At the bottom of product page there is a block where you can promote your other products. It is "Customers Also Bought" from [Sold Together](/m2/extensions/soldtogether/) module. You can configure content of this block or show random products from current category. Check module docs to find out how to do this.

##### Next up
{:.no_toc}

- [Small css customizations](/m2/argento/customization/custom-css/)
- [Create Argento based custom theme](/m2/argento/customization/custom-theme/)
- [Argento Force docs homepage](/m2/argento/force/)
