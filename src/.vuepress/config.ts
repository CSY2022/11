import { defaultTheme } from 'vuepress'

export default {
  locales: {
    // 键名是该语言所属的子路径
    // 作为特例，默认语言可以使用 '/' 作为其路径。
    '/': {
      lang: 'zh-CN',
      title: 'VuePress',
      head: [
        [
        'link',{ rel: 'icon', href: 'https://www.csy2022.tk/11.png' }
        ],
      ],
      description: 'Vue 驱动的静态网站生成器',
    },
  },
  theme: defaultTheme({
    // 默认主题配置
    editLink: false,
    lastUpdatedText: '最近更新',
    contributors: false,
    logo: 'https://www.csy2022.tk/11.png',
  }),
}