import {defineUserConfig} from 'vuepress'
import type {DefaultThemeOptions} from 'vuepress'
const { docsearchPlugin } = require('@vuepress/plugin-docsearch')
import navbar from "./configs/navbar"
import sidebar from "./configs/sidebar";

export default defineUserConfig<DefaultThemeOptions>({
    // 站点配置
    base: '/Blog/',
    lang: 'zh-CN',
    title: 'Junjie',
    description: 'Front-end web developer',
    head: [['link', {rel: 'icon', href: '/Blog/images/logo_left.svg'}]],
    // 主题和它的配置
    theme: '@vuepress/theme-default',
    themeConfig: {
        logo: 'images/logo_left.svg',
        repo: 'https://www.github.com/junjieweb/Blog',
        navbar,
        sidebar,
    },
    plugins: [
        docsearchPlugin({
            appId: `XHH7NZ65U3`,
            apiKey: `38ae56ccc2f1e29165e640bdb8cd7fa7`,
            indexName: `junjieweb`,
        }),
    ],
})
