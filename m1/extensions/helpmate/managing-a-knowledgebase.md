---
layout: default
title: Helpmate managing a knowledgebase
description: magento helpdesk extension installation instructions
keywords: " magento help desk module, magento help desk extension with built
in knowledge base, magento ticket, magento support  "
category: Helpmate
---

# Managing a knowledgebase

- [Creating new articles](#creating-new-articles)
- [Creating new categories](#creating-new-categories)
- [Submitting support request from front-end interface](#submitting-support-request-from-front-end-interface)

Knowledge base articles are created by store support team in order to help users to solve their issues themselves. Knowledge base comes with **Article** and **Category** interfaces. The article, as usual, includes a description of a problem and the way of solving that.

### Creating new articles

In order to create new article, please go `Admin > Templates Master > Knowledge Base > Article` and click on **Add New Article**.

![Article settings](/images/m1/extensions/helpmate/article-information.png)

**Article infirmation tab**

-   In the `Title` field specify the name of new article.
-   In the `Url` field enter the part of Url that identifies the article.
-   In the `Categories` dropdown select the category to which the request was sent.
-   In the `Store View` field select a store the article will be posted in.
-   In the `Author` field choose an author who created the article.
-   In the `Rate` field specify the article rating.
-   In the `Create Date` field enter the article creation date.
-   In the `Modified date` field enter the article modification date.
-   in the `Sort Order` field specify the order in which the articles will be displayed.
-   Select Yes in `Enabled` field.
-   Click on `Save Article`.

**Content tab**

![Article settings](/images/m1/extensions/helpmate/article-content.png)

Content field allows you to specify a content for each article. You can use either default Magento WYSIWYG editor or pure html code.

**Meta**

![Article settings](/images/m1/extensions/helpmate/article-meta.png)

-   In the `Keywords` field specify article keywords that will be used as article meta keywords header tag.
-   The `Description` field allows you to add short description that will be used as article meta description header tag.

### Creating new categories

Articles can be organized by Category to make easier what the customers are looking for. In order to create new category, please go `Admin > Templates Master > Knowledge Base > Category` and click on **Add New Category**.

![Category interface](/images/m1/extensions/helpmate/category-general.png)

-   Select **Yes** in the `Active` field to enable new category.
-   In the `Name` field specify the category Name.
-   In the `Url` field enter the part of Url that identifies the category.
-   In the `Store View` field select a store, where the category is posted.
-   Enter the category creation date in the `Create date` field.
-   Specify a sort order in which the category will be displayed in the `Sort Order` field.

### Submitting support request from front-end interface

Helpmate front-end interfaces allow store visitors to submit support request, get access to pending tickets and use the store Knowledge base.

**Contact form**

Contact Us form allows to send support requests from the client to store support team. After Helpmate installation you can still use the default Contact us form. In order to use it, you have to enable that option in Helpmate configuration.

![Contact us form](/images/m1/extensions/helpmate/contact-us-form.png)

-   In the `Title` please specify the ticket Name.
-   In the `Email` field leave your email address.
-   In the `Department` field specify the department which your ticket will be assigned to.
-   Select the priority of ticket in the `Priority` field.
-   In the `Message` field describe the issue you have.
-   In the `Phone` field enter your phone number.
-   In the `Address` field enter your address.
-   Specify your name in the `Name` field.

**Note** - *fields are required.

**Helpmate priority form**

Helpmate provides custom form, that was designed to decrease a number of support requests. As soon as customer starts typing his question, Helpmate will suggest the solution, based on articles from the knowledge base. At the bottom of the window there are recommendations how to ask a question and get prompt and precise answer.

In order to start using this form, enabled it in `Admin > System > Configuration > Templates Master > Helpmate`. After that customers can access that form at **yourstore.com/helpdesk**.

`If you don't find the answer you need, you will be offered to Add new Ticket. Please fill the form and click on Save ticket.`

**Customer tickets interface**

Registered customers can create tickets right from their account pages. Please use pagination toolbar to make the tickets searching process faster.

![My tickets interface](/images/m1/extensions/helpmate/my-tickets-interface.png)

**Note**: the `Department and Priority fields` can be disabled by store administrator only.

**Knowledge Base index page**

In order to find faster the article you need, please use Knowledge Base index page.

![Knowledgebase page](/images/m1/extensions/helpmate/knowledgebase-index-page.png)

**Knowledge Base article page**

Before sending the ticket to support department, try to find the answer to your request on the knowledge base article page. There are a lot of articles, which have been written in accordance with FAQs Clients.

**Note**: FAQs Clients are frequently asked questions.

#### You can also check

*   [Installation](../installation/)
*   [Configuration](../configuration/)
*   [Cron configuration](../cron-configuration/)
*   [Managing email gateway](../managing-email-gateway/)
*   [Managing ticket](../managing-ticket/)
*   [Managing department](../managing-department/)
*   [Use cases](../use-cases/)
*   [Support](https://swissuplabs.com/contacts/)
*   [Forum](https://swissuplabs.com/magento-forum/)
