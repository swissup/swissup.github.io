---
layout: default
title: Changelog
description: Recent updates in Breeze Theme Editor for Magento 2
keywords: breeze theme editor changelog, breeze theme editor updates
category: Breeze Theme Editor
---

# Changelog

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
