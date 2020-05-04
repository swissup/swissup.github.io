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
php bin/magento module:enable Swissup_Pagespeed
php bin/magento setup:upgrade
php bin/magento setup:di:compile

#Fast enable and configure
curl -s https://raw.githubusercontent.com/swissup/swissup.github.io/master/m2/extensions/pagespeed/configure | bash -s
#OR
bash -c "$(curl -s https://raw.githubusercontent.com/swissup/swissup.github.io/master/m2/extensions/pagespeed/configure)"
#OR
php bin/magento cache:flush
php bin/magento config:set pagespeed/main/enable 1
php bin/magento config:set pagespeed/main/devmode 1
php bin/magento config:set pagespeed/content/enable 1
php bin/magento config:set pagespeed/content/js 1
php bin/magento config:set pagespeed/content/css 1
php bin/magento config:set dev/template/minify_html 1
php bin/magento config:set dev/js/merge_files 1
php bin/magento config:set dev/js/enable_js_bundling 0
php bin/magento config:set dev/js/minify_files 1
php bin/magento config:set pagespeed/js/defer_enable 1
php bin/magento config:set pagespeed/js/defer_unpack 1
php bin/magento config:set dev/css/merge_css_files 1
php bin/magento config:set dev/css/minify_files 1
php bin/magento config:set pagespeed/css/defer_enable 1
php bin/magento config:set pagespeed/css/defer_onload 1
php bin/magento config:set pagespeed/css/critical_enable 1
php bin/magento config:set pagespeed/css/critical_default "$(curl --get --silent --fail "http://ci.swissuplabs.com/pagespeed/critical-css/generate?" --data-urlencode "website=$(php bin/magento config:show web/unsecure/base_url)")"
php bin/magento config:set pagespeed/image/optimize_enable 1
php bin/magento config:set pagespeed/expire/enable 1
php bin/magento config:set pagespeed/dnsprefetch/enable 1

php bin/magento cache:flush
```

##### Next up

Great! Now you might want to see next:

- [Quick Start](/m2/extensions/pagespeed/quickstart/)
- [Configuration](/m2/extensions/pagespeed/configuration/)
- [Changelog](/m2/extensions/pagespeed/changelog/)
