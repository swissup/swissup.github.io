---
layout: default
title: TBT Rewards intagration
description: Argento integration with TBT Rewards
keywords: "tbt_rewards"
category: Argento
---

# TBT (Sweet Tooth) Rewards

This extension may require minor change to have nice chekout cart.

 1. Open `app/design/frontend/base/default/template/rewardsonly/checkout/cart/item/default.phtml`
    and find line:
    
    ```php
    if (Mage::helper('rewards/theme')->getPackageName() === "rwd") {
    ```

    Replace it with:

    ```php
    if (in_array(Mage::helper('rewards/theme')->getPackageName(), array("rwd", "argento"))) {
    ```

    Save file.

 2. Open `app/design/frontend/base/default/template/rewardsonly/checkout/cart/item/downloadable.phtml` and find line:
    
    ```php
    if (Mage::helper('rewards/theme')->getPackageName() === "rwd") {
    ```

    Replace it with:

    ```php
    if (in_array(Mage::helper('rewards/theme')->getPackageName(), array("rwd", "argento"))) {
    ```

    Save file.