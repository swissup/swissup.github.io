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
$.storage       | Helper to work with local storage.
$.sections      | Alias to customerData function.
$.request       | Helper to work with ajax requests.
$.cookies       | Helper to work with cookies.
$.__            | Translation function.
$.view          | Function to declare view (Knockout powered) component.
$.widget        | Function to declare widget component.

## Uage examples

### Storage

```js
// simple storage
$.storage.get(key);
$.storage.set(key, value);
$.storage.remove(keys|key);

// namespaced storage to prevent conflicts with other modules
storage = $.storage.ns('vendor-module');
storage.get(key);
storage.set(key, value);
storage.keys();
storage.remove(keys|key);
storage.removeAll();
```

### Cookies

```js
$.cookies.get(name);
$.cookies.getJson(name);
$.cookies.set(name, value, attributes);
$.cookies.setJson(name, value, attributes);
$.cookies.remove(name, attributes);
```

### Sections (CustomerData)

```js
$.sections.get(name);
$.sections.set(name, data);
$.sections.reload(names, forceNewSectionTimestamp);
$.sections.invalidate(names);
```

### Request

```js
$.request.get(url).then(callback).catch(callback);
$.request.post({
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
$t(string);
$.__(string);
```

### Widget

```js
$.widget('name', {
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
$.view('name', {
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
