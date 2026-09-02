---
layout: default
title: Breeze AI Changelog
description: Breeze AI changelog
keywords: breeze ai changelog
category: Breeze AI
---

# Changelog

### Version 1.5.1

> September 2, 2026

 -  Fixed generated pages failing outright when Magento widgets were enabled for the builder in 1.5.0. The AI was asked to name a widget by its PHP class, whose backslashes cannot travel inside the build's reply — one widget could therefore break the whole page instead of one section. Widgets are now named by their widget code, a widget written by hand or inserted through Magento's own Insert Widget modal is still understood, and a widget code that could mean two different widgets is reported rather than guessed at. Anyone who enabled widgets in 1.5.0 should update.

### Version 1.5.0

> September 1, 2026

 -  A page built from a screenshot now takes its images from that screenshot. Where a design shows a hero photo, a section background or a row of icons, the picture is cut out of the reference and stored in the store's media, instead of every image coming back as a `dummyimage.com` box to be replaced by hand. It costs nothing extra: the positions come back on the same AI request that lays the page out, and the cropping happens on the server. A region that holds a wireframe's grey box rather than a real picture keeps the placeholder — a grey rectangle presented as the page's hero would be worse — and the build says which images still need a hand. New settings live under Stores > Configuration > Breeze AI > Page Builder: image extraction is on by default, capped at 8 images per page, and crops no page points at are removed by a nightly cleanup after 30 days. Requires GD with WebP support; without it a build behaves as before.
 -  Added the ability for the AI to place Magento widgets on a generated page, instead of imitating them with ordinary components — tick the testimonials slider and a review section becomes that widget. Widgets are chosen per installation under **Widgets The Builder May Place**, and nothing changes until at least one is ticked. Every widget of every enabled module is available, third-party ones included, except those whose value is a record that has to be picked by hand — a CMS block, a banner, a set of catalogue conditions — which are not offered, because the AI must not invent them. A widget the AI names wrongly, or a parameter that does not exist, is repaired rather than shipped broken: the section keeps its place in the page and the editor shows a widget picker, and the build report says what was changed. Note that a widget renders whatever the store's database holds — the testimonials slider with no approved testimonials produces an empty section.
 -  Added a complete removal path. `bin/magento module:uninstall Swissup_BreezeAi --remove-data` now takes the module's tables, its configuration and the images it extracted from screenshots, instead of leaving them for a later reinstall to find. Note that pages built from a screenshot point at those images and outlive the module, so leave off `--remove-data` to keep them. The bundled `docs/UNINSTALL.md` covers both switching the module off and removing it.
 -  Fixed AI action buttons squeezing the field they sit beside, introduced in 1.3.0. On a product or category attribute edited at store-view scope, the buttons pulled the field's note, its error label and the **Use Default Value** checkbox onto the field's own line; the field itself was left a sliver wide and its value looked empty. The buttons now share a row with the field and everything else keeps the row it has always had. Affects store-scoped Text Field and Text Area attributes.

### Version 1.4.0

> August 28, 2026

 -  Added **AI Run History** to the Breeze AI menu, and with it the ability to put back what an AI run overwrote. Every run that replaced something is listed with who started it, which model it used, and how many products, fields and store views it touched. Opening a run shows each value it replaced — the field, the store view, and the old text in full — and it can be put back one field at a time, for one product, for the rows ticked in the grid, or for the whole run at once. Where a store view had no value of its own before the run, restoring removes the value the run created, so the store view inherits from the default scope again as it did before. Restoring is queued like the run itself and reports what it could not put back, for instance a product deleted since — the rest is still restored. A restore records what it replaces, so a restore can itself be undone. Restoring is a separate permission from starting a run: grant **Restore Overwritten Values** to the roles that should hold it. Runs made before version 1.3.0 have nothing recorded and cannot be restored.
 -  Added a usage log of what the AI actually costs, written to `var/log/breezeai_usage.log`. One line per request, naming the model that answered, the tokens in and out, how long the call took, the cost in US dollars, and the bulk run it belonged to — so the cost of one bulk run can be totalled from the file. Published prices are built in for the OpenAI, Claude and Gemini models the module lists; for a custom model, a proxy, a negotiated rate or a price change, set **Input / Output Price per 1M Tokens** on the model row. A model with no known price is logged with its token counts and no cost, rather than being reported as free.
 -  Fixed the OpenAI error message advising an upgrade that half the affected stores cannot install: on PHP 8.1 the suggested client version is unavailable, so the message now names the PHP requirement instead.
 -  Requires PHP 8.1 or later. Earlier versions claimed to support PHP 7.4 and 8.0, but the OpenAI client the module depends on has never worked below 8.1, so no working installation is affected.

