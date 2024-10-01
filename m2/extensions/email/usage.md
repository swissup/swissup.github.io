---
layout: default
title: Email Usage
description: How to setup email package
keywords: "email setup usage guide"
category: Email
---

# Email setup

1. In menu

    `Marketing -> Communications -> Email Services` or
    `Swissup -> Email Services.`

    > **Note:** Paths are identical
![example1](https://user-images.githubusercontent.com/412612/40238984-6f0b1262-5abd-11e8-89af-8de7a6a93fa7.png)
 2. Press "Add new" button

 3. Create service
    - Specify the Name
    - Choose Type from drop-down
    - Fill all required fields
    - Before enabling you have to click `Save and Continue` and `Check service` buttons
    - Enable/Disable

### Gmail Service Setup

If `Type` selects `Gmail`. Use an [App Password](https://security.google.com/settings/security/apppasswords): Generate a new App Password for your Gmail account. https://security.google.com/settings/security/apppasswords
[Sign in with App Passwords](https://support.google.com/accounts/answer/185833)

![example](https://user-images.githubusercontent.com/412612/40238625-6bdf426c-5abc-11e8-98ca-9b459efa3fa4.png)

 4. Navigate to

    `Stores -> Configurations -> Swissup -> Email` or
    `Stores -> Configurations -> Advanced -> System -> Mail Sending Settings`

    > **Note:** Paths are identical

 5. Select new service in the "Default Transport Email Service" drop-down
 ![config](https://user-images.githubusercontent.com/412612/40239232-2b0aaf5e-5abe-11e8-94c5-b96862d7ccc9.png)

 6. Save

### Gmail API with Google OAuth 2.0 Support Service Setup

> - [Beginning September 30, 2024, third-party apps that use only a password to access Google Accounts and Google Sync will no longer be supported.](https://workspaceupdates.googleblog.com/2023/09/winding-down-google-sync-and-less-secure-apps-support.html)
>
> - [Transition from less secure apps to OAuth](https://support.google.com/a/answer/14114704?hl=en)

If the `Type` field is set to `Gmail OAuth 2.0`, please follow the [Google instructions](https://developers.google.com/identity/openid-connect/openid-connect#registeringyourapp) to create the required credentials. In your credentials, you need to add `Authorized redirect URIs` with at least one URI, such as `https://localhost/swissup_email/gmail/getOAuth2Token/` (replace `localhost` with your Magento store URL).
![Gmail OAuth2 Credential](https://github.com/swissup/module-email/assets/412612/47802486-2725-4642-91e2-8ff8ead58389)

###### Customize the User Consent Screen

In the `OAuth consent screen`, you need to enable the `Gmail API` scope. ![Add Scope](https://github.com/swissup/module-email/assets/412612/84204084-a0be-4c54-8e1b-72e8c53c08e8). Also, add your Gmail email address as a Test User.

After setting up your credentials, enter the following fields:
- `Client ID` in `User (key)`
- `Client secret` in `Password (secure key)`

In the `Email (from)` field, enter your Gmail email address.

 4. Navigate to

    `Stores -> Configurations -> Swissup -> Email` or
    `Stores -> Configurations -> Advanced -> System -> Mail Sending Settings`

    > **Note:** Paths are identical

 5. Select new service in the "Default Transport Email Service" drop-down
 ![config](https://user-images.githubusercontent.com/412612/40239232-2b0aaf5e-5abe-11e8-94c5-b96862d7ccc9.png)

 6. Save

### Logging

 1. Navigate "Stores → Configurations → Advanced → System → Mail Sending Settings"
 2. "Logging Enable" set Yes
 3. Navigate to "Marketing → Communications → Email Logs"

##### See also

Great! Now you might want to see previous:

- [Installation](/m2/extensions/email/installation/)
- [Changelog](/m2/extensions/email/changelog/)
