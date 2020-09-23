---
layout: default
title: Argento Home Category Page
keywords: ArgentoHome, Home, category page, hover gallery, recently viewed
category: Argento
---

# Argento Home Category Page
{:.no_toc}

![Category Page](/images/m2/argento/home/index/small/desktop-category.png)

[View full size](/m2/argento/home/#&gid=1&pid=2)

### Content
{:.no_toc}

* TOC
{:toc}

Category page in Argento Home has traditional elements of Magento 2 category page:

  - category title;
  - layered navigation (when category is anchored) or list of child categories (non-anchored category);
  - product list with toolbar and pagination.

### Layout

Argento Home uses `2columns-left` layout for the product page. Follow our [customization guide](/m2/argento/customization/change-page-layout/)
to change it to another one. Or use [category page builder](/m2/argento/customization/theme-editor/#category-page-builder) in theme editor.

### Category image

Top part of category page has slightly different look when category has image assigned to it. By default category title placed before all content in main column.

When category has image it is shown right after header and before breadcrumbs. Сategory title placed oved category image in such case.

| Category without image | Category with image |
|-|-|
|![No image](/images/m2/argento/home/index/small/desktop-category-notopimage.png)|![With image](/images/m2/argento/home/index/small/desktop-category.png)|

### Product list

![List item example](/images/m2/argento/home/category/product-list-hover.gif)

We recommend to use grid mode for product list. Since it is the most popular products presentation among ecommerce.

Product list is powered by [Hover Gallery](/m2/extensions/hover-gallery/configuration/) module. It shows different image when user is hovering over product image. Check module docs for more details.

One more feature at product listing is product labels - "NEW", "10 %SALE" etc. It is provided by [ProLabels](/m2/extensions/prolabels/) module.

### Add to cart popup

![Ajaxpro popup](/images/m2/argento/home/category/ajaxpro-popup.png)

Magento shows add to cart popup when user adds product to cart from product list. And when this product has some options to select.

This popup is implemented by [Ajax Pro](/m2/extensions/ajaxpro/) module.

### Recently viewed

One distinct feature of Argento themes is Recently Viewed block at category page. This block shows recently viewed products by current visitor on current device/PC. For Argento Home this block is in sidebar.

##### Next up
{:.no_toc}

- [Small css customizations](/m2/argento/customization/custom-css/)
- [Create Argento based custom theme](/m2/argento/customization/custom-theme/)
- [Argento Home docs homepage](/m2/argento/home/)
