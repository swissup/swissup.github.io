---
layout: default
title: Show content for specific devices only
description: How to show navigationpro content for specific device only
keywords: navigationpro, exceptions, per-device configuration
category: Navigationpro
---

# Show content for specific devices only

Sometimes it's very usefull to show [Dropdown column][dropdown_columns]
or [Sibling][siblings] for specific device only.

This can be achived with [Dropdown][dropdown_status_exceptions] or
[Siblings][sibling_status_exceptions] status exeptions field and negative
look-ahead regex statement.

### Usage Examples

 1. Enable your dropdown or sibling content
 2. Fill the status exception field with negative look-ahead statement that
    matches your needs.

    **Regex Examples:**

    Matched Expression | Status | Description
    -------------------|--------|------------
    `^(?!.*(mobile|Mobile|iphone))` | Disabled | Change status to `Disabled` for all non-mobile User Agents
    `^(?!.*(iPad))` | Disabled | Disable menu for all devices except Ipad

#### Next Up

 -  [Dropdown columns][dropdown_columns]
 -  [Siblings][siblings]

[dropdown_columns]: /m1/extensions/navigationpro/dropdown-columns/
[dropdown_status_exceptions]: /m1/extensions/navigationpro/dropdown-columns/#status-exceptions
[siblings]: /m1/extensions/navigationpro/siblings/
[sibling_status_exceptions]: /m1/extensions/navigationpro/siblings/#status-exceptions
