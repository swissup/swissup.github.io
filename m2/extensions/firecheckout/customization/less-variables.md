---
layout: default
title: Firecheckout less variables
description: List of available less variables to customize firecheckout page
keywords: >
    firecheckout less variables
category: Firecheckout
---

# Firecheckout less variables

Firecheckout brings `less` variables to make easier to change layout and section
styles.

You can always find a full list of variables in firecheckout sources
(`swissup/firecheckout/view/frontend/web/css/abstracts/_variables.less`).

* TOC
{:toc}

### Default theme variables

Group               | Variable name                 | Default value
--------------------|-------------------------------|--------------
**CSS Selectors**   |                               |
|@opc-container-selector                            | `~"#checkout"`
|@opc-wrapper-selector                              | `~"#checkout .opc-wrapper"`
**Responsive breakpoints** |                        |
|@firecheckout__size__small                         | `640px`
|@firecheckout__size__base                          | `768px`
|@firecheckout__size__large                         | `1024px`
**Page variables**  |                               |
|@firecheckout-page-wide__width                     | `1280px`
|@firecheckout-page-narrow__width                   | `980px`
**Section variables** |                             |
|@firecheckout-section__gap                         | `10px`
|@firecheckout-section__padding                     | `15px`
|@firecheckout-section__background                  | `#fff`
|@firecheckout-section__border-color                | `darken(@firecheckout-section__background, 10%)`
|@firecheckout-section__border                      | `1px solid @firecheckout-section__border-color`
|@firecheckout-section__border-radius               | `0`
|@firecheckout-section__box-shadow                  | `none`
|@firecheckout-section-desktop__gap                 | `15px`
**Section numbers variables** |                     |
|@firecheckout-section-number__width                | `23px`
|@firecheckout-section-number__height               | `23px`
|@firecheckout-section-number__color                | `#fff`
|@firecheckout-section-number__background-color     | `#000`
|@firecheckout-section-number__font-family          | `Verdana, sans-serif`
|@firecheckout-section-number__font-size            | `15px`
|@firecheckout-section-number__font-weight          | `normal`
**Layout variables** |                              |
|@firecheckout-layout-1column__content-width        | `65%`
|@firecheckout-layout-2columns__column1-width       | `40%`
|@firecheckout-layout-2columns-alt__column1-width   | `100% / 3`
|@firecheckout-layout-3columns__columns-width       | `35%`
|@opc-wrapper-selector                              | `~".opc-wrapper"`
**Form variables** |                                |
|@firecheckout-form-compact__field-width            | `50%`
|@firecheckout-form-compact__l__field-width         | `100% / 3`
|@firecheckout-form-compact__xs__field-width        | `100%`
|@firecheckout-form-field__border-width             | `1px`
|@firecheckout-form-field__border-color             | `#ccc`
|@firecheckout-form-field__background-color         | `#fff`
|@firecheckout-form-field__focus__border-color      | `shade(@firecheckout-form-field__border-color, 5%)`
|@firecheckout-form-field__focus__background-color  | `shade(@firecheckout-form-field__background-color, 2%)`
|@firecheckout-form-field__autofill__background-color| `#ffffe4`
**Checkboxes and radio's variables** |              |
|@firecheckout-form__use-checkbox-radio-styles      | `true`
|@firecheckout-form-checkbox__background-image      | `'data:image/png;base64,iV...`
|@firecheckout-form-radio__background-image         | `'data:image/svg+xml;base64,PD...`
|@firecheckout-form-checkbox-radio__background-color| `@firecheckout-section__background`
|@firecheckout-form-checkbox-radio__border-color    | `@firecheckout-form-field__border-color`
|@firecheckout-form-checkbox-radio__box-shadow-color| `lighten(@firecheckout-form-checkbox-radio__border-color, 10%)`
|@firecheckout-form-checkbox-radio__checked__box-shadow-color | `darken(@firecheckout-form-checkbox-radio__box-shadow-color, 25%)`
|@firecheckout-form-checkbox-radio__focus__border-color | `darken(@firecheckout-form-checkbox-radio__border-color, 15%)`
**Modal popup styles** |                            |
|@firecheckout-modal__popup-background              | `@firecheckout-section__background`
|@firecheckout-modal__popup-effect                  | `'slide-up'` `[zoom|slide-down|slide-up]`
|@firecheckout-modal__popup-box-shadow              | `0 0 20px rgba(0, 0, 0, 0.3)`
|@firecheckout-modal__overlay-background            | `rgba(0, 0, 0, 0.2)`
|@firecheckout-authentication__popup-effect         | `@firecheckout-modal__popup-effect`
**Tooltip styles (Field Info Only)** |              |
|@firecheckout-tooltip-content__box-shadow          | `0 0 45px rgba(0, 0, 0, 0.1)`
|@firecheckout-tooltip-content__background-color    | `#fff`
|@firecheckout-tooltip-content__border-width        | `1px`
|@firecheckout-tooltip-content__border-color        | `#fff`
|@firecheckout-tooltip-content__width:              | `200px`
**Tiny scrollbar styles**                           |
|@firecheckout-scrollbar__size                      | `6px;`
|@firecheckout-scrollbar__border-radius             | `10px;`
|@firecheckout-scrollbar__background-color          | `darken(@firecheckout-section__background, 10%);`
|@firecheckout-scrollbar-thumb__background-color    | `darken(@firecheckout-scrollbar__background-color, 20%)`
**Tippy tooltip styles** |                          |
|@firecheckout-tooltip__max-width                   | `240px`
|@firecheckout-tooltip__box-shadow                  | `0 10px 25px rgba(0, 0, 0, 0.2)`
|@firecheckout-tooltip__error__background           | `darken(#e80500, 5%)`
|@firecheckout-tooltip__warning__background         | `darken(#dca400, 5%)`
|@firecheckout-tooltip__content__background         | `#fff`

