---
layout: default
title: Easy Slider changelog
description: Easy Slider changelog
keywords: easy slider changelog
category: Easy Slider
---

# Changelog

### Version 1.8.2

> Sep 29, 2023

 - Fix 'Call to undefined function Composer\Autoload\includeFile'
 - Slider with thumbnails. Render empty thumbnail when can't resize. Add mime type of image in system log.

### Version 1.8.1

> Jul 27, 2023

 -  Stability improvements.

### Version 1.8.0

> Apr 19, 2023

 -  Add options for slides to set "Active from" - "Active to" period (with date and time).
 -  Refactor javascript for slides gallery at edit slider form in Magento Admin.
 -  Update responsive image settings for image slides. Proper config ontions for `sizes` attribute and widths to generate `srcset` attribute.

### Version 1.7.1

> Mar 31, 2023

 -  Fix error about undefined variable $isLaze in `thumbs.phtml`.
 -  Fix incorrect order of slides at edit slider form in Magento Admin.
 -  Fix removed raw html slide still exists after slider saved.

### Version 1.7.0

> Mar 31, 2023

 -  Add new type of slide for slider - "Raw HTML". With this type you can add any content to your slide.
 -  Add fancy features to edit slide popup in Magento Admin - toggler for "Visible on frontent", code editor for "Description" and "Raw HTML" fields.
 -  Fix wrong description positon value of slide after close popup in edit slider interface in Magento Admin.
 -  Code improvements.

### Version 1.6.25

> Jan 28, 2022

 -  Magento Coding Standard fixes
 -  [Breeze Theme](https://breezefront.com) integration added

### Version 1.6.24

> Dec 3, 2021

 - Fix '...\AdditionalData\function_exists does not exist' for magento 2.3 (#34)

### Version 1.6.23

> Dec 2, 2021

 - Fix function_exists('includeFile') #34

### Version 1.6.22

> Dec 1, 2021

 - Fix phpcs error PSR1.Classes.ClassDeclaration.MultipleClasses (includeFile instead) #34

### Version 1.6.21

> Nov 30, 2021

 - Fixes 'Unescaped output detected'
 - Supress phpcs MultipleClasses (#34)

### Version 1.6.20

> Nov 29, 2021

 - Remove synonym data-content-type (EasySlider => easyslider)

### Version 1.6.19

> Oct 28, 2021

 - Possible fix for #33 (m2.3.7 pagebuilder)
 - Remove code dublicates
 - Supress code standard warnings

### Version 1.6.18

> Oct 27, 2021

 - Filter slide description (graphql)
 - Add magento pagebuilder integration (widget)
 - Fix 'Script error for: Swissup_EasySlide/js/easyslide' on backend

### Version 1.6.17

> Sep 14, 2021

 -  Updated breeze integration.

### Version 1.6.15

> Jun 23, 2021

  - Improve server side source code - replace json_encode.
  - Add composer requirements and module sequences.

### Version 1.6.14

> May 13, 2021

 -  Improve graphql schema
 -  Add width x height in slide graphQl response

### Version 1.6.13

> Apr 26, 2021

 -  [Breeze](/m2/extensions/breeze/) integration added

### Version 1.6.12

> Mar 23, 2021

 -  New options for slider edit form - "Center slide" and "Slide Max width". Using this options you can reduce cumulative layout shift (CLS) in Google Pagespeed.
 -  Better values of sizes for slider images.
 -  Few fixes for graphql.

### Version 1.6.10

> Feb 17, 2021

 -  Fix graphql schema.

### Version 1.6.9

> Jan 22, 2021

 -  Updated integration with out [Pagebuilder module](/m2/extensions/pagebuilder/)
 -  Log possible errors occurred during image resize.
 -  Fixed not centered slides in homepage slider in ArgentoForce theme.

### Version 1.6.7

> Nov 16, 2020

  - Implement IdentityInterface for slider block. Now you don't need to flush FPC after slider change in Magento Admin. Frontend updated by itself.
  - Show disabled state on disabled slides in Magento Admin.
  - Add action to duplicate existing sliders in Magento Admin.
  - Fixed slider behavior when thumbnails enabled and effect is 'Cude'/'Flip'.

### Version 1.6.5

> Oct 20, 2020

  - New option in edit slider interface - "Responsive breakpoints". It allows to change slides per view on different screen width.
  - Fixed not working search by keyword.
  - Fixed [Pagebuilder](/m2/extensions/pagebuilder/) integration.

### Version 1.6.1

> Oct 13, 2020

 -  [Pagebuilder](/m2/extensions/pagebuilder/) integration added
 -  Swiper library moved to separate module to allow to use it in another modules.

### Version 1.6.0

> Sep 23, 2020

  - New option for slider - “Thumbnails”. You can set their sizes and position.
  - Updated and rethinked edit slider form in Magneto Admin.

### Version 1.5.7

> Aug 5, 2020

 -  Performance improvements.
 -  Fixed responsive images in Luma theme.
 -  Prevent page jumping when image is loading.

### Version 1.5.3

> Oct 16, 2019

 -  Remove direct 'jquery/ui' usage to improve js performance.

### Version 1.5.2

> Sep 24, 2019

 -  Meet latest Magento coding standarts requirements.
 -  Improved styles. Fixed gap under slides.

### Version 1.5.1

> Sep 16, 2019

 -  Fixed Swissup Amp integration after latest major update.
 -  Improve stability. Don't crash page when image file does not exists.
 -  Fixed exception in Magento Admin "Duplicate key-sequence ['component']... ".

### Version 1.5.0

> Sep 12, 2019

 -  New highly demanded features - lazy load and responsive images for slides. Properly configured they can increase pagespeed score on pages where slides are added.
 -  Updated slider JS library (swiper) for better performance.
 -  Reworked admin interfaces. Build according latest Magento 2 trends (UI components).

### Version 1.4.0

> Aug 19, 2019

 -  Added ability to use Magento directives in slider description field.
 -  Improved slider rendering when slide url is not set.

### Version 1.3.3

> May 24, 2019

 -  Fixed invalid data in the grid after filters reset.

### Version 1.3.2

> May 23, 2019

 -  Fixed not working enable/disable actions in backend grid.

### Version 1.3.1

> Apr 30, 2019

 -  Fixed warning in logs about missing .map source file

### Version 1.3.0

> Mar 29, 2019

 -  Magento 2.3.1 compatibility (Fixed broken backend form)
 -  Added ability to start slider from [random slide](/m2/extensions/easyslider/interfaces/#slider-parameters)
 -  Code cleanup and small improvements

### Version 1.1.3

 -  Magento 2.2 compatibility

### Version 1.1.2

 -  ACL instructions added to UI components according to latest Magento requirements
 -  DI compilation fixed

### Version 1.1.1

 -  Improved css styles
 -  Added ability to use background-color on a slide
 -  Improved bullets position on small devices
 -  Added slide iterator to the css class name

### Version 1.1.0

 -  Fixed slider height to match image height
 -  Added [theme support](../interfaces/#slider-parameters)
    -  Default
    -  White
    -  Black

### Version 1.0.8

 -  Magento 2.1 compatibility

### Version 1.0.7

 -  Code cleanup
