---
layout: default
title: Taxjar_SalesTax integration
description: Firecheckout integration with Taxjar SalesTax
keywords: Taxjar, SalesTax, tax
category: Firecheckout
---

# Taxjar SalesTax

Open `app/code/local/Taxjar/SalesTax/etc/config.xml` and find following lines:

```xml
<helpers>
    <taxjar>
        <class>Taxjar_SalesTax_Helper</class>
    </taxjar>
</helpers>
```

Replace them with:

```xml
<helpers>
    <taxjar>
        <class>Taxjar_SalesTax_Helper</class>
    </taxjar>
</helpers>
<sales>
    <quote>
        <totals>
            <tax>
                <class>Taxjar_SalesTax_Model_Sales_Total_Quote_Tax</class>
            </tax>
        </totals>
    </quote>
</sales>
```

Save the file and clear magento cache.
