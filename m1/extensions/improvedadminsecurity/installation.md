---
layout: default
title: Improved Admin Security
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

* For BlackBerry devices please visit `http://m.google.com/authenticator` on
your BlackBerry.

### Complete the installation:

1. Navigate to `Admin > Tools > Compilation` and deactivate the compilation
mode for your store.
2. Check if your Magento store cache is enabled.
3. Unpack all files from extension archive into your magento store root directory.
4. Refresh your magento store cache.
5. Logout from your store admin and then login back, to refresh your admin user
access rights.

### Activating the extension

* Open your admin user account settins at `Admin > System > Permisions > Users >
Your User > Tab "Two Factor Authentication"`

* Scan QR code with Google Authenticator application using your smartphone.

* Insert the key you've got on your mobile device into the verification key field.

* That's all. You've enabled the protection for that admin user. Try logout
and login with verification key. Please notice that key is got refreshed every
30 seconds. In case you have not enabled the protection for some users, the
verification key will be ignored for those users.

* Navigate to `System > Configuration > Templates-Master > ImprovedAdminSecurity`
and enable extension for any store you need.

### Uninstall/Disable:

In case you lost your smartphone or don't have access you can disable the
extension via ftp:

* Please copy `TM_TwoFactorAuthentication_Disable` from `app/code/local/TM/TwoFactorAuthentication/scripts/` to your store root directory.
* Rename it to TM_TwoFactorAuthentication_Disable.php.
* Open url `http://[base store url]/TM_TwoFactorAuthentication_Disable.php`
* Remove file `TM_TwoFactorAuthentication_Disable.php` in your store folder.
* Now your can login to your store and reset or disable extension.
* Also the protection can be disabled by renaming `app/etc/modules/TM_TwoFactorAuthentication.xml to TM_TwoFactorAuthentication.xml.off`. In such case the extension will not be loaded.

#### After you install an extension you can go to:

* [Support](https://swissuplabs.com/contacts/)
* [Forum](https://swissuplabs.com/magento-forum/)