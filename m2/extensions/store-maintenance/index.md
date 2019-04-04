---
layout: default
title: Store Maintenance
description: >
    Magento2 extension to show maintenance page
keywords: >
    magento2 maintenance
category: Store Maintenance
---

# Store Maintenance

![Store maintenance frontend page](/images/m2/store-maintenance/503-page.png)

Every E-commerce website has to perform maintenance at some point. Either its
interface changes, or technical fixes, you better to warn your customers and
protect them form from bad expirience with your store.

Unlikely, that you want show error page to customer. You want warn visitor and
encourage to return later. For such purpose we developed Store Maintenance
extension. You can build own maintenance page, that will help keep your
visitors, whether new or returning, happy.

### Contents

 1. [Installation](installation/)
 2. [Settings](settings/)
 3. [Customize maintenance page](customize-page/)
 4. [Changelog](changelog/)

### Technical note

Customers are not the only who come to your store. Search engines crawl it also.
If they come to store that is under maintenance, they can not find requested
content and will remove it from their database. To prevent removing, you have to
inform search engine - problem is temporary and send 503 HTTP status code as a
responce. This is the definition of the 503 status code from
[the RFC that defines these status codes](http://www.w3.org/Protocols/rfc2616/rfc2616-sec10.html):

>  The server is currently unable to handle the request due to a temporary
overloading or maintenance of the server. The implication is that this is a
temporary condition which will be alleviated after some delay. If known, the
length of the delay MAY be indicated in a Retry-After header. If no Retry-After
is given, the client SHOULD handle the response as it would for a 500 response. 

Store Maintenance extension handles search engines requests perfectly and sends
them proper response.

![503 response](/images/m2/store-maintenance/503-response.png)
