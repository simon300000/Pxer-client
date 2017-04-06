const electron = require('electron')
const app = electron.app
const BrowserWindow = electron.BrowserWindow

let mainWindow = null;

app.on('ready', function() {
    mainWindow = new BrowserWindow({
    });

    mainWindow.loadURL('http://www.pixiv.net/');
});
