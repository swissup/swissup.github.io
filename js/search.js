var Search = function(options) {

  if (!options.template) {
    options.template = [
        '<li>',
          '<a href="{{url}}" title="{{description}}">{{{title}}}</a>',
          '{{#category}}',
            '<span class="category">{{category}}</span>',
          '{{/category}}',
        '</li>'
      ].join('');
  }

  var docs, loaded = false, idx;

  if (options.searchInput) {
    options.searchInput.addEventListener('keyup', function() {
      if (!loaded) {
        return load(function() {
          render(search(this.value, options.limit));
        }.bind(this));
      }
      render(search(this.value, options.limit));
    }, false);
  }

  var load = function(callback) {
    // open search.json file and load it to the memory
    var xhr = (window.XMLHttpRequest) ? new XMLHttpRequest() : new ActiveXObject("Microsoft.XMLHTTP");
    xhr.open("GET", options.json, true);
    xhr.onreadystatechange = function() {
      if (xhr.status==200 && xhr.readyState==4) {
        loaded = true;
        try {
          docs = JSON.parse(xhr.responseText);
          idx = lunr(function () {
            this.field('title', {boost: 10});
            this.field('category', {boost: 3});
            this.field('description');
            this.field('keywords');
            this.field('searchterms');
            this.ref('id');

            for (var i in docs) {
              docs[i].id = i;
              this.add(docs[i]);
            }
          });
        } catch(err) {
          console.log(err);
        }
        if (callback) {
          callback();
        }
      }
    };
    xhr.send();
  };

  var search = function(value, limit) {
    if (!value) {
      return false;
    }
    limit = limit || 10;
    value = `${value}*`;
    return idx.search(value).slice(0, limit).map(function(result) {
      return docs[parseInt(result.ref, 10)];
    });
  };

  var searchByTwoTokens = function(value1, value2, limit) {
    if (!value1 && !value2) {
      return false;
    }
    limit = parseInt(limit / 2) || 5;
    value1 = `${value1}*`;
    value2 = `${value2}*`;
    var result1 = idx.search(value1).slice(0, limit),
      result2 = idx.search(value2).slice(0, limit);

    return result1.concat(result2).map(function(result) {
      return docs[parseInt(result.ref, 10)];
    });
  };

  var render = function(records) {
    var result = '',
        m1 = '',
        m2 = '';

    if (false !== records) {
      for (var i in records) {
        var li = Mustache.render(options.template, records[i]);
        if (records[i].url.indexOf('/m1/') !== -1) {
          m1 += li;
        } else if (records[i].url.indexOf('/m2/') !== -1) {
          m2 += li;
        } else {
          result += li;
        }
      }

      if (m1) {
        m1 = '<li class="group">Magento 1.x</li><ul>' + m1 + '</ul>';
      }
      if (m2) {
        m2 = '<li class="group">Magento 2.x</li><ul>' + m2 + '</ul>';
      }

      if (!result && !m1 && !m2) {
        result = 'No results found';
      } else {
        result += m2 + m1;
      }

      if (options.resultsContainer.className.indexOf('shown') === -1) {
        options.resultsContainer.className = options.resultsContainer.className + ' shown';
      }
    } else {
      options.resultsContainer.className = options.resultsContainer.className.replace(/ shown/g, '');
    }
    options.resultsContainer.innerHTML = result;
  };

  return {
    search: function(value, limit) {
      var args = arguments;
      if (!loaded) {
        return load(function() {
          render(search(value, limit));
        });
      }
      render(search(value, limit));
    },

    searchByTwoTokens: function(value1, value2, limit) {
      var args = arguments;
      if (!loaded) {
        return load(function() {
          render(searchByTwoTokens(value1, value2, limit));
        });
      }
      render(searchByTwoTokens(value1, value2, limit));
    }
  };
};

// initialization
var input = document.getElementById('search'),
  searchUrl = input.getAttribute('data-url');
new Search({
  searchInput: input,
  resultsContainer: document.getElementById('search-results'),
  json: searchUrl,
  limit: 10
});

// 404 page functionality
if (document.getElementById('related-articles-404')) {
  var related = new Search({
    resultsContainer: document.getElementById('related-articles-404'),
    json: searchUrl,
    limit: 20
  });

  var pathParts = window.location.pathname.slice(0, -1).split('/'),
    token = pathParts[pathParts.length - 1].replace(/\d+/g, ' '),
    hash  = window.location.hash.slice(1).replace(/\d+/g, ' ');

  if (hash.length > 1) {
    related.searchByTwoTokens(hash, token, 16);
  } else {
    related.search(token);
  }
}
