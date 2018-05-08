---
layout: default
title: Iways PaypalPlus integration
description: Firecheckout integration with Iways PaypalPlus
keywords: Iways, PaypalPlus, Iways_PaypalPlus
category: Firecheckout
---

# Iways PaypalPlus

 1. Disable all third-party checkout modules in `app/etc/modules` folder
    except Firecheckout (Idev_OneStepCheckout, Magestore_Onestepcheckout,
    AnattaDesign_AwesomeCheckout, Amasty_Scheckout, IWD_Opc).

    > Iways module uses runtime integration and if some module is found,
    > it uses integration with this module. This may completely brake PayPalPlus
    > logic.

 2. Navigate to _System > Configuration > TM Checkout > Firecheckout > Ajax save and reload rules_
    and add `Order Total` option to "Payment methods depends on" config:

    ![Iways PayPalPlus integration settings](/images/m1/firecheckout/integration/iways-paypalplus/configuration.png)
