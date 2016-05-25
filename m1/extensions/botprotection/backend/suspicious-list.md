---
layout: default
title: Suspicious list
description: magento bot protection backend suspicious list
keywords: "captcha bot protection backend suspicious list configuration"
category: Bot Protection
---

# Suspicious List

Suspicious list is a list of visitors with weird activity (too many open links)
or with non-human [user agents](https://en.wikipedia.org/wiki/User_agent). You
can add items to this list manualy. Extenstion can also add new items to
suspicious list when bot detection enabled and default action is `Confirm Human`
or `Add to Suspicious List` in [extension configurations](../extension-configuration/#detect-bots).

To manage suspicious list go to menu `Templates Master` > `Bot Protection` >
`Suspicious List` in magento backend.

![Suspucious list](/images/m1/extensions/botprotection/backend/suspisious-list.png)

To edit existing item in suspicious list - click on it.

To add new visitor to suspicious list click `Add to Suspucious List`.

![Add to suspicious list](/images/m1/extensions/botprotection/backend/add-to-suspicious-list.png)

**Notice**: field `User Agent` is blocked for input. It is filled only when Bot
Protection extension added item to Suspicious List by itself (bot detection
feature).

In section `Confirm human` you can see option
`Ask visitor to confirm he is a human`. If it is `Yes`, then visitor has to
solve captcha next time he come to your store. If this option is `No`, then
visitor stay in this list until store admin decide what to do with him. Admin
can move this visitor to blakclist, whitelist or just delete it from suspicious
list.

Below is example of suspicious list item.

![Suspicious list example](/images/m1/extensions/botprotection/backend/suspicious-list-example.png)

In section `Confirm human` you can find out:

-   Did visitor comfirm he is human?
-   How many attempts he failed?

You can see when visitor last time came to your store in section `Information`.

