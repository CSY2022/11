import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "时光不老，11不散",
  description: "婺源中学2023届11班毕业纪念网站",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '朝花夕拾', link: '/' },
      { text: '留言板', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: '朝花夕拾',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' },
        text: '留言板',
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/CSY2022/' }
    ]
  }
})
