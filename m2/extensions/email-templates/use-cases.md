---
layout: default
title: Use Cases
description: >
    Use cases for email templates.
keywords: >
    magento 2 email use case, magento 2 email template use case
category: Email Templates
---

# Use Cases
{:.no_toc}

* TOC
{:toc}

### Ordered Items with Product Images

One of the most common requests is to get ordered items with pictures in new order email.

You can our nice template for new order email "Sales - New Order" from *Swissup_EmailTemplates* group.

Or replace in you custom order template:

```
{% raw %}{{layout handle="sales_email_order_items" order=$order area="frontend"}}{% endraw %}
```

with:

```
{% raw %}{{layout handle="swissup_emailtemplates_order_items" order=$order area="frontend"}}{% endraw %}
```
