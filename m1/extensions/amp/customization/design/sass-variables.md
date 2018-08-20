---
layout: default
title: AMP sass variables
description: The list of SASS variables available to use
keywords: amp sass
category: Accelerated Mobile Pages
---

# SASS variables

These variables are helpful when customizing a theme. We recommend to use these
variables to serve compact css styles for mobile users.

<!-- MarkdownTOC -->

- [Global Variables](#global-variables)
    - [Colors](#colors)
    - [Typography](#typography)
    - [Responsive](#responsive)
    - [Links](#links)
    - [Icons](#icons)
    - [Buttons](#buttons)
- [Helpers](#helpers)
    - [Badge](#badge)
    - [Chips](#chips)
    - [Listing](#listing)
- [AMP Components](#amp-components)
    - [Accordion](#accordion)
    - [Lightbox](#lightbox)
    - [Switcher](#switcher)
- [Layout](#layout)
    - [Header](#header)
        - [Cart Icon](#cart-icon)
        - [Compare Icon](#compare-icon)
        - [Hamburger Icon](#hamburger-icon)
        - [Search Icon and Form](#search-icon-and-form)
    - [Sidebar](#sidebar)
    - [Breadcrumbs](#breadcrumbs)
    - [Footer](#footer)
- [Product](#product)
- [Next Up](#next-up)

<!-- /MarkdownTOC -->

### Global Variables

#### Colors

Variable        | Value
----------------|-------------------
$brand-color    | rgb(64, 120, 192)
$light-grey     | rgb(237, 237, 237)
$mid-grey       | rgb(153, 153, 153)
$dark-grey      | rgb(68, 68, 68)
$orange         | orange
$mango-tango    | rgb(231, 114, 0)

#### Typography

Variable            | Value
--------------------|------------
$text-font-stack    | 'Open Sans', 'Helvetica Neue Light', 'Helvetica Neue', 'Helvetica', 'Arial', sans-serif
$code-font-stack    | 'Courier New', 'DejaVu Sans Mono', 'Bitstream Vera Sans Mono', 'Monaco', monospace
$text-color         | rgb(34, 34, 34)

#### Responsive

Variable        | Value
----------------|------
$max-width      | 1180px
$breakpoints    | ('small': 320px, 'medium': 768px, 'large': 1024px)

#### Links

Variable            | Value
--------------------|-------------
$link-color         | $brand-color
$link-hover-color   | $mango-tango

#### Icons

Variable            | Value
--------------------|-----------
$icon-color         | $dark-grey
$icon-hover-color   | #000
$icon-size          | 24px 24px
$icon-width         | 30px
$icon-height        | 30px

#### Buttons

Variable                    | Value
----------------------------|---------
$button-padding             | 5px 10px
$button-border-radius       | 2px
$button-background-color    | tint(saturate($brand-color, 35%), 20%)
$button-hover-background-color | shade($button-background-color, 5%)
$button-text-color          | #fff
$button-text-shadow         | 1px 1px 0 rgba(0,0,0,0.1)

### Helpers

#### Badge

Badge class helper (`.badge`) is used by Shopping Cart and Compare icons, to
display products count.

Variable                            | Value
------------------------------------|------
$badge-width                        | 15px
$badge-height                       | 15px
$badge-font-size                    | 11px
$badge-color                        | null
$badge-background-color             | $light-grey
$badge-border-radius                | 50%
$badge-inversed-background-color    | $dark-grey
$badge-inversed-color               | $light-grey

#### Chips

Chips placeholder (`%chips`) is used by active layered navigation items and
EasyCatalogImages subcategories styles at the homepage.

Variable                    | Value
----------------------------|------------------
$chips-item-margin          | 0 5px - 4px 5px 0
$chips-item-border-radius   | 2px
$chips-item-padding         | 5px 10px
$chips-item-background-color | tint(saturate($brand-color, 35%), 20%)
$chips-item-hover-background-color | shade($chips-item-background-color, 5%)
$chips-item-color           | #fff
$chips-item-text-shadow     | 1px 1px 0 rgba(0,0,0,0.1)

#### Listing

Listing placeholder (`%listing`, `%listing-item`, `%listing-item-title`) is used
by products listing and EasyCatalogImages listing.

Variable                        | Value
--------------------------------|------
$listing-columns-count-small    | 2
$listing-columns-count-medium   | 3
$listing-columns-count-large    | 4
$listing-item-margin            | -1px
$listing-item-padding           | 10px
$listing-item-border            | 1px solid $light-grey
$listing-item-primary-background | null
$listing-item-primary-padding   | null
$listing-item-secondary-background | null
$listing-item-secondary-padding | 10px 0 0 0
$listing-item-title-color       | $dark-grey

### AMP Components

#### Accordion

Variable                            | Value
------------------------------------|------
$accordion-heading-background-color | null
$accordion-heading-border-bottom    | 1px solid #fff
$accordion-heading-padding          | 12px 10px
$accordion-heading-font-size        | 1.2em
$accordion-content-padding          | 0px 10px

#### Lightbox

Variable                            | Value
------------------------------------|--------------------
$lightbox-background-color          | rgba(255,255,255,1)
$lightbox-content-background-color  | #fff
$lightbox-content-padding           | 40px 20px 20px
$lightbox-close-mask-image          | $icon-close
$lightbox-close-mask-size           | null
$lightbox-close-width               | 40px
$lightbox-close-height              | 40px
$lightbox-close-background-color    | $mid-grey

#### Switcher

Switcher styles are used by language and sort order switchers.

Variable                        | Value
--------------------------------|------
$switch-shadow                  | 0px 1px 2px #b7b7b7
$switch-font-size               | 12px
$switch-item-width              | 160px
$switch-item-height             | 30px
$switch-item-padding            | 7px 10px
$switch-item-background-color   | #f4f4f4
$switch-item-border-bottom      | 1px solid #e7ebec
$switch-item-color              | $link-color

### Layout

#### Header

Variable                | Value
------------------------|------
$header-fixed           | true
$header-background      | #fff
$header-shadow          | 0 1px 1px rgba(0, 0, 0, 0.15)
**Logo** |
$logo-width             | 160px
$logo-height            | 50px
$logo-tablet-width      | 220px
$logo-tablet-height     | 80px
$logo-vertical-margin   | 10px

##### Cart Icon

Variable                    | Value
----------------------------|------
$cart-icon-width            | 40px
$cart-icon-height           | 40px
$cart-icon-mask-image       | $icon-cart
$cart-icon-mask-size        | null
$cart-icon-background-color | null

##### Compare Icon

Variable                        | Value
--------------------------------|------
$compare-icon-width             | 40px
$compare-icon-height            | 40px
$compare-icon-mask-image        | $icon-arrow-swap
$compare-icon-mask-size         | null
$compare-icon-background-color  | null

##### Hamburger Icon

Variable                    | Value
----------------------------|------
$hamburger-width            | 40px
$hamburger-height           | 40px
$hamburger-mask-image       | $icon-hamburger
$hamburger-mask-size        | 30px 24px
$hamburger-background-color | null

##### Search Icon and Form

Variable                        | Value
--------------------------------|------------
$search-button-width            | 40px
$search-button-height           | 40px
$search-button-mask-image       | $icon-search
$search-button-mask-size        | null
$search-button-background-color | null
**Search Form** |
$search-form-background         | transparent
$search-form-padding            | 5px 0
$search-form-border-radius      | 3px
$search-field-border            | 1px solid lighten($mid-grey, 10%)
$search-field-background-color  | #fff
$search-field-padding           | 6px

#### Sidebar

Variable                            | Value
------------------------------------|------
$sidebar-width                      | 400px
$sidebar-shadow                     | 0 0 10px rgba(0, 0, 0, 0.2)
$sidebar-background-color           | #fff
$sidebar-section-heading-color      | $dark-grey
$sidebar-section-heading-background-color | null
$sidebar-section-heading-border-bottom | 1px solid #fff
$sidebar-section-active-heading-background-color | transparent
$sidebar-section-active-heading-border-bottom | none
**Language Icon** |
$language-icon-width                | 30px
$language-icon-height               | 30px
$language-icon-background-color     | null
$language-icon-mask-image           | $icon-world-outline
$language-icon-mask-size            | null
**Welcome Links** |
$welcome-link-color                 | $link-color
$welcome-link-hover-color           | $link-hover-color
**Sidebar Navigation** |
$nav-link-color                     | $link-color
$nav-link-color-active              | $link-hover-color
$nav-trigger-type                   | 'triangle'
$nav-trigger-type                   | 'plus'
$nav-trigger-type                   | 'shevron-to-cross'

#### Breadcrumbs

Variable                    | Value
----------------------------|------
$breadcrumbs-enabled        | false
$breadcrumbs-padding        | 10px 0 0
$breadcrumbs-font-size      | 0.9em
$breadcrumbs-item-margin    | 0 2px 6px 0
$breadcrumbs-divider-color  | $mid-grey

#### Footer

Variable            | Value
--------------------|------
$footer-background  | #050505
$footer-margin-top  | 40px
$footer-border-top  | null
$footer-text-color  | #aaa

### Product

Variable                        | Value
--------------------------------|-------------
$product-name-color             | $dark-grey
$product-price-color            | $dark-grey
$product-special-price-color    | $mango-tango
$product-listing-name-color     | null
$product-listing-price-color    | $dark-grey

##### Next Up

 -  [Back to Home](/m1/extensions/amp/)
 -  [Custom styles](/m1/extensions/amp/customization/design/custom-styles/)
