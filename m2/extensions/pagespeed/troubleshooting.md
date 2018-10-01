---
layout: Pagespeed
title: Pagespeed Trobleshooting
description: >
    magento page speed module
keywords: >
    magento speed extension, increase magento speed, improve magento speed,
  optimize magento speed, magento speed optimization, magento page speed module,
  pagespeed
category: Pagespeed
---


# Issues

### ISSUE 1:

Magento 2.1 and pagespeed integration

~~~
Problem 1

Installation request for swissup/pagespeed 1.0.0 -> satisfiable by swissup/pagespeed[1.0.0].
Conclusion: remove tubalmartin/cssmin v2.4.8-p4
Conclusion: don't install tubalmartin/cssmin v2.4.8-p4
swissup/pagespeed 1.0.0 requires mrclay/minify ~3.0.0 -> satisfiable by mrclay/minify[3.0.0, 3.0.1, 3.0.2, 3.0.3].
mrclay/minify 3.0.0 requires tubalmartin/cssmin ~2.4.8-p5 -> satisfiable by tubalmartin/cssmin[v2.4.8-p10, v2.4.8-p5, v2.4.8-p6, v2.4.8-p7, v2.4.8-p8, v2.4.8-p9].
~~~

#### FIX:

Update your store to latest code.

Or run command(s) for decrease strong requirement

```bash
composer require mrclay/minify:\*
```

### ISSUE 2:

Magento 2.1 and pagespeed integration

~~~
Problem 1

spatie/image-optimizer 1.1.0 requires php ^7.0 -> your PHP version (5.6.36) does not satisfy that requirement.
swissup/pagespeed 1.0.0 requires spatie/image-optimizer ^1.1 -> satisfiable by spatie/image-optimizer[1.1.0].
Installation request for swissup/pagespeed 1.0.0 -> satisfiable by swissup/pagespeed[1.0.0].
~~~

#### FIX:

Update your PHP version or don't use the tools for image compressions

