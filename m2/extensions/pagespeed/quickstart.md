---
layout: default
title: Pagespeed Usage
description: How to setup pagespeed package
keywords: "pagespeed setup usage guide quickstart"
category: Pagespeed
---

# Pagespeed QuickStart


### Lets start

#### Fast enable, configure and deploy

```bash
bin/magento marketplace:package:install swissup/module-pagespeed
bin/magento setup:static-content:deploy [-f]
```

Or use symlink command

```bash
bin/magento swissup:pagespeed:configure
bin/magento setup:static-content:deploy [-f]
```

#### Next step to run images optimisation
>That can take a time

```bash
php swissup:pagespeed:images:optimize
```

If you have some suggestions from Google PageSpeed Insights. Find your problem in list below.


#### Problems list

  - [Enable compression](#enable-compression)
  - [Minify JavaScript](#minify-javascript)
  - [Remove render-blocking JavaScript](#remove-render-blocking-javascript)
  - [Minify HTML](#minify-html)
  - [Minify CSS](#minify-css)
  - [Optimize CSS Delivery](#optimize-css-delivery)
  - [Prioritize Visible Content](#prioritize-visible-content)
  - [Optimize images](#optimize-images)

Check your site pagespeed rank and take results screenshot
We recomend use [Google Page speed insights online tool](https://developers.google.com/speed/pagespeed/insights)
Usally we also check results at [Gtmetrix online tool](http://gtmetrix.com).




Open configuration `Store > Configuration` > `Swissup > Pagespeed`

In Main section set `Enable - Yes`

![Main section](/images/m2/pagespeed/configuration/main.png)

Or enable using cli:

~~~
bin/magento config:show pagespeed/main/enable
bin/magento config:set pagespeed/main/enable 1
~~~

If your store is in developer mode, you need to enable developer mode compatability:

`Enable in developer mode - Yes`

To check current mode, use cli command:

~~~
bin/magento deploy:mode:show
~~~

### Enable compression

If on google pagespeed suggestion you can see something like:

![Enable compression](/images/m2/pagespeed/suggestion/compression.png)

> Enable compression
>
> Compressing resources with gzip or deflate can reduce the number of bytes sent over the network.
>
> [Enable compression](https://developers.google.com/speed/docs/insights/EnableCompression) for the following resources to reduce their transfer size by 1.9MiB (76% reduction).

##### How to fix

When optimizing a website’s performance, the very first thing you should check is whether or not your site is taking advantage of GZIP Compression. If you see green message. All right.
But if you see red error message than you need to enable and test gzip compression support on your web server.

> The HTML5 Boilerplate project contains [sample configuration files](https://github.com/h5bp/server-configs) for all the most popular servers with detailed comments
> for each configuration flag and setting: find your favorite server in the list, look for the gzip section, and confirm that
> your server is configured with recommended settings.

You can check your site [here](https://checkgzipcompression.com/).

#### For Apache

Find and uncomment deflate section in your [pub/.htaccess](https://github.com/magento/magento2/blob/2.2/pub/.htaccess#L92-L118) and [.htaccess](https://github.com/magento/magento2/blob/2.2/.htaccess#L89-L115) files

<details>
    <summary>Uncomment Default configuration</summary>
    <pre><code>&lt;IfModule mod_deflate.c&gt;

    ############################################
    ## Enable apache served files compression
    ## http://developer.yahoo.com/performance/rules.html#gzip

    # Insert filter on all content
    SetOutputFilter DEFLATE
    # Insert filter on selected content types only
    AddOutputFilterByType DEFLATE text/html text/plain text/xml text/css text/javascript

    # Netscape 4.x has some problems...
    BrowserMatch ^Mozilla/4 gzip-only-text/html

    # Netscape 4.06-4.08 have some more problems
    BrowserMatch ^Mozilla/4\.0[678] no-gzip

    # MSIE masquerades as Netscape, but it is fine
    BrowserMatch \bMSIE !no-gzip !gzip-only-text/html

    # Don't compress images
    SetEnvIfNoCase Request_URI \.(?:gif|jpe?g|png)$ no-gzip dont-vary

    # Make sure proxies don't deliver the wrong content
    Header append Vary User-Agent env=!dont-vary

&lt;/IfModule&gt;</code></pre>
</details>

<details>
<summary>Or Add following code in end of .htaccess files</summary>

<pre><code>    &lt;IfModule mod_php5.c&gt;
        ## enable resulting html compression
       php_flag zlib.output_compression on
    &lt;/IfModule&gt;

    &lt;IfModule mod_deflate.c&gt;

        SetOutputFilter DEFLATE
        AddOutputFilterByType DEFLATE text/html text/css text/plain text/xml application/x-javascript application/x-httpd-php
        BrowserMatch ^Mozilla/4 gzip-only-text/html
        BrowserMatch ^Mozilla/4\.0[678] no-gzip
        BrowserMatch \bMSIE !no-gzip !gzip-only-text/html
        BrowserMatch \bMSI[E] !no-gzip !gzip-only-text/html
        SetEnvIfNoCase Request_URI \.(?:gif|jpe?g|png)$ no-gzip

    &lt;/IfModule&gt;

    Header set Connection keep-alive

    # Expires Headers - 2678400s = 31 days
    &lt;IfModule mod_expires.c&gt;
      ExpiresActive On
      ExpiresDefault &quot;access plus 1 seconds&quot;
      ExpiresByType text/html &quot;access plus 7200 seconds&quot;
      ExpiresByType image/gif &quot;access plus 2678400 seconds&quot;
      ExpiresByType image/jpeg &quot;access plus 2678400 seconds&quot;
      ExpiresByType image/png &quot;access plus 2678400 seconds&quot;
      ExpiresByType text/css &quot;access plus 518400 seconds&quot;
      ExpiresByType text/javascript &quot;access plus 2678400 seconds&quot;
      ExpiresByType application/x-javascript &quot;access plus 2678400 seconds&quot;
    &lt;/IfModule&gt;

    # Cache Headers
    &lt;IfModule mod_headers.c&gt;
      # Cache specified files for 31 days
      &lt;FilesMatch &quot;\.(ico|flv|jpg|jpeg|png|gif|css|swf)$&quot;&gt;
      Header set Cache-Control &quot;max-age=2678400, public&quot;
      &lt;/FilesMatch&gt;
      # Cache HTML files for a couple hours
      &lt;FilesMatch &quot;\.(html|htm)$&quot;&gt;
      Header set Cache-Control &quot;max-age=7200, private, must-revalidate&quot;
      &lt;/FilesMatch&gt;
      # Cache PDFs for a day
      &lt;FilesMatch &quot;\.(pdf)$&quot;&gt;
      Header set Cache-Control &quot;max-age=86400, public&quot;
      &lt;/FilesMatch&gt;
      # Cache Javascripts for 31 days
      &lt;FilesMatch &quot;\.(js)$&quot;&gt;
      Header set Cache-Control &quot;max-age=2678400, private&quot;
      &lt;/FilesMatch&gt;
    &lt;/IfModule&gt;</code></pre>

</details>

<details>
<summary>Check Apache configuration files</summary>

Check and Enable AllowOverride option in you Apache configuration

```
AllowOverride All
```

Apache configuration file is located in one of these locations:

```
/etc/apache2/httpd.conf
/etc/apache2/apache2.conf
/etc/httpd/httpd.conf
/etc/httpd/conf/httpd.conf
```

Check also

```
KeepAlive On
```

If you do not have any error you have AllowOverride None or All. Then alter the Deny/Allow to:

```
Deny From All
```

If you have the 403 result it's a AllowOverride All.

Comment 'Deny From All'
```
#Deny From All #Check for AllowOverride All
```

</details>

#### For Nginx

<details>
<summary>/etc/nginx/nginx.conf</summary>

<pre><code>
gzip on;
gzip_disable "msie6";

gzip_comp_level 6;
gzip_min_length 1100;
gzip_buffers 16 8k;
gzip_proxied any;

gzip_types
text/plain
text/css
text/js
text/x-js
text/xml
text/html
text/javascript
image/svg
image/svg+xml
image/eps
application/javascript
application/x-javascript
application/json
application/xml
application/rss+xml
application/xml+rss;

gzip_vary on;

#browser caching of static assets
location ~*  \.(jpg|jpeg|png|webp|gif|ico)$ {
  expires 31d;
}

#browser caching of css
location ~*  \.(css)$ {
  expires 6d;
}

#browser caching of js
location ~*  \.(js)$ {
  expires 31d;
}
</code></pre>

</details>

### Minify JavaScript

If you see something like:

![Minify Js](/images/m2/pagespeed/suggestion/minifyjs.png)

> Minify JavaScript
>
> Compacting JavaScript code can save many bytes of data and speed up downloading, parsing, and execution time.
>
> [Minify JavaScript](https://developers.google.com/speed/docs/insights/MinifyResources) for the following resources to reduce their size by 235.8KiB (44% reduction).

##### How to fix

Open configuration  `Store > Configuration` > `Swissup > Pagespeed > JavaScript Settings`

Enable

    Merge JavaScript File - Yes
    Minify JavaScript Files - Yes

![JavaScript Settings](/images/m2/pagespeed/configuration/javascript-settings.png)

> Please go to Cache Management and refresh cache types.

### Remove render-blocking JavaScript

If you see something like:

> Eliminate render-blocking JavaScript and CSS in above-the-fold content
>
> Your page has 1 blocking script resources. This causes a delay in rendering your page.
>
> None of the above-the-fold content on your page could be rendered without waiting for the following resources to load. Try to defer or asynchronously load blocking resources, or inline the critical portions of those resources directly in the HTML.
>
> [Remove render-blocking JavaScript](https://developers.google.com/speed/docs/insights/BlockingJS):

##### How to fix

Open configuration `Store > Configuration` > `Swissup > Pagespeed > JavaScript Settings > Deferred javascripts`

Set option

    Enable - Yes
    Add Unpack - Yes

> Please go to Cache Management and refresh cache types.

### Minify HTML

If you see something like:

![Minify HTML](/images/m2/pagespeed/suggestion/minifyhtml.png)

> Minify HTML
>
> Compacting HTML code, including any inline JavaScript and CSS contained in it, can save many bytes of data and speed up download and parse times.
>
> [Minify HTML](https://developers.google.com/speed/docs/insights/MinifyResources) for the following resources to reduce their size by 1.4KiB (27% reduction).

##### How to fix

Open configuration `Store > Configuration` > `Swissup > Pagespeed > Minify HTML Content`

![Minify HTML Content](/images/m2/pagespeed/configuration/minify-html-content.png)

Set

    Enable - Yes
    Js Content Minification Enable - Yes
    CSS Content Minification Enable - Yes
    Minify Templates - Yes

> Please go to Cache Management and refresh cache types.

### Minify CSS

If you see something like:

> Minify CSS
>
> Compacting CSS code can save many bytes of data and speed up download and parse times.
>
> [Minify CSS](https://developers.google.com/speed/docs/insights/MinifyResources) for the following resources to reduce their size by 327B (16% reduction).

##### How to fix

Open configuration `Store > Configuration` > `Swissup > Pagespeed > CSS Settings`

![CSS Settings](/images/m2/pagespeed/configuration/css-settings.png)

Set

    Merge CSS Files - Yes
    Minify CSS Files - Yes

> Please go to Cache Management and refresh cache types.

### Optimize CSS Delivery

If you see something like:

> Eliminate render-blocking JavaScript and CSS in above-the-fold content
>
> Your page has 1 blocking CSS resources. This causes a delay in rendering your page.
>
> None of the above-the-fold content on your page could be rendered without waiting for the following resources to load. Try to defer or asynchronously load blocking resources, or inline the critical portions of those resources directly in the HTML.
>
> [Optimize CSS Delivery](https://developers.google.com/speed/docs/insights/OptimizeCSSDelivery) of the following.

##### How to fix

Open configuration `Store > Configuration` > `Swissup > Pagespeed > CSS Settings > Optimize CSS Delivery`

Set

    Enable - Yes
    Enable LoadCss - Yes

> Please go to Cache Management and refresh cache types.

Be careful this option can cause [FOUC](https://en.wikipedia.org/wiki/Flash_of_unstyled_content).

For fix it you need do Prioritize Visible Content.

### Prioritize Visible Content

If you see something like:

> Prioritize visible content
>
> Your page requires additional network round trips to render the above-the-fold content. For best performance, reduce the amount of HTML needed to render above-the-fold content.
>
> The entire HTML response was not sufficient to render the above-the-fold content. This usually indicates that additional resources, loaded after HTML parsing, were required to render above-the-fold content. [Prioritize visible content](https://developers.google.com/speed/docs/insights/PrioritizeVisibleContent) that is needed for rendering above-the-fold by including it directly in the HTML response.
>
> Only about 7% of the final above-the-fold content could be rendered with the full HTML response.

##### How to fix

Open configuration `Store > Configuration` > `Swissup > Pagespeed > CSS Settings > Critical CSS (Prioritize Visible Content)`

Generate your store critical css [here](http://ci.swissuplabs.com/pagespeed/critical-css/).

Set

    Enable - Yes
    Default Critical CSS - [Set generated criticall css]

> Please go to Cache Management and refresh cache types.

Check 404 errors on page.

### Optimize images

If you see something like:

> Optimize images
>
> Properly formatting and compressing images can save many bytes of data.
>
> [Optimize the following images](https://developers.google.com/speed/docs/insights/OptimizeImages) to reduce their size by 17.1KiB (14% reduction).

##### How to fix

  Before images can be optimized, you will need to install the Optimizers as described in [article](https://github.com/spatie/image-optimizer#optimization-tools)

  ~~~sh
  sudo apt-get install jpegoptim
  sudo apt-get install optipng
  sudo apt-get install pngquant
  sudo npm install -g svgo
  sudo apt-get install gifsicle
  sudo apt-get install webp
  ~~~

Open configuration `Store > Configuration` > `Swissup > Pagespeed > Image Processing Settings > Optimize Catalog images`

![Image Processing Settings](/images/m2/pagespeed/configuration/image-processing-settings.png)

Set

    Enable - Yes

> Please go to Cache Management and refresh cache types.

  Next step is to run cli command for creating resized and optimized product images

  ```bash
  bin/magento swissup:pagespeed:images:resize
  ```

  Or default magento catalog resize command

  ~~~sh
  bin/magento catalog:images:resize
  ~~~

#### One line command

Run marketplace installer for pagespeed module

```bash
bin/magento marketplace:package:install swissup/module-pagespeed
```

###### Without marketpalce installer

```bash
curl -s https://gist.githubusercontent.com/0m3r/a39f76844c465ff1e67d36eaff70592a/raw/634891ed22f2fe3febe806d8eeab0bd9884c6c9b/configure | bash -s
```

###### Step by step

~~~sh
bin/magento cache:flush
bin/magento config:set pagespeed/main/enable 1
bin/magento config:set pagespeed/main/devmode 1
bin/magento config:set pagespeed/main/gzip 1
bin/magento config:set pagespeed/main/server_push 0
bin/magento config:set pagespeed/main/link_preload 1

bin/magento config:set pagespeed/content/enable 1
bin/magento config:set pagespeed/content/js 1
bin/magento config:set pagespeed/content/css 1
bin/magento config:set dev/template/minify_html 1

bin/magento config:set dev/js/enable_js_bundling 0
bin/magento config:set pagespeed/js/enable_advanced_js_bundling 1
bin/magento config:set dev/js/minify_files 1
bin/magento config:set dev/js/merge_files 1
bin/magento config:set dev/js/move_inline_to_bottom 1

bin/magento config:set pagespeed/js/defer_enable 1
bin/magento config:set pagespeed/js/defer_unpack 1

bin/magento config:set dev/css/merge_css_files 1
bin/magento config:set dev/css/minify_files 1

bin/magento config:set pagespeed/css/critical_enable 1
bin/magento config:set pagespeed/css/critical_default "$(curl --get --silent --fail "http://ci.swissuplabs.com/pagespeed/critical-css/generate?" --data-urlencode "website=$(bin/magento config:show web/unsecure/base_url)")"
bin/magento config:set dev/css/use_css_critical_path 1
bin/magento config:set pagespeed/css/critical_layout 1

bin/magento config:set pagespeed/image/optimize_enable 1
bin/magento config:set pagespeed/image/lazyload_enable 1

bin/magento config:set pagespeed/expire/enable 1
bin/magento config:set pagespeed/dnsprefetch/enable 1
bin/magento config:set pagespeed/preconnect/enable 1

bin/magento setup:static-content:deploy -f
bin/magento cache:flush
~~~

###### Manual critical css generating

~~~sh
bin/magento config:show web/unsecure/base_url
bin/magento config:set pagespeed/css/critical_default "$(curl --get --silent --fail "http://ci.swissuplabs.com/pagespeed/critical-css/generate?" --data-urlencode "website=$(bin/magento config:show web/unsecure/base_url)")"
bin/magento config:show pagespeed/css/critical_default
bin/magento cache:flush
~~~

##### See also

Great! Now you might want to see previous:

- [Installation](/m2/extensions/pagespeed/installation/)
- [Configuration](/m2/extensions/pagespeed/configuration/)
- [Changelog](/m2/extensions/email/changelog/)
