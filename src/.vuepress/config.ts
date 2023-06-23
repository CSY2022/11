import { defaultTheme } from 'vuepress'
// import { commentPlugin } from "vuepress-plugin-comment2";
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
      ],
      description: '婺源中学2020级11班',
    },
  },
  theme: defaultTheme({
    // 默认主题配置
    navbar: [
      // NavbarItem
      {
        text: '朝花夕拾',
        children: ['/guide/index.html', '/guide/teachers.html','/guide/students.html'],
      },
    ],
    editLink: false,
    lastUpdatedText: '最近更新',
    contributors: false,
    logo: 'https://csy2022.tk/11.png',
  }),
 //   plugins: [
//    commentPlugin({
  //    provider: "Waline", // Artalk | Giscus | Waline | Twikoo
   //   serverURL: "https://waline.csy2022.tk",
      // 在这里放置其他选项
      // ...
   // }),
 // ],
}


