import { sidebar } from 'vuepress-theme-hope'

export default sidebar({
    '/study/': [
        {
            text: '基础',
            icon: 'zaixianxuexi',
            children: 'structure',
        },
    ],
    '/interview/': [
        {
            text: '面试',
            icon: 'mianshi',
            children: 'structure',
        },
    ],
    '/threejs/': [
        {
            text: 'threejs',
            icon: 'threejs',
            children: 'structure',
        },
    ],
    '/project/': [
        {
            text: '项目',
            icon: 'xiangmu',
            children: 'structure',
        },
    ],
    '/other/': [
        {
            text: '其他',
            icon: 'qita',
            children: 'structure',
        },
    ],
})
