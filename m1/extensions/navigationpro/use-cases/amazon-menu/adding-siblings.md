---
layout: default
title: Adding siblings to Amazon menu dropdown
description: Adding siblings to Amazon menu dropdown
keywords: amazon, siblings
category: Navigationpro
---

# Navigation AmazonStyle menu: Adding siblings

Some customers need to add other links alongside **"Departments"** dropdown

#### Here're simple steps to add your links there:

 1. Create CMS block `additional_navigation` and assign it to your theme.
 2. Add following content there _(change links and titles)_:

    ```html
    <li class="level0 nav-li level-top">
        <a class="nav-a level-top nav-a-level0" href="link1">
            <span class="nav-span">Item1</span>
        </a>
    </li>
    <li class="level0 nav-li level-top">
        <a class="nav-a level-top nav-a-level0" href="link2">
            <span class="nav-span">Item2</span>
        </a>
    </li>
    <li class="level0 nav-li level-top">
        <a class="nav-a level-top nav-a-level0" href="link3" >
            <span class="nav-span">Item3</span>
        </a>
    </li>
    ```
3. Create **[custom.xml](http://docs.swissuplabs.com/m1/argento/theme-customization/small-changes/#custom-layout-update-file)**
4. Add following call of that block there:

    ```xml
    <layout version="0.1.0">
        <default>
          <reference name="navigationpro.top.additional">
            <block type="cms/block" name="Promo_en">
              <action method="setBlockId"><block_id>additional_navigation</block_id></action>
            </block>
          </reference>
        </default>
    </layout>

    ```
5. Save and clear store cache.


##### Next up

  -  [Back to 'Amazon Menu' contents](../#contents)
  -  [Back to NavigationPro use cases](../../)
