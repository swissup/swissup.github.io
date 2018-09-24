---
layout: default
title: Solupay_Networkmerchant integration
description: Firecheckout integration with Solupay Networkmerchant
keywords: Solupay
category: Firecheckout
---

# Solupay_Networkmerchant

 1. Open `app/design/frontend/base/default/template/networkmerchant/form/payment.phtml`
    and apply the following patch:

    ```diff
    -    <li><div id="div_storecc"><input type="checkbox" id="cb_storecc" name="cb_storecc" checked>&nbsp;&nbsp;Store Card For Future Purchases</div></li>
    +    <li class="control">
    +        <div id="div_storecc">
    +            <input type="checkbox" id="cb_storecc" name="cb_storecc" checked />
    +            <label for="cb_storecc">Store Card For Future Purchases</label>
    +        </div>
    +    </li>

         var baseUrl = '<?php echo Mage::getUrl("networkmerchant/data/getdata");?>';
    +    function networkmerchantSolupaySave() {
    +        jQuery.ajax({
    +            url: baseUrl,
    +            dataType: "json",
    +            data: {
    +                card_type: jQuery('#networkmerchant_cc_type').val(),
    +                last4: jQuery('#networkmerchant_cc_number').val().substr(-4),
    +                exp_month: jQuery('#networkmerchant_expiration').val(),
    +                exp_year: jQuery('#networkmerchant_expiration_yr').val().substr(-2),
    +                cctoken: jQuery('#sel_savedcards').val(),
    +                storecc: jQuery('#cb_storecc').is(':checked'),
    +            },
    +            type: "POST",
    +            success: function (response) {
    +                if (response.status == 'success') {
    +
    +                    if(response.redirect)
    +                    {
    +                        window.location.replace(response.redirect);
    +                    }
    +                    else
    +                    {
    +                        var exp = ('0' + jQuery('#networkmerchant_expiration').val()).substr(-2) + jQuery('#networkmerchant_expiration_yr').val().substr(-2);
    +                        jQuery("input[name=billing-cc-exp]").val(exp);
    +                        jQuery('#co-payment-form').attr('action', response.url[0]).submit();
    +                    }
    +
    +                } else if (response.status == 'error') {
    +                    alert("An Error Occurred. Please try again later.");
    +                }
    +            },
    +            error: function (jqXHR, textStatus, errorThrown) {
    +                alert("An Error Occurred. Please try again later.");
    +                console.log('jqXHR:' + jqXHR + ' textStatus:' + textStatus + ' errorThrown:' + errorThrown);
    +            },
    +        });
    +    }
         jQuery('#payment-buttons-container button').click(function () {
             if(payment.currentMethod == 'networkmerchant'){
                 var validator = new Validation(payment.form);

                 if (payment.validate() && validator.validate()) {
                     jQuery(this).attr('disabled','disabled');
    -                jQuery.ajax({
    -                    url: baseUrl,
    -                    dataType: "json",
    -                    data: {
    -                        card_type: jQuery('#networkmerchant_cc_type').val(),
    -                        last4: jQuery('#networkmerchant_cc_number').val().substr(-4),
    -                        exp_month: jQuery('#networkmerchant_expiration').val(),
    -                        exp_year: jQuery('#networkmerchant_expiration_yr').val().substr(-2),
    -                        cctoken: jQuery('#sel_savedcards').val(),
    -                        storecc: jQuery('#cb_storecc').is(':checked'),
    -                    },
    -                    type: "POST",
    -                    success: function (response) {
    -                        if (response.status == 'success') {
    -
    -                            if(response.redirect)
    -                            {
    -                                window.location.replace(response.redirect);
    -                            }
    -                            else
    -                            {
    -                                var exp = ('0' + jQuery('#networkmerchant_expiration').val()).substr(-2) + jQuery('#networkmerchant_expiration_yr').val().substr(-2);
    -                                jQuery("input[name=billing-cc-exp]").val(exp);
    -                                jQuery('#co-payment-form').attr('action', response.url[0]).submit();
    -                            }
    -
    -                        } else if (response.status == 'error') {
    -                            alert("An Error Occurred. Please try again later.");
    -                        }
    -                    },
    -                    error: function (jqXHR, textStatus, errorThrown) {
    -                        alert("An Error Occurred. Please try again later.");
    -                        console.log('jqXHR:' + jqXHR + ' textStatus:' + textStatus + ' errorThrown:' + errorThrown);
    -                    },
    -                });
    +                networkmerchantSolupaySave();
    ```
