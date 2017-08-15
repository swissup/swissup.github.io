---
layout: default
title: Argento Luxury Homepage
description: Argento Luxury homepage
keywords: "ArgentoLuxury, luxury, homepage, slider, easycatalogimages, highlight, brands, banner"
category: Argento
---

# Argento Luxury Homepage

Homepage content is editable at `Cms > Pages` interface.

### Contents

 1. [Header](#header)
 2. [Slider](#slider)
 3. [Categories](#categories)
 4. [New Products](#new-products)
 5. [Discount Banner](#discount-banner)
 6. [Benefits](#benefits)
 6. [Brands Slider](#brands-slider)
 7. [Whole homepage code](#whole-homepage-content)

### Header

![header](/images/argento/luxury/homepage/header.png)

You can show alternative logo on home page. You can upload it in
`System > Configuration > TM Argento Themes > Luxury > Home Page`,
please check [homepage configuration](/m1/argento/luxury/configuration/#home-page)

#### Placing header above the slider at homepage

![Dark header](/images/argento/luxury/homepage/dark_header.png)

To make homepage header black with the white symbols apply following code to [custom.css](/m1/argento/theme-customization/small-changes/#custom-styles-and-javascript):

```css
.cms-index-index .header-container { position: static; }
.cms-index-index .nav-container,
.cms-index-index .header-container { background: #000; }
```

![Light header](/images/argento/luxury/homepage/light_header.png)

To make header the same view as at category you have to add following code to your [custom.css](/m1/argento/theme-customization/small-changes/#custom-styles-and-javascript)

```css
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

![Luxury home logo](/images/argento/luxury/homepage/luxury-home-logo.png)

### Slider

![Slider](/images/argento/luxury/homepage/slider.png)

Slider is powered by [EasySlider](/m1/extensions/easyslider) module.
You can manage each slide and animation effects at `Templates-Master > Easyslide` backend page.

Slider is inserted in homepage with widget. The following code is used to show
the slider on the homepage:

```html
<div class="row jumbotron jumbotron-slider">
    {% raw %}{{widget type="easyslide/insert" slider_id="argento_luxury"}}{% endraw %}
</div>
```

### Categories

![Categories](/images/argento/luxury/homepage/easycatalogimages.png)

Categories block is powered by [EasyCatalogImages](/m1/extensions/easycatalogimages/) module.

Block was designed for images size 382px x 565px.

This block is inserted using magento widget functionality. The following code
is used to show block on the homepage:

```html
<div class="row jumbotron">
    <div class="col-md-12">
        <div class="container">
            {% raw %}{{widget type="easycatalogimg/widget_list" category_count="5" subcategory_count="0" column_count="5" show_image="1" image_width="382" image_height="565" resize_image="0" template="tm/easycatalogimg/list.phtml"}}{% endraw %}
        </div>
    </div>
</div>
```

### New Products

![New Products](/images/argento/luxury/homepage/highlight.png)

Code:

```html
{% raw %}<div class="row jumbotron">
    <div class="col-md-12">
        <div class="container hero">
            {{widget type="highlight/product_new" title="New Arrivals" show_page_link="1" page_title="Shop Now" products_count="4" column_count="4" template="tm/highlight/product/grid.phtml" class_name="highlight-content-new" img_width="280" img_height="410"}}
        </div>
    </div>
</div>{% endraw %}
```

New Products listing block is powered by [Highlight module](/m1/extensions/highlight/).
In order to change title, products/columns count and other options you can use
Magento's built-in widget editor, or you can manually change appropriate attribute
in code above.

### Discount Banner

![Banner](/images/argento/luxury/homepage/banner.png)

Discount banner is powered by [Easy Banners](/m1/extensions/easybanners/) module.
Banners are editable at `Templates-Master > Easybanner` page.

Code, used to show homepage banner:

```html
<div class="row jumbotron">
    <div class="hero block-homepage-banner">
        {% raw %}{{widget type="easybanner/widget_placeholder" placeholder_name="argento-luxury-home"}}{% endraw %}
    </div>
</div>
```

### Benefits

![Benefits](/images/argento/luxury/homepage/benefits.png)

Code:

```html
<div class="row jumbotron block-benefits">
    <div class="container hero">
        <div class="col-md-4">
            <div class="a-center">
                <div class="luxury-icon luxury-icon-big luxury-cart-alt"></div>
                <h4>Free Delivery</h4>
                <p>Our store delivers an extensive and expertly curated selection of fashion and lifestyle offerings.</p>
            </div>
        </div>
        <div class="col-md-4">
            <div class="a-center">
                <div class="luxury-icon luxury-icon-big luxury-lock"></div>
                <h4>Secure Payment</h4>
                <p>Our store delivers an extensive and expertly curated selection of fashion and lifestyle offerings.</p>
            </div>
        </div>
        <div class="col-md-4">
            <div class="a-center">
                <div class="luxury-icon luxury-icon-big luxury-headphones"></div>
                <h4>24h Customer Service</h4>
                <p>Our store delivers an extensive and expertly curated selection of fashion and lifestyle offerings.</p>
            </div>
        </div>
    </div>
</div>
```

### Brands Slider

![Brands Slider](/images/argento/luxury/homepage/brandsslider.png)

Brands slider is a simple cms content, powered with
[Slick Carousel](/m1/extensions/slick-carousel/) to make slider.

Code, used for brands slider:

```html
{% raw %}<div class="row jumbotron jumbotron-slick">
    <div class="container">
        <div class="block block-brands argento-slider">
            <div class="block-content">
                <div id="slider-brands-container" class="slider-wrapper">
                    <div class="slick" id="slider-brands" data-slick='{"slidesToShow": 6, "slidesToScroll": 6, "infinite": true, "autoplay": true, "speed": 1000, "autoplaySpeed": 4000, "arrows": true, "dots": true, "responsive": [ {"breakpoint": 770, "settings": {"slidesToShow": 4, "slidesToScroll": 4}}, {"breakpoint": 640, "settings": {"slidesToShow": 3, "slidesToScroll": 3}}, {"breakpoint": 480, "settings": {"slidesToShow": 2, "slidesToScroll": 2}}, {"breakpoint": 321, "settings": {"slidesToShow": 1, "slidesToScroll": 1, "dots": false}}]}'>
                        <a href="#"><img src="{{skin url='images/catalog/brands/gucci.jpg'}}" alt="" width="150" height="80"/></a>
                        <a href="#"><img src="{{skin url='images/catalog/brands/lv.jpg'}}" alt="" width="100" height="80"/></a>
                        <a href="#"><img src="{{skin url='images/catalog/brands/ck.jpg'}}" alt="" width="130" height="80"/></a>
                        <a href="#"><img src="{{skin url='images/catalog/brands/chanel.jpg'}}" alt="" width="170" height="80"/></a>
                        <a href="#"><img src="{{skin url='images/catalog/brands/guess.jpg'}}" alt="" width="130" height="80"/></a>
                        <a href="#"><img src="{{skin url='images/catalog/brands/versace.jpg'}}" alt="" width="145" height="80"/></a>
                        <a href="#"><img src="{{skin url='images/catalog/brands/gucci.jpg'}}" alt="" width="150" height="80"/></a>
                        <a href="#"><img src="{{skin url='images/catalog/brands/lv.jpg'}}" alt="" width="100" height="80"/></a>
                        <a href="#"><img src="{{skin url='images/catalog/brands/ck.jpg'}}" alt="" width="130" height="80"/></a>
                        <a href="#"><img src="{{skin url='images/catalog/brands/chanel.jpg'}}" alt="" width="170" height="80"/></a>
                        <a href="#"><img src="{{skin url='images/catalog/brands/guess.jpg'}}" alt="" width="130" height="80"/></a>
                        <a href="#"><img src="{{skin url='images/catalog/brands/versace.jpg'}}" alt="" width="145" height="80"/></a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>{% endraw %}
```

### Whole homepage content

In case if you've lost original homepage content, you can get it below:

```html
{% raw %}<div class="row jumbotron jumbotron-slider">
    {{widget type="easyslide/insert" slider_id="argento_luxury"}}
</div>
<div class="row jumbotron">
    <div class="col-md-12">
        <div class="container">
            {{widget type="easycatalogimg/widget_list" category_count="5" subcategory_count="0" column_count="5" show_image="1" image_width="382" image_height="565" resize_image="0" template="tm/easycatalogimg/list.phtml"}}
        </div>
    </div>
</div>
<div class="row jumbotron">
    <div class="col-md-12">
        <div class="container hero">
            {{widget type="highlight/product_new" title="New Arrivals" show_page_link="1" page_title="Shop Now" products_count="4" column_count="4" template="tm/highlight/product/grid.phtml" class_name="highlight-content-new" img_width="280" img_height="410"}}
        </div>
    </div>
</div>
<div class="row jumbotron">
    <div class="hero block-homepage-banner">
        {{widget type="easybanner/widget_placeholder" placeholder_name="argento-luxury-home"}}
    </div>
</div>
<div class="row jumbotron block-benefits">
    <div class="container hero">
        <div class="col-md-4">
            <div class="a-center">
                <div class="luxury-icon luxury-icon-big luxury-cart-alt"></div>
                <h4>Free Delivery</h4>
                <p>Our store delivers an extensive and expertly curated selection of fashion and lifestyle offerings.</p>
            </div>
        </div>
        <div class="col-md-4">
            <div class="a-center">
                <div class="luxury-icon luxury-icon-big luxury-lock"></div>
                <h4>Secure Payment</h4>
                <p>Our store delivers an extensive and expertly curated selection of fashion and lifestyle offerings.</p>
            </div>
        </div>
        <div class="col-md-4">
            <div class="a-center">
                <div class="luxury-icon luxury-icon-big luxury-headphones"></div>
                <h4>24h Customer Service</h4>
                <p>Our store delivers an extensive and expertly curated selection of fashion and lifestyle offerings.</p>
            </div>
        </div>
    </div>
</div>
<div class="row jumbotron jumbotron-slick">
    <div class="container">
        <div class="block block-brands argento-slider">
            <div class="block-content">
                <div id="slider-brands-container" class="slider-wrapper">
                    <div class="slick" id="slider-brands" data-slick='{"slidesToShow": 6, "slidesToScroll": 6, "infinite": true, "autoplay": true, "speed": 1000, "autoplaySpeed": 4000, "arrows": true, "dots": true, "responsive": [ {"breakpoint": 770, "settings": {"slidesToShow": 4, "slidesToScroll": 4}}, {"breakpoint": 640, "settings": {"slidesToShow": 3, "slidesToScroll": 3}}, {"breakpoint": 480, "settings": {"slidesToShow": 2, "slidesToScroll": 2}}, {"breakpoint": 321, "settings": {"slidesToShow": 1, "slidesToScroll": 1, "dots": false}}]}'>
                        <a href="#"><img src="{{skin url='images/catalog/brands/gucci.jpg'}}" alt="" width="150" height="80"/></a>
                        <a href="#"><img src="{{skin url='images/catalog/brands/lv.jpg'}}" alt="" width="100" height="80"/></a>
                        <a href="#"><img src="{{skin url='images/catalog/brands/ck.jpg'}}" alt="" width="130" height="80"/></a>
                        <a href="#"><img src="{{skin url='images/catalog/brands/chanel.jpg'}}" alt="" width="170" height="80"/></a>
                        <a href="#"><img src="{{skin url='images/catalog/brands/guess.jpg'}}" alt="" width="130" height="80"/></a>
                        <a href="#"><img src="{{skin url='images/catalog/brands/versace.jpg'}}" alt="" width="145" height="80"/></a>
                        <a href="#"><img src="{{skin url='images/catalog/brands/gucci.jpg'}}" alt="" width="150" height="80"/></a>
                        <a href="#"><img src="{{skin url='images/catalog/brands/lv.jpg'}}" alt="" width="100" height="80"/></a>
                        <a href="#"><img src="{{skin url='images/catalog/brands/ck.jpg'}}" alt="" width="130" height="80"/></a>
                        <a href="#"><img src="{{skin url='images/catalog/brands/chanel.jpg'}}" alt="" width="170" height="80"/></a>
                        <a href="#"><img src="{{skin url='images/catalog/brands/guess.jpg'}}" alt="" width="130" height="80"/></a>
                        <a href="#"><img src="{{skin url='images/catalog/brands/versace.jpg'}}" alt="" width="145" height="80"/></a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>{% endraw %}
```
