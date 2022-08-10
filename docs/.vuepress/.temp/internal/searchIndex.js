export const searchIndex = [
  {
    "title": "",
    "headers": [
      {
        "level": 3,
        "title": "有空再补充吧",
        "slug": "有空再补充吧",
        "children": []
      }
    ],
    "path": "/home.html",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "",
    "headers": [
      {
        "level": 3,
        "title": "关于我的经历",
        "slug": "关于我的经历",
        "children": [
          {
            "level": 4,
            "title": "简单介绍",
            "slug": "简单介绍",
            "children": []
          },
          {
            "level": 4,
            "title": "家乡",
            "slug": "家乡",
            "children": []
          },
          {
            "level": 4,
            "title": "山楂",
            "slug": "山楂",
            "children": []
          },
          {
            "level": 4,
            "title": "为什么要选择前端",
            "slug": "为什么要选择前端",
            "children": []
          }
        ]
      }
    ],
    "path": "/about/",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "",
    "headers": [
      {
        "level": 2,
        "title": "基于VuePress部署博客",
        "slug": "基于vuepress部署博客",
        "children": []
      }
    ],
    "path": "/technique/blog.html",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "",
    "headers": [],
    "path": "/technique/JavaScript.html",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "",
    "headers": [],
    "path": "/404.html",
    "pathLocale": "/",
    "extraFields": []
  }
]

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateSearchIndex) {
    __VUE_HMR_RUNTIME__.updateSearchIndex(searchIndex)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ searchIndex }) => {
    __VUE_HMR_RUNTIME__.updateSearchIndex(searchIndex)
  })
}
