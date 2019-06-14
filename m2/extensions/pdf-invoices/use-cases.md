---
layout: default
title: PDF Invoices Use cases
description: PDF Invoices use cases
keywords: magento pdf invoice use cases
category: PDF Invoices
---

# Use cases

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
