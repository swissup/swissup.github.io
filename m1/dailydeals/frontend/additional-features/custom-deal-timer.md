---
layout: default
title: Custom deal timer
description: magento daily deals module frontend
keywords: " magento daily deal, daily deal magento extension, frontend, deal timer"
category: Daily Deals
---

# Custom deal timer

If you are tired of default deal timer, then Daily Deals extension allows you
set custom timer for deal. Basicly you can set different timer for every deal.

Daily Deals extension supplies with Countdown Timer extension. Countdown Timer
has two widgets with pretty simple interface:

- Countdown Timer - Flip timer
- Countdown Timer - Simple timer

Flip Timer is default deal timer.

Let set other timer for deal. And it will have call “Hurry! Don’t miss it!”.

To set custom timer start [edit deal](../../../backend/edit-deal/) at backend.
Go to tab [Advanced](../../../backend/create-deal/#advanced-tab). In section
`Deal timer` set option `Use default timer` to `No`. You can see usual magento
textarea for content. Paste in textarea code listed below:

```html
<p style="color: #a5205f">Hurry! Don’t miss it!</p>
{% raw %}{{widget type="tm_countdowntimer/timer_simple" date="%_ENDTIME_%" inlinecss="font-family: 'Raleway','Helvetica Neue',Verdana,Arial,sans-serif; color:#636363; font-size:2em"}}{% endraw %}
```

Save deal and go to frontend. Result should be look like this:

![Custom deal timer example](/images/dailydeals/frontend/custom-deal-timer.png)

In code that we pasted in `Custom timer content` you can find string
**`%_ENDTIME_%`**. It is service string for Daily Deals extension. It replace
with actual deal end time during rendering content for frontend.

### Endtime calculation

In case of simple deal with options `Deal is active only specific time` and
`Deal is active specific days` set to `No`, string **`%_ENDTIME_%`** replace
with value from field `Deal ends at` (General tab). In other cases value which
replace this string is not so obvious. We try to explain this with examples.

##### Example 1

![Custom timer example 1](/images/dailydeals/frontend/custom-timer-example-1.png)

`%_ENDTIME_%` = current date 1:45 pm

Values on image above means that deal starts every day from 7:00 am and lasts
till 1:45 pm.

##### Example 2

![Custom timer example 2](/images/dailydeals/frontend/custom-timer-example-2.png)

Assume today is Wednesday. Then `%_ENDTIME_%` = current date 11:59 pm.

If assume today is tuesday, then deal is inactive and it has no influence on
frontend.

Values on image above means deal is active only Monday, Wednesday and Friday. It
starts at 12:00am and lasts till 11:59pm.

##### Example 3

![Custom timer example 3](/images/dailydeals/frontend/custom-timer-example-3.png)

This is compilation of example 1 and example 2.

It means that deal is active everyday from Monday till Friday and starts at
07:00 am and ends at 1:45 pm.
