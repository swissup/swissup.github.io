---
layout: default
title: Rich Snippets
description: >
    Magento2 snippets module
keywords: >
    magento2 rich snippet extension, magento2
    google rich snippets extension, google rich snippets magento2 extension, google
    rich snippets tool
category: Rich Snippets
---

# Rich Snippets

![General settings](/images/m2/rich-snippets/preview.png)

By default Magento 2 has structured data at product page that helps Google and other search engines to understand the content of your site. Magento uses microdata format.

Today Google recommends using JSON-LD for structured data whenever possible ([source](https://developers.google.com/search/docs/guides/intro-structured-data#structured-data-format)).

Our module does excatly this. It presents structured data with JSON-LD format instead of microdata. But this is not all. We allow you to include some addtional information in structured data. Here is full list of structured data we add to pages:

 -  Product data (SKU, price, currency, availability and reviews' rating).
 -  [Information about your organization](configuration/#organization) with [social links](configuration/#social-links).
 -  [Website](configuration/#website) info with sitelinks searchbox.
 -  Breadcrumbs trail.

To test structured data at any page of your store you can use [Google Rich Snippets testing tool](https://developers.google.com/structured-data/testing-tool/).

Please remember only Google (❗) decides what to show. Testing tool can show everything is perfect but this maybe still not enough for Google. Poorly written or keyword stuffed content, low quality inbound links pointing to your site, not mobile-friendly design, slow loading time - all this can affect your presens in search results.

❗ - you can replace `Google` with any other search engine.

### Contents

1. [Installation](installation/)
2. [Configuration](configuration/)
3. [Changelog](changelog/)
