---
layout: default
title: Using Shell Script
description: magento product labels shell script
keywords: " magento product labels shell script"
category: Prolabels
---

# Using Shell Script

If you're managing the store with huge number of product catalogs and with a
lot of custom labels, you might see labels disappeared occasionally. In order
to support the smooth running the store and to avoid the losing of labels, we
offer to use Shell Script. Started from Prolabels update 2.6.8, the labels'
reindex can be additionally implemented by shell script running.

You are allowed to run shell script for labels' reindex by two following ways:

 1. Using command line. You have to enter

    ```
    php -f /path_to_magento_root/shell/prolabels.php -- reindex
    ```

    Please replace `path_to_magento_root` with your own magento installation
    path.

 2. Setting up Cron Jobs in cPanel. Please follow next steps:

     -  Login to cPanel and find the Advanced panel
     -  Click on the Cron Jobs icon
     -  Specify the settings in the Add New Cron Job field as shown on
        screenshot. You have to replace the path with the your own magento
        installation path.

        ![cPanel cron setting](/images/m1/extensions/prolabels/cpanel-cron.png)

     -  Click on `Add New Cron Job` button. The Cron Job is installed now.

> Please notice, before using both of ways, you have to disable the Cron
> Manual Labels Indexing in `System` > `Configuration` > `Prolabels` > General
> section.
