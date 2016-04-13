---
layout: default
title: Custom deal timer
description: magento daily deals module frontend
keywords: " magento daily deal, daily deal magento extension, frontend, deal timer"
category: Daily Deals
---

# Custom deal timer

If you want to change the default deal timer, you can set the custom
timer with Daily Deals extension. Basically you can set different timer for each
deal.

Daily Deals extension comes with Countdown Timer extension. Feel free to use
two widgets with clear interface:

- Countdown Timer - Flip timer
- Countdown Timer - Simple timer

Flip Timer is the default deal timer.

Let's set up the other timer for deal. It will be called “Hurry! Don’t miss it!”.

Get start with setting of custom timer start value [edit deal](../../../backend/edit-deal/)
at backend. Go to tab [Advanced](../../../backend/create-deal/#advanced-tab).
In section `Deal timer` set the option `Use default timer` to `No`. You can see
common magento textarea for content. Paste the code listed below to textarea:

```html
<p style="color: #a5205f">Hurry! Don’t miss it!</p>
{% raw %}{{widget type="tm_countdowntimer/timer_simple" date="%_ENDTIME_%" inlinecss="font-family: 'Raleway','Helvetica Neue',Verdana,Arial,sans-serif; color:#636363; font-size:2em"}}{% endraw %}
```

Save deal and go to frontend. Have a look at the result:

![Custom deal timer example](/images/dailydeals/frontend/custom-deal-timer.png)

In code that was pasted to `Custom timer content` field, you can find the following
string **`%_ENDTIME_%`**. It is service string for Daily Deals extension. It
will be replaced with actual deal end time during rendering content for frontend.

### Endtime calculation

In case of simple deal with options `Deal is active only specific time` and
`Deal is active specific days` set to `No`, string **`%_ENDTIME_%`** will be
replaced with value from field `Deal ends at` (General tab). In other cases the
value that replaces this string is not so obvious. Review following samples to figure
out how to use some settings:

##### Example 1

![Custom timer example 1](/images/dailydeals/frontend/custom-timer-example-1.png)

`%_ENDTIME_%` = current date 1:45 pm

The values shown on the image above mean that deal starts every day from 7:00 am
and is active till 1:45 pm.

##### Example 2

![Custom timer example 2](/images/dailydeals/frontend/custom-timer-example-2.png)

Assuming you know that today is Wednesday. Then `%_ENDTIME_%` = current date 11:59 pm.

If today is Tuesday, then deal is inactive and it has no effect on frontend.

The values shown on the image above mean the deal is active only on Monday, Wednesday
and Friday. It starts at 12:00am and will be active till 11:59pm.

##### Example 3

![Custom timer example 3](/images/dailydeals/frontend/custom-timer-example-3.png)

This is compilation of example 1 and example 2.

It means that deal is active everyday from Monday till Friday and starts at
07:00 am and ends at 1:45 pm.
