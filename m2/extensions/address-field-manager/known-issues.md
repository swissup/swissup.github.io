---
layout: default
title: Address Field Manager Known Issues
description: Address Field Manager for Magento 2 Known Issues
keywords: address fields, address attributes, known issues
category: Address Field Manager
---

# Known Issues

* TOC
{:toc}

### Temando Shipping error on Magento 2.3.4

Since Magento version 2.3.4 Temando Shipping module is not compatible with
custom address attributes and causes javascript error on checkout.

To fix this issue, open `vendor/temando/module-shipping-m2/view/frontend/web/js/view/checkout/shipping-information/address-renderer/shipping.js` and add missing `getCustomAttributeLabel` method:

```diff
--- /vendor/temando/module-shipping-m2/view/frontend/web/js/view/checkout/shipping-information/address-renderer/shipping.js
+++ /vendor/temando/module-shipping-m2/view/frontend/web/js/view/checkout/shipping-information/address-renderer/shipping.js
@@ -57,5 +57,30 @@
             }
             // handle other specific adresses here
             return this.template;
+        },
+
+        /**
+         * Get customer attribute label
+         *
+         * @param {*} attribute
+         * @returns {*}
+         */
+        getCustomAttributeLabel: function (attribute) {
+            var resultAttribute;
+
+            if (typeof attribute === 'string') {
+                return attribute;
+            }
+
+            if (attribute.label) {
+                return attribute.label;
+            }
+
+            resultAttribute = _.findWhere(this.source.get('customAttributes')[attribute['attribute_code']], {
+                value: attribute.value
+            });
+
+            return resultAttribute && resultAttribute.label || attribute.value;
         }
+    });
 });
```

##### Next Up
{:.no_toc}

 -  [Back to Home](/m2/extensions/address-field-manager/)
