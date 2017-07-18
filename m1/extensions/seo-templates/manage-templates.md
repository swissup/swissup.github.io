---
layout: default
title: Manage Templates
description: magento metadata templates manage
keywords: " magento metadata templates manage, create template "
category: SEO Metadata Templates
---

# Manage Templates
{:.no_toc}

* TOC
{:toc}

Log in store admin. Navigate to `Templates Master` ➔
`SEO Suite` ➔ `Metadata Templates` page.

### Create template

Click on button `New Template` in top right corner to create new template.

![New template](/images/m1/extensions/seo-templates/backend/new-template.png)

You need to choose is it be template for product or for category in dropdown
`Template for`. And in dropdown `SEO Data Name` you need to select is it template for meta title, meta description or meta keywords. Then press
`Continue`.

At new form you have three tabs:

 -  [General](#general-tab)
 -  [Conditions](#conditions-tab)
 -  [Template](#template-tab)

#### General tab

![Tab General](/images/m1/extensions/seo-templates/backend/tab-general.png)

You need to specify template name and store views for which you want to apply
this template.

#### Conditions tab

![Tab Conditions](/images/m1/extensions/seo-templates/backend/tab-conditions.png)

You can add a set of conditions to determine products or categories for which
template will be applied.

#### Template tab

![Tab Template](/images/m1/extensions/seo-templates/backend/tab-template.png)

Here you create template string that will be used to generate metadata.

When you finish creating template click `Save` button.

Bellow you can find list of allowed directives for metadata templates.

##### Directives for product template

**`{% raw %}{{attribute code="..." [prefix="..."] [sufix="..."] [exclude="..."] [limit="..."] [separator="..."]}}{% endraw %}`** - value of attribute by its code. You can set multiple codes separated with comma. It will return first not empty value. For example, some of your products have attribute manufacturer and other have - brand. In such case you can use `{% raw %}{{attribute code="brand,manufacturer"}}{% endraw %}`. With configurable product this directive can return values of attribute from child products. You can set max number of values (`limit="5"`) and separator (`separator=", "`). `exclude` option allows you to exclude some values from output. It can containe multiple values separated with comma.

**`{% raw %}{{ifexist code="..." [then="..."] [else="..."]}}{% endraw %}`** - condition directive returns `then` if attribute with code `code` has value. Otherwise it returns `else`.

**`{% raw %}{{price [prefix="..."] [sufix="..."]}}{% endraw %}`** - product price.

##### Directives for category template

**`{% raw %}{{attribute code="..." [prefix="..."] [sufix="..."] [exclude="..."] [limit="..."] [separator="..."]}}{% endraw %}`** - value of attribute by its code. You can set multiple codes separated with comma. It will return first not empty value. For example, some of your products have attribute manufacturer and other have - brand. In such case you can use `{% raw %}{{attribute code="brand,manufacturer"}}{% endraw %}`. With configurable product this directive can return values of attribute from child products. You can set max number of values (`limit="5"`) and separator (`separator=", "`). `exclude` option allows you to exclude some values from output. It can containe multiple values separated with comma.

**`{% raw %}{{ifexist code="..." [then="..."] [else="..."]}}{% endraw %}`** - condition directive returns `then` if attribute with code `code` has value. Otherwise it returns `else`.

**`{% raw %}{{products attribute="..." [prefix="..."] [sufix="..."] [exclude="..."] [limit="..."] [separator="..."]}}{% endraw %}`** - get values of attribute with code attribute from category products. You can set max number of values (`limit`) and separator (`separator`). With exclude option you can exclude some values from output.

**`{% raw %}{{subcats [prefix="..."] [sufix="..."] [exclude="..."] [limit="..."] [separator="..."]}}{% endraw %}`** - get get subcategories for category. You can set max number of subcategories to output (`limit`) and separator (`separator`). With  exclude option you can exclude some subcategories from output by their names.

**`{% raw %}{{minprice [prefix="..."] [sufix="..."]}}{% endraw %}`** - mininal price among all category products.

##### Comment

With `sufix` and `prefix` options you can add some text before or after
output. Works only when output is not empty.

Directive options in square brackets (`[...]`) are optional.

### Edit template

Click on the template you want to edit in manage templates grid. After that
you’ll see a form identical to form described in
[Create template](#create-template) paragraph.

Existing templates have additional tab `Generation Log`. You can find results of processing current template in this tab.

![Tab Log](/images/m1/extensions/seo-templates/backend/tab-log.png)
