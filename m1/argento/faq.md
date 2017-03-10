---
layout: default
title: Argento Frequently Asked Questions
description: Argento Frequently Asked Questions
keywords: "argento faq, short header, floatbar, collapsed category description,
layout, argento logo, fontawesome, font awesome, icons"
category: Argento
---

# Argento FAQ

1. [How to disable short header and footer layout?](#how-to-disable-short-header-and-footer-layout)
2. [How to add additional item to the floatbar navigation?](#how-to-add-additional-item-to-the-floatbar-navigation)
3. [How to disable category description collapse?](#how-to-disable-category-description-collapse)
4. [How to disable category description collapse for specific category?](#how-to-disable-category-description-collapse-for-specific-category)
5. [How to add text collapse just like the category description?](#how-to-collapse-any-another-block)
6. [How to change layout for specific category?](#how-to-change-layout-for-specific-category)
7. [Magento 1.7 and older](#magento-17-and-older)
8. [Prepare logo image for mobile device](#prepare-logo-image-for-mobile-device)
9. [How to disable Questions tab on product page?](#how-to-disable-questions-tab-on-product-page)
10. [How to remove "0" as the default value for grouped products](#how-to-remove-0-as-the-default-value-for-grouped-products)
11. [How to use FontAwesome icons?](#how-to-use-fontawesome-icons)
12. [Missing elements at homepage](#missing-elements-at-homepage)
13. [Remove attributes that have no value](#remove-attributes-that-have-no-value)
14. [How to show hidden part of product name at category listing](#how-to-show-hidden-part-of-product-name-at-category-listing)
15. [How to make mobile menu expand on whole item area click](#howtomakemobilemenuexpandonwholeitemareaclick)

### How to disable short header and footer layout?

*This feature is available since Argento 1.5.2.*

 1. [Create](../theme-customization/small-changes/#custom-layout-update-file) `custom.xml` layout file
 2. Add the following code:

    ```xml
    <short_header_footer>
        <reference name="header">
            <action method="setTemplate"><template>page/html/header.phtml</template></action>
        </reference>
        <reference name="footer">
            <action method="setTemplate"><template>page/html/footer.phtml</template></action>
        </reference>
    </short_header_footer>
    ```

### How to add additional item to the floatbar navigation?

 1. [Create](../theme-customization/small-changes/#custom-layout-update-file) `custom.xml` layout file
 2. Add the following code:

    ```xml
    <argento_bottomnavbar_catalog>
        <reference name="before_body_end">
            <block type="core/text" name="catalog_bottomnavbar_additional">
                <action method="setText"><text><![CDATA[
<script type="text/javascript">
document.observe('bottomnavbar:init', function() {
    BottomNavbar.add(
        Translator.translate('Title'), // title in navbar ribbon
        '.toolbar-bottom .sort-by' // block selector to show
    );
    BottomNavbar.add(
        '.block-layered-nav .block-title span', // title selector for navbar ribbon
        '.block-layered-nav' // block selector to show
    );
});
</script>
                ]]></text></action>
            </block>
        </reference>
    </argento_bottomnavbar_catalog>
    ```

    `argento_bottomnavbar_catalog` - is the handle that argento uses for the following pages:

    ```
    catalog_category_default
    catalog_category_layered
    catalogsearch_advanced_result
    catalogsearch_result_index
    ```

    You may add item for specific page only. To do that, change the
    `argento_bottomnavbar_catalog` handle to another.

### How to disable category description collapse?

 1. [Create](../theme-customization/small-changes/#custom-layout-update-file) `custom.xml` layout file
 2. Add the following code inside:

    ```xml
    <remove name="collapsed_category_description"/>
    ```

### How to disable category description collapse for specific category?

Open category in backend view. Add the following code to the category layout
update xml instructions:

```xml
<remove name="collapsed_category_description"/>
```

### How to collapse any another block?

Apply the following layout update xml to the page:

```xml
<reference name="before_body_end">
    <block type="core/text" name="collapsed_colmain">
        <action method="setText"><text><![CDATA[
<script type="text/javascript">
var collapsed = new CollapsedElement();
collapsed.init('.col-main', {
maxHeight: 250,
height: 100
});
</script>
        ]]></text></action>
    </block>
</reference>
```

### How to change layout for specific category?

 1. Open `Admin > Catalog > Category` and select category.
 2. Switch to `Custom design` tab.
 3. Add the following content to `Custom layout update`:

    ```xml
    <reference name="root">
        <action method="setTemplate"><template>page/2columns-right.phtml</template></action>
    </reference>
    ```

    Possible values for template variable:

    ```
    page/2columns-left.phtml
    page/2columns-right.phtml
    page/3columns.phtml
    page/1column.phtml
    ```

### Magento 1.7 and older

Copy `header.phtml` and `header_short.phtml` files from your theme to `_custom`
theme. For example:

```
app/design/frontend/argento/default/template/page/html/header.phtml
app/design/frontend/argento/default/template/page/html/header_short.phtml
copy to:
app/design/frontend/argento/argento_custom/template/page/html/header.phtml
app/design/frontend/argento/argento_custom/template/page/html/header_short.phtml

OR

app/design/frontend/argento/mall/template/page/html/header.phtml
app/design/frontend/argento/mall/template/page/html/header_short.phtml
copy to:
app/design/frontend/argento/mall_custom/template/page/html/header.phtml
app/design/frontend/argento/mall_custom/template/page/html/header_short.phtml
```

Then open these files and find the following code:

```
<?php echo $this->getChildHtml('welcome') ?>
```

Replace it with:

```
<?php echo $this->getWelcome() ?>
```

Save the files and clear the cache.

### Prepare logo image for mobile device

To make your logo look crisp on devices with high pixel ratio value
you should create the double sized logo from the vector logo source.

Move your standard and double sized logos to the `custom` skin folder:

```
skin/frontend/argento/{theme}_custom/images/{logo_name}.gif
skin/frontend/argento/{theme}_custom/images/{logo_name}@2x.gif
```

 **{theme}** - is the theme name that you are using
 **{logo_name}** - is the name of your original logo file

For example:

```
skin/frontend/argento/mall_custom/images/logo.gif
skin/frontend/argento/mall_custom/images/logo@2x.gif
OR
skin/frontend/argento/argento_custom/images/storeLogo.png
skin/frontend/argento/argento_custom/images/storeLogo@2x.png
```

### How to create full width block at CMS page

 1. Find your CMS page unique classname i. e. `.cms-about` (usually it's located
    in <body class="CMS-ABOUT"> tag).
 2. Go to your [custom.css](../theme-customization/small-changes/#custom-styles-and-javascript)
    file and add following code using your CMS page selector:

    ```css
    .cms-about .main {
       max-width: 100%;
       padding: 0;
    }
    ```

 3. It will make your page content expand to full page width.
 4. In case you want to leave some blocks the **fixed width**, wrap them with `<div class="container">BLOCK CONTENT HERE</div>`

### How to disable Questions tab on product page

 1. [Create](../theme-customization/small-changes/#custom-layout-update-file) or edit existing `custom.xml` layout file of your theme.
 2. Add the following code inside:

    ```xml
    <catalog_product_view>
        <reference name="product.info.tabs">
            <action method="unsetChild" module="askit" ifconfig="askit/general/enabled">
                <alias>askit_tabbed</alias>
            </action>
        </reference>
    </catalog_product_view>
    ```

 3. Flush cache

### How to remove "0" as the default value for grouped products

 1. [Create](../theme-customization/small-changes/#custom-styles-and-javascript) or edit existing `custom.js` file of your theme.
 2. Add the following code to file:

    ```js
    document.observe("dom:loaded", function() {
        $$('.catalog-product-view .grouped-items-table .input-text').each(function(el){
            el.value='';
        })
    });
    ```
 3. Flush cache

### How to use FontAwesome icons?

![Icons example](/images/m1/themes/argento/faq/font-awesome-icons.png)

**Argento** has integrated [**FontAwesome**](http://fontawesome.io/icons/){: target="_blank"}
scalable vector icons support. So you can insert more then **760** icons just
using one tag.

_For Example:_ To add new **Instagram** icon to homepage content - follow these
instructions:

 * Go to [**FontAwesome**](http://fontawesome.io/icons/){: target="_blank"} site
and find [**Instagram**](http://fontawesome.io/icon/instagram/) icon in search
 * Copy `<i class="fa fa-instagram"></i>` html code.
 * And insert it to `Admin > CMS > Pages > 'home' > Content` in a place you need.

   > **NOTE:** _Your **WYSIWYG** Magento editor should be **disabled** while saving
   FontAwesome tags as it cuts empty `<i>` tags on save when turned ON._

   You should get following look:

   ![Icon using](/images/m1/themes/argento/faq/icon-using.png)

Also you can add same **CSS** properties for FontAwesome tags that could be applied
to other TEXT tags: `font-size`, `color`, `font-weight` etc.

More exclusive **FontAwesome** options you will find at
[Examples Page](http://fontawesome.io/examples/){: target="_blank"}:

  * Changing **Icons size without CSS**
  * Creating **Fixed Width** Icons
  * Adding **List** Icons
  * Making **Animated** Icons
  * **Rotating** & **Flipping** Icons
  * **Stacking** few icons one over other

### Missing elements at homepage

Often users are having issues with missing arrows, icons and other elements at
**Argento** homepage. That is caused by default Magento **WYSIWYG** editor cutting-out
_"unknown"_ tags.

> **RECOMMENDATION**: Please disable default Magento **WYSIWYG** editor
> ( `System > Configuration > Content Management > Enable WYSIWYG Editor = Disabled by Default`)
>
> If you don't want to disable it - just don't forget to turn it off before
> pushing **Save** button while editing content.

If you saved `homepage` or `service_sidebar` content with **WYSIWYG = ON** and have
missing elements - here's list of original homepages elements for all Argento designs
to restore missing elements:

 *  [Argento](../default/homepage/#whole-homepage-content)
 *  [Pure](../pure/homepage/#whole-homepage-content)
 *  [Mall](../mall/homepage/#whole-homepage-content)
 *  [Flat](../flat/homepage/#whole-homepage-content)
    - [Homepage](../flat/homepage/#whole-homepage-content)
    - [Services Sidebar](../flat/product-page/#services-block)
 *  [Pure2](../pure2/homepage/#whole-homepage-content)
    - [Homepage](../pure2/homepage/#whole-homepage-content)
    - [Services Sidebar](../pure2/product-page/#services-block)

### Remove attributes that have no value

> When you need to hide attributes that have **"N/A"** or **"No"** values in
> additional attributes table you can use following solution

 1. Go to  `app/argento/[mytheme]_custom/template/catalog/product/view/attributes.phtml`
    (or copy this file in your theme from
    `app/design/frontend/argento/default/template/catalog/product/view/attributes.phtml`)
    line 37
    
    > If you have **EasyTabs** extension enabled please overload this file:
    > `app/design/frontend/base/default/template/tm/easytabs/tab/catalog/product/view/attributes.phtml`
    > 
    > and put it to 
    > 
    > `app/design/frontend/argento/[mytheme]_custom/template/tm/easytabs/tab/catalog/product/view/attributes.phtml`

 2. Add following lines:

    ```php
    <?php foreach ($_additional as $_data):
        // Add these 2 lines
        $_test_data_value = trim($_data['value']);
        if ((empty($_test_data_value) || in_array($_test_data_value, array(Mage::helper('catalog')->__('N/A'), Mage::helper('catalog')->__('No'))))) continue;?>
    ```
 3. Check your site now.

### How to show hidden part of product name at category listing

> In **Argento Flat** theme product listing the names of products are hidden to make 
> headers same size. But sometimes users want to **disable** that feature.
 
 1. Go to your [custom.css](../theme-customization/small-changes/#custom-styles-and-javascript)
    file and add following code using your CMS page selector:

    ```css
    .products-grid .product-name a {
        overflow: visible;
        white-space: normal;
    }
    ```
 2. Save and enjoy

### How to make mobile menu expand on whole item area click

![Mobile menu click](/images/m1/themes/argento/faq/mobile-menu-click.gif)

 -  Please, find file `skin/frontend/base/default/js/tm/navigationpro.js`
 -  Find line 149:
    
    ```js
    toggler.observe('click', function(e) {
    ```
 -  Change it to:
    
    ```js
    toggler.previous().observe('click', function(e) {
    ```
 -  Save. Enjoy.