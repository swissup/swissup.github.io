---
layout: default
title: Breeze Theme Editor
description: Visual theme customization tool for Magento 2 with Breeze
category: Breeze
---

# Breeze Theme Editor

Visual theme customization tool for Magento 2 Breeze themes.

## Features

- **Live Preview**: See changes instantly without page reload
- **Draft/Publish Workflow**: Test changes before making them live
- **12+ Field Types**: Colors, fonts, toggles, ranges, and more
- **Theme Inheritance**: Extend parent theme configurations
- **Version Control**: Publication history with rollback
- **Multi-Store Support**: Different settings per store view
- **Import/Export**: Share configurations between stores
- **Presets**: Quick theme switching (Light/Dark modes)

## Documentation

- [Installation](installation/)
- [Theme Developer Guide](theme-developer-guide/) - **How to add Theme Editor support to your theme**
- [User Guide](user-guide/)
- [GraphQL API](graphql-api/)
- [Changelog](changelog/)

## Quick Links

- [GitHub Repository](https://github.com/breezefront/module-breeze-theme-editor)
- [Report Issue](https://github.com/breezefront/module-breeze-theme-editor/issues)

## Requirements

- Magento 2.4.x
- PHP 8.1+
- Breeze theme

## Quick Start

### 1. Installation

```bash
composer require swissup/module-breeze-theme-editor
bin/magento module:enable Swissup_BreezeThemeEditor
bin/magento setup:upgrade
```

### 2. Access Theme Editor

Open your store frontend with `?breeze_theme_editor=1` parameter:

```
https://your-store.com/?breeze_theme_editor=1
```

### 3. For Theme Developers

Add `etc/theme_editor/settings.json` to your theme:

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
          "label": "Primary Color",
          "type": "color",
          "default": "#1979c3",
          "css_var": "--primary-color"
        }
      ]
    }
  ]
}
```

See [Theme Developer Guide](theme-developer-guide/) for details.

## Support

- **Documentation**: This site
- **Issues**: [GitHub Issues](https://github.com/breezefront/module-breeze-theme-editor/issues)
- **Community**: [Magento Community](https://community.magento.com/)
