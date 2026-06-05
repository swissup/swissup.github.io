---
layout: default
title: Checkout Consumer Rights Use Cases
description: Consumer Rights settings
category: Checkout Consumer Rights
---

# Consumer rights customizations

## CMS Block as Legal Guarantee Notice

When you want to customize the content of Legal Guarantee Notice, you can
create a CMS Block with the content you need and select it in the configuration.

For example, let's create a `consumer_rights_guarantee_notice` CMS Block
with the following content:

```html
<details>
  <summary>Your legal guarantee rights</summary>
  <div style="border:1px solid #000;display:inline-block;">
    {% raw %}{{block class="Swissup\CheckoutConsumerRights\Block\LegalNoticeImage" width="250"}}{% endraw %}
  </div>
</details>
```

Then, open _Stores > Configuration > Swissup Checkout > Consumer Rights > Product Page_,
select `CMS Block` in Renderer option, and choose newly created CMS block.

Result:

![Using custom CMS Block](/images/m2/checkout-consumer-rights/use-cases/legal-notice-cms-block.webp){:width="600" height="363"}

## Adding Legal Guarantee Notice to Order Email

Open your custom "New order email" template at _Marketing > Email Templates_
and add the following code to it:

```
<h3>{% raw %}{{trans "Your legal guarantee"}}{% endraw %}</h3>
{% raw %}{{block class="Swissup\CheckoutConsumerRights\Block\LegalNoticeImage" width="350"}}{% endraw %}
```

Result:

![Legal Guarantee Notice in New Order Email](/images/m2/checkout-consumer-rights/use-cases/legal-notice-new-order-email.webp){:width="692" height="757"}
