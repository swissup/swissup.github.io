---
layout: default
title: Double verification for email field
description: "How to add double verification for email field in firecheckout"
keywords: double verification
category: Firecheckout
---

# Email double verification

 1. Create `custom.js` file - [Using custom.css and custom.js][custom_js]
 2. Add the following code inside created `custom.js`

    ```js
    document.observe('dom:loaded', function() {
        var email = $('billing:email');
        if (!email || !email.up('li')) {
            return;
        }

        email.up('li').insert({
            after: '<li class="wide"><input placeholder="Enter your email again please" class="input-text required-entry validate-both-emails" type="text"></li>'
        });

        Validation.add(
            'validate-both-emails',
            'Email did not match the email above',
            function(v, input) {
                var dependentInput = $('billing:email'),
                    isEqualValues  = input.value == dependentInput.value;

                if (isEqualValues && dependentInput.hasClassName('validation-failed')) {
                    Validation.test(this.className, dependentInput);
                }

                return isEqualValues;
            }
        );
    });
    ```

 3. Save file and disable js merge if needed.

#### Screenshot

![Email double verification in action](/images/m1/firecheckout/email-double-verification/validation-failed.png)
