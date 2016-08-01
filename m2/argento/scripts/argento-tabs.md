---
layout: default
title: Argento tabs script
description: How to use ArgentoTabs script on custom static content
keywords: argento tabs
category: Argento
---

# Argento tabs

Argento tabs - is a script wrapper around `mage/tabs` that allows you easily
transform any custom content into tabs.

Typical markup for blocks that will be tranformed into tabs:

```html
<div data-mage-init='{"argentoTabs": {}}'>
    <div class="block">
        <div class="block-title">Block 1</div>
        <div class="block-content">Block 1 content</div>
    </div>
    <div class="block">
        <div class="block-title">Block 2</div>
        <div class="block-content">Block 2 content</div>
    </div>
    <div class="block">
        <div class="block-title">Block 3</div>
        <div class="block-content">Block 3 content</div>
    </div>
</div>
```

`data-mage-init='{"argentoTabs": {}}'` - is a standard way to run javascript
widget written according to magento guides.

Following options are supported:

Option               | Default Value    | Description
---------------------|------------------|------------
`collapsibleElement` | `.block-title`   | Tab title selector
`content`            | `.block`         | Tab selector (Block that holds content and title)
`openedState`        | `active`         | Css class for active tab

Custom options usage example:

`data-mage-init='{"argentoTabs": {"collapsibleElement": ".title", "content": ".item"}}'`

### Examples

![Tabs and store achievements](/images/m2/argento/essence/homepage-content/tabs-and-achievements.png)

```html
<div class="argento-grid row block-products-promo">
    <div class="blocks-main item col-md-8" data-mage-init='{"argentoTabs": {}}'>
        {% raw %}{{widget type="Swissup\Highlight\Block\ProductList\NewList" title="New Products" products_count="6" column_count="3" order="default" dir="desc" template="product/widget/content/grid.phtml" show_page_link="1" page_link_title="View All New Products" conditions_encoded="a:1:[i:1;a:4:[s:4:`type`;s:50:`Magento|CatalogWidget|Model|Rule|Condition|Combine`;s:10:`aggregator`;s:3:`all`;s:5:`value`;s:1:`1`;s:9:`new_child`;s:0:``;]]"}}{% endraw %}
        {% raw %}{{widget type="Swissup\Highlight\Block\ProductList\Onsale" title="Special Offers" products_count="6" column_count="3" order="default" dir="desc" template="product/widget/content/grid.phtml" conditions_encoded="a:1:[i:1;a:4:[s:4:`type`;s:50:`Magento|CatalogWidget|Model|Rule|Condition|Combine`;s:10:`aggregator`;s:3:`all`;s:5:`value`;s:1:`1`;s:9:`new_child`;s:0:``;]]"}}{% endraw %}
        {% raw %}{{widget type="Swissup\Highlight\Block\ProductList\Attribute\Yesno" title="Coming soon" attribute_code="coming_soon" products_count="6" column_count="3" order="default" dir="asc" template="product/widget/content/grid.phtml" conditions_encoded="a:1:[i:1;a:4:[s:4:`type`;s:50:`Magento|CatalogWidget|Model|Rule|Condition|Combine`;s:10:`aggregator`;s:3:`all`;s:5:`value`;s:1:`1`;s:9:`new_child`;s:0:``;]]"}}{% endraw %}
    </div>
</div>
```

##### Next up

- [Argento docs homepage](/m2/argento/)

