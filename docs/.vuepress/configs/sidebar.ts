export default {
    '/notes/': [
        {
            text: 'MDN',
            // collapsible: true,
            children: [
                '/notes/MDN/MDN.md',
                '/notes/MDN/line.md',
            ],
        },
        {
            text: '🔶HTML',
            collapsible: true,
            children: [
                '/notes/html/README.md',
            ],
        },
        {
            text: '🏳️‍🌈CSS',
            collapsible: true,
            children: [
                '/notes/css/css_base.md',
                '/notes/css/定位与浮动.md',
                '/notes/css/弹性盒.md',
                '/notes/css/媒体查询.md',
            ],
        },
        {
            text: '🟨JavaScript',
            collapsible: true,
            children: [
                '/notes/js/README.md',
                '/notes/js/js基础.md',
                '/notes/js/js函数.md',
                '/notes/js/js数组.md',
                '/notes/js/js对象.md',
                '/notes/js/Math_Date.md',
                '/notes/js/DOM.md',
                '/notes/js/BOM.md',
                '/notes/js/包装类.md',
                '/notes/js/正则表达式.md',
                '/notes/js/ES6.md',
            ],
        },
        {
            text: '🔵Less',
            collapsible: true,
            children: [
                '/notes/less.md',
            ],
        },
        {
            text: '🟩VUE',
            collapsible: true,
            children: [
                '/notes/vue/vue2_base.md',
                '/notes/vue/vue2_cli.md',
                '/notes/vue/vuex.md',
                '/notes/vue/vue-router.md',
                '/notes/vue/vue3.md',
            ],
        },
    ],
    '/interview/': [
        {
            text: 'HTML面试题',
            collapsible: true,
            children: [
                '/interview/html/',
            ],
        },
        {
            text: 'CSS面试题',
            collapsible: true,
            children: [
                '/interview/css/basis',
                '/interview/css/position_float',
                '/interview/css/layout',
                '/interview/css/application',
            ],
        },
        {
            text: 'JavaScript',
            collapsible: true,
            children: [
                '/interview/JavaScript/数据类型.md',
                '/interview/JavaScript/ES6.md',
                '/interview/JavaScript/basis.md',
                '/interview/JavaScript/prototype.md',
                '/interview/JavaScript/async.md',
                '/interview/JavaScript/scope.md',
                '/interview/JavaScript/this.md',
                '/interview/JavaScript/object.md',
                '/interview/JavaScript/gc.md',
            ],
        },
        {
            text: 'NodeJS',
            collapsible: true,
            children: [
                '/interview/node/README.md',
            ],
        },
        {
            text: 'Vue',
            collapsible: true,
            children: [
                '/interview/vue/basis.md',
                '/interview/vue/生命周期.md',
                '/interview/vue/组件间通信.md',
                '/interview/vue/vuex.md',
                '/interview/vue/vue-router.md',
                '/interview/vue/vue3.md',
                '/interview/vue/虚拟DOM.md',
            ],
        },
        {
            text: '浏览器原理',
            collapsible: true,
            children: [
                '/interview/browser.md',
            ],
        },
        {
            text: '计算机网络',
            collapsible: true,
            children: [
                '/interview/computer-network.md',
            ],
        }, {
            text: '前端工程化',
            collapsible: true,
            children: [
                '/interview/前端工程化.md',
            ],
        }, {
            text: '性能优化',
            collapsible: true,
            children: [
                '/interview/性能优化.md',
            ],
        },
    ],
    '/web/': [
        {
            text: '网站导航',
            // collapsible: true,
            children: [
                '/web/README.md',
            ],
        },
    ],
}
