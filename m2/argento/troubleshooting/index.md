---
layout: default
title: Argento for Magento 2 Troubleshooting
description: Fixing some problems in Argento on Magento 2
category: Argento
---

# Troubleshooting

### Argento "Can't generate content" at Magento 2.2 homepage

**Magento 2.2** version is not using that widget part anymore:

```
conditions_encoded="a:1:[i:1;a:4:[s:4:`type`;s:50:`Magento|CatalogWidget|Model|
Rule|Condition|Combine`;s:10:`aggregator`;s:3:`all`;s:5:`value`;s:1:`1`;
s:9:`new_child`;s:0:``;]]"
```

but it is included in installation for earlier versions support.

**Fixing**

 1. Open your homepage content and turn off **WYSIWYG** editor to see the raw code
 2. Find all **Highlight** widgets
 3. Remove that part ```conditions_encoded="a:1:[i:1;a:4....;]]"``` from every widget
 4. Save. Enjoy!

### Getting error: Required parameter 'theme_dir' was not passed

Such errors can happen if you have __"virtual"__ themes instead of __"normal"__.
That sometimes happens during the upgrade.

**Fixing**

* Go to `PhpMyAdmin` > `Your Magento2 database`
* Find the `"theme"` table
* And make sure that all theme types are set to `'0'`
* In case any of them have `type` = `'1'` change it to `'0'`
* Error should be gone

### Troubleshooting Checklist

Often the problems are not related to Swissup theme or modules and it takes
much time to get your **credentials**, **login** to server, **find out**
the problem solution.


Before developers check your problem we recommend you to run through the following
list points. It will save your time and make the support faster and effective:

- [x] Swith your current **Argento** theme design to Magento default **LUMA**

     * `Admin > Content > Configuration > Find your theme > Edit` > Set **Magento Luma**

     * <video controls width="800">
            <source src="https://webm.red/YddF.webm"
                    type="video/webm">
            Sorry, your browser doesn't support embedded videos.
        </video>

     > **Clear cache** and test the behavior at default theme

- [x] **Disable** all **Swissup** modules (run following terminal command from your store root folder)

    ```bash
    bin/magento mo:st | grep 'Swissup_' | xargs bin/magento mo:dis
    ```

    > **Clear cache** and test if the error still there

- [x] **Disable** all 3rd-party modules

    > **Clear cache** and test if the error still there

- [x] If the problem still stays - check if you have the latest **Argento** version.
     * `Admin > Swissup > Module Management` - modules' versions should be 'GREEN'
     * Please [UPGRADE](/m2/argento/installation/#upgrade-instructions) when required.

#### If none of previous actions haven't fixed/removed the problem

 *  Please, [create a ticket](https://argentotheme.com/helpdesk) in **Argento Helpdesk**.
 *  Send the store **credentials** (SSH/FTP/Magento admin etc.) if required
 *  Add the screenshots for *better/faster* understanding

##### Next up

 -  [Small css customizations](/m2/argento/customization/custom-css/)
 -  [Create Argento based custom theme](/m2/argento/customization/custom-theme/)
 -  [View list of included modules](/m2/argento/#extensions)
