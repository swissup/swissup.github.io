---
layout: default
title: Use Cases
description: magento product tabs use cases
keywords: " magento product tabs, magento product tabs extension free, add tabs
magento product page "
category: Easy Tabs
---

# Easy Tabs Use Cases

## Contents

 1. [No tabs after installation](#no-tabs-after-installation)
 2. [Disable native tabs in Magento 1.9 RWD theme](#disable-native-tabs-in-magento-19-rwd-theme)
 3. [Reccuring info tab](#reccuring-info-tab)
 4. [Dynamic tab titles](#dynamic-tab-titles)
 5. [Unset multiple blocks](#unset-multiple-blocks)
 6. [Duplicated tabs on product page](#duplicated-tabs-on-product-page)
 7. [Activate scrolling to tab by clicking an external link](#activate-scrolling-to-tab-by-clicking-an-external-link)
     *  [Edit the link `href` and `class` attributes in template source](#edit-the-link-href-and-class-attributes-in-template-source)
     *  [Use the external javascript to add the onclick observers](#use-the-external-javascript-to-add-the-onclick-observers)
 8. [Using public events to call javascript on tab activate or deactivate](#using-public-events-to-call-javascript-on-tab-activate-or-deativate)
 9. [Adding tab with different custom content for each product](#adding-custom-product-content)

## No tabs after installation

If you do not see tabs on product page after installation:

 1. Check if the extension was enabled in `System` ➔ `Configuration` ➔
    `Templates-Master` ➔ `EasyTabs` ➔ `General` ➔ `Enabled`
 2. Check if module output is not disabled in `System` ➔ `Configuration` ➔
    `Advanced` ➔ `Advanced` ➔ `Disable Modules Output` ➔ `TM_EasyTabs`
 3. Open your theme `catalog.xml` and check if your theme has
    `product.info.additional` block in `catalog_product_view` section. If not,
    please add it or change reference to `content` or other existing block in
    `app/design/frontend/base/default/layout/tm/easytabs.xml`.

## Disable native tabs in Magento 1.9 RWD theme

There are 3 ways of dealing with native tabs:

 -  Hide tabs with css.

    ```CSS
    .product-view .tabs { display: none; }
    ```

 -  Remove tabs from `catalog/product/view.phtml` template. Find the following
    lines and remove them:

    ```php
    <div class="product-collateral toggle-content tabs">
        <?php if ($detailedInfoGroup = $this->getChildGroup('detailed_info', 'getChildHtml')):?>
            <dl id="collateral-tabs" class="collateral-tabs">
                <?php foreach ($detailedInfoGroup as $alias => $html):?>
                    <dt class="tab"><span><?php echo $this->escapeHtml($this->getChildData($alias, 'title')) ?></span></dt>
                    <dd class="tab-container">
                        <div class="tab-content"><?php echo $html ?></div>
                    </dd>
                <?php endforeach;?>
            </dl>
        <?php endif; ?>
    </div>
    ```

## Reccuring info tab

Create new tab with following configuration:

**General Details**

 *  Title: `Recurring Profile`
 *  Alias: `recurring_info`
 *  Block Type: `Custom Block`
 *  Sort Order: `10`
 *  Status: `Enabled`

**Widget Options**

 *  Block: `payment/catalog_product_view_profile`
 *  Template: `payment/catalog/product/view/profile/schedule.phtml`
 *  Unset (reference::block_alias): `product.info::recurring_info`

## Dynamic tab titles

Use `eval` directive to call block methods in tab title.

Block    | Dynamic Tab Title
---------| -----------------------------
Tags     | `Tags&nbsp;({% raw %}{{eval code="getCount()"}}{% endraw %})`
Reviews  | `Reviews&nbsp;({% raw %}{{eval code="getReviewsCollection()->count()"}}{% endraw %})`
Askit    | `Questions&nbsp;({% raw %}{{eval code="getCount()"}}{% endraw %})`

## Unset multiple blocks

Use comma to unset multiple block from layout.

Examples:

 1. `parent_block1::block_to_unset1,parent_block2::block_to_unset2`
 2. `right::catalog.product.related,product.info::related_products`

### Duplicated tabs on product page

You can find a lot of custom magento themes with tabs added in layout xml files.
When you install EasyTabs in such themes, you can see tabs block twice on product
page. To fix it, open your theme `catalog.xml` or `local.xml` and find tabs
block, it can be looking like this:

```xml
<block type="catalog/product_view_tabs" name="product.info.tabs" as="info_tabs" template="catalog/product/view/tabs.phtml" >
    <!-- Product description -->
    <action method="addTab" translate="title" module="catalog">
        <alias>description</alias>
        <title>Product Description</title>
        <block>catalog/product_view_description</block>
        <template>catalog/product/view/description.phtml</template>
    </action>
    <!-- Product attributes -->
    <action method="addTab" translate="title" module="catalog">
        <alias>additional</alias>
        <title>Additional Information</title>
        <block>catalog/product_view_attributes</block>
        <template>catalog/product/view/attributes.phtml</template>
    </action>
    <!-- Reviews-->
    <action method="addTab" translate="title" module="review">
        <alias>tabreviews</alias>
        <title>Reviews</title>
        <block>advancedreviews/product_reviews</block>
        <template>advancedreviews/product/reviews.phtml</template>
    </action>
</block> <!-- end: tabs -->
```

Make layout xml file backup and remove this block, refresh cache.

## Adding Custom Product Content

Sometimes users need to create tab with content that is related **only** for
**current product** similar to **"Description"**.

> **EXAMPLE:** We'll create **"Video Review"** tab that is often asked by users.

 1. Go to `Admin` ➔ `Catalog` ➔ `Attributes` ➔ `Manage Attributes` ➔ 
    `Add New Attribute`.
 2. Set `Attribute code = 'product_video'` and
    `Catalog Input Type = 'Text Area'`

    ![Create Attribute](/images/m1/extensions/easytabs/create-attribute.png)

 3. Assign `product_video` attribute to needed **Attributes set** (make store
    indexes reindex if required)

    ![Attributes set](/images/m1/extensions/easytabs/attributes-set.png)

 4. Go to `Admin` ➔ `Templates Master` ➔ `Easy Tabs` ➔ `Product Tabs` and add
    new **Custom attribute tab**

    ![Attribute Tab](/images/m1/extensions/easytabs/attribute-tab.png)

    And **save**.

 5. Then go to one of your products settings `Admin` ➔ `Catalog` ➔
    `Manage Products` and fill custom content in **Product Video** field (you
    can get it in **Youtube videos** _SHARE_ section ) i.e.

    ```html
    <iframe width="560" height="315" src="https://www.youtube.com/embed/tQ1tq6nvHD8" frameborder="0" allowfullscreen></iframe>
    ```

    ![Attribute Tab](/images/m1/extensions/easytabs/product-video-content.png)

 6. Now we shoud get following view at **Product page**

    ![Attribute Tab](/images/m1/extensions/easytabs/product-page.png)

## Activate scrolling to tab by clicking an external link

There are two possible ways to implement this feature:

 1. ###### Edit the link `href` and `class` attributes in template source:

    ```html
    <a href="#TAB_ALIAS_FROM_BACKEND" class="easytabs-anchor easytabs-scroll easytabs-animate">Description</a>
    ```
    
    For example, the link mentioned below will activate the description tab:

    ```html
    <a href="#product_tabs_description_tabbed" class="easytabs-anchor easytabs-scroll easytabs-animate">Description</a>
    ```

 2. ###### Use the external javascript to add the onclick observers.

    ```js
    $$('WRITE_SELECTOR_HERE').each(function(el) {
        el.observe('click', function(e) {
            e.stop();
    
            var element = e.element(),
                tab     = 'TAB_ALIAS_FROM_BACKEND',
                scroll  = true,
                animate = true;
            easytabs.onclick(element , e, tab, scroll, animate);
        });
    });
    ```

    For example, the code below shows how to add the onclick event to the
    `Write Review` and `Read Reviews` links:

    ```js
    $$('.rating-links a, .no-rating a').each(function(el) {
        el.observe('click', function(e) {
            e.stop();
    
            var element = e.element(),
                tab     = 'review',
                scroll  = true,
                animate = true;
            easytabs.onclick(element , e, tab, scroll, animate);
        });
    });
    ```

## Using public events to call javascript on tab activate or deactivate

There are four public events available to listen:

  * easytabs:beforeActivate
  * easytabs:afterActivate
  * easytabs:beforeDeactivate
  * easytabs:afterDeactivate

Example:

```js
document.observe('easytabs:afterActivate', function(e) {
    var tab      = e.memo.tab,        // string
        content  = e.memo.content,    // dom element
        easytabs = e.memo.easytabs;   // easytabs instance

    console.log(tab + ':' + easytabs.getActivationCount(tab));
});
```
