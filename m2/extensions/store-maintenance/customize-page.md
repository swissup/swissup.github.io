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

### Example

Example is the best way to show how to customize page. So, we will add store
logo to maintenance page.

Find CMS page with identifier `503-service-unavailable` and edit it.

Add code below at the first line of page content (turn off WYSIWYG editor):

```html
<p style="text-align: center; padding-bottom: 40px;">
	<img src="[link-to-your-store-logo]" />
</p>
```

Save page, go to frontend and check result. Please, do not forget to flush cache
in case cache is enabled. Page has to be something like this:

![Maintenanse page with logo](/images/store-maintenance/page-with-logo.png)

You can add any content to this page using basic magento tools for CMS pages
editing.
