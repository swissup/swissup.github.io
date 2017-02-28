---
layout: default
title: Email admin interfaces
description: Email documentation
keywords: "email, mail"
category: Email
---

# Admin interfaces

Go 'Admin > Templates-Master > Email > Email Gateways' and select **Transport**. Now you have to add or edit your own email transport. You can use the magento mail transport. However it would be better to use any other transport created in our extension interface.

### Transport interface

The Transport feature allows you to send email via different services. Right now it's fully integrated with SMTP and Google Apps. Next releases will be available with support of Mandrill and probably other mail sending services.

![Email transport](/images/m1/extensions/email/email-transport.png)

Please fill fields using our recommendations:

-   `Name` - specify the email transport name
-   `Email` - enter the email address, that will be used to receive emails from customers
-   `Status` - enable the current email transport
-   `Type` - select SMTP
-   `Host` - enter the address of your email server
-   `User` - specify the user’s name or email address for authorization
-   `Password` - define the user’s password
-   `Port` - enter the port number for access to your email server. You can use ports, mentioned below: 25, 465, or 587
-   `Secure` - select the type of secure. Possible values are None, SSl\TLS or STARTTLS
**Note**: the SSL/TLS is commonly used.
-   `Authorize type` - select the authorize type. Possible values are Login, Plain and Crammd5
**Note**: the Login is commonly used.

Click **Save**. Now you’re allowed to test how it works. Press the **Test Email Transport** button in the upper right corner of the page. Please check if you’ve got the email.

If you’ve installed the Helpmate and Ask It extensions, you can check and use already added email sender. Using created transport, you are allowed to send email over SMTP, that easily handles sending.

### Storage interface

Email extension provides the download of emails via Pop3 or IMAP protocol. This feature is used by our HelpMate extension. If you need more detailed information, please contact us. Email extension also allows you to keep all your emails in the storage. You can access and manage them anytime you need.

![Email storage](/images/m1/extensions/email/storage.png)

In order to configure the `Storage settings`, please use **Transport** interface sample. There are two distinguishing features:

-   `Type` - select POP3 and IMAP
-   `Port` - specify the port number defined for Storage only. Mention, the port number is another one, that Transport port is.

### Queue interface

In order to reduce server load, we recommend to use the Queue interface. We use a database table for queue implementation. For instance, if smtp server at the email client you’ve created an account on, can’t connect with the smtp server at address of your recipient, the messages will be generated and saved in queue. After the queues timeout ended, emails will be sent to your mail server using your email transport. Using it you can manage queue of emails that were sent.

![Queue](/images/m1/extensions/email/queues.png)

Go `Admin -> Templates-Master -> Email Queues` and add or edit the created queue as follows:

![Magento email queue](/images/m1/extensions/email/queue-details.png)

-   `Name` - provide a name for sent emails queue
-   `Timeout` - specify the time in seconds to handle the timeout for emails queue sending
-   `Default Status` - enable the queue

### Transactionals emails interface

The other Email extension interface you can use, is `Transactional Emails`. Go `Admin >  Templates-Master > Email > Transactional Emails`. When you select it, you will be redirected to `Admin > System > Transactional Emails`. Now you can modify the template of the email in order to perfect your emails' perception. The default magento interface is simple to configure and easy to work.
