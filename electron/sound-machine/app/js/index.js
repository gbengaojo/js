'use strict';

var ipc = require('ipc');
var soundButtons = document.querySelectorAll('.button-sound');

for (var i = 0; i < soundButtons.length; i++) {
   var soundButton = soundButtons[i];
   var soundName = soundButton.attributes['data-sound'].value;

   prepareButton(soundButton, soundName);
}

function prepareButton(buttonEl, soundName) {
   buttonEl.querySelector('span').style.backgroundImage = 'url("img/icons/' + soundName + '.png")';

   var audio = new Audio(__dirname + '/wav/' + soundName + '.wav');
   buttonEl.addEventListener('click', function () {
      audio.currentTime = 0;
      audio.play();
   });
}

// close button DOM element
var closeEl = document.querySelector('.close');
closeEl.addEventListener('click', function () {
   ipc.send('close-main-window');
});

ipc.on('global-shortcut', function (arg) {
   var event = new MouseEvent('click');
   soundButtons[arg].dispatchEvent(event);
});

// settings button DOM element
var settingsEl = document.querySelector('.settings');
settingsEl.addEventListener('click', function () {
   ipc.send('open-settings-window');
});
