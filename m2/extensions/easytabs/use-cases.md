---
layout: default
title: Easy Tabs Use Cases
description: magento 2 product tabs use cases
keywords: " magento 2 product tabs, magento 2 product tabs extension free, add tabs, review out of tabs, review block
magento 2 product page "
category: Easy Tabs
---

# Easy Tabs Use Cases
{:.no_toc}

* TOC
{:toc}

### Activate and scroll to tab on external link click

If you need direct link to tab, use tab `alias` in link `href` attribute and insert link where you need:

```html
<a href="#TAB_ALIAS_FROM_BACKEND" data-action="activate-tab">Description</a>
```
For example, the link below will activate the description tab:

```html
<a href="#product.info.description" data-action="activate-tab">Description</a>
```

### Dynamic tab titles

Use `eval` directive to call block methods in tab title.

Block    | Dynamic Tab Title
---------| -----------------------------
Reviews  | `{% raw %}{{eval code="getTabTitle()"}}{% endraw %}`

### Unset multiple blocks

Use comma to unset multiple block from layout.

Examples:

1. `block_to_unset1,block_to_unset2`
2. `catalog.product.related,product.info.upsell`

### Askit example

![Askit example](/images/m2/easytabs/usecase-askit.gif)

Field                | Value
---------------------|------------------------------
Title                | Questions
Alias                | questions
Block Type           | Custom Block
Sort Order           | 18
Tab Options Block    | Swissup\Askit\Block\Question\Widget
Tab Options Template | template.phtml
Tab Options Unset    | askit_listing,askit_form

### Product reviews move from tabs

From time to time our customers ask us if it is possible to move product reviews out of tabs at product page.

There is no simple one click solution for this unfortunately. First, **disable review tab** in Easytabs interface in Magento Admin.

Next you have to create [custom Magento theme](/m2/argento/customization/custom-theme/).

Then create file `Magento_Catalog/layout/catalog_product_view.xml` in your custom theme. If you alreade have such file then go to next paragraph. Add basic declaration to you new file.

```xml
<?xml version="1.0"?>
<page xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:noNamespaceSchemaLocation="urn:magento:framework:View/Layout/etc/page_configuration.xsd">
    <body>
        <!-- Add you custom layout instructions here -->
    </body>
</page>
```

Before closing BODY node (`</body>`) add instructions from snippet below.

```xml
<referenceContainer name="content">
    <container name="reviews-wrapper" htmlTag="div" htmlId="tab-label-reviews" htmlClass="reviews-wrapper active">
         <block class="Magento\Review\Block\Product\Review" name="product.reviews.block" as="reviews" template="Magento_Review::review.phtml" ifconfig="catalog/review/active" before="-">
            <block class="Magento\Review\Block\Form" name="product.review.form" as="review_form" ifconfig="catalog/review/active">
                <arguments>
                    <argument name="jsLayout" xsi:type="array">
                        <item name="components" xsi:type="array">
                            <item name="review-form" xsi:type="array">
                                <item name="component" xsi:type="string">Magento_Review/js/view/review</item>
                            </item>
                        </item>
                    </argument>
                </arguments>
                <container name="product.review.form.fields.before" as="form_fields_before" label="Review Form Fields Before"/>
            </block>
        </block>
        <block class="Magento\Framework\View\Element\Text" name="product.reviews.addJs">
            <arguments>
                <argument name="text" xsi:type="string">
<![CDATA[
<script type="text/javascript">
require([
    'jquery'
], function ($) {
    'use strict';

    $('#tab-label-reviews').attr('role', 'tab').trigger('beforeOpen');
    $(function () {
        $('.product-info-main .reviews-actions a').click(function (event) {
            var anchor;

            anchor = $(this).attr('href').replace(/^.*?(#|$)/, '');
            anchor = anchor === 'reviews' ? 'customer-reviews' : anchor;
            $('html, body').animate({
                scrollTop: $('#' + anchor).offset().top - 50
            }, 300);
        });
    });
});
</script>
]]>
                </argument>
            </arguments>
        </block>
    </container>
</referenceContainer>
```

### Add tab for custom content

If you need to add some tab that should be visible on defined products (i.e. __Measuring table__) - you can use the **_Block type_: Product attribute** option.

1. Create the Product attribute of **TEXTAREA** type with name **measuring_table**. Set **Allow HTML Tags on Storefront = Yes** and **Visible on Catalog Pages on Storefront = Yes**
2. Apply that attribute to attribute set that your products will be assigned (i.e. **Tshirts** ).
3. Run `bin/magento index:reindex` command to apply that chagnes to existing products.
4. Go to your product settings page in admin and check the text field where
you can add the content (i.e. measuring tabe, custom descriptions or other additional info).
5. Go to `Admin > Swissup > EasyTabs > Add tab` - and create the Tab: **Measuring table** with the **_Block type_: Product attribute**. Choose your Attribute Code: **measuring_table**.
6. Save and clear the cache.

**P.S.:** Your custom tabs will be visible only on products that you filled **Measuring table** admin field. Other products will have it invisible.
