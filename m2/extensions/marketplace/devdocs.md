---
layout: default
title: Marketplace devdocs
description: Marketplace documentation for module developers
category: Marketplace
---

# Marketplace devdocs

Marketplace is an extensible module that allows to:

 1. [Register update channel](/m2/extensions/marketplace/devdocs/channel/).
    You may want to do this to drastically simplify installation of your packages:

    <table>
        <colgroup>
            <col width="50%"/>
            <col width="50%"/>
        </colgroup>
        <thead>
            <tr>
                <th>Before</th>
                <th>After</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>
                    <pre class="nocopy"><code>composer config repositories.myrepo composer https://example.com/packages/
composer config -a -g http-basic.example.com "username" "password"</code></pre>
                </td>
                <td>
                    <pre class="nocopy"><code>bin/magento marketplace:channel:enable myrepo</code></pre>
                </td>
            </tr>
            <tr>
                <td>
                    <pre class="nocopy"><code>bin/magento maintenance:enable
composer require my/package
bin/magento setup:upgrade --safe-mode=1
rm -rf var/view_preprocessed pub/static/frontend/ pub/static/adminhtml/ generated/code/ generated/metadata
bin/magento setup:static-content:deploy en_US nl_NL
bin/magento setup:di:compile
bin/magento maintenance:disable</code></pre>
                </td>
                <td>
                    <pre class="nocopy"><code>bin/magento marketplace:package:require my/package</code></pre>
                </td>
            </tr>
        </tbody>
    </table>

 2. [Create one-click installer](/m2/extensions/marketplace/devdocs/installer/)
    for any kind of magento package.
    You may want to use it to make your awesome module a little bit easier to install.

    Marketplace allows to declare installation instructions inside `etc/marketplace/installer.xml`
    file, and they will apply automatically when client run the installation command:

    ```bash
    bin/magento marketplace:package:install my/package
    ```
