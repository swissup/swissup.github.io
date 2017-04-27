---
layout: default
title: Adding checkout fields to transactional emails
description: Firecheckout documentation
keywords: magento additional checkout fields, checkout fields in email
category: Firecheckout
---

# Adding checkout fields to transactional emails

Navigate to _Admin > System > Transactional emails_ and do the following:

 1. Click **Add New Template**.
 2. At the `Template field` select **New Order for Guest** from the drop-down list.
 3. Then press **Load Template** button.
 4. Set the Template name field with My "New Order Guest" for example.
 5. Set the Template Content field with the following code in the desired position:

    ```html
    {% raw %}{{depend order.getData('tm_field1')}}
        <p style="font-size:12px; line-height:16px; margin:0;">
            Field #1: {{htmlescape var=$order.getData('tm_field1')}}
        </p>
    {{/depend}}
    {{depend order.getData('tm_field2')}}
        <p style="font-size:12px; line-height:16px; margin:0;">
            Field #2: {{htmlescape var=$order.getData('tm_field2')}}
        </p>
    {{/depend}}
    {{depend order.getData('tm_field3')}}
        <p style="font-size:12px; line-height:16px; margin:0;">
            Field #3: {{htmlescape var=$order.getData('tm_field3')}}
        </p>
    {{/depend}}
    {{depend order.getData('tm_field4')}}
        <p style="font-size:12px; line-height:16px; margin:0;">
            Field #4: {{htmlescape var=$order.getData('tm_field4')}}
        </p>
    {{/depend}}
    {{depend order.getData('tm_field5')}}
        <p style="font-size:12px; line-height:16px; margin:0;">
            Field #5: {{htmlescape var=$order.getData('tm_field5')}}
        </p>
    {{/depend}}{% endraw %}
    ```

 6. Click save Template.

Do the same operations in order to create template for registered customers. Then navigate to `Admin > System > Configuration > Sales > Sales Email > Order`.

Add the same code to the `New Order Confirmation Template` and `New Order Confirmation Template for Guest`. Save.