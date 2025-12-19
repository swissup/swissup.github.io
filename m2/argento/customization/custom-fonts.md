---
layout: default
title: Argento custom fonts
description: How to apply custom fonts to the custom theme
keywords: >
    argento custom fonts, font
category: Argento
---

# Argento custom fonts

Custom fonts offer more versatility and creativity than standard web fonts and
can help a website stand out from its competitors. Custom fonts can also be used
to reinforce and enhance a website's branding and identity.
Argento customization often requires font changes.

## Instructions

To do custumize fonts, you need to follow the following simple steps:

1. Find your font at [Google Fonts](https://fonts.google.com/) i.e. [Quicksand](https://fonts.google.com/specimen/Quicksand). Choose all required parameters and copy the URL.

    In our case it is:
    ```
    https://fonts.googleapis.com/css2?family=Quicksand:wght@300;500;700&display=swap
    ```

2. Then you can use the [GetFonts](https://getfonts.vercel.app/) tool by [VovaYatsyuk](https://github.com/vovayatsyuk) to download the chosen fonts and styles. You may obtain them in any other way you find convenient.

3. You'll need a [custom theme](../custom-theme/) to be created.

4. Unzip `fonts.zip` and put the `fonts` folder into your custom theme `web` folder

   *Example:*

   ```
   web/
    ├─ fonts/
    │  ├─ quicksand/
    │  │  ├─ v30/
    │  │  │  ├─ 6xKtdSZaM9iE8KbpRA_hJFQNcOM.woff2
    │  │  │  ├─ 6xKtdSZaM9iE8KbpRA_hJFQNcOM.woff2
    │  │  │  ├─ 6xKtdSZaM9iE8KbpRA_hJFQNcOM.woff2
    │  │  │  ├─ 6xKtdSZaM9iE8KbpRA_hK1QN.woff2
    │  │  │  ├─ 6xKtdSZaM9iE8KbpRA_hK1QN.woff2

   ```
5. Create a file `Magento_Theme/layout/default_head_blocks.xml` in your custom theme
where we'll call our **new font** and/or remove the unneeded **old fonts**.

    *Example:*

    ```xml
    <?xml version="1.0"?>
    <page xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:noNamespaceSchemaLocation="urn:magento:framework:View/Layout/etc/page_configuration.xsd">
        <head>
            <remove src="fonts/opensans/light/opensans-300.woff2"/>
            <remove src="fonts/opensans/regular/opensans-400.woff2"/>
            <remove src="fonts/opensans/semibold/opensans-600.woff2"/>
            <remove src="fonts/opensans/bold/opensans-700.woff2"/>

            <link rel="preload" src_type="url" src="fonts/quicksand/v30/6xKtdSZaM9iE8KbpRA_hJVQNcOM.woff2"/>
            <link rel="preload" src_type="url" src="fonts/quicksand/v30/6xKtdSZaM9iE8KbpRA_hK1QN.woff2"/>
        </head>
    </page>
    ```
6. Now define the font-face by copying the required CSS to your theme custom style sheet
    from the downloaded `css/fonts.css`.

    *Example:*

    ```css
    /* latin-ext */
    @font-face {
      font-family: 'Quicksand';
      font-style: normal;
      font-weight: 300;
      font-display: swap;
      src: url(../fonts/quicksand/v30/6xKtdSZaM9iE8KbpRA_hJVQNcOM.woff2) format('woff2');
      unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
    }
    /* latin-ext */
    @font-face {
      font-family: 'Quicksand';
      font-style: normal;
      font-weight: 500;
      font-display: swap;
      src: url(../fonts/quicksand/v30/6xKtdSZaM9iE8KbpRA_hJVQNcOM.woff2) format('woff2');
      unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
    }
    /* latin-ext */
    @font-face {
      font-family: 'Quicksand';
      font-style: normal;
      font-weight: 700;
      font-display: swap;
      src: url(../fonts/quicksand/v30/6xKtdSZaM9iE8KbpRA_hJVQNcOM.woff2) format('woff2');
      unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
    }
    ```

7. Finally, apply the created font-face to CSS elements

    *Example:*
    ```css
    .element {
        font-family: 'Quicksand',sans-serif;
    }
    ```
8. That's it! Your new font is visible now.

##### Next up

- [Create Argento based custom theme](/m2/argento/customization/custom-theme/)
