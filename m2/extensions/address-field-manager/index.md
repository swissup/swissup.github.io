---
layout: default
title: Address Field Manager
description: Address Field Manager for Magento 2
keywords: >
    address fields, address attributes, fields manager, attribute manager
category: Address Field Manager
---

# Address Field Manager

Address Field Manager allows to:
 -  change address form fields status, sort order, default values and labels
 -  create new address fields

Custom address fields are automatically displayed on:

 -  Frontend:
    -  checkout billing and shipping address forms
    -  create and edit address forms in customer account
 -  Backend:
    -  edit customer form
    -  edit billing and shipping address on order view page
    -  create new order form
 - API:
    - list of orders using `orders` endpoint
    - order information using `orders/{id}` endpoint

Works great with standard magento checkout and
[Firecheckout](/m2/extensions/firecheckout/) modules.

{% include gallery.html images=site.data.gallery.m2.address-field-manager.index class="scroll phone-up-1 tablet-up-3 photoswipe" %}

## Contents

 1. [Installation](installation/)
 2. [Changelog](changelog/)
 3. [Usage](usage/)
     -  [Address Fields Grid](usage/grid/)
     -  [Address Fields Form](usage/form/)
     -  [Adding Custom Fields to Address Templates](usage/address-templates/)
     -  [Custom Address Fields in Orders API](usage/api/)
 4. [Known issues](known-issues/)
