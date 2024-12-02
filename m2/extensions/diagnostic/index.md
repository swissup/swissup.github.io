---
layout: default
title: Diagnostic
description: >
    Magento2 extension to check system environment for faster problems analyze
keywords: >
    magento2, diacnostic, fix, check, virtual
category: Diagnostic
---

# Diagnostic

Magento 2 extension that collects system information and performs environment checks to quickly identify and resolve potential issues.

## Features

- Comprehensive system analysis
- Environment parameter validation  
- Database configuration verification
- Command line diagnostic tools

## Getting overall **Magento2** info:
 
```bash
bin/magento swissup:info
```

Output:

![General output](/images/diagnostic/general.png){:class="noborder"}

### Main provided info 

#### Environment parameters

  * PHP version and CLI path
  * Composer version and path
  * Nginx user

#### Database access data
  * Database host
  * Database name
  * Database user
  * Database password
  * Generated Ready-to-connect database CLI command

#### Magento 2 configuration
  * Magento version
  * Magento backend URL
  * Check **Magento** and **Swissup** folders in `app/code` and `app/code` folders are not empty (for fast investigating if any default files are overwritten by user).

#### Magento2 "theme" table data

  * Checking the Type column value to inspect if there's no **virtual** theme issues.
  * Parent ID column value to check theme inheritance.

## Fixing "virtual" theme issues from CLI:

```bash
bin/magento swissup:info:virtualfix
bin/magento cache:clean
```


### Contents

1. [Installation](installation/)
2. [Changelog](changelog/)
