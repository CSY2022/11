import { defaultTheme } from 'vuepress';
import { init } from '@waline/client';
export default {
  locales: {
    // 键名是该语言所属的子路径
    // 作为特例，默认语言可以使用 '/' 作为其路径。
    '/': {
      lang: 'zh-CN',
      title: '时光不老，11不散',
      head: [
        [
        'link',{ rel: 'icon', href: '/11.png' }
        ],
        [
        'link',{ rel: 'stylesheet', href: 'https://unpkg.com/@waline/client@v2/dist/waline.css'}
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
        {
        text: '留言板',
        link: 'https://11busan.csy2022.tk/comments.html',
      },
    ],
    editLink: false,
    lastUpdatedText: '更新日期',
    contributors: false,
    logo: '/11.png',
  }),
}
   init({
      el: '#waline',
      serverURL: 'https://comments.csy2022.tk',
      search: false,
      reaction: true, 
      comment: true,
      pageview: true,
      lang: "zh-CN",
      emoji: [
      'https://unpkg.com/@waline/emojis@1.1.0/bilibili',
      'https://unpkg.com/@waline/emojis@1.1.0/qq',
      ],
      locale: {
      nick: '昵称（填写QQ号有惊喜）',
      mail: '邮箱（可不填）',
      link: '网址（可不填）',
      admin: '站长',
      reactionTitle: '描述一下你的心情:',
      comment: '留言',
      placeholder: '以手写心，畅所欲言。',
      sofa: '来留言吧~',
      submit: '留言',
      login: '登录（发留言不用登录）',
    },
}); 