---
layout: default
title: Use Cases
description: magento firecheckout module use cases
keywords: firecheckout url, custom url
category: Firecheckout
---

# Use cases

 -  [Changing URL of Firecheckout page](#changing-url-of-firecheckout-page)

### Changing URL of Firecheckout page

> **ATTENTION**
>
> Update your firecheckout!
>
> Since 3.9.0 you can change url via Firecheckout settings at
> "System > Configuration > TM Checkout > Firecheckout > General"

**If you cannot update firecheckout for some unknown reason, use the manual below:**

> **Notice:** url `checkout` is in use of Magento Onepage Checkout. Please,
> **do not** replace 'firecheckout' to 'checkout'. It causes errors in
> Magento.

If your store has Firecheckout extension, then you can easly change checkout
URL by completing next steps:

 -  think of new checkout name (securecheckout, quickcheckout etc.)
 -  go to your Magento root directory
 -  open `app/code/local/TM/Firecheckout/etc/config.xml`
 -  replace "firecheckout" to new name in values of follow nodes:
    - `config/frontend/secure_url/firecheckout_index`
    - `config/frontend/routers/firecheckout/args/frontName`

    ![Change firecheckout url](/images/m1/firecheckout/use-cases/change-name.png)
