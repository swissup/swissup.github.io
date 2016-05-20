---
layout: default
title: Attribute based page frontend screenshots
description: Magento 2 Attribute based page frontend screenshots and preferences
keywords: "magento 2 attributepages frontend"
category: Attributepages
---

# Frontend screenshots

Here you can find a gallery of separately configured Attribute Based Pages.

##### Table of Contents
- [Top fashion brand logos listed in three columns](#top-fashion-brands)
- [Browse by Authors, grouped by first letter](#browse-by-author)

### Top Fashion Brands

This page uses the image mode listing to provide customers with quick searching
their favorite brand by it's recognizable logo.

Display settings tab is used to configure columns count and listing mode.

Layout XML Update is used to remove breadcrumbs:

```xml
<referenceContainer name="page.top">
    <referenceBlock name="breadcrumbs" remove="true"/>
</referenceContainer>
```

The page is also uses additional css style to move the page title to the center
of the screen:

```css
h1.page-title {
    text-align: center;
    width: 100%;
}
```

![Top fashion brands](/images/m2/attributepages/attribute-based-page/frontend/top_fashion_brands.png)

### Browse by Author

This page will help you to show large amount of data in attractive way.

Page description is used to show additional text and image. Display settings
tab is used to configure columns count and listing mode.

Layout XML Update is used to remove breadcrumbs:

```xml
<referenceContainer name="page.top">
    <referenceBlock name="breadcrumbs" remove="true"/>
</referenceContainer>
```

![Browse by Author](/images/m2/attributepages/attribute-based-page/frontend/book_authors.png)

##### Related Articles
- [Attribute based page backend](/m2/extensions/attributepages/attribute-based-page/backend/)
