---
layout: default
title: Pagespeed Changelog
description: Pagespeed changelog
keywords: pagespeed changelog, pagespeed updates
category: Pagespeed
---

# Changelog



### Version 1.13.0

#### Added

- Introduced **stream-based optimization pipeline** for HTML transformations. Optimizers now use a shared `Context` object for DOM operations, improving performance and modularity.
- **New cache management system**: `Model/Cache/CacheManager.php` added for unified optimizer caching with LRU in-memory support.
- **New context system**: `Model/Optimizer/Context.php` and `ContextFactory.php` for shared state during optimizations.
- **Centralized DOM utilities**: `Model/Optimizer/DomManager.php` for robust DOM parsing and manipulation.
- **Stream-aware optimizer interface**: `Model/Optimizer/StreamOptimizerInterface.php` enables pipeline compatibility.
- **JavaScript manager**: `Model/Optimizer/Js/JsManager.php` for third-party script detection and content fixes.
- **HashManager**: For hash-based tracking of HTML elements (e.g., scripts) during optimization.
- **Unit Tests**: Extensive PHPUnit test coverage for all major optimizer classes (see `Test/Unit/...`).
- **New optimizer architecture**: Most image, CSS, JS, and preload optimizers migrated to stream-based classes for improved reliability.
- **Responsive image optimizer**: Now generates `srcset` and `sizes` for product and CMS images with flexible resolutions.
- **Critical CSS optimizer**: Refactored to support stream processing and improved inlining.
- **LCP optimizer**: Refactored to preload above-the-fold images for home, CMS, product, and category pages.
- **DNS Prefetch and Preconnect optimizers**: Add `<link rel="dns-prefetch">` and `<link rel="preconnect">` for third-party resources.
- **Unit tests**: Added for all new/changed classes.

#### Changed
- **Refactor**: All major optimizers (HTML minification, defer CSS/JS, lazy load, responsive images, specify dimensions, WebP conversion, preload, DNS prefetch, preconnect) now use stream-based context and pipeline.
- **Image lazy load optimizer**: Improved logic for skipping LCP candidates and configurable offset.
- **Defer CSS optimizer**: More robust stylesheet detection, preload limit based on merge settings, CSS loader script added for styles-l.
- **Defer JS optimizer**: Now moves scripts using hash markers, supports ignore attributes/signatures, adds defer/async based on position and type.
- **WebP optimizer**: Improved support for `<picture>` tags and JS-based replacements.
- **Preload optimizer**: More robust asset deduplication and attribute extraction.
- **Expire header optimizer**: Now stream-based, restricts to allowed page types, respects Varnish configuration.
- **ExtractHosts**: Now uses modern PHP syntax, improved host detection, and caching.
- **Image file extension extraction**: Logic improved to strip query strings and support edge cases.
- **Abstract optimizers**: Unified interface and

### Version 1.11.6

> May 26, 2025

 - Preload only 1-6 first stylesheet in defercss optimizer

### Version 1.11.5

> Apr 24, 2025

 - Fix: data-pagespeed-hash breaks the 'text/x-magento-init' script with an unescaped attribute (script inside another script)
 - Prev commit refactored

### Version 1.11.4

> Apr 23, 2025

 - Fix: 'Scripts relocation' text/x-magento-template

### Version 1.11.3

> Apr 11, 2025

 - Remove reqs laminas/laminas-dom (for php 8.4 compatibility)
 - Fix: DOMDocument::loadHTML(): Argument #1 () must not be empty (close #74)

### Version 1.11.2

> Apr 4, 2024

 - Prevent parsing non html response (robots.txt)
 - Fixed implicitly marking parameter as nullable error in PHP 8.4
 - Improve ExtrractHosts(use in preconnect, dns-prefetch)
 - Spicify crossorigin attribute for link rel=preconnect
 - Improve LCP detecting logic (add easyslide img on homepage)

### Version 1.11.1

> Mar 11, 2024

 - Prevent (Bundle\Manager __construct running) advanced js bundling if it disabled
 - Fix bad string replacing Magento\Deploy\Service\Bundle
 - Improve code readability

### Version 1.11.0

> Feb 28, 2024

 - Add link rel='preload' strong order styles, fonts, scripts, images
 - Improve AddLinkPreload
 - Move ExtaractHosts model in more correct place
 - Move Html minifier in more correct place
 - Move service classes to Model dir


### Version 1.10.0

> Feb 12, 2024

 - Added LCP optimizer
 - Added standalone preload optimizer
 - Removed excessive replaces in lazyload
 - Avoided marking too many requests with high priority
 - Prevented lazyload offset problems
 - Removed SERVER PUSH implementation
 - Fixed criticalCss search in HTML
 - Fixed criticalCss duplication
 - Ignored images with class 'product-image-photo' in lazyload optimizer

### Version 1.9.9

> Dec 20, 2024

 - Fix .webp.webp 404 when image url is the same in srcset attribute
 - Move preload after </title> tag

### Version 1.9.8

