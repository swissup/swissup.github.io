---
layout: default
title: Mall homepage original content
description: Mall homepage original content
keywords: "Mall, original, content"
category: Argento
---

# Mall homepage original content

```html
{% raw %}<div class="callout-home-top col2-set">
    <div class="col-1">
        {{widget type="easyslide/insert" slider_id="argento_mall"}}
    </div>
    <div class="col-2">
        {{block type="newsletter/subscribe" name="homepage.newsletter" template="newsletter/subscribe.phtml"}}
        {{widget type="easybanner/widget_placeholder" placeholder_name="argento-mall-home-top"}}
    </div>
</div>
<div class="col-home-set">
    <div class="col-side sidebar">
        {{block type="navigationpro/navigation" template="tm/navigationpro/sidebar.phtml" name_in_layout="navpro-homepage-left" menu_name="argento_mall_left" enabled="1"}}
    </div>
    <div class="col-main">
        <div class="col3-set">
            <div class="col-1 col-mobile-50">
                {{widget type="highlight/product_special" name="homepage.special" title="Deal of the week" class_name="block block-alt" products_count="1" column_count="1" template="tm/highlight/product/grid.phtml"}}
            </div>
            <div class="col-2 col-mobile-50">
                {{widget type="highlight/product_attribute_yesno" attribute_code="recommended" class_name="editor-choice  block block-alt" name="homepage.editor_choice" title="Editor's choice" products_count="1" column_count="1" template="tm/highlight/product/grid.phtml"}}
            </div>
            <div class="col-3">
                <div class="block block-alt video-of-day">
                  <div class="block-title"><span>Video of the day</span></div>
                  <div class="block-content">
                    <div class="video-container">
                    <object><param name="movie" value="http://www.youtube.com/v/6BQfCoqbubE"><param name="allowFullScreen" value="true"><param name="allowScriptAccess" value="always"><param wmode="transparent"><embed src="http://www.youtube.com/v/6BQfCoqbubE" type="application/x-shockwave-flash" allowfullscreen="true" allowScriptAccess="always" width="250" height="201" wmode="transparent"></object>
                    </div>
                    <p><small>Amazing Canon Rebel XSi commercial that I saw on TV the other day.</small></p>
                  </div>
                </div>
            </div>
        </div>
        {{widget type="highlight/product_featured" name="homepage.featured" class_name="block block-featured-homepage" title="Featured products" products_count="6" column_count="3" template="tm/highlight/product/grid-wide.phtml"}}
        {{widget type="highlight/product_new" name="homepage.new" title="New products" products_count="30" template="tm/highlight/product/slider.phtml"}}
    </div>
</div>{% endraw %}
```