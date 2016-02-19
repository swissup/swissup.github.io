---
layout: default
title: Testimonials
description: magento testimonials module documentation
keywords: " magento testimonials extension "
category: Testimonials
---

# Testimonials

Testimonials extension allows your customers to leave reviews about your store. You can customize testimonials listing and form, place widgets on store pages and enable admin notification.

### Contents

1. [Installation](installation/)
2. [Features](#features)
3. [Settings](#settings)
 - [General Section](#general-section)
 - [Testimonials List Section](#testimonials-list-section)
 - [Testimonials Submit Form Section](#testimonials-submit-form-section)
 - [Administrator Email Notifications Section](#administrator-email-notifications-section)
4. [Testimonials Grid](#testimonials-grid)
 - [Testimonial Information Tab](#testimonial-information-tab)
5. [Widgets and Blocks](widgets-and-blocks/)
6. [Use Cases](#use-cases)
 - [Testimonial submit form captcha](#testimonial-submit-form-captcha)

## Features

- Automatic or manual testimonials approving
- Add testimonials link to top and footer links
- Customize testimonials listing layout, items per page etc
- Customize testimonials submit form layout, select fields user can fill and submit thanks message
- Notify administrator with email when new testimonial was posted

## Settings

### General section

![General Section](/images/testimonials/general-section.png)

##### Enable Testimonials

You can disable extension on frontend

##### Automatically approve testimonials

Approve new testimonials automatically or manually. Only approved testimonials displayed on store frontend.

##### Add link to top links

Place link to testimonials list in top links block

##### Add link to footer links

Place link to testimonials list in footer links block

### Testimonials List Section

![Testimonials List Section](/images/testimonials/testimonials-list-section.png)

##### Testimonials list layout

You can select testimonials listing page layout, 1 column used by default

##### Testimonials per page

Select number of testimonials displayed initially after page load

##### Image width and Image height

Set user profile image size in pixels

##### Image placeholder

Upload default image used when used didn't upload his profile image

##### Show user email in testimonials list

You can hide user emails from testimonials listing page

### Testimonials Submit Form Section

![Testimonials Submit Form Section](/images/testimonials/testimonials-submit-form-section.png)

##### Testimonials form layout

You can select testimonials form page layout, 2 columns with left bar used by default

##### Enable company field, Enable website field, Enable twitter field, Enable facebook field

You can enable additional fields to show on testimonials submit form

##### Message shown after testimonial sent

Here you can enter message shown after user submitted testimonial. You can place discount code here.

### Administrator Email Notifications Section

![Administrator Email Notifications Section](/images/testimonials/administrator-email-notifications-section.png)

##### Email notification for admin on new testimonial

Admin will receive email when new testimonial was posted

##### Send email from

Select email sender

##### Administrator email

Enter email where to send notifications

##### Administrator email subject

Enter notification email subject

##### Administrator email template

Select notification email template

### Testimonials grid

You can check submitted testimonials under `Templates Master > Testimonials > Manage Testimonials` menu. Here you can change testimonials status or delete them.

![Testimonials Grid](/images/testimonials/testimonials-grid.png)

##### Testimonial Information Tab

Here you can check and change all testimonial's data, change it's status or delete it.

![Testimonial Information Tab](/images/testimonials/testimonial-information-tab.png)

### Use Cases

##### Testimonial submit form captcha

To enable captcha on testimonial submit form go to `Admin > System > Configuration > Customers > Customer Configuration > CAPTCHA`, select `Testimonials Form` in `Forms` field and press `Save config` button.

![Testimonial submit form captcha](/images/testimonials/testimonial-submit-form-captcha.png)