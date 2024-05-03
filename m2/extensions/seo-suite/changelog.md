---
layout: default
title: Changelog
description: Recent updates in SEO Suite package
keywords: seo suite updates, seo suite changelog
category: SEO Suite
---

# Changelog

### Version 1.18.0

> Apr 23, 2024

Magento 2.4.7 fixes. New features added. Better stability.

*swissup/module-hreflang — 1.6.6 (was 1.6.1)*

 -  NEW: option at storeview level to set custom locale.
 -  Integration updates for Magefan Blog, Amasty Store Locator and Magento XML Sitemap.
 -  Overall stability improvements.

*swissup/module-rich-snippets — 1.7.3 (was 1.6.3)*

 -  NEW: option to set image size for product data snippet.
 -  NEW: FAQ snippet widget.
 -  Added OnlineStore to the Organization Type dropdown.
 -  Shipping details snippet. It works with table rate shipping and matrix rate shipping from WebShopApps vendor. Cache snippet data to avoid too many shipping requests to online carriers.

*swissup/module-seo-canonical — 1.11.9 (was 1.11.8)*

 -  NEW: setting for each category in Magento Admin to set custom canonical URL.

*swissup/module-seo-cross-links — 1.1.13 (was 1.1.12)*

 -  NEW: Magefan Blog integratation.

*swissup/module-seo-templates — 1.7.7 (was 1.7.4)*

 -  NEW: directive `random`. Randomly outputs string from list of strings. Example - `{% raw %}{{random "Get|Purchase|Buy|Acquire|Find|Check"}}{% endraw %}`.
 -  ACL updates.

*swissup/module-seo-urls — 1.5.50 (was 1.5.43)*

 -  Improved url resolving when filter name occurs in filter value.
 -  Smile module integration updated. Fix PHP error "Illegal offset type in isset or empty"

### Version 1.17.0

> Jul 13, 2023

Code improvement for all included modules.

*swissup/module-hreflang — 1.6.1 (was 1.5.8)*

 -  NEW: set hreflang link for Catalog Category in Magento Admin. It can be useful when have multiple stores at your Magento instance and you need to link categories.
 -  NEW: import and export hreflang links for CMS Pages and Catalog Categories.

*swissup/module-rich-snippets — 1.6.3 (was 1.6.1)*

 -  Fix exception "Product that you are trying to add is not available". Occurs when product is not for sale and module tries to build shipping details for it.
 -  Improve (and fix) shippingDetails calculation.

*swissup/module-seo-pager — 1.3.3 (was 1.3.0)*

 -  Fix not updated title of paginated content when page cache enabled.
 -  Fixed not working "Relevance" sorting option on search results page.

*swissup/module-seo-urls — 1.5.43 (was 1.5.41)*

 -  Fix error - category not found at attribute page filtered by category.

### Version 1.16.0

> May 31, 2023

*swissup/module-hreflang — 1.5.8 (was 1.5.6)*

 -  Show all available store views for "Default store" option in Magento Admin Configuration on store view level.
 -  Fixed class "Zend_Uri" not found in Magento 2.4.6.

*swissup/module-rich-snippets — 1.6.1 (was 1.5.4)*

 -  Product structured data. Provide currect data for grouped products.
 -  Add support of Google merchant listing fields: “shippingDetails” and “hasMerchantReturnPolicy”. Added dedicated subsections in “Product structured data” section in module settings in Stores Configuration.
 -  Reorganized section “Product structured data” to be more intuitive.

*swissup/module-seo-images — 1.3.18 (was 1.3.17)*

 -  Add DB index for field `target_file` to speed up queries.

