---
layout: default
title: Get API keys
description: How to obtain cdn providers api keys
keywords: >
    magento cdn, magento amazon s3, magento rackspace, magento amazon cloudfront
category: CDN
---

# Get API Keys

-    For Amazon S3 users. Please go to https://console.aws.amazon.com/s3/home and create new bucket that will be used to store and distribute your media files. After that in permission settings of that bucket you should add “View” rights to “Everyone”.
-    For Cloudfront users: Please select create new distribution in “Distribution Id” field. Due to technical requirements it will take up to 20 minutes to make distribution active. You will be able to see list and status of all your distributions at https://console.aws.amazon.com/cloudfront/home . After status of you distribution will become “Deployed” you can proceed with further steps.
-    For DNS based CDN users: You should set domain where your files will be redistributed from.
-    For Rackspace users: Please go to https://cart.rackspace.com/cloud/?cp_id=public_cloud. Create new container that will be used to store files.
