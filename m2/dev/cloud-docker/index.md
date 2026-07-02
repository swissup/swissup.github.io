---
layout: default
title: Adobe Commerce Cloud Local Setup — Pure Docker (no host PHP)
description: Run an Adobe Commerce Cloud project locally with only Docker and git — no PHP or Composer installed on your machine.
category: Adobe Cloud
---

# Adobe Commerce Cloud — Pure Docker Setup

* TOC
{:toc}

### Local Development Without Host PHP or Composer

This is a variant of the [standard Cloud Docker setup](/m2/dev/cloud/) that keeps your machine
clean: **nothing is installed on the host but Docker and git** — no PHP, no Composer, no
`magento-cloud` CLI.

Every PHP-touching bootstrap command (`composer install`, `ece-docker build:compose`, the
`magento-cloud` CLI) runs inside a throwaway
[`magento/magento-cloud-docker-php`](https://hub.docker.com/r/magento/magento-cloud-docker-php)
CLI container instead of on the host. Small `bin/` wrapper scripts make this transparent — the same
ergonomics as [markshust/docker-magento](https://github.com/markshust/docker-magento). The
long-running store environment is still the official Cloud Docker stack; only the *bootstrap* changes.

#### Prerequisites

1. Docker with the Compose plugin: [Install Docker Engine on Ubuntu](https://docs.docker.com/engine/install/ubuntu/) or [Install Docker Desktop on Ubuntu](https://docs.docker.com/desktop/install/ubuntu/)

2. git.

#### Add the `bin/` Wrappers

Copy the `bin/` directory (and `bin/.env`) from the
[project template](https://github.com/swissup) into your working folder. The wrappers:

| Script              | Purpose                                                             |
|---------------------|---------------------------------------------------------------------|
| `bin/cli`           | Run any command in a throwaway CLI container.                        |
| `bin/clinotty`      | Same, always without a TTY.                                         |
| `bin/composer`      | `composer` in a container; chowns written files back to you.        |
| `bin/ece-docker`    | `./vendor/bin/ece-docker` — used for `build:compose`.               |
| `bin/magento-cloud` | The cloud CLI; self-installs into `~/.magento-cloud` on first run.  |

Set the two pins in `bin/.env` so the CLI image tag
(`magento/magento-cloud-docker-php:${PHP_VERSION}-cli-${IMAGE_VERSION}`) matches your project:

- `PHP_VERSION` — the `php` version from the project's `.magento.app.yaml` (e.g. `8.2`).
- `IMAGE_VERSION` — the **full** Cloud Docker version, e.g. `1.4.8` (not `1.4`). After `vendor/`
  exists, confirm with `bin/composer show magento/magento-cloud-docker`. Available tags:
  [Docker Hub](https://hub.docker.com/r/magento/magento-cloud-docker-php/tags).

#### Getting the Essential Assets

 -  Authenticate the cloud CLI. Browser OAuth is awkward from inside a container — use an API token
    instead (Cloud Console → Account Settings → API tokens):

    ```bash
    bin/magento-cloud auth:api-token-login
    ```

    The login persists in `~/.magento-cloud` across runs. Copy the project id from the projects list.

 -  Get the project files, then enter the project directory (copy `bin/` there if needed) and switch
    branch if required:

    ```bash
    bin/magento-cloud get <project ID>
    cd <project-dir>
    bin/magento-cloud checkout <branch>
    ```

 -  Install dependencies — **runs in the container, no host Composer:**

    ```bash
    bin/composer install
    ```

 -  Dump the database. The dump file is placed in the project root folder:

    ```bash
    bin/magento-cloud db:dump
    ```

 -  Get the media files:

    ```bash
    bin/magento-cloud mount:download -m pub/media --exclude="cache"
    ```

#### Create Docker Configuration File

 -  Generate the Docker configuration file `docker-compose.yml` — **via the container:**

    ```bash
    bin/ece-docker build:compose --mode="developer" --sync-engine="native" --with-entrypoint
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
    bin/ece-docker build:compose --mode="developer" --sync-engine="native" --with-entrypoint
    ```

#### Start the Docker Environment

`build:compose` generates its own `bin/magento-docker` that drives the running stack — from here the
flow is identical to the standard setup.

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

#### Notes for Linux

 -  Use `--sync-engine="native"` (as above) — Mutagen is only needed on macOS.
 -  Free port 80 on the host before `bin/magento-docker up`.
 -  Files the container writes under the project are root-owned; `bin/composer` and
    `bin/magento-cloud` chown them back to you automatically.

#### Sources

 -  [Standard Cloud Docker setup (host PHP)](/m2/dev/cloud/)
 -  [Cloud Docker for Commerce](https://developer.adobe.com/commerce/cloud-tools/docker/)
 -  [magento/magento-cloud-docker-php image](https://hub.docker.com/r/magento/magento-cloud-docker-php)
