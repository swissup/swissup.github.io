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

![Product structured data settings](/images/m2/rich-snippets/config-product-v4.png)

Structured data for product contains a lot of information.

With option `Structured Data` you can configurate basic data snippets. Such as  name, sku, mpn (gtin8, gtin13, gtin14, isbn). Just set data property name as select related product attribute for it.

Google highly appreciate product with customer reviews. Option "Add review data" includes data from Magento. Some times third-party modules provide data snippets about reviews for Google. Then turn off this option to avoid conflicts.

Option "Add availablity data" includes information about product stock status in product data snippet.

#### Price valid

![Product structured data settings. Price valid.](/images/m2/rich-snippets/config-product-price-valid.png)

`Price Valid Until` sets default value for *priceValidUntil* property in *Offers* data snippet. It applies for all product without special price. When special price has expiration date then it will be used.

We offer two strategies for "Price Valid Until":
  - *Static Date* - fixed date from field `Static date`.
  - *Dynamic Date* - date in future. Magento calculates this date every time page is rendered. It uses value from field `Days from today` as offset from current date.

#### Brand

![Product structured data settings. Brand.](/images/m2/rich-snippets/config-product-brand.png)

Use option `Product Brand Attribute` to setup brand data snippet. Different stores can name product brand differently (producer, manufacturer, brand, etc.). So with this option you select wich product attribute structered data should use as "brand".

#### Condition

![Product structured data settings. Condition.](/images/m2/rich-snippets/config-product-condition.png)

Other useful information for structed data of product is its condition. By default, product condition is "New". To specify attribute that should be consider as condition use option "Product Condition Attribute". Options below help you to setup its proper values.

#### Merchant Shipping Details

![Product structured data settings. Merchant shipping details.](/images/m2/rich-snippets/config-product-shipping-details.png)

Settings in this section adds data to product data snippet that Google uses in merchant listings. Shipping Details enables people to see shipping costs and estimated delivery timeframes based on their location and your company's shipping policies.

Select country, shipping method and set handling and transit time to each case of shipping configuration you want Google to know. Shipping cost will be calculated base of your store settings for specified shipping methods.

Keep in mind, you don't need to specify here all possible shippings cases. Figure out what are where are your target buyers and what are most common shipping methods they use. If your store has multiple languages then it is wise to setup separate shipping configurations for each store view.

#### Merchant Return Policy

![Product structured data settings. Merchant return policy.](/images/m2/rich-snippets/config-product-return-policy.png)

Settings in this section adds data to product data snippet that Google uses in merchant listings. Use the following properties to make your merchant listing eligible to show return policy information, including return fees and the window of time to return a product.

"Country that the return policy applies to" can be a single country or comma-separated list of countries. Use the two-letter [ISO 3166-1](https://en.wikipedia.org/wiki/ISO_3166-1) alpha-2 country code formatting. You can specify up to 50 countries (limitation from Google).

"Policy category" sets return policy:
  - Number of days to return a product (finite return window) - with option "Days from delivery return is possible" sets return window.
  - Unlimited time to return a product (unlimited window) - customer can return product any time he/she wants.
  - Returns aren't permitted - no returns for product.

When return allowed you have to tell what "Return Method" to use.  Is it free? Or customer has to pay additionally for shipping back.

### Organization

![Organization settings](/images/m2/rich-snippets/config-organization-v2.png)

Fill out the fields to show the full information about your store at search result page or maps.

We recommend to use this section when you have real store. The store customers can visit or pick-up their orders. You can set your store opening hours, phone number and address.

### Social links

![Social links settings](/images/m2/rich-snippets/config-social.png)

Social links snippets will help you to boost click-through rate for your shared URLs, get more traffic from social networks and increase a social media followers base. We do recommend you to implement rich snippets for social media.

### Website

![website settings](/images/m2/rich-snippets/config-website.png)




