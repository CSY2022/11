import { defineUserConfig } from 'vuepress'
import { defaultTheme } from '@vuepress/theme-default'

export default {
  theme: defaultTheme({
    editLink: false,
    lastUpdatedText: '最近更新',
    contributors: false,
  }),
  defineUserConfig({
  lang: 'zh-CN',
  title: '你好， VuePress ！',
  description: '这是我的第一个 VuePress 站点',
  }),
}