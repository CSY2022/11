---
home: true
heroImage: 'https://csy2022.tk/11.png'
actions:
  - text: 朝花夕拾→
    link: /guide/
    type: primary
features:
  - title: 回忆我们的往昔
    details: 朝花夕拾。也许某一天，在不经意的一瞬间，你能回忆起深埋在心底那一份美好。
  - title: 坚持“民主建设”
    details: QQ加我，或者在【时光不老，十一不散】QQ群里面@我(添加方式在最下方)，你可以要求更改或添加任何页面的任何内容！(前提：1.你是婺源中学2020级11班的人 2.要求合情合理)。
  - title: 其他一些“小”事
    details: 恳求各位不要卸载本站的APP。 APP很小，安装包不到1MB，占内存极少。把它放在手机的某个角落里，偶尔点开看看，也就当做一份回忆吧。

footer: 本网站及APP由 陈思源 及 一个木函  提供技术支持。<br><a href="https://csy2022.tk/11.apk">1.下载本站APP</a>。<br><a href="http://wpa.qq.com/msgrd?v=3&uin=1703862265&site=qq&menu=yes">2.添加我的QQ为好友</a>。<br><a href="http://qm.qq.com/cgi-bin/qm/qr?_wv=1027&k=0_VXXg4Lpz4sCOMSGO2DGBWZ64ksPVXy&authKey=iV8z8x21UYWNxJc%2Bbu5V4SCEfMiyb0FskXiywJ4nb1%2BJWrX5wtxUNLY%2FKBpN8JcL&noverify=0&group_code=731412047">3.加入【时光不老，十一不散】</a>。
footerHtml: true
---
<head>
  <!-- ... -->
  <link
    rel="stylesheet"
    href="https://unpkg.com/@waline/client@v2/dist/waline.css"
  />
  <!-- ... -->
</head>
<body>
  <!-- ... -->
  <div id="waline"></div>
  <script type="module">
    import { init } from 'https://unpkg.com/@waline/client@v2/dist/waline.mjs';

    init({
      el: '#waline',
      serverURL: 'https://your-domain.vercel.app',
    });
  </script>
</body>