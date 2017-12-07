---
layout: default
title: Keep frame explanation
description: keep frame explanation
keywords: argento keep frame explain
category: Argento
---

# "Keep frame" explanation
{:.no_toc}

* TOC
{:toc}

Magento has has awesome feature to resize images. And this feature has one awesome option - `keep frame`. It has only two values 'Yes' and 'No'. We want explain to you how `keep frame` option affects image resize.

As an example we use two products - shoes. One product has vertical image (400x600) and other one - horizontal (600x480).

| Vertical image | Horizontal image |
|----------------|------------------|
| ![Vertical image](/images/argento/keep-frame/400x600.png){: .noborder} | ![Horizontal image](/images/argento/keep-frame/600x480.png){: .noborder} |

Argento themes allow to set resize options for product listing. So let's check follow cases.

### Fixed image size and keep frame

Set image width to 200, image height to 200, keep frame `Yes` and background color to `#FFB0D2`{: style="background-color: #FFB0D2"}. Here is what images you get as a result:

| Vertical image | Horizontal image |
|----------------|------------------|
|![Vertical image and keep frame](/images/argento/keep-frame/400x600-keep-frame.png){: .noborder} | ![Horizontal image and keep frame](/images/argento/keep-frame/600x480-keep-frame.png){: .noborder} |

As you can see `Keep frame` means that result image always has size that you specified. Image keeps its ratio and resizes to fit the largest side. Empty space is filled with background color.

### Fixed image size and do not keep frame

Set image width to 200, image height to 200 and keep frame `No`. Background color is ignored since there are no need in it.

| Vertical image | Horizontal image |
|----------------|------------------|
|![Vertical image and no keep frame](/images/argento/keep-frame/400x600-keep-frame-no.png){: .noborder} | ![Horizontal image and no keep frame](/images/argento/keep-frame/600x480-keep-frame-no.png){: .noborder} |

`Keep frame` is disabled and we get images with different sizes. Vertical image has 133x200. Horizontal image has 200x160. Original images were scaled to fit required sizes - max width 200px and max height 200px.

### Fixed image width, not specified image height and do not keep frame

Set image width to 200, image height is empty and keep frame `No`. Background color is ignored since there are no need in it.

| Vertical image | Horizontal image |
|----------------|------------------|
|![Vertical image, no height and no keep frame](/images/argento/keep-frame/400x600-no-height-keep-frame-no.png){: .noborder} | ![Horizontal image, no height and no keep frame](/images/argento/keep-frame/600x480-keep-frame-no.png){: .noborder} |

`Keep frame` is disabled and image height is loose - we get images with different sizes but both have width exactly 200px. Vertical image is 200x300. Horizontal image is 200x160. Original images were scaled to fit required width only.

### Not specified image width, fixed image height and do not keep frame

Leave image width empty, image height is 200 and keep frame `No`. Background color is ignored since there are no need in it.

| Vertical image | Horizontal image |
|----------------|------------------|
|![Vertical image, no width and no keep frame](/images/argento/keep-frame/400x600-keep-frame-no.png){: .noborder} | ![Horizontal image, no width and no keep frame](/images/argento/keep-frame/600x480-no-width-keep-frame-no.png){: .noborder} |

`Keep frame` is disabled and image width is loose - we get images with different sizes but both have height exactly 200px. Vertical image is 133x200. Horizontal image is 250x200. Original images were scaled to fit required height only.