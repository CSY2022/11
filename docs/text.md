# Comment
<!DOCTYPE html>
<html lang="zh-CN">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width,initial-scale=1">
    <title>留言板</title>
    <link rel="icon" href="/11.png">
    <link rel="stylesheet" href="https://11.csy2022.top/waline.css">
    <style>
    color-scheme: light dark;
    background-color: color-mix(in srgb, Canvas, CanvasText 2.5%);
    color: color-mix(in srgb, CanvasText, Canvas 15%);
    </style>
    <script type="module">
    import { init } from 'https://unpkg.com/@waline/client@v3/dist/waline.js';
    const locale = {nick: '昵称（填写QQ号有惊喜）',mail: '邮箱（可不填）',link: '网址（可不填）',admin: '站长',reactionTitle: '描述一下你的心情:',comment: '留言',placeholder: '以手写心，畅所欲言。',sofa: '来留言吧～',submit: '留言',login: '登录（发留言不用登录）',};
    init({
    el: '#waline',
    serverURL: 'https://comments.csy2022.top',
    search: false,
    reaction: true,
    comment: true,
    pageview: true,
    lang: "zh-CN",
    locale,
    emoji: ['https://npm.onmicrosoft.cn/@waline/emojis@1.1.0/bilibili','https://npm.onmicrosoft.cn/@waline/emojis@1.1.0/qq',],})
</script>
</head>
<body>
::: raw
<div id="waline" class="vp-raw" style="max-width: 800px;margin: 0 auto;"></div>
:::
</body>
</html>