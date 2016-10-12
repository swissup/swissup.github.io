---
layout: default
title: Custom css for Amazon style menu
description: How to add additional styles for amazon-like menu
keywords: amazon menu styles
category: Navigationpro
---

# Custom css

Menu is almost ready for the final step.

Before moving forward, let's make parent category styles a bit larger and brighter.

 1. Add the following styles into your theme css:

    ```css
    /* First level icon */
    .navpro-amazon > .parent > a.nav-a-with-toggler {
        padding-right: 25px !important;
    }
    .navpro-amazon > .parent > a.nav-a-with-toggler:after {
        position: absolute;
        right: 10px;
        bottom: 10px;
        content: '⮟';
        color: #fff;
        font-size: 10px;
        line-height: inherit;
    }

    /* Parent links styles */
    .navpro .nav-dropdown .parent > a {
        font-size: 15px;
        font-weight: bold;
    }
    .navpro .nav-dropdown .parent > a,
    .navpro .nav-dropdown .parent > a.nav-a-with-toggler:hover {
        color: #ff7800;
    }
    /* Reset styles for dropdown items */
    .navpro .nav-dropdown .parent > a.nav-a-with-toggler {
        font-size: 13px;
        font-weight: normal;
        color: #272e3d;
    }
    ```

    > Not sure where to add the styles? In case you are using our Argento theme,
    > use [custom-css feature](/m1/argento/theme-customization/small-changes/#custom-styles-and-javascript)
    > that allows to add styles, without core files overrides

 2. Check result on frontend:

    ![Larger and brighter links](/images/m1/navigationpro/amazon/custom-css/frontend-sale-result.png)

##### Next up

  -  [**Proceed to next chapter**](../group-categories-into-single-dropdown/)
  -  [Back to previous chapter](../prepare-dropdown-contents/category-sale/)
  -  [Back to 'Prepare Dropdown Contents'](../prepare-dropdown-contents/)
  -  [Back to contents](../#contents)
