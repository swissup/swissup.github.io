---
layout: default
title: Page Speed Changelog
description: Pagepeed module updates
category: Page Speed
---

# Changelog

### Version 1.3.1

- Add compatability with AheadWorks > iPhone Theme 3
- Ignore webpos pages
- Add ignore xml errors option for loadHtml
- Improve node saving; fix strip C14N (image lazyload)
- Fix lazy-javascript for Mozilla (defer-js)
- Improve attributes checking in defer-css
- etc.

### Version 1.3.0

- Code refactoring
- Increase (fix) error reporting (logging) logic
- Improve google service response prepare
- Disable yahoo image optimize service
- Disable DNS prefetch on AMP pages
- Skip too much file compressing (more 85%)
- Rename method smush => optimize
- etc.

### Version 1.2.14

- Fix const typo in cron function

### Version 1.2.12

- Improve observers call logic
- Remove dublicate code
- Fix some config options
- etc.

### Version 1.2.11

- Improve Google Pagespeed Insight Api
- Fix bug file extension in upper case

### Version 1.2.10

- Add dns-prefetch feature
- Add auto specify image dimensions
- Add tinypng(tinify) service image compress
- Fix Google Pagespeed Insight
- Add text/lazyload-javascript for inline js (defer-js)
- Generate critical css for each page (defer-css)
- Add self critical css api service (defer-css)

### Version 1.2.9

 -  Fix MEQP
 -  Delete does not exist file from database
 -  Fix phpmd warnings

### Version 1.2.8

 -  google insight image optimisation was added
 -  Autoserch/Crawl mode and interfaces was added
 -  knockout js comments was integrated
 -  Fix get_headers warnings
 -  tm/lazyload 1.0.2
 -  tm/defer-css 1.1.0
 -  tm/defer-js 1.0.3

### Version 1.2.7

 -  Fix defer-js package version
 -  Add js files ';' delimiter

### Version 1.2.6

 -  Cocoen image compare js lib was added
 -  Add tm/defer-css (loadCSS)
 -  Chunk name add to target filename js and css files
 -  minify css&js config options depends was add
 -  Added function_exists check for posix_getpwuid
 -  Add catch for exec return 1 (catchall for general errors)
 -  etc.

### Version 1.2.5

 -  Add guetzli tool
 -  gifsicle, jpegoptim, optipng tools version up
 -  , in filename 'bug' was fixed
 -  Fix - Warning: array_merge(): Argument 2 is not an array
 -  Improve error logging
 -  Improve test compressing action
 -  etc.


### Version 1.2.4

 -  AMP compatibility added
 -  Fixed compatibility with Argento backend css. Now it's merged together with
    other css files
 -  Improved logic to work with non utf8 encoding
 -  Image lazyload improvements and fixes
 -  Fixed php notice in system configuration
 -  Fatal error when using JSMinPlus::min was fixed
 -  Other minor stability improvements
