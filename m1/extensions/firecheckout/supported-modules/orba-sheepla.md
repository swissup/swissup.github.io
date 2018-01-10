---
layout: default
title: Orba_Sheepla integration
keywords: Orba, Sheepla
category: Firecheckout
---

# Orba Sheepla

> Orba_Sheepla Version 0.9.29

 1. Open `app/design/frontend/base/default/template/sheepla/container.phtml`
    and apply the following patch:

    ```diff
    --- app/design/frontend/base/default/template/sheepla/container.phtml
    +++ app/design/frontend/base/default/template/sheepla/container.phtml
    @@ -147,7 +147,9 @@

                     sheepla.query(containerClass).slideDown();
                     sheepla.query('#shipping-method-buttons-container').hide();
    -                sheepla.query(containerClass).appendTo(sheepla.query('input[id*=sheepla_method]').filter(':checked').parent());
    +                sheepla.query(containerClass).appendTo
    +                    .bind(sheepla.query(containerClass))
    +                    .defer(sheepla.query('input[id*=sheepla_method]').filter(':checked').parent());

                     var optionsArray = Array();
                     optionsArray = {

    ```

 2. Save the file.
