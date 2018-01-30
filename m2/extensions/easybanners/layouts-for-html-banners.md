---
layout: default
title: Easy Banners
description:
keywords: easybanner html layouts
category: Easy Banners
---

# Layouts for HTML banners

* TOC
{:toc}

### Book

![Book layout](/images/m2/easybanners/layout/book.png)

Code:

```html
<div class="easybanner-layout-book">
    <img src="{% raw %}{{media url='wysiwyg/samsung.png'}}{% endraw %}" alt="" /> <!-- Image will be hidden on small screens -->
    <div class="content"> <!-- Add 'center' class name to center the text -->
        <h2 class="easybanner-title"><strong>May 10.</strong></h2>
        <p>
            A wonderful serenity has taken possession of my entire soul, like
            these sweet mornings of spring which I enjoy with my whole heart.
        </p>
        <p>
            I am alone, and feel the charm of existence in this spot, which was
            created for the bliss of souls like mine. I am so happy, my dear friend,
            so absorbed in the exquisite sense of mere tranquil existence,
            that I neglect my talents.
        </p>
        <p>
            I should be incapable of drawing a single stroke at the present
            moment; and yet I feel that I never was a greater artist than now.
        </p>
    </div>
</div>
```

### Magazine

![Magazine layout](/images/m2/easybanners/layout/magazine.png)

Code:

```html
<div class="easybanner-layout-magazine">
    <img src="{% raw %}{{media url='wysiwyg/pexels-photo-113776-large.jpeg'}}{% endraw %}" alt="" />
    <a href="{% raw %}{{swissup_easybanner_url}}{% endraw %}" title="View most popular books" class="easybanner-title bottom">
        Most Popular Books
    </a>
</div>
```