---
layout: default
title: Pagespeed installation via Composer
description: Pagespeed installation instructions
keywords: "Pagespeed installation"
category: Pagespeed
exclude_from_search: true
---

# Installation

{% include installation/m2/composer.html site="swissuplabs.com" package="swissup/pagespeed" modules="Swissup_Pagespeed" preinstall="composer require mrclay/minify:~3.0.0 marc1706/fast-image-size:1.* spatie/image-optimizer:^1.1" %}

3. Run automatic configurator

```bash
bash -c "$(curl -s https://raw.githubusercontent.com/swissup/swissup.github.io/master/m2/extensions/pagespeed/configure)"
```

##### Next up

Great! Now you might want to see next:

- [Quick Start](/m2/extensions/pagespeed/quickstart/)
