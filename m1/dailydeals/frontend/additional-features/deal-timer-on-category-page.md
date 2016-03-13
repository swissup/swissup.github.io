---
layout: default
title: Deal timer on category page
description: magento daily deals module frontend
keywords: " magento daily deal, daily deal magento extension, frontend timer, category page"
category: Daily Deals
---

# Deal timer on category page

To add timer on category page you have to modify template little bit. In case of
RWD theme path to template is
`/app/design/frontend/rwd/default/template/catalog/product/list.phtml`.

Code to add:

```php
<?php if (Mage::helper('core')->isModuleOutputEnabled('TM_DailyDeals')) : ?>
<div class="deal-timer-block"><?php echo Mage::helper('tm_dailydeals')->outputDealTimer($_product) ?></div>
<?php endif ?>
```

This code should be added after `<h2 class="product-name">...</h2>`. It is near
rows 68 and 134 for RWD theme. Result you can check on category view page for
category that has products which are included in deal:

![Deal timer on category page](/images/dailydeals/frontend/deal-timer-on-category-page.png)
