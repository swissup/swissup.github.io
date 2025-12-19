---
layout: default
title: Brazilian masks for the phone fields
description: create brazilian masks for the phone fields
keywords: brazilian phone masks
category: Firecheckout
---

# Phone Fields - masks

First of all need to install the mask library which let you to create any masks for the next fields: `phone`, `date`, `currency`, `zip code`, `percentage`, `email`, etc.

> To install the library, follow this link [Text Mask](https://github.com/text-mask/text-mask/tree/master/vanilla#readme).

After installation it, do not forget to apply the script:
```js
<script type="text/javascript" src="./node_modules/vanilla-text-mask/dist/vanillaTextMask.js"/>
```


Example, that makes phone masks for the billing address fields "telephone" and "fax":

 1. Create `custom.js` file. [custom.js](/m1/extensions/firecheckout/using-customcss-and-customjs/)
 2. Add the following code into this file

```js
    document.observe('dom:loaded', function() {
        var addressTypes = ['billing'];
        addressTypes.each(function(addressType) {

            var phone = document.querySelector('[name="billing[telephone]"]');

            var maskedInputController = vanillaTextMask.maskInput({
                    inputElement: phone,
                    guide: false,
                    mask: function (raw) {
                        var phoneMask = ['(', /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];

                        if (raw.toString().length > phoneMask.length) {
                            phoneMask= ['(', /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];
                        }

                        return phoneMask;
                    }
            });

            var fax = document.querySelector('[name="billing[fax]"]');

            var maskedInputController = vanillaTextMask.maskInput({
                    inputElement: fax,
                    guide: false,
                    mask: function (raw) {
                        var faxMask = ['(', /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];

                        if (raw.toString().length > faxMask.length) {
                            faxMask= ['(', /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];
                        }

                        return faxMask;
                    }
            });

        });

    });
```

##### Next up

 -  [Back to Brazilian Utilities](/m1/extensions/firecheckout/brazil/)
 -  [Back to home](/m1/extensions/firecheckout/)