const electron = require('electron')
const ipcRenderer = electron.ipcRenderer

const pxer = new Vuex.Store({
    strict: true,
    // TODO: 严格模式弄好得删
    state: {
        title: 'Pxer'
    },
    getters: {},
    mutations: {},
    actions: {},
})


let app = new Vue({
    el: '#vue',
    data: {
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
    el: 'title',
    store: pxer,
})
