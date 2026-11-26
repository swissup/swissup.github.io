---
layout: default
title: Breeze Theme Editor — Installation
description: How to install Breeze Theme Editor for Magento 2
category: Breeze Theme Editor
---

# Installation instructions

```bash
composer require swissup/module-breeze-theme-editor &&\
bin/magento setup:upgrade --safe-mode=1 &&\
bin/magento setup:di:compile &&\
bin/magento setup:static-content:deploy
```

<div class="hyva-section" markdown="1">
{% include installation/m2/hyva-section-title.html %}

No additional modules need to be installed. The theme must include
`etc/theme_editor/settings.json` with the editor settings. Argento Hyvä
[Chic](/m2/argento-hyva/) 1.4.0+ and Stripes 1.2.0+ already include it.
For your own Hyvä theme, see the [Theme Developer Guide](../theme-developer-guide/).

</div>

##### Next up

- [Configuration](../configuration/)
- [Back to docs homepage](../)
