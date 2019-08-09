---
layout: default
title: Pagespeed Trobleshooting
description: Magento 2 page speed module
keywords: magento page speed extension, pagespeed
category: Pagespeed
---


# Issues

### ISSUE 1:

Magento 2.1 and pagespeed integration

```bash
Problem 1

Installation request for swissup/pagespeed 1.0.0 -> satisfiable by swissup/pagespeed[1.0.0].
Conclusion: remove tubalmartin/cssmin v2.4.8-p4
Conclusion: don\'t install tubalmartin/cssmin v2.4.8-p4
swissup/pagespeed 1.0.0 requires mrclay/minify ~3.0.0 -> satisfiable by mrclay/minify[3.0.0, 3.0.1, 3.0.2, 3.0.3].
mrclay/minify 3.0.0 requires tubalmartin/cssmin ~2.4.8-p5 -> satisfiable by tubalmartin/cssmin[v2.4.8-p10, v2.4.8-p5, v2.4.8-p6, v2.4.8-p7, v2.4.8-p8, v2.4.8-p9].
```

#### FIX:

Update your store to latest code.

Or run command(s) for decrease strong requirement

```bash
composer require mrclay/minify:\*
```

### ISSUE 2:

Magento 2.1 and pagespeed integration

```bash
Problem 1

spatie/image-optimizer 1.1.0 requires php ^7.0 -> your PHP version (5.6.36) does not satisfy that requirement.
swissup/pagespeed 1.0.0 requires spatie/image-optimizer ^1.1 -> satisfiable by spatie/image-optimizer[1.1.0].
Installation request for swissup/pagespeed 1.0.0 -> satisfiable by swissup/pagespeed[1.0.0].
```

#### FIX:

Update your PHP version or don't use the tools for image compressions


### ISSUE 3:

Correct enable 'Advanced JavaScript Bundling'

```bash
Problem 1

Generate broken small bundle files

#### FIX:

1. Disable 'Merge JavaScript Files', 'Enable JavaScript Bundling' and 'Minify JavaScript Files' before.
2. Flush Cache
3. Reload a homepage
4. Enable Minify JavaScript Files
5. Flush Cache
6. Reload a homepage
7. Enable Merge JavaScript Files
2. Flush Cache