---
layout: default
title: AMP known issues
description: Known issues of AMP site on Magento 2
category: Accelerated Mobile Pages
---

# Known Issues

* TOC
{:toc}

### Old libxml library

A lot of shared hostings are using archaic version of libxml library that does
not support amp-compatible html markup. When you are seeing the following error:

```
AMP validation had errors:
The mandatory tag 'noscript enclosure for boilerplate' is missing or incorrect.
```

That means that `DOMDocument` parser can't place `<noscript>` tag properly
according to AMP requirements.

There are two ways of solving this issue:

 -  Contact your hosting and request a `libxml` library upgrade (2.8.0 or newer
    is required)
 -  Disable third-party Magento module that uses `DOMDocument` parser

### Broken AMP pages on Magento 2.1.x

Magento 2.1.x missing event we use in AMP to transform normal tags to amphtml.

Pull request with this event was accepted [Pull Request 3779][pr-3779] but not added in Magento 2.1.x.

Open `lib/internal/Magento/Framework/View/Element/AbstractBlock.php` and apply
following changes in `toHtml` method:

```diff
--- a/lib/internal/Magento/Framework/View/Element/AbstractBlock.php
+++ b/lib/internal/Magento/Framework/View/Element/AbstractBlock.php
@@ -665,6 +665,18 @@ abstract class AbstractBlock extends \Magento\Framework\DataObject implements Bl
         }
         $html = $this->_afterToHtml($html);

+        /** @var \Magento\Framework\DataObject */
+        $transportObject = new \Magento\Framework\DataObject(
+            [
+                'html' => $html,
+            ]
+        );
+        $this->_eventManager->dispatch('view_block_abstract_to_html_after', [
+            'block' => $this,
+            'transport' => $transportObject
+        ]);
+        $html = $transportObject->getHtml();
+
         return $html;
     }
```

### The attribute 'template' is not allowed error on Magento 2.1.x

In Magento 2.1.x you can see a lot of error messages in `system.log`:

```
Element 'referenceBlock', attribute 'template': The attribute 'template' is not allowed.
```

Pull request with fix was accepted [Pull Request 9772][pr-9772] but not added in Magento 2.1.x.

Open `lib/internal/Magento/Framework/View/Layout/etc/elements.xsd` and allow `template` for
`blockReferenceType`:

```diff
--- a/lib/internal/Magento/Framework/View/Layout/etc/elements.xsd
+++ b/lib/internal/Magento/Framework/View/Layout/etc/elements.xsd
@@ -314,6 +314,7 @@
             <xs:element ref="uiComponent" minOccurs="0" />
         </xs:choice>
         <xs:attribute type="elementNameType" name="name" use="required"/>
+        <xs:attribute type="xs:string" name="template" use="optional"/>
         <xs:attribute type="xs:boolean" name="display" default="true" use="optional"/>
         <xs:attribute type="xs:boolean" name="remove" use="optional"/>
     </xs:complexType>
```

### Amasty SeoToolKit wrong pagination urls

Open `Amasty\SeoToolKit\Plugin\Pager` and find `removeFirstPageParam` method:

```php
private function removeFirstPageParam(&$url)
{
    /* check if url not ?p=10*/
    if (strpos($url, 'p=1&') !== false
        || strlen($url) - stripos($url, 'p=1')  === strlen('p=1')//in the end of line
    ) {
        $url = $this->urlHelper->removeRequestParam($url, 'p');
    }
}
```

replace with:

```php
private function removeFirstPageParam(&$url)
{
    /* check if url not ?p=10*/
    if (strpos($url, 'amp=1') === false &&
        (strpos($url, 'p=1&') !== false
        || strlen($url) - stripos($url, 'p=1')  === strlen('p=1'))//in the end of line
    ) {
        $url = $this->urlHelper->removeRequestParam($url, 'p');
    }
}
```

### Varnish and force AMP

By default, Varnish returns same cached content for all user agents (desktop and mobile).

Because of it, `Force AMP on mobile devices` feature does not work when using Varnish.

It can be fixed using [devicedetect][devicedetect]
and configuring Varnish to use it.

 1. Download [devicedetect][devicedetect] and place it near Varnish configuration
 file, usually */etc/default/varnish* or */etc/varnish/*

 2. Modify Varnish configuration to use *devicedetect*. Here is example based on
 Magento Varnish configuration file located in *app/code/Magento/PageCache/etc/varnish4.vcl* :

    ```diff
    --- a/app/code/Magento/PageCache/etc/varnish4.vcl
    +++ b/app/code/Magento/PageCache/etc/varnish4.vcl
    @@ -1,4 +1,7 @@
     vcl 4.0;
    +# devicedetect changes start
    +include "devicedetect.vcl";
    +# devicedetect changes end

     import std;
     # The minimal Varnish version is 4.0
    @@ -22,6 +25,10 @@ acl purge {
     }

     sub vcl_recv {
    +    # devicedetect changes start
    +    call devicedetect;
    +    # devicedetect changes end
    +
         if (req.method == "PURGE") {
             if (client.ip !~ purge) {
                 return (synth(405, "Method not allowed"));
    @@ -107,6 +114,15 @@ sub vcl_recv {
             #unset req.http.Cookie;
         }

    +    # devicedetect changes start
    +    if (req.url ~ "^/\?amp=1"){
    +        return (pass);
    +    }
    +    if (req.http.X-UA-Device ~ "^mobile" || req.http.X-UA-device ~ "^tablet") {
    +        return (pass);
    +    }
    +    # devicedetect changes end
    +
         return (hash);
     }

    @@ -133,6 +149,18 @@ sub vcl_backend_response {

         set beresp.grace = 3d;

    +    # devicedetect changes start
    +    if (bereq.http.X-UA-Device) {
    +        if (!beresp.http.Vary) { # no Vary at all
    +            set beresp.http.Vary = "X-UA-Device";
    +        } elsif (beresp.http.Vary !~ "X-UA-Device") { # add to existing Vary
    +            set beresp.http.Vary = beresp.http.Vary + ", X-UA-Device";
    +        }
    +    }
    +    # comment this out if you don't want the client to know your classification
    +    set beresp.http.X-UA-Device = bereq.http.X-UA-Device;
    +    # devicedetect changes end
    +
         if (beresp.http.content-type ~ "text") {
             set beresp.do_esi = true;
         }
    @@ -176,6 +204,12 @@ sub vcl_backend_response {
     }

     sub vcl_deliver {
    +    # devicedetect changes start
    +    if ((req.http.X-UA-Device) && (resp.http.Vary)) {
    +        set resp.http.Vary = regsub(resp.http.Vary, "X-UA-Device", "User-Agent");
    +    }
    +    # devicedetect changes end
    +
         if (resp.http.X-Magento-Debug) {
             if (resp.http.x-varnish ~ " ") {
                 set resp.http.X-Magento-Cache-Debug = "HIT";

    ```

##### Next Up
{:.no_toc}

 -  [Back to Home](/m2/extensions/amp/)


[pr-3779]: https://github.com/magento/magento2/pull/3779
[pr-9772]: https://github.com/magento/magento2/pull/9772
[devicedetect]: https://github.com/varnishcache/varnish-devicedetect
