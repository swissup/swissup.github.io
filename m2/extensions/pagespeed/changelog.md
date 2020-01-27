---
layout: default
title: Pagespeed Changelog
description: Pagespeed changelog
keywords: pagespeed changelog, pagespeed updates
category: Pagespeed
---

# Changelog

### Version 1.3.11

> Jan 27, 2020

**Fixes**
 - Ignore 'text/x-magento-template' in deferJs (close #19)
 - Add custom img attributes for webp optimiser
 - Fix webp naming inside js

### Version 1.3.10

> Jan 20, 2020

**Fixes**
 - Fix: backward compatability with magento 2.[1-2] was added
 - Add bugfix patch for 'segmentaion fault' with cacheInterface plugin

### Version 1.3.9

> Jan 17, 2020

**Improvments**
 - Move critical css output to page head (before <link>)

**Fixes**
 - Fix config path to use_css_critical_path

### Version 1.3.8

> Jan 16, 2020

**Fixes**
 - Fix possible bug 'sent too big header' http/2 over 4k (nginx max) 286c00
 - Fix advanced js bundlimg with .min.js suffix 3e4e6c

**Features**
 - Add integration with option 'Use CSS critical path' adf828
 - Minify block_html before save to cache (#17) 9a459a
 - New naming rule for webp files, name.jpg => name.jpg.webp (close #18) e8fb4a

### Version 1.3.7

> Dec 30, 2019

**Fixes**
 - Fix broken admin configuration page

### Version 1.3.6

> Nov 18, 2019

**Features**
 - Move fast image initialization to adapter
 - Add AbstractCachableOptimiser class
 - Add local cache in webp optizator

**Fixes**
 - Fix gzip checking (h2+zend1)
 - Fix lazyload image placeholder with srcset+sizes by html spec

### Version 1.3.5

> Sep 12, 2019

**Fixes**
 - Fix: Add root media files to resize images collection
 - Fix: webp images in media root located
 - Fix: Warning: implode(): Invalid arguments passed for mage 2.3.0
 - Fix: Pesponsive order media matching condition 857cd6
 - Fix: (Safari+webp) Don't change original <img> url if <picture> tag was add
 - Fix: Intagrate lazyload and <picture>

### Version 1.3.4

> Aug 19, 2019

**Features**
 - Add bundling from minified sources
 - Improve image resize command
 - Add bunling option docs link

**Fixes**
 - Fix: background notice in magento 2.2
 - Fix: logic to add <picture> tag

### Version 1.3.3

> Aug 6, 2019

**Fixes**
 - Fix: md5 not secure hash
 - Fix: Add <picture> tag wrapper for safari webp compatability

### Version 1.3.2

> Jul 23, 2019

**Fixes**
 - Fix: escaped tag(s) <\/tag> in text/x-custom-template
 - Fix: bug remove comments in x\-custom\-template(s) if start with comment '<' (or ends -->)

### Version 1.3.1

> Jul 17, 2019

**Fixes**
 -  Fix: apache_get_modules() function does not exist in php-fpm

### Version 1.3.0

> Jul 17, 2019

**Features**
 - Add advanced js bundling
 - Add lazyload custom config options
 - Dublicate move_inline_to_bottom config option

**Fixes**
 -  Remove native curl function calls; Improve HTTP/2 checking
 -  Remove get_headers() from gzip checking
 -  Fix http/2 push for remote links

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
