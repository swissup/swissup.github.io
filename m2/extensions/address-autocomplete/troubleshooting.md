---
layout: default
title: Troubleshooting
description: Fixing Address Autocompleter conflicts with third-party modules
category: Address Autocomplete
---

# Troubleshooting

## Google Maps included multiple times

If AddressAutocomplete is not working and you see the following error in
the browser's console: "You have included the Google Maps JavaScript API multiple 
times on this page", you need to keep only one module that will include Google Maps.

Here is how you can prevent our module from including this js. Open 
`vendor/swissup/module-address-autocomplete/view/frontend/web/js/google-maps.js`
and find the following lines:

```js
require([url + params], function () {}, function () {
    maps.reject();
});
```

Replace them with:

```js
var timer = setInterval(async () => {
    if (typeof google === 'undefined' || !google.maps) {
        return;
    }

    clearInterval(timer);

    if (!google.maps.places) {
        await google.maps.importLibrary('places');
    }

    swissupMapsLoaded();
}, 500);

// require([url + params], function () {}, function () {
//     maps.reject();
// });
```

Save the file, clear cache, and redeploy static content.
