---
layout: default
title: Improved Admin Security Installation
description: magento security module installation
keywords: " magento security extension, admin security extension, magento
security module, magento login protection, magento secure admin login, magento
admin extension "
category: Improved Admin Security
---

# Improved Admin Security installation instructions

### Before extension installation

Please check if your mobile device is compatible with Google Authenticator
mobile application. Our Google Authenticator extension is compatible with every
iOs device such as iPhone, iPad or iPod touch, Android device or BlackBerry
device. Follow next steps:

* For Android devices please open the Google Play and search for Google
Authenticator application.

* For iOs devices please visit the Apple app store and search for Google
Authenticator application.

* [Authy for iOS, Android, Chrome, OS X](https://www.authy.com/)
* [FreeOTP for iOS, Android and Pebble](https://apps.getpebble.com/en_US/application/52f1a4c3c4117252f9000bb8)
* [Google Authenticator for iOS](https://itunes.apple.com/us/app/google-authenticator/id388497605?mt=8)
* [Google Authenticator for Android](https://play.google.com/store/apps/details?id=com.google.android.apps.authenticator2)
* [Google Authenticator (port) on Windows Store](https://www.microsoft.com/en-us/store/p/google-authenticator/9wzdncrdnkrf)
* [Microsoft Authenticator for Windows Phone](https://www.microsoft.com/en-us/store/apps/authenticator/9wzdncrfj3rj)
* [LastPass Authenticator for iOS, Android, OS X, Windows](https://lastpass.com/auth/)
* [1Password for iOS, Android, OS X, Windows](https://1password.com)

### Complete the installation:

### Activating the extension

* Open your admin user account settins at `System > Permisions > All Users >
Your User > Tab "Two Factor Authentication"`

* Scan QR code with Google Authenticator application using your smartphone.

* Insert the key you've got on your mobile device into the verification key field.

* That's all. You've enabled the protection for that admin user. Try logout
and login with verification key. Please notice that key is got refreshed every
30 seconds. In case you have not enabled the protection for some users, the
verification key will be ignored for those users.

### Uninstall/Disable:

In case you lost your smartphone or don't have access you can disable the
extension via ssh:

```bash
cd <magento_root>
bin/magento module:disable Swissup_Tfa
bin/magento setup:upgrade
```

#### After you install an extension you can go to:

* [Support](https://swissuplabs.com/contacts/)
* [Forum](https://swissuplabs.com/magento-forum/)