---
layout: default
title: SEO HTML Sitemap Integration
description: SEO HTML Sitemap integration with other modules
keywords: seo html sitemap integration
category: SEO HTML Sitemap
---

# Adding extension links to sitemap

Other extensions can add their links to sitemap
using `tm_seohtmlsitemap_prepare_custom_links` event.
Here is example how its done in [Highlight](/m1/extensions/highlight) extension:

1.  add event listener in `config.xml` in `frontend` section:

    ```xml
    <events>
        <tm_seohtmlsitemap_prepare_custom_links>
            <observers>
                <highlight>
                    <class>highlight/observer</class>
                    <method>addLinks</method>
                </highlight>
            </observers>
        </tm_seohtmlsitemap_prepare_custom_links>
    </events>
    ```

2.  create observer in `Model/Observer.php`:

    ```php
    <?php
    class TM_Highlight_Model_Observer
    {
        /**
         * Add Highlight links to HTML Sitemap
         *
         * @param Varien_Event_Observer $observer
         * @return TM_Highlight_Model_Observer
         */
        public function addLinks($observer)
        {
            $links = $observer->getLinks();
            $pages = Mage::helper('highlight')->getPages();
            $links->addData($pages);
            return $this;
        }
    }
    ```

3.  in helper you can add module specific code to get links array:

    ```php
    <?php
    public function getPages()
    {
        $pages = array();
        // module specific code to get pages
        return $pages;
    }
    ```

    It should generate array in the following format:

    ```
    array(
        [link_1] => array(
            [name] => Link Text,
            [url] => Link URL
        ),
        [link_2] => array(
            [name] => Link Text,
            [url] => Link URL
        ),
        ...
    )
    ```

##### Next Up

 -  [Back to Home](/m1/extensions/seo-html-sitemap/)
