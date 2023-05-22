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
Enable                      | Allows to enable/disable pagespeed per sales channels
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
*Convert JPEG & PNG to WebP with PHP*

This extension enables you to do webp conversion with PHP. It supports an abundance of methods for converting and automatically selects the most capable of these that is available on the system.

The library can convert using the following methods:
- *cwebp* (executing [cwebp](https://developers.google.com/speed/webp/docs/cwebp) binary using an `exec` call)
- *vips* (using [Vips PHP extension](https://github.com/libvips/php-vips-ext))
- *imagick* (using [Imagick PHP extension](https://github.com/Imagick/imagick))
- *gmagick* (using [Gmagick PHP extension](https://www.php.net/manual/en/book.gmagick.php))
- *imagemagick* (executing [imagemagick](https://imagemagick.org/index.php) binary using an `exec` call)
- *graphicsmagick* (executing [graphicsmagick](http://www.graphicsmagick.org/) binary using an `exec` call)
- *ffmpeg* (executing [ffmpeg](https://ffmpeg.org/) binary using an `exec` call)
- *wpc* (using [WebPConvert Cloud Service](https://github.com/rosell-dk/webp-convert-cloud-service/) - an open source webp converter for PHP - based on this library)
- *ewwww* (using the [ewww](https://ewww.io/plans/) cloud converter (1 USD startup and then free webp conversion))
- *gd* (using the [Gd PHP extension](https://www.php.net/manual/en/book.image.php))

In addition to converting, the library also has a method for *serving* converted images, and we have instructions here on how to set up a solution for automatically serving webp images to browsers that supports webp.

*Shopware at least has one reasonable [system requirement](https://docs.shopware.com/en/shopware-6-en/first-steps/system-requirements)  out of the box and suits our needs. It is Gd PHP extension*

#### Optimize media (optimization of another images formats is recommended but not necessary)

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
##### Check optimize tools
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
*Optimization tools*

The package will use these optimizers if they are present on your system:

- [JpegOptim](https://github.com/tjko/jpegoptim)
- [Optipng](http://optipng.sourceforge.net/)
- [Pngquant 2](https://pngquant.org/)
- [SVGO 1](https://github.com/svg/svgo)
- [Gifsicle](http://www.lcdf.org/gifsicle/)
- [cwebp](https://developers.google.com/speed/webp/docs/precompiled)

Here's how to install all the optimizers on Ubuntu:

```bash
sudo apt-get install jpegoptim
sudo apt-get install optipng
sudo apt-get install pngquant
sudo npm install -g svgo
sudo apt-get install gifsicle
sudo apt-get install webp
```

And here's how to install the binaries on MacOS (using [Homebrew](https://brew.sh/)):

```bash
brew install jpegoptim
brew install optipng
brew install pngquant
npm install -g svgo
brew install gifsicle
brew install webp
```
And here's how to install the binaries on Fedora/RHEL/CentOS:

```bash
sudo dnf install epel-release
sudo dnf install jpegoptim
sudo dnf install optipng
sudo dnf install pngquant
sudo npm install -g svgo
sudo dnf install gifsicle
sudo dnf install libwebp-tools
```