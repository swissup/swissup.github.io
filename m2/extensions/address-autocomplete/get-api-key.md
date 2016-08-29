---
layout: default
title: Get Maps API key
description: How to obtain google maps api key
keywords: >
    magento maps api key, magento enable maps api
category: Address Autocomplete
---

# Get API Key

> This tutorial is taken from [official](https://developers.google.com/maps/documentation/javascript/get-api-key)
> Google Maps documentation

 1. Go to the [Google Developers Console][console].
 2. Create or select a project.
 3. Click `Continue` to enable the API and any related services.
 4. On the `Credentials` page, get a `Browser key` (and set the API Credentials).
    Note: If you have an existing `Browser key`, you may use that key.
 6. To prevent quota theft, [secure your API key following these best practices][secure_api_key].
 7. (Optional) Enable billing. See [Usage Limits][usage_limits] for more information.

[console]: https://console.developers.google.com/flows/enableapi?apiid=maps_backend,geocoding_backend,directions_backend,distance_matrix_backend,elevation_backend&keyType=CLIENT_SIDE&reusekey=true
[secure_api_key]: https://support.google.com/cloud/answer/6310037
[usage_limits]: https://developers.google.com/maps/documentation/javascript/usage
