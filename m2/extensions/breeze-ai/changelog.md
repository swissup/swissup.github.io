---
layout: default
title: Breeze AI Changelog
description: Breeze AI changelog
keywords: breeze ai changelog
category: Breeze AI
---

# Changelog

### Version 1.0.9

> July 23, 2026

 -  Fixed bulk translation of product custom option titles leaking into the default store scope instead of being saved strictly into the selected Target Store View.

### Version 1.0.7

> July 17, 2026

 -  Added MCP server endpoint `POST /rest/V1/breezeai/mcp` (JSON-RPC 2.0) with `generate`, `translate`, `list_prompts`, and `graphql` tools. Can be disabled in configuration.
 -  Fixed bulk category translation saving values into the current store scope instead of the selected Target Store View.
 -  Fixed cross-page "Select All X Records" detection in bulk grids.

### Version 1.0.5

> July 8, 2026

 -  Added SKU column with filter to the bulk actions product grid.

### Version 1.0.4

> June 26, 2026

 -  Fixed customizable option titles being translated into the wrong store view.
 -  Added Select All checkbox for the translate fields list.
 -  Fixed the "* Store-scoped custom attribute" note showing when no such fields exist.

### Version 1.0.3

> June 25, 2026

 -  Added bulk translation of customizable option titles and value titles.
 -  Added bulk translation of image labels, gallery labels, and video metadata.
 -  Added All Store Views target support; `url_key` excluded from auto-translation.

### Version 1.0.2

> June 23, 2026

 -  Initial release: AI content generation and translation for products and categories, bulk actions, prompts and model configuration. OpenAI, Claude, and Gemini providers.
