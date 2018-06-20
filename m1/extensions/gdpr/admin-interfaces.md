---
layout: default
title: GDPR Admin Interfaces
description: GDPR Admin Interfaces
keywords: gdpr admin interfaces
category: GDPR
---

# Admin Interfaces

 -  [Accepted Consents](#accepted-consents)
 -  [Client's Requests](#clients-requests)

### Accepted Consents

Grid located at `Templates Master > GDPR > Accepted Consents`.
It shows all consents accepted by customers.

![Accepted Consents Grid](/images/m1/gdpr/backend/consents-grid.png)

### Client's Requests

Grid located at `Templates Master > GDPR > Client's Requests`.
It shows customer's personal data manipulation requests.

![Client Requests Grid](/images/m1/gdpr/backend/requests-grid.png)

##### Available actions:

 -  Process requests - allows to process client's request manually.
 **Attention!!!** If request type is delete, customer's data **will be deleted or anonymized**

 -  Cancel requests - cancel client's request (changes status to cancelled)

 -  Delete requests - delete client's request

##### Requests statuses

Status    | Description
----------|--------------------------------------------------------------
Pending   | Request created, but not confirmed by the client *(this status not currently used)*.
Confirmed | Request confirmed by the client. This is the default status for logged-in clients.
Running   | Request is currenlty processing.
Processed | Request processing is finished. You may use “View Report” link to see details.
Failed    | Request processing failed. This may happend if client has incompleted orders.
Canceled  | Request was canceled.
