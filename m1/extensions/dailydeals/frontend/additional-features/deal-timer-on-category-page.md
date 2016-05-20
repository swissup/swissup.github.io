---
layout: default
title: Deal timer on category page
description: magento daily deals module frontend
keywords: " magento daily deal, daily deal magento extension, frontend timer, category page"
category: Daily Deals
---

# Deal timer on category page

In Daily Deals extension after version 1.1.0 this feature does not requier any
template modifications. It can be enabled or disabled via extension
configuration at magento backend.

If you upgraded from version 1.0.2 or older and you have modified template, then
we recommend remove code to prevent duplication of timers.
In case of RWD theme path to template is
`/app/design/frontend/rwd/default/template/catalog/product/list.phtml`. Code to
remove:

```php
<?php if (Mage::helper('core')->isModuleOutputEnabled('TM_DailyDeals')) : ?>
<div class="deal-timer-block"><?php echo Mage::helper('tm_dailydeals')->outputDealTimer($_product) ?></div>
<?php endif ?>
```

If you still can not see deal timer at category page:

- check [Use cases](/m1/extensions/dailydeals/use-cases/) page
- contact [support team](https://swissuplabs.com/contacts/)
