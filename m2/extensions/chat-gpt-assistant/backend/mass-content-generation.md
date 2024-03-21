---
layout: default
title: Mass Content Generation
description: magento 2 generate content with chatGPT in bulk
keywords: magento generate content with chatGPT in bulk
category: ChatGPT Assistant
---

# Mass Content Generation

With our extension you can generate content for products in bulk.

> Please note that any existing fields content will be replaced for all selected products.

Go to the `Catalog > Products` page, select the products, and press the `Generate Content with AI` link in the `Actions` menu.

![Generate Mass Action](/images/m2/chat-gpt-assistant/backend/mass_action.png)

On the next page, check the `Generate` checkbox and select prompts for the fields you need to generate content for.

To generate content for the specific store view, select it in the `Scope` dropdown.

![Select Fields to Generate Content](/images/m2/chat-gpt-assistant/backend/mass_action_edit.png)

After saving your selection, task will be added to queue and you will see message `Task "Generate content with AI for x selected products": 1 item(s) have been scheduled for update.`

You can check the status of the task on the `System > Action Logs > Bulk Actions` page.

After the operation is complete, its status will be changed to `Finished Successfully`.

![Action Details](/images/m2/chat-gpt-assistant/backend/action_details.png)
