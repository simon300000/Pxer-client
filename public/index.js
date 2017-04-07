const electron = require('electron')
const ipcRenderer = electron.ipcRenderer

let app = new Vue({
    el: '#vue',
    data: {
        title: 'Pxer',
        panel: 'view',
        aboutPanel: 'version',
        about: {
            version: process.versions,
            chrome: process.moduleLoadList,
            electron: electron.remote.process.moduleLoadList
        }
    },
    method: {},
    computed: {}
})

new Vue({
    el: '#title',
    data: {
        title: app
    }
})
