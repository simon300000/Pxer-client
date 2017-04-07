const electron = require('electron')
const app = electron.app
const BrowserWindow = electron.BrowserWindow

let windowsNumber = 0

process.on('createNewWindow', () => {
    let window = new BrowserWindow({
        show: false,
        frame: true
    })
    window.loadURL(`file://${__dirname}/public/index.html`)
    windowsNumber++
    window.on('page-title-updated', () => {
        window.show()
    })
    window.on('closed', () => {
        windowsNumber--
    })
})

app.on('ready', function() {
    process.emit('createNewWindow')
});

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit()
    }
})

app.on('activate', () => {
    if (windowsNumber === 0) {
        process.emit('createNewWindow')
    }
})


app.on('will-quit', function() {
    //globalShortcut.unregisterAll();
});

//┌─┐┬┌┬┐┌─┐┌┐┌ ─┐┌─┐┌─┐┌─┐
//└─┐│││││ ││││ ─┤│ ││ ││ │
//└─┘┴┴ ┴└─┘┘└┘ ─┘└─┘└─┘└─┘
