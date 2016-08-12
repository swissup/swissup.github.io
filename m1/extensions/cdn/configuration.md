---
layout: default
title: CDNconfiguration
description: CDN configuration options
category: CDN
---

# Configuration

 - [Setup](#setup)
 - [General section](#general-section)
 - [Amazon section](#amazon-section)
 - [Amazon S3 section](#amazon-s3-section)
 - [Amazon CloudFront section](#amazon-cloudfront-section)
 - [DNS-based Cloud section](#dns-based-cloud-section)
 - [Rackspace section](#rackspace-section)

## Setup

1. Navigate to System > Configuration > Templates Master > CDN
2. First you have to decide which type of CDN you are going to use. Right now our extension supports Amazon CloudFront, Amazon S3 storage and DNS based CDN services. We recommend to use CloudFront if you are just starting. Please notice that Amazon CloudFront and S3 are paid services and your final cost will depend on amount of traffic your stores get. In case you decided to use Amazon S3 or CloudFront you will need to get security credentials in order to control content on Amazon servers. That can be easily done at https://console.aws.amazon.com/iam/home?#security_credential . In case you want to make it in more secure way we suggest to use IAM users access. You can create new user and get API keys at https://console.aws.amazon.com/iam/home?#users . In case you decided to go with IAM users you have to assign “CloudFront Full Access” permissions in case you are using CloudFront CDN for example
3. Our CDN extension supports both default Magento and Fooman CSS/JS merge feature. In order to avoid any problems with merged files we do recommend to disable berge before enabling CDN and clearing temporary created merged CSS/JS files in temp folder.
4. After you entered Amazon API info please click save config button. After that Magento will be able to connect to Amazon AWS.

    -    For Amazon S3 users. Please go to https://console.aws.amazon.com/s3/home and create new bucket that will be used to store and distribute your media files. After that in permission settings of that bucket you should add “View” rights to “Everyone”.
    -    For Cloudfront users: Please select create new distribution in “Distribution Id” field. Due to technical requirements it will take up to 20 minutes to make distribution active. You will be able to see list and status of all your distributions at https://console.aws.amazon.com/cloudfront/home . After status of you distribution will become “Deployed” you can proceed with further steps.
    -    For DNS based CDN users: You should set domain where your files will be redistributed from.
    -    For Rackspace users: Please go to https://cart.rackspace.com/cloud/?cp_id=public_cloud. Create new container that will be used to store files.

After all steps described above will be finished you can enable CDN extension. Our module configuration provide complete control over media files that should be placed on CDN. Also it provides separate interface that allow to exclude files from placing on CDN.

## General section

![General CDN configuration options](/images/m1/extensions/cdn/configuration1.png)

Option          | Description
----------------|------------
Enabled         | Disable or enable module functionality
Adapter         | Select using CDN provider
Developer mode  | Disable or enable module functionality only on developer mode
Product Images  | Disable or enable sending product images on cdn
Category Images | Disable or enable sending category images on cdn
Javascripts     | Disable or enable sending js files (CSS/JS merge must be enabled)
Css             | Disable or enable sending css files (CSS/JS merge must be enabled)
Exception       | List of not send this files on cdn
Secure Url      | Disable or enable using secure url from CDN storage
Easy Banner integration| Disable or enable Easy Banner integration
Easy Slider integration| Disable or enable Easy Slider integration


## Amazon section

![Amazon configuration options](/images/m1/extensions/cdn/configuration2.png)

Amazon provides storage services to store data in form of files and folders. This easy to use mechanism allows you to store and retrieve service from Amazon server. To use any service on web, a User ID and Password is required. The AWS Access Key and Secret Key serve as ID and Password to access Amazon S3.

Option          | Description
----------------|------------
AWS Access Key  | This is actually a  username . It is alphanumeric text string that uniquely identifies the user who owns the account. No two accounts can have the same AWS Access Key.
AWS Secret Key  | This key plays the role of a  password . It's called secret because it is assumed to be known by the owner only that's why, when you type it in the given box, its displayed as asterisk or dots. A Password with Access Key forms a secure information set that confirms the user's identity. You are advised to keep your Secret Key in a safe place.

## Amazon S3 section

Amazon Simple Storage Service is storage for the Internet. It is designed to make web-scale computing easier for developers.

Option   | Description
---------|------------
Bucket   | In terms of implementation, buckets and objects are resources, and Amazon S3 provides APIs for you to manage them. For example, you can create a bucket and upload objects using the Amazon S3 API.
Validator| [Type of validation.](#type-of-validation)


## Amazon CloudFront section

Amazon CloudFront is a global content delivery network (CDN) service that accelerates delivery of your websites, APIs, video content or other web assets. It integrates with other Amazon Web Services products to give developers and businesses an easy way to accelerate content to end users with no minimum usage commitments.

Option          | Description
----------------|------------
Destribution Id | Id used Amazon Cloud Front destribution.
Create destribution| Auto create an Amazon CloudFront web distribution
Validator       | [Type of validation.](#type-of-validation)
Force Invalidation| Enable or Disable file force remove before it expires


![Other configuration options](/images/m1/extensions/cdn/configuration3.png)

## DNS-based Cloud section

For integration other DNS based CDN providers

Option    | Description
----------|------------
Url       | Files will still be served to the CDN from your local server, but may be cached and distributed from the CDN servers (depending on your setup). However, other DNS-base CDNs may be suitable.
Validator | [Type of validation.](#type-of-validation)

## Rackspace section

For integration [Rackspace CDN](https://www.rackspace.com/cloud/cdn-content-delivery-network)

Option    | Description
----------|------------
Username  | Username
Secret Key| Password
Container | Container name
Validator | [Type of validation.](#type-of-validation)


## Type of validation

Value     | Description
----------|------------
Not validate | Not validate
Is available validate| Check is file exist
Modified time validate | Check file modified time
MD5 validate (slow)| Check file md5 checksum


You may set these options at global or store view level depending on your needs.

#### Next Up

- [Get API Key](../get-api-key/)
