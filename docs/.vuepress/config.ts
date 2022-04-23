import {defineUserConfig} from 'vuepress'
import type {DefaultThemeOptions} from 'vuepress'
import navbar from "./configs/navbar"
import sidebar from "./configs/sidebar";

export default defineUserConfig<DefaultThemeOptions>({
    // 站点配置
    base: '/Front-end-Developer/',
    lang: 'zh-CN',
    title: 'Junjie',
    description: 'Front-end web developer',
    head: [['link', {rel: 'icon', href: '/Front-end-Developer/images/favicon.ico'}]],
    // 主题和它的配置
    theme: '@vuepress/theme-default',
    themeConfig: {
        logo: 'images/logo.svg',
        repo: 'https://www.github.com/junjieweb/Front-end-Developer',
        navbar,
        sidebar,
    },
})
