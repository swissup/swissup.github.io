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

Magento has awesome feature to resize images. And this feature has one awesome option - `keep_frame`. It has only two values 'Yes' and 'No'. We want explain to you how `keep_frame` option affects image resize.

As an example we use two products - shoes. One product has image with portrait orientation (vertical image) and size 400x600. Other one has image with landscape orientation (horizontal image) and size 600x480.

| Portrait orientation | Landscape orientation |
|----------------------|-----------------------|
| ![Portrait orientation](/images/argento/keep-frame/400x600.png){: .noborder} | ![Landscape orientation](/images/argento/keep-frame/600x480.png){: .noborder} |

Argento themes allow to set [resize options for product listing](/m1/argento/luxury/category/#image-size). So let's check follow cases.

### Fixed image size and keep frame

Set image width to 200, image height to 200, keep frame `Yes` and background color to `#FFB0D2`{: style="background-color: #FFB0D2"}. Here is what images you get as a result:

| Portrait orientation | Landscape orientation |
|----------------------|-----------------------|
|![Portrait orientation and keep frame](/images/argento/keep-frame/400x600-keep-frame.png){: .noborder} | ![Landscape orientation and keep frame](/images/argento/keep-frame/600x480-keep-frame.png){: .noborder} |

As you can see `keep_frame` means that result image always has size that you specified. Image keeps its ratio and resizes to fit the largest side. Empty space is filled with background color.

### Fixed image size and do not keep frame

Set image width to 200, image height to 200 and keep frame `No`. Background color is ignored since there are no need in it.

| Portrait orientation | Landscape orientation |
|----------------------|-----------------------|
|![Portrait orientation and no keep frame](/images/argento/keep-frame/400x600-keep-frame-no.png){: .noborder} | ![Landscape orientation and no keep frame](/images/argento/keep-frame/600x480-keep-frame-no.png){: .noborder} |

`keep_frame` is disabled and we get images with different sizes. Portrait image has 133x200. Landscape image has 200x160. Original images were scaled to fit required sizes - max width 200px and max height 200px.

### Fixed image width, not specified image height and do not keep frame

Set image width to 200, image height is empty and keep frame `No`. Background color is ignored since there are no need in it.

| Portrait orientation | Landscape orientation |
|----------------------|-----------------------|
|![Portrait orientation, no height and no keep frame](/images/argento/keep-frame/400x600-no-height-keep-frame-no.png){: .noborder} | ![Landscape orientation, no height and no keep frame](/images/argento/keep-frame/600x480-keep-frame-no.png){: .noborder} |

`keep_frame` is disabled and image height is loose - we get images with different sizes but both have width exactly 200px. Portrait image is 200x300. Landscape image is 200x160. Original images were scaled to fit required width only.

### Not specified image width, fixed image height and do not keep frame

Leave image width empty, image height is 200 and keep frame `No`. Background color is ignored since there are no need in it.

| Portrait orientation | Landscape orientation |
|----------------------|-----------------------|
|![Portrait orientation, no width and no keep frame](/images/argento/keep-frame/400x600-keep-frame-no.png){: .noborder} | ![Landscape orientation, no width and no keep frame](/images/argento/keep-frame/600x480-no-width-keep-frame-no.png){: .noborder} |

`keep_frame` is disabled and image width is loose - we get images with different sizes but both have height exactly 200px. Portrait image is 133x200. Landscape image is 250x200. Original images were scaled to fit required height only.

### Our recommendation

We're bet you'd like to have nice and clear Magento-based store. Our main recommendation for you as for store admin - upload product pictures of the same width and height or at least the same ratio. In this case you do not need to play with image resizing settings to get best result from incoherent product pictures.

Any set of options will give you nice and consistent pictures.

Our favorite options set is [fixed image width, loose height and disabled `keep_frame`](#fixed-image-width-not-specified-image-height-and-do-not-keep-frame). But remember it works only with pictures that have same sides ratio.