*swissup/module-seo-pager — 1.3.0 (was 1.2.11)*

 -  Implement Google recommendations for paginated product listings with new strategy "Canonical url to each page (Google way)". More details you can find at [module docs](https://docs.swissuplabs.com/m2/extensions/seo-pager/configuration/#general).

*swissup/module-seo-templates — 1.7.3 (was 1.6.5)*

 -  Allow to use translations in metadata templates. More details at [module docs](https://docs.swissuplabs.com/m2/extensions/seo-templates/use-cases/i18n-template/).
 -  New condition for category templates - "Layerede Navigation / Applied filter".

*swissup/module-seo-urls — 1.5.41 (was 1.5.40)*

 -  Improve compatibility with Swissup Ajaxlayerednavigation module and SEO Urls setting "Use direct URL to subcategory".

### Version 1.15.0

> Mar 31, 2023

 -  Compatibility with Magento 2.4.6 and feature fixes for PHP 8.2.

*swissup/module-hreflang — 1.5.6 (was 1.5.1)*

 -  Don’t add hreflang to page that have canonical pointing to other page.

*swissup/module-rich-snippets — 1.5.4 (was 1.4.20)*

 -  Add weight unit information to product snippet.
 -  Add opening hours config for organization data snippet.
 -  Option in module configuration to set store (organization) type for organization snippet.
 -  Don't render website data snippet when no data is set.
 -  Integration with Swissup_Askit and Swissup_Knowledgebase.
 -  Product structured data. Allow to override `@id`, `@type` and `@context` with attributes.
 -  Fix "Can’t check requested quantity for products…".
 -  Some additional fixes for PHP 8.2.

*swissup/module-seo-cross-links — 1.1.11 (was 1.1.7)*

 -  Fixed broken characters (currency, etc) in widgets.
 -  Fixed broken cyrillic characters after DOMDocument saveHTML.

*swissup/module-seo-images — 1.3.17 (was 1.3.15)*

 -  Fix error during during CLI reindex about exhausted memory.
 -  Support media url option "Image optimization based on query parameters".

*swissup/module-seo-urls — 1.5.40 (was 1.5.33)*

 -  Compatibility with Blueskytechco_LayeredAjax and Smile_Elastcsuite.
 -  Magento Admin - show SEO Urls tab at attribute when it is filterable.
 -  Fix not sligified urls when query parameter value is 0.

*swissup/module-seo-xml-sitemap — 1.1.14 (was 1.1.12)*

 -  Add Mirasvit Knowledge Base urls to sitemap when module enabled.


### Version 1.14.0

> Sep 19, 2022

  - Compatibility with Magento 2.4.5 and feature fixes for PHP 8.1.
  - Perfomance improvements.

*swissup/module-hreflang — 1.5.1 (was 1.4.11)*

  - NEW: set hreflang link for CMS page in Magento Admin.
  - Correct hrefalang data for attribute page on storefront
  - Fixes for XML sitemap: exclude links for store views where product is disabled; remove store code in hreflang once respective option enabled; add hreflang data for Highlight Pages and Attribute Pages.

*swissup/module-rich-snippets — 1.4.20 (was 1.4.18)*

  - Fix error - Argument 1 passed... must be of the type array, null given. Occurs when store migrated from Magento 1.

*swissup/module-seo-canonical — 1.11.6 (was 1.11.5)*

  - Fix missing caninical URL at attribute pages.

*swissup/module-seo-cross-links — 1.1.7 (was 1.1.6)*

  - NEW: link Tooltip.
  - Fix possible issue of using ampersand and slash symbols in a keyword. Notice added.

*swissup/module-seo-xml-sitemap — 1.1.12 (was 1.1.11)*

  - Remove hard-coded dependency with SeoHtmlSitemap module. Now you can disable module Swissup_SeoHtmlSitemap without harm to XML Sitemap.

### Version 1.13.0

> Apr 27, 2022

 -  Compatibility with Magento 2.4.4 and PHP 8.1.
 -  Update ACL (Access Control List) for all included modules.
 -  Convert deprecated php installation scripts into XML schemes.

*swissup/module-hreflang — 1.4.11 (was 1.4.10)*

 -  Amasty_Storelocator and Magezon ShopByBrand integrations.

*swissup/module-rich-snippets — 1.4.18 (was 1.4.15)*

 -  Performance improvements for configurable products with big number of options.
 -  Correct price for grouped product data snippet when sub product have discounts.

*swissup/module-seo-canonical — 1.11.5 (was 1.11.3)*

 -  **NEW** config option for product canonical - "Use product attribute for canonical". When product attribute value starts with 'http' then it is used directly. Otherwise attribute value will be appended to base URL.

*swissup/module-seo-cross-links — 1.1.6 (was 1.1.2)*

 -  Some optimizations and performance improvements.

*swissup/module-seo-urls — 1.5.31 (was 1.5.28)*

 -  Fix missing translations when category filter applied. Most often issue occurs with ajax requests in Swissup_Ajaxlayerednavigation.
 -  Fix unable to change attribute/option label on store view. Issue occurs when identical label exists for other store view.

### Version 1.12.2

> Nov 30, 2021

*swissup/module-hreflang — 1.4.10 (was 1.4.6)*

  - Integration for FishPig_WordPress with FishPig_WordPress_Multisite.
  - Don't add hreflang item for product when it is disabled at respective store view.
  - Compatibility with Magento Commerce (Enterprise).

*swissup/module-rich-snippets — 1.4.15 (was 1.4.13)*

  - Config options to disable reviews and stock data from product structured data block.
  - Add '@id' for product data snippet. It is usefull for integration with third-party modules. Id is equal to product URL.
  - Fixed invalid object type for field "brand".

*swissup/module-seo-core — 1.3.5 (was 1.3.4)*

  - Improve Model\Url stability. Work around logic when parse_url can't handle input.

*swissup/module-seo-cross-links — 1.1.2 (was 1.1.1)*

  - Fixed performance issue replacing plugin around to after.

*swissup/module-seo-html-sitemap — 1.1.11 (was 1.1.10)*

  - Added config to hide the highlight pages from sitemap.
  - Use separate group for merged css. This makes global bundle persistent across all site.
  - Fixed storeId 'null' to display cms pages on sitemap.

*swissup/module-seo-urls — 1.5.28 (was 1.5.27)*

  - Fix 404 page when applied filter contains string same as category name.

### Version 1.12.1

> Aug 2, 2021

*swissup/module-hreflang — 1.4.6 (was 1.4.4)*

  - Integration with Attribute Pages module.
  - Integration with Magefan_Blog module.
  - Don't add hreflang item for product when product doesn't assigned to item's website.

*swissup/module-seo-canonical — 1.11.3 (was 1.11.2)*

  - Fixed incorrect canonical Url at homepage. Isuse occurs when homepage config is changed by store owner and there are multiple pages with the same identifier.

*swissup/module-seo-core — 1.3.4 (was 1.3.2)*

  - Remove % from slugified string (when fallback used). Since it cuases problem for SEO Images.
  - Add model CMS to check if current CMS page is homepage.

*swissup/module-seo-cross-links — 1.1.1 (was 1.0.5)*

  - Apply crosslinks for extra product attribute.
  - Added target attribute for each cross-link.
  - Forbid to create crosslinks on the pages with url path like a keyword.
  - Fixed acl for the menu item.

*swissup/module-seo-html-sitemap — 1.1.10 (was 1.1.9)*

  - Fixed warning: count parameter must be an array or an object that implements Countable.

*swissup/module-seo-images — 1.3.13 (was 1.3.11)*

  - Solved possible errors at products page when image URL contains non English characters. And URL is really long (more than 150 characters).

*swissup/module-seo-urls — 1.5.27 (was 1.5.25)*

  - Fixed not working option "Redirect to site homepage ...". Option doesn't work when hopepage config is changed by store owner and there are multiple pages with the same identifier.
  - Fixed error - Call to a member function getLabel() on null.

*swissup/module-seo-xml-sitemap — 1.1.10 (was 1.1.9)*

  - Fixed issue when CMS page used for homepage still appears in XML Sitemap. Isuse occurs when homepage config is changed by store owner and there are multiple pages with the same identifier.

### Version 1.12.0

> May 7, 2021

*swissup/module-seo-templates — 1.6.0 (was 1.5.19)*

  - Long waited feature is finally here - template for "H1 Tag" at product and category pages.

*swissup/module-seo-canonical — 1.11.2 (was 1.11.1)*

  - Move domain update options in module config to "Category" and "Product" sections. It gives store admin more flexibility in setting us canonical urls behavior.

### Version 1.11.1

> Apr 27, 2021

*swissup/module-rich-snippets — 1.4.13 (was 1.4.12)*

  - Fixed foreach warning when configurable product has no children.

*swissup/module-seo-canonical — 1.11.0 (was 1.0.9)*

  - Config option to use specific store view for canonical URLs. In other words you can change base url of canonical by selecting store view.
  - Config option to replace base of canonical. Use it when you need to link canonical to other domain and if is not in your Magento instance.

*swissup/module-seo-core — 1.3.1 (was 1.3.0)*

  - Fixed missing module icons when merge enabled.

*swissup/module-seo-html-sitemap — 1.1.9 (was 1.1.8)*

  - Sitemap page - don't show section when there is no items.
  - Minor templates refactoring.

*swissup/module-seo-images — 1.3.11 (was 1.3.9)*

  - Solved "Unique constraint violation found" exception during catalog image resize at non-english stores.
  - Minor templates refactoring.

*swissup/module-seo-templates — 1.5.19 (was 1.5.18)*

  - Fixed "products" directive for category template. Previously this directive didn't respect category and collected data for root category.

*swissup/module-seo-xml-sitemap — 1.1.9 (was 1.1.8)*

  - Improve data sorting in XML file. First items with higher priority. Then sort by latest update date and url when priority is equal.

### Version 1.10.1

> Feb 26, 2021

*swissup/module-seo-images — 1.3.9 (was 1.3.8)*

  - Decode spec symbols in image filename. Fixes missing images.

*swissup/module-seo-templates — 1.5.18 (was 1.5.17)*

  - Improve verification if entity metadata is empty.

*swissup/module-seo-urls — 1.5.25 (was 1.5.24)*

  - Improve compatibility with Swissup Ajaxlayerednavigation - define hardcodded filter only when Ajaxlayerednavigation module is enabled.

### Version 1.10.0

> Jan 13, 2021

Move section "Swissup SEO Suite" under section "Swissup". Now you have config item "SEO Suite" under "Swissup" at System Configuration in Magento Admin.

*swissup/module-rich-snippets — 1.4.12 (was 1.4.11)*

  - Fixed structured data error about review for product at Magento 2.4.x.

*swissup/module-seo-html-sitemap — 1.1.8 (was 1.1.7)*

  - Few fixes to add Highlight pages and Attribute (Brand) pages to sitemap. You have to update Highlight and Attribute Pages modules.

*swissup/module-seo-pager — 1.2.8 (was 1.2.6)*

  - Integrate page number in title feature with AskIt module (at questions page).

*swissup/module-seo-urls — 1.5.24 (was 1.5.22)*

  - Fixed possible warning - strpos empty needle.

### Version 1.9.5

> Nov 26, 2020

*swissup/module-hreflang — 1.4.3 (was 1.4.2)*

  - Fixed incorrect product URL for other stores in hreflang block.

*swissup/module-rich-snippets — 1.4.11 (was 1.4.10)*

  - "Price Valid Until" can be dynamic date - offset from today.
  - Code refactoring.

*swissup/module-seo-canonical — 1.0.8 (was 1.0.7)*

  - Fixed incoppert canonical URL for product when its parent is disabled.

*swissup/module-seo-core — 1.2.5 (was 1.2.4)*

  - PHP 7.4 compatibility fix - deprecated passing glue string after array with implode.

*swissup/module-seo-images — 1.3.7 (was 1.3.6)*

  - Improve module stability. Prevent DB exception - integrity constraint violation.

*swissup/module-seo-templates — 1.5.16 (was 1.5.13)*

  - Fixed missing generated metadata on category page for viewed category.
  - Slightly speed up template generating.
  - Remove cron task and CLI command. Use indexes instead and `bin/magento indexer:reinder [index_id]`.
  - Categories directive - don't include root category in result when template is created on 'All Store Views' level.

*swissup/module-seo-urls — 1.5.22 (was 1.5.16)*

  - Fixed array_flip warning during reindex.
  - Option to use direct URL to subcategory in category filter. Enabled by default.
  - Fixed filter urls with other storeview code at catalog search page.
  - Fixed hreflangs at catgeory pages when filter applied. It still added store code to URL even when hreflang option set not to do so.

### Version 1.9.4

> Aug 1, 2020

Main theme of this release is Magento 2.4 compatibility.

*swissup/module-seo-pager — 1.2.6 (was 1.2.5)*

  - Don't load product collection too early - fixed issue at Magento 2.4.0 at product listing when pagination and limits are ignored.

*swissup/module-seo-xml-sitemap — 1.1.7 (was 1.1.6)*

 -  Added missing custom links to sitemap XML.

*swissup/module-seo-images — 1.3.6 (was 1.3.5)*

  - Fixed issue at Magento 2.4.0 at product listing when pagination and limits are ignored.

*swissup/module-seo-templates — 1.5.13 (was 1.5.12)*

  - Fixed issue at Magento 2.4.0 at product listing when pagination and limits are ignored.

### Version 1.9.3

> Jul 22, 2020

Main theme of this release is speed up category page rendering as well as other pages with product listing. Reduce number of DB queries and TTFB.

*swissup/module-hreflang — 1.4.2 (was 1.4.0)*

  - Reduce number of DB queries. Collect all nessecery data with one DB querie. Previously number of queries was equal to number of storeviews.
  - Do not include storeview into hreflangs when it is disabled in Admin.

*swissup/module-rich-snippets — 1.4.10 (was 1.4.9)*

  - Implement product availability pre-order. Product availability can be preorder only when "Backorders" option value is "Allow Qty Below 0 and Notify Customer".

*swissup/module-seo-html-sitemap — 1.1.6 (was 1.1.5)*

  - Improve compatibility with third-party extensions.

*swissup/module-seo-images — 1.3.5 (was 1.3.2)*

  - Speed up images index via bin/magento command.
  - Reduce number of DB queries and speed up category page rendering as well as other pages with product listings.
  - Fixed warning for chines locales when `cocur/slugify` package installed (Empty needle in ...module-seo-urls/Helper/Filter.php on line 143).

*swissup/module-seo-pager — 1.2.5 (was 1.2.4)*

  - Change the way how page title is updated. To prevent early collection load and fix 'Illegal state' error when Swissup_Pagespeed is enabled with option critical CSS.

*swissup/module-seo-templates — 1.5.12 (was 1.5.8)*

  - Fixed 'categories' directive for products and 'parents' directive for categories. There was an issue at multilingual stores - category names were in incorrect language.
  - Improve performance. Update category and product metadata only at pages where it is really necessary. Reduce number of DB queries at category page and other pages with product listings (e.g. search results page).

*swissup/module-seo-urls — 1.5.16 (was 1.5.11)*

  - Fixed params resolving logic when yes/no filter and 'No' selected.
  - Less DB queries. Faster layered navigation. Lower TTFB.


### Version 1.9.1

> May 7, 2020

  - All modules from SEO Suite got localization (translations).

*swissup/module-hreflang — 1.4.0* (was 1.3.7)

  - Fixed empty hreflang value for chines locales when "Remove region...".
  - Build hreflang links using all websites of Magento instance.

*swissup/module-rich-snippets — 1.4.8* (was 1.4.9)

  - Compatibility with Firebear_ConfigurableProducts module.

*swissup/module-seo-urls — 1.5.11* (was 1.5.10)

  - Add `nofollow` to category filter in layered navigation.


### Version 1.9.0

> Mar 10, 2020

*swissup/module-seo-images — 1.3.0* (was 1.1.3)

 -  Add SEO Images Magento Index to speed up initial page rendering. This index speed up page generation before it is cached by Magento.
 - "Production Mode" feature (beta). Suites best for single store Magento instances.

*swissup/module-hreflang — 1.3.7* (was 1.3.6)

 -  Fixed "Illegal offset type..." warning during placing order. Occurs when 'Locale as subfolder in URLs'. 46b805

*swissup/module-seo-templates — 1.5.7* (was 1.5.4)

 -  Plugin instead of event on frontend. Works better when it comes to integrating with third-party modules. E.g. "Firebear Improved Configurable Product".
 -  Improve price directive for products. You can set number of decimals, decimal point symbol and thousands separator symbol.

*swissup/module-seo-urls — 1.5.10* (was 1.5.9)

 -  Fixed incorrect catgeory urls in hreflangs. Occurs when category has different urls on different store views.

### Version 1.8.4

> Mar 10, 2020

 -  Improve "slugs" for in SEO Urls and SEO Images - remove double quotes, replace non-breakable space with dash (-).
Than nbsp will be replaced with dash (-).

*swissup/module-hreflang — 1.3.6* (was 1.3.4)

 -  Fixed poorly worked urls at Magento 2.3.4.
 -  Force remove store_code parameter from url.

*swissup/module-seo-images — 1.1.3* (was 1.1.2)

 -  Fixed compatibility with Magento 2 EE (Enterprise Edition).

### Version 1.8.3

> Jan 8, 2020

 -  Improve modules stability on Magento Cloud. Fix error "Can't create directory ...Hreflang/Model/CurrentUrl/...".
 -  Based translations added.

*swissup/module-seo-canonical — 1.0.6* (was 1.0.4)

 -  Don't add canonical to root category. In most cases root category used by third-party extensions to show some products. Like brand pages or other landing pages.

*swissup/module-seo-urls — 1.5.8* (was 1.5.7)

 -  Show 404 page when unrecognized characters are in url. This helps to avoid SEO issues about duplicate content. Previously you could add anything at the end of the URL, and it will always resolve.

### Version 1.8.2

> Dec 13, 2019

 -  Improved and tested with Magento Enterprise Cloud Edition.

### Version 1.8.1

> Dec 9, 2019

*swissup/module-hreflang — 1.3.3* (was 1.3.2)

 -  Improve module stability.

*swissup/module-seo-templates — 1.5.3* (was 1.5.0)

 -  Fixed "Area code is not set on 2.2.x" in bin/magento.
 -  Improve categories directive for product templates. Do not output parent category when product assigned to child category and parent category.

### Version 1.8.0

> Nov 7, 2019

*Metadata templates (1.5.0)*:

 -  With this version you can generate alternate text for product images.
 -  CLI command to generate metadata - `bin/magento swissup:seotemplates:generate`.
 -  Significant improvements for metadata generation via Cron. No more problems with Magento Cache when job is running.
 -  Overall code refactoring to meet Magento Guides.

*Rich Snippets (1.4.3)*:

 -  Change how configurable product is presented in data snippet. Now it is a product with multiple offers.
 -  User can specify properties in `offers` and `aggregatedRating` parts of data snippet. It is possible with _"Structured data"_ option in config. Syntax example for _"Property Name"_ column - `offers/mpn`.

### Version 1.7.1

> Oct 4, 2019

Minor update of readme-files in all submodules.

*SEO Images (1.1.0):*

 - Fixed compatibility with Magento 2.3.0 and lower.
 - Don't expose additional image parameters in image URL. Its mostly useful when store uses watermarks for images.

### Version 1.7.0

> Sep 27, 2019

New submodule included into Suite - [**SEO Images**](/m2/extensions/seo-images/). Module maintains names of product images.

*Regional URLs (hreflang) (1.3.1):*

 -  Integrated with Swissup AMP.
 -  Compatibility with Magento 2.3.x.

*Rich Snippets (1.4.3)*:

 -  Show correct price in snippet when including tax enabled.

*HTML Sitemap (1.1.2)*:

 -  Don't show disabled CMS pages on sitemap.

*SEO URLs (1.5.5)*:

 -  Fixed DI compilation when hreflang is not installed.
 -  Performance improvements.

### Version 1.6.0

> May 30, 2019

*Regional URLs (hreflang) (1.2.3):*

 -  Improved integration with pages for third-party modules - Swissup AskIt, Swissup Highlight and Swissup EasyCatalogImg (departments page).

*SEO Pagination (1.2.0):*
 -  New feature - add page number to title of page where paginated content presented.
 -  Improved integration with Catalog Search pages.

*SEO URLs (1.5.2)*:
 -  Fixed compatibility with latest Swissup Ajaxsearch module. "Nothing found" message appeared for any instant search request.

### Version 1.5.0

> May 3, 2019

*Metadata templates (1.4.0)*:

 -  New option for 'attribute' directive - `max_length` (set max allowed length for output). It can be usefull for attributes with long content.
 -  HTML tags removed from output of 'attribute' directive when respective attribute has marked as "html allowed".
 -  New config section "Optimize metadata" where you can set optimal length for metadata.

*Rich Snippets (1.4.2)*:

 -  Slightly improved product description for structured data.

### Version 1.4.1

> Apr 18, 2019

*Rich Snippets (1.4.1)*:

 -  Fixed structured data error for grouped and bundle products - offerCount can't be empty.

*HTML Sitemap (1.1.2)*:

 -  Compatibility with PHP 7.2.

### Version 1.4.0

> Mar 26, 2019

Localization files addes to all of the modules.

*Rich Snippets (1.4.0)*:

 -  Solve latest Google warnings (missing priceValidUntil, global identifier, review etc).
 -  New config option to map product structured data with product attributes.
 -  Fix error: "Call to undefined function Swissup\RichSnippets\Model\Config\Source\_()..." at some Magento inst.

*Canonical URLs (1.0.2)*:

 -  Fix incorrect canonical URL for homepage.
 -  Improve stability.

*SEO CrossLinks (1.0.1)*:

 -  Fixed delete button on the editlinks page.


*Metadata templates (1.3.0)*:

 -  New directives &#039;parents&#039; for category and &#039;categories&#039; for product. Check [documentation article](http://docs.swissuplabs.com/m2/extensions/seo-templates/use-cases/amazon-like-metadata/) to get Amazon-like metadata.
 -  Fixed not working Cron generation when Magento Cache is enabled.
 -  Fixed missing genereted meta keywords at product page.

*XML Sitemap (1.1.3)*

 -  Compatibility with Magento 2.3.


### Version 1.3.0

> Dec 21st, 2018

Two new highly demanded modules included into kit - [***Cross Links***](/m2/extensions/seo-cross-links/) and [***Canonical URL***](/m2/extensions/seo-canonical/). Also there are some minor tweakses and improvements for included modules. Major changes listed find below.

*Rich Snippets*:

 -  Integrated with [Swissup AMP](/m2/extensions/amp/) module.

*Metadata templates*:

 -  Price directive can return product price with tax. You have to add attribute (tax="include") to it.

*SEO URLs*:

 -  New feature - added rel="nofollow" to filtyers in layered navigation.
 -  Fixed JavaScript error in Swatched renderer caused by module's mixin.
 -  Fixed fatal error when toggle canonical url oprion in Magento admin system config.
 -  Improved autogenerated labels and values of filters in URL. Remove single quote mark (cause problems for ajax requests).

*XML Sitemap*:

 -  Forced to use same images (same dimensions of images) as used on storefront. Previously Sitemap generated images that didn't exist at storefront.


### Version 1.2.0

> Nov 8th, 2018

Layered Navigation URLs have a new awesome feature now. And slight fix/improvement for HTML Sitemap.

*SEO URLs*:
 +  New feature to change in-URL labels and values in filters.
 +  New option to add `rel="nofollow"` into links in Layered Navigation.

*HTML Sitemap*:
 +  Add option in config that allows to have all CMS pages in sitemap.

### Version 1.1.2

> Oct 23rd, 2018

One new feature in RichSnippets and one compatibility fix with Magento 2.1.x in SeoUrls.

*Rich Snippets*:

 -  Now you can add brand info to product structured data.

*SEO URLs*:

 -  Fix 'Invalid return type' on Magento 2.1.x when redirect to homepage enabled.

### Version 1.1.1

> Oct 9th, 2018

Few fixes and one little stability improvement.

*Metadata templates*:

 -  Improve metadata generation process and prevent it from freezing when something when wrong. Now you can go to Magento 'system.log' file and check for critical records.
 -  Fix 404 response for actions in admin grid.
 -  Few typos corrected.

*SEO URLs*:

 -  Select swatches on listing when swatches filter applied.
 -  Fix not working redirect to homepage when customer reaches respective CMS page via its URL.

### Version 1.1.0

> Sep 27th, 2018

Internal module naming convention was updated. We applied this changes to reach full compatibility with Magento Marketplace policy.

### Version 1.0.2

> Sep 21st, 2018

Compatibility with M2.2.6 and one typo correction in Magento Stores Configuration.

### Version 1.0.1

> Sep 6th, 2018

Minor improvements and Magento 2.1.x compatibility fixes.

*Metadata templates*:

 -  Compatibility M2.1.x - fix "Element 'htmlContent': This element is not expected."

*SEO URLs*:

 -  Improve compatibility with other languages than English. There were problems with characters like "ñ","Ñ","á","é","í", etc. Now everything works fine.

### Version 1.0.0

> Aug 1st, 2018

Include module [***SEO XML Sitemap***](/m2/extensions/seo-xml-sitemap/) into kit. New XML Sitemap module provides improved experience and advanced options for Magento Sitemap generation. It sorts sitemap links according their priority, adds images to category links and supports regional and language URLs (hreflang).

 -  Change SEO Suite section sort order in Magento Admin menu.

*HTML Sitemap*

 -  Rename backend menu item ‘HTML Sitemap Links’ => ‘Sitemap Links’.
 -  Fix PHP fatal error in custom links grid when Magento Admin session expired.

*Metadata templates*:

 -  Fix error during `setup:di:compile`.

*Regional URLs (hreflang)*:

 -  New option to add hreflang links into XML Sitemap.
 -  New option to exclude store view from hreflinks.
 -  Improved store URL resolving (sometimes incorrect theme was applied).
 -  Fixed compatibility with Magento 2.1.x.

*Rich Snippets*:

 -  Fallback to full description of product in snippet when short description is empty.

*SEO Pagination*:

 -  Remove canonical URL correctly (previous version removes all links equal to canonical in document head).

*SEO URLs*:

 -  Improved integration with "Regional URLs".

### Version 0.11.0

New module [***Region and Language URLs (hreflang)***](../../hreflang/) included into kit. Tell Google that you have multilingual and/or multi-regional store. Please, do not forget to run `php bin/magento module:enable Swissup_Hreflang` to enable new module.

*Rich Snippets*:

 -  Fix missing breadcrumbs data at product pages in Magento 2.2.4+ instances.
 -  Fix possible notice at product page with grouped product (undefined variable: groupedProductsPricesArray).

*SEO URLs*:

 -  Rename config section 'Urls' => 'SEO URLs'.
 -  Integration with new module "Regional Urls (hreflang)".

### Version 0.10.1

Compatibility with Magento 2.1.x for [Metadata Templates](../../seo-templates/).

### Version 0.10.0

Include new module [*Metadata Templates*](../../seo-templates/). Generate metadata for products and categories based on their attributes.

*SEO URLs*:

 -  Fix redirects on category pages when URL ends with '.../?p=2'.
 -  Fix issues with category parameter in [Swissup Ajax Search](../../ajasearch/).

### Version 0.9.1

*Richsnippets*:

 -  Do not add rating to snippet when product reviews do not have ratings.

*SEO URLs*:

 -  Improve compatibility with not English speaking stores.

### Version 0.9.0

Includes new module [*SEO Pagination*](../../seo-pager/):

 -  SEO pagination for category pages, Swissup Highlight pages and Swissup Attribute pages.
 -  Prevent duplicate links to first page of paginated content.
 -  'View-all' link in pagination toolbar.
 -  Option to use rel="next" and rel="prev" instead of rel="canonical" at pages with pagination.

*Rich Snippets*:

 -  Fixed duplicated product structured data on product page. Now preview feature of Google testing tool works as it should.
 -  Minify JSON-LD structured data.
 -  No empty nodes in JSON-LD structured data.
 -  Overall source code improvements.

*SEO URLs*:

 -  Fix URL parsing when URL rewrite ends with '/'.
 -  Disable SEO URLs when direct controller URL used instead of URL rewrite.
 -  Improved integration with Swissup ALN module (stock filter, rating filter, new filter).
 -  Improved query string parsing when multiple values applied to filter.
 -  If filter separator enabled add it to URLs only when there are applied filters.
 -  Overall source code improvements.

### Version 0.8.0

 -  First release. Include Google rich snippets, HTML Sitemap and SEO URLs extensions.
