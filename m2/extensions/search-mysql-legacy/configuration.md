---
layout: default
title: Legacy Mysql Search Usage
description: How to setup email package
keywords: "Legacy Mysql Search setup usage guide"
category: Legacy Mysql Search
---

# Legacy Mysql Search Setup

`Store → Configuration` > `Catalog → Catalog → Catalog Search`

### Catalog Search

![Catalog Search Section](/images/m2/search-mysql-legacy/configuration/catalogsearch.png)

Option         | Description
---------------|----------------------------------
Search Engine  | Select Legacy MySQL (Deprecated)

### Multi-word Search Logic

**New in version 1.1.12**

Control how multi-word searches are interpreted.

Option | Description
-------|------------
**OR Mode (Default)** | Original Magento 2.3 behavior. Search "red bag" finds products containing "red" OR "bag". More results, less precise.
**AND Mode (Recommended)** | Elasticsearch-like behavior. Search "red bag" finds products containing "red" AND "bag". Fewer results, more relevant.

**Note:** Clear cache after changing this setting:

```bash
bin/magento cache:clean config
```

**Examples:**

Search Query | OR Mode | AND Mode
-------------|---------|----------
"red bag" | Products with "red" OR "bag" | Products with BOTH "red" AND "bag"
"leather wallet" | Products with "leather" OR "wallet" | Products with BOTH "leather" AND "wallet"
"blue" | Products with "blue" | Products with "blue" (same result)

**Future:** Based on community feedback, AND mode may become the default in version 2.0.


##### See also

Great! Now you might want to see previous:

- [Installation](/m2/extensions/search-mysql-legacy/installation/)
- [Changelog](/m2/extensions/search-mysql-legacy/changelog/)
