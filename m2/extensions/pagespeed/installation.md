---
layout: default
title: Pagespeed installation
description: Pagespeed installation instructions
keywords: "Pagespeed installation"
category: Pagespeed
---

# Installation instructions

{% include installation/m2/index.html %}

## Starting configuration

Run the following commands:

```bash
cd <magento_root>
composer require swissup/pagespeed
bin/magento module:enable Swissup_Pagespeed
bin/magento setup:upgrade
bin/magento setup:di:compile
```

### Fast enable, configure and deploy

```bash
bin/magento marketplace:package:install swissup/module-pagespeed
bin/magento setup:static-content:deploy [-f]
```

### Or use symlink command

```bash
bin/magento swissup:pagespeed:configure
bin/magento setup:static-content:deploy [-f]
```

### Without marketpalce installer

```bash
curl -s https://gist.githubusercontent.com/0m3r/a39f76844c465ff1e67d36eaff70592a/raw/44ea5183ce195aa009d3be68b31aa06688707973/configure | bash -s
```

### Step by step

```bash
bin/magento config:set pagespeed/main/enable 1
bin/magento config:set pagespeed/main/devmode 1
bin/magento config:set pagespeed/main/gzip 1
bin/magento config:set pagespeed/main/server_push 0
bin/magento config:set pagespeed/main/link_preload 1

bin/magento config:set pagespeed/content/enable 1
bin/magento config:set pagespeed/content/js 1
bin/magento config:set pagespeed/content/css 1
bin/magento config:set dev/template/minify_html 1

bin/magento config:set dev/js/enable_js_bundling 0
bin/magento config:set pagespeed/js/enable_advanced_js_bundling 1
bin/magento config:set dev/js/minify_files 1
bin/magento config:set dev/js/merge_files 1
bin/magento config:set dev/js/move_inline_to_bottom 1

bin/magento config:set pagespeed/js/defer_enable 1
bin/magento config:set pagespeed/js/defer_unpack 1

bin/magento config:set dev/css/merge_css_files 1
bin/magento config:set dev/css/minify_files 1

bin/magento config:set pagespeed/css/critical_enable 1
bin/magento config:set pagespeed/css/critical_default "$(curl --get --silent --fail "http://pagespeed.swissuplabs.com/critical-css/generate?" --data-urlencode "website=$(bin/magento config:show web/unsecure/base_url)")"
bin/magento config:set dev/css/use_css_critical_path 1
bin/magento config:set pagespeed/css/critical_layout 1

bin/magento config:set pagespeed/image/optimize_enable 1
bin/magento config:set pagespeed/image/lazyload_enable 1

bin/magento config:set pagespeed/expire/enable 1
bin/magento config:set pagespeed/dnsprefetch/enable 1
bin/magento config:set pagespeed/preconnect/enable 1

bin/magento setup:static-content:deploy -f
bin/magento cache:flush
```

##### Next up

Great! Now you might want to see next:

- [Quick Start](/m2/extensions/pagespeed/quickstart/)
- [Configuration](/m2/extensions/pagespeed/configuration/)
- [Changelog](/m2/extensions/pagespeed/changelog/)
