---
layout: default
title: Breeze Theme Editor
description: Visual theme customization tool for Magento 2 with Breeze - live preview, draft/publish workflow, 12+ field types
keywords: breeze theme editor, magento 2 theme customization, visual theme editor, live preview, css variables
category: Breeze Theme Editor
---

# Breeze Theme Editor

Visual theme customization tool for Magento 2 Breeze themes.

## Features

- **Live Preview**: See changes instantly without page reload
- **Draft/Publish Workflow**: Test changes before making them live
- **15+ Field Types**: Colors, fonts, toggles, images, spacing, repeaters, and more
- **Theme Inheritance**: Extend parent theme configurations
- **Version Control**: Publication history with rollback
- **Multi-Store Support**: Different settings per store view
- **Import/Export**: Share configurations between stores
- **Presets**: Quick theme switching (Light/Dark modes)
- **Secure Access**: Token-based authentication with 3-hour sessions

## Contents

 1. [Installation](installation/)
 2. [Configuration](configuration/)
 3. [Theme Developer Guide](theme-developer-guide/)
 4. [User Guide](user-guide/)
 5. [GraphQL API](graphql-api/)
 6. [Changelog](changelog/)

## Quick Start

### For Store Administrators

1. **Enable Theme Editor in Admin Configuration**:
   - Go to **Stores > Configuration > Swissup > Breeze Theme Editor**
   - Select **Yes** to enable
   - Save configuration

2. **Access Theme Editor**:
   - In the same admin config page, you'll see a button **"Open Frontend in Theme Editor Mode"**
   - Click it, or copy the URL shown below the button (includes access token)
   - The URL format: `https://your-store.com/?breeze_theme_editor_access_token=YOUR_TOKEN`

3. **Start Editing**:
   - A theme editor panel will appear on the right side
   - Make changes, preview them live, and publish when ready

> **Note**: Access tokens are valid for 3 hours and are regenerated automatically.

### For Theme Developers

Add `etc/theme_editor/settings.json` to your theme to enable customization:

```json
{
  "version": "1.0",
  "sections": [
    {
      "id": "colors",
      "name": "Colors",
      "icon": "palette",
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

See [Theme Developer Guide](theme-developer-guide/) for complete documentation.

## Requirements

- Magento 2.4.x
- PHP 8.1+
- Breeze theme

## Installation

```bash
composer require swissup/module-breeze-theme-editor
bin/magento module:enable Swissup_BreezeThemeEditor
bin/magento setup:upgrade
bin/magento cache:clean
```

## Field Types

The Theme Editor supports 15 field types:

| Type | Description | Example Use |
|------|-------------|-------------|
| **color** | Color picker with HEX/RGB | Brand colors, text colors |
| **text** | Single line input | Container width, custom values |
| **textarea** | Multi-line input | Custom CSS code |
| **number** | Numeric input with min/max | Grid columns, font size |
| **range** | Slider control | Opacity, animation speed |
| **select** | Dropdown menu | Layout type, predefined options |
| **toggle** | On/Off switch | Enable/disable features |
| **code** | Code editor | Custom CSS/JS |
| **font_picker** | Font selector | Typography settings |
| **color_scheme** | Light/Dark themes | Color mode switcher |
| **social_links** | Social media URLs | Footer social icons |
| **icon_set_picker** | Icon library selector | Choose icon set |
| **image_upload** | Image upload with URL | Logo, background images |
| **spacing** | 4-sided spacing control | Padding, margin (top/right/bottom/left) |
| **repeater** | Dynamic list of items | Slideshows, feature lists |

See [Theme Developer Guide](theme-developer-guide/) for detailed documentation.

## Documentation

### Theme Developers

- [Theme Developer Guide](theme-developer-guide/) - **Complete guide for adding Theme Editor support**
  - Quick start
  - All field types with examples
  - Validation rules
  - Theme inheritance
  - Best practices

### Store Administrators

- [Configuration](configuration/) - Admin panel settings
- [User Guide](user-guide/) - How to use Theme Editor

### Developers

- [GraphQL API](graphql-api/) - API reference
- [Installation](installation/) - Installation instructions
- [Changelog](changelog/) - Version history

## Support

- **Documentation**: This site
- **Issues**: [GitHub Issues](https://github.com/breezefront/module-breeze-theme-editor/issues)
- **Source Code**: [GitHub Repository](https://github.com/breezefront/module-breeze-theme-editor)
