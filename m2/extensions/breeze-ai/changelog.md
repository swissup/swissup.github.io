---
layout: default
title: Breeze AI Changelog
description: Breeze AI changelog
keywords: breeze ai changelog
category: Breeze AI
---

# Changelog

### Version 1.7.2

> September 9, 2026

 -  The MCP endpoint now negotiates protocol revision **2025-06-18** and still accepts `2025-03-26`, and it checks the `Mcp-Protocol-Version` header instead of ignoring it. A client asking for a revision we do not serve is refused in a reply it can still read, rather than being answered as though the version matched.
 -  Fixed **Cancel** leaving part of a stuck run behind: an operation the queue could still deliver was skipped, so the run came back to life after the merchant had stopped it. Cancel now closes every operation the queue can act on.

### Version 1.7.1

> September 8, 2026

 -  **Enabled = No** now switches the module off in the admin as well. It used to stop only the AI buttons and the chat panel from being added to the product, category and CMS forms — **Swissup > Breeze AI** stayed in the menu, and the bulk wizard could still be opened and run. The menu entry is now hidden while the module is off, and its pages refuse to open and send you to the setting with a message saying why.
 -  A bulk run already waiting in the queue when the module is switched off no longer goes on writing generated text over the catalogue. Each of its operations now ends with a message naming the reason, so the run finishes instead of hanging in progress — it does not resume by itself, so schedule it again once the module is back on.
 -  **AI Run History stays open while the module is off**, restoring included: a run that overwrote something can still be undone after switching Breeze AI off, which is usually the very reason it was switched off. Its menu entry is hidden with the rest, so reach it from the link in the message on the closed pages or from a bookmark; the **Value Backup** setting still applies, and with that off a restore refuses as before.
 -  The removal instructions no longer ask you to strip the `Swissup_BreezeAi::*` permissions from admin roles to hide the module — the setting does that now. Removing the permissions is still how to hide Breeze AI from one role while leaving it available to others.
 -  Upgrade caution: the MCP endpoint at `/rest/V1/breezeai/mcp` now answers 404 whenever **Enabled** is No, where before it served requests on its own switch alone. If you use MCP against an installation with Breeze AI otherwise switched off, set **Enabled** to Yes — the MCP switch now only narrows what that one already allows.

### Version 1.7.0

> September 7, 2026

 -  Added **Cancel** to the AI Jobs grid, per row and as a mass action, plus `bin/magento breezeai:bulk:cancel`. A run that is stuck or was queued by mistake can now be stopped: everything the queue could still run is rejected, so the run leaves "In Progress" at once. An operation already running cannot be interrupted mid-request — it finishes and reports its own outcome — but the queue behind it stops.
 -  A queue consumer killed by the hosting (`timeout -s 9`, an out-of-memory kill, a deploy) runs no error handler, so the operation it was working on used to stay open and its run read as in progress with nothing behind it. Cron now finalises such operations every ten minutes — see Stores > Configuration > Breeze AI: *Declare an Operation Interrupted After (minutes)*, 120 by default. `bin/magento breezeai:bulk:sweep` does the same on demand.
 -  Added a timeout to every text call to OpenAI, Claude and Gemini, which previously had none at all: a provider that stopped answering held the bulk queue until the process was killed from outside. The default is under Stores > Configuration > Breeze AI, and each model can set its own under Swissup > Breeze AI > AI Models, which is the better place to tune it.
 -  An operation now always ends with a status, whatever went wrong inside it. A `TypeError` or a similar fatal used to pass the error handling by, leaving the operation open and its run hanging forever.
 -  Upgrade note: runs scheduled by an earlier version recorded an operation only once it finished, so a run interrupted under 1.6.x has no operation rows for the cancel or the sweep to act on. Both apply to runs scheduled from 1.7.0 on.

### Version 1.6.1

> September 4, 2026

 -  Fixed rows getting a background image nobody asked for — a crop of the whole band, the design's own headline included, sitting behind the real content. A background is now filled only where the design has one.
 -  Fixed pictures further down a page coming back as placeholders. The image budget was spent top to bottom, so icons and unwanted backgrounds used it up before the photographs; the biggest pictures are now taken first, and a rejected crop hands its slot to the next candidate.
 -  A build that had to fill a band with a text block now names the widget that could have covered it, so it is clear what to tick under **Widgets The Builder May Place**.
 -  Fixed the Content Builder chat panel missing when the editor is opened from the admin menu instead of a CMS page's **Open in Content Builder** button. Build refusals and failures are now written to the log.

