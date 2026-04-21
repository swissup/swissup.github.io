---
layout: default
title: Breeze Theme Editor — User Guide
description: How to use Breeze Theme Editor to customize your Magento 2 theme
category: Breeze Theme Editor
---

# User Guide

## Opening the Theme Editor

1. Go to **Stores > Configuration > Swissup > Breeze Theme Editor**
2. Set **Enable Theme Editor** to **Yes** and save
3. Click **"Open Frontend in Theme Editor Mode"**

The storefront opens with the editor panel on the right side.

> The URL contains an access token valid for **3 hours**. You can copy and share this URL — no admin login is required to use it.

## Editor Panel Overview

The panel is divided into **sections** (e.g., Colors, Typography, Layout). Each section contains settings specific to that area of the theme.

## Selecting a Scope

At the top of the panel you can select the scope for your changes:

- **Default** — applies to all stores unless overridden
- **Website** — applies to a specific website
- **Store View** — applies to a single store view

Changes made in a narrower scope override the wider scope (same as Magento configuration inheritance).

## Editing Settings

1. Expand a section in the panel
2. Change a value — the preview updates **instantly** (no page reload)
3. Repeat for other sections as needed

## Saving as Draft

Click **Save** to store your changes as a draft. Draft changes are **not visible** to store visitors until published.

You can return later, continue editing, and publish when ready.

## Publishing

Click **Publish** to make your draft changes live. You can add a **publication title** to identify this version in the history.

> Only published values are visible to store visitors.

## Rollback

In the **Publications** panel you can see the history of all published versions. Click **Rollback** next to any version to restore it.

## Import / Export

- **Export** — download current settings as a JSON file
- **Import** — upload a previously exported JSON file to apply those settings

This is useful for copying settings between store views or environments.

## Presets

Some themes provide **presets** — predefined sets of values (e.g., a "Dark Mode" preset). Select a preset from the panel to apply it as a starting point, then customize further.

##### See also

- [Configuration](../configuration/) — enabling the editor
- [Theme Developer Guide](../theme-developer-guide/) — adding editor support to a custom theme
- [Back to docs homepage](../)
