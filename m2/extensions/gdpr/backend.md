---
layout: default
title: GDPR backend interfaces
description: GDPR backend interfaces
category: GDPR
---

# Backend Interfaces

* TOC
{:toc}

### Cookie Registry

This page is located at _Swissup GDPR > Cookie Registry_. You can register
additional cookies, edit description of system cookies per store view, and
create/edit cookie groups.

> If you whould like to create a pre-checked cookie consent, use
> "View Cookie Groups" button and then edit the group you need.

Also you have an access to blocked cookies list at this page. This list is useful to check
if every cookie is registered in the system and visitors can exlicitly allow or decline
them. Normally, this list should be empty. When it's not - you should examine
blocked cookies and add them to the registry, or remove the script that wants
to create them.

> Blocked cookies - is the list of cookies that some script was trying to create while
> this cookie is not visible at the
[frontend cookie settings page](/m2/extensions/gdpr/cookie-settings/).

![Cookie Registry](/images/m2/gdpr/backend/cookie-registry.png)

### Accepted Consents

This page is located at _Swissup > GDPR > Accepted Consents_. You can view the
list of accepted personal data and cookie consents on this page.

![Accepted Consents](/images/m2/gdpr/backend/accepted-consents.png)

### Client's Requests

This page is located at _Swissup > GDPR > Client's Requests_. You can cancel,
process, and delete requests on this page.

![Client's Requests](/images/m2/gdpr/backend/clients-requests.png)

#### Possible requests statuses

Status      | Description
------------|------------
Pending     | Request created, but not confirmed by the client. **This status is not currently used by the module.**
Confirmed   | Request confirmed by the client. This is the default request status for logged-in clients.
Running     | Request is currenlty processing.
Processed   | Request processing is finished. You may use "View Report" link to see details.
Failed      | Request processing failed. This may happend if client has incompleted orders.
Canceled    | Request was canceled.

#### Report examples

**Successfull request processing:**

![Successfull request processing](/images/m2/gdpr/backend/clients-requests-report-success.png)

**Failed request processing:**

![Failed request processing](/images/m2/gdpr/backend/clients-requests-report-failure.png)

#### Next up
{:.no_toc}

 -  [Back to Main Page](/m2/extensions/gdpr/)
