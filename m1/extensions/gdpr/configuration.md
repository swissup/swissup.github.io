---
layout: default
title: GDPR configuration
description: GDPR configuration
keywords: gdpr configuration
category: GDPR
---

# Configuration

You can configure extension at `System > Configuration > Templates-Master > GDPR`

![Configuration](/images/m1/gdpr/backend/configuration.png)

### General

Here you can enable the extension

### Client's Requests

##### Deletion Requests

Option                      | Description
----------------------------|--------------------------------------------------------------
Anonymized data placeholder | String to replace personal client data (anonymous by default)
Automate request processing | Process confirmed client's requests automatically by [cron][cron]
Days to wait                | Number of days to wait before process request by [cron][cron]

### Consents

Next sections allow to configure consent checkboxes to show on various forms.

Option                      | Description
----------------------------|--------------------------------------------------------------
Enabled                     | Enable consent checkbox
Sort Order                  | Consent sort order
Title                       | Checkbox label text. HTML and Magento’s WYSIWYG directives are supported
Show in Forms               | Select form(s) where to display consent checkbox

[cron]: https://docs.magento.com/m1/ce/user_guide/system-operations/cron.html
