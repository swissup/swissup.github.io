---
layout: default
title: ArgentoBreeze upgrade instructions
description: ArgentoBreeze for Magento2 upgrade instructions
category: ArgentoBreeze
---

# Upgrade Instructions

## Version 2.x.x - 2.4.0

The easiest way to enable scroll reveal is to rerun the installer. However, this
method is not suitable if you've made customizations and want to keep them.

In this case, you need to open your homepage in the backend editor and manually add
`scroll-reveal-container`, `scroll-reveal-children`, and `scroll-reveal` css
classes.

### ArgentoChic

#### Homepage

Add `scroll-reveal-container` css class to the following "Rows":

 - Slider
 - Summer collections
 - Popular right now
 - Testimonials
 - Get the summer look
 - New Products

Add `scroll-reveal-children` css class to the following "Columns":

 - Column1 and Column2 in "Learn out story" section.
 - Column1 and Column2 in "The Circular Denim Project" section.
 - Column1 in "Sign up for our newsletter" section.

Add `scroll-reveal-children` css class to the following html content:

 - Free Shipping banner: `<div class="flex justify-between gap-6 scroll-reveal-children">`
 - Ideas for summer carousel: `<div class="inline-flex gap-8 scroll-reveal-children" style="margin-right: 32px;">`
 - Ready for summer text: `<div class="inline-flex gap-8 text-5xl font-bold scroll-reveal-children" style="color: #eee; margin-right: 32px;">`
 - Brands list: `<div class="grid grid-cols-2 sm:flex flex-wrap gap items-center justify-evenly scroll-reveal-children">`

Add `scroll-reveal` css class to the following elements:

 - Each Text and Buttons element in "Ideas for the summer" section.

#### Footer

Add `scroll-reveal-container` css class to the "Row" in `footer_content` CMS block.

### ArgentoForce

#### Homepage

Add `scroll-reveal-container` css class to the following "Rows":

 - Slider
 - Hot Stuff
 - Ready to Go
 - Bestsellers
 - New Nike Collection
 - Secure Payments Banner

Add `scroll-reveal-children` css class to the following Elements:

 - Row of the "Get there with us" section.
 - Brands list: `<div class="flex flex-wrap gap items-center justify-evenly scroll-reveal-children">`

#### Footer

Add `scroll-reveal-container` css class to the both "Row" in `footer_content` CMS block.

### ArgentoStripes

#### Homepage

Add `scroll-reveal-container` css class to the following "Rows":

 - Slider
 - New Products and Special Offers banners
 - New Collection/Spring Clearance/Build your connected home banners

Add `scroll-reveal-children` css class to the following elements:

 - Column1 of each "Top Selling" sections.
 - Brands list: `<div class="flex flex-wrap gap items-center justify-evenly scroll-reveal-children">`

Add `scroll-reveal-cascade` css class to the following elements:

 - "New Products" banner
 - "Special Offsers" banner

#### Footer

Add `scroll-reveal-children` css class to the Column2 and Column3 of the first "Row" in `footer_content` CMS block.

Add `scroll-reveal-container` css class to the second "Row" in `footer_content` CMS block.

## Version 1.x.x - 2.x.x

Run the following command to upgrade theme sources to 2.0:

```
composer require -w swissup/argento-breeze:^2.0
```

Take a look at breaking changes list in [Breeze Module and Theme](https://breezefront.com/upgrade#breaking-changes)
