---
layout: default
title: PDF Invoices Known Issues
description: PDF Invoices known issues
keywords: magento pdf invoice known issues
category: PDF Invoices
---

# Known Issues

### The items table disappears when the display of the product image or barcode enabled

It happens because of a bug in tables logic in `mPDF` library.

Workaround can be added in file `vendor/mpdf/mpdf/src/Tag/Table.php` (lines 827-850):

```php
if (isset($c)) {
    if (!$this->mpdf->simpleTables) {
        ...
    } elseif ($this->mpdf->simpleTables) {
        ...
    }
}
```

### Magento 2.4.4+ Compatibility

With the release of Magento 2.4.4 and 2.4.3-p2, legacy email templates support was removed. PDF templates should be re-created based on the default templates to use new correct variables.
Also, it can be migrated manually, please check the guide here: [Migrate custom email templates](https://developer.adobe.com/commerce/frontend-core/guide/templates/email-migration/)

### Squares instead of text

Sometimes you can see squares in place of text in generated PDF file. It means your font is missing some `font-weight` or `font-style` used for this text.

It usually happens with Arabic fonts and product option labels that have bold italic styling:

![Squares in place of text](/images/m2/pdf-invoices/known-issues/squares-in-place-of-text.png)

The solution is adding the following styles to the `Template Styles` field:

```css
strong, em {
    font-weight: normal !important;
    font-style: normal !important;
}
```

### Download PDF link displays 404 error with Asynchronous sending enabled

When `Sales > Sales Emails > General Settings > Asynchronous sending` enabled order emails are sent by cron.
Download PDF link does not work in such case. We recommend using PDF attachment in such case instead of
Download PDF link.

### Download PDF link problem in Magento 2.3.4

Due to a bug in Magento 2.3.4 `$order` variable is empty in emails.
It causes missing order items in emails, please check the
[issue on Github](https://github.com/magento/magento2/issues/26882).

As we use the `$order` variable to generate download PDF link it stopped to work too.
The issue was fixed in Magento 2.3.6/2.4.0. For older versions, it can be fixed using
legacy mode for email templates.

When using [Email Templates](/m2/extensions/email-templates/) module, it can be done
in file `Controller/Adminhtml/Template/Save.php` on line 62:

```diff
--- a/Controller/Adminhtml/Template/Save.php
+++ b/Controller/Adminhtml/Template/Save.php
@@ -60,6 +60,7 @@ public function execute()
            }

            $template->addData($data);
+           $template->setIsLegacy(1);

            try {
                $template->save();
```

If you have previously created email templates, you will need to open and save
them again after the change.

### HTML and CSS support

PDF Invoices extension uses [mPDF](https://mpdf.github.io/) library
to generate PDF files from HTML and CSS.

mPDF library has limited HTML and CSS support.
Please check the following links for more information:

 -  [Supported HTML Tags](https://mpdf.github.io/html-support/html-tags.html)

 -  [Supported HTML Attributes](https://mpdf.github.io/html-support/html-attributes.html)

 -  [Supported CSS](https://mpdf.github.io/css-stylesheets/supported-css.html)
