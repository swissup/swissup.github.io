---
layout: default
title: Easy Banners managing placeholders
description:
keywords: "magento banner, magento banner slider, adding magento banners,
magento extension, magento module"
category: Easy Banners
---

# Managing placeholders

Go `Admin > Templates-Master > Easy Banner > Manage Placeholders.`

![Easy Banners](/images/m1/extensions/easy-banners/manage-placeholders-grid.png)

The placeholders shown above in screenshot, were configured in order to show banners in the most popular places of Magento store.

Click on a placeholder from the submitted list and keep editting.

![Easy Banners](/images/m1/extensions/easy-banners/edit-placeholder.png)

-   `Placeholder Name` - please enter the name of placeholder
-   `Parent Block` - the name of the block where the placeholder will be rendered. Please specify the values like left, right, content, nav, page, before_body_end.
-   `Position` - the placement of placeholder in the required location. Please set your placeholder position according to other blocks in the same container. Specify the values like before="-", after="-", before="tags_popular".
-   `Banners limit per rotate` - please set the number of banners, that will be displayed each time.
-   `Status` - allows you to enable or disable the current placeholder.

Our module also allows you to put your placeholder manually via Magento xml files, widgets or inline php code in case you need a placeholder for specific position only.

```xml
<reference name="content">
    <block type="easybanner/placeholder" name="unique_placeholder_name">
        <action method="setPlaceholderName"><name>right-top</name></action>
    </block>
 </reference>
```

**Widget**:

```
{% raw %}{{block type="easybanner/placeholder" placeholder_name="name"}}{% endraw %}
```

```php
<?php echo $this->getLayout()->createBlock('easybanner/placeholder')->setPlaceholderName('name')->toHtml(); ?>
```

#### You can also check:

*   [Installation](../installation/)
*   [Use cases](../use-cases/)
*   [Managing banners](../managing-banners/)
*   [Support](https://swissuplabs.com/contacts/)
*   [Forum](https://swissuplabs.com/magento-forum/)