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

### 1.2.0

 -  Added new `Map` component — OpenStreetMap (no API key) or Google Maps (API key required), with coordinates or address, zoom, marker and height controls
 -  Added `H1` to the `Heading Type` options of the `Text` component
 -  Headings are now rendered as real heading tags instead of a styled `div`
 -  Improved vertical stretch of the `Columns` component — column content can now fill the full row height
 -  Components can now be restricted to specific pages — used by the Contact Us support in Breeze Layout Builder
 -  Added Content Security Policy whitelist for the map embeds

### 1.1.0

 -  AI-generated components from the Breeze AI chat panel are now applied directly to the editor
 -  Added new `Video` component — YouTube (click-to-load, keeps the player scripts off the page until play), Vimeo and MP4, with poster, caption and aspect ratio options
 -  Added `5 Columns` layout for the `Columns` component

### 1.0.12

 -  Added new `Accordion/FAQ` component
 -  Added `H1` option for the `Banner` headline
 -  Fixed draft modification date not being updated after saving

### 1.0.11

 -  Added `Feature Left` and `Feature Right` layouts to the `Grid` component
 -  Added font size field and source code button to the WYSIWYG editor
 -  Heading now uses the text color configured in the `Text` component
 -  Headings inside the `Banner` component now use the banner text color
 -  Improved `Grid` component styles on 640px-768px screens

### 1.0.10

 -  Improved drag-and-drop in the components tree

### 1.0.9

 -  Added AI-readable descriptions to the component definitions

### 1.0.8

 -  Performance improvements for random product lists
 -  Product grid performance improvements
 -  Do not use rand in fallback product provider
 -  Force `STRAIGHT_JOIN` usage to fix slow query on old MariaDB version 10.6

### 1.0.7

 -  Fixed LESS error on old compiler

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

### 1.2.0

 -  Added Contact Us page support with a new `Contact Form` component
 -  Added config option for the upcoming TaxVAT switcher in the theme header

### 1.1.1

 -  Improved drag-and-drop in the components tree

### 1.1.0

 -  Added installer command that publishes layout content and enables Layout Builder for a page type during theme installation

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
