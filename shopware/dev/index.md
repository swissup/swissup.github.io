---
layout: default
title: Shopware development documentation
---

# Dev docs

* TOC
{:toc}

### Install Shopware


#### Preparing

[System requirements](https://developer.shopware.com/docs/guides/installation/overview#environment)

##### Install dependencies

```bash
sudo add-apt-repository ppa:ondrej/php

sudo apt-get install -y php8.1-fpm php8.1-mysql php8.1-curl php8.1-gd php8.1-xml php8.1-zip php8.1-opcache php8.1-mbstring php8.1-intl php8.1-cli
```
##### Install Symfony CLI
```
wget https://get.symfony.com/cli/installer -O - | bash
```

or

```
curl -sS https://get.symfony.com/cli/installer | bash
```


#### [Shopware Quickstart / Installation](https://github.com/shopware/platform#quickstart--installation)

##### PHP preparation

```
apt install php8.1-{cli,fpm,common,mysql,curl,zip,gd,xml,mbstring,intl,opcache} git socat unzip curl bash-completion -y
```

##### [Install Symfony CLI](https://symfony.com/download)

```
curl -sS https://get.symfony.com/cli/installer | bash
```


###### Let's start by creating a new project `shopware`:

```
 composer create-project shopware/production shopware
```

You now have the application template for the Shopware Platform in the directory project, we now change into it:

```
cd shopware
```

```
# Optional packages
# Install Symfony Default Profiler
composer req --dev profiler
```

Now we start our service containers:

```
docker compose up -d
```

And install Shopware with the following command:

```
symfony console system:install --basic-setup --drop-database --create-database -f
```

Start the webserver

```
symfony server:start -d
```

Stop the webserver

```
symfony server:stop
```

If you want to run the web server with TLS support

```
symfony server:ca:install
```

Default admin credentials

username: admin
password: shopware

#### Add Proxy

https://symfony.com/doc/current/setup/symfony_server.html#local-domain-names

#### Install framework demo data

```
composer require shopware/dev-tools
symfony console framework:demodata
```

#### Update shopware version

 ```
 symfony console system:update:prepare
 composer update
 symfony console system:update:finish
 ```