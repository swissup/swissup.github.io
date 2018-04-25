---
layout: default
title: Argento Luxury Customization
description: Argento Luxury Customization
keywords: "ArgentoLuxury, luxury, Customization, slider, easycatalogimages, highlight, brands, banner, tabs under image"
category: Argento
---

# Argento Luxury Customization

### Contents

 1. [Placing header above the slider at homepage](#placing-header-above-the-slider-at-homepage)
 2. [Move product tabs under product image](#move-product-tabs-under-product-image)
 3. [Change homepage slider to video cover](#change-homepage-slider-to-video-cover)

### Placing header above the slider at homepage

![Dark header](/images/argento/luxury/customization/dark_header.png)

To make homepage header black with the white symbols apply following code to [custom.css](/m1/argento/theme-customization/small-changes/#custom-styles-and-javascript):

```CSS
.cms-index-index .header-container { position: static; }
.cms-index-index .nav-container,
.cms-index-index .header-container { background: #000; }
```

![Light header](/images/argento/luxury/customization/light_header.png)

To make header the same view as at category you have to add following code to your [custom.css](/m1/argento/theme-customization/small-changes/#custom-styles-and-javascript)

```CSS
@media (min-width: 980px) {
    /*put header above content*/
    .cms-index-index .header-container { position: static; }

    /*change icons to black*/

    .cms-index-index .header .btn-search .luxury-icon {
        background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMTlweCIgaGVpZ2h0PSIxOXB4IiB2aWV3Qm94PSIwIDAgMTkgMTkiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDQzLjIgKDM5MDY5KSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT4KICAgIDx0aXRsZT5Hcm91cCA5PC90aXRsZT4KICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPgogICAgPGRlZnM+PC9kZWZzPgogICAgPGcgaWQ9IlN5bWJvbHMiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxnIGlkPSJuYXYtaW5uZXIiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0xNDkuMDAwMDAwLCAtOC4wMDAwMDApIiBzdHJva2U9IiMwMDAwMDAiPgogICAgICAgICAgICA8ZyBpZD0iR3JvdXAtMTEiPgogICAgICAgICAgICAgICAgPGcgaWQ9Ikdyb3VwLTE3IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg1Ny4wMDAwMDAsIDguMDAwMDAwKSI+CiAgICAgICAgICAgICAgICAgICAgPGcgaWQ9Ikdyb3VwLTkiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDkyLjAwMDAwMCwgMC4wMDAwMDApIj4KICAgICAgICAgICAgICAgICAgICAgICAgPGNpcmNsZSBpZD0iT3ZhbCIgY3g9IjcuNSIgY3k9IjcuNSIgcj0iNyI+PC9jaXJjbGU+CiAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik0xMywxMyBMMTguMDI0OTM3OCwxOC4wMjQ5Mzc4IiBpZD0iTGluZSIgc3Ryb2tlLWxpbmVjYXA9InNxdWFyZSI+PC9wYXRoPgogICAgICAgICAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgPC9nPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+);
    }
    .cms-index-index .header .wishlist-btn .luxury-icon {
        background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMjBweCIgaGVpZ2h0PSIxOHB4IiB2aWV3Qm94PSIwIDAgMjAgMTgiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDQzLjIgKDM5MDY5KSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT4KICAgIDx0aXRsZT5PdmFsIDM8L3RpdGxlPgogICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+CiAgICA8ZGVmcz48L2RlZnM+CiAgICA8ZyBpZD0iU3ltYm9scyIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGcgaWQ9Im5hdi1pbm5lciIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTExNjQuMDAwMDAwLCAtMTIuMDAwMDAwKSIgc3Ryb2tlPSIjMDAwMDAwIj4KICAgICAgICAgICAgPGcgaWQ9Ikdyb3VwLTExIj4KICAgICAgICAgICAgICAgIDxnIGlkPSJHcm91cC00MyIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMzM5LjAwMDAwMCwgMC4wMDAwMDApIj4KICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSJNODM1LDI5LjAwNDI5MTQgQzgzNSwyOS4wMDQyOTE0IDgzNy4wMzg4MTUsMjcuNzYyNTUyNSA4MzkuMTc1NjY5LDI1Ljg2NTYyNDggQzg0MS41Mjg0MSwyMy43NzcwNDk2IDg0NCwyMC44OTQyMSA4NDQsMTggQzg0NCwxNC43MjYyODA3IDg0Mi4wMDQ2OSwxMyA4MzksMTMgQzgzNiwxMyA4MzUsMTcuMDA0MjkxNCA4MzUsMTcuMDA0MjkxNCBDODM1LDE3LjAwNDI5MTQgODM0LjAxNTQyMywxMyA4MzAsMTMgQzgyOCwxMyA4MjYsMTUgODI2LDE4IEM4MjYsMjMuNTIyODQ3NSA4MzUsMjkuMDA0MjkxNCA4MzUsMjkuMDA0MjkxNCBaIiBpZD0iT3ZhbC0zIj48L3BhdGg+CiAgICAgICAgICAgICAgICA8L2c+CiAgICAgICAgICAgIDwvZz4KICAgICAgICA8L2c+CiAgICA8L2c+Cjwvc3ZnPg==);
    }
    .cms-index-index .header .quick-links-toggle .luxury-icon {
        background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMThweCIgaGVpZ2h0PSIxOHB4IiB2aWV3Qm94PSIwIDAgMTggMTgiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDQzLjIgKDM5MDY5KSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT4KICAgIDx0aXRsZT5Hcm91cCAzPC90aXRsZT4KICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPgogICAgPGRlZnM+PC9kZWZzPgogICAgPGcgaWQ9IlN5bWJvbHMiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxnIGlkPSJuYXYtaW5uZXIiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0xMjAzLjAwMDAwMCwgLTExLjAwMDAwMCkiIHN0cm9rZT0iIzAwMDAwMCI+CiAgICAgICAgICAgIDxnIGlkPSJHcm91cC0xMSI+CiAgICAgICAgICAgICAgICA8ZyBpZD0iR3JvdXAtNDMiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDMzOS4wMDAwMDAsIDAuMDAwMDAwKSI+CiAgICAgICAgICAgICAgICAgICAgPGcgaWQ9Ikdyb3VwLTMiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDg2NC4wMDAwMDAsIDExLjAwMDAwMCkiPgogICAgICAgICAgICAgICAgICAgICAgICA8Y2lyY2xlIGlkPSJPdmFsLTIiIGN4PSI5IiBjeT0iNS4yOTQxMTc2NSIgcj0iNC43OTQxMTc2NSI+PC9jaXJjbGU+CiAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik0xNi45NTUxNjAyLDE3LjUgTDEuMDQ0ODM5ODIsMTcuNSBDMS4zMDI4OTM0NCwxMy4zMzA4OTAzIDQuNzY1ODk1OTEsMTAuMDI5NDExOCA5LDEwLjAyOTQxMTggQzEzLjIzNDEwNDEsMTAuMDI5NDExOCAxNi42OTcxMDY2LDEzLjMzMDg5MDMgMTYuOTU1MTYwMiwxNy41IFoiIGlkPSJPdmFsLTItQ29weSI+PC9wYXRoPgogICAgICAgICAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgPC9nPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+);
    }
    .cms-index-index .header .header-cart-toggle .luxury-icon {
        background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMThweCIgaGVpZ2h0PSIxOXB4IiB2aWV3Qm94PSIwIDAgMTggMTkiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDQzLjIgKDM5MDY5KSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT4KICAgIDx0aXRsZT5Hcm91cCA0PC90aXRsZT4KICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPgogICAgPGRlZnM+PC9kZWZzPgogICAgPGcgaWQ9IlN5bWJvbHMiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxnIGlkPSJuYXYtaW5uZXIiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0xMjQxLjAwMDAwMCwgLTEwLjAwMDAwMCkiIHN0cm9rZT0iIzAwMDAwMCI+CiAgICAgICAgICAgIDxnIGlkPSJHcm91cC0xMSI+CiAgICAgICAgICAgICAgICA8ZyBpZD0iR3JvdXAtNDMiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDMzOS4wMDAwMDAsIDAuMDAwMDAwKSI+CiAgICAgICAgICAgICAgICAgICAgPGcgaWQ9Ikdyb3VwLTQyIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg5MDIuMDAwMDAwLCAxMS4wMDAwMDApIj4KICAgICAgICAgICAgICAgICAgICAgICAgPGcgaWQ9Ikdyb3VwLTQiPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggZD0iTTYsOSBMNiwzLjk5OTk0MzMgTDYsMy45OTk5NDMzIEM2LDEuNzkwODM1NjIgNy4zNDY1MTcxMiwwIDksMCBMOSwwIEMxMC42NTY4NTQyLDAgMTIsMS43OTk2NTM0OSAxMiwzLjk5OTk0MzMgTDEyLDkiIGlkPSJSZWN0YW5nbGUtNCI+PC9wYXRoPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggZD0iTTAuNTM5OTM4NjQ3LDUuNSBMMTcuNDYwMDYxNCw1LjUgTDE2LjgwODMwMTcsMTMuOTcyODc2MSBDMTYuNjU4ODY1NSwxNS45MTU1NDY3IDE0Ljk0OTY3MTYsMTcuNSAxMy4wMDM3OTczLDE3LjUgTDQuOTk2MjAyNzEsMTcuNSBDMy4wNDg1MzgyMiwxNy41IDEuMzQxMzk0ODksMTUuOTE4OTMxMiAxLjE5MTY5ODM0LDEzLjk3Mjg3NjEgTDAuNTM5OTM4NjQ3LDUuNSBaIiBpZD0iUmVjdGFuZ2xlLTMiPjwvcGF0aD4KICAgICAgICAgICAgICAgICAgICAgICAgPC9nPgogICAgICAgICAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgPC9nPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+);
    }

    /*change text to black*/

    .cms-index-index .nav-container .navpro a.level-top,
    .cms-index-index .nav-container .navpro div.level-top a {
        color: #000;
    }

    .cms-index-index .form-language select,
    .cms-index-index .top-toolbar .form-currency select,
    .cms-index-index .nav-toggler.nav-toggler-level0 {
        background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjxzdmcKICAgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIgogICB4bWxuczpjYz0iaHR0cDovL2NyZWF0aXZlY29tbW9ucy5vcmcvbnMjIgogICB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiCiAgIHhtbG5zOnN2Zz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciCiAgIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICAgaWQ9InN2ZzgiCiAgIHZlcnNpb249IjEuMSIKICAgdmlld0JveD0iMCAwIDIuMTE2NjY3MyAxLjMyMjkxNjciCiAgIGhlaWdodD0iMS4zMjI5MTY3bW0iCiAgIHdpZHRoPSIyLjExNjY2NzNtbSI+CiAgPGRlZnMKICAgICBpZD0iZGVmczIiIC8+CiAgPG1ldGFkYXRhCiAgICAgaWQ9Im1ldGFkYXRhNSI+CiAgICA8cmRmOlJERj4KICAgICAgPGNjOldvcmsKICAgICAgICAgcmRmOmFib3V0PSIiPgogICAgICAgIDxkYzpmb3JtYXQ+aW1hZ2Uvc3ZnK3htbDwvZGM6Zm9ybWF0PgogICAgICAgIDxkYzp0eXBlCiAgICAgICAgICAgcmRmOnJlc291cmNlPSJodHRwOi8vcHVybC5vcmcvZGMvZGNtaXR5cGUvU3RpbGxJbWFnZSIgLz4KICAgICAgICA8ZGM6dGl0bGU+PC9kYzp0aXRsZT4KICAgICAgPC9jYzpXb3JrPgogICAgPC9yZGY6UkRGPgogIDwvbWV0YWRhdGE+CiAgPGcKICAgICB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxLjExNTE5NmUtNiwtMjk1LjY3NzA5KSIKICAgICBpZD0ibGF5ZXIxIj4KICAgIDxwYXRoCiAgICAgICB0cmFuc2Zvcm09Im1hdHJpeCgtMC4wMTY3OTE1MywwLjAwMzA2Nzc3LC0wLjAwNDIzNjE5LC0wLjAxMjEwMzg1LDMuMDQyNjE2MSwyOTcuMTU3MDgpIgogICAgICAgZD0iTSAxNDEuMzYzMSwxNTcuOTA0NzYgODIuMDk5NTg0LDE0Mi45ODM2NiAyMi44MzYwNzUsMTI4LjA2MjU2IDY1LjM4OTg4Myw4NC4xOTk0IDEwNy45NDM2OSw0MC4zMzYyNDUgbCAxNi43MDk3LDU4Ljc4NDI1OCB6IgogICAgICAgaWQ9InBhdGg0NDg1IgogICAgICAgc3R5bGU9ImZpbGw6IzAwMDAwMDtmaWxsLW9wYWNpdHk6MTtmaWxsLXJ1bGU6bm9uemVybztzdHJva2U6bm9uZTtzdHJva2Utd2lkdGg6NS45MTM5NjYxODtzdHJva2UtbWl0ZXJsaW1pdDo0O3N0cm9rZS1kYXNoYXJyYXk6bm9uZTtzdHJva2UtZGFzaG9mZnNldDo0NC4wMzE0OTc5NjtzdHJva2Utb3BhY2l0eToxIiAvPgogIDwvZz4KPC9zdmc+Cg==);
        color: #000;
    }
}
```

Don't forget to change the homepage logo in **Argento Luxury** admin settings

![Luxury home logo](/images/argento/luxury/customization/luxury-home-logo.png)

### Move product tabs under product image

![Tabs under image](/images/argento/luxury/customization/tabs-under-image.png)

Originaly product tabs place on the right side in product information section.

If you want to have product tabs under product image then you have to apply
some XML layout update intsructions.

[Create or edit custom.xml](../../theme-customization/small-changes/#custom-layout-update-file) of your theme and add code below:

```xml
    <catalog_product_view>
        <!-- remove product tabs from existing place -->
        <reference name="product.info.other">
            <action method="unsetChild"><name>product.info.tabs</name></action>
        </reference>
        <!-- insert product tabs in new place -->
        <reference name="product.info">
            <action method="insert">
                <blockName>product.info.tabs</blockName>
                <siblingName>-</siblingName>
                <after>0</after>
                <alias>product_additional_data</alias>
            </action>
        </reference>
        <!-- expand first tab -->
        <reference name="product.info.tabs">
            <action method="setInitiallyCollapsed"><value>0</value></action>
        </reference>
    </catalog_product_view>
```

`*` Wrap code above into `<layout version="0.1.0">`...`</layout>` if you
created new custom.xml and not edit existing one.

Flush Magento cahce and check frontend.

You should see product tabs under product image. Now you may want to disable
additional tabs. So find CSM block with id `product_page_additional_tabs`,
disable it and flush Magento cahce one morew time.

### Change homepage slider to video cover

<div style="padding:57.32% 0 0 0;position:relative;">
    <iframe src="https://player.vimeo.com/video/266479794?autoplay=1&loop=1&color=ff4081" style="position:absolute;top:0;left:0;width:100%;height:100%;" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
</div>

 1. Go to `CMS > Static Blocks` and create New block: i.e. `video_background` with
    content:

    ```html
    {% raw %}
       <div class="title-container">
            <h4>New Style</h4>
            <h1>Urban Summer</h1>
            <button class="button btn-alt">
                <span><span>Shop Now</span></span>
            </button>
        </div>

        <video autoplay loop class="fillWidth homepage-video" >
            <source src="{{skin url="video/Under.mp4"}}" type="video/mp4" />Your browser does not support the video tag. I suggest you upgrade your browser.
            <source src="{{skin url="video/Under.webm"}}" type="video/webm" />Your browser does not support the video tag. I suggest you upgrade your browser.
        </video>
    {% endraw %}
    ```

    > where `video/Under.webm` and `video/Under.mp4` are the pathes to
    > folder where your video files are stored: _skin/frontend/argento/luxury/_
    > Also you can change the `title-container` section to your content
 2. Create _skin/frontend/argento/luxury/video_ and put the background video
    files there
 3. Create the background cover styles file `skin/frontend/argento/luxury/css/video-cover.css`:

    ```css
    .jumbotron-slider {
      box-sizing: border-box;
      position: relative;

      overflow: hidden;
      z-index: 0;
    }

    .title-container {
        position: absolute;
        top: 40%;
        text-align: center;
        margin: 0 auto;
        z-index: 1;
        width: 100%;
    }
    .title-container h1,
    .title-container h4{
        color: #fafafa;
        text-transform: uppercase;
    }
    .title-container h1 {
        font-size: 55px;
        letter-spacing: 50px;
    }
    .title-container h4:after {
        content: "";
        display: block;
        width: 40px;
        height: 5px;
        background-color: #ea8e6a;
        margin: 16px auto;
        margin-bottom: 0;
    }
    .title-container button.button span{
        background-color: transparent;
        color: #fff;
        border: 1px solid #fff;
        min-width: 200px;
    }
    .title-container button.button span span {
        text-transform: uppercase;
        font-size: 14px;
        background-color: transparent !important;
        height: auto;
        line-height: 36px;
    }

    video.homepage-video {
        width: 100%;
        height: 100%;
    }
    @media (min-aspect-ratio: 16/9) {
      video.homepage-video {
        height: 100%;
        top: -10%;
      }
    }

    @media (max-width: 768px) {
      video.homepage-video {
        width: 300%;
        left: -100%;
      }
    }
    ```
 4. [Create](../../theme-customization/small-changes/#custom-layout-update-file)
    the `custom.xml` and call `video-cover.css` from it:

    ```xml
    <layout version="0.1.0">
    <default>
        <reference name="head">
            <action method="addItem"><type>skin_css</type><name>css/video-cover.css</name></action>
        </reference>
    </default>
    ```
 5. Go to `CMS > Pages` and open `home` page from luxury theme
 6. Find `homepage slider` line:

    ```html
    {% raw %}
    {{widget type="easyslide/insert" slider_id="argento_luxury"}}
    {% endraw %}
    ```

    and change it to your `video_background` widget call:

    ```html
    {% raw %}
    {{widget type="cms/widget_block" template="cms/widget/static_block/default.phtml" block_id="video_background"}}
    {% endraw %}
    ```