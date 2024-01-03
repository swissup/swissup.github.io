---
layout: default
title: Edit Template
description: Edit or create new email template.
keywords: edit or create new email template
category: Email Templates
---

# Edit Email Template
{:.no_toc}

* TOC
{:toc}

### Templates Grid

You can manage email templates in _Swissup_ ⇨ _General_ ⇨ _Email Templates_ grid.

To create new invoice template, press `Add New Template` button.

When you need to edit existing template click on its row in griid or select 'Edit' in 'Action' column.

![Templates grid](/images/m2/email-templates/grid.png)

### Template Edit Form

This form is pretty self-explanatory.

![Template Edit Form](/images/m2/email-templates/form.png)

 -  **Name** - internal template name. Use it to identify template in drop-down when you going to set this template in System Configuration.
 -  **Type** - plain text or HTML. Email type will be set based on email template type.

 -  **Subject** - email subject. It supports `trans` (translate) directive and same variables as Content.
 -  **Content** - email body (content). It is advanced text editor with HTML syntax highlight. It provides tag auto-closing and autocomplete for inline styles (Ctrl + Space). You can use variables here (`Insert Variable...` button) and add images (`Insert Image...` button) in the same way you add them in CMS pages.
 -  **Styles** - additional CSS for current template. These styles are added inside of a _"style"_ tag in the _"head"_ of the email.

### Template Preview

Use `Preview` button to see how email for this template will look like. It is opened in new popup and use some random data from your store.

![Template Preview](/images/m2/email-templates/preview.png)

### Create Template

In most cases you don't need to create email template from scratch.
Magento and module developers provide basic templates for emails they are sending. Feel free to use them as starting point.

With `Load Template` button select necessary template from drop-down list and load it for further modification.

The path to the configuration settings for loaded template displays in the *"Currently Used For"* field. Remember this path because you will need it later when you configure this new template to be used instead of the default template.

More about customizing template content you can find at [Customize email content](https://devdocs.magento.com/guides/v2.3/frontend-dev-guide/templates/template-email.html#customize-content) on Magento documentation site.

