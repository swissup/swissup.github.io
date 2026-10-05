---
layout: default
title: CSS Shake
category: CSS Shake
extension_id: css-shake
---

# CSS Shake

CssShake is a Magento module that performs fast realtime CSS tree-shaking for
the current page. It injects **used CSS** into the `<head>` and defers loading
of all other styles.

{% include gallery.html images=site.data.gallery.m2.css-shake.index class="phone-up-2 tablet-up-3 photoswipe scroll" %}

Works for any Magento 2 theme, including Luma, Breeze, and Hyvä themes. We've
improved Hyvä LCP performance **from 2.4 seconds to 1.9 seconds** by simply enabling
the module.

This module can drastically decrease FCP, LCP, and improve pagespeed score. However,
before using this module, please make sure that:

 - **TTFB is less than 0.6 seconds**. Otherwise, start optimizing third-party modules.
 - **TBT is less than 0.6 seconds**. Otherwise, start optimizing your js.
 - **LCP** element is optimized and uses preload.
 - **CSS** size is bigger than 30kb. Otherwise, the module may not show any visible improvements.

Our test results:

Theme                      | LCP             | Pagespeed Score
---------------------------|-----------------|----------------
Breeze Blank (file mode)   | 2.52s → 2.2s    | 95 → 98
Hyvä (file mode)           | 2.3s → 2.0s     | 97 → 98
Luma (inline mode)         | 2.66s → 1.86s   | 91 → 95

### Contents

 1. [Installation](/m2/extensions/css-shake/installation/)
 2. [Changelog](/m2/extensions/css-shake/changelog/)
 3. [Configuration](/m2/extensions/css-shake/configuration/)
