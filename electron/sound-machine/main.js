'use srtict';

var app = require('app');
var BrowserWindow = require('browser-window');
var ipc = require('ipc');
var globalShortcut = require('global-shortcut');

var mainWindow = null
var settingsWindow = null;

/**
 * on ready function
 */
app.on('ready', function() {
   mainWindow = new BrowserWindow({
      frame: false,
      height: 700,
      resizable: false,
      width: 368
   });

   mainWindow.loadUrl('file://' + __dirname + '/app/index.html');

   globalShortcut.register('ctrl+shift+1', function () {
      mainWindow.webContents.send('global-shortcut', 0);
   });
   globalShortcut.register('ctrl+shift+2', function () {
      mainWindow.webContents.send('global-shortcut', 1);
   }); 
});

/**
 * on close function
 */
ipc.on('close-main-window', function () {
   app.quit();
});

/**
 * on open-settings-window function
 */
ipc.on('open-settings-window', function () {
   if (settingsWindow) {
      return;
   }

   settingsWindow = new BrowserWindow({
      frame: false,
      height: 200,
      resizable: false,
      width: 200
   });

   settingsWindow.loadUrl('file://' + __dirname + '/app/settings.html');

   settingsWindow.on('closed', function () {
      settingsWindow = null;
   });
});

/**
 * on close-settings-window function
 */
ipc.on('close-settings-window', function () {
   if (settingsWindow) {
      settingsWindow.close();
   }
});
