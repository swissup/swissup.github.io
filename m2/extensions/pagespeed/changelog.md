---
layout: default
title: Pagespeed Changelog
description: Pagespeed changelog
keywords: pagespeed changelog, pagespeed updates
category: Pagespeed
---

# Changelog

### Version 1.7.6

> Jul 6, 2023

 - Add rjs configuration level app/etc/rjs.json

### Version 1.7.5

> Jul 4, 2023

 - Fix: Warning: strpos(): Empty needle

### Version 1.7.4

> Apr 5, 2023

 - Decrease laminas/laminas-* composer requirements for old magento versions

### Version 1.7.3

> Apr 5, 2023

 - Fix guzzlehttp/psr7 requirements

### Version 1.7.2

> Mar 31, 2023

 - Added missing laminas-dom dependency


### Version 1.7.1

> Mar 31, 2023

 - Fix htaccess is not a valid file path (DenyListPathValidator.php)
 - Update composer and module.xml requirements
 - Replace Zend_Http_ regarding Magento Coding Standards
 - Fixed using wrong variable
 - Added 'attribute' directory to have wepb images available for product


### Version 1.7.0

> Mar 15, 2023

 - PHP 8.2 compatibility
 - Resize only important image types
 - Add standalone Resizer.php and Scaler.php models
 - Add Model/Image/Product/DestanationPathResolver.php

### Version 1.6.8

> Feb 21, 2023

 - Add env checking in CheckImageOptimizerExisting.php

### Version 1.6.7

> Feb 7, 2023

 - Fix: PHP 8.1 Deprecated Functionality: preg_match_all

### Version 1.6.6

> Jan 27, 2022

 - Prevent: PHP8.1 Deprecated function trim(): Passing null to parameter
 - Force to string converting before Minify_HTML
 - Don't minify data-breeze scripts (fix for JSMin: Unterminated RegExp)

### Version 1.6.5

> Jan 19, 2022

 - Fix/Prevent: Deprecated Functionality: preg_replace_callback(): Passing null to parameter 3

### Version 1.6.4

