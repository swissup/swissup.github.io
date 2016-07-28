---
layout: default
title: Use Cases
description: magento firecheckout module use cases
keywords: "firecheckout use case, firecheckout extension"
category: Firecheckout
---

# Use cases

 -  [Changing URL of Fire Checkout page](#changing-url-of-firecheckout-page)

### Changing URL of Firecheckout page

> **Notice:** url `checkout` is in use of Magento Onepage Checkout. Please,
> **do not** replace 'firecheckout' to 'checkout'. It causes errors in
> Magento.

If your store has Firecheckout extension, then you can easly change checkout
URL by completing next steps:

 -  think of new checkout name (securecheckout, quickcheckout etc.)
 -  go to your Magento root directory
 -  open `app\code\local\TM\Firecheckout\etc\config.xml`.
 -  replace 'firecheckout' to new name in values of follow nodes:
     -   `config`/`frontend`/`secure_url`/`firecheckout_index`
     -   `config`/`frontend`/`routers`/`firecheckout`/`args`/`frontName`
    ![Change firecheckout url](/images/m1/extensions/firecheckout/use-cases/change-name.png)
