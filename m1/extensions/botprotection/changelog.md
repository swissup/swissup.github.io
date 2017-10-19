---
layout: default
title: Changelog
description: Bot Protection changelog
keywords: Bot Protection changelog
category: Bot Protection
---

# Changelog

### Version 1.0.9

 -  Prevent new lines in nested elements, when modifying DOM structure.
 -  Escape closing tags in inline js when parse html.
 -  Do not save parsed html if nothing was changed.
 -  Fix Warning: Missing argument 1 for _redrect().
 -  PHP code cleanup to pass MEQP validation.
 -  Fix sorting by IP in admin grids.
 -  Improve compatibility with third-party extensions - Firebear_CloudFlare.

### Version 1.0.7

 *  Added TM_AMP compatibility

### Version 1.0.6

 *  Configuration extended with 'Ignore URLs' option for Protected Forms

### Version 1.0.5

**Changes / fixes:**

 *  Solved warning about inet_pton (IPv6 compatibility)
 *  Fixed issue with 3D Secure on checkout when protected forms enabled
 *  Respect disabled bot detection by place honeypots option

### Version 1.0.3

**New:**

 *  Catch bots with honeypots in forms
 *  Mass actions interfaces in backend for whitelist, blacklist and suspicious
    list (change status and delete)

**Changes / fixes:**

 *  [JayBizzle/Crawler-Detect](https://github.com/JayBizzle/Crawler-Detect)
    lib updated

...


