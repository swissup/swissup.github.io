---
layout: default
title: Rich Snippets configuration
description: magento snippet module installation
keywords: " magento quick view extension, magento rich snippet extension, magento
google rich snippets extension, google rich snippets magento extension, google
rich snippets tool "
category: Rich Snippets
---

# Configuration
{:.no_toc}

* TOC
{:toc}

### General settings

![General settings](/images/m1/extensions/rich-snippet/general.png)

-	`Enabled` - select **Yes** to enable a module.
-	`Snippets type` - choose a snippet type from drop down. **Json** type and **Microdata Format** are available.

We recommend to choose “JSON Format” for invisible block with your store snippets. This type is simplified and clear to use. In case you want to show a visible block with snippets both in search results and on product page, you'd better to select Microdata type. 

-	`Breadcrumbs` - select **Yes** to show breadcrumbs in rich snippets.

### Product Data

![Product structured data settings](/images/m1/extensions/rich-snippet/product-data.png)

Structured data for product contains a lot of information.

With option `Structured Data` you can configurate basic data snippets. Such as  name, sku, mpn (gtin8, gtin13, gtin14, isbn). Just set data property name as select relatedt product attribute for it.

`Price Valid Until` sets default value for *priceValidUntil* property in *Offers* data snippet.

Use option `Product Brand Attribute` to setup brand data snippet. Different stores can name product brand differently (producer, manufacturer, brand, etc.). So with this option you select wich product attribute structered data should use as "brand".

### Conditions

**RichSnippets** have Product conditions support. You can apply conditions from 
existing attribute or create the new one.

Let's create the **Condition** attribute with options:

 1. Go to `Catalog > Attributes > Manage Attributes`
 2. Create new `Dropdown` attribute i.e. `Conditions`
 3. Add 4 options **New**, **Used**, **Damaged**, **Refurbished** (if you don't 
    have such conditions just create ones you need) they are supported by **Schema.org**

    ![Conditions attribute options](/images/m1/extensions/rich-snippet/conditions-options.png)

 4. Add your **Condition** attribute to required Attribute set
 5. Go to `System > Configuration > TM SEO Suite > Rich Snippets > Conditions` 
 6. Choose your **Condition** attribute from dropdown
    
    > It's usually in the end. If it's not visible - go to `System > Index Management`
    > and make all your store indexes **Reindex**
 
 7. Fill in all option IDs, __!!! they should be the SAME as you created in Condition attribute__
    (or in already existing attribute)

    ![Conditions configuration](/images/m1/extensions/rich-snippet/conditions-configuration.png)

 8. If all is set correct - go to any product configuration you applied **Condition**
    attribute. Choose one of options

    ![Conditions options selection](/images/m1/extensions/rich-snippet/conditions-selection.png)

> Note: Products that have no applied conditions or set incorrect will get **New** 
> condition in snipets automatically

### Organization

Fill out the fields to show the full information about your organization directly in search results.

![Organization snippets](/images/m1/extensions/rich-snippet/organization.png)

### Website

![Website snippets](/images/m1/extensions/rich-snippet/website.png) 

### Social links and cards

Social links snippets will help you to boost click-through rate for your shared URLs, get more traffic from social networks and increase a social media followers base. We do recommend you to implement rich snippets for social media.

![Social media snippets](/images/m1/extensions/rich-snippet/social-links.png)

-	`Enter the paths to your Facebook, Twitter, Google+, Instagram, or Linkedin pages.`

![Social media snippets](/images/m1/extensions/rich-snippet/social-card.png)

-	`Select **Yes** if you want to enable a **Twitter card snippet**. Twitter Cards improve a media experience to Tweets that link to your site content. After adding a snippet, users who Tweet your products will have a “card” added to their Tweet that will be visible to all of their followers.

#### You can also check:
{:.no_toc}

*   [Installation](../installation/)
*   [Testing your site with Google Rich Snippets testing tool](../testing/)
*	[FAQ](../faq/)
*   [Support](https://swissuplabs.com/contacts/)
*   [Forum](https://swissuplabs.com/magento-forum/)