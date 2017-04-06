let app = new Vue({
    el: '#vue',
    data: {
        title: 'Pxer'
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