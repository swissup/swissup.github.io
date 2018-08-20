---
layout: default
title: AMP homepage customization
description: Accelerated Mobile Pages homepage content explained
keywords: amp homepage
category: Accelerated Mobile Pages
---

# Homepage

AMP uses separate cms page as your store homepage. You can edit it
at _Content > Elements > Pages_. Just search the page by `swissupamp_homepage` identifier.

### Contents

 -  [Slider](#slider)
 -  [Category Images](#category-images)

### Slider

![Homepage Slider](/images/m2/amp/customization/homepage/slider.png)

Code:

```html
{% raw %}{{widget type="Swissup\EasySlide\Block\Slider" identifier="swissupamp"}}{% endraw %}
```

Slider is powered by [Easyslide](/m2/extensions/easyslider/) module. You can
edit the slides at _Swissup > General > Easyslide_ page. Look for a `Swissup AMP`
slider.

### Category Images

![Homepage Category Images](/images/m2/amp/customization/homepage/category-images.png)

Code:

```html
{% raw %}{{widget type="Swissup\Easycatalogimg\Block\Widget\SubcategoriesList" category_count="6" subcategory_count="4" column_count="4" show_image="1" image_width="300" image_height="300" template="Swissup_Easycatalogimg::list.phtml" hide_when_filter_is_used="0"}}{% endraw %}
```

Category images are powered by [EasyCatalogImages](/m2/extensions/easycatalogimages/)
module. You can assign category thumbnails manually at the category edit page,
or you can also use the "Automatic Image Assignment" feature at
_Stores > Configuration > Swissup > Easy Catalog Images_ page.

##### Next Up

 -  [Back to Home](/m2/extensions/amp/)
