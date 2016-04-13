---
layout: default
title: Testimonials
description: magento testimonials module documentation
keywords: " magento testimonials extension "
category: Testimonials
---

# Testimonials

Testimonials extension allows your customers to leave reviews about your store.
You can customize testimonials listing and form, place widgets on store pages
and enable admin notification about new testimonial submission.

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

- Automatic or manual approvement of the testimonials
- Add testimonials link to top and footer links
- Customize testimonials listing layout, items per page etc
- Customize testimonials submit form layout, select fields which can be filled
by the user and set up Thanks message for testimonial submit
- Notify administrator by email when new testimonial was posted

## Settings

### General section

![General Section](/images/testimonials/general-section.png)

##### Enable Testimonials

You can disable extension on frontend.

##### Automatically approve testimonials

Approve new testimonials automatically or manually. Only approved testimonials
will be displayed on store frontend.

##### Add link to top links

Place link to testimonials list in top links block.

##### Add link to footer links

Place link to testimonials list in footer links block.

### Testimonials List Section

![Testimonials List Section](/images/testimonials/testimonials-list-section.png)

##### Testimonials list layout

You can select testimonials listing page layout, 1 column used by default.

##### Testimonials per page

Select the number of testimonials which will be displayed right after the page
loading.

##### Image width and Image height

Set user profile image size in pixels.

##### Image placeholder

Upload the default image used in case the user did not upload his profile image.

##### Show user email in testimonials list

You can hide user emails from testimonials listing page.

### Testimonials Submit Form Section

![Testimonials Submit Form Section](/images/testimonials/testimonials-submit-form-section.png)

##### Testimonials form layout

You can select testimonials form page layout, 2 columns with left bar used by default.

##### Enable company field, Enable website field, Enable twitter field, Enable facebook field

You can enable additional fields to show on testimonials submit form.

##### Message shown after testimonial sent

Write a message that will be displayed after user submits the testimonial.
You can place a discount code here.

### Administrator Email Notifications Section

![Administrator Email Notifications Section](/images/testimonials/administrator-email-notifications-section.png)

##### Email notification for admin on new testimonial

Admin will receive email when new testimonial would be posted.

##### Send email from

Select email sender.

##### Administrator email

Enter the email where to send notifications to.

##### Administrator email subject

Enter a notification email subject.

##### Administrator email template

Select a notification email template.

### Testimonials grid

You can check submitted testimonials in `Templates Master > Testimonials > Manage Testimonials` menu. Yon can also change testimonials status or delete them.

![Testimonials Grid](/images/testimonials/testimonials-grid.png)

##### Testimonial Information Tab

You can check and change all testimonial's data, change it's status or delete it.

![Testimonial Information Tab](/images/testimonials/testimonial-information-tab.png)

### Use Cases

##### Testimonial submit form captcha

To enable captcha on testimonial submit form go to `Admin > System > Configuration >
Customers > Customer Configuration > CAPTCHA`, select `Testimonials Form` in
`Forms` field and press `Save config` button.

![Testimonial submit form captcha](/images/testimonials/testimonial-submit-form-captcha.png)