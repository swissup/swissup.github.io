---
layout: default
title: Highlight Widget Usage
description: >
    Ways to use Highlight Widgets
keywords: >
    highlight widget tutorial, wysiwyg editor, widgets page, xml layout update,
    php inline code, highlight howto
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

    ![Insert Widget Button](/images/m2/highlight/insert_widget_button.png)

2. Select one of available highlight widgets in `Widget Type` dropdown.

    ![Widgets Dropdown](/images/m2/highlight/widgets_dropdown.png)

3. Fill `Widget Options` form with values you'd like to. See the
    [Widget Settings][widget_settings] page, if you are not sure about some 
    options.

    ![Widget Form](/images/m2/highlight/widget_form.png)

4. Press `Insert Widget` button at the right top corner of widget popup.
5. Save your cms page.

## Widgets Page

Magento's `Content > Widgets` page allows easily add custom content to almost all 
frontend pages. This method is highly recommended to insert highlight widgets.

**Example below shows how to add widget to the Product Page**

1. Navigate to `Content > Widgets` and press `Add Widget` button in the
    right top corner of the page.

    ![Widget Instances Grid](/images/m2/highlight/widget_instances_grid.png)

2. Select one of available highlight widgets in `Widget Type` dropdown and your
    theme in `Design Package/Theme` dropdown and press `Continue`.

    ![New Widget Instance form](/images/m2/highlight/new_widget_instance.png)

3. Now you should fill the form with two tabs: `Frontend Properties` and
    `Widget Options`. Lets fill the first one:

    ![Widget Instance Frontend Properties](/images/m2/highlight/new_widget_instance_frontend_properties.png)

    And the second one:

    ![Widget Instance Options](/images/m2/highlight/new_widget_instance_widget_options.png)

    See the [Widget Settings][widget_settings] page, if you are not sure about 
    some options.

4. Save widget and navigate to product page.

## XML Layout Update

- See the [Available Widgets][widget_types] page, for full block type reference.
- See the [Widget Settings][widget_settings] page, for full options reference.

Here is an xml layout skeleton, that could be used to write code to call any kind 
of highlight widget:

```xml
<referenceContainer name="content">
    <block class="Swissup\Highlight\Block\ProductList\Featured" name="highlight.featured">
        <action method="setTemplate">
            <argument name="template" xsi:type="string">Swissup_Highlight::product/widget/column/list.phtml</argument>
        </action>
        <action method="setTitle">
            <argument name="title" xsi:type="string">Featured Products</argument>
        </action>
        <action method="setProductsCount">
            <argument name="products_count" xsi:type="number">4</argument>
        </action>
        <action method="setCssClass">
            <argument name="css_class" xsi:type="string">highlight-featured</argument>
        </action>
        <action method="setPageTitle">
            <argument name="page_title" xsi:type="string">See All Featured Products</argument>
        </action>
    </block>
</referenceContainer>
```

## PHP Inline Code

- See the [Available Widgets][widget_types] page, for full block type reference.
- See the [Widget Settings][widget_settings] page, for full options reference.

Here is an xml layout skeleton, that could be used to write code to call any kind 
of highlight widget:

```php
<?php
echo $this->getLayout()
    ->createBlock('Swissup\Highlight\Block\ProductList\All')
    ->setTemplate('Swissup_Highlight::product/widget/content/grid.phtml')
    ->setProductsCount(20)
    ->setTitle('Featured Products')

    // show pager
    ->setShowPager(true)
    ->setProductsPerPage(5)
    ->setPageVarName('page-highlight-all')

    // show link to custom page
    ->setShowPageLink(true)
    ->setPageLinkTitle('See all Featured Products')
    ->setPageUrl('test/test.html')

    // render block
    ->toHtml();
?>
```

[widget_types]:     /m2/highlight/widgets/#highlight-widgets
[widget_settings]:  /m2/highlight/widgets/settings/
