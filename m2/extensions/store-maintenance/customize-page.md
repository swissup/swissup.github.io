---
layout: default
title: Settings
description: Store Maintenance customization
keywords: "store maintenance customize"
category: Store Maintenance
---

# Customize maintenance page

Maintenance page that comes with module is just an example. You can change it
any way you want. Or you can create your own page and select it as maintenance
page in module settings.

**Notice**: timer on maintenance page created with help of widget. This widget
comes with Countdown Timer extension. So if you do not have Countdown Timer
extension, then you do not see timer.

Source code of maintenance page (CMS page):

```html
<div class="susm-frame">
  <div class="susm-box susm-main">
    <div class="susm-box susm-circle susm-one">&nbsp;</div>
    <div class="susm-box susm-circle susm-two">&nbsp;</div>
    <div class="susm-box susm-circle susm-three">&nbsp;</div>
    <div class="susm-box susm-circle susm-four">&nbsp;</div>
      <!-- here you can place your logo or any other image -->
      {% raw %}{{widget type="Magento\Cms\Block\Widget\Block" template="widget/static_block/default.phtml" block_id="maintenance-gear"}}{% endraw %}
    <div class="susm-message">
      <!-- here you can place your maintenance text or any other content -->
      {% raw %}{{widget type="Magento\Cms\Block\Widget\Block" template="widget/static_block/default.phtml" block_id="maintenance-message"}}{% endraw %}
    </div>
  </div>
</div>
```

We strongly recommend modify this page with **disabled WYSIWYG editor**.

Magento also creates two CMS blocks during module installation:

 *  block with id `maintenance-gear`
 *  block with id `maintenance-message`

### Example

Example is the best way to show how to customize page. So, we will add store
logo to maintenance page.

Find CMS page with identifier `503-service-unavailable` and edit it.

Add code below before `div` element with class `susm-message` (turn off WYSIWYG
editor):

```html
<img src="[link-to-your-store-logo]" style="padding: 40px 0 0;" />
```

Delete code that insert widget with CMS block `maintenance-gear`. Source code of
maintenance page should be like this:

```html
<div class="susm-frame">
  <div class="susm-box susm-main">
    <div class="susm-box susm-circle susm-one">&nbsp;</div>
    <div class="susm-box susm-circle susm-two">&nbsp;</div>
    <div class="susm-box susm-circle susm-three">&nbsp;</div>
    <div class="susm-box susm-circle susm-four">&nbsp;</div>
      <img src="[link-to-your-store-logo]" style="padding: 40px 0 0;" />
    <div class="susm-message">
      <!-- here you can place your maintenance text or any other content -->
      {% raw %}{{widget type="Magento\Cms\Block\Widget\Block" template="widget/static_block/default.phtml" block_id="maintenance-message"}}{% endraw %}
    </div>
  </div>
</div>
```

Save page, go to frontend and check result. Please, do not forget to flush cache
in case cache is enabled. Page has to be something like this:

![Maintenanse page with logo](/images/store-maintenance/page-with-logo.png)

You can add any content to this page using basic magento tools for CMS pages
editing.
