---
title: 在你的网站中添加kemomimi酱！（绿衣服的小狐狸）
tags:
  - Hexo
  - Hexo美化
  - butterfly美化
categories:
  - Hexo
  - Hexo美化
abbrlink: 3a360f71
date: 2024-02-11 21:49:37
---

> https://docs.api.ecylt.top/kemomimi-jiang#/

# kemomimi 酱



在你的网站中添加 kemomimi 酱！（绿衣服的小狐狸）

![](/img/kemomimi/asda.png)

效果展示

## 创建 css

复制下面代码，创建一个名为 `huli.css` 的文件

```css
#follow-img {
  position: absolute;
  transition: transform 0.5s, top 0.5s, left 0.5s;
}
```

## 创建 js

复制下面代码，创建一个名为 `huli.js` 的文件

```js
const img = document.getElementById('follow-img');
let mouseX = 0, mouseY = 0;
let imgX = 0, imgY = 0;
let speed = 0.05;
let rotateDeg = 0;

function animate() {
    let dx = mouseX - imgX;
    let dy = mouseY - imgY;
    let angle = Math.atan2(dy, dx);
    rotateDeg = angle * (180 / Math.PI) + 90;

    imgX += dx * speed;
    imgY += dy * speed;

    img.style.left = `${imgX - img.width / 2}px`;
    img.style.top = `${imgY - img.height / 2}px`;
    img.style.transform = `rotate(${rotateDeg}deg)`;

    requestAnimationFrame(animate);
}

document.addEventListener('mousemove', (e) => {
    mouseX = e.pageX;
    mouseY = e.pageY;
});

animate();
```

## 创建 GIF

保存这个 GIF 图片到你的 source 合适的位置

![](/img/kemomimi/huli.gif)

## 引入

在你的主题中引入这三个文件，比如我的

注意，css 文件一定要引入在 head 前面，另外两个任意都行，head 或者 body 都行

```
- <link rel="stylesheet" type="text/css" href="/css/huli.css">
- <img id="follow-img" src="/img/kemomimi/huli.gif"/>
- <link rel="stylesheet" type="text/css" href="/css/huli.css">
```

同理你也可以把图片文件换成自己喜欢的小图片

## 效果演示



大功告成！尽情享受吧~

