---
layout: default
title: Askit Use Cases
description: magento 2 questions use cases
keywords: "magento product questions module, product questions on magento
     product page, magento askit module "
category: Askit
---

# Askit Use Cases

### Contents

1. [Add questions tab on product standart tabs](#add-questions-tab-on-product-standart-tabs)


### Add questions tab on product standart tabs

If you need to move questions block into separate tab,
open `/vendor/swissup/module-askit/view/frontend/layout/catalog_product_view.xml`
comment following lines (remove blocks)

```
<referenceContainer name="content">
    <container name="swissup.askit.product.info.additional">
        <block class="Swissup\Askit\Block\Question\Listing" name="askit_listing" template="Swissup_Askit::question/listing.phtml" />
        <block class="Swissup\Askit\Block\Question\Form" name="askit_form" template="Swissup_Askit::question/form.phtml" />
    </container>
</referenceContainer>
```

And uncomment following lines or add if not exists

```
<referenceBlock name="product.info.details">
    <block class="Swissup\Askit\Block\Question\Widget" name="askit_listing.tab" group="detailed_info">
        <arguments>
            <argument translate="true" name="title" xsi:type="string">Questions</argument>
        </arguments>
    </block>
</referenceBlock>
```
Flush cache
