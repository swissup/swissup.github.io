---
layout: default
title: Argento Pure 2.0 RTL Support
description: ArgentoPure 2.0 RTL Support
keywords: >
    ArgentoPure, pure, rtl, localization
category: Argento
---

# RTL support for Pure2 Enabling

If you need to use RTL theme look, please, follow these simple steps:

  * Go to your **FTP** store folder
  * **Create** file: `/skin/frontend/argento/pure2_custom/css/rtl.css`
  * **Add** following content and **Save**

    ```css
        /*RTL*/

        * { direction: rtl; }

        .page { text-align: right; }
        .col-right { float: left; }
        .col-main { float: right; }
        .catalog-product-view .col2-right-layout .col-main {
            padding-right: 0;
            padding-left: 25px;
            border-left: 1px solid #eee;
            border-right: 0 solid #FFF;
        }

        .fieldset .legend { float: right; }
        .form-list .field { float: right; }

        .buttons-set .back-link { float: right; }

        .col2-left-layout .col-main { float: left; }
        .col2-left-layout .col-left { float: right; }

        .col2-right-layout .col-main { float: right; }
        .col2-right-layout .col-right { float: left; }

        .col3-layout .col-wrapper {float: right;}
        .col3-layout .col-wrapper .col-main { float: left; }
        .col2-set .col-1 {float: left; }
        .col2-set .col-2 { float: right; }

        .title-buttons h1,
        .title-buttons h2,
        .title-buttons h3,
        .title-buttons h4,
        .title-buttons h5,
        .title-buttons h6 { float: right; }
        .a-left { text-align: right !important; }
        .a-right { text-align: left !important; }

        .onecolumn { float: right; }
        .onecolumn-aside { float: left; }

        .top-toolbar .quick-links { float: left; }
        .top-toolbar .welcome-msg { float: right; margin: 0 0 0 10px; }
        .top-toolbar .welcome-msg { float: right; margin: 0 0 0 10px; }
        .top-toolbar .links li,
        .footer .links li { float: right; }
        .links a { background: rgba(0, 0, 0, 0) url("../images/links_div.gif") no-repeat 100% 50% !important; }
        #search_mini_form { float: right; }
        .header-container .form-search button { float: right; }
        .top-cart-links li { float: right; }

        .header-cart .subtotal .actions { text-align: left; }
        .mini-products-list .product-image { float: right; }
        .header-cart .mini-products-list .product-details {
            margin-right: 58px;
            margin-left: 0;
            text-align: right;
        }
        .header-cart .mini-products-list .btn-remove,
        .header-cart .mini-products-list .btn-edit { float: left; margin-right: 2px; }
        .header-container .header-cart { float: left; }
        .top-cart-links li {
            background: rgba(0, 0, 0, 0) url("../images/links_div_black.gif") no-repeat 0 50%;
            float: right;
        }
        .top-cart-links li.last a { margin-left: 0; margin-right: 10px; }
        .block .block-title { text-align: right; }
        .products-grid li.item { float: right; }
        .products-grid .btn-cart { float: right; }
        .products-grid .add-to-links { float: left; }
        .products-grid .add-to-links li { float: right; }
        .block-social .icons li { float: right; }
        .navpro .nav-li { float: right; }

        .sorter .view-mode,
        .sorter .limiter,
        .sorter .sort-by { float: right; }
        .toolbar .sorter { float: right; }

        .form-list label { float: right; }
        .form-list label em { left: -10px; float: left; right: auto; }
        .soldtogether-block .amazonstyle-images li { float: right;
            padding-right: 25px;  padding-left: 0; }
        .buttons-set button.button { float: left; }

        .product-view .product-img-box { float: right; }

        .product-view .product-shop,
        .col1-layout .product-view .product-shop { margin-left: 0;  margin-right: 385px; }
        .product-view .product-img-box .more-views a { float: right; }
        .product-view .product-shop .add-to-links { text-align: left; }
        .product-view .add-to-cart-wrapper .add-to-box { float: left; }
        .product-view .product-shop .price-box { float: right; }
        .product-view .add-to-cart-wrapper .availability { right: 0; left: auto; }
        .product-view .product-shop .email-friend,
        .product-view .product-shop .no-rating { float: right; clear: both; }
        .socialsuite-buttons { float: right; }

        .add-to-cart label { float: right; margin-right: 0; margin-left: 5px; }
        .add-to-cart .qty { float: right; }
        .add-to-cart button.button { float: right;  margin-right: 5px; margin-left: 0; }

        .footer .payments { float: right; }
        .footer-links-info { float: left; }
        .block-information .block-content { float: right; }

        .customer-account-login .buttons-set button.button { float: right; }

        #product_tabs_tags_tabbed_contents .input-box { float: right; }
        .product-view .box-tags .form-add label { float: right; }
        #addTagForm button { float: left; }
    ```
  * [Create custom.xml](/m1/argento/theme-customization/small-changes/#custom-layout-update-file)
    file if you don't already have it
  * **Insert** following code there:

    ```xml
    <layout version="0.1.0">
        <default>
            <reference name="head">
                <action method="addItem"><type>skin_css</type><name>css/rtl.css</name></action>
            </reference>
        </default>
    </layout>
    ```
  * Or if you already have it just add `"addItem"` action to `"head"` reference