---
layout: default
title: Argento Home Header
description: Argento Home header
category: Argento
---

# Header
{:.no_toc}

![Header](/images/m2/argento/home/header/header.png)

* TOC
{:toc}

### Top Panel

![Header Top Panel](/images/m2/argento/home/header/top-panel.png)

Top panel is at the most top of the page. It is visible on all pages.

Panel contains sales email, language switcher and currency switcher. Sales email is part of CMS block `header_cms_links`. Feel free to edit when you want to display other info.

#### Sample block content

```html
<ul class="header links header-cms-links">
    <li class="first"><a href="mailto:{% raw %}{{config path='trans_email/ident_sales/email'}}{% endraw %}" title="Email Us">{% raw %}{{config path='trans_email/ident_sales/email'}}{% endraw %}</a></li>
</ul>
```

### Logo

Logo at Argento Home is on the left side of the header. You can change logo using default Magento intefaces. Check this article to find out how to [update store logo](https://docs.magento.com/m2/ce/user_guide/design/logo-upload.html).

### Menu

Menu is right after logo at Argento Home. Menu is powered by [Navigation Pro](/m2/extensions/navigationpro/) module. This module has a lot of great features. Read its docs to find out more details.

Menu identifier is `argento_home_topmenu`.


### Search and Minicart

Search and minicart icon you can see on the right side of the header. Search field is hidden by default and show up when user clicks on its icon. Same thing for minicart. Click on bag and it shows up.

Search functionality is powered by [Ajax Search](/m2/extensions/ajaxsearch/) module. Check module docs to see what features it has.

##### Next up
{:.no_toc}

- [Small css customizations](/m2/argento/customization/custom-css/)
- [Create Argento based custom theme](/m2/argento/customization/custom-theme/)
- [Argento Home docs homepage](/m2/argento/home/)
