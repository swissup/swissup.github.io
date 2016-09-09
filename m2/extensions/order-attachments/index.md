---
layout: default
title: Order Attachments
description: Magento Order Attachments documentation
keywords: "order attachments, email integration"
category: Firecheckout
---

# Order Attachments
Magento Order Attachments module adds ability to attach files to order. It also
provides ability to include attachment links to email template. All attached
files are protected from public access and accessible via private generated
links only.

### Contents
1. [Installation](#installation)
2. [Features](#features)
3. [Frontend](#frontend)
 - [Firecheckout](#firecheckout)
 - [Order view page](#order-view-page)
 - [Email integration](#email-integration)
4. [Backend](#backend)
 - [Configuration](#configuration)
 - [Order attachments page](#order-attachments-page)
 - [Order edit page](#order-edit-page)

## Installation

Please follow next steps to complete the installation:

 1. Unpack extension archive into `<magento_root>`.
 2. Run the following commands in terminal:

    ```bash
    cd <magento_root>
    bin/magento module:enable Swissup_Core Swissup_SubscriptionChecker Swissup_Orderattachment
    bin/magento setup:upgrade
    ```

## Features

**Secure**

No direct links to uploaded files. Attachments are protected from public access
with generated links.

**Fast**

File upload powered by ajax technology and does not require to reload whole page.

**Configurable**

You can use the following configuration to filter uploaded files:

 - Allowed file extensions
 - Max file size
 - Max files count

## Frontend

#### Firecheckout and Default Magento Checkout
Module is rendered in Payment information section and shows the list of allowed
file extensions to make upload process more friendly.
![Firecheckout and default checkout](/images/m2/orderattachment/checkout.png)

#### Order view page
Attachments are visible on the `Guest Order View` and `Customer Order View` pages.
You can [allow customer](#configuration) to upload files from these pages as well as from the
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
{% raw %}{{block type='orderattachment/view' area='frontend' template='tm/orderattachment/email/view.phtml' order=$order}}{% endraw %}
```

## Backend

#### Configuration

![Backend Configuration](/images/m2/orderattachment/config.png)

Option | Description
:------|:-----------
**Enabled** | Ability to enable/disable module
**Allow file upload during checkout** | Ability to upload files on before the order has been placed
**Allow file upload on order view page** | Ability to edit and upload files after the order has been placed
**Limit** | Files count limit per one order
**Size** | Allowed file size to attach (kilobytes)
**Allowed extensions** | Comma separated allowed file extensions list

#### Order attachments page
The page is located at `Swissup > Order Attachments`. It gives you
an ability to search, edit, download or remove attachments.

![Order attachments page](/images/m2/orderattachment/attachment_grid.png)

#### Order edit page
Module is integrated into separate tab of the order edit page. You can
edit attachment comments, upload new attachments or delete them.

![Order edit page](/images/m2/orderattachment/admin_order_view.png)
