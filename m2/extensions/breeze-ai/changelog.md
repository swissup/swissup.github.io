---
layout: default
title: Breeze AI Changelog
description: Breeze AI changelog
keywords: breeze ai changelog
category: Breeze AI
---

# Changelog

### Version 1.0.13

> August 5, 2026

 -  Fixed the MCP `graphql` tool accepting mutations. The tool is documented as read-only catalog access, but the query was forwarded to the storefront GraphQL endpoint verbatim and without an auth header, so it ran in guest scope — where Magento accepts `createEmptyCart`, `addProductsToCart`, `setGuestEmail` and the rest of the guest cart surface. The tool now reads the operation type from the definition position of the document and rejects anything but `query` and `fragment` definitions, so mutations and subscriptions never leave the server. Any agent that relied on writing through this tool must use `POST /V1/breezeai/*` or the storefront endpoint directly.

### Version 1.0.12

> August 5, 2026

 -  Added a `build_page` skill that composes a Breeze Content Builder page from a text brief, using only the components the store actually has installed. Reachable through `POST /V1/breezeai/generate` (`skill=build_page`, `entityType=cms_page`), the MCP server, and the CLI. It returns the document together with a list of warnings and saves nothing — the caller decides whether to store the draft through the Content Builder's own save endpoint. The Content Builder is not a requirement: with no components installed the catalog is empty and the skill says so.
 -  Model output is validated against the same component catalog the prompt was built from, and repaired instead of rejected: unknown components and props are dropped, select values outside their option list snap to the default, numbers are clamped to min/max, missing props are filled from defaults, and containers are padded or truncated to their real slot count. Every repair is reported in `warnings`, so it is clear why a page differs from the brief.

### Version 1.0.11

> July 30, 2026

 -  Improved bulk translation quality: the AI is now told both the source and target language ("translate from X to Y") and instructed to translate every word, so translating between two non-English languages (e.g. Danish → German) no longer leaves words in the source language.

### Version 1.0.10

> July 28, 2026

 -  Fixed bulk translation of media gallery labels overwriting the source store view's custom option titles. Media labels and video metadata are now written directly to the selected Target Store View without a full product save.

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
