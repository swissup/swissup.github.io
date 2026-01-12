---
layout: default
title: Theme Developer Guide
description: Complete guide for adding Breeze Theme Editor support to your Magento 2 theme
keywords: breeze theme editor, theme development, settings.json, field types, css variables
category: Breeze Theme Editor
---

# Breeze Theme Editor - Theme Developer Guide

**Version**: 1.0  
**Last Updated**: 2026-01-09

This guide explains how to add Theme Editor support to your Breeze theme.

---

## Table of Contents

1. [Quick Start](#quick-start)
2. [File Structure](#file-structure)
3. [Configuration Format](#configuration-format)
4. [Field Types Reference](#field-types-reference)
5. [Field Properties](#field-properties)
6. [Validation Rules](#validation-rules)
7. [Theme Inheritance](#theme-inheritance)
8. [Best Practices](#best-practices)
9. [Examples](#examples)
10. [Troubleshooting](#troubleshooting)

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
          "css_var": "--primary-color",
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
  "icon": "palette",             // Optional: Material icon name
  "order": 1,                    // Optional: Display order (default: 999)
  "settings": []                 // Required: Array of fields
}
```

### Material Icons

Common icons: `palette`, `format_paint`, `text_fields`, `view_column`, `image`, `settings`, `code`, `link`

Full list: https://fonts.google.com/icons

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
  "css_var": "--primary-color",
  "description": "Main brand color",
  "help_text": "Used for buttons, links, and accents"
}
```

**Features**:
- Visual color picker
- HEX input (#RRGGBB or #RGB)
- RGB format support
- Automatic RGB conversion for CSS variables

**CSS Output**:
```css
:root {
  --primary-color: 25, 121, 195;  /* Converted to RGB */
}
```

**Notes**:
- HEX values are converted to RGB format (Breeze standard)
- Original HEX value added as CSS comment
- Supports both `#FF0000` and `#F00` formats

---

### 2. TEXT - Single Line Input

**Purpose**: Short text values (widths, margins, custom values)

```json
{
  "id": "container_width",
  "label": "Container Width",
  "type": "text",
  "default": "1280px",
  "css_var": "--container-width",
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
  "css_var": "--grid-columns",
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
  "css_var": "--text-opacity",
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
  "css_var": "--layout-type",
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
  "css_var": "--header-sticky",
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
  "css_var": "--font-family-base",
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

---

### 10. COLOR_SCHEME - Scheme Selector

**Purpose**: Predefined color schemes (Light/Dark/Auto)

```json
{
  "id": "color_mode",
  "label": "Color Scheme",
  "type": "color_scheme",
  "default": "auto",
  "css_var": "--color-scheme",
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
  "css_var": "--logo-url",
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
  "css_var": "--container-padding",
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
  "css_var": "--css-variable",  // Optional: CSS custom property name
  "description": "Short text",   // Optional: Help text below label
  "help_text": "Detailed help",  // Optional: Tooltip on (i) icon
  "placeholder": "Hint...",      // Optional: Input placeholder
  "required": false,             // Optional: Required field (default: false)
  "important": false             // Optional: Add !important to CSS (default: false)
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

#### `css_var` (string, optional)
- CSS custom property name
- Must start with `--`
- Example: `--primary-color`, `--font-size-base`
- If omitted, field value is stored but NOT output to CSS

**CSS Output**:
```css
:root {
  --primary-color: 25, 121, 195;
}
```

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
          "css_var": "--primary-color"
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
          "css_var": "--secondary-color"
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
- Child CANNOT override/remove parent fields

### Inheritance Rules

1. **Sections**: Merged by `id`
   - Parent sections are included
   - Child sections are added
   - If `id` matches, settings are merged

2. **Settings**: Merged by `id`
   - Parent settings are included
   - Child settings are added
   - If `id` matches, child value is used (override)

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
  "css_var": "--primary"  // ✅ Breeze standard
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
  "css_var": "--button-bg-hex"  // ❌ Not Breeze style
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
- Missing `css_var` → field stores but doesn't output CSS
- Wrong `default` type → validation errors
- Duplicate `id` → only last field shows
- Missing `extends` → inheritance doesn't work

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
      "css_var": "--primary",
      "description": "Main brand color",
      "help_text": "Used for buttons, links, and accents. Supports HEX format (#FF0000)"
    },
    {
      "id": "secondary_color",
      "label": "Secondary Color",
      "type": "color",
      "default": "#6c757d",
      "css_var": "--secondary",
      "description": "Secondary actions and elements"
    },
    {
      "id": "success_color",
      "label": "Success Color",
      "type": "color",
      "default": "#28a745",
      "css_var": "--success",
      "description": "Success messages and states"
    },
    {
      "id": "error_color",
      "label": "Error Color",
      "type": "color",
      "default": "#dc3545",
      "css_var": "--error",
      "description": "Error messages and validation"
    },
    {
      "id": "text_color",
      "label": "Text Color",
      "type": "color",
      "default": "#212529",
      "css_var": "--text-color",
      "description": "Main body text color"
    },
    {
      "id": "link_color",
      "label": "Link Color",
      "type": "color",
      "default": "#007bff",
      "css_var": "--link-color",
      "description": "Hyperlink color"
    }
  ]
}
```

### Example 2: Typography Section

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
      "css_var": "--font-family-base",
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
      "css_var": "--font-family-heading",
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
      "css_var": "--font-size-base",
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
      "css_var": "--line-height-base",
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
      "css_var": "--container-max-width",
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
      "css_var": "--product-grid-columns",
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
      "css_var": "--product-grid-gap",
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
      "css_var": "--animations-enabled",
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
      "css_var": "--animation-duration",
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
1. ✅ Add `css_var` property
2. ✅ Verify `css_var` starts with `--`
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

Create JSON files in `etc/theme_editor/presets/`:

```json
{
  "name": "Dark Mode",
  "description": "Dark color scheme",
  "values": {
    "colors.primary_color": "#3b82f6",
    "colors.text_color": "#f3f4f6",
    "colors.bg_color": "#1f2937"
  }
}
```

---

## Version History

- **1.0** (2026-01-09) - Initial documentation
  - 12 field types documented
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
