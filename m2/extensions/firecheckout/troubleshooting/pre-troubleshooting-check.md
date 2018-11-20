---
layout: default
title: Pre-troubleshooting check
description: Loading icon keeps spinning infinitely on initial page load
keywords: pre-troubleshooting check, firecheckout issue infinit loading
category: Firecheckout
---


# Pre-troubleshooting check

> **FireCheckout** is using default _Magento_ functionality as basic.

After installation If you have some checkout features not working, please, check
following:

 * Go to `Admin > Stores > Configuration > Swissup Checkout > Firecheckout > General`
 * Set `Enabled > No` (please, check if that settings are same at the store level)
 * Clear store cache
 * Go to frontend, pass to checkout and check if you don't see that problem at **DEFAULT** checkout

###### If an **error** is still there - please, contact your developer to fix it at default checkout then in most cases it will be fixed at **Firecheckout**