> Dec 9, 2024

 - Return 'Use Pagespeed at' and write logic for it
 - Disable page speed on firecheckout/checkout pages by default
 - Config sections was refactored
 - Possible solution for not deferiing requirejs scripts

### Version 1.9.7

> Dec 4, 2024

 - Fix integrity attributes bug (once again)
 - Fix place of insertion for advanced bundling (after requirejs-min-resolver)
 - Add defering for obsolete 'application/javascript' js
 - Fixed broken styles on mobile devices
 - Fix getting random category url for critical css generation service
 - New logic in get store ids method for critical css
 - Fix get category url on backend (generate critical css)
 - Fix backslash bug in script type='text/html' (breeze)
 - Force init mage components from header sections

### Version 1.9.6

> Nov 29, 2024

- Improve loading of deferred styles to prevent CLS
- Use DOMContentLoaded insteadof load event in override.js

### Version 1.9.5

> Nov 27, 2024

- Fix ignore by signature logic in deferjs optimizer
- Add varnish checking in expire optimizer
- Remove adding unnecessary 'defer' and 'async' in defer js optimizer
- Fixed possible unprocessed deferred scripts on Safari
- Simplify unpack script


### Version 1.9.4

> Nov 14, 2024

- Fix getStoreIds when website '0'

### Version 1.9.3

> Nov 13, 2024

- Move 'Generate themes criitical css' into standalone config option

### Version 1.9.2

> Nov 12, 2024

