---
layout: default
title: Argento Theme Editor
description: Argento theme editor usage
category: Argento
gallery:
  - title: Layout section
    href: /images/m2/argento/essence/theme-editor/config/layout.png
    src: /images/m2/argento/essence/theme-editor/config/small/layout.png
    w: 761
    h: 636
  - title: Header top toolbar
    href: /images/m2/argento/essence/theme-editor/config/header-top-toolbar.png
    src: /images/m2/argento/essence/theme-editor/config/small/header-top-toolbar.png
    w: 726
    h: 635
  - title: Navigation
    href: /images/m2/argento/essence/theme-editor/config/navigation.png
    src: /images/m2/argento/essence/theme-editor/config/small/navigation.png
    w: 726
    h: 1957
  - title: Footer top toolbar
    href: /images/m2/argento/essence/theme-editor/config/footer-top-toolbar.png
    src: /images/m2/argento/essence/theme-editor/config/small/footer-top-toolbar.png
    w: 726
    h: 563
  - title: Footer content
    href: /images/m2/argento/essence/theme-editor/config/footer-content.png
    src: /images/m2/argento/essence/theme-editor/config/small/footer-content.png
    w: 726
    h: 594
  - title: Footer bottom toolbar
    href: /images/m2/argento/essence/theme-editor/config/footer-bottom-toolbar.png
    src: /images/m2/argento/essence/theme-editor/config/small/footer-bottom-toolbar.png
    w: 726
    h: 550
  - title: Tabs
    href: /images/m2/argento/essence/theme-editor/config/product-and-homepage-tabs.png
    src: /images/m2/argento/essence/theme-editor/config/small/product-and-homepage-tabs.png
    w: 760
    h: 826
  - title: Buttons
    href: /images/m2/argento/essence/theme-editor/config/buttons.png
    src: /images/m2/argento/essence/theme-editor/config/small/buttons.png
    w: 760
    h: 606
  - title: Fonts
    href: /images/m2/argento/essence/theme-editor/config/fonts.png
    src: /images/m2/argento/essence/theme-editor/config/small/fonts.png
    w: 760
    h: 928
  - title: Additional css
    href: /images/m2/argento/essence/theme-editor/config/additional-css.png
    src: /images/m2/argento/essence/theme-editor/config/small/additional-css.png
    w: 760
    h: 192
examples:
  - title: Dark boxed layout example
    href: /images/m2/argento/essence/theme-editor/result-examples/dark-boxed-layout.png
    src: /images/m2/argento/essence/theme-editor/result-examples/small/dark-boxed-layout.png
    w: 800
    h: 852
  - title: Bright full-width layout example
    href: /images/m2/argento/essence/theme-editor/result-examples/bright-full-width-layout.png
    src: /images/m2/argento/essence/theme-editor/result-examples/small/bright-full-width-layout.png
    w: 800
    h: 852
---

# Theme Editor

Theme editor provides a quick way to change Argento styles with minimum css
knowledge.

Theme editor is located at `Magento Admin > Stores > Configuration > Swissup Themes Editor > Argento Essence`.

{% include gallery.html images=page.gallery class="scroll phone-up-1 tablet-up-3 photoswipe" %}

### Contents

 1. [Layout](#layout)
 2. [Header](#header)
 3. [Footer](#footer)
 4. [Product and Homepage Tabs](#products-and-homepage-tabs)
 5. [Buttons](#buttons)
 6. [Fonts](#fonts)
 7. [Additional css styles](#additional-css-styles)
 7. [Result examples](#result-examples)

#### Layout

Layout section allows you to apply
[boxed, full-width or standard page layouts](/m2/argento/customization/boxed-full-width-and-standard-layout-types/)
from backend settings interface.

There are three options available to configure:

Option | Default Value | Description
-------|---------------|------------
Body background | #fff | Body backgorund
Page wrapper width | none | Page width around content
Content wrapper width | 980px | Content width

Take at look at the picture below with highlighted layout regions:

![Argento Essence Header Structure](/images/m2/argento/essence/theme-editor/layout.png)

 1. **Body's background.**

    Body's background is covered by page wrapper and it's not visible by default.

    Set the 'Page wrapper' max-width (1280px for example) to reveal body background.

 2. **Boxed Layout**

    Set the 'Page wrapper' max-width (1280px for example) to enable boxed layout

 3. **Full-Width Layout**

    Set the 'Page wrapper' and 'Content wrapper' max-width's to 100%

 4. **Default Layout**

    Set the 'Page wrapper' max-width to 100%

    Set the 'Content wrapper' max-width to 980px

#### Header

Header section allows to customize top toolbar and navigation styles.

![Argento Essence Header Structure](/images/m2/argento/essence/theme-editor/header.png)

#### Footer

Footer section allows to customize top toolbar, content and bottom toolbar parts.

![Argento Essence Footer Structure](/images/m2/argento/essence/theme-editor/footer.png)

#### Product and Homepage Tabs

Tabs section allows you to customize border, background and fonts for homepage
and product tabs.

![Homepage tabs](/images/m2/argento/essence/theme-editor/tabs.png)

#### Buttons

Customize primary and secondary buttons colors.

![Primary button](/images/m2/argento/essence/theme-editor/button.png)

#### Fonts

Fonts section allows you to customize styles for page headers, block titles,
and product name in category listing.

![Product name font](/images/m2/argento/essence/theme-editor/fonts.png)

#### Additional css styles

Use this section to add any other specific styles.

#### Result examples

{% include gallery.html images=page.examples class="scroll phone-up-1 tablet-up-2 photoswipe" %}

##### Next up

- [Argento docs homepage](/m2/argento/)
- [Small css customizations](/m2/argento/customization/custom-css/)
- [Create Argento based custom theme](/m2/argento/customization/custom-theme/)
