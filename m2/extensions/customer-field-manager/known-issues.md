---
layout: default
title: Customer Field Manager Known Issues
description: Customer Field Manager Known Issues
keywords: customer field manager issues
category: Customer Field Manager
---

# Known Issues

#### Custom fields are displayed in wrong place on customer account edit page

If custom customer fields are displayed in wrong place on customer account edit
page, apply the following patch from Magento 2 repository:
[moved additional info container outside hidden fieldset](https://github.com/magento/magento2/commit/ae5d7828efe6e937dc670f851cfd30e01a09cdae)

#### Required custom fields issue

Using required custom customer fields will not allow guest to create account
on success page after checkout. This is known Magento 2 issue and can be reproduced
with default `Gender` and `Date of Birth` fields. You can read more about issue
on Magento 2 Github [Magento 2 issue #10489](https://github.com/magento/magento2/issues/10489)

##### Next up

 -  [Back to Main Page](/m2/extensions/customer-field-manager/)
