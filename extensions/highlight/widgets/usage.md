---
layout: default
title: Highlight Widget Usage
description: >
    Ways to use Highlight Widgets
keywords: >
    highlight widget tutorial, wysiwyg editor, widgets page, xml layout update,
    php inline code
category: Highlight
---

# Highlight widgets usage

### Contents

1. [WYSIWYG Editor](#wysiwyg-editor)
2. [Widgets Page](#widgets-page)
3. [XML Layout Update](#xml-layout-update)
4. [PHP Inline Code](#php-inline-code)

## WYSIWYG Editor

Highlight widgets may be inserted into custom content using Magento's built-in
WYSIWYG Editor. This method is recommended to insert widget into cms pages
and blocks. It also may be used with any our or third-party extension that
utilize `Insert Widget` button.

**Example below shows how to add widget into CMS Page content**

1. Press `Insert Widget` button.

    ![Insert Widget Button](/images/highlight/insert_widget_button.png)

2. Select one of available highlight widgets in `Widget Type` dropdown.

    ![Widgets Dropdown](/images/highlight/widgets_dropdown.png)

3. Fill `Widget Options` form with values you'd like to. See the
    [Widget Settings][widget_settings] page, if you are not sure about some 
    options.

    ![Widget Form](/images/highlight/widget_form.png)

4. Press `Insert Widget` button at the right top corner of widget popup.
5. Save your cms page.

## Widgets Page

Magento's `CMS > Widgets` page allows easily add custom content to almost all 
frontend pages. This method is highly recommended to insert highlight widgets.

**Example below shows how to add widget to the Product Page**

1. Navigate to `CMS > Widgets` and press `Add New Widget Instance` button in the
    right top corner of the page.

    ![Widget Instances Grid](/images/highlight/widget_instances_grid.png)

2. Select one of available highlight widgets in `Widget Type` dropdown and your
    theme in `Design Package/Theme` dropdown and press `Continue`.

    ![New Widget Instance form](/images/highlight/new_widget_instance.png)

3. Now you should fill the form with two tabs: `Frontend Properties` and
    `Widget Options`. Lets fill the first one:

    ![Widget Instance Frontend Properties](/images/highlight/new_widget_instance_frontend_properties.png)

    And the second one:

    ![Widget Instance Options](/images/highlight/new_widget_instance_widget_options.png)

    See the [Widget Settings][widget_settings] page, if you are not sure about 
    some options.

4. Save widget and navigate to product page:

    ![Highlight Widget on Product Page](/images/highlight/new_widget_instance_on_product_page.png)

## XML Layout Update

- See the [Available Widgets][widget_types] page, for full block type reference.
- See the [Widget Settings][widget_settings] page, for full options reference.

Here is an xml layout skeleton, that could be used to write code to call any kind 
of highlight widget:

```xml
<block type="highlight/product_featured" name="highlight.featured">
    <action method="setTemplate"><template>tm/highlight/product/grid.phtml</template></action>
    <action method="setTitle"><title>Featured Products</title></action>
    <action method="setProductsCount"><count>4</count></action>
    <action method="setColumnCount"><count>4</count></action>
    <action method="setClassName"><name>highlight-featured</name></action>
    <action method="setPageTitle"><title>See All Featured Products</title></action>
</block>
```

## PHP Inline Code

- See the [Available Widgets][widget_types] page, for full block type reference.
- See the [Widget Settings][widget_settings] page, for full options reference.

Here is an xml layout skeleton, that could be used to write code to call any kind 
of highlight widget:

```php
<?php
$this->getLayout()
    ->createBlock('highlight/product_attribute_yesno')
    ->setAttributeCode('featured')
    ->setTemplate('tm/highlight/product/grid.phtml')
    ->setTitle('Featured Products')
    ->setProductsCount(4)
    ->setColumnCount(4)
    ->setClassName('highlight-featured')
    ->setPageTitle('See All Featured Products')
    ->toHtml();
?>
```

[widget_types]:     /extensions/highlight/widgets/#highlight-widgets
[widget_settings]:  /extensions/highlight/widgets/settings/
