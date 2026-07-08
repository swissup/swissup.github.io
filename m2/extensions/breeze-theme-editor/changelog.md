---
layout: default
title: Changelog
description: Recent updates in Breeze Theme Editor for Magento 2
keywords: breeze theme editor changelog, breeze theme editor updates
category: Breeze Theme Editor
---

# Changelog

### Version 1.0.10

> Jul 8, 2026

 -  Fixed status detection treating a cached empty status map as a valid cache entry.
 -  Migrated unit tests off APIs removed in PHPUnit 10-12 while keeping PHPUnit 9.6 compatibility.

### Version 1.0.9

> Jun 23, 2026

 -  Fixed misleading GraphQL errors when `.htaccess` Basic Auth blocks the endpoint with 401 — now detected and reported clearly.

### Version 1.0.8

> Jun 4, 2026

 -  Fixed palette swatches not restored visually after page reload in draft mode.
 -  Fixed palette section header badges (Changed N / Reset) not restored after page reload in draft mode.

### Version 1.0.7

> Jun 4, 2026

 -  Added raw CSS injection for code fields without `property`.
 -  Added preview iframe reload via cookie override for PHP-only field changes.
 -  Fixed session expiry during CSS load — login toast is shown instead of a silent failure.
 -  Fixed live preview to update the `--preview-color` variable instead of `background-color`.
 -  Fixed cache handling after Publish/Rollback — clean cache types instead of invalidating them.
 -  Synced JS GraphQL selection sets with the schema.
 -  Enabled the module by default.
 -  Fixed Marketplace EQP errors.

### Version 1.0.6

> May 29, 2026

 -  Removed `notifyUsers` field from the Publish GraphQL input.

### Version 1.0.5

> May 28, 2026

 -  Added `media` property support with device switcher integration.
 -  Added ref-sync module for live two-way field synchronization.
 -  Fixed live preview to respect the CSS selector and propagate `data-selector` to all field templates.
 -  Fixed setup patches to use prefix-aware table name resolution.
 -  Added number field styles to the Theme Editor panel.

### Version 1.0.4

> May 20, 2026

 -  Fixed missing `suggestPublicationTitle` in the GraphQL client.

### Version 1.0.3

> May 15, 2026

 -  Added Magento 2.4.9 compatibility — replaced `Zend_Cache` constants with strings.

### Version 1.0.2

> May 12, 2026

 -  Updated `swissup/module-logger` dependency to `^2.0` and removed it from the module sequence.

### Version 1.0.0

> April 30, 2026

 -  Added Breeze Layout Builder integration.
 -  Added `BteLogger` with structured server-side logging via `swissup/module-logger`.
 -  Added checkerboard background for transparent colors in the color picker preview.
 -  Replaced `window.confirm`/`window.prompt` with Magento UI modal dialogs.
 -  Added `values[]` array to all GraphQL mutation payloads.
 -  Replaced `setTimeout` calls with `Bsync` promises for reliable async sequencing.
 -  Fixed form accessibility warnings in the Theme Editor panel.
 -  Extracted `base-palette-renderer.js` — deduplicated accordion, badge updates, and escape helpers across palette renderers.
 -  Extracted `ToolbarUrlProvider` — moved URL-building logic out of `AdminToolbar`.
 -  Extracted `ColorPipeline` — replaced static `ColorConverter` calls in `CssGenerator`.
 -  Decomposed `AbstractConfigResolver` into dedicated `Formatter` classes.
 -  Replaced magic numbers and strings with named constants across JS modules.
 -  Removed unused `.bte-control-group` legacy CSS block and dead `url-builder.js` methods.
 -  Translated all remaining Ukrainian inline comments to English.

### Version 1.0.0-beta.4

