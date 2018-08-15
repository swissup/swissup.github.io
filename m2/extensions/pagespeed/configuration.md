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

Option                   | Description
-------------------------|--------------------------------------------------
Enable                   | Allows to enable/disable pagespeed per store view
Enable in developer mode | Allows to enable/disable pagespeed per in [developer mode](https://devdocs.magento.com/guides/v2.2/config-guide/bootstrap/magento-modes.html)
Test GZIP compression    | Test gzip compression support on your web server

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

Option                     | Description
---------------------------|-------------------------------------------
Merge JavaScript Files     | Allows to merge your javasripts files (Yes)
Enable JavaScript Bundling | Allows to eneble/disable [JavaScript Bundling](https://devdocs.magento.com/guides/v2.2/frontend-dev-guide/themes/js-bundling.html) (No)
Minify JavaScript Files    | Allows to enable/disable minify javascripts files (Yes)

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

#### Optimise CSS Delivery

Option         | Description
---------------|-------------------------------------------
Enable         | Allows to enable/disable [Optimize CSS Delivery](https://developers.google.com/speed/docs/insights/OptimizeCSSDelivery) (Yes)
Enable LoadCss | Allows to enable/disable [loadCss](https://github.com/filamentgroup/loadCSS#why-loadcss) js library (Yes)

#### Critical CSS (Prioritize Visible Content)

Option               | Description
---------------------|-------------------------------------------
Enable               | Allows to enable/disable [Critical Css](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/optimizing-critical-rendering-path?hl=en) (Yes)
Default Critical CSS | There is only what the user can see when they first load the page. This means that we only need to load the minimum amount of CSS required to render the top portion of the page across all breakpoints. For the remainder of the CSS, we don’t need to worry as we can load it asynchronously. You can generate your site critical css [here](http://ci.swissuplabs.com/pagespeed/critical-css/).


### Image Processing Settings section

![Image Processing Settings](/images/m2/pagespeed/configuration/image-processing-settings.png)

#### Optimize Catalog Images

Before images can be optimized, you will need to install the Optimizers as described in article

~~~~
sudo apt install jpegoptim
sudo apt install optipng
sudo apt install pngquant
sudo npm install -g svgo
sudo apt install gifsicle

php bin/magento catalog:images:resize
~~~

Option | Description
-------|-----------------------------------------------
Enable | Allows to enable/disable image auto opmisation (Yes)


#### Lazy loader for images

Option  | Description
--------|-------------------------------------------
Enable  | Allows to enable/disable image [lazy loading](https://github.com/aFarkas/lazysizes) (Yes)
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
