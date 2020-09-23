---
layout: default
title: Argento Stripes Theme Editor
description: Argento Stripes theme editor usage
category: Argento
---

# Theme Editor
{:.no_toc}

Theme editor provides a quick way to change Argento styles with minimum css
knowledge.

Theme editor is located at
`Magento Admin > Stores > Configuration > Swissup`. Select `Argento Stripes` among list of available themes there.

{% include gallery.html images=site.data.gallery.m2.argento.stripes.theme-editor.config class="scroll phone-up-1 tablet-up-3 photoswipe" %}

### Contents
{:.no_toc}

* TOC
{:toc}

#### Layout

Layout section allows you to apply
[boxed, full-width or standard page layouts](/m2/argento/customization/boxed-full-width-and-standard-layout-types/)
from backend settings interface.

There are three options available to configure:

Option | Default Value | Description
-------|---------------|------------
Body background | #fff | Body backgorund
Page wrapper width | none | Page width around content
Content wrapper width | 1280px | Content width

Take at look at the picture below with highlighted layout regions:

![Argento Layout Structure](/images/m2/argento/pure2/theme-editor/layout.png)

 1. **Body's background.**

    Body's background is covered by page wrapper and it's not visible by default.

    Set the 'Page wrapper' max-width (1200px for example) to reveal body background.

 2. **Boxed Layout**

    Set the 'Page wrapper' max-width (1200px for example) to enable boxed layout.

 3. **Full-Width Layout**

    Set the 'Page wrapper' and 'Content wrapper' max-width's to 100%.

 4. **Default Layout**

    Set the 'Page wrapper' max-width to none.

    Set the 'Content wrapper' max-width to 1200px.

#### Header

Check slider on top of the page to see how this config looks like. With its help you can:

 -  Enable/disable sticky menu for Stripes theme (disabled by default).
 -  Change header background.
 -  Change text color and border for header toolbar (placed at header's top; containes store switcher and welcome message).
 -  Have fun with minicart and search button in "Buttons" subsection.
 -  Be creative and modify top navigation - change colors of menu items, arrows and backgrounds. 

Default Stripes header placed below.

![Argento Stripes Header](/images/m2/argento/stripes/theme-editor/header.png)

#### Footer

You can see options of footer section config in slider on top of the page. This section allows you to change background, color of titles, links, regular text and few other things.

![Argento Stripes Footer](/images/m2/argento/stripes/theme-editor/footer.png)

#### Buttons

You can customize primary and secondary buttons colors in this section.

Primary button is "Add to cart button" on product page and product listing, "Proceed to checkout" button on checkout cart page.

And most of the rest buttons are secondary. Except "Add to wishlist" and "Add to compare" buttons have some specific styles. But you can also customize then in respective subsection.

#### Fonts

Fonts section allows you to customize styles for page headers, block titles
and product name in category listing.

You can change color for product finale price also.

#### Additional css styles

Use this section to add any other specific styles.

#### Examples

Below you can find example of theme customization. On the left side is Stripes theme with default colors and on the right side - customized color scheme.  

{% include gallery.html images=site.data.gallery.m2.argento.stripes.theme-editor.result-examples class="scroll phone-up-1 tablet-up-2 photoswipe" %}

##### Next up
{:.no_toc}

 -  [Custom css file](/m2/argento/customization/custom-css/)
 -  [Create Argento based custom theme](/m2/argento/customization/custom-theme/)
 -  [Page structure manuals](/m2/argento/stripes/page-structure/)
    -  [Homepage](/m2/argento/stripes/page-structure/homepage/)
    -  [Product page](/m2/argento/stripes/page-structure/product-page/)
