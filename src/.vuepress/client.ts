import { init } from '@waline/client';
import '@waline/client/dist/waline.css';
import '@waline/client/dist/waline-meta.css';
import { defineClientConfig } from '@vuepress/client';
export default defineClientConfig({
})
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