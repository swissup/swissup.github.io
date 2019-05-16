---
layout: default
title: Use cases
description: Swissup Sold Together module use cases
keywords: soldtogether use-cases
category: SoldTogether
---

# Use cases
{:.no_toc}

* TOC
{:toc}

### Add block into sales email

You can add soldtogether blocks to the sales email template using the following code:

```
{% raw %}{{block class='Swissup\\SoldTogether\\Block\\Email\\Customer' area='frontend' template='Swissup_SoldTogether::email/customer.phtml' order=$order}}
{{block class='Swissup\\SoldTogether\\Block\\Email\\Order' area='frontend' template='Swissup_SoldTogether::email/order.phtml' order=$order}}{% endraw %}
```
