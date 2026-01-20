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

By default, Magento 2 includes structured data at the product page that helps Google and other search engines to understand the content of your site. Magento uses the microdata format.

Today Google recommends using JSON-LD for structured data whenever possible ([source](https://developers.google.com/search/docs/guides/intro-structured-data#structured-data-format)).

Our module does exactly that. It presents structured data using the JSON-LD format instead of the microdata format. But this is not all. Our module allows you to include addtional information in structured data. Below is the full list of structured data the module adds to pages:

 -  Product data (SKU, price, currency, availability and reviews' rating)
 -  [Information about your organization](configuration/#organization) with [social links](configuration/#social-links).
 -  [Website](configuration/#website) info with sitelinks searchbox.
 -  Breadcrumbs trail.
 -  FAQ list (via widget).

To test structured data at any page of your store you can use [Google Rich Snippets testing tool](https://developers.google.com/structured-data/testing-tool/).

Please remember that only Google (❗) decides what to show. The testing tool may show that everything is perfect, but this maybe still not be enough for Google. Poorly written or keyword stuffed content, low quality inbound links pointing to your site, not mobile-friendly design, and slow loading time can affect your presence in search results.

❗ - you can replace `Google` with any other search engine.

### March 2019 update

Google updated its structured data testing tool. The update made the testing tool more strict. It shows many warnings. Even though they are recommendations and not strict requirements, we improved our module so that you could fix all those warnings.

Please check the troubleshooting page to get answers for the most common questions.

### Contents

1. [Installation](installation/)
2. [Configuration](configuration/)
3. [Widgets](widgets/):
    -  [FAQ](widgets/faq/)
4. [Troubleshooting](troubleshooting/)
5. [Changelog](changelog/)
