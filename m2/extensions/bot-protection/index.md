---
layout: default
title: Bot Protection
category: Bot Protection
---

# Bot Protection

This module allows to protect your forms from unwanted bots. By default it protects
checkout if common hacky words are found in request params.

When we block the request, we redirect visitor to the previous page and
display the `Unable to process the request. Invalid parameter received` error
message.

{% include gallery.html images=site.data.gallery.m2.bot-protection.index class="phone-up-2 tablet-up-3 photoswipe scroll" %}

### Contents

 1. [Installation](/m2/extensions/bot-protection/installation/)
 2. [Changelog](/m2/extensions/bot-protection/changelog/)
 3. [Configuration](/m2/extensions/bot-protection/configuration/)
 4. [Backend pages](/m2/extensions/bot-protection/backend/)
    - [Blocked Requests Log](/m2/extensions/bot-protection/backend/blocked-requests-log/)
