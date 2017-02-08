---
layout: default
title: Use banner and placeholder programmatically
category: Easy Banners
---

# Use banner and placeholder programmatically

### Contents
{:.no_toc}

* TOC
{:toc}

### Banners

##### Xml code

```xml
<reference name="content">
    <block type="easybanner/banner" name="unique_banner_name">
        <action method="setBannerName"><name>test</name></action>
    </block>
</reference>
```

##### Widget code

```html
{% raw %}{{block type="easybanner/banner" banner_name="test"}}{% endraw %}
```

##### Php code

```php
<?php
echo $this->getLayout()
    ->createBlock('easybanner/banner')
    ->setBannerName('test')
    ->toHtml();
?>
```

### Placeholders

##### Xml code

```xml
<reference name="content">
    <block type="easybanner/placeholder" name="unique_placeholder_name">
        <action method="setPlaceholderName"><name>right-top</name></action>
    </block>
</reference>
```

##### Widget code

```html
{% raw %}{{block type="easybanner/placeholder" placeholder_name="right-top"}}{% endraw %}
```

##### Php code

```php
<?php
echo $this->getLayout()
    ->createBlock('easybanner/placeholder')
    ->setPlaceholderName('right-top')
    ->toHtml();
?>
```
