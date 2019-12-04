---
layout: default
title: Upg_Payments (Crefopay) integration
description: Firecheckout integration with Upg_Payments (Crefopay)
keywords: heidelpay, heidelpaycd
category: Firecheckout
---

# Upg_Payments (Crefopay)

> Upg_Payments version — 1.2.7

 1. Open `app/design/frontend/base/default/template/upg/checkout/onepage/upg.phtml` and apply the
    following patch:

    ```diff
    --- old
    +++ new
    @@ -31,6 +31,6 @@
                 }
             });

    -        var UpgMagentoJsIntegration = new UpgMagentoJs();
    +        UpgMagentoJsIntegration = new UpgMagentoJs();
         });
     </script>

    ```

    Save the file.
