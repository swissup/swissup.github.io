---
layout: default
title: GDPR Cookie Settings Page
description: Cookie settings page
category: GDPR
---

# Cookie Settings

Normally, cookie settings page is available at _yoursite.com/cookie-settings_.
However, site administrator can change it via
[module configuration](/m2/extensions/gdpr/configuration/#cookie-consent-section).

Visitor can view the list of cookies that the site may create and decide if he wants
to allow to use these cookies or not. Additionally, if
[Google Consent Mode is enabled](/m2/extensions/gdpr/configuration/#cookie-consent-section),
we will notify Google about user preferences:

Google Consent          | Granted if
------------------------|------------------------------------
ads_data_redaction      | Marketing cookies are not allowed
ad_storage              | Marketing cookies are allowed
ad_user_data            | Marketing cookies are allowed
ad_personalization      | Marketing cookies are allowed
analytics_storage       | Analytics cookies are allowed
functionality_storage   | Preferences cookies are allowed
personalization_storage | Preferences cookies are allowed
security_storage        | Always granted

![Cookie settings](/images/m2/gdpr/frontend/cookie-settings.png?v=1){:width=1226 height=748}

#### Next up
{:.no_toc}

 -  [Back to Main Page](/m2/extensions/gdpr/)
