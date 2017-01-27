---
layout: default
title: Helpmate cron configuration
description: magento helpdesk extension installation instructions
keywords: " magento help desk module, magento help desk extension with built
in knowledge base, magento ticket, magento support  "
category: Helpmate
---

# Cron configuration

In order to get customer answers via email and to close inactive tickets, the Helpmate extension uses core Magento cron process. For more details about configuring Magento cron please check [http://www.magentocommerce.com/wiki/1_-_installation_and_configuration/how_to_setup_a_cron_job](www.magentocommerce.com/wiki/1_-_installation_and_configuration/how_to_setup_a_cron_job)

Helpmate cron settings are set at `app\code\local\TM\Helpmate\etc\config.xml` with following xml code.

```xml
<crontab>
    <jobs>
        <tm_helpmate_mail>
            <schedule>
                <cron_expr>*/5 * * * *</cron_expr> <!-- */5 * * * * -->
            </schedule>
            <run>
                <model>helpmate/observer::sheduledAddEmailedTicket</model>
            </run>
        </tm_helpmate_mail>
        <tm_helpmate_auto_close>
            <schedule>
                <cron_expr>0 0 * * *</cron_expr> <!-- Daily at midnight  -->
            </schedule>
            <run>
                <model>helpmate/observer::autoCloseTicketAfterXDay</model>
            </run>
        </tm_helpmate_auto_close>
    </jobs>
</crontab>
```

For example, in order to change the interval for checking email gateway, `you have to change cron time settings` in the code provided below 

```
<cron_expr>*/5 * * * *</cron_expr>.
```

Time interval for email gateway processing is set every 5 minutes by default. The interval for ticket auto close process is set to 1 time per 24 hours.

#### You can also check

*   [Installation](../installation/)
*   [Configuration](../configuration/)
*   [Managing email gateway](../managing-email-gateway/)
*   [Managing ticket](../managing-ticket/)
*   [Managing department](../managing-department/)
*   [Managing a knowledgebase](../managing-a-knowledgebase/)
*   [Use cases](../use-cases/)
*   [Support](https://swissuplabs.com/contacts/)
*   [Forum](https://swissuplabs.com/magento-forum/)
