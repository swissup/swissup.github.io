---
layout: default
title: Firecheckout custom url
description: How to change url of firecheckout page
keywords: >
    firecheckout custom url
category: Firecheckout
---

# Firecheckout custom url

 1. Navigate to firecheckout folder

    `app/code/Swissup/Firecheckout/etc/frontend`

 2. Open "routes.xml" file, find the following code:

    `frontName="firecheckout"`

    and replace it with:

    `frontName="securecheckout"`

    > Do not use "checkout" word, as it's used by Magento checkout module

 3. Save the file and clear cache

##### Next up

- [Back to customization page](../)
