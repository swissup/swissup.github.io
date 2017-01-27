---
layout: default
title: Helpmate use cases
description: magento helpdesk extension installation instructions
keywords: " magento help desk module, magento help desk extension with built
in knowledge base, magento ticket, magento support  "
category: Helpmate
---

# Use cases

- [How to use contact and helpdesk form](#how-to-use-contact-and-helpdesk-form)
- [How to create Knowledge base article and assign it to product](#how-to-create-knowledge-base-article-and-assign-it-to-product)
- [How to create Knowledge base category and assign articles to it](#how-to-create-knowledge-base-category-and-assign-articles-to-it)
- [How to add link to Knowledge base page at your store](#How-to-add-link-to-knowledge-base-page-at-your-store)
- [How to add article to Quick Answer interface](#how-to-add-article-to-quick-answer-interface)

### How to use contact and helpdesk form

Please go `Admin > System > Configuration > Templates Master > Helpmate. The following steps are:

* click on `Ticket form`
* in `Use Default Contact Us` form please select **Yes**
* after saving configs go to your frontend and click on `Contact us` at the footer of a page.

Go to `Help Desk link` and describe the problem you have using keywords.vThere are available articles which can help you to answer a request. If nothing found, click on `Add New Ticket`. Please fill the required fields and click on `Save Ticket`.

### How to create Knowledge base article and assign it to product

Please go to `Admin > Templates Master > Knowledge base`. Select `Article` from the grid. Click on `Add New Article` and apply the following settings:

**In Article information tab**

* in `Title` field specify the article Name
* in `Status` field select **Enabled**
* in `Content` write the article and click on **Save Article**.

Then open the product and go to the Knowledge Base. Select article and save product information. After that link to the  article will be shown on products page.

### How to create Knowledge base category and assign articles to it

Select `Category` from drop-down window in the top menu. Click on `Add New Category` and apply the following settings:

* in `Active` field select **Yes**
* in `Name` field please create the category name
* Then go to Templates Master>Knowledge base>Article and select Article Information. Enter the created category Name at Category.  

### How to add link to Knowledge base page at your store

The link for KB home is located by default at [http://yourstore.com/knowledgebase/index/index](http://yourstore.com/knowledgebase/index/index)

You can add the link to Footer links CMS static block.

### How to add article to Quick Answer interface

Before adding article to `Quick answer` interface, please create KB category and assign it as **Quick answer category** in `Helpmate configuration` settings. After that every article that is assigned to that category, can be used for posting quick answers.

#### You can also check:

*   [Installation](../installation/)
*   [Configuration](../configuration/)
*   [Cron configuration](../cron-configuration/)
*   [Managing email gateway](../managing-email-gateway/)
*   [Managing ticket](../managing-ticket/)
*   [Managing department](../managing-department/)
*   [Managing a knowledgebase](../managing-a-knowledgebase/)
*   [Support](https://swissuplabs.com/contacts/)
*   [Forum](https://swissuplabs.com/magento-forum/)

