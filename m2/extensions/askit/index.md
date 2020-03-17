---
layout: default
title: AskIt
description: >
    magento2 product questions askit module
keywords: >
     magento product questions module, product questions on magento
     product page, magento askit module installation
category: AskIt
---

# AskIt

![Talk](/images/m2/askit/talk.png)

### Contents

1. [Installation](installation/)
2. [Features](#features)
3. [Settings](#settings)
 - [General Section](#general-section)
 - [Email Settings Section](#email-settings-section)
4. [Frontend interface](#frontend-interface)
5. [Admin interfaces](#admin-interfaces)
 - [Askit Questions Grid](#askit-questions-grid)
 - [Question Information Tab](#question-information-tab)
 - [Answers Tab](#answers-tab)
 - [Answer Edit](#answer-edit)
6. [Use Cases](use-cases/)
7. [Changelog](changelog/)

## Features

Ask It is most powerful Magento products questions extension, that allows to create the discussion on the product page,CMS pages and even on the categories pages. The display of recently discussion block at any place of your store leads to better understanding your customers. The extension allows your visitors to help other people by answering their questions, that in future will improve the communication between your store buyers.

Askit module is integrated with Akismet service,that will stop questions spam. The extension allows you to set the email notification about discussion for customer particularly as well as for admin. Moreover it supports the configuration of private questions personally to registered customer.

Our module supports [Swissup AMP](../amp/) since AskIt version 1.6.0.

## Settings

### General section

![General Section](/images/m2/askit/general-section.png)

 *  Default question status - please select default status for question displayed
    on frontend from drop down list. Possible values are Pending,Approved,
    Disapproved and Close.

    > Only Approved questions customers will see on frontend.

 *  Default answer status - please select default status for comment displayed
    on frontend from drop down list. Possible values are Pending, Approved and
    Disapproved, Close.

 *  Default question status and default customer comment status - You can select
    default status for new questions:

    Status | Description
    -------|------------
    Pending | Questions and answers with this status will be hided on frontend, admin can change their status to Approved
    Approved | Questions with this status show on frontend.
    Disapproved | Questions with this status not show on front.
    Close | Questions with this status disquesing was finished.

 *  Allow guests to ask questions - select Yes to allow guests to ask questions on store pages.

 *  Allow customers comment - select Yes to allow customers post their comments
    on question posted by other visitors.

 *  Allow guests comment - select Yes to allow guests post their comments on
    question posted by other visitors.

 *  Allow customer vote - select Yes to allow customers vote for questions.

 *  Show customer name on frontend - select Yes to allow the display of customer name on frontend.

 *  Show item name on frontend - select Yes to allow the display of item
    (product or cms page) name on frontend.

 *  Enable Gravatar integrity - select Yes to allow the display of avatar
    by customer email.
![Integration Settings](/images/m2/askit/assign-config.png)

### Email Settings section

![Email Settings Section](/images/m2/askit/email-section.png)

 *  Enabled - you can disable sending answers and notifacation by email.

 *  Sender - select system magento sender for using in extension.

 *  Customer Notification Template - select customer notification email template.

 *  Send admin notification to - Admin email.

 *  Admin Notification Template - select admin notification email template.

### Captcha section

> Navigate to Stores -> Configuration -> Customers -> Customer Configuration -> CAPTCHA -> Forms

![CAPTCHA settings](/images/m2/askit/captcha-config.png)

## Frontend interface

{% include gallery.html images=site.data.gallery.m2.askit.frontend class="phone-up-1 tablet-up-2 photoswipe scroll" %}

## Admin interfaces

### Askit Questions Grid

Ask It extension provides you with easy to use admin interface. You can keep track on what items were asked questions most of all, make sure that the questions not go unanswered and also add new comments to the answers. Additionally you are allowed to set private question to registered customers, that will improve understanding both concerns.

![Admin interfaces](/images/m2/askit/grid.png)

Please go to Swissup > Askit Questions. Select any question from grid to edit. Or you can create new question.

###### Question Information Tab

![Question Information Tab](/images/m2/askit/information-tab.png)

 -  **Question text** - please specify your question.
 -  **Votes** - specify the number of votes for question. Registered customers can vote for the question on storefont also. And it will increase this number.
 -  **Status** - select from drop down list the current status of the question. 'Approved' and 'Close' questions are visible at storefront.
 -  **Store view** - show store view where that question was posted at. In case you are using multi language environment it will help you better understand what language you should use to place answer or comment.
 -  **Customer** - the customer’s name is already set. If you want to change it then check 'Edit' and type new name.
 -  **Email** - the customer email is already set. If you want to change it then check 'Edit' and type email.
 -  **Hide this question** - make question private. Question is not visible for general public. Only signed in customer who asked it can see this question.

###### Answers Tab

![Answers Tab](/images/m2/askit/answers-tab.png)

Please type your answer in the Text field. And at the very end click Save at the right upper corner of the page.


###### Answer Edit

![Answer Edit](/images/m2/askit/answer-edit.png)

 -  **Text** - please specify your answer text.
 -  **Votes** - specify the number of votes for an answer.
 -  **Status** - select from drop down list the current status of the comment.
 -  **Hide this answer** - make answer private.
 -  **Customer** - the customer’s name is already set. But you can edit when check 'Edit'.
 -  **Email** - the customer’s email. You can edit when check 'Edit'.
