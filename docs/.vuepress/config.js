const { defaultTheme } = require('@vuepress/theme-default')
const { searchPlugin } = require('@vuepress/plugin-search')

module.exports = {
    head: [['link', { rel: 'icon', href: '/image.png' }]],
    title: '山楂的日常',
    description: '书以明志  锤炼技艺  快乐生活',
    markdown: {
        headers: {
            level: [2, 3, 4, 5, 6]
        },
    },
    theme: defaultTheme({
        navbar: [
            { text: '首页', link: '/home' },
            { text: '读书日记', link: '/book' },
            {
                text: '技术总结',
                children: [
                    { text: 'JS总结', link: '/technique/JavaScript' },
                    { text: '博客部署', link: '/technique/blog' }
                ]
            },
            {
                text: '前端相关技术文档收集',
                children: [
                    { text: '前端面试之道', link: '/pages/interview' }
                ]
            },
            {
                text:'生活',
                children: [
                    { text: '年终总结', link: '/pages/summary' }
                ]
            },
            { text: '关于我', link: '/about' }
        ],
        lastUpdated: true,
        lastUpdatedText: '最新更新',
        notFound: ['是不是迷路了呢，这里什么都没有', '这里没有内容，真的到了边界了', '你来到了特殊的地方，后期会添加的'],
        backToHome: '回到首页去吧',
        sidebarDepth: 4,
        sidebar: 'auto',
        sidebar: {
            '/technique': ['JavaScript.md', 'blog.md'],
            '/pages/interview': [{
                text: '前端面试之道',
                children: ['README.md','a.md','b.md']
            }
            ],
            '/pages/summary':[{
                text:'年终总结',
                children:['2022.md']
            }],
            '/': []
        }
    }),
    plugins: [
        searchPlugin({
            isSearchable: (page) => page.path !== '/',
            getExtraFields: (page) => page.frontmatter.tags ?? [],
        })
    ]
}