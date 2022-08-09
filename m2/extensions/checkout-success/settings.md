---
layout: default
title: Settings
description: magento 2 checkout success page module documentation
keywords: " magento 2 checkout success page extension settings "
category: Checkout Success
---

# Settings

In order to change general extension settings, go to `Stores` ➔ `Configuration`
➔ `Swissup` section ➔ `Checkout` ➔ `Success Page`.

Checkout Success Page settings have three sections.

### General

![Checkout Success system config general](/images/m2/checkout-success/settings-general.png)

You can enable or disable extension in this section.

`Miscellaneous scripts and HTML` field allows you to insert Javascript, CSS, or HTML
code at the very end of the page. It's not intended to use for visible information
because it's shown below footer. This field is useful to add Google Adwords or
any other conversion tracing code. This field allows to use variables:

| Variable                                  | Description                     | Extension version |
|-------------------------------------------|---------------------------------|
| `{% raw %}{{orderId}}{% endraw %}`        | Order number                    | 1.1.0 |
| `{% raw %}{{orderAmount}}{% endraw %}`    | Order grand total               | 1.1.0 |
| `{% raw %}{{orderBaseAmount}}{% endraw %}`| Order grand total in base currency (useful for multi currency stores) | 1.1.0 |
| `{% raw %}{{orderItems}}{% endraw %}`     | Array of items from order where every item is JSON object | 1.1.3 |
| `{% raw %}{{orderBillingAddress}}{% endraw %}` | JSON object with billing [address data](#address-data)  | 1.1.4 |
| `{% raw %}{{orderShippingAddress}}{% endraw %}` | JSON object with shipping [address data](#address-data) | 1.1.4 |
| `{% raw %}{{currency}}{% endraw %}`       | Order currency                  | 1.1.0 |
| `{% raw %}{{currencySymbol}}{% endraw %}` | Order currency symbol           | 1.1.0 |
| `{% raw %}{{customerEmail}}{% endraw %}`  | Email of customer who placed an order | 1.1.0 |
| `{% raw %}{{customerId}}{% endraw %}`     | Id of customer who placed an order | 1.1.0 |
| `{% raw %}{{paymentCode}}{% endraw %}`    | Code of payment method for an order | 1.1.0 |
| `{% raw %}{{paymentTitle}}{% endraw %}`   | Name of payment method for an order | 1.1.0 |
| `{% raw %}{{shippingCode}}{% endraw %}`   | Code of shipping method for an order | 1.1.0 |
| `{% raw %}{{shippingTitle}}{% endraw %}`  | Name of shipping method for an order | 1.1.0 |

Most of variables came with extension version 1.1.0. But there some that requiers higher version. Check column "Extension version".

Check ["Miscellaneous scripts snippets"](../miscellaneous-scripts-snippets/) page for some examples.

> ###### Address data
> Address data object may have properties like ‘city’, ‘company’, ‘country’, 'country_id’, ‘fax’, ‘firstname’, ‘lastname’, ‘middlename’, ‘postcode’, ‘prefix’, ‘region’, ‘region_id’, ‘street’, ‘suffix’, ‘telephone’.

### Page Layout

![Checkout Success system config layout](/images/m2/checkout-success/settings-layout-2.0.png)

Section `Layout` allows you to preview your checkout success page for any order you have. Other powerfull tool is layout **Builder** for uccess page. Builder helps you to construct your own unique layout and engage customer come back to your store.

Button `Preview page` starts full page preview for order (number set in the input field near by).

Button `Builder` starts layout builder for success page. You can rearange page elements and add new ones. For example CMS blocks,  additional checkout fields (requires our module) and/or  delivary date (requires our module).

![Layout builder](/images/m2/checkout-success/settings-layout-2.0--builder.png)
