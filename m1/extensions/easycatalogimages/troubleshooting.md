---
layout: default
title: Troubleshooting
description: Solving problems related to Easy Catalog Images
keywords: "easycatalogimages, category, subcategory, troubleshooting"
category: EasyCatalogImages
---

# Troubleshooting

### Error on fronend after installation

If on category pages at store frontend you get error message
`There has been an error processing your request`. You have to check your store
log for follow record:

```
exception 'PDOException' with message 'SQLSTATE[42S22]: Column not found: 1054 Unknown column 'main_table.thumbnail'
```

If you can find such record, then it means module installation went wrong.
You have to force EasyCatalogImages module execute install instructions one
more time. Here is few steps how to do this:

 1. Go to Magento database.
 2. Find table `core_resource`.
 3. Delete record where field `code` = `tm_easycatalogimg_setup`.
 4. Go Magento Admin and flush Magento Cache.
 5. Go to 'Manage Categories' in Magento Admin, select any category and check
    tab 'General Information'. It has to have field 'Thumbnail Image'.