- Add {pagespeed_asset_url} support to custom preloaded resources (close #70)
- Add 'Generate critical css for theme(s)'
- Add View/Asset/PlaceholderReplacer
- Fix : 'Deprecated Functionality: str_replace(): Passing null to parameter #3 () of type array|string is deprecated Helper/Config.php on line 487'

### Version 1.9.1

> Oct 30, 2024

- Add 'Enable Critical Css for Pages' config option

### Version 1.9.0

> Oct 29, 2024

- Improve isAllowedCriticalCssOnCurrentPage logic
- Add hidden config option pagespeed/css/critical_handles which set pages integrated with critical css feature
- Preserve same order of js files regardless of data-defer-js-ignore attr
- Improve generate critical css button extra html
- Fix Incorrect JavaScript File Loading Order After Enabling CSP module magento/magento2#39274
- Move couple requirejs scripts to subdir
- Rename config option method


### Version 1.8.15

> Oct 8, 2024

- Add enable/disable html processing config option
- Image also should preloaded
- Add debug mode
- Add options for 'Enable/Disable Pagespeed per page type'

### Version 1.8.14

> Oct 7, 2024

- Fix short sriHashes patch placeholder after minification


### Version 1.8.13

> Oct 4, 2024

- Fix sriHashes performance issue

### Version 1.8.12

> Oct 1, 2024

- add fetchpriotity=high

### Version 1.8.11

> Oct 1, 2024

- Fix greedy behaviour LIBXML_HTML_NOIMPLIED
- Add LIBXML_SCHEMA_CREATE (#68)
- Fix double urlencoding
- Fix wrong redirecting
- Add button for generate default critical css

### Version 1.8.10

> Sep 18, 2024

- Fix file.min.js and file.js dublicate loading for '_' and '$' rjs contexts
- Prevent integrity adding (broke js files including) if another files doesn't have integrity
- Prevent 'jsbuild' js error

### Version 1.8.9

> Sep 9, 2024

 - Remove js bundles from breeze pages

### Version 1.8.8

> Sep 2, 2024

 - Fix config path move_inline_to_bottom => move_script_to_bottom


### Version 1.8.7

> Sep 2, 2024

 - Fix csp integrity wit older magento versions (close #67)

### Version 1.8.6

> Aug 30, 2024

 - Add integration advanced bundles with csp module (generate integaration hashes)
 - Fix advanced js bundling file adding
 - Fix isDeferJsUnpackEnable logic
 - Fix phpstan (phpdoc) error

### Version 1.8.6

> Aug 27, 2024

 - Move PcreBacktrackLimit patch in standalone class and wrap all optimizers with it

### Version 1.8.4

> Aug 27, 2024

 - Increase pcre.backtrack_limit (close #66)
 - Fix wrong doublication and defering window.sriHashes =

### Version 1.8.3

> Aug 13, 2024

 - Fix mailformed html loading &amp; (close #65)

### Version 1.8.2

> Aug 13, 2024

 - Up swissup/module-image-optimizer to 1.0.3

### Version 1.8.1

> Aug 7, 2024

 - Improve image searching in webp optimizer (#63)
 - Move part image config options into swissup/module-image-optimizer

### Version 1.8.0

> Jul 29, 2024

 - Fix nonce attribute in defer js (CSP integration)
 - Add (move part code to) swissup/module-image-optimizer

### Version 1.7.40

> Jul 16, 2024

 - Catch all exceptions until image optimize
 - Fix empty message error

### Version 1.7.39

> Jul 12, 2024

 - Fix:Static content deploy compact strategy compatibility (close #62)

### Version 1.7.38

> Jul 10, 2024

 - Prevent vanilla js events DOMContentLoaded deferring
 - Fix for autogenerated scripts

### Version 1.7.37

> Jul 3, 2024

 - Fix too long `sriHashes =` script (PREG_BACKTRACK_LIMIT_ERROR)

### Version 1.7.36

> Jun 27, 2024

 - Fix Uncaught ReferenceError: require is not defined (close #57)

### Version 1.7.35

> Jun 13, 2024

 - Preload image if main `<img>` tag in `<picture>` tag is already has .webp extension
 - Add Http2 server_push option comments about deprecating

### Version 1.7.34

> Jun 6, 2024

 - Preload images if don't loading='lazy' it
 - Add attribute fetchpriority='high' in preload <link tags

### Version 1.7.33

> Jun 3, 2024

 - Add ignoring by css class in lazyload optimizer

### Version 1.7.32

> May 28, 2024

 - Add swissup/module-speculation-rules requirements
 - Fix: 'Uncaught SyntaxError: Function statements require a function name' in unpack-defer.js

### Version 1.7.31

> May 21, 2024

 - Fix double data-mage-init initialization for components in viewport
 - Move `ignore` config option up to depend `enable` option

### Version 1.7.30

> May 21, 2024

 - Increase the Mobiledetect version

### Version 1.7.29

> May 10, 2024

 - Prevent broken attributes parsing data-mage-init=' { }'

### Version 1.7.28

> Apr 23, 2024

 - Fixed "Invalid header value" error when image has newlines around src

### Version 1.7.27

> Apr 5, 2024

 - Remove useless (old version) of ParamsBuilder
 - Fix curl options in custom admin form field(s)

### Version 1.7.26

> Mar 28, 2024

 -  Remove `psr/log:^1` dependency. We support all psr/log versions now.

### Version 1.7.25

> Mar 19, 2024

 - Reworked image adapter(s) integration (preference => plugin)
 - Fix 'Deprecated Functionality: Automatic conversion of false to array is deprecated' (close #55)
 - Fix phpstan errors

### Version 1.7.24

> Mar 12, 2024

 - Fix: "Uncaught Error: Script error for 'jquery' and 'mage/apply/main'\'; too early run require() before requirejs-min-resolver, mixins, etc.

### Version 1.7.23

> Mar 11, 2024

 - Fixed custom images over-optimizing

### Version 1.7.22

> Feb 29, 2024

 - Remove unused code

### Version 1.7.21

> Dec 1, 2023

 - Fix: Cannot use object of type Laminas\Http\Headers as array
 - Fix phpstan zend warning
 - Fix gzip header detection
 - Fix HTTP2 detecting (skip default http_ver param)
 - Add focusin observer in requirejs-override
 - Add init data-mage-init js component(s) in viewport (init menu defore interaction)

### Version 1.7.20

> Nov 17, 2023

 - Fix unpack defering with enabled merge js

### Version 1.7.19

> Nov 17, 2023

 - Merge head scripts blocks
 - Fix console warning messages
 - Fix mapping in advance js bundling

### Version 1.7.18

> Nov 13, 2023

 - Improve 'interactive' config description
 - Fix checkoutConfig defering error

### Version 1.7.17

> Nov 10, 2023

 - Override require.config for interactive deps loading
 - Fix js defer, add ignore "window.checkout =""

### Version 1.7.16

> Oct 26, 2023

 - Up magento framework composer requirements (2.4.4)


### Version 1.7.15

> Oct 24, 2023

 - Fix firefox integration

### Version 1.7.14

> Oct 19, 2023

 - Fix phpstan error

### Version 1.7.13

> Oct 19, 2023

 - Fix js unpacking for delayed scripts

### Version 1.7.12

> Oct 16, 2023

 - Add interactive unpacking mode for delayed scripts
 - Add load-all-requirejs-scripts.js (disabled)

### Version 1.7.11

> Sep 15, 2023

 - Add 'Catalog media URL format' checking before run 'images:optimize' command
 - Fix broken srcset if webp some size doesn't exist
 - Replace origin src in <img> tag inside <picture> (webp) for breeze compatability
 - Run html optimizers early to prevent race condition with breeze

### Version 1.7.10

> Aug 18, 2023

 - Prevent: PHP8.1 Deprecated function
 - Fix phpstan errors

### Version 1.7.9

> Aug 2, 2023

 - Fix file extension detecting with query params in url (webp)
 - Fix broken path detection /media//

### Version 1.7.8

> Jul 20, 2023

 - Fix phpstan errors
 - Fix some phpstan warnings

### Version 1.7.7

> Jul 6, 2023

 - Add magento/module-media-gallery-renditions integration (close #53)

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
 - Fix removing empty `<style>` tags
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
 - Add optionality `<link rel='preload'` if http2 push disabled
 - Add preconnect (close #24)
 - Add ExtractHosts (lost Preconnect)

**Fixes**
 - Fix many cloned source in <picture> if image repeats

### Version 1.4.3

> Jun 9, 2020

**Fixes**
 - Fix //pub/static/ in font url
 - Fix in remove empty 'criticalCss' `<style>`

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
