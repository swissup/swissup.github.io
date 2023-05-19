---
layout: default
title: Argento for Shopware
description: Argento for Shopware Documentation
category: Argento Shopware
---

# sw6-pagespeed


## Installation (developer way)

```bash
cd <magento_root>
composer config repositories.sw6-pagespeed vcs git@github.com:swissup/sw6-pagespeed.git
composer require swissup/sw6-pagespeed:dev-master --prefer-source
symfony console plugin:install SwissupPagespeed --activate
symfony console cache:clear

```

## Features

 - HTML (JavaScript, CSS) minification
 - CSS delivery optimization (preload css links)
 - Critical Css
 - Images optimizations (console command)
 - Convert images to WebP format (console command)
 - Lazy loading images technique
 - Adding expires headers (experimental)
 - Adding width and height atributes to <img> tag (experimental)


## Configuration  (Extensions -> My Extensions -> Pagespeed plugin)

Option                      | Description
----------------------------|--------------------------------------------------
Enable                      | Allows to enable/disable pagespeed per store view
Enable HTML minification    | Allows to enable/disable minify your pages HTML content. (Yes)
Enable Critical Css Feature | Allows to enable/disable [Critical Css](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/optimizing-critical-rendering-path?hl=en) (Yes)
Critical CSS                | There is only what the user can see when they first load the page. This means that we only need to load the minimum amount of CSS required to render the top portion of the page across all breakpoints. For the remainder of the CSS, we don’t need to worry as we can load it asynchronously. You can generate your site critical css [here](http://pagespeed.swissuplabs.com/critical-css/).
Enable Defer Js mode        | Allow to enable/disable deferred running all js code at page
Enable Image loading="lazy" Feature | Allows to enable/disable image [lazy loading](https://developer.mozilla.org/ru/docs/Web/Performance/Lazy_loading) (Yes)
Loading Lazy Offset         | Loading lazy was skipped for n first images (4)
Loading Lazy Ignore Images  | Field specify images that won’t be lazy loading.
Enable Adding Image dimensions (width, height) | Add width and height attributes for <img> tag (No)



### Image Convering and Optimization

#### Convert media to [webp](https://developers.google.com/speed/webp)
Before images can be converted, you will need to install the converter and check it
```bash
➜ sudo apt-get install cwebp
➜ symfony console swissup:media:web --info
```

##### Convert media to webp
```bash
➜ symfony console swissup:media:web
```

##### Help by this command
```
➜  shopware symfony console swissup:media:web -h
Usage:
  swissup:media:webp [options]

Options:
      --info
      --with-unused            Should I generate webp for "unused" media entities?
  -b, --batch-size=BATCH-SIZE  Number of entities per iteration [default: "50"]
  -h, --help                   Display help for the given command. When no command is given display help for the list command
  -q, --quiet                  Do not output any message
  -V, --version                Display this application version
      --ansi|--no-ansi         Force (or disable --no-ansi) ANSI output
  -n, --no-interaction         Do not ask any interactive question
  -e, --env=ENV                The Environment name. [default: "prod"]
      --no-debug               Switch off debug mode.
  -v|vv|vvv, --verbose         Increase the verbosity of messages: 1 for normal output, 2 for more verbose output and 3 for debug

```

#### Optimize media

Before images can be optimized, you will need to install the optimizers as described in article
```bash
➜ sudo apt install jpegoptim
➜ sudo apt install optipng
➜ sudo apt install pngquant
➜ sudo npm install -g svgo
➜ sudo apt install gifsicle
➜ sudo apt-get install cwebp
```
 Than you can optimization with command
```bash
➜ symfony console swissup:media:optimize
```
##### Help by command
```bash
➜ symfony console swissup:media:optimize -h
Usage:
  swissup:media:optimize [options]

Options:
      --info
  -b, --batch-size=BATCH-SIZE  Number of entities per iteration [default: "50"]
  -h, --help                   Display help for the given command. When no command is given display help for the list command
  -q, --quiet                  Do not output any message
  -V, --version                Display this application version
      --ansi|--no-ansi         Force (or disable --no-ansi) ANSI output
  -n, --no-interaction         Do not ask any interactive question
  -e, --env=ENV                The Environment name. [default: "prod"]
      --no-debug               Switch off debug mode.
  -v|vv|vvv, --verbose         Increase the verbosity of messages: 1 for normal output, 2 for more verbose output and 3 for debug
```
##### Check optimizers
```bash
➜ symfony console swissup:media:optimize --info
+-----------+---------------------+
| Optimizer | Path                |
+-----------+---------------------+
| jpegoptim | /usr/bin/jpegoptim  |
| pngquant  | /usr/bin/pngquant   |
| optipng   | /usr/bin/optipng    |
| svgo      | /usr/local/bin/svgo |
| gifsicle  | /usr/bin/gifsicle   |
| cwebp     | /usr/bin/cwebp      |
+-----------+---------------------+

```