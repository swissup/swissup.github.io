---
layout: default
title: Place banner on specific page
description: How to place banner on homepage, checkout, product page, category page
category: Easy Banners
---

# Place banner on specific page

There are `Page` and `Page URL` conditions available to show banner at specific
pages:

{% include gallery.html images=site.data.gallery.m1.easy-banners.use-cases.specific-page-conditions class="phone-up-2 tablet-up-2 photoswipe scroll" %}

List of useful pages for `Page` filter:

Page                | Code
--------------------|-------------------------
Homepage            | cms_index_index
All CMS pages       | cms_page
Category page       | catalog_category_view
Product page        | catalog_product_view
Shopping cart page  | checkout_cart_index
Checkout page       | checkout_onepage_index
Firecheckout page   | firecheckout_index_index

#### Next Up:

 -  [Back to all use cases](../../use-cases/)
 -  [More about banner conditions](../../backend/manage-banners/#conditions)
