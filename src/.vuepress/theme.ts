import { hopeTheme } from 'vuepress-theme-hope'
import navbar from './navbar.js'
import sidebar from './sidebar.js'

export default hopeTheme({
    hostname: 'https://luotianxu1.github.io', // hostname 当前网站部署到的域名
    // 文章显示的默认作者
    author: {
        name: '罗天旭',
        url: 'https://luotianxu1.github.io',
        email: '1265062404@qq.com',
    },
    navbar, // 导航栏
    sidebar, // 侧边栏
    headerDepth: 2, // 侧边栏嵌套的标题深度
    logo: 'https://theme-hope-assets.vuejs.press/logo.svg',
    repo: 'vuepress-theme-hope/vuepress-theme-hope',
    repoDisplay: true, // 是否在导航栏内显示仓库链接
    navbarAutoHide: 'mobile', // 向下滚动时自动隐藏导航栏
    hideSiteNameOnMobile: true, // 在移动视图下隐藏站点名称
    themeColor: true, // 主题色选择器
    darkmode: 'switch', // 深色模式
    fullscreen: true, // 全屏
    // 自定义导航栏布局
    navbarLayout: {
        start: ['Brand'],
        center: ['Links'],
        end: ['Search', 'Outlook', 'Repo'],
    },
    breadcrumb: true, // 全局启用路径导航
    breadcrumbIcon: true, // 在路径导航显示图标
    prevLink: true, // 在页面底部显示上一篇链接
    nextLink: true, // 在页面底部显示下一篇链接
    titleIcon: true, // 在页面标题旁显示图标
    pageInfo: [
        'Author',
        'Original',
        'Date',
        'Category',
        'Tag',
        'ReadingTime',
        'Word',
    ], // 文章信息
    lastUpdated: true, // 显示页面最后更新时间
    contributors: true, // 显示页面贡献者
    editLink: false, // 展示编辑此页链接
    footer: '', // 页脚
    copyright: 'Copyright © <罗天旭>', // 版权信息
    displayFooter: true, // 显示页脚
    home: '/', // 主页路径
    toc: true, // 在桌面模式下右侧展示标题列表
    print: true, // 在桌面模式下显示打印按钮
    iconAssets: '//at.alicdn.com/t/c/font_3926889_b8rlrco9u97.css', // 字体图标资源链接
    iconPrefix: 'iconfont icon-',
    docsDir: 'docs',
    // 博客相关
    blog: {
        name: '罗天旭', // 姓名
        intro: 'https://github.com/luotianxu1', // 填写后将可以点击“博主信息”中的头像或姓名进入个人介绍页
        avatar: '/img/author/author.jpg', // 头像
        description: '搬砖',
        // 媒体链接配置
        medias: {
            Github: 'https://github.com/luotianxu1',
        },
        sidebarDisplay: 'mobile', // 是否在侧边栏展示博主信息
        timeline: '昨日不在', // 时间轴的顶部文字
        articlePerPage: 10, // 每页的文章数量
        // 文章列表中展示的文章信息
        articleInfo: [
            'Author',
            'Original',
            'Date',
            'PageView',
            'Category',
            'Tag',
            'ReadingTime',
        ],
    },
    // 加密配置
    encrypt: {
        global: false, // 是否全局加密
        // 加密配置，为一个对象，键名为匹配的路径，键值为对应的密码，接受字符串或字符串数组。
        config: {
            // 这会加密整个 guide 目录，并且两个密码都是可用的
            // "/guide/": ["1234", "5678"],
            // 这只会加密 config/page.html
            // "/config/page.html": "1234"
            '/interview/': ['luotx'],
        },
    },
    // 多语言配置
    metaLocales: {
        editLink: '在 GitHub 上编辑此页',
    },
    // 如果想要实时查看任何改变，启用它。注: 这对更新性能有很大负面影响
    hotReload: true,
    // 在这里配置主题提供的插件
    plugins: {
        blog: true,
        searchPro: {
            indexContent: true, // 索引全部内容
        },
        // 启用之前需安装 @waline/client
        // 警告: 这是一个仅供演示的测试服务，在生产环境中请自行部署并使用自己的服务！
        // comment: {
        //   provider: "Waline",
        //   serverURL: "https://waline-comment.vuejs.press",
        // },
        components: {
            components: ['Badge', 'VPCard'],
        },
        // 此处开启了很多功能用于演示，你应仅保留用到的功能。
        mdEnhance: {
            align: true,
            attrs: true,
            codetabs: true,
            component: true,
            demo: true,
            figure: true,
            imgLazyload: true,
            imgSize: true,
            include: true,
            mark: true,
            plantuml: true,
            spoiler: true,
            stylize: [
                {
                    matcher: 'Recommended',
                    replacer: ({ tag }) => {
                        if (tag === 'em')
                            return {
                                tag: 'Badge',
                                attrs: { type: 'tip' },
                                content: 'Recommended',
                            }
                    },
                },
            ],
            sub: true,
            sup: true,
            tabs: true,
            tasklist: true,
            vPre: true,

            // 在启用之前安装 chart.js
            // chart: true,

            // insert component easily

            // 在启用之前安装 echarts
            // echarts: true,

            // 在启用之前安装 flowchart.ts
            // flowchart: true,

            // gfm requires mathjax-full to provide tex support
            // gfm: true,

            // 在启用之前安装 katex
            // katex: true,

            // 在启用之前安装 mathjax-full
            // mathjax: true,

            // 在启用之前安装 mermaid
            // mermaid: true,

            // playground: {
            //   presets: ["ts", "vue"],
            // },

            // 在启用之前安装 reveal.js
            // revealJs: {
            //   plugins: ["highlight", "math", "search", "notes", "zoom"],
            // },

            // 在启用之前安装 @vue/repl
            // vuePlayground: true,

            // install sandpack-vue3 before enabling it
            // sandpack: true,
        },

        // 如果你需要 PWA。安装 @vuepress/plugin-pwa 并取消下方注释
        // pwa: {
        //   favicon: "/favicon.ico",
        //   cacheHTML: true,
        //   cacheImage: true,
        //   appendBase: true,
        //   apple: {
        //     icon: "/assets/icon/apple-icon-152.png",
        //     statusBarColor: "black",
        //   },
        //   msTile: {
        //     image: "/assets/icon/ms-icon-144.png",
        //     color: "#ffffff",
        //   },
        //   manifest: {
        //     icons: [
        //       {
        //         src: "/assets/icon/chrome-mask-512.png",
        //         sizes: "512x512",
        //         purpose: "maskable",
        //         type: "image/png",
        //       },
        //       {
        //         src: "/assets/icon/chrome-mask-192.png",
        //         sizes: "192x192",
        //         purpose: "maskable",
        //         type: "image/png",
        //       },
        //       {
        //         src: "/assets/icon/chrome-512.png",
        //         sizes: "512x512",
        //         type: "image/png",
        //       },
        //       {
        //         src: "/assets/icon/chrome-192.png",
        //         sizes: "192x192",
        //         type: "image/png",
        //       },
        //     ],
        //     shortcuts: [
        //       {
        //         name: "Demo",
        //         short_name: "Demo",
        //         url: "/demo/",
        //         icons: [
        //           {
        //             src: "/assets/icon/guide-maskable.png",
        //             sizes: "192x192",
        //             purpose: "maskable",
        //             type: "image/png",
        //           },
        //         ],
        //       },
        //     ],
        //   },
        // },
    },
})
