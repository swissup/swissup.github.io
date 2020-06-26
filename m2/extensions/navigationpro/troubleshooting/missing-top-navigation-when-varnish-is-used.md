---
layout: default
title: Missing top navigation when Varnish is used
description: Bring back top navigation in Magento when Varnish is enabled
category: Navigationpro
---

# Missing top navigation when Varnish is used

When using Varnish, Magento doesn't render html for some blocks, but
inserts the special code instead:

```html
<esi:include src="http://site.com/page_cache/block/esi/blocks/{params}/" />
```

Varnish should process this code and replace it with actual html every time
the page is served for the visitor.

However, in some edge cases it's not working:

 - ESI processing is turned off.
 - ESI include tags are generated with HTTPS access protocol, while Varnish only works with HTTP.
 - ESI include tags are rendered inside JSON blocks.
 - Response headers are too big and Varnish can't process them.

You can find instructions on how to solve each issue below.

## Update Settings

To enable ESI processing, open varnish config file (usually it's a
`/etc/varnish/default.vcl`), and add the following instruction into
`vcl_backend_response` section:

```vcl
sub vcl_backend_response {
    ...
    set beresp.do_esi = true;
}
```

To fix other issues, you need to add additional options to the varnishd startup
settings. Depending on your server it may be done in two different ways.

 1. Using varnish configuration file `/etc/default/varnish`

    > Note: If systemd is installed, this file is obsolete and ignored.
    > Proceed to the next point in that case.

    Find DAEMON_OPTS config and add the following lines:

    ```diff
    DAEMON_OPTS="-a :80 \
                  -T localhost:6082 \
                  -f /etc/varnish/default.vcl \
                  -S /etc/varnish/secret \
    +             -p feature=+esi_ignore_other_elements \
    +             -p feature=+esi_disable_xml_check \
    +             -p feature=+esi_ignore_https \
    +             -p http_resp_hdr_len=16k \
    +             -p http_resp_size=64k \
    +             -p workspace_backend=64k \
                  -s malloc,256m"

    ```

 2. Using systemd drop-in config file:

    > Use this approach if systemd is installed only.

    Create `/etc/systemd/system/varnish.service.d/customexec.conf` with the
    following content:

    ```conf
    [Service]
    ExecStart=
    ExecStart=/usr/sbin/varnishd -j unix,user=vcache -F \
        -a :80 \
        -T localhost:6082 \
        -f /etc/varnish/default.vcl \
        -S /etc/varnish/secret \
        -p feature=+esi_ignore_other_elements \
        -p feature=+esi_disable_xml_check \
        -p feature=+esi_ignore_https \
        -p http_resp_hdr_len=16k \
        -p http_resp_size=64k \
        -p workspace_backend=64k \
        -s malloc,256m
    ```

    Save the file and reload systemd configuration:

    ```bash
    sudo systemctl daemon-reload
    ```

## Restart Varnish

```bash
sudo service varnish restart
```

#### Next up
{:.no_toc}

 -  [Back to Main Page](/m2/extensions/navigationpro/)
