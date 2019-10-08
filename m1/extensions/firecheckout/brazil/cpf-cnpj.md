---
layout: default
title: CPF/CNPJ code
description: CPF/CNPJ modifications for brazilian firecheckout
keywords: brazilian CPF/CNPJ code
category: Firecheckout
---

# CPF/CNPJ - code

To apply this `company&persone` code we suggest to use this free module - [CPF/CNPJ](https://github.com/rafaelstz/magento1-checkoutbrasil).
This exstension uses "taxvat" field, so after installation it, need to enable this field at the magento configuration.
The label and the placeholder of this field is still "taxvat". It can be changed at the `taxvat.phtml` file of this module.

Example of working CPF/CNPJ field, file - `taxvat.phtml`:

```
<label for="<?= $this->getFieldId('taxvat')?>"<?php if ($this->isRequired()) echo ' class="required"' ?>><?php if ($this->isRequired()) echo '<em>*</em>' ?><?php echo $this->__('CPF/CNPJ') ?></label>
<div class="input-box">
    <input type="text" id="<?= $this->getFieldId('taxvat')?>" name="<?php echo $this->getFieldName('taxvat')?>" value="<?php echo $this->escapeHtml($this->getTaxvat()) ?>" title="<?php echo Mage::helper('core')->quoteEscape($this->__('CPF/CNPJ')) ?>" class="input-text validar-cpf <?php echo $this->helper('customer/address')->getAttributeValidationClass('taxvat') ?>" <?php echo $this->getFieldParams() ?> />
</div>
```
```js
//<![CDATA[
    Validation.add('validar-cpf', '<?= $this->__('O número informado é inválido') ?>', function(v) {return validaCPFCNPJ.init(v,0);});
    document.observe("dom:loaded",() => {
        document.querySelectorAll('[id="<?php echo $this->getFieldId('taxvat')?>"]').forEach(($input) => {
            $input.addEventListener('input', (e) => {
                e.target.value = validaCPFCNPJ.mask(e.target.value);
            }, false)
        });
    })
//]]>
```

##### Next up

 -  [Back to Brazilian Utilities](/m1/extensions/firecheckout/brazil/)
 -  [Back to home](/m1/extensions/firecheckout)