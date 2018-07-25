var clipboardButtons = (function(){

  function showTooltip(elem, msg) {
    elem.setAttribute('class','btn-clip mdl-button mdl-js-button tooltipped tooltipped-s');
    elem.setAttribute('aria-label', msg);
  }
  function fallbackMessage(action) {
    var actionMsg = '';
    var actionKey = (action === 'cut' ? 'X' : 'C');
    if (/iPhone|iPad/i.test(navigator.userAgent)) {
      actionMsg = 'No support :(';
    } else if (/Mac/i.test(navigator.userAgent)) {
      actionMsg = 'Press ⌘-' + actionKey + ' to ' + action;
    } else {
      actionMsg = 'Press Ctrl-' + actionKey + ' to ' + action;
    }
    return actionMsg;
  }

  return {
    add: function() {
      var i = 0,
          elements = document.getElementsByTagName('pre');

      for (i = 0, limit = elements.length; i < limit; i++) {
        elements[i].insertAdjacentHTML(
          'afterbegin',
          '<button title="Copy to clipboard" class="btn-clip mdl-button mdl-js-button" data-clipboard-snippet>' +
            '<i class="material-icons">content_copy</i>' +
          '</button>'
        );
      }

      var btns = document.querySelectorAll('.btn-clip');
      for (i = 0; i < btns.length; i++) {
        btns[i].addEventListener('mouseleave',function(e) {
          e.currentTarget.setAttribute('class','btn-clip mdl-button mdl-js-button');
          e.currentTarget.removeAttribute('aria-label');
        });
      }

      clipboards = new ClipboardJS('.btn-clip', {
        target: function(trigger) {
          return trigger.nextElementSibling;
        }
      });
      clipboards.on('success',function(e){
        e.clearSelection();
        showTooltip(e.trigger, 'Copied!');
      });
      clipboards.on('error',function(e){
        showTooltip(e.trigger, fallbackMessage(e.action));
      });
    }
  };
})();

document.addEventListener("readystatechange", function () {
  if (this.readyState === "complete") {
    clipboardButtons.add();
  }
});
