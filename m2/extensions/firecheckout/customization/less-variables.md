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

### Contents
{:.no_toc}

* TOC
{:toc}

### Main elements selectors

Used to provide better third-party themes compatibility.

Variable name           | Default value
------------------------|--------------
@fc-container__selector | ~"#checkout"
@fc-wrapper__selector   | ~"#checkout .opc-wrapper"

### Responsive styles

 -  `small` - mobile size
 -  `base`  - firecheckout layout will be applied
 -  `large` - additional spacing may be added between boxes

Variable name                   | Default value
--------------------------------|--------------
@fc-screen__small__max-width    | 639px
@fc-screen__base__min-width     | 768px
@fc-screen__large__min-width    | 1024px

### Icons

Variable name     | Default value
------------------|-------------------------------
@fc-icon__error   | 'data:image/svg+xml;base64...'
@fc-icon__warning | 'data:image/svg+xml;base64...'
@fc-icon__info    | 'data:image/svg+xml;base64...'
@fc-icon__caret   | 'data:image/svg+xml;base64...'

### Container size

Variable name           | Default value
------------------------|-------------------------------
@fc-page-wide__width    | 1280px
@fc-page-narrow__width  | 980px

### Layout size

Variable name                       | Default value
------------------------------------|-------------------------------
**1-Column layout**                 |
@fc-layout-1column__content-width   | 63%
@fc-layout-1column__sidebar-width   | 100% - @fc-layout-1column__content-width
**2-Columns layout**                |
@fc-layout-2columns__column1-width  | 40%
@fc-layout-2columns__column2-width  | 100% - @fc-layout-2columns__column1-width
**2-Columns-Alt layout**            |
@fc-layout-2columns-alt__column1-width          | 100% / 3
@fc-layout-2columns-alt__column2-width          | 100% - @fc-layout-2columns-alt__column1-width
@fc-layout-2columns-alt__column2-narrow-width   | @fc-layout-2columns-alt__column2-width / 2
**3-Columns layout**                |
@fc-layout-3columns__columns-width  | 35%
@fc-layout-3columns__column3-width  | 100% - (@fc-layout-3columns__columns-width * 2)

### Body variables

Variable name                       | Default value
------------------------------------|-------------------------------
@fc-body__background-color          | false
@fc-body__background                | false
@fc__accent-color                   | false
@fc__text-color                     | false
@fc__text-secondary-color           | false
@fc__action-color                   | false
@fc__divider-color                  | #f4f4f4

### Ajax Loader

Variable name                       | Default value
------------------------------------|-------------------------------
@fc-loader-mask__background         | false
@fc-loader__enabled                 | true
@fc-loader__width                   | 30px
@fc-loader__height                  | @fc-loader__width
@fc-loader__border-width            | 3px
@fc-loader__primary-color           | #42a5f5
@fc-loader__secondary-color         | #ddd

### Checkout sections

Variable name                       | Default value
------------------------------------|-------------------------------
@fc-section-desktop__gap            | 15px
@fc-section__gap                    | 10px
@fc-section__padding                | 15px
@fc-section__background             | #fff
@fc-section__border-color           | darken(@fc-section__background, 10%)
@fc-section__border                 | 1px solid @fc-section__border-color
@fc-section__border-radius          | 0
@fc-section__box-shadow             | none
**Title**                           |
@fc-section-title__color            | false
@fc-section-title__font-size        | 2.6rem
@fc-section-title__font-weight      | 300
@fc-section-title__padding          | 0 0 10px
**Number**                          |
@fc-section-number__width           | 23px
@fc-section-number__height          | @fc-section-number__width
@fc-section-number__color           | #fff
@fc-section-number__background      | #000
@fc-section-number__font-family     | Verdana, sans-serif
@fc-section-number__font-size       | 15px
@fc-section-number__font-weight     | normal
@fc-section-number__margin          | -3px 7px 0 0
@fc-section-number__border-radius   | false
@fc-section-number__border          | false
**Subtitle**                        |
@fc-subtitle__color                 | false
@fc-subtitle__text-transform        | false
@fc-subtitle__text-decoration       | false
@fc-subtitle__font-size             | false
@fc-subtitle__font-weight           | false
**Subtitle toggler**                |
@fc-toggler__color                  | false
@fc-toggler__font-size              | false

### Form

