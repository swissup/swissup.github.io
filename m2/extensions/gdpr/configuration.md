---
layout: default
title: GDPR Configuration
description: GDPR Configuration
category: GDPR
---

# Configuration

Module's configuration is located at _Stores > Configuration > Swissup > GDPR_ page.

* TOC
{:toc}

### General section

![General section](/images/m2/gdpr/configuration/general.png)

Option      | Description
------------|------------
Enabled     | Allows to enable/disable GDPR per store view

### Cookie Consent section

![Cookie consents section](/images/m2/gdpr/configuration/cookie-consents.png?v=3){:width="936" height="1053"}

Option          | Description
----------------|------------
Enabled         | Allows to enable/disable cookie bar and cookie settings page.
Lifetime        | How many days should the cookie store information about visitor's cookie settings.
Integrate with Google Consent Mode | Enable/Disable integration with [Google Consent Mode v2](https://developers.google.com/tag-platform/security/guides/consent?consentmode=advanced). Integration is [fully automated](/m2/extensions/gdpr/cookie-settings/) and doens't require any additional actions.
Google Consent Defaults | Default values to use. They are used until the client accept the consent.
**Cookie Bar**  |
Cookie Wall Mode| Allows to enable/disable site overlay until client will accept the cookie consent.
Display Mode    | Select display mode for cookie bar. See details below the table.
Content         | HTML to use in cookie bar.
**Cookie Settings Page** |
URL             | URL to [cookie settings page](/m2/extensions/gdpr/cookie-settings/)
Content         | HTML code with a intro text for cookie settings page.

#### Google consent defaults

While we use `denied` for default values, you can change them to `granted`:

```json
[
    {
        "ad_storage": "granted",
        "ad_user_data": "granted",
        "ad_personalization": "granted",
        "analytics_storage": "granted"
    }
]
```

Additionally, you can set region-specific behavior:

```json
[
    {
        "ad_storage": "granted",
        "ad_user_data": "granted",
        "ad_personalization": "granted",
        "analytics_storage": "granted"
    }, {
        "ad_storage": "denied",
        "ad_user_data": "denied",
        "ad_personalization": "denied",
        "analytics_storage": "denied",
        "region": ["AT", "BE", "BG", "CY", "CZ", "DE", "DK", "EE", "EL", "ES", "FI", "FR", "HR", "HU", "IE", "IT", "LT", "LU", "LV", "MT", "NL", "PL", "PT", "RO", "SE", "SI", "SK"]
    }
]
```

Open [Google Documentation](https://developers.google.com/tag-platform/security/guides/consent?consentmode=advanced)
to get more info.

#### Cookie bar display modes

There are two display modes available to choose:

 -  Minimalistic - Horizontal bar with short description, deny button, accept selection button,
    and allow all button.
 -  Full - Wide vertical bar with short description and fully functional cookie
    settings block, which allows granular cookie configuration.

Minimalistic | Full
-------------|---------------
![Minimalistic](/images/m2/gdpr/frontend/small/cookie-bar-mini.png){:width="350" height="250"} | ![Full](/images/m2/gdpr/frontend/small/cookie-bar-full.png){:width="350" height="250"}

### Personal Data Consents section

![Consents section](/images/m2/gdpr/configuration/consents.png)

This section consists from various consents that have the same configurable options:

Option          | Description
----------------|------------
Enabled         | Allows to enable/disable consent per store view
Sort Order      | Allows to sort multiple consents in single form
Title           | Consent text. HTML and Magento's WYSIWYG directives are supported.
Show in Forms   | Allows to show consent in selected forms

### Client's requests section

![Client request section](/images/m2/gdpr/configuration/client-request.png)

#### Deletion requests

Option                      | Description
----------------------------|------------
Anonymized data placeholder | Placeholder to use for anonymized personal data
Automate request processing | Allows to enable/disable automatic request processing
Days to Wait                | When automation is enabled, process requests created more than X days ago

#### Next up
{:.no_toc}

 -  [Back to Main Page](/m2/extensions/gdpr/)
