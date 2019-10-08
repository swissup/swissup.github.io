---
layout: default
title: AddressAutocomplete using brazilian zip code
description: address autofill for brazilian firecheckout
keywords: address autofill
category: Firecheckout
---

# Address Autocomplete (using "zip_code")

To apply this function at your checkout page, we suggest to use this free module - [Address Autocomplete](https://gist.github.com/rafaelpatro/fe807e9699adadaf56225e2157e7b49e)

> We already improved this js code by adding ragion mapping code and fixed some small issues.
> So you may just copy it.
> <br>Example:

```js
var Trail = function () {
  this.region = {
    'AC': 'Acre',
    'AL': 'Alagoas',
    'AP': 'Amapá',
    'AM': 'Amazonas',
    'BA': 'Bahia',
    'CE': 'Ceará',
    'DF': 'Federal District',
    'ES': 'Holy Spirit',
    'GO': 'Goiás',
    'MA': 'Maranhão',
    'MT': 'Mato Grosso',
    'MS': 'Mato Grosso do Sul',
    'MG': 'Minas Gerais',
    'PA': 'Para',
    'PB': 'Paraíba',
    'PR': 'Paraná',
    'PE': 'Pernambuco',
    'PI': 'Piauí',
    'RJ': 'Rio de Janeiro',
    'RN': 'Rio Grande do Norte',
    'RS': 'Rio Grande do Sul',
    'RO': 'Rondônia',
    'RR': 'Roraima',
    'SC': 'Santa Catarina',
    'SP': 'Sao Paulo',
    'SE': 'Sergipe',
    'TO': 'Tocantins'
  };

  this.fieldmap = [
    {'logradouro': 'input[name*=street][name$=\[\]]:nth(0)'},
    {'complemento': 'input[name*=street][name$= \[\]]:nth (2)'},
    {'bairro': 'input[name*=street][name$=\[\]]:nth(3)'},
    {'localidade': 'input[name*=city]'},
    {'uf': 'input[name*=region]'},
    {'uf': 'select[name*=region_id]'}
  ];

  this.magentoRegionMapping = {
    'AC': '566',
    'AL': '567',
    'AP': '568',
    'AM': '569',
    'BA': '570',
    'CE': '571',
    'DF': '572',
    'ES': '573',
    'GO': '574',
    'MA': '575',
    'MT': '576',
    'MS': '577',
    'MG': '578',
    'PA': '579',
    'PB': '580',
    'PR': '581',
    'PE': '582',
    'PI': '583',
    'RJ': '584',
    'RN': '585',
    'RS': '586',
    'RO': '587',
    'RR': '588',
    'SC': '589',
    'SP': '590',
    'SE': '591',
    'TO': '592'
  }

  //this.url = 'http://cep.republicavirtual.com.br/web_cep.php?cep=%postcode&formato=json';
  //this.url = 'https://apps.widenet.com.br/busca-cep/api/cep.json?code=%postcode';
  this.url = 'https://viacep.com.br/ws/%postcode/json/';
};

Trail.prototype = {

  getSelectors: function () {
    return this.fieldmap.map (function (elem) {
      for (var i in elem) return elem [i]
    });
  },

  isBadIE: function () {
    if ($ (navigator) .appVersion.match (/ MSIE 10 /g)
      || $ (navigator) .appVersion.match (/ MSIE 9 /g)
      || $ (navigator) .appVersion.match (/ MSIE 8 /g)
    ) {
      return true;
    }
    return false;
  },

  stopProgress: function (elem) {
    elem.up (). removeClassName ('loader-postcode');
    elem.form.removeClassName ('field-disabled');
    return this;
  },

  startProgress: function (elem) {
    elem.form.addClassName ('field-disabled');
    elem.up (). addClassName ('loader-postcode');
    return this;
  },

  /**
   * Method to simplify the cleaning fields process
   */
  clear: function (elem) {
    elem.form.select (this.getSelectors ()). each (function (e) {
      e.setValue ('');
    });
    return this;
  },

  setFieldValue: function (field, value) {
    var optionList, optionFirst;
    if (field.name === 'billing[region_id]') {
      value = this.magentoRegionMapping[value];
    }
    if (optionList = field.select('option[textContent =' + this.region[value] + ']')) {
      if (optionFirst = optionList.first()) {
        optionFirst.selected = 'selected';
        return this;
      }
    }
    field.setValue (value);
    return this;
  },

  /**
   * Loads the result to the respective fields
   */
  autofill: function (elem, result) {
    var _this = this;
    this.fieldmap.each (function (object) {
      for (var key in object) {
        var field = null, fieldFirst = null;
        if (field = elem.form.select (object [key]))
          if (fieldFirst = field.first ())
            _this.setFieldValue (fieldFirst, result [key]);
      }
    });
    return this;
  },

  /**
   * Sends the request and manages the result
   */
  init: function (elem) {
    this.startProgress (elem);
    var _this = this;
    jQuery.get (this.url.replace (/%postcode/g, elem.value), {zip: elem.value}, function (response) {
      if (response != false) {
        _this.autofill (elem, response);
      } else {
        _this.clear (elem);
      }
      _this.stopProgress (elem);
    }). fail (function () {
      _this.clear (elem);
      _this.stopProgress (elem);
    });
    return this;
  }
};

(function () {
  var css = '\
    .loader-postcode::after {\
      content: url (/skin/frontend/rwd/default/images/opc-ajax-loader.gif); \
    } \
    .field-disabled {\
      opacity: 0.5; \
    } \
  ';
  document.head.insert ({bottom: new Element ('style', {type: 'text / css'}). update (css)});
  $$('input[name*=postcode]').each(function (elem) {
    elem.observe('change', function (e) {
      if (this.value.length == 8) {
        (new Trail()).init(this);
      }
    });
  });
})();
```
> ##### How to use this js code:
 - Using custom.js file - [custom.js](/m1/extensions/firecheckout/using-customcss-and-customjs/)
 - Using firecheckout configuration - [Additional content](/m1/extensions/firecheckout/configuration/firecheckout/#additional-content)

##### Next up

 -  [Back to Brazilian Utilities](/m1/extensions/firecheckout/brazil/)
 -  [Back to home](/m1/extensions/firecheckout)