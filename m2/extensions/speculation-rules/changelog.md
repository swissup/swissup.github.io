---
layout: default
title: Speculation Rules Changelog
description: Speculation Rules changelog
keywords: speculation rules changelog, speculation-rules updates
category: Speculation Rules
---

# Changelog

### Version 1.0.6

> October 20, 2026

 - Security: Medium — prerender exclusions now apply on stores that use a store code in URLs or a base URL in a subfolder.
 - Security: Medium — the "Not you?" header link is no longer prerendered, so a returning customer's saved cart is not cleared.
 - Security: Medium — the language switcher is no longer prerendered, so the store view is not changed unintentionally.
 - Security: Low — the storefront script now reuses the page's existing CSP nonce instead of adding a second one.
 - Security: Low — a saved `Speculation Rules` value can now be restored to the module default from the admin.

### Version 1.0.5

> October 8, 2026

 - Security: Medium — rules configuration is now validated and safely output on the storefront.
 - Security: Low — default prerender exclusions now match the intended pages.

### Version 1.0.4

> February 17, 2026

 - Excluded 'logout' from prerender. Recommended.

### Version 1.0.3

> August 1, 2024

 - Fix objectManager is null by default.

### Version 1.0.2

> August 1, 2024

 - Fix 'Impossible to process constructor argument CspNonceProvider'.

### Version 1.0.1

> July 30, 2024

 - Fix 'version mismatch in composer.json'.
 - Fix CSP error.
 - Update README.

### Version 1.0.0

> May 28, 2024

 - Initial release


##### See also

Great! Now you might want to see previous:

 - [Installation](/m2/extensions/speculation-rules/installation/)
