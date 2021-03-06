'use strict';

var ipc = require('ipc');
var configuration = require('../configuration.js');

/**
 * close button element
 */
var closeEl = document.querySelector('.close');
closeEl.addEventListener('click', function (e) {
   ipc.send('close-settings-window');
});

/**
 * modifierCheckboxes element
 */
var modifierCheckboxes = document.querySelectorAll('.global-shortcut');

for (var i = 0; i < modifierCheckboxes.length; i++) {
   var shortcutKeys = configuration.readSettings('shortcutKeys');
   var modifierKey = modifierCheckboxes[i].attributes['data-modifier-key'].value;
   modifierCheckboxes[i].checked = shortcutKeys.indexOf(modifierKey) !== -1;

   modifierCheckboxes[i].addEventListener('click', function (e) {
      bindModifierCheckboxes(e);
   });
}

/**
 * function bindModifierCheckboxes
 */
function bindModifierCheckboxes(e) {
   var shortcutKeys = configuration.readSettings('shortcutKeys');
   var modifierKey = e.target.attributes['data-modifier-key'].value;

   if (shortcutKeys.indexOf(modifierKey) !== -1) {
      var shortcutKeyIndex = shortcutKeys.indexOf(modifierKey);
      shortcutKeys.splice(shortcutKeyIndex, 1);
   }
   else {
      shortcutKeys.push(modifierKey);
   }

   configuration.saveSettings('shortcutKeys', shortcutKeys);
   ipc.send('set-global-shortcuts');
}
