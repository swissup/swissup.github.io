---
layout: default
title: Breeze Layout
description: Breeze layout update xml instructions
category: Breeze
---

# Breeze layout

* TOC
{:toc}

## Layout update files

In order to make it easier to integrate custom functionality with Breeze, you
can use `breeze_` prefixed layout update file names. They will work for the Breeze
powered theme only.

For example, when category page is rendered Magento reads the following
layout update xml files:

 -  default.xml
 -  catalog_category_view.xml

When Breeze is enabled for the current theme, additional layout updates are applied:

 -  default.xml
 -  catalog_category_view.xml
 -  breeze.xml
 -  breeze_default.xml
 -  breeze_catalog_category_view.xml

This allows you to add custom code that will work when Breeze is enabled.

## Registering component

Each js component must be registered in `breeze.js` block. This feature
allows Breeze to detect which js component is needed at the current page.

Breeze.js block provides the following js bundles:

 -  default - Always enabled for all pages
 -  product - Usually added at product pages
 -  customer - Usually added at customer pages

Here is a full syntax example on how to register custom component:

```xml
<?xml version="1.0"?>
<page xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:noNamespaceSchemaLocation="urn:magento:framework:View/Layout/etc/page_configuration.xsd">
    <body>
        <referenceBlock name="breeze.js">
            <arguments>
                <argument name="bundles" xsi:type="array">
                    <item name="[bundle-name]" xsi:type="array">
                        <item name="items" xsi:type="array">
                            <item name="[component-name]" xsi:type="array">
                                <item name="path" xsi:type="string">[path]</item>
                                <item name="names" xsi:type="array">
                                    <item name="name" xsi:type="string">[component name]</item>
                                    <item name="alias" xsi:type="string">[component name alias]</item>
                                </item>
                                <item name="enabled" xsi:type="helper" helper="Swissup\Breeze\Helper\Config::isEnabled">
                                    <param name="path">vendor/module/path</param>
                                </item>
                                <item name="import" xsi:type="array">
                                    <item name="first" xsi:type="string">Vendor_Module/js/breeze/[another-filename]</item>
                                    <item name="item::another" xsi:type="string">[component-name]</item>
                                    <item name="bundle::one-more" xsi:type="string">[bundle-name]</item>
                                </item>
                            </item>
                        </item>
                    </item>
                </argument>
            </arguments>
        </referenceBlock>
    </body>
</page>
```

Option          | Description
----------------|---------------
[bundle-name]   | Use one of existing (recommended) or create new bundle (useful if your scripts size is huge, or it's not needed anywhere except your custom page).
[component-name]| A name that used in `data-mage-init` or `text/x-magento-init` scripts to instantiate component. If you use multiple names for your component take a look at the `names` item below.
[path]          | Path to your component: `Vendor_Module/js/breeze/filename`
names           | Optional. Add all names that you use to instantiate your component. Not needed if you use one name only (recommended).
enabled         | Optional. When it's false, the component will be excluded from the bundle.
deps            | Optional. When set, all of dependencies will be injected before current component as well.

## Examples

See examples in [Module Js](/m2/extensions/breeze/devdocs/module-js/)
and [Theme Js](/m2/extensions/breeze/devdocs/theme-js/)
sections.

#### Next up
{:.no_toc}

 -  [Back to DevDocs](/m2/extensions/breeze/devdocs/)
