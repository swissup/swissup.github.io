---
layout: default
title: Argento Marketplace Customization
description: Argento Marketplace Customization
category: Argento
---

## Marketplace Design Customization
{:.no_toc}

* TOC
{:toc}

### Display Icons in Navigation

Argento Marketplace theme uses [Expanded on Homepage](/m2/extensions/navigationpro/use-cases/expanded-on-homepage/) feature of the Navigation Pro module.

To make the menu even more attractive for customers, you can add icons for the menu items.

![Navigation with Icons](/images/m2/argento/marketplace/navigation-icons.png)

To add an icon for a menu item, go to _Swissup > NavigationPro_ and edit `argento_marketplace_topmenu`.

Select the menu item you want to add an icon for, open `Advanced Settings`, and place the following content in `Name as Html` field:

```html
<a href="{% raw %}{{var item.url}}{% endraw %}" class="{% raw %}{{var item.class}}{% endraw %}">
    <svg style="margin:-7px 5px 0 0" class="va-middle" width="26" height="22" viewBox="0 0 30 25" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M28.0381 7.35882L24.4104 11.0013L22.3078 9.07643V23.1874H7.3084V9.07643L5.2058 11.0013L1.57812 7.35882L6.58288 2.35409C6.81175 2.12374 7.08397 1.94101 7.38387 1.81648C7.68376 1.69194 8.00537 1.62807 8.33009 1.62854H10.9657C11.0262 2.59869 11.4543 3.50929 12.1626 4.17489C12.871 4.84048 13.8065 5.21101 14.7785 5.21101C15.7506 5.21101 16.686 4.84048 17.3944 4.17489C18.1028 3.50929 18.5308 2.59869 18.5913 1.62854H21.2269C21.5516 1.62807 21.8732 1.69194 22.1731 1.81648C22.473 1.94101 22.7453 2.12374 22.9741 2.35409L28.0381 7.35882Z" stroke="#999CA8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
    <span>{% raw %}{{var item.name}}{% endraw %}</span>
</a>
```

Replace the svg from the above example with the icon you want to use. You can use any svg or png/jpg image,
just do not forget to add `va-middle` class for it and position it with `style="margin:..."`.
