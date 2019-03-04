---
layout: default
title: Amazon-like metadata
description: Configurate Amazon-like metadata
keywords: "metadata templates settings amazon, metadata templates backend configuration"
category: SEO Metadata Templates
---

# Amazon-like metadata

Amazon is largest e-commerce in Internet. So it's wise to follow its best practices.

We browsed through a lot of Amazon products and checked how they prepare metadata for their products. Examples of templates for metadata you can find below. You can you those templates in our module.

> We prepare templates base on data collected in February 2019.

### Meta Title

**Template:**

```
{% raw %}Argento.mage: {{attribute code="name"}}: {{categories direction="from_top" depth="1"}}{% endraw %}
```

Replace `Argento.mage` with your store address (or name).

After template generating you'll get titles like this:

 -  *Argento.mage: Ajax Full-Zip Sweatshirt : Men*
 -  *Argento.mage: Cassia Funnel Sweatshirt: Women*
 -  *Argento.mage: Set of Sprite Yoga Straps: Gear*
 -  ...

### Meta Description

**Template:**

```
{% raw %}{{attribute code="name"}}: {{categories direction="from_assigned" depth="1"}} - Argento.mage ✓ FREE DELIVERY possible on eligible purchases{% endraw %}
```

Replace `Argento.mage` with your store address (or name).

And instead of free delivery message you can write anything else. For example, "❤ New arrivals every week" or "5€ coupon for new customes".

Template generates follow descriptions:

 -  *Ajax Full-Zip Sweatshirt : Hoodies & Sweatshirts - Argento.mage ✓ FREE DELIVERY possible on eligible purchases*
 -  *Cassia Funnel Sweatshirt: Hoodies & Sweatshirts, Women Sale - Argento.mage ✓ FREE DELIVERY possible on eligible purchases*
 -  *Set of Sprite Yoga Straps: Gear, Fitness Equipment - Argento.mage ✓ FREE DELIVERY possible on eligible purchases*
 -  ...

### Meta Keywords

**Template:**

```
{% raw %}{{attribute code="name"}}, {{attribute code="brand,manufacturer"}}, {{categories direction="from_assigned" depth="1"}}, {{attribute code="sku"}}{% endraw %}
```

Template generates keywrods:

 -  *Ajax Full-Zip Sweatshirt , Fancy Brand, Hoodies & Sweatshirts, MH12*
 -  *Cassia Funnel Sweatshirt, Fancy Brand, Hoodies & Sweatshirts, Women Sale, WH08*
 -  *Set of Sprite Yoga Straps, Gear, Fitness Equipment, 24-WG085_Group*
 -  ...
