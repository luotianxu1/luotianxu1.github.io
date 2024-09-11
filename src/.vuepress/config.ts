import { defineUserConfig } from 'vuepress'
import theme from './theme.js'
import { registerComponentsPlugin } from '@vuepress/plugin-register-components'
import { path } from 'vuepress/utils'

export default defineUserConfig({
    base: '/',
    lang: 'zh-CN',
    title: '',
    description: '罗天旭的博客',
    theme,
    shouldPrefetch: false,
    plugins: [
        // 注册vue组件
        registerComponentsPlugin({
            componentsDir: path.resolve(__dirname, './components/'),
            componentsPatterns: ['**/*.vue'],
        }),
    ],
    // 和 PWA 一起启用
    // shouldPrefetch: false,
})
