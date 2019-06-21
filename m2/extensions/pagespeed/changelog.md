---
layout: default
title: Pagespeed Changelog
description: Pagespeed changelog
keywords: pagespeed changelog, pagespeed updates
category: Pagespeed
---

# Changelog

### Version 1.2.5

> Jun 21, 2019

**Fixes**
 -  Fix srcset logic in responsive optimiser
 -  Improve dimensions checking at image resize command

### Version 1.2.4

> Jun 7, 2019

**Features**
 -  Add webp logic for images inside x-magento-init (fotorama at product page)
 -  Move js polyfills initialization to requirejs-config
 -  Upgrade lazysizes to 5.1.0 version
 -  Upgarde loadCss js library code

**Fixes**
 - Fix empty html warning in dnsprefetch
 - Fix 'Warning: strpos(): Empty needle'

### Version 1.2.3

> May 21, 2019

 -  Compatibility with Swissup_ProLabels module. Previously there was an issue when HTML minification enabled - some labels do not render.

### Version 1.2.2

> May 14, 2019

**Features**
- Remove using php DomDocumenr save HTML

**Fixes**
- Added <picture> tag patch at webm optimizer for safari compatibility
- Fixed paypal x-magento-template's bug
- Fixed :Uncaught Error Class 'Swissup/../Gallery' not found

### Version 1.2.1

> Mar 18, 2019

**Features**
- Add translates

**Fixes**
- Fix magento 2.2.5 integration
- Fixed GZIP test url in config

### Version 1.2.0

**Features**
- Add Responsive Images feature
- Add HTTP/2 support
- Add webp image support
- Add console command swissup:pagespeed:images:resize
- Add font-display:swap by default for @font-face in merged css
- Add profiling

**Fixes**
- Fix ignore lazyload bug
- Fix Zend_Dom_Query class not exist
- Fix </script> inside scrip
- Fix undefined CURL_HTTP_VERSION_2_0
- Fix gzip checking
- Improve deferjs optimizer
- Add AMP checking ?amp=1

### Version 1.1.0

- Rename composer package

**Fixes**
- Fix set expires for all page
- Add debugging traps

### Version 1.0.1

**Fixes**
- Improve defer css. add onerror
- Fix null response
- Override _removeScriptCB (add exceptions for application/ld+json, etc.)
- Add critical CSS
- Fix: View and view dir after unzip

### Version 1.0.0

**Features**
- [Minify HTML content](https://github.com/mrclay/minify)
- Optimise catalog images ([optimisation tools](https://github.com/spatie/image-optimizer#optimization-tools))
- Optimise css delivery ([loadCss](https://github.com/filamentgroup/loadCSS#why-loadcss))
- Add critical CSS
- Add [image lazy loading](https://github.com/aFarkas/lazysizes)
- defer js (Remove render-blocking JavaScript)
- Add dns-prefetch
- Add Expire header
- Auto add specify image dimension
- Add developer mode compatibility
- [Test GZIP compression](https://checkgzipcompression.com/)
- etc.

### Version 0.1.0

 - Initial release


##### See also

Great! Now you might want to see previous:

 - [Installation](/m2/extensions/pagespeed/installation/)
