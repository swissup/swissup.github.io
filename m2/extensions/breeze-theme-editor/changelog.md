---
layout: default
title: Changelog
description: Recent updates in Breeze Theme Editor for Magento 2
keywords: breeze theme editor changelog, breeze theme editor updates
category: Breeze Theme Editor
---

# Changelog

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
