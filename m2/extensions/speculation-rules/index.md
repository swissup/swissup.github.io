---
layout: default
title: Speculation Rules
description: JSON-defined API developed by Google to enhance the performance of web page loading through speculative loading strategies
keywords: >
  magento prerender pagespeed extension
category: Speculation Rules
---

# Speculation Rules

### Description

Speculation rules take the form of a JSON structure that determine what resources should be prefetched or prerendered by the browser. This is part of the [Speculation Rules API](https://developer.mozilla.org/en-US/docs/Web/API/Speculation_Rules_API)

The [Speculation Rules API](https://github.com/WICG/nav-speculation/blob/main/triggers.md#speculation-rules) is a JSON-defined API developed by Google to enhance the performance of web page loading through speculative loading strategies.
One more [description](https://developer.mozilla.org/en-US/docs/Web/API/Speculation_Rules_API) by Mozilla MSDN.

### How Does It Work?
Google's Speculation Rules API is designed to target document URLs rather than specific resource files. The Speculation Rules API introduces a more expressive and configurable syntax for specifying which documents should be prefetched or prerendered.
With a structure defined in JSON format within a script `type="speculationrules"`, developers can articulate rules for both prerendering and prefetching. This enhanced flexibility allows for fine-tuning speculative loading.


### Pagespeed Impact
[Prerender with the Speculation Rules API](https://developer.chrome.com/docs/web-platform/prerender-pages#impact)

### Browser Support
Can I use [Speculation Rules](https://caniuse.com/?search=Speculation%20Rules%20)?


### Contents

1. [Installation](installation/)
2. [Configuration](configuration/)
3. [Changelog](changelog/)