### Version 1.3.0

> August 26, 2026

 -  Added an AI chat panel to the Breeze Content Builder editor. Open a page in the editor, toggle the panel and ask for a change — the answer is applied to the page you are looking at, not to a new document. The panel reads the current layout before every request, so "make the hero shorter" refers to the hero on screen. Nothing is stored until the page is saved, switching pages starts a fresh conversation, and an answer that arrives after a page switch is discarded instead of landing on the wrong page. Requires Breeze Content Builder 1.1.0 or later.
 -  Added a backup of every value the AI overwrites, so it is possible to see what a bulk run replaced. Enabled by default, keeping 5 versions of each field for 90 days — see Stores > Configuration > Breeze AI > Backup. Restoring an old value from the admin is not part of this release.
 -  Added a report of what the validator repaired in a generated page. Previously this was written to the system log only; it is now shown on the CMS page form, so it is clear why a page differs from the brief.
 -  Fixed a reference screenshot producing fewer sections than the design shows. The section count now survives an answer that wraps its JSON in prose, and the warnings describe the request that was actually sent.
 -  Fixed generated pages losing content to the validator: list values written by the AI are kept, a single keyed entry is no longer flattened away, and a generated FAQ keeps every question paired with its answer.
 -  Fixed authoring placeholder text leaking into generated copy.
 -  Fixed the catalog prompt presenting "spacing" as a component property, which made the AI set a property that does not exist on every row.
 -  Fixed the Gemini model list offering models Google no longer serves. A model retired after it was selected is now reported as retired, and the API key is removed from provider error messages.
 -  Fixed AI action buttons overlapping the field value on the product and category forms, hiding long values.

### Version 1.2.0

> August 18, 2026

 -  Added **Build from screenshot** to the CMS page form, in the Content Builder fieldset. Attach a screenshot of a design, optionally add a text brief, pick the model, and the page's Content Builder draft is written from the components the store actually has installed — the sections are reproduced top to bottom, the reference's own copy is not transcribed, and its brand colours are ignored so the store's theme decides how the page looks. Nothing is published until it is published by hand.
 -  The model has to accept images. A text-only model is refused inside Magento with a message naming it, instead of failing as a provider error. Image support is set per model by the **Image Input** field on the model row.
 -  The screenshot travels inside the form field, so a large one needs nginx `client_max_body_size` and PHP `post_max_size` raised — Magento's own `nginx.conf.sample` leaves the nginx limit at 1M. When the limit is hit, the message names both directives instead of failing silently.
 -  `build_page` is now listed among the tools the MCP server exposes.

### Version 1.1.2

> August 17, 2026

 -  Fixed a bulk run processing far more entities than were selected. Filtering a grid down and ticking the remaining rows was indistinguishable from pressing **Select All**, and a select-all run then ignored the grid's filters entirely — one client selected a single product and the wizard queued all 714. The wizard now posts the selection the same way Magento's own mass actions do, so a run covers exactly what the grid was showing.

### Version 1.1.1

> August 14, 2026

 -  Added image support to the AI models: a request can now carry images, encoded for whichever provider it is routed to. JPEG, PNG, GIF and WebP are accepted, up to 5 MB each and 10 per request. Whether a model reads images at all is decided by the new **Image Input** field on the model row, so an image sent to a text-only model is refused with a clear message rather than a provider error.
 -  Fixed a temperature of 0 being dropped and treated as "not set".
 -  Fixed the model form offering values that did not match the options the module actually supports.

### Version 1.1.0

> August 10, 2026

 -  Added landing page building to the AI Bulk Action wizard, so a Content Builder page can be composed from the admin without using the chat.
 -  Added a model and a free-text brief per bulk run, and pinned both to it. Previously a run used whatever the configuration said at the moment each operation was picked up, with no way to steer the model or to say what kind of writing was wanted. The brief reaches the model as framing, ahead of the content, rather than being mixed into the product text.
 -  Fixed GPT-5 and o-series models failing every call on the OpenAI provider. Requests carried the GPT-4 parameter set, which those models reject outright — they did not produce worse output, they returned an error every time.
 -  Fixed the three providers disagreeing about a caller's own system message: Claude and Gemini read it, dropped it and sent their own instruction anyway, so the same prompt meant different things depending on which model it was assigned to.
 -  Fixed CMS page translations being written into a category, and category translation not naming the source language.
 -  Fixed the bulk wizard offering tasks it could not run — a task whose field panel is empty, or a task the queue cannot perform on the chosen entity type, are no longer offered.
 -  Fixed a generated page draft being filed under the wrong admin user.

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
