---
layout: default
title: Settings
description: magento 2 checkout success page module documentation
keywords: " magento 2 checkout success page extension settings "
category: Checkout Success
---

# Settings

In order to change general extension settings, go to `Stores` ➔ `Configuration`
➔ `Swissup Checkout` section ➔ `Success Page`.

Checkout Success Page settings have three sections.

### General

![Checkout Success system config general](/images/m2/checkout-success/settings-general.png)

You can enable or disable extension in this section.

Field `Miscellaneous scripts and HTML` allows you to insert on checkout success page any Javascript code or HTML. This field can be very useful when
you have to add Google Adwords or any other conversion tracing code. This field allows to use variables:

| Variable                                  | Description                     |
|-------------------------------------------|---------------------------------|
| `{% raw %}{{orderId}}{% endraw %}`        | Order number                    |
| `{% raw %}{{orderAmount}}{% endraw %}`    | Order grand total               |
| `{% raw %}{{orderBaseAmount}}{% endraw %}`| Order grand total in base currency (useful for multi currency stores) |
| `{% raw %}{{currency}}{% endraw %}`       | Order currency                  |
| `{% raw %}{{currencySymbol}}{% endraw %}` | Order currency symbol           |
| `{% raw %}{{customerEmail}}{% endraw %}`  | Email of customer who placed an order |
| `{% raw %}{{customerId}}{% endraw %}`     | Id of customer who placed an order |
| `{% raw %}{{paymentCode}}{% endraw %}`    | Code of payment method for an order |
| `{% raw %}{{paymentTitle}}{% endraw %}`   | Name of payment method for an order |
| `{% raw %}{{shippingCode}}{% endraw %}`   | Code of shipping method for an order |
| `{% raw %}{{shippingTitle}}{% endraw %}`  | Name of shipping method for an order |

### Page Layout

![Checkout Success system config layout](/images/m2/checkout-success/settings-layout.png)

Section `Layout` provides easy to use drag-and-drop interface to modify
checkout success page layout. Success page constructed with predefinded blocks that can be arranged in any way you want.

`Blocks available on Success Page` is a list of available blocks. It can not be edited. You can only grab one of that blocks and drop it on success page layout field.

`Layout of Success Page` is a schematic representation of success page. Extension divides page content on four segments - top, bottom, middle-left and
middle-right. You can move blocks from one segment to other. You can delete block by clicking on trash bin icon in right side of block (appears when hover
over block).

In "Page Layout" section you can find very useful feature - preview success
page. Input order number in `Order # to preview` and press button
`Save and Start Preview`.

### Cms Blocks

![Checkout Success system config cms blocks](/images/m2/checkout-success/settings-blocks.png)

In this section you can assign CMS block to respective block on checkout success page.
