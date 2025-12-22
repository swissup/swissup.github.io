---
layout: default
title: Argento icons
description: How to use icons to organize store content
keywords: >
    icons, font-awesome, social icons
category: Argento
---

# Icons

### Contents

 1. [FontAwesome Icons](#fontawesome-icons)
 1. [Social icons](#social-icons)

### FontAwesome Icons

Argento uses FontAwesome icons. You can use all icons provided by this
wonderful project. See the [official site](https://fontawesome.com/v4.7.0/icons/) for
usage examples and the icons list.

### Social icons

#### Color classes

Class name | Description
-----------|------------
colorize-fa | Colorized icons
colorize-fa-hover | Colorized hovered icons
colorize-fa-stack | Colorized stacked icons
colorize-fa-stack-hover | Colorized hovered stacked icons

#### Basic list

```html
<!-- Colorized hovered icon -->
<div class="social-icons colorize-fa-hover">
    <a href="twitter.com"><i class="fa fa-2x fa-twitter"></i></a>
    <a href="facebook.com"><i class="fa fa-2x fa-facebook"></i></a>
    <a href="youtube.com"><i class="fa fa-2x fa-youtube"></i></a>
    <a href="rss.com"><i class="fa fa-2x fa-rss"></i></a>
</div>
```

#### Stacked list

Stacked icons are two icons stacked togehter.
See [example](http://fontawesome.io/examples/#stacked).

```html
{% raw %}<!-- Colorized hovered stacked icons -->
<div class="social-icons colorize-fa-stack-hover">
  <a href="https://facebook.com/" class="icon icon-facebook">
    <span class="fa-stack">
      <i class="fa fa-circle fa-stack-2x"></i>
      <i class="fa fa-facebook fa-stack-1x fa-inverse"></i>
    </span>
  </a>
  <a href="https://twitter.com/" class="icon icon-twitter">
    <span class="fa-stack">
      <i class="fa fa-circle fa-stack-2x"></i>
      <i class="fa fa-twitter fa-stack-1x fa-inverse"></i>
    </span>
  </a>
  <a href="https://youtube.com/" class="icon icon-youtube">
    <span class="fa-stack">
      <i class="fa fa-circle fa-stack-2x"></i>
      <i class="fa fa-youtube-play fa-stack-1x fa-inverse"></i>
    </span>
  </a>
  <a href="{{store url='rss'}}" class="icon icon-rss">
    <span class="fa-stack">
      <i class="fa fa-circle fa-stack-2x"></i>
      <i class="fa fa-rss fa-stack-1x fa-inverse"></i>
    </span>
  </a>
  <a href="https://www.instagram.com/" class="icon icon-instagram">
    <span class="fa-stack">
      <i class="fa fa-circle fa-stack-2x"></i>
      <i class="fa fa-instagram fa-stack-1x fa-inverse"></i>
    </span>
  </a>
  <a href="https://plus.google.com/" class="icon icon-google-plus">
    <span class="fa-stack">
      <i class="fa fa-circle fa-stack-2x"></i>
      <i class="fa fa-google-plus fa-stack-1x fa-inverse"></i>
    </span>
  </a>
  <a href="https://github.com/" class="icon icon-github">
    <span class="fa-stack">
      <i class="fa fa-circle fa-stack-2x"></i>
      <i class="fa fa-github fa-stack-1x fa-inverse"></i>
    </span>
  </a>
  <a href="https://www.linkedin.com/" class="icon icon-linkedin">
    <span class="fa-stack">
      <i class="fa fa-circle fa-stack-2x"></i>
      <i class="fa fa-linkedin fa-stack-1x fa-inverse"></i>
    </span>
  </a>
  <a href="https://ok.ru/" class="icon icon-odnoklassniki">
    <span class="fa-stack">
      <i class="fa fa-circle fa-stack-2x"></i>
      <i class="fa fa-odnoklassniki fa-stack-1x fa-inverse"></i>
    </span>
  </a>
  <a href="https://ru.pinterest.com/" class="icon icon-pinterest">
    <span class="fa-stack">
      <i class="fa fa-circle fa-stack-2x"></i>
      <i class="fa fa-pinterest fa-stack-1x fa-inverse"></i>
    </span>
  </a>
  <a href="https://www.skype.com/uk/" class="icon icon-skype">
    <span class="fa-stack">
      <i class="fa fa-circle fa-stack-2x"></i>
      <i class="fa fa-skype fa-stack-1x fa-inverse"></i>
    </span>
  </a>
  <a href="https://vimeo.com/" class="icon icon-vimeo">
    <span class="fa-stack">
      <i class="fa fa-circle fa-stack-2x"></i>
      <i class="fa fa-vimeo fa-stack-1x fa-inverse"></i>
    </span>
  </a>
  <a href="https://vk.com/" class="icon icon-vk">
    <span class="fa-stack">
      <i class="fa fa-circle fa-stack-2x"></i>
      <i class="fa fa-vk fa-stack-1x fa-inverse"></i>
    </span>
  </a>
</div>{% endraw %}
```