Variable name                       | Default value
------------------------------------|-------------------------------
**Field size**                      |
@fc-form-compact__field-width       | 50%
@fc-form-compact__l__field-width    | 100% / 3
@fc-form-compact__xs__field-width   | 100%
**Field styles**                    |
@fc-form-field__color               | false
@fc-form-field__placeholder-color   | #999
@fc-form-field__background-color    | #fff
@fc-form-field-option__background   | false
@fc-form-field__border-color        | #ccc
@fc-form-field__border-width        | 1px
@fc-form-field__border-radius       | 0
@fc-form-field__height              | 42px
@fc-form-field__padding-top         | 0.68em
@fc-form-field__padding-bottom      | 0.68em
@fc-form-field__padding-right       | 7px
@fc-form-field__padding-left        | 7px
@fc-form-field__gap                 | 4px
@fc-form-field__focus__border-color | shade(@fc-form-field__border-color, 5%)
@fc-form-field__focus__background-color | shade(@fc-form-field__background-color, 2%)
@fc-form-field__error__border-color     | false
@fc-form-field__autofill__background-color | #ffffe4
@fc-form-field__autofill__color     | false
@fc-form-field__dirty__padding-top  | 1em
@fc-form-field__dirty__padding-bottom | 0.36em
**Field notes**                     |
@fc-form-field-note__color          | #999
**Selectboxes**                     |
@fc-form-field-caret__width         | 25px
**Selectboxes**                     |
@fc-form-field-icon__width          | 17px
@fc-form-field-icon__height         | @fc-form-field-icon__width
@fc-form-field-icon__top            | round(@fc-form-field__height / 2 - @fc-form-field-icon__height / 2)
@fc-form-field-icon__right          | @fc-form-field__padding-right
@fc-form-field-icon__second__right  | @fc-form-field__padding-right + @fc-form-field-icon__width + 3px
@fc-form-field-icon__third__right   | @fc-form-field__padding-right + (@fc-form-field-icon__width + 3px) * 2
**Checkboxes and Radios**           |
@fc-form-checkbox__background-image | 'data:image/png;base64...'
@fc-form-radio__background-image    | 'data:image/svg+xml;base64...'
@fc-form-checkbox-radio__enabled    | true
@fc-form-checkbox-radio__border-width | 1px
@fc-form-checkbox-radio__border-color | @fc-form-field__border-color
@fc-form-checkbox-radio__background-color | @fc-section__background
@fc-form-checkbox-radio__box-shadow-color | lighten(@fc-form-checkbox-radio__border-color, 10%)
@fc-form-checkbox-radio__checked__box-shadow-color  | darken(@fc-form-checkbox-radio__box-shadow-color, 25%)
@fc-form-checkbox-radio__focus__border-color | darken(@fc-form-checkbox-radio__border-color, 15%)

### Messages

Variable name                       | Default value
------------------------------------|-------------------------------
@fc-message__opacity                | false
@fc-message__border-radius          | false
@fc-message__background             | false
@fc-message__success__color         | false
@fc-message__error__color           | false
@fc-message__notice__color          | false

### Buttons

#### Standard buttons

Variable name                       | Default value
------------------------------------|-------------------------------
@fc-button__color                   | false
@fc-button__text-shadow             | false
@fc-button__text-decoration         | false
@fc-button__border-width            | false
@fc-button__border-radius           | false
@fc-button__border-color            | false
@fc-button__box-shadow              | false
@fc-button__background              | false
@fc-button__padding                 | false
@fc-button__transition              | false
@fc-button__hover__color            | @fc-button__color
@fc-button__hover__text-shadow      | @fc-button__text-shadow
@fc-button__hover__text-decoration  | @fc-button__text-decoration
@fc-button__hover__border-width     | @fc-button__border-width
@fc-button__hover__border-radius    | @fc-button__border-radius
@fc-button__hover__border-color     | @fc-button__border-color
@fc-button__hover__box-shadow       | @fc-button__box-shadow
@fc-button__hover__background       | @fc-button__background
@fc-button__hover__padding          | @fc-button__padding

#### Secondary buttons

Variable name                       | Default value
------------------------------------|-------------------------------
@fc-button-secondary__color         | false
@fc-button-secondary__text-shadow   | false
@fc-button-secondary__text-decoration | false
@fc-button-secondary__border-width  | false
@fc-button-secondary__border-radius | false
@fc-button-secondary__border-color  | false
@fc-button-secondary__box-shadow    | false
@fc-button-secondary__background    | false
@fc-button-secondary__padding       | @fc-button__padding
@fc-button-secondary__transition    | @fc-button__transition
@fc-button-secondary__hover__color  | @fc-button-secondary__color
@fc-button-secondary__hover__text-shadow    | @fc-button-secondary__text-shadow
@fc-button-secondary__hover__text-decoration | @fc-button-secondary__text-decoration
@fc-button-secondary__hover__border-width   | @fc-button-secondary__border-width
@fc-button-secondary__hover__border-radius  | @fc-button-secondary__border-radius
@fc-button-secondary__hover__border-color   | @fc-button-secondary__border-color
@fc-button-secondary__hover__box-shadow     | @fc-button-secondary__box-shadow
@fc-button-secondary__hover__background     | @fc-button-secondary__background
@fc-button-secondary__hover__padding | @fc-button-secondary__padding

