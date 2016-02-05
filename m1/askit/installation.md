---
layout: default
title: Ask It
description: magento product questions askit module installation
keywords: " magento product questions module, product questions on magento
product page, magento askit module installation "
category: Ask It
---

# Ask It installation instructions

Please follow next steps to complete the installation:

* Turn store compilation off:

    Navigate to `Admin > Tools > Compilation` and deactivate the compilation
    mode for your store.

* Check if your Magento store cache is enabled.

* Copy all files into your magento directory:

    Simply copy all files from `"extension source x.x.x"` directory into your
    magento store directory.

* Refresh your magento store cache.

* Refresh your admin user access rights:

    Simply logout from your store admin and then login back.

* Navigate to `System > Configuration > Templates-Master > Askit` and
enable extension for any store you need.

* Please add the following code where you want to show Ask It product questions
block.

```html
<!-- AskIt start-->
<?php echo $this->helper('askit')->getLinkHtml($_product) ?>
<!-- AskIt end-->
```

That's all. Navigate to your store and check how it looks.

#### After you install an extension you can go to:

* [Support](https://swissuplabs.com/contacts/)
* [Forum](https://swissuplabs.com/magento-forum/)

