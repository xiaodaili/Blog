export const themeData = JSON.parse("{\"navbar\":[{\"text\":\"首页\",\"link\":\"/home\"},{\"text\":\"读书日记\",\"link\":\"/book\"},{\"text\":\"技术总结\",\"link\":\"/technique\"},{\"text\":\"关于我\",\"link\":\"/about\"}],\"lastUpdated\":true,\"lastUpdatedText\":\"最新更新\",\"notFound\":[\"是不是迷路了呢，这里什么都没有\",\"这里没有内容，真的到了边界了\",\"你来到了特殊的地方，后期会添加的\"],\"backToHome\":\"回到首页去吧\",\"sidebarDepth\":4,\"sidebar\":\"auto\",\"locales\":{\"/\":{\"selectLanguageName\":\"English\"}},\"colorMode\":\"auto\",\"colorModeSwitch\":true,\"logo\":null,\"repo\":null,\"selectLanguageText\":\"Languages\",\"selectLanguageAriaLabel\":\"Select language\",\"editLink\":true,\"editLinkText\":\"Edit this page\",\"contributors\":true,\"contributorsText\":\"Contributors\",\"openInNewWindow\":\"open in new window\",\"toggleColorMode\":\"toggle color mode\",\"toggleSidebar\":\"toggle sidebar\"}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateThemeData) {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ themeData }) => {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  })
}
