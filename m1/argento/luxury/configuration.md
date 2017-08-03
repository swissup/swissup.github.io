---
layout: default
title: Argento Luxury Configuration
description: Argento Luxury configuration
keywords: >
    Argento Luxury, luxury, configuration, fluid layout, boxed layout
category: Argento
---

# Argento Luxury Configuration

You can find theme settings at `System > Configuration > TM Argento Themes > Luxury`

#### Home Page

In Luxury theme you can use alternative logo on homepage.
Here you can upload logo for normal and retina displays.

![Home Page](/images/argento/luxury/configuration/home_page.png)

#### Sticky header

These options allow you to control status of sticky header.

![Sticky header](/images/argento/luxury/configuration/sticky_elements.png)

Plase note, that there is an internal logic for enabling sticky elements on
Luxury theme. **Sticky elements are disabled for small screens** to prevent bad
customer experience with overlapped elements.

Element | Rules to enable sticky element
--------|-------------------------------
Sticky header | (min-width: 769px) and (min-height: 751px) OR (min-width: 1250px) and (min-height: 501px)

#### Full screen and boxed layout

Luxury theme supports both boxed and full screen (fluid) layout types. Boxed layout is
used to make visible body background aside of the site content. Full width layout
is used to make the extra wide site or to use wide jumbotrons among the site.

![Layout settings](/images/argento/luxury/configuration/layout.png)

**Screenshots**

Wide jumbotrons layout (default) | Full width layout | Boxed layout
---------------------------------|-------------------|-------------
![Wide jumbotrons](/images/argento/luxury/configuration/layout/small/wide.png) | ![Full width layout](/images/argento/luxury/configuration/layout/small/full_width.png) | ![Boxed layout](/images/argento/luxury/configuration/layout/small/boxed.png)
**Settings** | **Settings** | **Settings**
Page width: auto | Page width: 100% | Page width: 1280px
Containers width: 100% | Containers width: 100% | Containers width: 100%
Containers max-width: 1280px | Containers max-width: 95% | Containers max-width: 1280px
 | | Body background: Nice pattern from [subtlepatterns.com](http://subtlepatterns.com/)

#### Background images and colors

![Background settings](/images/argento/luxury/configuration/background.png)

Luxury allows you to setup background for the following sections:

Option | Description
-------|------------
Body | Visible, when boxed layout is used. Otherwise .container background covers body
Top toolbar container | Stripe at the top of the page (visible on small header only)
Header container | Header itself, including navigation
Content container | Left, right and central columns container
Main content | Left, right and central columns background
Footer container | Footer with cms blocks

#### Top navigation styles

You can change font, color, background for the top level categories
and rest of the levels separately.

![Navigation settings](/images/argento/luxury/configuration/navigation.png)

#### Button colors

There are settings for primary, alternate and "Add to cart" button on product page:

- Border color
- Background
- Font color
- Hover state settings

![Buttons settings](/images/argento/luxury/configuration/button.png)

#### Font

Want to include nice webfont? Use this section for this purpose.

![Font settings](/images/argento/luxury/configuration/font.png)

#### Additional css styles and includes

With additional css styles option, you can apply any css changes, that are not
listed above.

![Css settings](/images/argento/pure2/configuration/css.png)
