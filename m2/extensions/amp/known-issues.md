---
layout: default
title: AMP known issues
description: Known issues of AMP site on Magento 2
category: Accelerated Mobile Pages
---

# Known Issues

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

##### Next Up

 -  [Back to Home](/m2/extensions/amp/)


[pr-3779]: https://github.com/magento/magento2/pull/3779
[pr-9772]: https://github.com/magento/magento2/pull/9772
