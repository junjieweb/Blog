import {defineUserConfig} from 'vuepress'
import type {DefaultThemeOptions} from 'vuepress'

export default defineUserConfig<DefaultThemeOptions>({
    // 站点配置
    base: '/Front-end-Developer/',
    lang: 'zh-CN',
    title: 'Junjie',
    description: 'Front-end web developer',
    head: [['link', { rel: 'icon', href: '/images/logo.svg' }]],
    // 主题和它的配置
    theme: '@vuepress/theme-default',
    themeConfig: {
        logo: 'images/logo.svg',
        repo: 'https://www.github.com/junjieweb/Front-end-Developer',
        navbar: [
            {
                text: '首页',
                link: '/',
            },
            {
                text: '笔记',
                link: '/notes/'
            },
            {
                text: '面试题',
                link: '/interview/'
            },
            {
                text: '简历',
                link: '/resume/'
            },
            {
                text: 'VuePress',
                link: 'https://v2.vuepress.vuejs.org/zh'
            },
            // 字符串 - 页面文件路径
            // '/bar/vue2_base.md', interview
        ],
        sidebar: {
            '/notes/': [
                {
                    text: 'MDN',
                    collapsible: true,
                    children: [
                        '/notes/MDN.md',
                        '/notes/line.md',
                    ],
                },
                // {
                //     text: 'Tools',
                //     collapsible: true,
                //     children: [
                //         '/notes/tools/README.md',
                //         '/notes/tools/websites.md',
                //     ],
                // },
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
            ],
            '/interview/': [
                {
                    text: 'HTML',
                    collapsible: true,
                    children: [
                        '/interview/html/001',
                        '/interview/html/002',
                        '/interview/html/003',
                        '/interview/html/004',
                        '/interview/html/005',
                        '/interview/html/006',
                        '/interview/html/007',
                        '/interview/html/008',
                    ],
                },
                {
                    text: 'CSS',
                    collapsible: true,
                    children: [
                        // '/interview/html',
                        // '/interview/css',
                        // '/interview/js',
                        // '/interview/vue',
                        // '/interview/nodejs',
                        // '/interview/computer-network',
                        // '/interview/browser',
                    ],
                },
                {
                    text: 'JavaScript',
                    collapsible: true,
                    children: [
                        // '/interview/html',
                        // '/interview/css',
                        // '/interview/js',
                        // '/interview/vue',
                        // '/interview/nodejs',
                        // '/interview/computer-network',
                        // '/interview/browser',
                    ],
                },
            ]
        },
    },
})