#### Primary buttons

Used for the "Next step" buttons when Multistep layout is activated.

Variable name                       | Default value
------------------------------------|-------------------------------
@fc-button-primary__color           | @fc-button__color
@fc-button-primary__text-shadow     | @fc-button__text-shadow
@fc-button-primary__text-decoration | @fc-button__text-decoration
@fc-button-primary__border-width    | @fc-button__border-width
@fc-button-primary__border-radius   | @fc-button__border-radius
@fc-button-primary__border-color    | @fc-button__border-color
@fc-button-primary__box-shadow      | @fc-button__box-shadow
@fc-button-primary__background      | @fc-button__background
@fc-button-primary__padding         | @fc-button__padding
@fc-button-primary__transition      | @fc-button__transition
@fc-button-primary__hover__color    | @fc-button-primary__color
@fc-button-primary__hover__text-shadow | @fc-button-primary__text-shadow
@fc-button-primary__hover__text-decoration  | @fc-button-primary__text-decoration
@fc-button-primary__hover__border-width     | @fc-button-primary__border-width
@fc-button-primary__hover__border-radius    | @fc-button-primary__border-radius
@fc-button-primary__hover__border-color     | @fc-button-primary__border-color
@fc-button-primary__hover__box-shadow       | @fc-button-primary__box-shadow
@fc-button-primary__hover__background       | @fc-button-primary__background
@fc-button-primary__hover__padding  | @fc-button-primary__padding

#### Place Order button

Variable name                       | Default value
------------------------------------|-------------------------------
@fc-button-order__wide-layout       | false
@fc-button-order__stick-to-bottom   | false
@fc-button-order__color             | @fc-button-primary__color
@fc-button-order__text-shadow       | @fc-button-primary__text-shadow
@fc-button-order__text-decoration   | @fc-button-primary__text-decoration
@fc-button-order__border-width      | @fc-button-primary__border-width
@fc-button-order__border-radius     | @fc-button-primary__border-radius
@fc-button-order__border-color      | @fc-button-primary__border-color
@fc-button-order__box-shadow        | @fc-button-primary__box-shadow
@fc-button-order__background        | @fc-button-primary__background
@fc-button-order__padding           | @fc-button-primary__padding
@fc-button-order__transition        | @fc-button-primary__transition
@fc-button-order__hover__color      | @fc-button-order__color
@fc-button-order__hover__text-shadow | @fc-button-order__text-shadow
@fc-button-order__hover__text-decoration | @fc-button-order__text-decoration
@fc-button-order__hover__border-width | @fc-button-order__border-width
@fc-button-order__hover__border-radius | @fc-button-order__border-radius
@fc-button-order__hover__border-color | @fc-button-order__border-color
@fc-button-order__hover__box-shadow | @fc-button-order__box-shadow
@fc-button-order__hover__background | @fc-button-order__background
@fc-button-order__hover__padding    | @fc-button-order__padding

#### Login button

Variable name                       | Default value
------------------------------------|-------------------------------
@fc-button-auth__enabled            | false
@fc-button-auth__color              | @fc-button__color
@fc-button-auth__text-shadow        | @fc-button__text-shadow
@fc-button-auth__text-decoration    | @fc-button__text-decoration
@fc-button-auth__border-width       | @fc-button__border-width
@fc-button-auth__border-radius      | @fc-button__border-radius
@fc-button-auth__border-color       | @fc-button__border-color
@fc-button-auth__box-shadow         | @fc-button__box-shadow
@fc-button-auth__background         | @fc-button__background
@fc-button-auth__padding            | @fc-button__padding
@fc-button-auth__transition         | @fc-button__transition
@fc-button-auth__hover__color       | @fc-button-auth__color
@fc-button-auth__hover__text-shadow | @fc-button-auth__text-shadow
@fc-button-auth__hover__text-decoration | @fc-button-auth__text-decoration
@fc-button-auth__hover__border-width    | @fc-button-auth__border-width
@fc-button-auth__hover__border-radius   | @fc-button-auth__border-radius
@fc-button-auth__hover__border-color    | @fc-button-auth__border-color
@fc-button-auth__hover__box-shadow      | @fc-button-auth__box-shadow
@fc-button-auth__hover__background      | @fc-button-auth__background
@fc-button-auth__hover__padding         | @fc-button-auth__padding

