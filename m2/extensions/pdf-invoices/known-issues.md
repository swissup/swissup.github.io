---
layout: default
title: PDF Invoices Known Issues
description: PDF Invoices known issues
keywords: magento pdf invoice known issues
category: PDF Invoices
---

# Known Issues

### Magento 2.2 Compatibility

Due to backward incompatible changes in template variables code in Magento 2.3,
PDF Invoices module does not work with previous Magento versions.

If you want to use the module with Magento 2.2, please apply the following changes:

 1. modify view/adminhtml/web/js/components/insert-variable.js

    ```diff
    --- a/view/adminhtml/web/js/components/insert-variable.js
    +++ b/view/adminhtml/web/js/components/insert-variable.js
    @@ -2,7 +2,7 @@ define([
         'jquery',
         'uiRegistry',
         'Swissup_PdfInvoice/js/components/form-button',
    -    "Magento_Email/js/variables"
    +    "Magento_Variable/variables"
     ], function ($, registry, Element) {
         'use strict';
     ```

 2. modify Ui/DataProvider/Form/TemplateDataProvider.php

    ```diff
    --- a/Ui/DataProvider/Form/TemplateDataProvider.php
    +++ b/Ui/DataProvider/Form/TemplateDataProvider.php
    @@ -18,7 +18,7 @@ class TemplateDataProvider extends \Magento\Ui\DataProvider\AbstractDataProvider
         protected $locator;

         /**
    -     * @var \Magento\Variable\Model\Source\Variables
    +     * @var \Magento\Email\Model\Source\Variables
          */
         protected $variables;

    @@ -42,7 +42,7 @@ class TemplateDataProvider extends \Magento\Ui\DataProvider\AbstractDataProvider
          * @param DataPersistorInterface $dataPersistor
          * @param DefaultLocator $locator
          * @param \Magento\Variable\Model\VariableFactory $variableFactory
    -     * @param \Magento\Variable\Model\Source\Variables $variables
    +     * @param \Magento\Email\Model\Source\Variables $variables
          * @param \Magento\Framework\Serialize\Serializer\Json $serializer
          * @param array $meta
          * @param array $data
    @@ -55,7 +55,7 @@ class TemplateDataProvider extends \Magento\Ui\DataProvider\AbstractDataProvider
             DataPersistorInterface $dataPersistor,
             DefaultLocator $locator,
             \Magento\Variable\Model\VariableFactory $variableFactory,
    -        \Magento\Variable\Model\Source\Variables $variables,
    +        \Magento\Email\Model\Source\Variables $variables,
             \Magento\Framework\Serialize\Serializer\Json $serializer,
             array $meta = [],
             array $data = []
    @@ -97,14 +97,15 @@ class TemplateDataProvider extends \Magento\Ui\DataProvider\AbstractDataProvider
          */
         private function getVariables($template)
         {
    -        $variables = $this->variables->toOptionArray(true);
    +        $variables = [];
    +        $variables[] = $this->variables->toOptionArray(true);
             $customVariables = $this->variableFactory->create()->getVariablesOptionArray(true);
             if ($customVariables) {
    -            $variables = array_merge_recursive($variables, $customVariables);
    +            $variables[] = $customVariables;
             }

             if ($template->getId() && ($templateVariables = $template->getVariablesOptionArray())) {
    -            $variables = array_merge_recursive($variables, [$templateVariables]);
    +            $variables[] = $templateVariables;
             }

             return $variables;

    ```

### HTML and CSS support

PDF Invoices extension uses [mPDF](https://mpdf.github.io/) library
to generate PDF files from HTML and CSS.

mPDF library has limited HTML and CSS support.
Please check the following links for more information:

 -  [Supported HTML Tags](https://mpdf.github.io/html-support/html-tags.html)

 -  [Supported HTML Attributes](https://mpdf.github.io/html-support/html-attributes.html)

 -  [Supported CSS](https://mpdf.github.io/css-stylesheets/supported-css.html)
