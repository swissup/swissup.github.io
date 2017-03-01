---
layout: default
title: Affiliate Suite configuration
description: magento affiliate suite module
keywords: >
  magento affiliate program, magento affiliate extension, magento affiliate plugin, 
  magento affiliate coupon, affiliate extension magento
category: Affiliate Suite
---

# Configuration

- [General](#general)
- [Affiliate account settings](#affiliate-account-settings)
- [Payout](#payout)
- [Proframe widget](#proframe-widget)

### General

![General](/images/m1/extensions/affiliate/configuration-general.png)

-   `Enable` - select **Yes** to enable Affiliate Suite extension.
-   `Affiliate link in header` - if you select Yes, visitors will see the **Affiliate** link in the top menu.
-   `Cookie Period (Days)` - specify the time for storing referee’s information in visitors cookies. Time is measured from referre clicked the link. Default value is 90 days.
-   `Affiliate Url Param Name` - customizable URL prefix used in referral link, followed by referral’s unique code.

### Affiliate account settings

![General](/images/m1/extensions/affiliate/configuration-account-settings.png)

-   `New accounts require approval` - if you select No, then partners, registered at your affiliate program, will be able to use Affiliate’s features immediately without the administrator’s approval. If you select Yes, then partners should wait for admin permission. Administrator can approve the pending accounts at `Affiliate Suite/Manage Partners` interface. In order to do that, administrator has to select pending partners account and change `status to Approved`.
-   `Autoselect default campaign after new partner account is created` - select Yes to automatically assign the default campaign to new partners accounts.
-   `Default campaign`- select the default campaign for new partners to let them use after completing registration.

### Payout

![General](/images/m1/extensions/affiliate/configuration-payout.png)

-   `Minimal Period` - choose the minimal period that will be used for calcualting payouts and minimizing fraud transaction risk. All transaction that were placed before minimal period, will not be taken into total payout sum. Possible values: `weeks, two weeks or month`.
-   `Methods`- specify the payout methods. For example, it can be Paypal, Googlecheckout.
-   `Minimal Payout Value` - choose the Minimal Payout Value for referral. When partner’s balance reaches this point then partner will be able to receive a payout.

### Proframe widget

![General](/images/m1/extensions/affiliate/configuration-proframe-widget.png)

Select **Yes** to activate Product Frame Widget feature.

#### You can also check:

*   [Installation](../installation/)
*   [Admin interfaces for admins](../admin-interfaces-for-admins/)
*   [Admin interfaces for partners](../admin-interfaces-for-partners/)
*   [Support](https://swissuplabs.com/contacts/)
*   [Forum](https://swissuplabs.com/magento-forum/)