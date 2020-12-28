---
layout: default
title: Rich Snippets configuration
description: magento 2 snippet module configuration
keywords: " magento rich snippet extension, magento
google rich snippets extension, google rich snippets magento extension, google
rich snippets tool "
category: Rich Snippets
---

# Configuration
{:.no_toc}

* TOC
{:toc}

### General

![General settings](/images/m2/rich-snippets/config-general.png)

`Enabled` - select **Yes** to enable a module.

`Product Page structured data format` - provides you control over format for structured data at product page. By default it is JSON-LD. But you can switch it back to Magento implementation of microdata or turn off structured data at product page at all.

We minify JSON-LD data to reduce page size. You can turn it off with `Minify structured data` option. This can be helpful if you need to debug something.

### Breadcrumbs

![Breadcrumbs settings](/images/m2/rich-snippets/config-breadcrumbs.png)

`Enabled` - select **Yes** to enable a breadcrumbs in structured data.

### Product Structured Data

> Settings works only with structured data format JSON-LD.

![Product structured data settings](/images/m2/rich-snippets/config-product-v3.png)

Structured data for product contains a lot of information.

With option `Structured Data` you can configurate basic data snippets. Such as  name, sku, mpn (gtin8, gtin13, gtin14, isbn). Just set data property name as select relatedt product attribute for it.

`Price Valid Until` sets default value for *priceValidUntil* property in *Offers* data snippet. It applies for all product without special price. When special price has expiration date then it will be used.

We offer two strategies for "Price Valid Until":
  - *Static Date* - fixed date from field `Static date`.
  - *Dynamic Date* - date in future. Magento calculates this date every time page is rendered. It uses value from field `Days from today` as offset from current date.

Use option `Product Brand Attribute` to setup brand data snippet. Different stores can name product brand differently (producer, manufacturer, brand, etc.). So with this option you select wich product attribute structered data should use as "brand".

Other possible info for structed data of product is its condition. By default, product condition is "New". To specify attribute that should be consider as condition use option `Product Condition Attribute`. Options below help you to setup its proper values.

### Organization

![Organization settings](/images/m2/rich-snippets/config-organization.png)

Fill out the fields to show the full information about your organization directly in search results.

### Social links

![Social links settings](/images/m2/rich-snippets/config-social.png)

Social links snippets will help you to boost click-through rate for your shared URLs, get more traffic from social networks and increase a social media followers base. We do recommend you to implement rich snippets for social media.

### Website

![website settings](/images/m2/rich-snippets/config-website.png)




