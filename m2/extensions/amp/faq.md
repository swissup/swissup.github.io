---
layout: default
title: AMP FAQ
description: Frequently asked questions about Magento 2 AMP
category: Accelerated Mobile Pages
---

# FAQ

### Contents

<!-- MarkdownTOC -->

- [Is it open source?](#is-it-open-source)
- [Is it compatible with my theme/module?](#is-it-compatible-with-my-thememodule)
- [How to make my AMP discoverable by Google?](#how-to-make-my-amp-discoverable-by-google)
- [Do I have to use HTTPS for AMP site?](#do-i-have-to-use-https-for-amp-site)
- [How to update Google AMP Cache?](#how-to-update-google-amp-cache)

<!-- /MarkdownTOC -->

### Is it open source?

Yes.

### Is it compatible with my theme/module?

We can't say for sure, but most of the themes and modules are compatible with our
module out of the box. It may not work as expected, if your module/theme do one
of the following things:

 -  Use redirect and does not consider `amp` parameter in URL
 -  Rewrites core blocks and change their template programmatically (instead of
    layout updates usage) with template, that does not work properly without
    javascript

### How to make my AMP discoverable by Google?

No action is required from your side. AMP module automatically adds `amphtml`
link to the head section of desktop version of the page and Google crawler will
fetch this information automatically.

### Do I have to use HTTPS for AMP site?

Yes. We have a search form on the page and Google requires to use secure page
in this case. Moreover, we recommend enabling HTTPS for your site to
improve your Google ranking.

### How to update Google AMP Cache?

It will be updated [automatically](https://developers.google.com/amp/cache/overview#google-amp-cache-updates):

> When a user requests an AMP document from the Google AMP Cache, the cache
> automatically requests updates in order to be able to serve fresh content
> for the next user once the content has been cached. With this model, updates
> to AMP documents propagate automatically and quickly; few users will see the
> non-updated version after your update.
