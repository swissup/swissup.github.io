---
layout: default
title: Argento FAQ
description: Argento FAQ
category: Argento
---

# Argento Stripes FAQ

Here you can get answers to the common questions for Shopify Argento theme.

#### **Block with common questions**

 1. [How to add sections to pages](#how-to-add-sections-to-pages)
 2.	[How to add sections to Products](#how-to-add-sections-to-products)
 3.	[How to add content to products using sections](#how-to-add-content-to-products-using-sections)
 4.	[How to add the currency selector](#how-to-add-the-currency-selector)
 5.	[How to remove "powered by Shopify" from the footer](#how-to-remove-powered-by-shopify-from-the-footer)
 6.	[How to sort products, set filters and search products by titles, tags, etc.](#how-to-sort-products-set-filters-and-search-products-by-titles-tags-etc)
 7. [How do I add custom fonts](#how-do-i-add-custom-fonts)

#### How to add sections to pages

All sections are customizable elements. You can simply add them to the homepage and product page.

With Shopify, you have to create a new product template and insert the additional content there then. Or it is possible to include the additional content as a snippet.

To add a custom section to the Product Page, you have to edit the product template of your theme. You will create blocks with a product selector and an image picker. So then the product selector will determine each block related to the section.

There's also another way. You can use alternate product templates with the corresponding sections. Then the sections will only appear on these individual product templates. [See more](https://shopify.dev/themes/architecture/templates#alternate-templates)

To `add a section to the Homepage`, you have to do more steps: 

 1. First go to your theme, choose the `Actions` drop-down and choose `Edit Code`.
 2. Then find your index. liquid file and add the code `{% raw %}{{ content_for_index }}{% endraw %}`. Go to your sections folder, choose `Add a new section`.
 3. Specify the name for the section. Save.
 4. Now you can customize the section in the `Sections` tab. Choose `Add section`, so then you will see your new section. You will be able to add it to your home page.

#### How to add sections to Products

After you create a new product, you may add it to a collection or to navigation. This will make it possible to browse it from Shopify Theme Editor.

When you find your product, please click on the Product. sections page section from the sidebar. Then you can start editing them - remove or replace them with your custom ones.

Now you have to assign a page template to make the page section active, and access all sections in the theme editor then. Please follow the steps:

1. Go to Admin.

2. Click on the `Online Store`. Choose `Pages` in the side menu.

3. Click on the page where you want to add sections.

4. On the right, you can see `Templates with a dropdown selector`. Here you assign a unique template to the page.

**Note:** if you want all your pages to show the same content, assign the same template to all of them.

#### How to add content to products using sections

Go to Admin. Follow the steps:

1. Click on the `Online Store`. Choose `Themes` in the side menu.

2. Press the `Customize` button to go to the theme editor.

3. Choose the page you are going to edit from the dropdown at the top of the screen. You may also use your store's navigation.

4. Now you can see the Page sections option in the sidebar of the editor. Click on it to access the customizing options.

5. In the drop-down, you can select the width for your new content. Then you can also add some blocks of content. 

6. Please click on `Add content` and pick up the content type. With Shopify, it is possible to drag and drop content blocks according to your requirements.

#### How to add the currency selector

This functionality is supported out of the box.

#### How to remove "powered by Shopify" from the footer

Go to Admin. Click `Online Store - Themes`. You may see an `Action` button. Press it and choose `Edit Languages`.
Then please search for `Powered` in the Filter Translations box. You have to add a single space in the Powered by Shopify box. Save.

#### How to sort products, set filters and search products by titles, tags, etc.

With Shopify, you can sort, search, and filter the list of products.

By default, the list is sorted alphabetically (from A to Z) by product name. To change it, please go to `Admin - Products - All products`.
Click on `Sort`, and choose a sort option. It will be possible to sort by product title, date created, date updated, inventory, product type.

To configure the filter, go to `Admin - Products - All products`. Here you may choose one or more filter options: by the Product vendor, Availability, or Tagged with. Please click the column header and then choose the option to show products related to that option.

To open a complete list of filter categories, click `More filters`. Here you may choose an option to show products related to that option.

To configure a search, go to `Admin - Products - All products`. In the `Filter Products` please specify the search words. The product list will be automatically updated to show only the products that have those words in the product titles, descriptions, or tags.

#### How do I add custom fonts

Please follow the steps to add custom fonts:

 1. Download the Webfont version of your font. It must include the WOFF and WOFF2 file types. Please avoid TTF or OTF. They are not web font file types.

 2. Go to `Admin - Online Store - Themes`. Click on `Actions - Edit Code`. In the sidebar select Assets - theme.scss.liquid. At the bottom of the file paste the next code:

	**Code:** 
	```html
	@font-face {
	font-family: "NAME OF FONT";
	src: url("NAME-OF-FONT-FILE.woff2") format("woff2"),
	url("NAME-OF-FONT-FILE.woff") format("woff");
	}
	```

 3. Now you have to replace NAME OF FONT with the name of your font and NAME OF THE FONT FILE with the exact name. Use case-sensitive with hyphens of the font file on your computer. Paste the next code below this code:

	**Code:** 
	```html
	<p><span style="font-weight: 400;">yourcssselectorhere { font-family: "NAME OF FONT"!important; }</span></p>
	```

 4. Go to the `Assets folder` and click on `Add a new asset`. You have to upload each version of the font file one by one.

	After the fonts are installed, we have to determine what headings or text of our theme will use our new font. In a new browser tab, go to your site and find the heading or text you want to apply a custom font to. Right-click on the words and choose Inspect. So you will see a popup with your website code.

	Search for CSS code for heading in the right-hand column. Click the property name and copy the text. Then get back to the browser tab with the theme code editor and open the theme.scss.liquid file. Focus on the words that say `your CSS selector here`. Here you should paste what you've already copied.

 5. The last step. Replace `NAME OF YOUR FONT` with the name you used before. Save.
