---
layout: default
title: Apple API Configuration
description: Apple API Configuration
keywords: configure apple api, sign in with apple, apple login
category: SocialLogin
---

# Apple API Configuration

To use Apple login feature, you need to register your site in Apple Developer
account. Unlike other social networks, Apple doesn't give you an application
secret. Instead, you create a private key and Social Login uses it to generate
the secret automatically.

You will need the following values from Apple:

 -  **Services ID** - identifier of your site in Apple
 -  **Team ID** - identifier of your Apple Developer account
 -  **Key ID** and **Private Key** (`.p8` file)

> **Requirements**
>
>  -  [Apple Developer Program](https://developer.apple.com/programs/)
>     membership. Free Apple accounts can't use Sign in with Apple on websites.
>  -  Social Login 1.2.0 or newer.
>  -  Store must use HTTPS and a public domain name. Apple doesn't allow
>     `localhost`, IP addresses or local domains like `.test`.

**1. Create App ID:**

  - Go to [developer.apple.com/account](https://developer.apple.com/account/)
    and open `Certificates, Identifiers & Profiles > Identifiers`.

  - Press `+` button, select `App IDs` and press `Continue`.
    Select `App` type and press `Continue` again.

  - Fill `Description` (e.g. `Example Store`) and explicit `Bundle ID`
    (e.g. `com.example.store`).

  - In `Capabilities` list, check `Sign In with Apple`.
    Press `Continue` and then `Register`.

**2. Create Services ID:**

  - On `Identifiers` page press `+` button, select `Services IDs` and press `Continue`.

  - Fill `Description` and `Identifier` (e.g. `com.example.store.web`).
    Press `Continue` and then `Register`.

    > Customers will see the `Description` on Apple sign in screen,
    > so use your store name.

  - Open created Services ID. To find it, switch the filter at the top right
    of `Identifiers` list from `App IDs` to `Services IDs`.

  - Check `Sign In with Apple` and press `Configure` button near it. Fill the fields:

      - `Primary App ID` - select App ID created on step 1
      - `Domains and Subdomains` - your store domain without `https://`,
        e.g. `example.com`
      - `Return URLs` - `https://[your.domain]/sociallogin/social/callback/id/apple/`

    Press `Next`, `Done`, `Continue` and finally `Save`.

    > **Note:** Apple uses `/callback/` in the URL, while other social networks
    > use `/login/`. Please copy the Return URL from Magento admin
    >
    > **Stores > Configuration > Swissup Social Suite > Social login > Social Networks > Apple**
    >
    > from `Redirect URI` field. The URL must match exactly, including store
    > code and trailing slash.

    ![Redirect URI](/images/m2/sociallogin/api/apple/redirect-uri.png)

    > If your store has several domains or store views with different URLs,
    > add every domain and every `Redirect URI` to the same Services ID.
    > Switch `Scope` in Magento admin to see `Redirect URI` of each store view.

**3. Create private key:**

  - Go to `Certificates, Identifiers & Profiles > Keys` and press `+` button.

  - Fill `Key Name`, check `Sign in with Apple` and press `Configure` near it.
    Select App ID created on step 1 as `Primary App ID` and press `Save`.

  - Press `Continue` and then `Register`.

  - Press `Download` button to save the private key (`AuthKey_XXXXXXXXXX.p8` file)
    and copy `Key ID` from this page.

    > Apple allows to download the key **only once**. Keep the file in a safe
    > place. If you lose it, revoke the key and create a new one.

  - Find your `Team ID` in the top right corner under your account name,
    or in `Membership details` section of your
    [developer account](https://developer.apple.com/account/).

**4. Add credentials to Social Login configuration:**

  - In Magento admin, go to
    `Stores > Configuration > Swissup Social Suite > API Credentials > Apple`
    and fill the fields:

      - `Services ID` - identifier of the Services ID from step 2
        (e.g. `com.example.store.web`). Don't use App ID here.
      - `Team ID` - your Team ID
      - `Key ID` - Key ID from step 3
      - `Private Key` - open downloaded `.p8` file in a text editor and paste
        its whole content, including `-----BEGIN PRIVATE KEY-----` and
        `-----END PRIVATE KEY-----` lines

    ![App Credentials](/images/m2/sociallogin/api/apple/credentials.png)

    Private key is stored encrypted in the database.

**5. Now you can enable Apple login feature in**
    `Stores > Configuration > Swissup Social Suite > Social login > Social Networks > Apple`

### Emails to customers with hidden email address

When customers sign in with Apple, they can choose to hide their real email.
In this case Apple gives your store an address like
`abc123xyz@privaterelay.appleid.com` and forwards emails to the customer.

Apple forwards only emails from registered senders. Otherwise order
confirmations and other store emails won't be delivered. To register senders:

  - Go to `Certificates, Identifiers & Profiles > Services` and press `Configure`
    in `Sign in with Apple for Email Communication` section.

  - Add the domains and email addresses your store sends emails from.
    You can find them in Magento admin at
    `Stores > Configuration > General > Store Email Addresses`.

  - Domains must have an SPF record. If you send emails through a service like
    SendGrid or Amazon SES, check that its SPF and DKIM are configured for your domain.

### Troubleshooting

**Customer name looks like a part of the email address**

Apple shares the customer name only the first time a customer signs in to your
site. If the name is not available, Social Login creates the account with a name
taken from the email address. Customers can change it in their account.

**How to test sign in again as a new customer**

Apple remembers that a customer already authorized your site. To test the first
sign in again, go to [account.apple.com](https://account.apple.com/),
open `Sign-In and Security > Sign in with Apple`, select your site and press
`Stop using Sign in with Apple`.

**"invalid_client" error on Apple page**

Check that `Services ID` in Magento contains the Services ID identifier,
not the App ID, and that `Sign In with Apple` is enabled for this Services ID.

**"Invalid web redirect url" error on Apple page**

`Return URLs` in Services ID configuration doesn't match `Redirect URI` field
in Magento. Copy it from Magento admin once again and check the domain,
store code and trailing slash.

**"Something went wrong. Please try again." after signing in on Apple page**

Apple rejected the private key. Check that `Team ID`, `Key ID` and `Private Key`
belong to the same Apple Developer account, that the key has `Sign in with Apple`
enabled, and that it was not revoked.
