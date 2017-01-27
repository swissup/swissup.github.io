---
layout: default
title: AMP homepage customization
description: Accelerated Mobile Pages homepage content explained
keywords: amp homepage
category: Accelerated Mobile Pages
---

# Homepage

AMP uses separate cms page as your store homepage. You can edit it
at _CMS > Manage Pages_ page. Just search the page by `tmamp_homepage`
identifier.

### Contents

 -  [Slider](#slider)
 -  [Category Images](#category-images)

### Slider

![Homepage Slider](/images/m1/amp/customization/homepage/slider.png)

Code:

```html
{% raw %}{{widget type="easyslide/insert" slider_id="tmamp"}}{% endraw %}
```

Slider is powered by [Easyslide](/m1/extensions/easyslider/) module. You can
edit the slides at _Templates Master > Easyslide_ page. Look for a `TM AMP`
slider.

### Category Images

![Homepage Category Images](/images/m1/amp/customization/homepage/category-images.png)

Code:

```html
{% raw %}{{widget type="easycatalogimg/widget_list" category_count="6" subcategory_count="4" column_count="4" show_image="1" image_width="200" image_height="200" template="tm/easycatalogimg/list.phtml"}}{% endraw %}
```

Category images are powered by [EasyCatalogImages](/m1/extensions/easycatalogimages/)
module. You can assign category thumbnails manually at the category edit page,
or you can also use the "Automatic Image Assignment" feature at
_System > Configuration > Templates-Master > Easy Catalog Images_ page.
