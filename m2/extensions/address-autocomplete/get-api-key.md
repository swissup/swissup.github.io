---
layout: default
title: Get Maps API key
description: How to obtain google maps api key
category: Address Autocomplete
---

# Get API Key

 1. [Create, or use existing Google Cloud Project](https://console.developers.google.com/flows/enableapi?keyType=CLIENT_SIDE&reusekey=true&apiid=places_backend,maps_backend)
    with the following APIs:
    - [Maps JavaScript API](https://console.cloud.google.com/apis/library/maps-backend.googleapis.com)
    - [Places API](https://console.cloud.google.com/apis/library/places-backend.googleapis.com)
 2. **Important!** Use per website restriction for your API key to prevent quota theft.
 2. [Enable billing](https://console.cloud.google.com/project/_/billing/enable) for your Google Cloud Project.
 3. Grab your API key at the [credentials page](https://console.cloud.google.com/apis/credentials).

> **Warning!**
>
> Make sure your key is secured and allowed to use for your site only!
> Otherwise, your key may be stolen and used on another site.
