---
layout: default
title: Breeze AI
description: AI content generation and translation for Magento 2 — products, categories and CMS pages, powered by OpenAI, Claude or Gemini
keywords: magento 2 ai, ai content generation, ai translation, breeze ai, openai, claude, gemini
category: Breeze AI
---

# Breeze AI

AI-powered content generation and translation for Magento 2.

Breeze AI adds a generate/translate assistant to the product, category and CMS
page edit pages, and a bulk action to process many entities at once. It works
with OpenAI, Anthropic Claude and Google Gemini — you bring your own API key.

## Features

- **Generate content** from reusable prompt templates (name, description, short
  description, meta fields, …) right on the edit page.
- **Translate content** into any store view's language, preserving HTML.
- **Bulk action** — generate or translate across many products/categories in the
  background via the message queue.
- **Bulk translate covers more than text:**
  - store-scoped custom text/textarea attributes (discovered automatically)
  - image alt-text labels (base / small / thumbnail)
  - per-gallery-image labels
  - video title and description
  - customizable option titles and value titles
  - translate to one store view or **all store views** at once
- **Multiple providers** — OpenAI, Claude, Gemini; configure one or more AI models.
- **Prompt management** — create and assign your own prompt templates per field.
- **AI discovery** — exposes `llms.txt` and `/.well-known/ai-plugin.json` so AI
  agents can discover the store's catalog API.

## Contents

 1. [Installation](installation/)
 2. [Changelog](https://github.com/breezefront/module-breeze-ai/releases)

## Quick Start

1. **Install** the module (see [Installation](installation/)).
2. **Add an AI model:** go to **Swissup > Breeze AI > Models > Add New**, pick a
   provider (OpenAI / Claude / Gemini), paste your API key, mark it as default.
3. **Enable** the module under **Stores > Configuration > Swissup > Breeze AI**.
4. **Generate / translate:**
   - On a product, category or CMS page edit page, use the **AI Generate** /
     **AI Translate** buttons next to supported fields.
   - For many entities at once, go to **Swissup > Breeze AI > AI Bulk Action**,
     choose the entity type, task, store view and fields, then select items and run.

## Requirements

- Magento 2.4.x
- PHP 7.4, 8.0, 8.1 or 8.2
- `swissup/module-core`
- An API key for at least one provider (OpenAI, Claude or Gemini)

## Support

- **Issues**: [GitHub Issues](https://github.com/breezefront/module-breeze-ai/issues)
- **Source Code**: [GitHub Repository](https://github.com/breezefront/module-breeze-ai)