> April 16, 2026

 -  Fixed GraphQL coercion errors on save: JS client still sent removed
    `autoPublish`/`publicationTitle` fields to `SaveBreezeThemeEditorValues`
    after they were dropped from the schema in beta.3 — closes #15.
 -  Fixed `StoreManagerInterface` regression introduced during css-var shim
    cleanup: dependency was accidentally made nullable again, silently breaking
    the `stores → websites → default` scope inheritance chain.
 -  Removed `css_var` backward-compat shims (breaking): all installed Breeze
    themes use `property` exclusively. Removed from `CssVariableBuilder`,
    `AbstractConfigResolver`, `PaletteProvider`, `PaletteResolver`,
    `SavePaletteValue`, `SaveBreezeThemeEditorPaletteValueInput` GraphQL schema,
    and JS panel handlers (`settings-editor.js`, `css-preview-manager.js`).
 -  Removed dead GraphQL input fields: `autoPublish`/`publicationTitle` from
    `SaveBreezeThemeEditorValuesInput` and `notifyUsers` from
    `PublishBreezeThemeEditorInput` — never read by any resolver.
 -  Removed 10 speculative Collection query-builder methods (`Value`,
    `Status`, `Changelog`) — all access goes through SearchCriteria API.
 -  Eliminated `window.breezeThemeEditorConfig` global: split into two AMD
    closure singletons — `config-manager.js` (static readonly config) and
    `scope-manager.js` (runtime scope/theme state). 14 JS files migrated.
 -  Added `ResolverAclGuardrailTest` — security guardrail enforcing all 22
    GraphQL resolvers implement `BreezeResolverInterface`; added `SECURITY NOTE`
    to `AclAuthorization::beforeResolve()` explaining the silent-bypass risk.
 -  Extracted `CssGenerator::EMPTY_CSS_OUTPUT` constant and
    `hasRealCssContent()` static method — replaced 4 hardcoded `:root {}\n`
    literals across 4 files.
 -  Extracted `StatusCode::draftUserId()` / `draftUserIdForSave()` static
    helpers — removed 7+ inline ternary duplications across resolvers and
    services.
 -  Extracted `PublishService::applySnapshot()` private helper and unified
    `saveChangelog` / `saveChangelogFromOld` into a single method.
 -  Extracted `ValueRepository::toRow()`, `AdminUserLoader::buildUserData()`,
    `ConfigProvider::mergeById()` private helpers to eliminate code duplication.
 -  Added per-request memoisation to `ThemeResolver::loadTheme()` — eliminates
    redundant DB queries in `getThemeInfo`, `hasParentTheme`,
    `getParentThemeId`, `buildThemeHierarchy`.
 -  Removed empty `FrontendPageUrlProvider` class and its `di.xml` preference
    entry — parent `PageUrlProvider` works identically for frontend context.
 -  Removed deprecated `hexToRgb`/`rgbToHex` wrapper methods from
    `palette-manager.js`, `.permission-notice` CSS block, and no-op tooltip
    stub from `_utilities.less`.
 -  Applied DRY refactoring across JS panel handlers: extracted
    `_handleFieldAction` (base.js), `_applyConfig` (settings-editor.js),
    `_traverseScopes` (scope-selector.js), `_extractErrorMessage`
    (action-executor.js); removed `preview-manager.js` `_injectCSS` duplicate.

### Version 1.0.0-beta.3

> April 8, 2026

 -  Fixed critical bug: scope chain was broken on production when `StoreManagerInterface`
    was missing from `ValueInheritanceResolver` DI wiring — store view values were
    not inheriting from default/website scope correctly.
 -  Fixed iframe proxy URL being incorrectly saved as the frontend page URL.
 -  Fixed URL restoration to use `FrontNameResolver` for admin path detection.
 -  Fixed category and product page URLs to use URL rewrites in page selector.
 -  Fixed `uenc` encoding for iframe URL path param to survive Cloudflare.
 -  Fixed panel accordion sections with no rendered fields now hidden correctly.
 -  Fixed CSS scope passed to `CssManager.init` to prevent null mode on default scope.
 -  Fixed admin category URL fallback using cascading category lookup.
 -  Introduced `configManager` as single source of truth for `scope`/`scopeId`/`themeId`.
 -  Introduced `publication-state` singleton as single source of truth for current status.
 -  Extracted URL restoration logic into dedicated `url-restoration` AMD module.
 -  Unified `panel/css-manager` and `editor/css-manager` into a single stateless module.
 -  Removed unused PHP methods across 8 classes (dead code cleanup).

### Version 1.0.0-beta.2

> March 19, 2026

 -  Added multi-scope support (Default / Website / Store View) with full inheritance chain.
 -  Added color palette system with palette picker and opacity (hex8) support.
 -  Added font palette system with role-based font assignments.
 -  Added `font_picker` field type with local font support.
 -  Added `spacing` field type (4-sided padding/margin control).
 -  Added `repeater` field type for dynamic lists.
 -  Added `HEADING` field type for section separators.
 -  Added live search in settings panel.
 -  Added publication selector with rollback, discard, and Live badge.
 -  Added scope selector with URL and cookie persistence (F5 restore).
 -  Added Phosphor Icons support for navigation and config sections.
 -  Added Content Builder integration.
 -  Added Toastify notifications.
 -  Added `inheritParent` flag for theme config inheritance control.
 -  Added Import/Export support.
 -  Added Preset system (quick theme switching, Light/Dark modes).
 -  Moved Theme Editor menu to Swissup > Breeze.
 -  Fixed import/export key mismatch (`importedCount`/`skippedCount`).
 -  Fixed validation service type mismatch on import.
 -  Fixed dead observer `SetThemePreviewCookie` — moved to frontend context.
 -  Fixed invalid URI schema in `etc/frontend/di.xml`.

### Version 1.0.0-beta.1

> February 26, 2026

 -  Initial beta release.
 -  Live preview with instant CSS variable updates.
 -  Draft/Publish workflow with publication history and rollback.
 -  Admin-based authentication (no separate token endpoint).
 -  14 field types: color, text, textarea, number, range, select, toggle, code,
    color_scheme, social_links, icon_set_picker, image_upload.
 -  Theme inheritance via `settings.json` with parent config merging.
 -  GraphQL API for all editor operations.
 -  Multi-store architecture foundation.
