---
layout: default
title: Troubleshooting
description: Solving errors and warnings in Rich Snippets
keywords: Rich Snippets warning, Rich Snippets error
category: Rich Snippets
---

# Troubleshooting
{:.no_toc}

* TOC
{:toc}

#### The brand field is recommended. Please provide a value if available.

It is recommendation. And not an error.

Every product has its manufacturer (or brand). With this warning Google recommends you to specify it. And you can easily achieve it with our module.

If you already have brand (manufacturer) product attribute then select it in module [configuration](../configuration/#product-structured-data). Otherwise you have to create such attribute, assign it to attribute set(s), fill it for products and thne select it in module configuration.

Remember to clear Magento Cache.

#### The review field is recommended. Please provide a value if available.

It is recommendation. And not an error.

This warning occures at products that has no reviews. Unfortunatly we are helpless in this case. Please ask your customers to leave a review for product.

#### The priceValidUntil field is recommended. Please provide a value if available.

Once again it is recommendation. And not an error. Google won't penalty your store for this. It recommends how you can improve your structured data.

Please check module [configuration](../configuration/#product-structured-data). There is config where you can set price valid date for all products. Just remember to update it from time to time.

If product has special price and it has special to date then priceValidUntil sets equal to special to date.

#### This Product is missing a global identifier (e.g. isbn, mpn or gtin8).

With this warning Google tells it would be really greate for your structured data to add global identifier of product.

For example, it can be MPN.

![Structured data mpn](/images/m2/rich-snippets/config-structured-data.png)

We setup to use SKU attribute as mpn also in this example. Check module [configuration](../configuration/#product-structured-data) to find out where to set it.