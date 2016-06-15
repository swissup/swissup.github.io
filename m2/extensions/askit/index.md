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
4. [Frontend interfaces](#frontend-interfaces)
5. [Admin interfaces](#admin-interfaces)
 - [Askit Questions Grid](#askit-questions-grid)
 - [Question Information Tab](#question-information-tab)
 - [Answers Tab](#answers-tab)
 - [Answer Edit](#answer-edit)

## Features

Ask It is most powerful Magento products questions extension, that allows to create the discussion on the product page,CMS pages and even on the categories pages. The display of recently discussion block at any place of your store leads to better understanding your customers. The extension allows your visitors to help other people by answering their questions, that in future will improve the communication between your store buyers.

Askit module is integrated with Akismet service,that will stop questions spam. The extension allows you to set the email notification about discussion for customer particularly as well as for admin. Moreover it supports the configuration of private questions personally to registered customer.

## Settings

### General section

![General Section](/images/m2/askit/general-section.png)

##### Default question status

Please select default status for question displayed on frontend from drop down list. Possible values are Pending,Approved, Disapproved and Close.

    Note: only Approved questions customers will see on frontend.

##### Default answer status

Please select default status for comment displayed on frontend from drop down list. Possible values are Pending, Approved and Disapproved, Close.

##### Default question status and default customer comment status

You can select default status for new questions:

 - Pending - questions and answers with this status will be hided on frontend, admin can change their status to Approved.
 - Approved - questions with this status was appoved .
 - Disapproved - questions with this status was not approved .
 - Close - questions with this status was closed.


##### Allow guests to ask questions

Select Yes to allow guests to ask questions on store pages.

##### Allow customers comment

Select Yes to allow customers post their comments on question posted by other visitors.

##### Allow guests comment

Select Yes to allow guests post their comments on question posted by other visitors.

##### Allow customer vote

Select Yes to allow customers vote for questions.

##### Show customer name on frontend

Select Yes to allow the display of customer name on frontend.

##### Show item name on frontend

Select Yes to allow the display of item (product or cms page) name on frontend.

##### Enable Gravatar integrity

Select Yes to allow the display of avatar by customer email.


### Email Settings section

![Email Settings Section](/images/m2/askit/email-section.png)

##### Enabled

You can disable sending answers and notifacation by email.

##### Sender

Select system magento sender for using in extension.

##### Customer Notification Template

Select customer notification email template.

##### Send admin notification to

Admin email.

##### Admin Notification Template

Select admin notification email template.

## Frontend interfaces

### Product Questions

![Interface 1](/images/m2/askit/frontend-interface-1.gif)

### Loggined customer interface

![Interface 3](/images/m2/askit/frontend-interface-3.gif)

### All questions
![Interface 2](/images/m2/askit/frontend-interface-2.gif)

## Admin interfaces

### Askit Questions Grid

Ask It extension provides you with easy to use admin interface. You can keep track on what items were asked questions most of all, make sure that the questions not go unanswered and also add new comments to the answers. Additionally you are allowed to set private question to registered customers, that will improve understanding both concerns.

![Admin interfaces](/images/m2/askit/grid.png)

Please go to Swissup > Askit Questions. Select any question from grid to edit. Or you can create new question.

###### Question Information Tab

![Question Information Tab](/images/m2/askit/information-tab.png)

* Text - please specify your question.
* Status - select from drop down list the current status of the question.
* Hint - specify the weight of the question in the Hint field.
* Customer - the customer’s name is already set.
* Item type - the item's type is already set.
* Item - the item's name is already set.
* Store view - show store view where that question was posted at. In case you are using multi language environment it will help you better understand what language you should use to place answer or comment.
* Email - the customer email is already set.
* Private - select private or public question status.

###### Answers Tab

![Answers Tab](/images/m2/askit/answers-tab.png)

Please type your answer in the Text field. And at the very end click Save at the right upper corner of the page.


###### Answer Edit

![Answer Edit](/images/m2/askit/answer-edit.png)

* Text - please specify your answer text.
* Hint - specify the weight of the answer in the Hint field.
* Customer - the customer’s name is already set.
* Email - the customer’s email is already set.
* Status - select from drop down list the current status of the comment.
