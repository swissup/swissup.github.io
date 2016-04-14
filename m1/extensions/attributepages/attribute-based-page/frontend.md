---
layout: default
title: Attribute based page frontend screenshots
description: Attribute based page frontend screenshots and preferences
keywords: "attributepages frontend"
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
<remove name="breadcrumbs"/>
```

The page is also uses additional css style to move the page title to the center
of the screen:

```css
.attributepage-title h1 { text-align: center; }
```

![Top fashion brands](/images/attributepages/attribute-based-page/frontend/top_fashion_brands.png)

### Browse by Author

This page will help you to show large amount of data in attractive way.

Page description is used to show additional text and image. Display settings
tab is used to configure columns count and listing mode.

Layout XML Update is used to remove breadcrumbs:

```xml
<remove name="breadcrumbs"/>
```

![Browse by Author](/images/attributepages/attribute-based-page/frontend/book_authors.png)

##### Related Articles
- [Attribute based page backend](/m1/extensions/attributepages/attribute-based-page/backend/)
