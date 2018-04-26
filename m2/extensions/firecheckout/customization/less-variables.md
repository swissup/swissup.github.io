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

You can always find a full list of variables in firecheckout sources.

See the `swissup/firecheckout/view/frontend/web/css/abstracts/_variables.less` file.

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
|@firecheckout-section__number-width                | `23px`
|@firecheckout-section__number-height               | `23px`
|@firecheckout-section__number-color                | `#fff`
|@firecheckout-section__number-background-color     | `#000`
|@firecheckout-section__number-font-family          | `Verdana, sans-serif`
|@firecheckout-section__number-font-size            | `15px`
|@firecheckout-section__number-font-weight          | `normal`
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
|@firecheckout-form__use-checkbox-radio-styles      | `true`
|@firecheckout-form-checkbox__background-image      | `'data:image/png;base64,iV...`
|@firecheckout-form-radio__background-image         | `'data:image/svg+xml;base64,PD...`
**Modal popup styles** |                            |
|@firecheckout-modal__popup-background              | `@firecheckout-section__background`
|@firecheckout-modal__popup-effect                  | `'slide-up'` `[zoom|slide-down|slide-up]`
|@firecheckout-modal__popup-box-shadow              | `0 0 20px rgba(0, 0, 0, 0.3)`
|@firecheckout-modal__overlay-background            | `rgba(0, 0, 0, 0.2)`
|@firecheckout-authentication__popup-effect         | `@firecheckout-modal__popup-effect`
**Tooltip styles** |                                |
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

##### Next up

 - [Custom css file](../custom-css/)
 - [Back to customization page](../)