### Light theme variables

> Light theme uses all variables of default theme, except the following overrides:

Group               | Variable name                 | Default value
--------------------|-------------------------------|--------------
**General**         |                               |
|@firecheckout__theme-light__main-color             | `#5ad17d`
**Section variables** |                             |
|@firecheckout-section-desktop__theme-light__gap    | `27px`
|@firecheckout-section__theme-light__gap            | `10px`
|@firecheckout-section__theme-light__padding        | `25px`
|@firecheckout-section__theme-light__background     | `#fff`
|@firecheckout-section__theme-light__border-color   | `#f2f5f7`
|@firecheckout-section__theme-light__border-width   | `1px`
|@firecheckout-section__theme-light__border         | `@firecheckout-section__theme-light__border-width solid @firecheckout-section__theme-light__border-color`
|@firecheckout-section__theme-light__border-radius  | `4px`
|@firecheckout-section__theme-light__box-shadow     | `0 10px 20px -5px rgba(0, 0, 0, 0.05)`
|@firecheckout-section-alt__theme-light__box-shadow | `0 16px 20px -5px rgba(0, 0, 0, 0.05)`
**Section titles variables** |                      |
|@firecheckout-section-title__theme-light__font-size| `2.4rem`
**Section numbers variables** |                     |
|@firecheckout-section-number__theme-light__width   | `32px`
|@firecheckout-section-number__theme-light__height  | `@firecheckout-section-number__theme-light__width`
|@firecheckout-section-number__theme-light__color   | `@firecheckout__theme-light__main-color`
|@firecheckout-section-number__theme-light__font-family | `inherit`
|@firecheckout-section-number__theme-light__background-color | `transparent`
|@firecheckout-section-number__theme-light__font-size | `20px`
|@firecheckout-section-number__theme-light__font-weight | `600`
|@firecheckout-section-number__theme-light__border-width | `2px`
|@firecheckout-section-number__theme-light__border-color | `@firecheckout__theme-light__main-color`
|@firecheckout-section-number__theme-light__border-radius | `50%`
|@firecheckout-section-number__theme-light__border  | `@firecheckout-section-number__theme-light__border-width solid @firecheckout-section-number__theme-light__border-color`
**Saved address variables** |                       |
|@firecheckout-address-item__theme-light__background-color | `@firecheckout__theme-light__main-color`
**Form variables** |                                |
|@firecheckout-form-field__theme-light__background-color | `#f2f5f7`
|@firecheckout-form-field__theme-light__border-color | `@firecheckout-form-field__theme-light__background-color`
|@firecheckout-form-field__theme-light__border-width | `2px`
|@firecheckout-form-field__theme-light__border-radius| `3px`
|@firecheckout-form-field__theme-light__focus__border-color | `shade(@firecheckout-form-field__theme-light__border-color, 7%)`
|@firecheckout-form-field__theme-light__error__border-color | `#fe6b22`
|@firecheckout-form-field__theme-light__focus__background-color | `lighten(@firecheckout-form-field__theme-light__background-color, 5%)`
**Checkboxes and radio's variables** |              |
|@firecheckout-form-checkbox-radio__theme-light__background-color | `@firecheckout-section__theme-light__background`
|@firecheckout-form-checkbox-radio__theme-light__border-color | `#ddd`
|@firecheckout-form-checkbox-radio__theme-light__box-shadow-color | `lighten(@firecheckout-form-checkbox-radio__theme-light__border-color, 10%)`
|@firecheckout-form-checkbox-radio__theme-light__checked__box-shadow-color | `darken(@firecheckout-form-checkbox-radio__theme-light__box-shadow-color, 25%)`
|@firecheckout-form-checkbox-radio__theme-light__focus__border-color | `darken(@firecheckout-form-checkbox-radio__theme-light__border-color, 15%)`
**Buttons variables** |                             |
|@firecheckout-button__theme-light__background-color| `#fff`
|@firecheckout-button__theme-light__border-color    | `@firecheckout__theme-light__main-color`
|@firecheckout-button__theme-light__color           | `@firecheckout__theme-light__main-color`
|@firecheckout-button-alt__theme-light__background-color | `#fff`
|@firecheckout-button-alt__theme-light__border-color| `transparent`
|@firecheckout-button-alt__theme-light__color       | `#777`
**Place Order button variables** |                  |
|@firecheckout-place-order-button__theme-light__background-color | `@firecheckout__theme-light__main-color`
|@firecheckout-place-order-button__theme-light__color| `#fff`
|@firecheckout-place-order-button__theme-light__padding | `18px 15px`
|@firecheckout-place-order-button__theme-light__border-color | `@firecheckout-place-order-button__theme-light__background-color`
|@firecheckout-place-order-button__theme-light__border-radius | `0 0 4px 4px`
|@firecheckout-place-order-button__theme-light__hover__border-color | `shade(@firecheckout-place-order-button__theme-light__border-color, 10%)`
|@firecheckout-place-order-button__theme-light__hover__background-color | `shade(@firecheckout-place-order-button__theme-light__background-color, 10%)`
|@firecheckout-place-order-button__theme-light__hover__color | `@firecheckout-place-order-button__theme-light__color`

##### Next up
{:.no_toc}

 - [Custom css file](../custom-css/)
 - [Back to customization page](../)
