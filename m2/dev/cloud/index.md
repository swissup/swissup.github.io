---
layout: default
title: Magento 2 Adobe Commerce Cloud Dev Docs
description: Magento 2 Adobe Commerce Cloud Dev Docs
category: Adobe Cloud
---

# Adobe Commerce Cloud Dev Docs

* TOC
{:toc}

### Local Development Environment Setup Using Magento Cloud Docker

We will review the essential steps for the local environment setup of an in-progress Magento Cloud project.

#### Prerequisites

1. PHP:

    ```bash
sudo apt install php8.2 php8.2-bcmath php8.2-bz2 php8.2-gd php8.2-intl php8.2-mysql php8.2-soap php8.2-opcache php8.2-zip php8.2-curl php8.2-mbstring php8.2-readline php8.2-sqlite3 php8.2-xml php8.2-mcrypt
    ```

2. Composer: [Download Composer](https://getcomposer.org/download/)

3. Docker: [Install Docker Engine on Ubuntu](https://docs.docker.com/engine/install/ubuntu/) or [Install Docker Desktop on Ubuntu](https://docs.docker.com/desktop/install/ubuntu/)

#### Getting the Essential Assets

 -  Install Cloud CLI: [Cloud CLI Overview](https://experienceleague.adobe.com/docs/commerce-cloud-service/user-guide/dev-tools/cloud-cli/cloud-cli-overview.html)

    ```bash
curl -sS https://accounts.magento.cloud/cli/installer | php
export PATH=$PATH:$HOME/.magento-cloud/bin
    ```

 -  Execute the `magento-cloud` command and log-in to your Adobe Cloud account with browser. Copy the project id from the projects list.

 -  Get the project files with `magento-cloud get <project ID>`, then enter the project directory, switch branch with `magento-cloud checkout <branch>` if needed, and execute `composer install`.

 -  Dump the database with `magento-cloud db:dump`. Dump file will be placed in the project root folder.

 -  Get the media files with `magento-cloud mount:download -m pub/media --exclude="cache"`

#### Create Docker Configuration File

 -  Generate the Docker configuration file `docker-compose.yml` with the command:

    ```bash
./vendor/bin/ece-docker build:compose --mode="developer" --sync-engine="native" --with-entrypoint
    ```

 -  Move the previously generated database dump to `.docker/mysql/docker-entrypoint-initdb.d` folder to import it automatically.

#### _(Optional)_ Docker Configuration Customization

Default URL: `http://magento2.docker`

Default credentials: `https://magento2.docker/admin` username = `admin` password = `123123q`

Default DB name: `magento2`

 -  Change the database name and domain in `docker-compose.override.yml`:

    ```yml
    version: '2.1'
    services:
      db:
        environment:
          - MYSQL_ROOT_PASSWORD=magento2
          - MYSQL_DATABASE=custom
          - MYSQL_USER=custom
          - MYSQL_PASSWORD=custom
      varnish:
        environment:
          - VIRTUAL_HOST=custom.test
    ```

 -  Copy the `.docker/config.php.dist` to `.docker/config.php` and apply the same changes for database and domain:

    ```php
    'MAGENTO_CLOUD_RELATIONSHIPS' => base64_encode(json_encode([
        'database' => [
            [
                'host' => 'db',
                'path' => 'custom',
                'password' => 'custom',
                'username' => 'custom',
                ...
            ]
        ]
    ])),
    'MAGENTO_CLOUD_ROUTES' => base64_encode(json_encode([
        'http://custom.test/' => [
            'type' => 'upstream',
            'original_url' => 'http://{default}'
        ],
        'https://custom.test/' => [
            'type' => 'upstream',
            'original_url' => 'https://{default}'
        ]
    ])),
    ```

 -  Re-generate configuration to apply the modifications:

    ```bash
    ./vendor/bin/ece-docker build:compose --mode="developer" --sync-engine="native" --with-entrypoint
    ```

#### Start the Docker Environment

 -  Execute `bin/magento-docker up` to download containers and start the environment.

 -  Run `bin/magento-docker ece-deploy` to install Magento / Adobe Commerce in your Docker environment.

#### Finish the Environment Configuration

 -  switch to developer mode:

    ```bash
    docker compose run --rm deploy magento-command deploy:mode:set developer
    ```

 -  configure Varnish:

    ```bash
    docker compose run --rm deploy magento-command config:set system/full_page_cache/caching_application 2 --lock-env
    docker compose run --rm deploy magento-command setup:config:set --http-cache-hosts=varnish
    ```

 -  reindex Elasticsearch:

    ```bash
    bin/magento-docker bash
    bin/magento indexer:reindex
    bin/magento cache:flush
    ```

 -  add domain to `/etc/hosts` file:

    ```
    127.0.0.1       magento2.docker
    ```

#### Working with Docker Environment

Use `bin/magento-docker start` and `bin/magento-docker stop` to start/stop the environment, as `bin/magento-docker up` and `bin/magento-docker down` will destroy containers.

Use `bin/magento-docker bash` to enter the container and execute `bin/magento` commands.

#### Sources

 -  [Magento Cloud Demo - Cloud Docker with Joe Shelton](https://www.youtube.com/watch?v=Osl5U6wfB30)
 -  [Cloud Docker for Commerce](https://developer.adobe.com/commerce/cloud-tools/docker/)
