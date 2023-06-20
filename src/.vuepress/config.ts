import { defineUserConfig } from 'vuepress'
import { defaultTheme } from '@vuepress/theme-default'

export default 
locales: {
    // 键名是该语言所属的子路径
    // 作为特例，默认语言可以使用 '/' 作为其路径。
    '/': {
  lang: 'zh-CN',
  title: '你好， VuePress ！',
  description: '这是我的第一个 VuePress 站点',
};
  theme: defaultTheme({
  locales: {
      '/': {
  editLink: false,
  lastUpdatedText: '最近更新',
  contributors: false,
  },
  },
  });
