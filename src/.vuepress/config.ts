import { defaultTheme } from 'vuepress'
const base = <"/" | `/${string}/`>process.env["BASE"] || "/";
export default {
  locales: {
    // 键名是该语言所属的子路径
    // 作为特例，默认语言可以使用 '/' 作为其路径。
    '/': {
      lang: 'zh-CN',
      title: '时光不老，11不散',
      head: [
        [
        'link',{ rel: 'icon', href: 'https://csy2022.tk/11.png' }
        ],
        [
        "link", { rel: 'stylesheet', href:"https://unpkg.com/@waline/client@v2/dist/waline.css" }
        ],
        [
        "link", { rel: 'stylesheet', href:"https://unpkg.com/@waline/client@v2/dist/waline-meta.css" }
        ],
      ],
      description: '婺源中学2020级11班',
    },
  },
  theme: defaultTheme({
    // 默认主题配置
    editLink: false,
    lastUpdatedText: '最近更新',
    contributors: false,
    logo: 'https://csy2022.tk/11.png',
  }),
}
import { commentPlugin } from "vuepress-plugin-comment2";

// .vuepress/config.ts
export default {
  plugins: [
    commentPlugin({
      provider: "Waline", // Artalk | Giscus | Waline | Twikoo
      serverURL: "https://waline.csy2022.tk",
      dark: 'auto',
      // 在这里放置其他选项
      // ...
    }),
  ],
};