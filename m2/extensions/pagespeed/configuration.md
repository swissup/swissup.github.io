---
layout: default
title: Pagespeed Usage
description: How to setup email package
keywords: "pagespeed setup usage guide"
category: Pagespeed
---

# Pagespeed setup

`Store` > `Configuration` > `Swissup` > `Pagespeed`

### Main section

![Main section](/images/m2/pagespeed/configuration/main.png)

Option                     | Description
---------------------------|--------------------------------------------------
Enable                     | Allows to enable/disable pagespeed per store view
Enable in developer mode   | Allows to enable/disable pagespeed per in [developer mode](https://devdocs.magento.com/guides/v2.2/config-guide/bootstrap/magento-modes.html)
Test GZIP compression      | Test GZIP compression support on your web server
Server HTTP/2 push enabled | Enable/disable native [HTTP/2](https://en.wikipedia.org/wiki/HTTP/2) support

### Minify the HTML Content section

![Minify HTML Content](/images/m2/pagespeed/configuration/minify-html-content.png)

Option                          | Description
--------------------------------|--------------------------------------------------------------
Enable                          | Allows enabling/disabling minify your page's HTML content. (Yes)
Js Content Minification Enable  | Allows enabling/disabling minify inline JS at HTML content. (Yes)
CSS Content Minification Enable | Allows enabling/disabling minify inline CSS at HTML content. (Yes)
Minify Templates                | Allows enabling/disabling minify phtml templates (Yes)

### JavaScript Settings section

![JavaScript Settings](/images/m2/pagespeed/configuration/javascript-settings.png)

Option                                          | Description
------------------------------------------------|-------------------------------------------
Merge JavaScript Files                          | Allows to merge your javascript files (Yes)
Enable JavaScript Bundling                      | Allows to enable/disable [JavaScript Bundling](https://devdocs.magento.com/guides/v2.2/frontend-dev-guide/themes/js-bundling.html) (No)
Enable Advanced JavaScript Bundling (RequireJs)*| Allows to enable/disable [Advanced JavaScript Bundling](https://devdocs.magento.com/guides/v2.3/performance-best-practices/advanced-js-bundling.html) (No). **Experimental**, see the note below
RequireJS Bundle Generator Build Config         | r.js optimize tool config. [RequireJS bundle config generating](https://github.com/magento/m2-devtools/blob/master/docs/panels/RequireJS.md#bundle-generator)
Minify JavaScript Files                         | Allows to enable/disable minify javascript files (Yes)

> **Advanced JavaScript Bundling is experimental** and is provided by the separate `swissup/module-advanced-js-bundling` package. It is off by default. On a live store it did not improve FCP/LCP: the bundles are render-blocking and delayed `DOMContentLoaded`, and Lighthouse scores were slightly lower than without bundling (measured on one HTTP/2 store, results may differ on HTTP/1.1 or without a CDN). Enable it only after measuring your own pages with and without it.

<!--
#### If you want to enable 'Advanced JavaScript Bundling', you have to do some steps first:

1. Disable 'Merge JavaScript Files', 'Enable JavaScript Bundling', and 'Minify JavaScript Files' before.
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
Enable     | Allow to enable/disable deferred running all js code on the page
Ignore     | Allow to specify the list of signatures or script properties to prevent the deferring of this part of javascript
Add Unpack | Allow to enable/disable using custom js code unpacking
Run unpack on user interactive | Allows to enable the JavaScript delay based on user interaction

### CSS Settings section

![CSS Settings](/images/m2/pagespeed/configuration/css-settings.png)

Option           | Description
-----------------|-------------------------------------------
Merge CSS Files  | Allows to merge your CSS files (Yes)
Minify CSS Files | Allows to enable/disable minify CSS files (Yes)

#### Critical CSS (Prioritize Visible Content)

Option               | Description
---------------------|-------------------------------------------
Enable               | Allows to enable/disable [Critical Css](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/optimizing-critical-rendering-path?hl=en) (Yes)
Default Critical CSS | Only the user can see what they see when they first load the page. This means that we only need to load the minimum amount of CSS required to render the top portion of the page across all breakpoints. For the remainder of the CSS, we don’t need to worry as we can load it asynchronously. You can generate your site's critical CSS [here](http://pagespeed.swissuplabs.com/critical-css/).
Use built-in critical CSS feature | Enable/disable Magento's built-in critical.css file.
Merge custom critical CSS files from your theme | Enable/disable custom critical CSS from your theme.

### Image Processing Settings section

![Image Processing Settings](/images/m2/pagespeed/configuration/image-processing-settings.png)

#### Optimize Catalog Images

Before images can be optimized, you will need to install the Optimizers as described in the article

```bash
sudo apt install jpegoptim
sudo apt install optipng
sudo apt install pngquant
sudo npm install -g svgo
sudo apt install gifsicle
sudo apt-get install webp

php bin/magento catalog:images:resize
```

Also, you can use our improved command.

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

It creates resized and optimized product and some custom media images and their responsive duplicates 0.5x 0.75x 2x 3x. Custom dirs are WYSIWYG, catalog/category, easybanner, easyslide, swissup, highlight, easycatalogimg, prolabels, testimonials, mageplaza inside pub/media.

It has custom options such as:

Option                           | Description
---------------------------------|-----------------------------------------------------
--limit                          | Limit of images per task
--filename                       | Filename filter for images
--with-custom                    | If set, the task will resize custom images [default: true]
--with-product                   | If set, the task will resize catalog images [default: true]


Option                           | Description
---------------------------------|-----------------------------------------------------
Enable                           | Allows to enable/disable image auto-optimization (Yes)
Enable WebP Support              | Enable/disable webp image detecting and generating
Enable Responsive Images Support | Enable/disable [responsive images](https://developer.mozilla.org/en-US/docs/Learn/HTML/Multimedia_and_embedding/Responsive_images) detecting and generating (0.5x, 0.75x, 2x, 3x)
Default Responsive Images Sizes  | [Default sizes attribute values](https://developer.mozilla.org/en-US/docs/Learn/HTML/Multimedia_and_embedding/Responsive_images#Resolution_switching_Different_sizes)
Enable Cron                      | Enable/disable cron schedule(s). (No)
Cron Limit                       | Limit images per one cron task. (1000)


#### WebP for CSS background images

WebP delivery covers `<img>` tags and image URLs in JavaScript. Images set via CSS
`background-image: url(...)` are **not rewritten** — in theme stylesheets, `<style>`
blocks and inline `style` attributes alike. They stay in their original format even
when the `.webp` file exists next to them on disk. This matters most for hero
banners, where the background image is often the LCP element.

The fix is one CSS rule: declare both formats and let the browser pick.

```css
.hero {
    background-image: url("/media/wysiwyg/hero.jpg");
    background-image: image-set(
        url("/media/wysiwyg/hero.jpg.webp") type("image/webp") 1x,
        url("/media/wysiwyg/hero.jpg")      type("image/jpeg") 1x
    );
}
```

Keep the first, plain `url()` declaration — it is the fallback. A browser that does
not understand `image-set()` with `type()` drops the second declaration and uses the
first, so the worst case is the original JPEG. There is no double download: a browser
never fetches the image of an overridden declaration.

`image-set()` with `type()` is supported by about 93% of browsers in use (caniuse, August 2026):

Browser             | First version with `type()`
--------------------|----------------------------
Chrome / Edge       | 113
Firefox             | 89
Safari / iOS Safari | 17.0
Opera               | 99
Samsung Internet    | 23

Safari 14–16 and Firefox 88 support `image-set()` but not `type()`; they fall back to the JPEG.

**Use the exact WebP filename.** The module looks for the WebP file next to the
original in this order:

1. `{name}.{ext}.webp` — e.g. `hero.jpg.webp`
2. the same with a lowercased extension — e.g. `hero.JPG` → `hero.jpg.webp`
3. `{name}.webp` — e.g. `hero.webp`

Generated files normally follow the first form, so for `hero.jpg` it is `hero.jpg.webp`,
not `hero.webp`. Check that the file really exists on disk before putting it into CSS —
with `type("image/webp")` the browser commits to the WebP URL, and a missing or broken
file means no background at all.

> **Breeze / Argento:** where the theme supports it, you can move the image into the
> `data-background-images` attribute instead of CSS. The module already rewrites WebP
> URLs in that attribute, so no `image-set()` rule is needed.

#### Lazy loader for images

![Image Lazy load settings](/images/m2/pagespeed/configuration/image-lazy-settings.png)

Option  | Description
--------|-------------------------------------------
Enable  | Allows to enable/disable image [lazy loading](https://developer.mozilla.org/en-US/docs/Web/Performance/Lazy_loading) (Yes)
Ignore  | Field specify images that won’t be lazy loading.


Option                        | Description
------------------------------|-------------------------------------------
Auto Specify image dimensions | Allows to enable/disable auto add image width/height attributes (No)

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
Enable | Allows to enable/disable the DNS Prefetch feature

##### See also

Great! Now you might want to see previous:

- [Installation](/m2/extensions/pagespeed/installation/)
- [Changelog](/m2/extensions/pagespeed/changelog/)
