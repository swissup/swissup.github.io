---
layout: default
title:  "How to remove Tags functionality in Magento"
permalink: "/posts/how-to-remove-tags-functionality-in-magento/"
description: "Removing unneeded Tags functionality in Magento using xml"
keywords: "magento, tags, tag, remove, magento1"
categories: "posts"
---

# How to remove Tags functionality in Magento

![Tags Sidebar](/images/posts/2016-04-26-how-to-remove-tags-functionality-in-magento/tags-sidebar.png)

> Often "Tags" option isn't needed in web store and we're getting many questions
> about removing it.

### Instructions to disable in Magento

1.  Go to `Admin > System > Configuration > Advanced > Disable Modules Output`
2.  Find `Mage_Tag` there and **Disable** it:

    ![Tags Sidebar](/images/posts/2016-04-26-how-to-remove-tags-functionality-in-magento/disable-mage-tag.png)
3.  **Save config** and **Clear store cahe**.

### Instructions to disable in EasyTabs extension

1.  Go to `Admin > Templates Master > Easy Tabs`
2.  Find block with **id** `easytabs/tab_product_tags`:

    ![Easy Tabs Tags Admin](/images/posts/2016-04-26-how-to-remove-tags-functionality-in-magento/easy-tabs-tags.png)
3.  **Disable** it and **Save**