---
layout: default
title: Dhl location finder
description: Firecheckout integration with Dhl_Account
keywords: Dhl_LocationFinder, dhl, locationfinder
category: Firecheckout
---

# Dhl Location Finder

> Version 1.0.3 is not compatible with Firecheckout.
>
> In order to make them work together we need to refactor Dhl_LocationFinder
> module (Move the locationfinder popup and form outside of the firecheckout form
> to prevent broken html markup).

 1. Open `js/dhl_locationfinder/locationfinder.js` and find the following lines:

    ```js
    arrElements = Form.getElements($('co-shipping-form'));
    ```

    Replace them with:

    ```js
    if ($('co-shipping-form')) {
        arrElements = Form.getElements($('co-shipping-form'));
    } else if ($('shipping-address')) {
        arrElements = Form.getElements($('shipping-address'));
    }
    ```

 2. Create new file: `app/design/frontend/base/default/template/dhl_locationfinder/checkout/onepage/locationfinder.popup.phtml`

 3. Open `app/design/frontend/base/default/template/dhl_locationfinder/checkout/onepage/locationfinder.phtml`
    and find the following code:

    ```html
    <?php // Container with the Map Elements ?>
    <div id="sf-map-wrapper">
        <div class="map-content">
            ...
        </di>
    </div>
    ```

    1. Copy these lines to the new file created in step 2 and save it.
    2. Remove these lines from `app/design/frontend/base/default/template/dhl_locationfinder/checkout/onepage/locationfinder.phtml` and save it.

 4. Open `app/design/frontend/base/default/layout/dhl_locationfinder.xml` and
    add find the following line:

    ```xml
    </checkout_onepage_index>
    ```

    Replace it with:

    ```xml
        <reference name="content">
            <block type="dhl_locationfinder/checkout_onepage_locationfinder" name="dhl_locationfinder.popup" template="dhl_locationfinder/checkout/onepage/locationfinder.popup.phtml" before="-"/>
        </reference>
    </checkout_onepage_index>
    ```

 5. Save the file and clear cache.

p.s. Take a look at the [DHL_Versenden](/m1/extensions/firecheckout/supported-moudles/dhl-versenden/)
instructions too, as these modules are often used together.
