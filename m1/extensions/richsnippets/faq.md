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

> NOTE: For general snippets questions (like `How long...` or  `Why doesn't show...`) 
> check [THIS FAQ](https://sites.google.com/site/webmasterhelpforum/en/faq-rich-snippets) 
> on **Google forums**. 
> 
> Following answers are about **TemplatesMaster** extension modification and integration

- [Snippets are breaking breadcrumbs design in custom themes](#snippets-are-breaking-breadcrumbs-design-in-custom-themes)

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
