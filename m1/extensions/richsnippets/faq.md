---
layout: default
title: Rich Snippets FAQ
description: magento snippet module faq
keywords: " magento quick view extension, magento rich snippet extension, magento
google rich snippets extension, google rich snippets magento extension, google
rich snippets tool faq"
category: Rich Snippets
---

# Rich Snippets FAQ
{:.no_toc}

> NOTE: For general snippets questions (like `How long...` or  `Why doesn't show...`) 
> check [THIS FAQ](https://sites.google.com/site/webmasterhelpforum/en/faq-rich-snippets) 
> on **Google forums**. 
> 
> Following answers are about **TemplatesMaster** extension modification and integration

* TOC
{:toc}

### Snippets are breaking breadcrumbs design in custom themes

Sometimes **Magento themes** are delivered with overloaded default `breadcrumbs.phtml` 
file. But **Rich Snippets** is changing that file too in order to add markup visible to 
**Google Snippets Engine**.

In this case your **breadcrumbs** can be squeezed or have missing elements.

If you faced such problem on your site please do following:

  * Go to `Admin > System > Configuration > Templates Master > Rich Snippets`
  * Choose `Snippets type` = `JSON`
  * Find your theme breadcrumbs file 
    (it can be in `app/design/frontend/[yourTheme]/[yourThemeSubtheme]/template/page/html/breadcrumbs.phtml`).
    Or if it's not there - check your theme provider
  * Copy its content and go to `app/design/frontend/base/default/template/tm/richsnippets/richsnippets_breadcrumbs.phtml`
  * Replace code in comments with yours:
    
    ```php
    <!-- Paste your custom theme breadcrumbs code here to use JSON snippets -->

        <?php if($crumbs && is_array($crumbs)): ?>
        <div class="breadcrumbs">
            <ul>
                <?php foreach($crumbs as $_crumbName=>$_crumbInfo): ?>
                    <li class="<?php echo $_crumbName ?>">
                    <?php if($_crumbInfo['link']): ?>
                        <a href="<?php echo $_crumbInfo['link'] ?>" title="<?php echo $this->escapeHtml($_crumbInfo['title']) ?>"><?php echo $this->escapeHtml($_crumbInfo['label']) ?></a>
                    <?php elseif($_crumbInfo['last']): ?>
                        <strong><?php echo $this->escapeHtml($_crumbInfo['label']) ?></strong>
                    <?php else: ?>
                        <?php echo $this->escapeHtml($_crumbInfo['label']) ?>
                    <?php endif; ?>
                    <?php if(!$_crumbInfo['last']): ?>
                        <span>/ </span>
                    <?php endif; ?>
                    </li>
                <?php endforeach; ?>
            </ul>
        </div>
        <?php endif; ?>

    <!-- Paste your custom theme breadcrumbs code here to use JSON snippets END -->
    ```
  * Now you can check your snippets using [Google Structured Data Testing Tool](https://search.google.com/structured-data/testing-tool)

### The brand field is recommended. Please provide a value if available.

It is recommendation. And not an error.

Every product has its manufacturer (or brand). With this warning Google recommends you to specify it. And you can easily achieve it with our module.

If you already have brand (manufacturer) product attribute then select it in module [configuration](../configuration/#product-data). Otherwise you have to create such attribute, assign it to attribute set(s), fill it for products and then select it in module configuration.

Remember to clear Magento Cache.

### The review field is recommended. Please provide a value if available.

It is recommendation. And not an error.

This warning occures at products that has no reviews. Unfortunatly we are helpless in this case. Please ask your customers to leave a review for product.

### The priceValidUntil field is recommended. Please provide a value if available.

Once again it is recommendation. And not an error. Google won't penalty your store for this. It recommends how you can improve your structured data.

Please check module [configuration](../configuration/#product-data). There is config where you can set price valid date for all products. Just remember to update it from time to time.

If product has special price and it has special to date then priceValidUntil sets equal to special to date.

### This Product is missing a global identifier (e.g. isbn, mpn or gtin8).

With this warning Google tells it would be really greate for your structured data to add global identifier of product.

For example, it can be MPN.

![Structured data mpn](/images/m2/rich-snippets/config-structured-data.png)

We setup to use SKU attribute as mpn also in this example. Check module [configuration](../configuration/#product-data) to find out where to set it.
