import { defaultTheme } from 'vuepress'
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
        'script',{ src: 'https://unpkg.com/@waline/client@v2/dist/waline.mjs'}
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
        children: ['/guide/README.md', '/guide/teachers.md', '/guide/students.md', '/guide/bairi.md', '/guide/hechang.md', '/guide/teachersaying.md', '/guide/formorethings.md'],
      },
    ],
    editLink: false,
    lastUpdatedText: '更新日期',
    contributors: false,
    logo: 'https://csy2022.tk/11.png',
  }),
}
import { init } from 'https://unpkg.com/@waline/client@v2/dist/waline.mjs';

init({
      el: '#waline',
      serverURL: 'https://waline.csy2022.tk',
    });

