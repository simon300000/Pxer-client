let app = new Vue({
    el: '#vue',
    data: {
        title: 'Pxer'
    },
    method: {},
    computed: {}
})

let title = new Vue({
    el: '#title',
    data: {
        title: app
    }
})