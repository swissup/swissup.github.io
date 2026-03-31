---
layout: default
title: Theme Developer Guide
description: Complete guide for adding Breeze Theme Editor support to your Magento 2 theme
keywords: breeze theme editor, theme development, settings.json, field types, css variables
category: Breeze Theme Editor
---

# Breeze Theme Editor - Theme Developer Guide

**Version**: 1.4  
**Last Updated**: 2026-03-31

This guide explains how to add Theme Editor support to your Breeze theme.

---

## Table of Contents

1. [Quick Start](#quick-start)
2. [File Structure](#file-structure)
3. [Configuration Format](#configuration-format)
4. [Field Types Reference](#field-types-reference)
5. [Field Properties](#field-properties)
6. [Conditional Field Visibility (dependsOn)](#conditional-field-visibility-dependson)
7. [Color Palette System](#color-palette-system)
8. [Validation Rules](#validation-rules)
9. [Theme Inheritance](#theme-inheritance)
10. [Best Practices](#best-practices)
11. [Reading Settings in PHP Templates](#reading-settings-in-php-templates)
12. [Examples](#examples)
13. [Troubleshooting](#troubleshooting)


---

## Quick Start

### Step 1: Create Configuration File

Create `etc/theme_editor/settings.json` in your theme root:

```
your-theme/
└── etc/
    └── theme_editor/
        └── settings.json
```

### Step 2: Basic Configuration

```json
{
  "version": "1.0",
  "sections": [
    {
      "id": "colors",
      "name": "Colors",
      "description": "Customize theme colors",
      "icon": "palette",
      "order": 1,
      "settings": [
        {
          "id": "primary_color",
          "label": "Primary Color",
          "type": "color",
          "default": "#1979c3",
          "property": "--primary-color",
          "description": "Main brand color"
        }
      ]
    }
  ]
}
```

### Step 3: Test

1. Clear Magento cache: `bin/magento cache:clean`
2. Open frontend with `?breeze_theme_editor=1`
3. Your settings should appear in the panel

---

## File Structure

```
your-theme/
├── etc/
│   └── theme_editor/
│       ├── settings.json       # Main configuration
│       └── presets/            # Optional presets
│           ├── default.json
│           └── dark-mode.json
└── web/
    └── css/
        └── source/
            └── _theme-variables.less  # Your CSS variables
```

---

## Configuration Format

### Root Structure

```json
{
  "version": "1.0",              // Required: Config version
  "extends": "Parent/Theme",     // Optional: Inherit from parent theme
  "sections": []                 // Required: Array of sections
}
```

### Section Structure

```json
{
  "id": "unique_section_id",     // Required: Unique identifier
  "name": "Section Name",        // Required: Display name
  "description": "Description",  // Optional: Section description
  "icon": "palette",             // Optional: Icon (see below)
  "order": 1,                    // Optional: Display order (default: 999)
  "selector": ".my-section",     // Optional: Default CSS selector for all settings in section
  "settings": [],                // Required: Array of fields
  "disable": true                // Optional: Remove inherited section (child themes only)
}
```

### Section Icons

The `icon` field is optional. When set, a small icon is shown to the left of the section title in the settings panel.

Four formats are supported:

**Named Phosphor icon** (recommended) — use any icon name from [phosphoricons.com](https://phosphoricons.com):

```json
{ "icon": "text-t" }
{ "icon": "palette" }
{ "icon": "layout" }
```

**Raw inline SVG** — the SVG string is inserted directly, so `currentColor` is respected:

```json
{ "icon": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 256 256\"><path d=\"…\"/></svg>" }
```

**Base64 data URI** — decoded and inserted as inline SVG (`currentColor` works):

```json
{ "icon": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0…" }
```

**Plain data URI** — rendered as an `<img>` tag (no `currentColor` support):

```json
{ "icon": "data:image/svg+xml,%3Csvg%20xmlns%3D…" }
```

Common Phosphor icon names for typical sections:

| Section type | Icon name |
|---|---|
| Typography / Fonts | `text-t` |
| Colors | `palette` |
| Layout | `layout` |
| Spacing | `arrows-out` |
| Header | `layout-header` |
| Footer | `layout-footer` |
| Navigation | `list` |
| Buttons | `cursor-click` |
| Forms | `textbox` |
| Images | `image` |
| Effects | `sparkle` |
| Global | `globe` |
| SEO | `magnifying-glass` |

Full icon list: [phosphoricons.com](https://phosphoricons.com)

---

## Field Types Reference

### 1. COLOR - Color Picker

**Purpose**: Select colors with live preview

```json
{
  "id": "primary_color",
  "label": "Primary Color",
  "type": "color",
  "default": "#1979c3",
  "property": "--primary-color",
  "format": "hex",
  "description": "Main brand color",
  "help_text": "Used for buttons, links, and accents"
}
```

**Features**:
- Visual color picker
- HEX input (#RRGGBB or #RGB)
- Configurable output format (HEX or RGB)
- Automatic format conversion

#### Format Property

**Property**: `format`  
**Type**: String  
**Values**: `"hex"` | `"rgb"` | `"auto"`  
**Required**: No

Controls the CSS output format for color values.

**Format Options**:

1. **`"hex"`** (Breeze 3.0) - Default for new themes
   ```json
   {
     "id": "text_color",
     "type": "color",
     "default": "#111827",
     "property": "--text-color",
     "format": "hex"
   }
   ```
   **CSS Output**:
   ```css
   :root {
     --text-color: #111827;
   }
   ```
   **Use for**: Modern themes using `color: var(--text-color)`

2. **`"rgb"`** (Breeze 2.0) - For legacy themes
   ```json
   {
     "id": "text_color",
     "type": "color",
     "default": "#111827",
     "property": "--text-color",
     "format": "rgb"
   }
   ```
   **CSS Output**:
   ```css
   :root {
     --text-color: 17, 24, 39;  /* RGB format */
   }
   ```
   **Use for**: Legacy themes using `color: rgb(var(--text-color))`

3. **`"auto"`** - Smart detection
   ```json
   {
     "id": "text_color",
     "type": "color",
     "default": "255, 0, 0",
     "property": "--text-color",
     "format": "auto"
   }
   ```
   **Behavior**: Detects format from `default` value
   - If `default` is HEX → outputs HEX
   - If `default` is RGB → outputs RGB

**Default Format**:
- If `format` is not specified AND `default` exists → `"auto"`
- If `format` is not specified AND no `default` → `"hex"`

**Migration Guide (Breeze 2.0 → 3.0)**:

If your theme uses `rgb(var())` syntax in CSS:
```less
// Old Breeze 2.0 CSS
.button {
  color: rgb(var(--button-color));
  background: rgba(var(--bg-color), 0.5);
}
```

You MUST add `"format": "rgb"` to your color fields:
```json
{
  "id": "button_color",
  "type": "color",
  "format": "rgb",  // ← ADD THIS
  "property": "--button-color"
}
```

For new Breeze 3.0 themes using direct `var()`:
```less
// New Breeze 3.0 CSS
.button {
  color: var(--button-color);
  background: color-mix(in srgb, var(--bg-color) 50%, transparent);
}
```

Use `"format": "hex"` (or omit for default):
```json
{
  "id": "button_color",
  "type": "color",
  "format": "hex",  // ← Optional (default)
  "property": "--button-color"
}
```

#### Palette Property

**Property**: `palette`  
**Type**: String  
**Required**: No

Enables "Quick Select" color picker with predefined palette colors.

**Example**:
```json
{
  "id": "text_color",
  "label": "Text Color",
  "type": "color",
  "default": "#111827",
  "property": "--text-color",
  "palette": "default",
  "format": "hex"
}
```

**Behavior**:
- Displays color swatches from the specified palette
- Users can click palette colors for instant selection
- Palette colors are defined in the `palettes` section (see [Color Palette System](#color-palette-system))
- Users can still manually enter custom colors

**When to use**:
- ✅ For theme colors that should match brand palette
- ✅ To provide quick access to predefined color schemes
- ✅ To maintain color consistency across the theme
- ❌ Not needed for completely custom color fields

**Notes**:
- Palette color references (e.g., `--color-brand-primary`) always output as `var()` regardless of format
- User input is accepted in any format (HEX or RGB) and automatically converted
- Supports both `#FF0000` and `#F00` HEX formats
- See [Color Palette System](#color-palette-system) section for palette configuration

---

### 2. TEXT - Single Line Input

**Purpose**: Short text values (widths, margins, custom values)

```json
{
  "id": "container_width",
  "label": "Container Width",
  "type": "text",
  "default": "1280px",
  "property": "--container-width",
  "placeholder": "e.g. 1280px",
  "description": "Maximum content width"
}
```

**Properties**:
- `placeholder` - Placeholder text
- `pattern` - Regex validation pattern
- `validationMessage` - Custom error message
- `minLength` - Minimum characters
- `maxLength` - Maximum characters

**Example with Validation**:
```json
{
  "id": "custom_margin",
  "type": "text",
  "pattern": "^\\d+(px|rem|em|%)$",
  "validationMessage": "Must be a valid CSS unit (e.g. 10px, 1rem)",
  "placeholder": "10px"
}
```

---

### 3. TEXTAREA - Multi-line Input

**Purpose**: Custom CSS, scripts, large text blocks

```json
{
  "id": "custom_css",
  "label": "Custom CSS",
  "type": "textarea",
  "default": "/* Your custom styles */",
  "rows": 10,
  "description": "Additional CSS code",
  "help_text": "Will be injected into <style> tag"
}
```

**Properties**:
- `rows` - Number of visible rows (default: 5)
- `placeholder` - Placeholder text
- `maxLength` - Maximum characters

**Security**:
- CSS comments `/* */` are automatically escaped to `/ * * /`
- Prevents breaking CSS output

---

### 4. NUMBER - Numeric Input

**Purpose**: Precise numeric values

```json
{
  "id": "grid_columns",
  "label": "Grid Columns",
  "type": "number",
  "default": "4",
  "min": "1",
  "max": "12",
  "step": "1",
  "property": "--grid-columns",
  "description": "Number of product columns"
}
```

**Properties**:
- `min` - Minimum value
- `max` - Maximum value
- `step` - Increment step (default: 1)

**Validation**:
- Automatic min/max validation
- Must be numeric

---

### 5. RANGE - Slider Input

**Purpose**: Visual slider for numeric ranges

```json
{
  "id": "text_opacity",
  "label": "Text Opacity",
  "type": "range",
  "default": "1",
  "min": "0",
  "max": "1",
  "step": "0.1",
  "unit": "",
  "property": "--text-opacity",
  "description": "Transparency level"
}
```

**Properties**:
- `min` - Minimum value (required)
- `max` - Maximum value (required)
- `step` - Slider step (required)
- `unit` - Display unit (e.g. "px", "ms", "%")

**UI**:
- Visual slider with live value display
- Shows: "0.8" or "800ms" (with unit)

---

### 6. SELECT - Dropdown

**Purpose**: Choose from predefined options

```json
{
  "id": "layout_type",
  "label": "Layout Type",
  "type": "select",
  "default": "boxed",
  "property": "--layout-type",
  "options": [
    {"value": "boxed", "label": "Boxed Layout"},
    {"value": "full", "label": "Full Width"},
    {"value": "fluid", "label": "Fluid"}
  ],
  "description": "Page layout style"
}
```

**Properties**:
- `options` - Array of {value, label} objects (required)

**Notes**:
- First option is NOT automatically selected
- Must specify `default` value

---

### 7. TOGGLE - On/Off Switch

**Purpose**: Boolean settings

```json
{
  "id": "sticky_header",
  "label": "Sticky Header",
  "type": "toggle",
  "default": true,
  "property": "--header-sticky",
  "description": "Fix header on scroll"
}
```

**CSS Output**:
```css
:root {
  --header-sticky: 1;  /* true → 1, false → 0 */
}
```

**Notes**:
- `true` → "1"
- `false` → "0"
- Can be used in CSS `calc()` or `opacity`

---

### 8. CODE - Code Editor

**Purpose**: Code snippets with syntax highlighting (future: Monaco editor)

```json
{
  "id": "custom_js",
  "label": "Custom JavaScript",
  "type": "code",
  "default": "// Your code here",
  "rows": 15,
  "description": "Custom JavaScript code",
  "help_text": "Use with caution"
}
```

**Properties**:
- `rows` - Editor height (default: 10)
- `language` - Future: syntax highlighting language

**Current Limitations**:
- Currently renders as textarea (Monaco integration planned)
- CSS comments are escaped for security

---

### 9. FONT_PICKER - Font Selector

**Purpose**: Choose fonts with preview

```json
{
  "id": "body_font",
  "label": "Body Font",
  "type": "font_picker",
  "default": "Open Sans",
  "property": "--font-family-base",
  "options": [
    {"value": "Open Sans", "label": "Open Sans"},
    {"value": "Roboto", "label": "Roboto"},
    {"value": "Georgia", "label": "Georgia"},
    {"value": "Courier New", "label": "Courier New"}
  ],
  "description": "Main text font"
}
```

**Features**:
- Font preview in dropdown
- Automatic fallback fonts:
  - **Sans-serif fonts** → adds `, sans-serif`
  - **Serif fonts** → adds `, serif` (Georgia, Times, Garamond, etc.)
  - **Monospace fonts** → adds `, monospace` (Courier, Monaco, Consolas, etc.)

**CSS Output**:
```css
:root {
  --font-family-base: "Open Sans", sans-serif;
  --font-heading: "Georgia", serif;
  --font-code: "Courier New", monospace;
}
```

**Supported Serif Fonts**:
Georgia, Times New Roman, Times, Garamond, Palatino, Baskerville, Didot, Bodoni, Cambria, serif

**Supported Monospace Fonts**:
Courier New, Courier, Monaco, Consolas, Lucida Console, monospace

**Loading Fonts**:

Use the `url` key on an option to tell the module where the font stylesheet lives.
Two patterns are supported:

**Google Fonts (external URL)** — the module emits `@import url(...)` in the generated CSS automatically:

```json
{
  "options": [
    {
      "value": "Roboto",
      "label": "Roboto",
      "url": "https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap"
    }
  ]
}
```

```css
/* Generated CSS — emitted before :root */
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

:root {
  --font-family-base: "Roboto", sans-serif;
}
```

**Local theme fonts** — specify `url` as a theme-relative path (`web/fonts/...`).
The module does **not** emit `@import` for local paths — the font must be declared
via `@font-face` in the theme's own CSS. The `url` value is reserved for future
admin UI preview support:

```json
{
  "options": [
    {
      "value": "MyFont",
      "label": "My Font",
      "url": "web/fonts/MyFont.woff2"
    }
  ]
}
```

```css
/* In your theme's CSS (e.g. web/css/source/_typography.less): */
@font-face {
    font-family: 'MyFont';
    src: url('../fonts/MyFont.woff2') format('woff2'),
         url('../fonts/MyFont.woff') format('woff');
    font-weight: 400;
    font-style: normal;
    font-display: swap;
}
```

```css
/* Generated CSS — only the CSS variable, no @import */
:root {
  --font-family-base: "MyFont", sans-serif;
}
```

> **Note**: Options without a `url` key (web-safe fonts like Arial, Georgia) are
> always valid — no stylesheet loading is required for them.

---

### 10. COLOR_SCHEME - Scheme Selector

**Purpose**: Predefined color schemes (Light/Dark/Auto)

```json
{
  "id": "color_mode",
  "label": "Color Scheme",
  "type": "color_scheme",
  "default": "auto",
  "property": "--color-scheme",
  "schemes": [
    {
      "value": "light",
      "label": "Light Mode",
      "colors": ["#ffffff", "#f5f5f5", "#e0e0e0"],
      "description": "Light color scheme"
    },
    {
      "value": "dark",
      "label": "Dark Mode",
      "colors": ["#1a1a1a", "#2d2d2d", "#404040"],
      "description": "Dark color scheme"
    },
    {
      "value": "auto",
      "label": "Auto",
      "colors": ["#ffffff", "#1a1a1a"],
      "description": "Follow system preference"
    }
  ]
}
```

**Properties**:
- `schemes` - Array of scheme definitions
- Each scheme:
  - `value` - Scheme ID
  - `label` - Display name
  - `colors` - Preview colors (3 swatches)
  - `description` - Tooltip text

**UI**:
- Visual cards with color preview
- Radio button selection

---

### 11. SOCIAL_LINKS - Social Media URLs

**Purpose**: Manage social media profile links

```json
{
  "id": "social_profiles",
  "label": "Social Media Links",
  "type": "social_links",
  "default": "{}",
  "platforms": [
    {"code": "facebook", "label": "Facebook", "icon": "f"},
    {"code": "twitter", "label": "Twitter/X", "icon": "𝕏"},
    {"code": "instagram", "label": "Instagram", "icon": "📷"},
    {"code": "linkedin", "label": "LinkedIn", "icon": "in"},
    {"code": "youtube", "label": "YouTube", "icon": "▶"}
  ],
  "description": "Your social media profiles"
}
```

**Value Format** (JSON):
```json
{
  "facebook": "https://facebook.com/yourpage",
  "twitter": "https://twitter.com/yourhandle",
  "instagram": "https://instagram.com/yourprofile"
}
```

**Features**:
- Multiple platform inputs in one field
- Each platform has icon and placeholder
- Stored as JSON object
- Empty fields are omitted

**Default Platforms**:
Facebook, Twitter, Instagram, LinkedIn, YouTube, Pinterest, TikTok

---

### 12. ICON_SET_PICKER - Icon Library Selector

**Purpose**: Choose icon library for theme

```json
{
  "id": "icon_library",
  "label": "Icon Set",
  "type": "icon_set_picker",
  "default": "material",
  "options": [
    {
      "value": "material",
      "label": "Material Icons",
      "preview": "★",
      "description": "Google Material Design icons"
    },
    {
      "value": "fontawesome",
      "label": "Font Awesome",
      "preview": "",
      "description": "Font Awesome 6"
    },
    {
      "value": "feather",
      "label": "Feather Icons",
      "preview": "⚡",
      "description": "Simple and clean"
    }
  ]
}
```

**Properties**:
- `options` - Array of icon set definitions
- Each option:
  - `value` - Icon set ID
  - `label` - Display name
  - `preview` - Icon preview character
  - `description` - Tooltip

**UI**:
- Visual cards with icon preview
- Radio button selection

---

### 13. IMAGE_UPLOAD - Image Upload with URL

**Purpose**: Upload images or provide image URLs

```json
{
  "id": "logo",
  "label": "Logo Image",
  "type": "image_upload",
  "default": "",
  "property": "--logo-url",
  "description": "Upload logo or enter URL",
  "params": {
    "acceptTypes": "image/*",
    "maxSize": 2048
  }
}
```

**Properties**:
- `params.acceptTypes` - Accepted file types (default: `"image/*"`)
- `params.maxSize` - Maximum file size in KB (default: 2048)

**Features**:
- File upload with preview
- URL input option
- Base64 encoding for uploaded files
- Client-side validation
- Remove button to clear image

**Value Format**:
- URL: `"https://example.com/logo.png"`
- Data URL: `"data:image/png;base64,iVBORw0KG..."`

**CSS Output**:
```css
:root {
  --logo-url: https://example.com/logo.png;
}
```

**Usage in CSS**:
```css
.header-logo {
  background-image: url(var(--logo-url));
}
```

**Notes**:
- Uploaded files are stored as base64 data URLs
- For production, consider using Magento media storage
- Data URLs increase CSS file size

---

### 14. SPACING - 4-Sided Spacing Control

**Purpose**: Control padding or margin with individual sides

```json
{
  "id": "container_padding",
  "label": "Container Padding",
  "type": "spacing",
  "default": {
    "top": 20,
    "right": 20,
    "bottom": 20,
    "left": 20,
    "unit": "px",
    "linked": true
  },
  "property": "--container-padding",
  "description": "Inner spacing",
  "params": {
    "unit": "px",
    "allowedUnits": ["px", "rem", "em", "%"],
    "min": 0,
    "max": 100,
    "step": 1,
    "linkedByDefault": true
  }
}
```

**Properties**:
- `params.unit` - Default unit (default: `"px"`)
- `params.allowedUnits` - Available units (default: `["px", "rem", "em", "%"]`)
- `params.min` - Minimum value (default: 0)
- `params.max` - Maximum value (default: 100)
- `params.step` - Input step (default: 1)
- `params.linkedByDefault` - Link all sides initially (default: true)

**Features**:
- Visual 4-sided input (top, right, bottom, left)
- Link/unlink button to sync all sides
- Unit selector dropdown
- Number inputs with min/max validation

**Value Format** (JSON):
```json
{
  "top": 20,
  "right": 20,
  "bottom": 20,
  "left": 20,
  "unit": "px",
  "linked": true
}
```

**CSS Output**:
```css
:root {
  --container-padding: 20px;  /* All sides same */
  --header-margin: 10px 20px;  /* top/bottom, left/right */
  --section-padding: 10px 20px 30px 40px;  /* All different */
}
```

**Shorthand Logic**:
- All same: `20px`
- Top/Bottom + Left/Right: `10px 20px`
- Top + Left/Right + Bottom: `10px 20px 30px`
- All different: `10px 20px 30px 40px`

**Usage Examples**:
```css
.container {
  padding: var(--container-padding);
}

.section {
  margin: var(--section-margin);
}
```

---

### 15. REPEATER - Dynamic List of Items

**Purpose**: Create repeating groups of fields (slideshows, testimonials, features)

```json
{
  "id": "features",
  "label": "Features List",
  "type": "repeater",
  "default": [],
  "description": "Add feature items",
  "params": {
    "min": 0,
    "max": 10,
    "addButtonLabel": "Add Feature",
    "itemLabel": "Feature",
    "collapsible": true,
    "sortable": true
  },
  "fields": [
    {
      "code": "title",
      "label": "Title",
      "type": "text",
      "required": true,
      "placeholder": "Feature name"
    },
    {
      "code": "description",
      "label": "Description",
      "type": "textarea",
      "placeholder": "Describe the feature"
    },
    {
      "code": "icon",
      "label": "Icon",
      "type": "text",
      "placeholder": "Icon name"
    },
    {
      "code": "enabled",
      "label": "Enabled",
      "type": "toggle",
      "default": true
    }
  ]
}
```

**Properties**:
- `fields` - Array of sub-field definitions (required)
- `params.min` - Minimum items (default: 0)
- `params.max` - Maximum items (default: 10)
- `params.addButtonLabel` - Button text (default: "Add Item")
- `params.itemLabel` - Item title prefix (default: "Item")
- `params.collapsible` - Allow collapsing items (default: true)
- `params.sortable` - Allow reordering (default: true)

**Supported Sub-Field Types**:
- `text` - Single line input
- `url` - URL input
- `textarea` - Multi-line input
- `number` - Numeric input
- `select` - Dropdown with options
- `toggle` - Checkbox/switch

**Features**:
- Add/remove items dynamically
- Collapsible items to save space
- Drag-and-drop reordering (basic)
- Each item has numbered header
- Min/max validation
- Remove button per item

**Value Format** (JSON array):
```json
[
  {
    "title": "Fast Performance",
    "description": "Lightning-fast page loads",
    "icon": "speed",
    "enabled": true
  },
  {
    "title": "Mobile First",
    "description": "Responsive on all devices",
    "icon": "mobile",
    "enabled": true
  }
]
```

**CSS Output**:
```css
:root {
  --features: [{...}, {...}];  /* JSON string, escaped */
}
```

**Notes**:
- Repeater fields typically don't output to CSS directly
- Use in JavaScript/PHP to render dynamic content
- Access via GraphQL API or custom logic
- Not suitable for CSS variables (use for data storage)

**Example Sub-Field Configuration**:
```json
{
  "fields": [
    {
      "code": "link_text",
      "label": "Link Text",
      "type": "text",
      "required": true
    },
    {
      "code": "link_url",
      "label": "URL",
      "type": "url",
      "required": true
    },
    {
      "code": "target",
      "label": "Open in",
      "type": "select",
      "options": [
        {"value": "_self", "label": "Same Tab"},
        {"value": "_blank", "label": "New Tab"}
      ],
      "default": "_self"
    }
  ]
}
```

---

## Field Properties

### Common Properties

All field types support these properties:

```json
{
  "id": "field_id",              // Required: Unique ID within section
  "label": "Field Label",        // Required: Display label
  "type": "text",                // Required: Field type
  "default": "value",            // Optional: Default value
  "property": "--css-variable",  // Optional: CSS property name (custom prop or standard)
  "selector": ".my-element",     // Optional: CSS selector override (default: :root or section selector)
  "description": "Short text",   // Optional: Help text below label
  "help_text": "Detailed help",  // Optional: Tooltip on (i) icon
  "placeholder": "Hint...",      // Optional: Input placeholder
  "required": false,             // Optional: Required field (default: false)
  "important": false,            // Optional: Add !important to CSS (default: false)
  "disable": true                // Optional: Remove inherited field (child themes only)
}
```

### Property Details

#### `id` (string, required)
- Unique identifier within section
- Lowercase, alphanumeric + underscore
- Used in database and GraphQL
- Example: `primary_color`, `grid_columns`

#### `label` (string, required)
- Display name in UI
- Can include emoji: `"🎨 Primary Color"`
- Keep concise (2-4 words)

#### `type` (string, required)
- See [Field Types Reference](#field-types-reference)
- Supported: `color`, `text`, `textarea`, `number`, `range`, `select`, `toggle`, `code`, `font_picker`, `color_scheme`, `social_links`, `icon_set_picker`, `image_upload`, `spacing`, `repeater`

#### `default` (mixed, optional)
- Default value when field is empty
- Type depends on field type:
  - `color`: `"#FF0000"` or `"rgb(255, 0, 0)"`
  - `text/textarea/code`: `"string"`
  - `number/range`: `"123"` or `"1.5"`
  - `toggle`: `true` or `false`
  - `select/font_picker/icon_set_picker`: `"option_value"`
  - `color_scheme`: `"light"` | `"dark"` | `"auto"`
  - `social_links`: `"{}"`
  - `image_upload`: `"https://example.com/image.png"` or `""`
  - `spacing`: `{"top": 20, "right": 20, "bottom": 20, "left": 20, "unit": "px", "linked": true}`
  - `repeater`: `[]` (empty array)

#### `property` (string, optional)
- CSS property to output the field value to
- **CSS custom property** (starts with `--`): sets a CSS variable  
  Example: `"--primary-color"`, `"--font-size-base"`
- **Standard CSS property** (no `--` prefix): sets a regular property on the selector  
  Example: `"max-width"`, `"padding"`
- If omitted, field value is stored but NOT output to CSS
- Replaces the old `css_var` key (`css_var` still works for backward compatibility)

**CSS Output (custom property)**:
```css
:root {
  --primary-color: 25, 121, 195;
}
```

**CSS Output (standard property with selector)**:
```css
.page-wrapper {
  max-width: 1280px;
}
```

#### `selector` (string or array, optional)
- CSS selector where the property is applied
- Overrides the section-level `selector` for this field only
- Defaults to `:root` (or the section `selector` if set)
- Can be a string or an array of selectors

**Single selector**:
```json
{ "property": "max-width", "selector": ".page-wrapper" }
```

**Multiple selectors**:
```json
{ "property": "max-width", "selector": [".page-wrapper", ".page-header"] }
```

**Selector hierarchy** (highest → lowest priority):
1. Field-level `selector` — explicit override
2. Section-level `selector` — inherited by all fields in section
3. `:root` — default fallback

#### `description` (string, optional)
- Short help text displayed below label
- 1-2 sentences max
- Example: `"Main brand color for buttons and links"`

#### `help_text` (string, optional)
- Detailed help text in tooltip
- Click (i) icon to show
- Can be longer, include examples
- Example: `"Accepts HEX (#FF0000), RGB (255, 0, 0), or color names"`

#### `placeholder` (string, optional)
- Input placeholder text
- For: `text`, `textarea`, `code`, `number`
- Example: `"1280px"`, `"Enter value..."`

#### `required` (boolean, optional, default: false)
- Mark field as required
- Validation error if empty
- Red asterisk (*) in UI

#### `important` (boolean, optional, default: false)
- Add `!important` flag to CSS
- Use sparingly (for overrides)

**CSS Output**:
```css
:root {
  --primary-color: 255, 0, 0 !important;
}
```

---

## 16. Presets - Pre-configured Templates

Presets allow theme developers to provide ready-to-use style templates that users can apply with one click. Think of them as "starter kits" for different design variations.

### What are Presets?

- **Read-only templates** defined by theme developer in `settings.json`
- **Quick styling** - apply multiple settings at once
- **Not saved** as separate entities - they update Draft values
- **User flow**: Select → Preview → Apply → Edit (optional) → Publish

### Preset vs Publication

| Feature | Preset | Publication |
|---------|--------|-------------|
| **Source** | Static JSON in theme | Dynamic DB records |
| **Created by** | Theme developer | User (via UI) |
| **Modifiable** | No (code only) | Yes (via UI) |
| **Versioning** | No | Yes (full history) |
| **Purpose** | Starting templates | Saved versions |

### Configuration

Add `presets` array to your `settings.json`:

```json
{
  "version": "1.0",
  "sections": [...],
  "presets": [
    {
      "id": "dark-mode",
      "name": "🌙 Dark Mode",
      "description": "Complete dark color scheme with high contrast",
      "settings": {
        "colors.primary_color": "#3b82f6",
        "colors.text_color": "rgb(243, 244, 246)",
        "colors.background": "#0d0d0d",
        "colors.link_color": "rgb(96, 165, 250)"
      }
    },
    {
      "id": "minimal-clean",
      "name": "✨ Minimal Clean",
      "description": "Clean light theme with generous spacing",
      "settings": {
        "layout.container_width": "1024px",
        "layout.grid_gap": "1.5rem",
        "colors.primary_color": "#ffffff"
      }
    }
  ]
}
```

### Preset Structure

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `id` | string | Yes | Unique preset identifier (kebab-case) |
| `name` | string | Yes | Display name in UI (can include emoji) |
| `description` | string | No | Short description (1-2 sentences) |
| `settings` | object | Yes | Key-value pairs of settings to apply |

### Settings Format

Use **dot notation** for setting keys:

```json
"settings": {
  "section_code.field_code": "value"
}
```

**Examples:**
```json
{
  "colors.primary_color": "#1a1a1a",
  "typography.font_family": "Roboto",
  "layout.sidebar_width": "250px",
  "spacing.container_padding": "2rem"
}
```

**Important:** Section code must match your `sections[].id` and field code must match `sections[].settings[].id`.

### User Flow

1. **User opens Panel** → sees "Apply Preset" dropdown
2. **Selects preset** → expanded view shows:
   - Description
   - Warning: "This will change N settings"
3. **Clicks "Apply Preset"**:
   - If no unsaved changes → applies immediately
   - If unsaved changes exist → shows dialog:
     - **Merge**: Keep my changes, apply preset to unchanged fields
     - **Overwrite**: Discard my changes, use all preset values
4. **Values applied to Draft** → fields update, live preview refreshes
5. **User can**:
   - Continue editing fields
   - Save Draft
   - Publish changes

### Best Practices

#### 1. Provide 2-4 Presets Maximum
Too many options = decision paralysis. Focus on key variations:
- Light/Dark mode
- Minimal/Detailed style
- Accessibility preset

#### 2. Use Descriptive Names
✅ Good: "🌙 Dark Mode", "♿ High Contrast", "✨ Minimal Clean"
❌ Bad: "Preset 1", "Theme 2", "Option B"

#### 3. Write Clear Descriptions
Explain **what** it does and **why** user might want it:
```json
{
  "description": "Complete dark color scheme with high contrast for better readability in low-light conditions. Perfect for night browsing."
}
```

#### 4. Only Include Essential Settings
Don't change everything - focus on settings that define the preset's character:
```json
{
  "dark-mode": {
    "settings": {
      // ✅ Core colors that define dark mode
      "colors.background": "#0d0d0d",
      "colors.text": "rgb(243, 244, 246)",
      "colors.primary": "#3b82f6"
      // ❌ Don't include unrelated settings like sidebar_width
    }
  }
}
```

#### 5. Test All Presets
- Apply each preset on clean Draft
- Verify all values apply correctly
- Check live preview updates
- Test with existing unsaved changes (merge vs overwrite)

### Complete Example

```json
{
  "version": "1.0",
  "sections": [
    {
      "id": "colors",
      "name": "Colors",
      "settings": [
        {
          "id": "background",
          "label": "Background Color",
          "type": "color",
          "default": "#ffffff",
          "property": "--bg-color"
        },
        {
          "id": "text",
          "label": "Text Color",
          "type": "color",
          "default": "rgb(17, 24, 39)",
          "property": "--text-color"
        },
        {
          "id": "primary",
          "label": "Primary Color",
          "type": "color",
          "default": "#1979c3",
          "property": "--primary-color"
        }
      ]
    }
  ],
  "presets": [
    {
      "id": "dark-mode",
      "name": "🌙 Dark Mode",
      "description": "Dark color scheme for night browsing with reduced eye strain",
      "settings": {
        "colors.background": "#0d0d0d",
        "colors.text": "rgb(243, 244, 246)",
        "colors.primary": "#3b82f6"
      }
    },
    {
      "id": "high-contrast",
      "name": "♿ High Contrast",
      "description": "Maximum contrast for accessibility and users with visual impairments",
      "settings": {
        "colors.background": "#000000",
        "colors.text": "rgb(255, 255, 255)",
        "colors.primary": "#ffff00"
      }
    },
    {
      "id": "light-minimal",
      "name": "✨ Light Minimal",
      "description": "Clean light theme with soft colors and minimal distractions",
      "settings": {
        "colors.background": "#fafafa",
        "colors.text": "rgb(55, 65, 81)",
        "colors.primary": "#6b7280"
      }
    }
  ]
}
```

### GraphQL API

**Query Presets:**
```graphql
query {
  breezeThemeEditorPresets(storeId: 1, themeId: 21) {
    id
    name
    description
  }
}
```

**Apply Preset:**
```graphql
mutation {
  applyBreezeThemeEditorPreset(input: {
    storeId: 1
    themeId: 21
    presetId: "dark-mode"
    status: DRAFT
    overwriteExisting: false  # Merge mode
  }) {
    success
    message
    appliedCount
    values {
      sectionCode
      fieldCode
      value
    }
  }
}
```

### Troubleshooting

#### Presets not showing in UI
- Check JSON syntax with `python3 -m json.tool settings.json`
- Verify `presets` is top-level array (same level as `sections`)
- Clear Magento cache: `bin/magento cache:clean`

#### Preset applies but fields don't update
- Check section/field codes match exactly (case-sensitive)
- Verify fields exist in `sections[].settings[]`
- Check browser console for JavaScript errors

#### "Setting not found" error
```
Error: colors.primary_color not found
```
Fix: Verify `colors` section exists with `primary_color` field:
```json
{
  "sections": [
    {
      "id": "colors",  // Must match "colors" in preset
      "settings": [
        {
          "id": "primary_color"  // Must match "primary_color"
        }
      ]
    }
  ]
}
```

---

## Conditional Field Visibility (dependsOn)

The `dependsOn` property makes a field visible only when another field has a
specific value. Hidden fields are automatically excluded from save mutations —
their values are never written to the database while hidden.

### Syntax

```json
{
  "id": "custom_font_url",
  "type": "text",
  "label": "Custom Font URL",
  "dependsOn": {
    "field": "font_source",
    "value": "custom",
    "operator": "EQUALS"
  }
}
```

### `dependsOn` Properties

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `field` | string | Yes | `id` of the controlling field |
| `value` | string | Yes | Value to compare against |
| `operator` | string | No | Comparison operator (default: `EQUALS`) |

### Operators

| Operator | Behaviour |
|----------|-----------|
| `EQUALS` | Show field when controlling field **equals** `value` |
| `NOT_EQUALS` | Show field when controlling field **does not equal** `value` |

### Example — Font Source

Show a "Custom Font URL" input only when the user selects "Custom" from a
`font_source` dropdown:

```json
{
  "id": "fonts",
  "name": "Typography",
  "settings": [
    {
      "id": "font_source",
      "label": "Font Source",
      "type": "select",
      "default": "google",
      "property": "--font-source",
      "options": [
        { "value": "google", "label": "Google Fonts" },
        { "value": "system", "label": "System Fonts" },
        { "value": "custom", "label": "Custom URL" }
      ]
    },
    {
      "id": "custom_font_url",
      "label": "Custom Font URL",
      "type": "text",
      "placeholder": "https://example.com/fonts/font.css",
      "description": "URL of the custom font stylesheet",
      "dependsOn": {
        "field": "font_source",
        "value": "custom",
        "operator": "EQUALS"
      }
    }
  ]
}
```

Result: `custom_font_url` is only visible (and only saved) when `font_source = "custom"`.

### Example — NOT_EQUALS

Hide an "Override Width" field when layout is set to "fullwidth" (i.e. show it
for all other options):

```json
{
  "id": "container_width",
  "label": "Container Width",
  "type": "text",
  "default": "1280px",
  "property": "--container-width",
  "dependsOn": {
    "field": "layout_type",
    "value": "fullwidth",
    "operator": "NOT_EQUALS"
  }
}
```

### Cross-Section Dependencies

The controlling field and the dependent field **do not need to be in the same
section**. `dependsOn.field` is resolved across all sections in the editor.

```json
// Section: "layout"
{ "id": "layout_type", "type": "select", ... }

// Section: "typography" — depends on field from "layout" section
{
  "id": "narrow_font_size",
  "type": "number",
  "dependsOn": { "field": "layout_type", "value": "narrow", "operator": "EQUALS" }
}
```

### Notes

- Only **1 level** of dependency is supported — chaining (A → B → C) is not implemented.
- The controlling field must be a `select`, `toggle`, `text`, `number`, `range`,
  or `color_scheme` — any field type that produces a scalar value.
- If the controlling field is not found in the DOM, `EQUALS` conditions default
  to **hidden** and `NOT_EQUALS` conditions default to **visible**.

### Best Practices

✅ Use `dependsOn` to reduce clutter — hide advanced options until they are relevant:
```json
{ "dependsOn": { "field": "enable_feature", "value": "true", "operator": "EQUALS" } }
```

✅ Keep the controlling field **above** the dependent field in the same section
for a natural top-to-bottom reveal flow.

❌ Do not use `dependsOn` for required fields — a hidden required field will
never pass validation, preventing save.

❌ Do not chain dependencies (A depends on B which depends on C) — only the
first level is evaluated.

---

## Color Palette System

Color palettes provide a centralized way to define and manage theme colors. Users can quickly select colors from predefined palettes when editing COLOR fields.

### Palette Structure

Palettes are defined in the `palettes` section at the root level of `settings.json`:

```json
{
  "version": "1.0",
  "sections": [...],
  "palettes": {
    "default": {
      "id": "default",
      "label": "Default Color Palette",
      "description": "Professional color system",
      "groups": {
        "brand": {
          "id": "brand",
          "label": "Brand Colors",
          "description": "Primary brand identity colors",
          "colors": [
            {
              "id": "primary",
              "label": "Primary",
              "description": "Main brand color",
              "css_var": "--color-brand-primary",
              "default": "#1979c3"
            }
          ]
        }
      }
    }
  }
}
```

### Palette Properties

#### Palette Object
- `id` (String, required) - Unique palette identifier
- `label` (String, required) - Display name
- `description` (String) - Palette description
- `groups` (Object, required) - Color groups

#### Group Object
- `id` (String, required) - Unique group identifier
- `label` (String, required) - Display name
- `description` (String) - Group description
- `colors` (Array, required) - Color definitions

#### Color Object
- `id` (String, required) - Unique color identifier
- `label` (String, required) - Display name
- `description` (String) - Color usage description
- `css_var` (String, required) - CSS variable name (e.g., `--color-brand-primary`)
- `default` (String, required) - Default HEX color value

### Complete Palette Example

```json
{
  "palettes": {
    "default": {
      "id": "default",
      "label": "Default Color Palette",
      "description": "Professional color system for theme customization",
      "groups": {
        "brand": {
          "id": "brand",
          "label": "Brand Colors",
          "description": "Primary brand identity colors",
          "colors": [
            {
              "id": "primary",
              "label": "Primary",
              "description": "Main brand color for buttons and key elements",
              "css_var": "--color-brand-primary",
              "default": "#1979c3"
            },
            {
              "id": "secondary",
              "label": "Secondary",
              "description": "Supporting brand color",
              "css_var": "--color-brand-secondary",
              "default": "#111827"
            },
            {
              "id": "accent",
              "label": "Accent",
              "description": "Highlight color for links",
              "css_var": "--color-brand-accent",
              "default": "#1d4ed8"
            }
          ]
        },
        "neutral": {
          "id": "neutral",
          "label": "Neutral Colors",
          "description": "Grayscale palette",
          "colors": [
            {
              "id": "0",
              "label": "White",
              "description": "Pure white",
              "css_var": "--color-neutral-0",
              "default": "#ffffff"
            },
            {
              "id": "900",
              "label": "Gray 900",
              "description": "Darkest gray",
              "css_var": "--color-neutral-900",
              "default": "#111827"
            }
          ]
        },
        "state": {
          "id": "state",
          "label": "State Colors",
          "description": "Semantic colors for UI feedback",
          "colors": [
            {
              "id": "success",
              "label": "Success",
              "description": "Positive actions",
              "css_var": "--color-state-success",
              "default": "#10b981"
            },
            {
              "id": "error",
              "label": "Error",
              "description": "Errors and warnings",
              "css_var": "--color-state-error",
              "default": "#ef4444"
            }
          ]
        }
      }
    }
  }
}
```

### Using Palettes in Color Fields

Reference a palette in COLOR field configuration:

```json
{
  "id": "text_color",
  "label": "Text Color",
  "type": "color",
  "default": "#111827",
  "property": "--text-color",
  "palette": "default",
  "description": "Main text color"
}
```

**Result**: Users will see color swatches from the "default" palette when editing this field.

### Referencing Palette Colors

Users can select a palette color, which creates a CSS variable reference:

**User Action**: Click on "Primary" color from palette  
**Stored Value**: `--color-brand-primary`  
**CSS Output**:
```css
:root {
  --text-color: var(--color-brand-primary);
}
```

**Benefits**:
- ✅ Changing palette color updates all referencing fields
- ✅ Maintains color consistency across theme
- ✅ Easier theme customization with predefined schemes

### Best Practices

#### 1. Group Related Colors
```json
"groups": {
  "brand": {...},      // Primary brand colors
  "neutral": {...},    // Grays and backgrounds
  "state": {...},      // Success, error, warning
  "accent": {...}      // Highlights and special elements
}
```

#### 2. Use Descriptive IDs
```json
// ❌ Bad
"id": "color1"

// ✅ Good
"id": "primary"
```

#### 3. Provide Clear Descriptions
```json
{
  "id": "primary",
  "label": "Primary",
  "description": "Main brand color for buttons and key elements",
  "css_var": "--color-brand-primary",
  "default": "#1979c3"
}
```

#### 4. CSS Variable Naming Convention
```
--color-{group}-{id}

Examples:
--color-brand-primary
--color-neutral-900
--color-state-success
```

#### 5. Recommended Neutral Scale
```json
"neutral": {
  "colors": [
    {"id": "0", "default": "#ffffff"},    // White
    {"id": "50", "default": "#f9fafb"},   // Lightest
    {"id": "100", "default": "#f3f4f6"},
    {"id": "200", "default": "#e5e7eb"},
    {"id": "300", "default": "#d1d5db"},
    {"id": "400", "default": "#9ca3af"},
    {"id": "500", "default": "#6b7280"},  // Base
    {"id": "600", "default": "#4b5563"},
    {"id": "700", "default": "#374151"},
    {"id": "800", "default": "#1f2937"},
    {"id": "900", "default": "#111827"}   // Darkest
  ]
}
```

### Multiple Palettes

You can define multiple palettes for different color schemes:

```json
{
  "palettes": {
    "default": {
      "id": "default",
      "label": "Light Theme Palette",
      "groups": {...}
    },
    "dark": {
      "id": "dark",
      "label": "Dark Theme Palette",
      "groups": {...}
    },
    "highcontrast": {
      "id": "highcontrast",
      "label": "High Contrast Palette",
      "groups": {...}
    }
  }
}
```

**Usage**:
```json
{
  "id": "bg_color",
  "type": "color",
  "palette": "dark",
  "property": "--bg-color"
}
```

### Palette Color Format

**Important**: Palette colors always output in **HEX format** regardless of field's `format` property:

```css
/* Palette definition */
--color-brand-primary: #1979c3;  /* Always HEX */

/* Field using palette reference */
--text-color: var(--color-brand-primary);  /* Reference, not converted */
```

If a field has `format: "rgb"` but user selects a palette color, the output will be:
```css
--my-field: var(--color-brand-primary);  /* NOT converted to RGB */
```

---

## Validation Rules

### Built-in Validation

#### COLOR Type
```json
{
  "type": "color",
  "default": "#FF0000"
}
```
- **Rule**: Must be HEX format `#RRGGBB` or `#RGB`
- **Error**: "Invalid color format. Expected HEX color (e.g. #FF0000)"

#### NUMBER/RANGE Type
```json
{
  "type": "number",
  "min": "1",
  "max": "12",
  "default": "4"
}
```
- **Rules**:
  - Must be numeric
  - Value ≥ `min` (if specified)
  - Value ≤ `max` (if specified)
- **Errors**:
  - "Value must be a number"
  - "Value must be at least {min}"
  - "Value must not exceed {max}"

#### TEXT/TEXTAREA Type

**Length Validation**:
```json
{
  "type": "text",
  "minLength": 3,
  "maxLength": 50
}
```
- **Rules**:
  - Length ≥ `minLength`
  - Length ≤ `maxLength`
- **Errors**:
  - "Text must be at least {minLength} characters"
  - "Text must not exceed {maxLength} characters"

**Pattern Validation**:
```json
{
  "type": "text",
  "pattern": "^\\d+(px|rem|em|%)$",
  "validationMessage": "Must be a valid CSS unit (e.g. 10px, 1rem)"
}
```
- **Rule**: Value must match regex `pattern`
- **Error**: Custom message from `validationMessage`

#### Required Validation
```json
{
  "required": true
}
```
- **Rule**: Value cannot be empty
- **Error**: "Field {fieldCode} is required"

### Custom Validation

For complex validation, use `pattern` + `validationMessage`:

**Example: URL Validation**
```json
{
  "id": "logo_url",
  "type": "text",
  "pattern": "^https?:\\/\\/.+",
  "validationMessage": "Must be a valid URL starting with http:// or https://"
}
```

**Example: Hex Color (alternative)**
```json
{
  "id": "custom_hex",
  "type": "text",
  "pattern": "^#[0-9A-Fa-f]{6}$",
  "validationMessage": "Must be a 6-digit HEX color (e.g. #FF0000)"
}
```

---

## Theme Inheritance

### Parent Theme Extension

Extend parent theme configuration:

**Parent Theme** (`Parent/Theme/etc/theme_editor/settings.json`):
```json
{
  "version": "1.0",
  "sections": [
    {
      "id": "colors",
      "name": "Colors",
      "settings": [
        {
          "id": "primary_color",
          "type": "color",
          "default": "#1979c3",
          "property": "--primary-color"
        }
      ]
    }
  ]
}
```

**Child Theme** (`Child/Theme/etc/theme_editor/settings.json`):
```json
{
  "version": "1.0",
  "extends": "Parent/Theme",
  "sections": [
    {
      "id": "colors",
      "settings": [
        {
          "id": "secondary_color",
          "type": "color",
          "default": "#ff6b6b",
          "property": "--secondary-color"
        }
      ]
    },
    {
      "id": "custom_section",
      "name": "Custom Settings",
      "settings": [...]
    }
  ]
}
```

**Result**:
- Child inherits ALL parent sections and fields
- Child can ADD new sections
- Child can ADD fields to existing sections
- Child can DISABLE inherited sections or fields using `"disable": true`

### Disabling Inherited Content

Use `"disable": true` to remove sections or fields that were inherited from a parent theme but are not relevant to the child theme.

**Disable an entire section:**

```json
{
  "version": "1.0",
  "sections": [
    {
      "id": "layout",
      "disable": true
    }
  ]
}
```

**Disable a specific field within a section:**

```json
{
  "version": "1.0",
  "sections": [
    {
      "id": "layout",
      "settings": [
        {
          "id": "border-radius",
          "disable": true
        }
      ]
    }
  ]
}
```

**Rules:**
- `"disable": true` on an existing inherited section → section is removed from the merged result
- `"disable": true` on an existing inherited field → field is removed from the merged result
- `"disable": true` on a non-existing `id` → silently ignored (nothing is added)

### Inheritance Rules

1. **Sections**: Merged by `id`
   - Parent sections are included
   - Child sections are added
   - If `id` matches, settings are merged
   - If `id` matches and `disable: true`, section is removed

2. **Settings**: Merged by `id`
   - Parent settings are included
   - Child settings are added
   - If `id` matches, child value is used (override)
   - If `id` matches and `disable: true`, setting is removed

3. **Values**: Child can override parent defaults
   - Even without redefining field
   - Stored per theme in database

---

## Best Practices

### 1. Naming Conventions

**Section IDs**:
- Lowercase, underscore-separated
- Descriptive: `colors`, `typography`, `layout`, `header`, `footer`
- Avoid generic names: `section1`, `misc`

**Field IDs**:
- Lowercase, underscore-separated
- Be specific: `primary_button_color` not `color1`
- Include context: `header_bg_color` not `bg_color`

**CSS Variables**:
- Use semantic names: `--primary-color` not `--color-1`
- Follow convention: `--component-property-modifier`
  - `--button-primary-bg`
  - `--text-base-size`
  - `--header-height-mobile`

### 2. Section Organization

**Logical Grouping**:
```json
{
  "sections": [
    {"id": "colors", "order": 1},      // Visual first
    {"id": "typography", "order": 2},  // Then typography
    {"id": "layout", "order": 3},      // Then structure
    {"id": "header", "order": 4},      // Then components
    {"id": "footer", "order": 5},
    {"id": "advanced", "order": 99}    // Advanced last
  ]
}
```

**Section Size**:
- 5-10 fields per section (ideal)
- Max 20 fields (split if larger)
- Use `description` to explain section purpose

### 3. Default Values

**Always Provide Defaults**:
```json
{
  "id": "primary_color",
  "default": "#1979c3"  // ✅ Good
}
```

**Match CSS Defaults**:
```less
// _theme-variables.less
@primary-color: #1979c3;
```
```json
{
  "id": "primary_color",
  "default": "#1979c3"  // ✅ Matches LESS
}
```

**Use Real Values**:
```json
{"default": "TBD"}           // ❌ Bad
{"default": "#1979c3"}       // ✅ Good
```

### 4. CSS Variables

**Use Breeze Variables**:
```json
{
  "id": "primary_color",
  "property": "--primary"  // ✅ Breeze standard
}
```

Breeze uses RGB format:
```css
:root {
  --primary: 25, 121, 195;
}

.button {
  background: rgb(var(--primary));
  border-color: rgba(var(--primary), 0.5);
}
```

**Avoid Direct Colors**:
```json
{
  "property": "--button-bg-hex"  // ❌ Not Breeze style
}
```

### 5. Help Text

**Description** (short):
```json
{
  "description": "Main brand color for buttons and links"
}
```

**Help Text** (detailed):
```json
{
  "help_text": "This color is used for:\n- Primary buttons (Add to Cart, Checkout)\n- Text links\n- Focus states\n- Hover effects"
}
```

**Examples in Help**:
```json
{
  "help_text": "Accepts values like: 10px, 1rem, 2em, 5%"
}
```

### 6. Field Order

**Visual Preview First**:
```json
{
  "settings": [
    {"id": "bg_color", "type": "color"},     // Visual
    {"id": "text_color", "type": "color"},   // Visual
    {"id": "padding", "type": "range"},      // Semi-visual
    {"id": "custom_class", "type": "text"}   // Technical last
  ]
}
```

### 7. Testing

**Before Release**:
1. ✅ Test all field types render correctly
2. ✅ Verify CSS output with `?breeze_theme_editor=1&debug=1`
3. ✅ Test default values match existing design
4. ✅ Validate inheritance if using parent theme
5. ✅ Check mobile/tablet responsiveness
6. ✅ Test GraphQL queries work
7. ✅ Verify draft/publish workflow

**Common Issues**:
- Missing `property` → field stores but doesn't output CSS
- Wrong `default` type → validation errors
- Duplicate `id` → only last field shows
- Missing `extends` → inheritance doesn't work

---

## Reading Settings in PHP Templates

The Breeze Theme Editor automatically injects a `$breezeThemeEditor` helper
variable into every frontend `.phtml` template — no ViewModel or Block injection
needed. This works the same way as Magento's built-in `$secureRenderer`.

### API

#### `get(string $path): ?string`

Returns the current published value of a setting for the active store and theme,
falling back to the `default` defined in `settings.json`. Returns `null` if the
setting does not exist.

```php
$breezeThemeEditor?->get('section_code/setting_code')
```

#### `is(string $path, string $value): bool`

Returns `true` if the current value of the setting equals `$value` (strict
string comparison). Shorthand for `get() === $value`.

```php
$breezeThemeEditor?->is('section_code/setting_code', 'value')
```

> **Note:** The nullsafe operator (`?->`) is recommended because the variable
> may not be available in older Magento versions or non-Breeze environments.

---

### PHP-only Settings (no CSS variable)

Most settings map to a CSS variable via the `property` field. When you need a
setting that controls PHP-side template logic only (e.g. enable/disable a block,
pick a layout, pass a string to an API), simply omit `property`:

```json
{
  "id": "layout_mode",
  "label": "Layout Mode",
  "type": "select",
  "default": "grid",
  "options": [
    {"value": "grid",  "label": "Grid"},
    {"value": "list",  "label": "List"}
  ]
}
```

This setting produces no CSS output but is readable from PHP templates.

---

### Usage Examples

#### Conditionally render a block

```php
<?php if ($breezeThemeEditor?->is('header/sticky_header', 'true')): ?>
    <div class="sticky-header-placeholder"></div>
<?php endif; ?>
```

#### Pass a value to a JS component attribute

```php
<div data-mage-init='{"Vendor_Module/js/component": {
    "layout": "<?= $escaper->escapeHtmlAttr(
        $breezeThemeEditor?->get('catalog/product_list_mode') ?? 'grid'
    ) ?>"
}}'></div>
```

#### Apply a CSS class based on a setting

```php
<?php $headerStyle = $breezeThemeEditor?->get('header/style') ?? 'default'; ?>
<header class="page-header page-header--<?= $escaper->escapeHtmlAttr($headerStyle) ?>">
```

#### Read a numeric / string value

```php
<?php $columns = (int) ($breezeThemeEditor?->get('catalog/grid_columns') ?? 4); ?>
<ul class="products-grid products-grid--<?= $escaper->escapeHtmlAttr((string) $columns) ?>-col">
```

---

### Block Caching

If your template belongs to a block that uses the full-page cache, the rendered
HTML is cached per the block's cache key. Because theme editor settings can
change, you must include the relevant setting values in `getCacheKeyInfo()`;
otherwise stale HTML may be served after a publish:

```php
// Block class
public function getCacheKeyInfo(): array
{
    return array_merge(parent::getCacheKeyInfo(), [
        $this->breezeThemeEditor->get('header/style'),
        $this->breezeThemeEditor->get('catalog/product_list_mode'),
    ]);
}
```

Alternatively, disable caching for that block entirely when the setting value
affects the rendered output:

```php
public function getCacheLifetime(): ?int
{
    return null; // no cache
}
```

---

## Examples

### Example 1: Complete Color Section

```json
{
  "id": "colors",
  "name": "🎨 Colors",
  "description": "Customize your theme colors",
  "icon": "palette",
  "order": 1,
  "settings": [
    {
      "id": "primary_color",
      "label": "Primary Color",
      "type": "color",
      "default": "#1979c3",
      "property": "--primary",
      "description": "Main brand color",
      "help_text": "Used for buttons, links, and accents. Supports HEX format (#FF0000)"
    },
    {
      "id": "secondary_color",
      "label": "Secondary Color",
      "type": "color",
      "default": "#6c757d",
      "property": "--secondary",
      "description": "Secondary actions and elements"
    },
    {
      "id": "success_color",
      "label": "Success Color",
      "type": "color",
      "default": "#28a745",
      "property": "--success",
      "description": "Success messages and states"
    },
    {
      "id": "error_color",
      "label": "Error Color",
      "type": "color",
      "default": "#dc3545",
      "property": "--error",
      "description": "Error messages and validation"
    },
    {
      "id": "text_color",
      "label": "Text Color",
      "type": "color",
      "default": "#212529",
      "property": "--text-color",
      "description": "Main body text color"
    },
    {
      "id": "link_color",
      "label": "Link Color",
      "type": "color",
      "default": "#007bff",
      "property": "--link-color",
      "description": "Hyperlink color"
    }
  ]
}
```

### Example 2: Color Format Options (Breeze 2.0 vs 3.0)

```json
{
  "id": "color_formats",
  "name": "🎨 Color Format Examples",
  "description": "Different color format configurations",
  "icon": "palette",
  "order": 1,
  "settings": [
    {
      "id": "modern_color_hex",
      "label": "Modern Color (HEX)",
      "type": "color",
      "default": "#1979c3",
      "property": "--modern-color",
      "format": "hex",
      "description": "Breeze 3.0 - outputs HEX format",
      "help_text": "Use with: color: var(--modern-color)"
    },
    {
      "id": "legacy_color_rgb",
      "label": "Legacy Color (RGB)",
      "type": "color",
      "default": "#1979c3",
      "property": "--legacy-color",
      "format": "rgb",
      "description": "Breeze 2.0 - outputs RGB format",
      "help_text": "Use with: color: rgb(var(--legacy-color))"
    },
    {
      "id": "auto_hex",
      "label": "Auto-detect HEX",
      "type": "color",
      "default": "#ff5722",
      "property": "--auto-hex",
      "format": "auto",
      "description": "Auto-detects HEX from default value"
    },
    {
      "id": "auto_rgb",
      "label": "Auto-detect RGB",
      "type": "color",
      "default": "255, 87, 34",
      "property": "--auto-rgb",
      "format": "auto",
      "description": "Auto-detects RGB from default value"
    },
    {
      "id": "no_format_with_default",
      "label": "No Format Property (with default)",
      "type": "color",
      "default": "#4caf50",
      "property": "--no-format-default",
      "description": "Defaults to 'auto' → detects HEX"
    },
    {
      "id": "no_format_no_default",
      "label": "No Format Property (no default)",
      "type": "color",
      "property": "--no-format-no-default",
      "description": "Defaults to 'hex' when no default exists"
    }
  ]
}
```

**Expected CSS Output**:
```css
:root {
  --modern-color: #1979c3;           /* format: hex */
  --legacy-color: 25, 121, 195;      /* format: rgb */
  --auto-hex: #ff5722;               /* format: auto (detected HEX) */
  --auto-rgb: 255, 87, 34;           /* format: auto (detected RGB) */
  --no-format-default: #4caf50;      /* no format + default → auto → HEX */
  --no-format-no-default: #somevalue; /* no format + no default → hex */
}
```

### Example 3: Complete Configuration with Palette and Presets

This example shows a full `settings.json` with color palette, multiple field types, and presets:

```json
{
  "version": "1.0",
  "sections": [
    {
      "id": "colors",
      "name": "🎨 Colors",
      "description": "Theme color customization",
      "icon": "palette",
      "order": 1,
      "settings": [
        {
          "id": "text_color",
          "label": "Text Color",
          "type": "color",
          "default": "#111827",
          "description": "Main text color across the site",
          "property": "--base-color",
          "palette": "default",
          "format": "hex"
        },
        {
          "id": "primary_button_color",
          "label": "Primary Button Color",
          "type": "color",
          "default": "#1979c3",
          "description": "Color for primary action buttons",
          "property": "--button-primary-bg",
          "palette": "default",
          "format": "hex"
        },
        {
          "id": "link_color",
          "label": "Link Color",
          "type": "color",
          "default": "#1d4ed8",
          "description": "Clickable links color",
          "property": "--link-color",
          "palette": "default",
          "format": "hex"
        }
      ]
    }
  ],
  "palettes": {
    "default": {
      "id": "default",
      "label": "Default Color Palette",
      "description": "Professional color system for theme customization",
      "groups": {
        "brand": {
          "id": "brand",
          "label": "Brand Colors",
          "description": "Primary brand identity colors",
          "colors": [
            {
              "id": "primary",
              "label": "Primary",
              "description": "Main brand color for buttons and key elements",
              "css_var": "--color-brand-primary",
              "default": "#1979c3"
            },
            {
              "id": "secondary",
              "label": "Secondary",
              "description": "Supporting brand color for headers and emphasis",
              "css_var": "--color-brand-secondary",
              "default": "#111827"
            },
            {
              "id": "accent",
              "label": "Accent",
              "description": "Highlight color for links and interactive elements",
              "css_var": "--color-brand-accent",
              "default": "#1d4ed8"
            }
          ]
        },
        "neutral": {
          "id": "neutral",
          "label": "Neutral Colors",
          "description": "Grayscale palette for backgrounds, borders, and text",
          "colors": [
            {
              "id": "0",
              "label": "White",
              "description": "Pure white",
              "css_var": "--color-neutral-0",
              "default": "#ffffff"
            },
            {
              "id": "100",
              "label": "Gray 100",
              "description": "Very light gray",
              "css_var": "--color-neutral-100",
              "default": "#f3f4f6"
            },
            {
              "id": "500",
              "label": "Gray 500",
              "description": "Base gray",
              "css_var": "--color-neutral-500",
              "default": "#6b7280"
            },
            {
              "id": "900",
              "label": "Gray 900",
              "description": "Darkest gray - almost black",
              "css_var": "--color-neutral-900",
              "default": "#111827"
            }
          ]
        },
        "state": {
          "id": "state",
          "label": "State Colors",
          "description": "Semantic colors for UI feedback",
          "colors": [
            {
              "id": "success",
              "label": "Success",
              "description": "Positive actions and confirmations",
              "css_var": "--color-state-success",
              "default": "#10b981"
            },
            {
              "id": "error",
              "label": "Error",
              "description": "Errors and destructive actions",
              "css_var": "--color-state-error",
              "default": "#ef4444"
            }
          ]
        }
      }
    }
  },
  "presets": [
    {
      "id": "dark-mode",
      "name": "🌙 Dark Mode",
      "description": "Complete dark color scheme with high contrast",
      "settings": {
        "colors.text_color": "#f3f4f6",
        "colors.primary_button_color": "#3b82f6",
        "colors.link_color": "#60a5fa"
      }
    },
    {
      "id": "high-contrast",
      "name": "♿ High Contrast",
      "description": "Maximum contrast for accessibility",
      "settings": {
        "colors.text_color": "#000000",
        "colors.primary_button_color": "#dc2626",
        "colors.link_color": "#0000ff"
      }
    }
  ]
}
```

**Key Features**:
- ✅ Color fields with `palette: "default"` property
- ✅ Full palette definition with 3 groups (brand, neutral, state)
- ✅ Users can click palette colors for quick selection
- ✅ Two presets that apply multiple color changes at once
- ✅ All colors use `format: "hex"` for Breeze 3.0 compatibility

**User Experience**:
1. User opens Theme Editor
2. Clicks on "Text Color" field
3. Sees color picker + palette swatches
4. Can click any palette color (e.g., "Gray 900")
5. Field value becomes `--color-neutral-900` (palette reference)
6. Or user can enter custom HEX color

**CSS Output**:
```css
:root {
  /* Palette colors (only if modified from defaults) */
  --color-brand-primary: #1979c3;
  --color-neutral-900: #111827;
  
  /* Field values */
  --base-color: var(--color-neutral-900);  /* User selected from palette */
  --button-primary-bg: #1979c3;            /* User entered custom HEX */
  --link-color: var(--color-brand-accent); /* User selected from palette */
}
```

### Example 4: Typography Section

```json
{
  "id": "typography",
  "name": "✍️ Typography",
  "description": "Font settings",
  "icon": "text_fields",
  "order": 2,
  "settings": [
    {
      "id": "body_font",
      "label": "Body Font",
      "type": "font_picker",
      "default": "Open Sans",
      "property": "--font-family-base",
      "options": [
        {"value": "Open Sans", "label": "Open Sans"},
        {"value": "Roboto", "label": "Roboto"},
        {"value": "Lato", "label": "Lato"},
        {"value": "Georgia", "label": "Georgia (Serif)"}
      ],
      "description": "Main text font"
    },
    {
      "id": "heading_font",
      "label": "Heading Font",
      "type": "font_picker",
      "default": "Montserrat",
      "property": "--font-family-heading",
      "options": [
        {"value": "Montserrat", "label": "Montserrat"},
        {"value": "Playfair Display", "label": "Playfair Display"},
        {"value": "Raleway", "label": "Raleway"}
      ],
      "description": "Headings font (H1-H6)"
    },
    {
      "id": "base_font_size",
      "label": "Base Font Size",
      "type": "range",
      "default": "16",
      "min": "12",
      "max": "20",
      "step": "1",
      "unit": "px",
      "property": "--font-size-base",
      "description": "Body text size"
    },
    {
      "id": "line_height",
      "label": "Line Height",
      "type": "range",
      "default": "1.5",
      "min": "1",
      "max": "2",
      "step": "0.1",
      "property": "--line-height-base",
      "description": "Text line spacing"
    }
  ]
}
```

### Example 3: Layout Section with Validation

```json
{
  "id": "layout",
  "name": "📐 Layout",
  "description": "Page structure settings",
  "icon": "view_column",
  "order": 3,
  "settings": [
    {
      "id": "container_width",
      "label": "Container Width",
      "type": "select",
      "default": "1280px",
      "property": "--container-max-width",
      "options": [
        {"value": "960px", "label": "Narrow (960px)"},
        {"value": "1140px", "label": "Standard (1140px)"},
        {"value": "1280px", "label": "Wide (1280px)"},
        {"value": "1536px", "label": "Extra Wide (1536px)"},
        {"value": "100%", "label": "Full Width"}
      ],
      "description": "Maximum content width"
    },
    {
      "id": "custom_container_width",
      "label": "Custom Container Width",
      "type": "text",
      "placeholder": "e.g. 1400px",
      "pattern": "^\\d+(px|rem|em|%)$",
      "validationMessage": "Must be a valid CSS unit (e.g. 1400px, 90rem)",
      "description": "Override with custom value",
      "help_text": "Leave empty to use predefined width from dropdown above"
    },
    {
      "id": "grid_columns",
      "label": "Product Grid Columns",
      "type": "number",
      "default": "4",
      "min": "2",
      "max": "6",
      "step": "1",
      "property": "--product-grid-columns",
      "description": "Products per row (desktop)"
    },
    {
      "id": "grid_gap",
      "label": "Grid Gap",
      "type": "range",
      "default": "24",
      "min": "0",
      "max": "48",
      "step": "4",
      "unit": "px",
      "property": "--product-grid-gap",
      "description": "Space between products"
    }
  ]
}
```

### Example 4: Advanced Section

```json
{
  "id": "advanced",
  "name": "⚙️ Advanced",
  "description": "Custom code and advanced settings",
  "icon": "code",
  "order": 99,
  "settings": [
    {
      "id": "custom_css",
      "label": "Custom CSS",
      "type": "textarea",
      "default": "/* Add your custom styles here */",
      "rows": 15,
      "description": "Additional CSS code",
      "help_text": "Will be injected into theme CSS. Use with caution."
    },
    {
      "id": "enable_animations",
      "label": "Enable Animations",
      "type": "toggle",
      "default": true,
      "property": "--animations-enabled",
      "description": "Smooth transitions and effects"
    },
    {
      "id": "animation_duration",
      "label": "Animation Speed",
      "type": "range",
      "default": "300",
      "min": "0",
      "max": "1000",
      "step": "50",
      "unit": "ms",
      "property": "--animation-duration",
      "description": "How fast animations play"
    }
  ]
}
```

### Example 5: Social Links

```json
{
  "id": "social",
  "name": "🔗 Social Media",
  "description": "Social media links",
  "icon": "share",
  "order": 10,
  "settings": [
    {
      "id": "social_links",
      "label": "Social Media Profiles",
      "type": "social_links",
      "default": "{}",
      "platforms": [
        {"code": "facebook", "label": "Facebook", "icon": "f"},
        {"code": "twitter", "label": "Twitter / X", "icon": "𝕏"},
        {"code": "instagram", "label": "Instagram", "icon": "📷"},
        {"code": "linkedin", "label": "LinkedIn", "icon": "in"},
        {"code": "youtube", "label": "YouTube", "icon": "▶"},
        {"code": "pinterest", "label": "Pinterest", "icon": "P"}
      ],
      "description": "Enter your social media profile URLs",
      "help_text": "Leave empty to hide a platform. Links will appear in footer."
    },
    {
      "id": "show_social_icons",
      "label": "Show Social Icons",
      "type": "toggle",
      "default": true,
      "description": "Display social media icons in footer"
    }
  ]
}
```

---

## Troubleshooting

### Field Not Showing

**Problem**: Field doesn't appear in Theme Editor panel

**Solutions**:
1. ✅ Check `id` is unique within section
2. ✅ Verify JSON syntax is valid
3. ✅ Clear cache: `bin/magento cache:clean`
4. ✅ Check browser console for JS errors
5. ✅ Verify `type` is supported

### CSS Not Generated

**Problem**: Field value doesn't appear in CSS output

**Solutions**:
1. ✅ Add `property` field
2. ✅ Verify `property` starts with `--` for CSS custom properties
3. ✅ Check value is not empty
4. ✅ Verify value is not same as `default`
5. ✅ View CSS output: `?breeze_theme_editor=1&breeze_theme_editor_debug=1`

### Validation Errors

**Problem**: Cannot save field value

**Solutions**:
1. ✅ Check `min`/`max` for number/range
2. ✅ Verify `pattern` regex is correct (escape backslashes: `\\d`)
3. ✅ Check `required` fields are filled
4. ✅ For color: use HEX format `#RRGGBB`
5. ✅ Check browser console for detailed error

### Inheritance Not Working

**Problem**: Parent theme fields not showing

**Solutions**:
1. ✅ Verify `extends` value matches parent theme path
2. ✅ Check parent theme has `etc/theme_editor/settings.json`
3. ✅ Clear cache after changing `extends`
4. ✅ Verify parent theme is registered in Magento

### Performance Issues

**Problem**: Panel loads slowly with many fields

**Solutions**:
1. ✅ Split large sections (max 20 fields per section)
2. ✅ Use `order` to organize sections logically
3. ✅ Avoid unnecessary `help_text` (loads on demand)
4. ✅ Optimize field types (use `select` instead of `text` for predefined values)

---

## FAQ

### Can I add custom field types?

**No** - currently only built-in types are supported. Planned for v2.0.

### Can I use media files (images)?

**Not yet** - `image_upload` field type is planned (Task 1.1.3).

### How do I test my configuration?

1. Create `settings.json`
2. Clear cache: `bin/magento cache:clean`
3. Open frontend with `?breeze_theme_editor=1`
4. Check panel on right side

### Where are values stored?

- Database table: `breeze_theme_editor_value`
- Per theme + per store + per status (draft/published)
- Accessible via GraphQL

### Can I export/import settings?

**Yes** - via GraphQL mutations:
- `breezeThemeEditorExportSettings`
- `breezeThemeEditorImportSettings`

### How do I create presets?

Add `presets` array to your `settings.json`:

```json
{
  "version": "1.0",
  "sections": [...],
  "presets": [
    {
      "id": "dark-mode",
      "name": "🌙 Dark Mode",
      "description": "Dark color scheme for night browsing",
      "settings": {
        "colors.primary_color": "#3b82f6",
        "colors.text_color": "rgb(243, 244, 246)",
        "colors.background": "#0d0d0d"
      }
    }
  ]
}
```

See [Section 16: Presets](#16-presets---pre-configured-templates) for complete documentation.

---

## Version History

- **1.4** (2026-03-31) - Conditional Field Visibility
  - Added `dependsOn` field property — show/hide fields based on another field's value
  - Supports `EQUALS` and `NOT_EQUALS` operators
  - Cross-section dependencies supported (controlling field may be in any section)
  - Hidden fields are excluded from save mutations
  - Added Section 6: Conditional Field Visibility (dependsOn)

- **1.3** (2026-03-23) - PHP Settings Reader
  - Added `$breezeThemeEditor` helper — automatically injected into all frontend `.phtml` templates
  - `get('section/setting')` — returns published value with store/theme scope, falls back to `settings.json` default
  - `is('section/setting', 'value')` — strict equality shorthand
  - Added Section 10: Reading Settings in PHP Templates (API, PHP-only settings, examples, block caching)

- **1.2** (2026-02-24) - Selector + Property
  - Renamed `css_var` → `property` (backward compatible; `css_var` still accepted)
  - `property` now supports both CSS custom properties (`--var`) and standard properties (`max-width`)
  - Added section-level and field-level `selector` support with inheritance hierarchy
  - Updated Section Structure, Field Properties, Common Issues, and Troubleshooting sections

- **1.1** (2026-01-13) - Presets Feature
  - Added Section 16: Presets documentation
  - 3 new field types: IMAGE_UPLOAD, SPACING, REPEATER (v1.0.5)
  - Preset UI implementation
  - Updated FAQ with preset examples
  
- **1.0** (2026-01-09) - Initial documentation
  - 16 field types documented
  - Validation rules
  - Theme inheritance
  - Examples and best practices

---

## Support

- **Issues**: GitHub Issues
- **Documentation**: This file
- **GraphQL API**: See `etc/schema.graphqls`

---

**Happy theming! 🎨**
