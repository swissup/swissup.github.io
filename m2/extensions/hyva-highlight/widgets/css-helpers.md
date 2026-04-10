---
layout: default
title: Highlight CSS Helpers
description: >
    Ready to use CSS class helpers for highlight widgets
category: Highlight
---

# CSS Helpers

Place any of CSS helpers below, into the `CSS Class` field in the widget form
to apply ready-to-use customization.

### Magazine layout

On the screenshot below, you can see the `hl-magazine` layout with enabled
`Show link to Highlight Page` and `Use Ajax Carousel` options.

Widget title: `Top Selling<br><span>Home Decor</span>`

CSS class: `hl-magazine grey marker`

![Magazine layout](/images/m2/highlight/layouts/magazine.png)

**The list of available CSS classes to use with Magazine layout**

CSS Class       | Description
----------------|-------------------------------------
hl-magazine     | Main class to enable magazine layout
**Background Color Modifiers** |
hl-black        | Black backgorund
hl-white        | Black backgorund
hl-grey         | Grey backgorund
hl-blue         | Blue backgorund
hl-orange       | Orange backgorund
hl-green        | Green backgorund
hl-purple       | Purple backgorund
hl-red          | Red backgorund
**Text Background Color Modifiers** |
hl-marker       | Enables white or black text background (depending on background color modifier)
**Background Size Modifiers** |
hl-cover        | Stretch background image to fit at least one side of title section
hl-contain      | Stretch background image to fully fit in title section

Background image could be added manually. After you insert a widget into content,
add the following code into generated widget code: `title_image_url="pub/media/PATH/TO/PHOTO.jpeg"`

![Background Image](/images/m2/highlight/widget-option-title-image.png)

##### Next up

 - [Back to Home](/m2/extensions/highlight/)
