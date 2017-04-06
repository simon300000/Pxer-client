const electron = require('electron')
const app = electron.app
const BrowserWindow = electron.BrowserWindow

app.on('ready', function() {
    (new BrowserWindow({})).loadURL(`file://${__dirname}/index.html`)
});
