---
layout: default
title: Integration with third-party scripts
category: GDPR
---

# Integration with third-party scripts

While GDPR module does its best to block not allowed cookies, there is a chance
that some third-party script will create the cookie before GDPR module was
initialized. In this case, GDPR can’t block it properly.

To fix this issue we need to postpone third-party script execution until
GDPR module is ready.

Let’s review a few possible cases.

* TOC
{:toc}

## Inline script

Let's assume we have the following third-party script in
_Stores > Configuration > General > Design > Header > Miscellaneous HTML_
field:

```html
<script>
  (function () {
    // third-party script
  })();
</script>
```

We need to check the `marketing` cookie group and run this script only when group
is allowed:

```html
<script>
  require(['Swissup_Gdpr/js/model/cookie-manager'], manager => {
    if (manager.groups('marketing').status()) { // groups: analytics, marketing, preferences
      (function () {
        // third-party script
      })();
    }
  });
</script>
```

## Remote script

Let's assume that we have the following third-party script in
_Stores > Configuration > General > Design > Header > Miscellaneous HTML_
field:

```html
<script async src="https://thirdparty.example/file.js"></script>
```

Here is GDPR compatible version of the same code:

```html
<script>
  require(['Swissup_Gdpr/js/model/cookie-manager'], (manager) => {
    if (manager.groups('marketing').status()) { // groups: analytics, marketing, preferences
      require(['https://thirdparty.example/file.js']);
    }
  });
</script>
```

## Facebook pixel

Let's assume that we have the following Facebook Pixel script in
_Stores > Configuration > General > Design > Header > Miscellaneous HTML_
field:

```html
<!-- Facebook Pixel Code -->
<script>
  !function(f,b,e,v,n,t,s)
  {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
  n.callMethod.apply(n,arguments):n.queue.push(arguments)};
  if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
  n.queue=[];t=b.createElement(e);t.async=!0;
  t.src=v;s=b.getElementsByTagName(e)[0];
  s.parentNode.insertBefore(t,s)}(window, document,'script',
  'https://connect.facebook.net/en_US/fbevents.js');
  fbq('init', '{your-pixel-id-goes-here}');
  fbq('track', 'PageView');
</script>
```

Since Facebook supports consent mode, we will revoke the consent by default, and
grant it as soon as visitor allows marketing cookies. Here is GDPR compatible
version of the Facebook Pixel script:

```html
<!-- Facebook Pixel Code -->
<script>
  !function(f,b,e,v,n,t,s)
  {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
  n.callMethod.apply(n,arguments):n.queue.push(arguments)};
  if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
  n.queue=[];t=b.createElement(e);t.async=!0;
  t.src=v;s=b.getElementsByTagName(e)[0];
  s.parentNode.insertBefore(t,s)}(window, document,'script',
  'https://connect.facebook.net/en_US/fbevents.js');
  fbq('consent', 'revoke');
  fbq('init', '{your-pixel-id-goes-here}');
  fbq('track', 'PageView');

  require(['Swissup_Gdpr/js/model/cookie-manager'], (manager) => {
    manager.groups('marketing').status.subscribe(status => { // groups: analytics, marketing, preferences
      fbq('consent', status ? 'grant' : 'revoke');
    });
    fbq('consent', manager.groups('marketing').status() ? 'grant' : 'revoke');
  });
</script>
```

#### Next up
{:.no_toc}

 -  [Back to Main Page](/m2/extensions/gdpr/)
