---
layout: default
title: Lemonline Smartpost integration
description: Firecheckout integration with Lemonline_Smartpost
keywords: Lemonline Smartpost
category: Firecheckout
---

# Lemonline Smartpost

 1. Open `app/design/frontend/base/default/template/smartpost/search.phtml` and move
    whole `<script>...</script>` section to the botom of the page.

 2. Open `app/design/frontend/argento/default/template/smartpost/search/result.phtml`
    and apple the following patch:

    ```diff
    --- /a/result.phtml
    +++ /b/result.phtml
    @@ -62,25 +62,29 @@
             }
         };

    -    Event.observe('smartpost_select_point', 'change', updatePointValue);
    +    if ($('smartpost_select_point')) {
    +        Event.observe('smartpost_select_point', 'change', updatePointValue);
    +    }

         function updatePointValue(e) {
             //alert($('smartpost_select_point'));
    -        var pointValue = $('smartpost_select_point').getValue();
    -        $('s_method_itellaSmartPost').value = pointValue;
    -        if(pointValue != 'itellaSmartPost') {
    -            $('s_method_itellaSmartPost').checked = true;
    -        } else {
    -            $('s_method_itellaSmartPost').checked = false;
    -        }
    -        if(typeof includingShipping == 'function') {
    -            return includingShipping(pointValue);
    +        if ($('smartpost_select_point')) {
    +            var pointValue = $('smartpost_select_point').getValue();
    +            $('s_method_itellaSmartPost').value = pointValue;
    +            if(pointValue != 'itellaSmartPost') {
    +                $('s_method_itellaSmartPost').checked = true;
    +            } else {
    +                $('s_method_itellaSmartPost').checked = false;
    +            }
    +            if(typeof includingShipping == 'function') {
    +                return includingShipping(pointValue);
    +            }
             }

    -        $('s_method_itellaSmartPost').triggerEvent('click');
    +        /* Do not uncomment, it will cause recursive reload. Bug 20377, 18963 */
    +        /*$('s_method_itellaSmartPost').triggerEvent('click');*/
         }

         updatePointValue();
         //]]>
     </script>
    ```