> Jan 17, 2022

 - Add config option enable/disable image optimization logging (closed #50)

### Version 1.6.3

> Jan 3, 2022

 - Fix: PHP Exception: no class registered for scheme 'moz-extension'

### Version 1.6.2

> Dec 19, 2022

 - Fix: Notice: Undefined property: ParamsBuilder::magentoMetadata
 - Off caching ('private') content for logged in customer(s) (#47)

### Version 1.6.1

> Dec 9, 2022

 - Fix product image params wrong sort order (in 2.4)
 - add media/logo dir to target dirs

### Version 1.6.0

> Nov 10, 2022

 - Fix backward compatability with old magento versions (2.4.1)
 - Failure image optimising command only if All optimisers Not Executable
 - Added image optimization via remote API
 - Fix for require(['vimeo/*'], ...) magento/magento2#36435
 - Add new composer requirements guzzlehttp/guzzle
 - Improve CheckImageOptimizerExisting

### Version 1.5.14

> Oct 12, 2022

 - Update composer requirements
 - Fix removing empty <style> tags
 - Remove dublicate messages

### Version 1.5.13

> Sep 26, 2022

 - Update advanced js bundling configuration (magento 2.4.5)

### Version 1.5.12

> Sep 5, 2022

 - Add pagebuilder integration (data-background-images)

### Version 1.5.11

> Sep 5, 2022

 - Remove all occurences of sourceMappingURL and sourceURL when JS files are aggregated


### Version 1.5.10

> Aug 18, 2022

 - Fix Deprecated Functionality: strpos(): Passing null to parameter 1 part

### Version 1.5.9

> Aug 18, 2022

 -  Prevent Deprecated Functionality: strpos() in php 8.1

### Version 1.5.8

> Aug 10, 2022

 - Fix wrong user agent detection
 - Removed jquery.cookie from deps (fixed Magento 2.4.5 broken add to cart)
 - Do not add requireJs lazy loading script if module is disabled
 - Fix phpstan errors
 - Fix MEQP warnings
 - Prevent not isset notices

### Version 1.5.7

> May 17, 2022

 - Fix: Don't add negative sizes
 - Fix: Implicit incompatible float to int conversion is deprecated, float array keys

### Version 1.5.6

> May 5, 2022

 - Fix:In PHP 8.1 Automatic conversion of false to array is deprecated (close #42)
 - Fix: PHP 8.1 'Deprecated Functionality: explode(): Passing null to parameter #2 () of type string is deprecated'

### Version 1.5.5

> Apr 27, 2022

 - Fix: meqp warnings
 - Fix: Notice: getimagesize(): read of 8192 bytes failed with errno=21

### Version 1.5.4

> Apr 7, 2022

 - Fix: CSS improver break svg icons xmlns inside critical css (part II)

### Version 1.5.3

> March 9, 2022

 - Fix: CSS improver break svg icons xmlns inside critical css (close #41)

### Version 1.5.2

> Jan 21, 2022

 - Fix: TypeError: strlen() expects parameter 1 to be string, null given

### Version 1.5.1

> Jan 21, 2022

 - Replace \Zend\Dom => \Laminas\Dom
 - Fix: Avoid using self-closing tag with non-void html element

### Version 1.5.0

> Jan 18, 2022

 - Don't defer css loader script (fix pagespeedCss is not defined)
 - Improve image service generators
 - Improve option(s) logic in swissup:pagespeed:images:resize command
 - Supress symfony process runtime exception (in image optimize)

### Version 1.4.27

> Aug 31, 2021

 - Fix analyze button store base url
 - Fix: prevent deferring scripts if body tag doesn't exist

### Version 1.4.26

> Aug 17, 2021

 - Fix class Optimizers\Cwebp not found
 - Add optimization for View\Result\Layout
 - Fix lose 'quality' param
 - Fix logic 'isset() will return false when checking a variable that has been assigned to null'


### Version 1.4.25

> Jul 28, 2021

 - Add config option for image optimizer timeout
 - Prevent 'Unable to unserialize value.'
 - Fix potential php warnings/errors (phpstan)

### Version 1.4.24

> July 1, 2021

 - Add our custom OptimizerChainFactory(without svgo)
 - Rename our cwebp optimizer to ConvertToWebp
 - Add CheckImageOptimizerExisting getMessages
 - Remove dublicate checking cwebp


### Version 1.4.23

> June 23, 2021

 - Removed direct marketplace module requirements
 - Fixed blown up critical css textarea at system config.

### Version 1.4.22

> June 22, 2021

 - Fix marketplace dependency

### Version 1.4.21

> June 18, 2021

 - Add marketplace installer (#34)
 - Add swissup:pagespeed:configure (#34)
 - Add criticalcss:generate command
 - Add swissup:pagespeed:[disable|enable] commands
 - Add image optimize tool checking in pagespeed:images:resize command
 - Move critical css generation into service
 - Improve command warnings and descriptions
 - Added lightboxpro to ResizeCommandTargetDirs

### Version 1.4.20

> May 17, 2021

 - Generation advanced bundles while run 'setup:static-content:deploy'
 - Decreased cron limit option default value to 100 (#35) b05edf

### Version 1.4.18

> May 17, 2021

 -  Fixed incorrect image/picture tag markup when responsive images is used, but
    the images itself are not ready to use (not found).

### Version 1.4.17

> May 14, 2021

 -  [Breeze](/m2/extensions/breeze/) integration added.
 -  Fixed broken html when using critical css feature.

### Version 1.4.16

> Apr 14, 2021

 -  Enable defer/critical css only on cms,catalog pages (#32)
 -  Disable build-in magento asyncCss on not allowed pages (#32)
 -  Added checking is image optimization was already enabled before CLI command run

### Version 1.4.15

> Apr 6, 2021

 -  Fixed invalid font url when deploying theme from terminal

### Version 1.4.14

> Mar 23, 2021

 -  Added synax highlighter to the "Advanced bundling" and "Default critical css"
    config options.
 -  Decreased layout shifts when using image lazyload feature.
 -  Fixed now working WebP images when original IMG has only `src` attribute.
 -  Added ability to use `{% raw %}{{pagespeed_asset_url}}{% endraw %}` in critical css.
    This feature allows you to include font or background urls as shown below:

    ```css
    src: url('{{pagespeed_asset_url}}/fonts/opensans/light/opensans-300.woff2') format('woff2');
    ```


### Version 1.4.12

> Nov 26, 2020

  - Add --with-custom, --with-product options to ImagesResizeCommand.
  - Advanced bundling improvement - better file resolving when minify js is enabled.
  - Small code improvments.

### Version 1.4.11

> Sep 23, 2020

  - Add preloading for custom resources.

### Version 1.4.10

> Aug 25, 2020

 -  Fixed broken mobile styles when critical css is enabled.
 -  Fixed js error when require.js loaded from CDN.

### Version 1.4.9

> Aug 6, 2020

 -  Fixed not working url to the CriticalCSS generator service.

### Version 1.4.8

> Aug 5, 2020

 -  Minimize layout shifts with own css loader.
 -  Don't push/preload images from `<picture>` tag.
 -  Fix webp+picture and lazyload data-srcset bug combination.
 -  Config refactoring.

### Version 1.4.7

> Jul 29, 2020

**Improvments**
 - Allow to install on Magento 2.4
 - Use swissup/module-image to get image dimensions
 - Optimize image dimensions calculation for luma-based themes
 - Added including custom page critical css (css/critical/[cms_index_index|...]-[1column|2column|...].[css|less])
 - Allow to include css without 'layout' suffix
 - Add config option 'Merge custom critical css files from your theme'
 - Prevent page jumping when lazy load and image placeholders are enabled
 - Override mage/bootstrap; Add requestIdleCallback wrapper in mage/bootsrap

**Fixes**
 - Remove duplicated preload css (if Magento already preloaded it)
 - Don't lazyload images that aren't visible on initial page load
 - Increase lazyload offset to 7 (Better for Argento themes)
 - Small improve lazyload (xs-hide, sm-hide)
 - Fix broken Result\Page usage; Illegal state

### Version 1.4.6

> Jul 10, 2020

**Improvments**
 - Added alternative recommendations
 - Added requirejs.nextTick setTimeout => requestIdleCallback
 - Added experimental idle forced requirejs loading
 - Improved getRjsJsonConfig function
 - Added Preloder (http2pusher before)

**Fixes**
 - Do not show filepath as config value if it was mistakenly written to config
 - Do not show critical file path when config is not saved and file is not exist
 - Fixed removing script(s) with ignoring attributes (ex:data-defer-js-ignore)

### Version 1.4.4

> Jul 1, 2020

**Improvments**
 - Add optionality <link rel='preload' if http2 push disabled
 - Add preconnect (close #24)
 - Add ExtractHosts (lost Preconnect)

**Fixes**
 - Fix many cloned source in <picture> if image repeats

### Version 1.4.3

> Jun 9, 2020

**Fixes**
 - Fix //pub/static/ in font url
 - Fix in remove empty 'criticalCss' <style>

**Improvments**
 - Improve js config options sort order

### Version 1.4.2

> May 7, 2020

**Improvments**
 - Add font http/2 pushing
 - Add ignore defer js signatures

### Version 1.4.1

> Apr 30, 2020

**Fixes**
 - Magento 2.3.5 CSP compatibility
 - Do not execute image resize task too often

### Version 1.4.0

> Apr 24, 2020

**Improvments**
 - Added ANALYZE; google pagespeed integration in config
 - Add image optimize cron schedule
 - Added filename filter argument to 'images:resize' console command
 - Added limit filter argument to 'images:resize' console command

**Fixes**
 - Fix (remove) empty data-type="criticalCss"
 - Move dublicate code in abstract class (custom config fields)
 - Added comments about heavy server load for some features
 - Add 'data-srcset' attribute to prepare list in WebP optimizer

### Version 1.3.17

> Mar 20, 2020

**Fixes**
 - Fix umlauts in image name bug
 - Fix C14N internalization bug
 - Fix php DOMDocument utf-8 international string (add prefix \xEF\xBB\xBF)
 - Remove code dublicates

**Improvments**
 - Improve bundling r.js config (swissup themes integration)
 - Move require js config default value into separate file rjs.json
 - Add AbstractImage optimizer
 - Image opimizers code was refactored
 - Move htt2push to construct di
 - Update lazysizes.min.js version to 5.2.0

### Version 1.3.15

> Feb 17, 2020

 - Marketplace data added

### Version 1.3.13

> Feb 5, 2020

**Fixes**
 - Possible fix 'Killed' bin/magento; recursion and allowed memory after install
 - Compilation not generating factories declared in di.xml (magento/magento2#12100)

### Version 1.3.12

> Jan 31, 2020

**Fixes**
 - Fix webp.webp.webp naming inside js
 - Fix $ext var notice

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
