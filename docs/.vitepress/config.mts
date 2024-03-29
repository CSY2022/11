import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  head: [['link', { rel: 'icon', href: '/favicon.png' }]],
  title: "时光不老，11不散",
  lang: 'zh_CN',
  description: "婺源中学2023届11班毕业纪念网站",
  markdown: {
    image: {
      lazyLoading: false
    },
    },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: '/11.png',
    nav: [
      { text: '首页', link: '/' },
{
      text: '朝花夕拾',
        items: [
          { text: '序言', link: '/README' },
          { text: '11班全体老师名单', link: '/teachers' },
          { text: '11班全体学生名单', link: '/students' },
          { text: '百日誓师大会', link: '/bairi' },
          { text: '合唱（团歌+少年）', link: '/hechang' },  
          { text: '语录', link: '/teachersaying' },
          { text: '更多', link: '/formorethings' },
          ]  },                                   
      { text: '留言板', link: 'https://11.csy2022.top/comments.html' },
    ],

    sidebar: [{
      text: '朝花夕拾',
        collapsed: true,
        items: [
          { text: '序言', link: '/README' },
          { text: '11班全体老师名单', link: '/teachers' },
          { text: '11班全体学生名单', link: '/students' },
          { text: '百日誓师大会', link: '/bairi' },
          { text: '合唱（团歌+少年）', link: '/hechang' },  
          { text: '语录', link: '/teachersaying' },
          { text: '更多', link: '/formorethings' },
          ]  },                                   
      { text: '留言板', link: 'https://11.csy2022.top/comments.html' },
    ],
    docFooter: {
      prev: '上一页',
      next: '下一页',
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/CSY2022/' },
      {
        icon: {
          svg: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-tencent-qq" viewBox="0 0 16 16"><path d="M6.048 3.323c.022.277-.13.523-.338.55-.21.026-.397-.176-.419-.453-.022-.277.13-.523.338-.55.21-.026.397.176.42.453Zm2.265-.24c-.603-.146-.894.256-.936.333-.027.048-.008.117.037.15.045.035.092.025.119-.003.361-.39.751-.172.829-.129l.011.007c.053.024.147.028.193-.098.023-.063.017-.11-.006-.142-.016-.023-.089-.08-.247-.118Z"/><path fill-rule="evenodd" d="M11.727 6.719c0-.022.01-.375.01-.557 0-3.07-1.45-6.156-5.015-6.156-3.564 0-5.014 3.086-5.014 6.156 0 .182.01.535.01.557l-.72 1.795a25.85 25.85 0 0 0-.534 1.508c-.68 2.187-.46 3.093-.292 3.113.36.044 1.401-1.647 1.401-1.647 0 .979.504 2.256 1.594 3.179-.408.126-.907.319-1.228.556-.29.213-.253.43-.201.518.228.386 3.92.246 4.985.126 1.065.12 4.756.26 4.984-.126.052-.088.088-.305-.2-.518-.322-.237-.822-.43-1.23-.557 1.09-.922 1.594-2.2 1.594-3.178 0 0 1.041 1.69 1.401 1.647.168-.02.388-.926-.292-3.113a25.78 25.78 0 0 0-.534-1.508l-.72-1.795ZM9.773 5.53c-.13-.286-1.431-.605-3.042-.605h-.017c-1.611 0-2.913.319-3.042.605a.096.096 0 0 0-.01.04c0 .022.008.04.018.056.11.159 1.554.943 3.034.943h.017c1.48 0 2.924-.784 3.033-.943a.095.095 0 0 0 .008-.096Zm-4.32-.989c-.483.022-.896-.529-.922-1.229-.026-.7.344-1.286.828-1.308.483-.022.896.529.922 1.23.027.7-.344 1.286-.827 1.307Zm2.538 0c.483.022.896-.529.922-1.229.026-.7-.344-1.286-.827-1.308-.484-.022-.896.529-.923 1.23-.026.7.344 1.285.828 1.307ZM2.928 8.99a10.674 10.674 0 0 0-.097 2.284c.146 2.45 1.6 3.99 3.846 4.012h.091c2.246-.023 3.7-1.562 3.846-4.011.054-.9 0-1.663-.097-2.285-1.312.26-2.669.41-3.786.396h-.017c-.297.003-.611-.005-.937-.023v2.148c-1.106.154-2.21-.068-2.21-.068V9.107a22.93 22.93 0 0 1-.639-.117Z"/></svg>'
        },
        link: 'https://qm.qq.com/cgi-bin/qm/qr?k=2GmqPqJLn0f70VgCNgm845hGRbmvyndF',
        ariaLabel: 'qq'
      },],
      footer: {
      message: 'Released under the WTFPL License.',
      copyright: 'Copyright © 2023-present 陈思源'
    },
    sidebarMenuLabel: '目录',
    returnToTopLabel: '回到顶部',
    darkModeSwitchLabel: '外观 深/浅 色',
    lightModeSwitchTitle: '切换为浅色模式',
    darkModeSwitchTitle: '切换为深色模式',
    outline: {
    level: 3,
    label: '快速跳转'
    },
  }
})
