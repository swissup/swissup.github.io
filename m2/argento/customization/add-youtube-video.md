---
layout: default
title: Add YouTube video
description: How to add YouTube video in Argento theme
keywords: youtube, video
category: Argento
---

# Adding YouTube video

> This feature is supported since Argento 1.22.3

You can include YouTube videos in CMS content in Argento using
[Lite YouTube Embed][lite-embed].

The included video will look like the normal video inserted with iframe
but will load significantly faster.

To insert the video, use the following HTML code:

```html
<lite-youtube videoid="6BQfCoqbubE" playlabel="Canon Rebel XSi Commercial"></lite-youtube>
```

Replace `videoid` and `playlabel` parameters with the values for your video.

For more details, check [Lite YouTube Embed Usage][lite-embed-usage].

[lite-embed]: https://github.com/paulirish/lite-youtube-embed
[lite-embed-usage]: https://github.com/paulirish/lite-youtube-embed#basic-usage
