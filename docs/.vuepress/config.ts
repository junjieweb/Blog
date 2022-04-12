import {defineUserConfig} from 'vuepress'
import type {DefaultThemeOptions} from 'vuepress'

export default defineUserConfig<DefaultThemeOptions>({
    // 站点配置
    base: '/Front-end-Developer/',
    lang: 'zh-CN',
    title: 'Junjie',
    description: 'Front-end-Developer',
    // dest: 'docs/dist',

    // 主题和它的配置
    theme: '@vuepress/theme-default',
    themeConfig: {
        logo: 'https://vuejs.org/images/logo.png',
        repo: 'https://www.github.com/junjieweb',
        navbar: [
            {
                text: '首页',
                link: '/',
            },
            {
                text: '笔记',
                link: '/notes'
            },
            {
                text: '面试题',
                link: '/interview'
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
            // '/bar/README.md', interview
        ],
        sidebar: {
            '/notes': [
                {
                    text: 'HTML',
                    // collapsible: true,
                    children: ['/notes/html.md'],
                },
                {
                    text: 'CSS',
                    // collapsible: true,
                    children: ['/notes/css.md'],
                },
                {
                    text: 'JavaScript',
                    // collapsible: true,
                    children: ['/notes/js'],
                },
                {
                    text: 'Vue',
                    collapsible: true,
                    children: ['/notes/vue', '/notes/vue/vue3'],
                },
            ],
            '/interview': [
                {
                    text: '面试题',
                    // collapsible: true,
                    children: ['/interview/html', '/interview/css', '/interview/js', '/interview/vue'],
                },
            ]
        },
    },
})
