---
layout: default
title: Akismet
description: >
    Magento2 module for Akismet integration
keywords: >
    magento akismet
category: Akismet
---

# Akismet

Magento2 module for Akismet integration

- check contact us posts is a spam
- check product review posts is a spam
- validaion akismet api key

### Contents

1.  [Installation](installation/)
2.  [Configuration](#configuration)
    - [Main](#main)
3. [Changelog](changelog/)

### Configuration

![Akismet configuration](/images/m2/akismet/configuration.png)

##### Main
- Akismet API key. Akismet requires an API key for usage. You can get one by signing up for a WordPress.com account. You do not need to activate a blog. Simply acquiring the account will provide you with the API key.
- Verify Api key. Use button for used to verify that an Akismet API key is valid. In most cases, you will not need to check, but if you need a sanity check, or to determine if a newly acquired key is active, you may do so with this method.
- Enable spam checking for Contact Form. Default Yes.
- Enable spam checking for Product Review Form. Default Yes.

##### Easy Way To Get Free Akismet API Key
Akismet is one of those few WordPress plugins which comes with the stock installation of WordPress. In order to activate it and start using it, you need to add an API key.

When you click on “Get your key”, you will be directed to Akismet’s website where you will get lost looking for the non-existent “free” option.

Here is the way out:

- Open [link](https://akismet.com/account/add-subscription/choose-plan).
- Click on “Get your key.”
- Under the “Personal Contribution” plan, select ” Basic : Use Akismet for Free on a personal site”.
- On the next page, move the slider all the way to the left under the column which says “What is Akismet worth to you?”
- Drag this tp $0
- Finish the sign-up and click on “Continue”.

If you ever lose your Akismet API key, you can use this [link](https://akismet.com/resend/) to recover your lost API key.