### Version 1.6.0

> September 2, 2026

 -  Added generated images for the case where the reference is a wireframe and the picture is only a grey box. Extracting images from a real design still comes first and is always tried before this.
 -  Generation is **off by default** and needs its own API key — one picture costs more than the whole page's text. Capped at three images per page, and only ever a section's main image, never icons. See Stores > Configuration > Breeze AI > Page Builder: Generated Images.

### Version 1.5.1

> September 2, 2026

 -  Fixed generated pages failing outright when widgets were enabled in 1.5.0: the AI named a widget by its PHP class, whose backslashes cannot survive the build's reply, so one widget broke the whole page. Widgets are now named by their widget code — anyone who enabled widgets in 1.5.0 should update.

### Version 1.5.0

> September 1, 2026

 -  A page built from a screenshot now takes its images from that screenshot, instead of every image coming back as a `dummyimage.com` box. A wireframe's grey box keeps the placeholder, and the build reports which images still need a hand.
 -  Image extraction is on by default, capped at 8 images per page, with unused crops removed after 30 days — see Stores > Configuration > Breeze AI > Page Builder. Requires GD with WebP support; without it a build behaves as before.
 -  Added the ability for the AI to place Magento widgets on a generated page. Widgets are chosen per installation under **Widgets The Builder May Place**, and nothing changes until at least one is ticked.
 -  Widgets whose value has to be picked by hand — a CMS block, a banner, catalogue conditions — are not offered. A wrongly named widget or parameter is repaired and reported, not shipped broken.
 -  Added a complete removal path: `module:uninstall Swissup_BreezeAi --remove-data` now takes the module's tables, its configuration and the images it extracted. Leave off `--remove-data` to keep images that generated pages point at — see `docs/UNINSTALL.md`.
 -  Fixed AI action buttons squeezing the field they sit beside, introduced in 1.3.0. Affects store-scoped Text Field and Text Area attributes.

### Version 1.4.0

> August 28, 2026

 -  Added **AI Run History** to the Breeze AI menu: every run that replaced something is listed with who started it, the model it used, and what it touched.
 -  Values an AI run overwrote can now be put back — one field, one product, the rows ticked in the grid, or the whole run. A restore is queued like the run and can itself be undone.
 -  Restoring is a separate permission from starting a run: grant **Restore Overwritten Values** to the roles that should hold it. Runs made before 1.3.0 cannot be restored.
 -  Added a usage log in `var/log/breezeai_usage.log` — one line per request with the model, tokens in and out, duration, cost in US dollars, and the bulk run it belonged to.
 -  Prices are built in for the OpenAI, Claude and Gemini models the module lists. For a custom model, a proxy or a negotiated rate, set **Input / Output Price per 1M Tokens** on the model row; a model with no known price is logged without a cost.
 -  Fixed the OpenAI error message advising a client version that cannot be installed on PHP 8.1.
 -  Requires PHP 8.1 or later. Earlier versions claimed to support PHP 7.4 and 8.0, but the OpenAI client has never worked below 8.1, so no working installation is affected.

### Version 1.3.0

> August 26, 2026

 -  Added an AI chat panel to the Breeze Content Builder editor: ask for a change and it is applied to the page on screen. Nothing is stored until the page is saved. Requires Breeze Content Builder 1.1.0 or later.
 -  Added a backup of every value the AI overwrites — enabled by default, keeping 5 versions of each field for 90 days, under Stores > Configuration > Breeze AI > Backup. Restoring from the admin arrived in 1.4.0.
 -  Added a report of what the validator repaired in a generated page, shown on the CMS page form instead of in the system log only.
 -  Fixed a reference screenshot producing fewer sections than the design shows.
 -  Fixed generated pages losing content to the validator: list values are kept, a single keyed entry is no longer flattened away, and a generated FAQ keeps every question paired with its answer.
 -  Fixed authoring placeholder text leaking into generated copy.
 -  Fixed the catalog prompt presenting "spacing" as a component property that does not exist.
 -  Fixed the Gemini model list offering models Google no longer serves. A retired model is reported as retired, and the API key is removed from provider error messages.
 -  Fixed AI action buttons overlapping the field value on the product and category forms, hiding long values.
 -  Adds two new tables — run `bin/magento setup:upgrade` after updating.

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
