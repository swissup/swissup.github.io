---
layout: default
title: ChatGPT Assistant Prompts
description: magento 2 ChatGPT Assistant Prompts
keywords: magento ChatGPT Assistant Prompts
category: ChatGPT Assistant
---

# ChatGPT Assistant Prompts

### Grid

ChatGPT Assistant Prompts grid is located at _Swissup > ChatGPT Assistant > Prompts_.

Right after installation, there will be a number of predefined prompts.

![ChatGPT Assistant Prompts](/images/m2/chat-gpt-assistant/backend/prompts-grid.png)

### Form

Click `Add New Prompt` button to open prompt edit page.

![Prompt Form](/images/m2/chat-gpt-assistant/backend/prompts-form.png)

Field             | Description
------------------|------------------------------------------------------
Enabled           | Enable/Disable the prompt
Name              | Descriptive Prompt Name
Prompt Text       | Enter text to send to chatGPT. You can use directives, see below.
Use for Fields    | Select fields for which the prompt will be listed in chat window dropdown
Default for Field | Select a field for which the prompt will be used by default when clicking the "Generate" button

#### Available Directives

**{% raw %}{{attribute code="..." [prefix="..."] [sufix="..."] [exclude="..."]}}{% endraw %}** - value of attribute by its code. You can set multiple codes separated with comma or use "*" for all attributes. With configurable product this directive can return values of attribute from child products. The `exclude` option allows you to exclude some values from output. It can contain multiple values separated with comma.

*Example:*

```
product attributes: {% raw %}{{attribute code="*"}}{% endraw %}
```

*Result:*

```
product attributes: Activity: Yoga, Hiking, School. Style Bags: Backpack, Laptop. Material: Burlap, Nylon, Polyester. Strap/Handle: Adjustable, Double, Padded. Features: Hydration Pocket, Audio Pocket, Waterproof, Lightweight.
```

**{% raw %}{{categories [depth="N"] [prefix="..."] [sufix="..."]}}{% endraw %}** - category product is assigned for. When product assigned to multiple categories all of them outputed. You can set how deep of category tree goes: if depth=1 then directive returns only direct parents, if depth=2 - direct parents and parents of those parents, and so on. You can use options prefix, suffix, and exclude also.

*Example:*

```
product categories: {% raw %}{{categories}}{% endraw %}
```

*Result:*

```
product categories: Bags, Gear
```

**{% raw %}{{langCode}}{% endraw %}** - language code on the current scope. Use it to instruct the model on which language to use in content generation.

*Example:*

```
Create short product description for {% raw %}{{attribute code="name"}}{% endraw %} in {% raw %}{{langCode}}{% endraw %} language.
```

*Result:*

```
Create short product description for Fusion Backpack in en_US language.
```

With sufix and prefix options you can add some text before or after output. Works only when output is not empty.

Directive options in square brackets ([...]) are optional. If you want to use option please do not wrap it in square brackets.

##### Next Up

 -  [Back to Home](/m2/extensions/chat-gpt-assistant/)
 -  [Back to Admin Interfaces](/m2/extensions/abandoned-cart/backend/)
