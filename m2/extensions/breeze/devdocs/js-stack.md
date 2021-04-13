---
layout: default
title: Breeze Js Stack
description: The list of js libraries that are used in Breeze
category: Breeze
---

# Breeze js stack

Breeze frontend is a completely new implementation that is not compatible with
standard Magento js code. However, some code parts are still compatible
and integration is pretty straightforward.

* TOC
{:toc}

## Libraries

The following libraries where removed completely:

 - RequireJs
 - jQuery
 - jQueryUI
 - MomentJs
 - Magento's UI components

The following libraries where replaced/updated:

Library     | Replacement
------------|------------
jQuery      | Cash - [https://github.com/fabiospampinato/cash](https://github.com/fabiospampinato/cash)
Underscore  | Newest Underscore Version - [https://underscorejs.org/](https://underscorejs.org/)
Knockout    | Newest Knockout Version - [https://knockoutjs.com/](https://knockoutjs.com/)

The following libraries where added:

Library         | Url
----------------|------------
Cash            | [https://github.com/fabiospampinato/cash](https://github.com/fabiospampinato/cash)
JsCookie        | [https://github.com/js-cookie/js-cookie](https://github.com/js-cookie/js-cookie)
Superagent      | [https://github.com/visionmedia/superagent](https://github.com/visionmedia/superagent)
Turbo           | [https://github.com/hotwired/turbo](https://github.com/hotwired/turbo)

## Global variables

Since we don't use js modules in the current Breeze version the only way to reuse
js functionality across multiple files is the global js variables.

Here is a list of what comes out of the box:

Variable        | Description
----------------|------------
$               | Cash
_               | Underscore
ko              | Knockout
$t              | Translation function.
$.key           | Collection of usefull keyboard constants to use with events.
customerData    | Function to work with dynamic customer sections.
breeze.storage  | Helper to work with local storage.
breeze.sections | Alias to customerData function.
breeze.request  | Helper to work with ajax requests.
breeze.cookies  | Helper to work with cookies.
breeze.translate| Helper to work with client-side translations.
breeze.view     | Function to declare view (Knockout powered) component.
breeze.widget   | Function to declare widget component.

## Uage examples

### Storage

```js
// simple storage
breeze.storage.get(key);
breeze.storage.set(key, value);
breeze.storage.remove(keys|key);

// namespaced storage to prevent conflicts with other modules
storage = breeze.storage.ns('vendor-module');
storage.get(key);
storage.set(key, value);
storage.keys();
storage.remove(keys|key);
storage.removeAll();
```

### Cookies

```js
breeze.cookies.get(name);
breeze.cookies.getJson(name);
breeze.cookies.set(name, value, attributes);
breeze.cookies.setJson(name, value, attributes);
breeze.cookies.remove(name, attributes);
```

### Sections (CustomerData)

```js
breeze.sections.get(name);
breeze.sections.set(name, data);
breeze.sections.reload(names, forceNewSectionTimestamp);
breeze.sections.invalidate(names);
```

### Request

```js
breeze.request.get(url).then(callback).catch(callback);
breeze.request.post({
    url: 'url',
    type: 'html|json',
    data: data,
    success: callback,
    complete: callback,
    error: callback
});
```

### Translate

```js
breeze.translate.add(string, translation);
breeze.translate.add(data);
breeze.translate.translate(string);
$t(string);
__(string);
```

### Widget

```js
breeze.widget('name', {
    create: function () {},
    destroy: function () {},
    method: function () {}
});

$(el).name(options); // create widget instance or update its settings
$(el).name('method'); // call instance method
$(el).name('instance').method(); // call instance method
$.fn.name().method(); // static call without instantiation
```

### View

```js
breeze.view('name', {
    create: function () {},
    destroy: function () {},
    method: function () {}
});

$(el).name(options); // create view instance or update its settings
$(el).name('method'); // call instance method
$(el).name('instance').method(); // call instance method
```

#### Next up
{:.no_toc}

 -  [Back to DevDocs](/m2/extensions/breeze/devdocs/)
