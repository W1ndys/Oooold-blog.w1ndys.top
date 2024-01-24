---
title: 使用 Hexo + GitHub + Netlify + Cloudflare提高博客的访问速度
tags:
  - hexo
  - GitHub
  - Netlify
  - Cloudflare
categories:
  - hexo
  - GitHub
  - Netlify
  - Cloudflare
abbrlink: cb064b79
date: 2024-01-24 11:31:37
---

# 使用 Hexo + GitHub + Netlify + Cloudflare 提高博客的访问速度

用久了 GitHub pages 发现，在国内的访问速度确实是有点慢，这是因为 GitHub pages 的服务器是在国外，所以在国内访问慢是正常的

也是看到了某大佬的博客才用这种方法 0 成本（时间成本不计入）提高博客访问速度

需要注意的是，本方法与原先的 GitHub pages 部署方法并不同

> GitHub pages 是本地编译然后把编译好的前端页面推送到 GitHub repo
>
> 这里采用的改进方法是直接把 hexo 源码推送到 GitHub repo，用 Netlify 进行自动编译

这里的好处就是

1. 不占用原来的 github.io 域名，也就是说这两个可以共存
2. 源码直接在GitHub repo仓库里，不用担心数据丢失
3. 如果换了电脑，可以直接从GitHub拉取源码在进行操作
