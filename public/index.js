const electron = require('electron')
const ipcRenderer = electron.ipcRenderer

const title = new Vuex.Store({
    strict: true,
    // TODO: 严格模式弄好得删
    state: 'Pxer',
    getters: {},
    mutations: {
        set(title, value) {
            title = value
        }
    },
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
    computed: {},
    watch: {}
})

new Vue({
    el: 'title',
    store: title,
})
