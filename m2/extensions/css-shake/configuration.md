---
layout: default
title: CSS Shake Configuration
category: CSS Shake
---

# Configuration

Configuration is available at _Stores > Configuration > Swissup > CSS Shake_ page.

### General

![General configuration](/images/m2/css-shake/general.png){:width="900"}

Option                  | Description
:-----------------------|:-------------------------
Enabled                 | Enable/Disable the module
Delivery Mode           | Inline (Default) - CSS is added inline,<br/>File - CSS is loaded from a file. File mode may work better for stores with high pagespeed score (>95)
Always keep CSS for     | Keep styles for specified selectors, even if they doesn't used by the page.
Exluded Pages           | Disable CSS Shake for these pages
Debug Mode              | Allow forcing the status on any page using `?css_shake=inline`, `?css_shake=file` or `?css_shake=0` parameter.
Show Debug Panel        | Show debug panel on the frontend to see CSS Shake stats.<br/>It shows consumed memory, time that was spent to process the page and sizes of old and new CSS styles.

### Next up
{:.no_toc}

 -  [Back to Main Page](/m2/extensions/css-shake/)
