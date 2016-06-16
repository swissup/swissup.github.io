---
layout: default
title: Highlight installation
description: Highlight installation instructions
keywords: "highlight installation"
category: Highlight
---

# Highlight installation instructions

Please follow next steps to complete the installation:

 1. Unpack extension archive into `<magento_root>/app/code`.
 2. Run the following commands in terminal:

    ```bash
    cd <magento_root>
    bin/magento module:enable Swissup_Core Swissup_SubscriptionChecker Swissup_Highlight
    bin/magento setup:upgrade
    ```

That's all. Now you can add Highlight widgets to each store page by using
[WYSIWYG editor][usage_wysiwyg_editor] or [CMS > Widgets][usage_widgets_page]
page.

##### Next up

Great! Now you might want to see next:

- [Highlight Widgets](/m2/extensions/highlight/widgets/)
- [Highlight Pages](/m2/extensions/highlight/pages/)

[usage_wysiwyg_editor]: /m2/extensions/highlight/widgets/usage/#wysiwyg-editor
[usage_widgets_page]: /m2/extensions/highlight/widgets/usage/#widgets-page
