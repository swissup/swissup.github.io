---
layout: default
title: Helpdesk cron configuration
description: magento helpdesk extension installation instructions
keywords: " magento help desk module, magento ticket, magento support"
category: Helpdesk
---

# Cron configuration

In order to get customer answers via email and to close inactive tickets, the Helpdesk extension uses core Magento cron process. For more details about configuring Magento cron please check [http://devdocs.magento.com/guides/v2.2/config-guide/cli/config-cli-subcommands-cron.html](http://devdocs.magento.com/guides/v2.2/config-guide/cli/config-cli-subcommands-cron.html)

Helpdesk cron settings are set at `vendor\swissup\module-helpdesk\etc\crontab.xml` with following xml code.

```xml
    <group id="default">
        <job name="swissup_helpdesk_ticket_pickup" instance="Swissup\Helpdesk\Cron\EmailStorage\PickUp" method="execute">
            <!-- At every 10th minute.-->
            <schedule>*/10 * * * *</schedule>
        </job>
        <job name="swissup_helpdesk_ticket_autoclose" instance="Swissup\Helpdesk\Cron\Ticket\AutoClose" method="execute">
            <!-- Daily at midnight  -->
            <schedule>0 0 * * *</schedule>
        </job>
    </group>
```

For example, in order to change the interval for checking email storage, `you have to change cron time settings` in the code provided below

```
<schedule>*/15 * * * *</schedule>.
```

Time interval for email storage processing is set every 10 minutes by default. The interval for ticket auto close process is set to 1 time per 24 hours.

#### You can also check

*   [Installation](../installation/)
*   [Configuration](../configuration/)
*   [Support](https://swissuplabs.com/contacts/)
*   [Forum](https://swissuplabs.com/magento-forum/)
