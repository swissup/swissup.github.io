---
layout: default
title: Create Installer
description: How to create installer for Magento module
category: Marketplace
---

# Create Installer

Installer allows you to declare set of operations to run when client call
`marketplace:package:install my/package` command.

<!-- MarkdownTOC -->

- [Installer example](#installer-example)
- [Installer file structure](#installer-file-structure)
- [Commands](#commands)
    - [Built-in commands](#built-in-commands)
        - [CMS Blocks](#cms-blocks)
        - [CMS Page](#cms-page)
        - [Config](#config)
        - [Product Attribute](#product-attribute)
        - [Product Collection](#product-collection)
        - [Category Update](#category-update)
        - [Widget](#widget)
        - [Copy media dir](#copy-media-dir)
    - [Third-party commands](#third-party-commands)
        - [Easybanner](#easybanner)
        - [Easyslide](#easyslide)
        - [Easytabs](#easytabs)
        - [Navigationpro](#navigationpro)

<!-- /MarkdownTOC -->


## Installer example

Installer commands are stored in `my/package/etc/marketplace/installer.xml` file.
Here is a very basic example:

```xml
<?xml version="1.0"?>
<config>
    <!-- Run installer for these packages: -->
    <packages>
        <package>my/package</package>
    </packages>

    <!-- Declare fields to ask during installation (Optional): -->
    <fields>
        <field name="my_package_theme" title="Select Mypackage Theme">
            <option title="Light">light</option>
            <option title="Dark">dark</option>
        </field>
    </fields>

    <!-- Declare commands to run: -->
    <commands>
        <command class="Swissup\Marketplace\Installer\Command\Config">
            <data>
                <item name="mypackage/general/enabled">1</item>
                <item name="mypackage/general/theme" helper="Swissup\Marketplace\Installer\Helper\Request::getData">
                    <param name="key">my_package_theme</param>
                </item>
            </data>
        </command>
    </commands>
</config>
```

This installer will ask you to select "Select Mypackage Theme" and will insert
selected value to the config table.

## Installer file structure

Installer consists from three sections:

 -  **Packages**. In this section you should declare packages that installer
    will run for. Additionally, this section allows to run installer for multiple
    packages. This is useful when your my/package is also distributed in
    my/another-package, and you want to run my/package installer together with
    my/another-package installer when customer runs `install my/another-package`:

    Here is a content of the `my/package/etc/marketplace/installer.xml` file
    for this case:

    ```xml
    <packages>
        <package>my/package</package>
        <package>my/another-package</package>
    </packages>
    ```

 -  **Fields**. This section is optional. Use it when you want to ask customer
    some options during installation.

    Here is an example on how to ask some fields:

    ```xml
    <fields>
        <field name="select_field_name1" title="Select Some Option">
            <source_model>My\Package\Installer\SourceModel\Options</source_model>
        </field>
        <field name="select_field_name2" title="Select Another Option">
            <option title="First Option">first</option>
            <option title="Second Option">second</option>
        </field>
        <field name="text_field_name" title="Enter Some Text"/>
    </fields>
    ```

    The answers will be used in **commands** section.

 -  **Commands**. This is the heart of the installer. All logic is placed here.
    You can delare as many commands as you need. You can even create your own
    commands like we did for our modules.

    Example:

    ```xml
    <commands>
        <command class="Swissup\Marketplace\Installer\Command\Config">
            <data>
                <item name="mypackage/general/enabled">1</item>
                <item name="mypackage/general/option1" helper="Swissup\Marketplace\Installer\Helper\Request::getData">
                    <param name="key">select_field_name1</param>
                </item>
                <item name="mypackage/general/option2" helper="Swissup\Marketplace\Installer\Helper\Request::getData">
                    <param name="key">select_field_name2</param>
                </item>
                <item name="mypackage/general/option3" helper="Swissup\Marketplace\Installer\Helper\Request::getData">
                    <param name="key">text_field_name</param>
                </item>
            </data>
        </command>
    <commands>
    ```

## Commands

### Built-in commands

#### CMS Blocks

 -  [View Source Code](https://github.com/swissup/module-marketplace/blob/master/Installer/Command/CmsBlock.php)
 -  [View Usage Example](https://github.com/swissup/theme-frontend-absolute/blob/master/etc/marketplace/commands/cms_block.xml)

```xml
<command class="Swissup\Marketplace\Installer\Command\CmsBlock" module="Magento_Cms">
    <data>
        <item>
            <item name="title">block1</item>
            <item name="identifier">block1</item>
            <item name="content" helper="Swissup\Marketplace\Installer\Helper\Renderer::render">
                <!-- Contents of `my/package/etc/marketplace/content/cms_block/block1.html` will be inserted -->
                <param name="path" type="path">content/cms_block/block1.html</param>
            </item>
        </item>
        <item>
            <item name="title">block2</item>
            <item name="identifier">block2</item>
            <item name="content" helper="Swissup\Marketplace\Installer\Helper\Renderer::render">
                <!-- Contents of `my/package/etc/marketplace/content/cms_block/block2.html` will be inserted -->
                <param name="path" type="path">content/cms_block/block2.html</param>
            </item>
        </item>
    </data>
</commands>
```

#### CMS Page

 -  [View Source Code](https://github.com/swissup/module-marketplace/blob/master/Installer/Command/CmsPage.php)
 -  [View Usage Example](https://github.com/swissup/theme-frontend-absolute/blob/master/etc/marketplace/commands/cms_page.xml)

```xml
<command class="Swissup\Marketplace\Installer\Command\CmsPage">
    <data>
        <item>
            <item name="title">Homepage</item>
            <item name="identifier">home</item>
            <item name="content" helper="Swissup\Marketplace\Installer\Helper\Renderer::render">
                <!-- Contents of `my/package/etc/marketplace/content/cms_page/home.html` will be inserted -->
                <param name="path" type="path">content/cms_page/home.html</param>
            </item>
        </item>
        <item>
            <item name="title">Typography Page</item>
            <item name="identifier">typography</item>
            <item name="content" helper="Swissup\Marketplace\Installer\Helper\Renderer::render">
                <!-- Contents of `my/package/etc/marketplace/content/cms_page/typography.html` will be inserted -->
                <param name="path" type="path">content/cms_page/typography.html</param>
            </item>
        </item>
    </data>
</command>
```

#### Config

 -  [View Source Code](https://github.com/swissup/module-marketplace/blob/master/Installer/Command/Config.php)
 -  [View Usage Example](https://github.com/swissup/theme-frontend-absolute/blob/master/etc/marketplace/commands/config.xml)

```xml
<command class="Swissup\Marketplace\Installer\Command\Config">
    <data>
        <!-- Assign new theme -->
        <item name="design/theme/theme_id" helper="Swissup\Marketplace\Installer\Helper\Theme::getId">
            <param name="theme">frontend/My/theme</param>
        </item>
        <!-- Remove demo data -->
        <item name="design/head/includes">
            <item name="remove"><![CDATA[<link  rel="stylesheet" type="text/css"  media="all" href="{{MEDIA_URL}}styles.css" />]]></item>
        </item>
    </data>
</command>
```

#### Product Attribute

 -  [View Source Code](https://github.com/swissup/module-marketplace/blob/master/Installer/Command/ProductAttribute.php)
 -  [View Usage Example](https://github.com/swissup/theme-frontend-absolute/blob/master/etc/marketplace/commands/product_attribute.xml)

```xml
<command class="Swissup\Marketplace\Installer\Command\ProductAttribute">
    <data>
        <item>
            <item name="attribute_code">coming_soon</item>
            <item name="frontend_label">
                <item>Coming Soon</item>
            </item>
            <item name="default_value">0</item>
        </item>
    </data>
</command>
```

#### Product Collection

Create number of products with specified attribute value.

```xml
<?xml version="1.0"?>
<config>
    <command class="Swissup\Marketplace\Installer\Command\ProductCollection">
        <data>
            <item name="coming_soon">6</item>
        </data>
    </command>
</config>
```

#### Category Update

Update existing categories data.

```xml
<command class="Swissup\Marketplace\Installer\Command\CategoryUpdate">
    <data>
        <item>
            <item name="filters">
                <item>
                    <item name="field">url_key</item>
                    <item name="value">
                        <item name="in">
                            <item>category1</item>
                            <item>category2</item>
                        </item>
                    </item>
                </item>
            </item>
            <item name="store_id" helper="Swissup\Marketplace\Installer\Helper\Request::getData">
                <param name="key">store_id</param>
            </item>
            <item name="data">
                <item name="display_mode" type="const">Magento\Catalog\Model\Category::DM_PAGE</item>
                <item name="landing_page" helper="Swissup\Marketplace\Installer\Helper\Collection::getId">
                    <param name="class">Magento\Cms\Model\ResourceModel\Block\Collection</param>
                    <param name="filters">
                        <item>
                            <item name="field">identifier</item>
                            <item name="value">footer_cms_content</item>
                        </item>
                        <item>
                            <item name="field">is_active</item>
                            <item name="value">1</item>
                        </item>
                        <item>
                            <item name="method">addStoreFilter</item>
                            <item name="params">
                                <item name="store" helper="Swissup\Marketplace\Installer\Helper\Request::getData">
                                    <param name="key">store_id</param>
                                </item>
                            </item>
                        </item>
                    </param>
                </item>
            </item>
        </item>
    </data>
</command>
```

#### Widget

Intentinally complex example that creates a widget for `footer_cms_content` cms
block. Widget is added to the "watches" category, 2 product pages, all pages, and
cutomer account page.

```xml
<command class="Swissup\Marketplace\Installer\Command\Widget">
    <data>
        <item>
            <item name="title">CMS block from installer</item>
            <item name="type">Magento\Cms\Block\Widget\Block</item>
            <item name="template">widget/static_block/default.phtml</item>
            <item name="theme_id" helper="Swissup\Marketplace\Installer\Helper\Theme::getId">
                <param name="theme">frontend/Magento/luma</param>
            </item>
            <item name="params">
                <item name="block_id" helper="Swissup\Marketplace\Installer\Helper\Collection::getId">
                    <param name="class">Magento\Cms\Model\ResourceModel\Block\Collection</param>
                    <param name="filters">
                        <item>
                            <item name="field">identifier</item>
                            <item name="value">footer_cms_content</item>
                        </item>
                        <item>
                            <item name="field">is_active</item>
                            <item name="value">1</item>
                        </item>
                        <item>
                            <item name="method">addStoreFilter</item>
                            <item name="params">
                                <item name="store" helper="Swissup\Marketplace\Installer\Helper\Request::getData">
                                    <param name="key">store_id</param>
                                </item>
                            </item>
                        </item>
                    </param>
                </item>
            </item>
            <item name="pages">
                <item>
                    <item name="reference">content.top</item>
                    <item name="category_ids" helper="Swissup\Marketplace\Installer\Helper\Arr::join">
                        <param name="glue">,</param>
                        <param name="pieces" helper="Swissup\Marketplace\Installer\Helper\Collection::getIds">
                            <param name="class">Magento\Catalog\Model\ResourceModel\Category\Collection</param>
                            <param name="filters">
                                <item>
                                    <item name="field">url_key</item>
                                    <item name="value">watches</item>
                                </item>
                            </param>
                        </param>
                    </item>
                </item>
                <item>
                    <item name="reference">content.top</item>
                    <item name="product_ids" helper="Swissup\Marketplace\Installer\Helper\Arr::join">
                        <param name="glue">,</param>
                        <param name="pieces" helper="Swissup\Marketplace\Installer\Helper\Collection::getIds">
                            <param name="class">Magento\Catalog\Model\ResourceModel\Product\Collection</param>
                            <param name="filters">
                                <item>
                                    <item name="field">url_key</item>
                                    <item name="value">
                                        <item name="in">
                                            <item>montana-wind-jacket</item>
                                            <item>bolo-sport-watch</item>
                                        </item>
                                    </item>
                                </item>
                            </param>
                        </param>
                    </item>
                </item>
                <item>
                    <item name="reference">content.top</item>
                    <item name="handle">default</item>
                </item>
                <item>
                    <item name="reference">content.top</item>
                    <item name="page_layout">customer_account</item>
                </item>
            </item>
        </item>
    </data>
</command>
```

#### Copy media dir

```xml
<command class="Swissup\Marketplace\Installer\Command\CopyMediaDir">
    <data>
        <!-- Copy contents of `my/package/etc/marketplace/content/media` folder into `<magento_root>/pub/media`  -->
        <item type="path">content/media</item>
    </data>
</command>
```

### Third-party commands

#### Easybanner

```xml
<command class="Swissup\Easybanner\Installer\Command\Banner" module="Swissup_Easybanner">
    <data>
        <item>
            <item name="name">placeholder_name</item>
            <item name="limit">1</item>
            <item name="banners">
                <item>
                    <item name="identifier">free-shipping</item>
                    <item name="title">Free Shipping</item>
                    <item name="url">free-shipping</item>
                    <item name="image">/my/package/banner.png</item>
                    <item name="width">225</item>
                    <item name="height">130</item>
                </item>
            </item>
        </item>
    </data>
</command>
```

#### Easyslide

```xml
<command class="Swissup\EasySlide\Installer\Command\Slider" module="Swissup_EasySlide">
    <data>
        <item>
            <item name="title">Slider</item>
            <item name="identifier">slider</item>
            <item name="slides">
                <item>
                    <item name="title">Slide 1</item>
                    <item name="image">my/package/slide_1.jpg</item>
                    <item name="description">Sony VAIO Laptop</item>
                    <item name="desc_position">left</item>
                    <item name="desc_background">dark</item>
                    <item name="sort_order">10</item>
                </item>
                <item>
                    <item name="title">Slide 2</item>
                    <item name="image">my/package/slide_2.jpg</item>
                    <item name="description">Dell Studio 17</item>
                    <item name="desc_position">left</item>
                    <item name="desc_background">dark</item>
                    <item name="sort_order">20</item>
                </item>
            </item>
        </item>
    </data>
</commands>
```

#### Easytabs

```xml
<command class="Swissup\Easytabs\Installer\Command\Tabs" module="Swissup_Easytabs">
    <data>
        <item>
            <item name="title">Upsells</item>
            <item name="alias">upsells</item>
            <item name="block">Magento\Catalog\Block\Product\ProductList\Upsell</item>
            <item name="block_arguments">type:upsell</item>
            <item name="sort_order">40</item>
            <item name="status">1</item>
            <item name="widget_template">Magento_Catalog::product/list/items.phtml</item>
            <item name="widget_unset">product.info.upsell</item>
        </item>
        <item>
            <item name="title">Related Products</item>
            <item name="alias">related</item>
            <item name="block">Magento\Catalog\Block\Product\ProductList\Related</item>
            <item name="block_arguments">type:related</item>
            <item name="sort_order">50</item>
            <item name="status">1</item>
            <item name="widget_template">Magento_Catalog::product/list/items.phtml</item>
            <item name="widget_unset">catalog.product.related</item>
        </item>
        <item>
            <item name="title">Questions ({{eval code="getCount()"}})</item>
            <item name="alias">questions</item>
            <item name="block">Swissup\Easytabs\Block\Tab\Template</item>
            <item name="sort_order">60</item>
            <item name="status">1</item>
            <item name="widget_block">Swissup\Askit\Block\Question\Widget</item>
            <item name="widget_template">template.phtml</item>
            <item name="widget_unset">askit_listing,askit_form</item>
        </item>
    </data>
</command>
```

#### Navigationpro

Create top and sidebar menus.

Top menu:

```xml
<command class="Swissup\Navigationpro\Installer\Command\Menu" module="Swissup_Navigationpro">
    <data>
        <item>
            <item name="activate">1</item>
            <item name="type" type="const">Swissup\Navigationpro\Model\Config\Source\BuilderType::TYPE_SIMPLE</item>
            <item name="settings">
                <item name="css_class">navpro-nowrap</item>
                <item name="identifier">mymenu</item>
            </item>
        </item>
    </data>
</command>
```

Sidebar menu:

```xml
<command class="Swissup\Navigationpro\Installer\Command\Menu" module="Swissup_Navigationpro">
    <data>
        <item>
            <item name="type" type="const">Swissup\Navigationpro\Model\Config\Source\BuilderType::TYPE_AMAZON_SIDEBAR</item>
            <item name="theme_id" helper="Swissup\Marketplace\Installer\Helper\Theme::getId">
                <param name="theme">frontend/My/theme</param>
            </item>
            <item name="settings">
                <item name="max_depth">0</item>
                <item name="css_class"></item>
                <item name="identifier">sidebar_menu</item>
            </item>
            <item name="widget_settings">
                <item name="title">Widget Title</item>
                <item name="sort_order">0</item>
                <item name="params">
                    <item name="show_active_branch">1</item>
                    <item name="theme">compact</item>
                    <item name="orientation">vertical</item>
                    <item name="wrap">1</item>
                    <item name="block_title">Title</item>
                </item>
                <item name="page_groups">
                    <item>
                        <item name="page_group">pages</item>
                        <item name="pages">
                            <item name="page_id">0</item>
                            <item name="for">all</item>
                            <item name="layout_handle">catalog_category_view</item>
                            <item name="block">sidebar.main.top</item>
                        </item>
                    </item>
                </item>
            </item>
        </item>
    </data>
</command>
```
–