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

![Cookie consents section](/images/m2/gdpr/configuration/cookie-consents.png?v=1)

Option          | Description
----------------|------------
Enabled         | Allows to enable/disable cookie bar and cookie settings page.
Lifetime        | How many days should the cookie store information about visitor's cookie settings.
**Cookie Bar**  |
Cookie Wall Mode| Allows to enable/disable site overlay until client will accept the cookie consent.
Display Mode    | Select display mode for cookie bar. See details below the table.
Content         | HTML to use in cookie bar.
**Cookie Settings Page** |
URL             | URL to [cookie settings page](/m2/extensions/gdpr/cookie-settings/)
Content         | HTML code with a intro text for cookie settings page.

#### Cookie bar display modes

There are two display modes available to choose:

 -  Minimalistic - Horizontal bar with short description, link to cookies settings
    page, and button to allow all cookies.
 -  Full - Wide vertical bar with short description and fully functional cookie
    settings block, which allows granular cookie configuration.

Minimalistic | Full
-------------|---------------
![Minimalistic](/images/m2/gdpr/frontend/small/cookie-bar-mini.png) | ![Full](/images/m2/gdpr/frontend/small/cookie-bar-full.png)

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
