---
layout: default
title: Register Update Channel
description: How to register composer or vcs update channels
category: Marketplace
---

# Register Update Channel

Update channel is useful when you provide multiple Magento modules and themes
from single composer repository.

> Looking on how to use vcs repository type? Scroll down to the
[page end](#vcs-repository-type).

## Composer repository type

Custom update channels are registered via `etc/di.xml` file:

```xml
<!-- Declare custom channel: -->
<virtualType name="Swissup\Marketplace\Model\Channel\Mychannel"
             type="Swissup\Marketplace\Model\Channel\Composer">
    <arguments>
        <argument name="title" xsi:type="string">My Channel</argument>
        <argument name="url" xsi:type="string">https://mychannel.com/packages</argument>
        <argument name="hostname" xsi:type="string">mychannel.com</argument>
        <argument name="identifier" xsi:type="string">mychannel</argument>
        <argument name="data" xsi:type="array">
            <item name="authType" xsi:type="string">http-basic</item>
            <item name="authNotice" xsi:type="string"><![CDATA[Get your credentials at <a href="https://mychannel.com/customer/accessKeys/" title="Access Keys">mychannel.com</a>]]></item>
            <item name="cliAuthNotice" xsi:type="string"><![CDATA[Get your credentials at https://mychannel.com/customer/accessKeys/]]></item>
        </argument>
    </arguments>
</virtualType>

<!-- Register declared channel: -->
<type name="Swissup\Marketplace\Model\ChannelRepository">
    <arguments>
        <argument name="channels" xsi:type="array">
            <item name="mychannel" xsi:type="object">Swissup\Marketplace\Model\Channel\Mychannel</item>
        </argument>
    </arguments>
</type>

<!-- Declare form data provider: -->
<virtualType name="Swissup\Marketplace\Ui\DataProvider\Form\SettingsDataProvider\Modifier\Mychannel"
             type="Swissup\Marketplace\Ui\DataProvider\Form\SettingsDataProvider\Modifier\HttpBasicAuth">
    <arguments>
        <argument name="channel" xsi:type="object">Swissup\Marketplace\Model\Channel\Mychannel</argument>
    </arguments>
</virtualType>

<!-- Register declared form data provider: -->
<virtualType name="Swissup\Marketplace\Ui\DataProvider\Form\SettingsDataProvider\Modifier\Pool">
    <arguments>
        <argument name="modifiers" xsi:type="array">
            <item name="mychannel" xsi:type="array">
                <item name="class" xsi:type="string">Swissup\Marketplace\Ui\DataProvider\Form\SettingsDataProvider\Modifier\Mychannel</item>
                <item name="sortOrder" xsi:type="number">30</item>
            </item>
        </argument>
    </arguments>
</virtualType>
```

That's all. Now you can manage your channel and packages via marketplace CLI and GUI
interfaces:

```bash
bin/magento marketplace:channel:enable mychannel
bin/magento marketplace:package:require my/package
```

## VCS Repository Type

We support VCS repository type via CLI interface only. You don't need to declare
channel in `di.xml`. Just use the power of CLI:

```bash
composer config repositories.mychannel vcs https://github.com/my/package.git
bin/magento marketplace:auth github-oauth.github.com token # https://github.com/settings/tokens/new?scopes=repo
bin/magento marketplace:package:require my/package
```
