---
layout: default
title: Order Attachments
description: Magento Order Attachments documentation
keywords: "order attachments, email integration"
category: Order Attachments
---

# Order Attachments

Order Attachments module adds ability to attach files to order. It also
provides ability to include attachment links to email template. All attached
files are protected from public access and accessible via private generated
links only.

> Multishipping checkout is not supported.

### Contents

 1. [Installation](installation/)
 1. [Changelog](changelog/)
 2. [Features](#features)
 3. [Frontend](#frontend)
    - [Firecheckout](#firecheckout)
    - [Order view page](#order-view-page)
    - [Email integration](#email-integration)
 4. [Backend](#backend)
    - [Configuration](#configuration)
    - [Order attachments page](#order-attachments-page)
    - [Order edit page](#order-edit-page)
 5. [Use cases](use-cases/)
     -  [Add to the Success Page](use-cases/#add-to-the-success-page)

## Frontend

#### Firecheckout and Default Magento Onepage Checkout

> Multishipping checkout is not supported.

Module is rendered in Payment information section at Firecheckout and Onepage Checkout
pages.

![Firecheckout and default checkout](/images/m2/orderattachment/checkout.png)

#### Order view page
Attachments are visible on the `Guest Order View` and `Customer Order View` pages.
You can [allow customers](#configuration) to upload files from these pages as well as from the
checkout page.

##### Editable Mode

![Editable order view page](/images/m2/orderattachment/edit_view.png)

##### Read-Only Mode

![Order view page](/images/m2/orderattachment/read_view.png)

#### Email integration
![Email html template](/images/m2/orderattachment/email.png)

- - -

You can add attachment links to the email template using the following code:

```
{% raw %}{{block class='Swissup\Orderattachment\Block\Email\Attachments' area='frontend' order_id=$order.id}}{% endraw %}
```

## Backend

#### Configuration

![Backend Configuration](/images/m2/orderattachment/config.png?v=1)

Option              | Description
:-------------------|:-----------
Enabled             | Ability to enable/disable module
Restrict Customer Group(s) | Ability to allow file upload for certain customer groups only
Allow file upload during checkout | Ability to upload files on before the order has been placed
Allow file upload on order view page | Ability to edit and upload files after the order has been placed
Limit               | Files count limit per one order
Size                | Allowed file size to attach (kilobytes)
Allowed extensions  | Comma separated allowed file extensions list

#### Order attachments page
The page is located at `Swissup > Checkout > Order Attachments`. It gives you
an ability to search, edit, download or remove attachments.

![Order attachments page](/images/m2/orderattachment/attachment_grid.png)

#### Order edit page
Module is integrated into separate tab of the order edit page. You can
edit attachment comments, upload new attachments or delete them.

![Order edit page](/images/m2/orderattachment/admin_order_view.png)
