export default {
    '/notes/': [
        {
            text: 'MDN',
            collapsible: true,
            children: [
                '/notes/MDN/MDN.md',
                '/notes/MDN/line.md',
            ],
        },
        {
            text: '笔记',
            collapsible: true,
            children: [
                '/notes/html.md',
                '/notes/css.md',
                '/notes/js.md',
                '/notes/vue/vue2_base.md',
                '/notes/vue/vue2_cli.md',
                '/notes/vue/vue3.md'
            ],
        },
        {
            text: 'HTML',
            collapsible: true,
            children: [
                '/notes/html/',
            ],
        },
        {
            text: 'CSS',
            collapsible: true,
            children: [
                '/notes/css/',
            ],
        },
    ],
    '/interview/': [
        {
            text: 'HTML',
            collapsible: true,
            children: [
                '/interview/html/',
            ],
        },
        {
            text: 'CSS',
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
    ]
}
