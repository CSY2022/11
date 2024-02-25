---
head:
  - - link
    - name: stylesheet
      content: https://11.csy2022.top/waline.css
---
<div style="text-align: center">
        <h1 style="color: #5672CD;">留言板</h1>
    </div>
    <h5><br></h5>
    <h3>以手写心，畅所欲言。</h3><br>
    <h3><strong>Tips:</strong><br>
    </h3>1. <strong style="color: #5672CD;">文明</strong>用语，以礼待人。<br><br>2. 留言时<strong style="color: #5672CD;">不用填 邮箱 网址 </strong>这两项，<strong style="color: #5672CD;">也不用登录</strong>，写完后点留言就可以了。<br><br>3. <strong style="color: #5672CD;">留言板由 Waline 评论系统支持</strong>。如果加载较慢，请耐心等待。<br><br>4. 悄悄告诉你: 昵称不填可以 <strong style="color: #5672CD;">匿名</strong>，填写QQ号可以 <strong style="color: #5672CD;">自动获取你的QQ头像</strong>。<br><br>
    <div id="waline" style="max-width: 800px;margin: 0 auto;"></div>
    <script type="module">
    import { init } from 'https://npm.onmicrosoft.cn/@waline/client@v3/dist/waline.js';
    const locale = {nick: '昵称（填写QQ号有惊喜）',mail: '邮箱（可不填）',link: '网址（可不填）',admin: '站长',reactionTitle: '描述一下你的心情:',comment: '留言',placeholder: '以手写心，畅所欲言。',sofa: '来留言吧～',submit: '留言',login: '登录（发留言不用登录）',};
    const waline = init({
    el: '#waline',
    serverURL: 'https://comments.csy2022.top',
    search: false,
    reaction: true,
    comment: true,
    pageview: true,
    lang: "zh-CN",
    locale,
    emoji: ['https://npm.onmicrosoft.cn/@waline/emojis@1.2.0/bilibili','https://npm.onmicrosoft.cn/@waline/emojis@1.2.0/bmoji','https://npm.onmicrosoft.cn/@waline/emojis@1.2.0/qq','https://npm.onmicrosoft.cn/@waline/emojis@1.2.0/weibo','https://npm.onmicrosoft.cn/@waline/emojis@1.2.0/tieba'],}),
</script>
    <script>
        waline.update();
    </script>
