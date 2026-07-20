---
layout: default
title: Breeze Content Builder — Changelog
description: Version history for Breeze Content Builder, Layout Builder, and Content Builder Migration
category: Breeze Content Builder
---

# Changelog

- [Breeze Content Builder](#breeze-content-builder)
- [Breeze Layout Builder](#breeze-layout-builder)
- [Breeze Content Builder Migration](#breeze-content-builder-migration)

## Breeze Content Builder

### 1.0.6

 -  Added config to enable `Hover Zoom` effect for the Banner components
 -  Added `Mobile Layout` (stack or slider) config for `Columns` and `Grid` components

### 1.0.5

 -  Added `Column Divider` config option for the `Columns` component
 -  Added `2 Columns (25/75)` layout for the `Columns` component
 -  Added new `Collage` layout for the `Banner` component
 -  Fixed missing content after running installer
 -  Added Breeze scrollReveal settings for the `Banner` component

### 1.0.4

- Fixed page builder installer using a hard-coded content version instead of the next available one
- Widgets that rely on the current page (e.g. AskIt) now receive the current `page_id`
- Fixed missing CSS class in the Featured Product component

### 1.0.3

- Added Header and Footer management
- Hid the Label field for Header and Footer items
- Added methods to expand sections
- Fixed History panel tracking for Header and Footer changes

### 1.0.2

- Added the ability to set descriptive labels for components
- Fixed History panel styles with props opened

### 1.0.1

- Added `HugeRTE` compatibility (`TinyMCE` replacement since Magento 2.4.8-p3)
- Fixed `HugeRTE` style in modal

### 1.0.0

- Initial release
- Drag-and-drop component tree with live preview
- Draft/publish workflow with version history and rollback
- Components: Banner, Text, Image, Divider, Products, Featured Product, Product Compare, Widget, Newsletter, HTML
- Layout containers: Row, Columns, Grid, Tabs
- Grid layout component with 11 presets (collage, hero, sidebar, magazine, gallery, bento, and more)
- Desktop/mobile visibility toggle per component
- Component copy/paste with Ctrl+C / Ctrl+V
- TinyMCE rich text editor with Magento variable and widget support
- Breeze Layout Builder integration (product and category page editing)

### 1.0.0-beta.2

- Added Grid layout component
- Added HTML Code component
- Added Banner layout and headline type options
- Added desktop/mobile visibility toggler
- Products component now supports rule-based Conditions
- TinyMCE editor modal with widget directive support
- Panel menu (three-dot icon) in the left sidebar

### 1.0.0-beta.1

- Initial beta release

---

## Breeze Layout Builder

### 1.0.0

- Initial release
- Adds BCB components to product and category pages without layout XML
- Container auto-detection from the active theme
- Entity preview — pick any product or category for the preview
- Draft/publish workflow with version history
- Per-page-type opt-in toggle per store view
- Full-page cache invalidation on publish and rollback

---

## Breeze Content Builder Migration

### 1.0.1

- Fixed: rows, columns, and tabs with no explicit spacing in Page Builder now migrate with zero spacing instead of inheriting Content Builder defaults
- Fixed: column group with a single 100% column no longer produces a broken columns component — children are promoted into the parent row
- Fixed: multiple consecutive single-column column-groups each produce their own row
- Added: HTML Code blocks with a newsletter subscribe directive are automatically converted to the native Newsletter component

### 1.0.0

- Initial release
- One-click import from the Content Builder panel menu
- Three import modes: Replace, Append, Prepend
- Migration report with per-component status
- EasySlide integration for Page Builder sliders
