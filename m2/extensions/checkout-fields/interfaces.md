---
layout: default
title: Admin Interfaces
description: magento 2 checkout fields module documentation
keywords: magento 2 checkout fields admin interfaces
category: Checkout Fields
---

### Checkout Fields Grid

You can add new or modify existing checkout fields
under `Swissup > Checkout > Checkout Fields` menu.

![Grid](/images/m2/checkout-fields/fields-grid.png)

### Checkout Field Edit Form

Field edit form consists of two tabs: `Properties` and `Manage Labels`.

 -  `Properties` tab contains all main field settings.
 -  `Manage Labels` tab allows to assign field label for every store view (e.g. every language).

![Form](/images/m2/checkout-fields/fields-edit-form-new.png)

Option                             | Description
-----------------------------------|------------------------------------------------------------
Default Label                      | Field label, which will be used if there is no store specific label set
Store View                         | Store View, where field will be displayed for customer during checkout
Catalog Input Type for Store Owner | Available types are: Text Field, Text Area, Date, Dropdown, Yes/No Dropdown and Multiple Select Dropdown
Values Required                    | Select if field is required or optional
Manage Options / Values            | Allows to specify values for fields with types dropdown and multiple select


#### Advanced Field Properties

![Advanced Field Properties](/images/m2/checkout-fields/fields-edit-form-advanced.png)

Option                             | Description
-----------------------------------|------------------------------------------------------------
Enabled                            | Allows to disable field
Add To Column Options              | Show field in orders grid `Sales > Orders`
Attribute Code                     | Unique field code. Generated automatically from default label if leaved empty
Sort Order                         | Allows to set field order on frontend
Notice                             | An explanation for the customer displayed under the field on the checkout page
Tooltip                            | The short description displayed in the tooltip for the field
Placeholder                        | The short hint displayed in the text fields before the user enters a value
Default Value                      | Field default value
