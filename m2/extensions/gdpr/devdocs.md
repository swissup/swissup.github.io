---
layout: default
title: GDPR developers documentaion
description: How to integrate your module with GDPR
category: GDPR
---

# Developers documentaion

In these tutorials we'll show you how to make your Magento2 module GDPR friendly.

Our module provide easy solutions for the following cases:

 -  If your module uses personal data collected with one of existing Magento forms
    (not your form) in a way that isn't informed to the client, you must add a
    consent about this usage to the existing form.
 -  If your module collects personal data with its own form, you must a consent
    below your form.
 -  If your module stores personal data you must delete/anonymize it when client
    make a deletion request.
 -  If you module creates a cookie, you must inform a client about purpose of
    your cookie and ask permission to save it.

Based of the information above, choose a section you are interested in:

 -  [Add additional consent(s) to the existing form](additional-consent/)
 -  [Add consent(s) to your own form](form-with-consent/)
 -  [Process anonymization request](process-client-request/)
 -  [Inform about custom cookies](cookies/)

Additionally you may look at existing modules that utilize GDPR features:

 -  [swissup/gdpr-askit](https://github.com/swissup/gdpr-askit)
 -  [swissup/gdpr-testimonials](https://github.com/swissup/gdpr-testimonials)

#### Next up
{:.no_toc}

 -  [Back to Main Page](/m2/extensions/gdpr/)
