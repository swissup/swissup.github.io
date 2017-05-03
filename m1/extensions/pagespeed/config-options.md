---
layout: default
title: Page Speed Configurable options
description: magento page speed module configurable options
keywords: " magento speed extension, increase magento speed, improve magento speed,
  optimize magento speed, magento speed optimization, magento page speed module,
  pagespeed "
category: Page Speed
---

# Page Speed Configurable Options

In order to configure the main features of the extension, please go
to `Admin > System > Configuration > Templates-Master > Pagespeed`.

-   [General tab](#general-tab)
-   [Minify Html content tab](#minify-html-content-tab)
-   [Minify Js tab](#minify-js-tab)
-   [Minify Css tab](#minify-css-tab)
-   [Yui settings and Closure Compiler settings tab](#yui-settings-and-closure-compiler-settings-tab)
-   [Image optimization tab](#image-optimization-tab)
-   [Expires tab](#expires-tab)
-   [Defer Js tab](#defer-js-tab)

### General tab

![General tab](/images/m1/extensions/pagespeed/config1.png)

-   In the `Enabled` field select **Yes** to enable the expiration of page content.
-   In the `Lazy image load enable` field select **Yes** in order to enable lazy load filter. It allows customers view products images only when they become visible in their viewport.

### Minify Html content tab

![Minify Html content](/images/m1/extensions/pagespeed/config2.png)

-   In the `Enabled` field select **Yes** to enable the HTML content minification. You will get the optimized HTML code.
-   In the `Compress Type` field you can choose the **Default** as well as the **Lite** value. If you select the **Default**, the content will be compressed using Minify library algorithm. If you select the **Lite** value, the content will be compressed using light-weight algorithm.
-   In the `Js Content Minification Enabled` field select **Yes** to enable Script elements minification.
-   In the `Css Content Minification Enabled` field select **Yes** to enable Style elements minification.

### Minify Js tab

![Minify Js](/images/m1/extensions/pagespeed/config3.png)

-   In the `Enabled` field select **Yes** to enable Js minification. Please follow our recommendations mentioned on the screenshot.
-   In the `Compress Type` field you are allowed to select the Jsmin, Jsminplus, Yui and Closure compiler tools to minify JavaScript code. In order to choose the best one, you can access the information here : [Minify Recources](https://developers.google.com/speed/docs/insights/MinifyResources)

    _**Note:**: some minifiers can break javascript codes. After installation please check whether errors were not occurred._

### Minify Css tab

![Minify Css](/images/m1/extensions/pagespeed/config4.png)

-   In the `Enabled` field select **Yes** to enable Css minification. Please follow our recommendations mentioned on the screenshot.
-   In the `Compress Type` field you are allowed to select the **Default**, **Cssmin** and **Yui tools** to minify Css resource.

### Yui settings and Closure Compiler settings tab

![Yui settings](/images/m1/extensions/pagespeed/config5.png)
![Closure Compiler settings](/images/m1/extensions/pagespeed/config6.png)

YUI and Closure Compiler compressors are widely used tools to minify JavaScript and Css resources. In the Java field you have to specify file path of 'java' executable. While configuring the following fieldsets, you will be allowed to change the location path in file system in the location field. You can set there your own path to Java applet. In order to figure it out, you have to run the console, specify the value from the Java field and set java -version. You are also able to change the temporary directory which is used by applet for saving files.

### Image optimization tab

![Image optimization](/images/m1/extensions/pagespeed/config7.png)

-   In the `Enabled` field select Yes to run image optimization. Our extension comes with Gifsicle, Jpegoptim and OptiPNG packages. However we recommend you to install these tools at your server. Please clear where the package is located. You can use the command whereis, for instance Whereis the OptiPNG (Gifsicle, Jpegoptim), or you can ask your hosting provider.
-   In the `Compress service` field you can also specify Yahoo Smush.it image compression service.
-   The `Default utility path` is autodetected value.
-   In the `Gif optimization utility` field you can specify your own path to optimization tool.
-   In the `Jpg/Jpeg optimization utility` you can specify your own path to optimization tool.
-   In the `Png optimization utility` field you can specify your own path to optimization tool.
-   In the `Scanned dirs` field specify folders with images that will be compressed.
-   In the `Ignore` field specify folders with images that won’t be compressed.
-   In the `Count` field set the number of images that will be optimized per iteration.

### Expires tab

![Expires](/images/m1/extensions/pagespeed/config8.png)

-   In the `Enabled` field select **Yes** to enable the expiration of page content.
-   In the `Access plus n days` please set the timeout in days after which the page content will be expired.

In order to track and manage image optimization results, please go Templates-Master- Page Speed - Image optimization. The interface allows you to restore image, to compress images manually and to optimize the original image.

### Defer Js tab

![Defer Js](/images/m1/extensions/pagespeed/config9.png)

-   In the `Enabled` field select **Yes** to enable the defering \<script\> tags of page content.

### Optimise Css Delivery tab

![Optimise Css Delivery](/images/m1/extensions/pagespeed/config10.png)

-   In the `Enabled` field select **Yes** to enable the [Optimize CSS Delivery](https://developers.google.com/speed/docs/insights/OptimizeCSSDelivery?hl=en) of page content.

-   In the `Enabled LoadCss library` field select **Yes** to enable the [LoadCss js library](https://github.com/filamentgroup/loadCSS) of page content.

-   `Critical Css` is only what the user can see when they first load the page. This means that we only need to load the minimum amount of CSS required to render the top portion of the page across all breakpoints. For the remainder of the CSS, we don’t need to worry as we can load it asynchronously. You can generate your site critical css [here](https://jonassebastianohlsson.com/criticalpathcssgenerator/).

-   In the `Ignore (Critical separated css files)` field specify css files that won’t be optimise delivery.

#### You can also check:

*   [Installation](../installation/)
*   [Support](https://swissuplabs.com/contacts/)
*   [Forum](https://swissuplabs.com/magento-forum/)
