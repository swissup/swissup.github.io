---
layout: default
title: DHL_Versenden
description: Firecheckout integration with DHL_Versenden
keywords: DHL_Versenden
category: Firecheckout
---

# DHL_Versenden

This module works out of the box, except when you also have a
[Dhl_LocationFinder](/m1/extensions/firecheckout/supported-modules/dhl-locationfinder/)
module, you nee to apply the following changes:

Open `app/design/frontend/base/default/template/dhl_versenden/checkout/shipping_services.phtml`
and apply the following patch:

```diff
@@ -89,8 +89,12 @@
             var locationLink = $('locationfinder-link');
             if (locationLink) {
                 locationLink.observe('click', function () {
-                    checkout.gotoSection('shipping');
-                    document.getElementById('opc-shipping').scrollIntoView();
+                    if (typeof FireCheckout !== 'undefined') {
+                        shipping.setSameAsBilling(false);
+                    } else {
+                        checkout.gotoSection('shipping');
+                        document.getElementById('opc-shipping').scrollIntoView();
+                    }

                     // Case: customer with saved addresses
                     var addressSelection = $$('#shipping-address-select option[value=""]').first();
@@ -103,6 +107,10 @@
                     if (locationFinderCheckbox) {
                         locationFinderCheckbox.checked = true;
                         locationFinder.showLocationData(locationFinderCheckbox.checked);
+
+                        if (typeof FireCheckout !== 'undefined') {
+                            FC.Utils.fireEvent($('locationfinder-button'), 'click');
+                        }
                     }
                 });
             }
```
