---
layout: default
title: Pagespeed Usage
description: How to setup email package
keywords: "pagespeed setup usage guide"
category: Pagespeed
---

# Pagespeed setup

`Store > Configuration` > `Swissup > Pagespeed`

### Main section

![Main section](/images/m2/pagespeed/configuration/main.png)

Option                     | Description
---------------------------|--------------------------------------------------
Enable                     | Allows to enable/disable pagespeed per store view
Enable in developer mode   | Allows to enable/disable pagespeed per in [developer mode](https://devdocs.magento.com/guides/v2.2/config-guide/bootstrap/magento-modes.html)
Test GZIP compression      | Test gzip compression support on your web server
Server HTTP/2 push enabled | Enable/disable native [HTTP/2](https://en.wikipedia.org/wiki/HTTP/2) support

### Minify HTML Content section

![Minify HTML Content](/images/m2/pagespeed/configuration/minify-html-content.png)

Option                          | Description
--------------------------------|--------------------------------------------------------------
Enable                          | Allows to enable/disable minify your pages HTML content. (Yes)
Js Content Minification Enable  | Allows to enable/disable minify inline JS at HTML content. (Yes)
Css Content Minification Enable | Allows to enable/disable minify inline CSS at HTML content. (Yes)
Minify Templates                | Allows to enable/disable minify phtml templates (Yes)

### JavaScript Settings section

![JavaScript Settings](/images/m2/pagespeed/configuration/javascript-settings.png)

Option                                          | Description
------------------------------------------------|-------------------------------------------
Merge JavaScript Files                          | Allows to merge your javasripts files (Yes)
Enable JavaScript Bundling                      | Allows to eneble/disable [JavaScript Bundling](https://devdocs.magento.com/guides/v2.2/frontend-dev-guide/themes/js-bundling.html) (No)
Enable Advanced JavaScript Bundling (RequireJs)*| Allows to eneble/disable [Advanced JavaScript Bundling](https://devdocs.magento.com/guides/v2.3/performance-best-practices/advanced-js-bundling.html) (No)
RequireJS Bundle Generator Build Config         | r.js optimize tool config. [RequireJS bundle config generating](https://github.com/magento/m2-devtools/blob/master/docs/panels/RequireJS.md#bundle-generator)
Minify JavaScript Files                         | Allows to enable/disable minify javascripts files (Yes)

<!--
#### If you want to enable 'Advanced JavaScript Bundling', you have to do some steps first:

1. Disable 'Merge JavaScript Files', 'Enable JavaScript Bundling' and 'Minify JavaScript Files' before.
2. Flush Cache
3. Enable Advanced JavaScript Bundling
4. Reload a homepage
5. Enable Minify JavaScript Files
6. In production mode re-deploy static content
7. Flush Cache
8. Reload a homepage
9. Enable Merge JavaScript Files
10. Flush Cache
11. Reload a homepage
-->

#### Deferred javascripts

Option     | Description
-----------|------------
Enable     | Allow to enable/disable deferred running all js code at page
Add Unpack | Allow to enable/disable using custom js code unpacking

### CSS Settings section

![CSS Settings](/images/m2/pagespeed/configuration/css-settings.png)

Option           | Description
-----------------|-------------------------------------------
Merge CSS Files  | Allows to merge your css files (Yes)
Minify CSS Files | Allows to enable/disable minify css files (Yes)

#### Critical CSS (Prioritize Visible Content)

Option               | Description
---------------------|-------------------------------------------
Enable               | Allows to enable/disable [Critical Css](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/optimizing-critical-rendering-path?hl=en) (Yes)
Default Critical CSS | There is only what the user can see when they first load the page. This means that we only need to load the minimum amount of CSS required to render the top portion of the page across all breakpoints. For the remainder of the CSS, we don’t need to worry as we can load it asynchronously. You can generate your site critical css [here](http://pagespeed.swissuplabs.com/critical-css/).
Use built-in critical CSS feature | Enable/disable Magento's built-in critical.css file.
Merge custom critical css files from your theme | Enable/disable custom critical css from your theme.

### Image Processing Settings section

![Image Processing Settings](/images/m2/pagespeed/configuration/image-processing-settings.png)

#### Optimize Catalog Images

Before images can be optimized, you will need to install the Optimizers as described in article

```bash
sudo apt install jpegoptim
sudo apt install optipng
sudo apt install pngquant
sudo npm install -g svgo
sudo apt install gifsicle
sudo apt-get install webp

php bin/magento catalog:images:resize
```

Also you can use our improved command.

```bash
bin/magento swissup:pagespeed:images:resize -h
Description:
  Creates resized and optimized product and custom images and their responsive images 0.5x 0.75x 2x 3x

Usage:
  swissup:pagespeed:images:resize [options]

Options:
  -l, --limit=LIMIT                  limit --limit=10 (default: 100 000) [default: 100000]
  -f, --filename=FILENAME            filename filter --filename=1.png
      --with-custom[=WITH-CUSTOM]    If set, the task will resize custom images [default: true]
      --with-product[=WITH-PRODUCT]  If set, the task will resize catalog images [default: true]
...

```

It creates resized and optimized product and some custom media images and their responsive duplicates 0.5x 0.75x 2x 3x. Custom dirs are wysiwyg, catalog/category, easybanner, easyslide, swissup, highlight, easycatalogimg, prolabels, testimonials, mageplaza inside pub/media.

It has custom options such us:

Option                           | Description
---------------------------------|-----------------------------------------------------
--limit                          | Limit of images per task
--filename                       | Filename filter for images
--with-custom                    | If set, the task will resize custom images [default: true]
--with-product                   | If set, the task will resize catalog images [default: true]


Option                           | Description
---------------------------------|-----------------------------------------------------
Enable                           | Allows to enable/disable image auto opmisation (Yes)
Enable WebP Support              | Enable/disable webp image detecting and generating
Enable Responsive Images Support | Enable/disable [responsive images](https://developer.mozilla.org/en-US/docs/Learn/HTML/Multimedia_and_embedding/Responsive_images) detecting and generating (0.5x, 0.75x, 2x, 3x)
Default Responsive Images Sizes  | [Default sizes atribute values](https://developer.mozilla.org/en-US/docs/Learn/HTML/Multimedia_and_embedding/Responsive_images#Resolution_switching_Different_sizes)
Enable Cron                      | Enable/disable cron schedule(s). (No)
Cron Limit                       | Limit images per one cron task. (1000)


#### Lazy loader for images

![Image Lazy load settings](/images/m2/pagespeed/configuration/image-lazy-settings.png)

Option  | Description
--------|-------------------------------------------
Enable  | Allows to enable/disable image [lazy loading](https://developer.mozilla.org/ru/docs/Web/Performance/Lazy_loading) (Yes)
Ignore  | Field specify images that won’t be lazy loading.


Option                        | Description
------------------------------|-------------------------------------------
Auto Specify image dimensions | Allows to enable/disable auto add image width/heigh attributes (No)

### Expire Header section

![Expire Header](/images/m2/pagespeed/configuration/expire-header.png)

Option                   | Description
-------------------------|-------------------------------------------
Add Expire Header Enable | Allows to enable/disable adding [Expire header](https://gtmetrix.com/add-expires-headers.html) to response
TTL for public content   | Time To Live for response by default +1 year

### DNS-prefetch section

![Dns-prefetch](/images/m2/pagespeed/configuration/dns-prefetch.png)

The [dns-prefetch](https://www.w3.org/TR/resource-hints/#dns-prefetch) link relation type is used to indicate an origin that will be used to fetch required resources, and that the user agent SHOULD resolve as early as possible.

Option                   | Description
-------------------------|-------------------------------------------
Enable | Allows to enable/disable DNS Prefetch feature

##### See also

Great! Now you might want to see previous:

- [Installation](/m2/extensions/pagespeed/installation/)
- [Changelog](/m2/extensions/pagespeed/changelog/)
