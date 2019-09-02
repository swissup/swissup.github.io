---
layout: default
title: PDF Invoices Use cases
description: PDF Invoices use cases
keywords: magento pdf invoice use cases
category: PDF Invoices
---

# Use cases

{:.no_toc}

* TOC
{:toc}

### Add download link to email

![PDF grid](/images/m2/pdf-invoices/use-cases/email-download.png)

To display download PDF link in emails, edit email template under *Marketing > Email Templates*
and add the following code:

 -  for order PDF

    ```txt
    {% raw %}{{block class="Swissup\PdfInvoice\Block\Email\Documents" area="frontend" order=$order}}{% endraw %}
    ```

 -  for invoice PDF

    ```txt
    {% raw %}{{block class="Swissup\PdfInvoice\Block\Email\Documents" area="frontend" order=$order invoice=$invoice}}{% endraw %}
    ```
 -  for shipment PDF

    ```txt
    {% raw %}{{block class="Swissup\PdfInvoice\Block\Email\Documents" area="frontend" order=$order shipment=$shipment}}{% endraw %}
    ```

 -  for credit memo PDF

    ```txt
    {% raw %}{{block class="Swissup\PdfInvoice\Block\Email\Documents" area="frontend" order=$order creditmemo=$creditmemo}}{% endraw %}
    ```

### Using barcodes and QR codes

You can use barcodes and QR codes in PDF templates.

##### Barcodes

Barcode can be added with `barcode` tag:

```html
<barcode code="978-0-9542246-0" type="EAN13" text="1" size="1" height="1" />
```

Attribute   | Description
------------|----------------------------------------------------------------------------------
code        | Specifies the code to translate to a barcode (required)
type        | Specifies the type of barcode (default: EAN13)
text        | Specifies whether to show the code at the top of an EAN13 barcode (default: 0)
size        | Specifies the size of the barcode (default: 1)
height      | Specifies the height of the barcode (default: 1)

You can find available barcode types and examples on
[mPDF barcode manual](https://mpdf.github.io/reference/html-control-tags/barcode.html)

##### QR codes

QR code can be added with `barcode` tag with `type="QR"` attribute:

```html
<barcode code="Your message\ngoes here" type="QR" size="0.8" error="M" disableborder="1" />
```

Attribute       | Description
----------------|----------------------------------------------------------------------------------
error           | Specifies QR code error level: L, M, Q, H (default: L)
disableborder   | Display QR code without border (default: 0)

QR code code can contain `\n` or `\r\n` sequences
that will be converted to `LF` or `CRLF` characters.

>If you get error when using QR code, make sure you have `mpdf/qrcode` installed.
>
>It can be installed with the following SSH command:
>
> `composer require mpdf/qrcode`

### Display product image in items table

To display product image in items table in PDF, add `image="1"` param to items code:

```
{% raw %}{{layout area="frontend" handle="sales_email_order_invoice_items" invoice=$invoice order=$order image="1"}}{% endraw %}
```

### Display product SKU barcode or QR code in items table

To display product sku QR code in items table in PDF, add `barcode="QR"` param to items code:

```
{% raw %}{{layout area="frontend" handle="sales_email_order_invoice_items" invoice=$invoice order=$order barcode="QR"}}{% endraw %}
```

You can use all supported barcode types, e.g. barcode="QR" or barcode="C39".