### Progress Bar (Breadcrumbs)

Variable name                       | Default value
------------------------------------|-------------------------------
@fc-progress-bar__color             | #aaa
@fc-progress-bar-item__color        | #666
@fc-progress-bar-item__active__color| #333
@fc-progress-bar-item__completed__color | #006bb4

### Modal and authentication popup

Variable name                       | Default value
------------------------------------|-------------------------------
@fc-modal__border-radius            | false
@fc-modal__popup-background         | @fc-section__background
@fc-modal__popup-effect             | 'slide-up' [zoom|slide-down|slide-up]
@fc-modal__popup-box-shadow         | 0 0 20px rgba(0, 0, 0, 0.3)
@fc-modal__overlay-background       | rgba(0, 0, 0, 0.2)
@fc-authentication__popup-effect    | @fc-modal__popup-effect

### Tooltips

#### Native Magento's tooltips

Variable name                       | Default value
------------------------------------|-------------------------------
@fc-tooltip-content__box-shadow     | 0 0 45px rgba(0, 0, 0, 0.1)
@fc-tooltip-content__background-color | #fff
@fc-tooltip-content__border-width   | 1px
@fc-tooltip-content__border-color   | #fff
@fc-tooltip-content__width          | 200px

#### Tippy tooltips

Variable name                       | Default value
------------------------------------|-------------------------------
@fc-tooltip__max-width              | 240px
@fc-tooltip__box-shadow             | 0 10px 25px rgba(0, 0, 0, 0.2)
@fc-tooltip__error__background      | darken(#e80500, 5%)
@fc-tooltip__warning__background    | darken(#dca400, 5%)
@fc-tooltip__content__background    | #fff

### Tiny scrollbar styles

Variable name                       | Default value
------------------------------------|-------------------------------
@fc-scrollbar__size                 | 6px
@fc-scrollbar__border-radius        | 10px
@fc-scrollbar__background-color     | darken(@fc-section__background, 10%)
@fc-scrollbar-thumb__background-color | darken(@fc-scrollbar__background-color, 20%)

### Saved address blocks

Variable name                       | Default value
------------------------------------|-------------------------------
@fc-address-item__border-radius     | false
@fc-address-item__border-color      | false
@fc-address-item__hover__background | false

### Shipping Methods

Variable name                       | Default value
------------------------------------|-------------------------------
@fc-shipping-policy__top            | 12px

### Discount

Variable name                       | Default value
------------------------------------|-------------------------------
@fc-discount__overlap-button        | false

### Order Summary

Variable name                       | Default value
------------------------------------|-------------------------------
@fc-order-summary__use-overflow-gradient | true
@fc-order-summary__item-toggler-color | false
**Order Totals**                    |
@fc-order-totals__border-color      | @fc__divider-color
@fc-order-totals__border-radius     | false
@fc-order-totals__border-collapse   | false
@fc-order-totals__border            | false
@fc-order-totals__background        | false
@fc-order-totals__padding           | false
@fc-order-totals__margin            | false

### Third-party modules

Variable name                       | Default value
------------------------------------|-------------------------------
**Swisup_Orderattachments**         |
@fc-orderattachments__border        | false
**Swisup_CheckoutCart**             |
@fc-checkout-cart__qty-background   | @fc-form-field__background-color
@fc-checkout-cart__qty-border-color | @fc-form-field__border-color
@fc-checkout-cart__qty-color        | @fc-form-field__color
@fc-checkout-cart__qty-margin       | false
@fc-checkout-cart__toggler-color    | false
@fc-checkout-cart__toggler-width    | false
@fc-checkout-cart__toggler-border-color | false
@fc-checkout-cart__toggler-border-radius | false
@fc-checkout-cart__toggler-more-border-radius | @fc-checkout-cart__toggler-border-radius
@fc-checkout-cart__toggler-less-border-radius | @fc-checkout-cart__toggler-border-radius
@fc-checkout-cart__toggler-more-left | false
@fc-checkout-cart__toggler-less-left | false

##### Next up
{:.no_toc}

 - [Custom css file](../custom-css/)
 - [Back to customization page](../)
