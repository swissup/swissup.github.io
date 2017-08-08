---
layout: default
title: Argento Luxury Header
description: Argento Luxury header configuration
keywords: "ArgentoLuxury, luxury, header, logo, search, navigation, sticky navigation"
category: Argento
---

# Argento Luxury Header

![Luxury header](/images/argento/luxury/header/header.png)

### Logo

###### Step 1

To replace demo logo with your own, please upload your image to
`skin/frontend/argento/luxury_custom/images/logo.png` via ftp manager.

If your image has different name or file format, you will need to proceed to step 2.

###### Step 2

Navigate to Magento configuration: `System > Configuration > Design > Header` and
change values of `Logo Image Src` and `Small Logo Image Src` options according
to your file name.

###### Step 3

To replace homepage logo,
go to `System > Configuration > TM Argento Themes > Luxury > Home Page` and upload your image.

###### Step 4

In order to provide sharp images for devices with high DPI ratio (retina displays),
you'll need to upload twice large logo's as follows:

`skin/frontend/argento/luxury_custom/images/logo@2x.png` in case if original logo
name was `logo.png`

OR

`skin/frontend/argento/luxury_custom/images/logoname@2x.gif` in case if original logo
name was `logoname.gif`

### Top Search

Luxury theme utilizes [Ajax Search](/m1/extensions/ajaxsearch/) module for the search functionality. You can
configure Suggestion popup and Search engine settings at
`System > Configuration > Templates-Master > Ajax Search`.

### Navigation

Luxury theme utilizes [Navigation Pro](/m1/extensions/navigationpro/) module for top navigation.
You can configure Menu items at `Templates-Master > Navigation Pro`.

Please read the following docs about NavigationPro features:

- [NavigationPro docs](/m1/extensions/navigationpro/)
- [Argento Navigation Setup](/m1/argento/navigation-setup/)

### Sticky Navigation

Sticky navigation is enabled by default for wide and long screens. If you would
like to disable sticky navigation, you can use the following methods:

 -  [Argento Luxury configuration](/m1/argento/luxury/configuration/#sticky-header)
 -  Disable Sticky Navigation using [custom layout update file](/m1/argento/theme-customization/small-changes/#custom-layout-update-file)

    ```
    <remove name="sticky_header"/>
    ```
