---
title: 使用Typora_plugin实现Hexo博客绝对路径一键替换相对路径|正斜杠替换为反斜杠
tags:
  - Typora
  - Hexo
categories:
  - Hexo
  - 博客写作
  - Typora插件开发
abbrlink: 520cc65
date: 2024-02-08 15:24:23
---

# 使用 Typora_plugin 实现 Hexo 博客绝对路径一键替换相对路径|正斜杠替换为反斜杠

今天下午偶然的发现，解决了我很久以来一直想解决的问题，因为在 Hexo 博客上传的时候我一般是把图片插入进去，但是默认的路径是绝对路径，曾经在 Typora 设置里改过，但是效果也不好，今天想起了 Typora plugin，于是想基于 Typora plugin 开发一个插件

首先感谢 Typora plugin 开发者 https://github.com/obgnail/typora_plugin/

## 脚本适用情况

该脚本主要实现功能是，Markdown 中所有的图片路径中正斜杠一键替换为反斜杠，并把包含/img/的路径替换为相对路径，方便 Hexo 博客上传

例如 Markdown 中文件路径是 `[示例图片](F:\Hexo\source\img\test.png)`

替换后的路径就是 `[示例图片](/img/test.png)`

本脚本适用于：Hexo 博客写作排版，Hexo 图片放在/source/文件下的 Hexo 博客作者

## 安装 Typora plugin

有关插件的安装教程可以看官方的仓库，Readme 写的很详细了

https://github.com/obgnail/typora_plugin/

## 创建 JS

在 `./plugin/custom/plugins/ReplaceBackslash.js` 文件中创建 js 文件，把下面代码复制进去。

```javascript
// 脚本使用说明
// 该脚本主要实现功能是，Markdown 中所有的图片路径中正斜杠一键替换为反斜杠，并把包含/img/的路径替换为相对路径，方便 Hexo 博客上传

// 例如 Markdown 中文件路径是 [示例图片](F:\Hexo\source\img\test.png)
// 替换后的路径就是 [示例图片](/img/test.png)
// 本脚本适用于：Hexo 博客写作排版，Hexo 图片放在/source/文件下的 Hexo 博客作者

// 脚本作者↓
// 1. https://w1ndys.top/
// 2. https://chat.openai.com/
// 3. https://github.com/obgnail/typora_plugin/issues/467


//下面是脚本的具体实现代码↓

class ReplaceBackslash extends BaseCustomPlugin {
    callback = async anchorNode => {
        const filepath = this.utils.getFilePath();
        const content = await this.utils.Package.Fs.promises.readFile(filepath, 'utf-8');
        const replacedContent = this.replaceBackslash(content);
        await this.utils.Package.Fs.promises.writeFile(filepath, replacedContent);
        File.reloadContent(replacedContent, { fromDiskChange: false });
        confirm("替换成功，点击确认或取消均可继续")   //觉得弹窗比较烦人可以注释掉或者删去这一行
    }

    // 在这里写主要的逻辑代码
    replaceBackslash = content => {
        const regexp = /!\[(.*?)\]\((.*?)\)/g;
        const replacedContent = content.replace(regexp, (match, desc, src) => {
            // 检测图片路径是否包含\img\
            //————注意————，这里的 img 路径可以替换为你自己实际的路径
            if (src.includes('\\img\\')) {
                // 如果包含\img\，则删除\img\之前的路径，保留\img\并变为相对路径
                src = '\\' + src.substring(src.indexOf('\\img\\') + 1);
            }
            // 对图片路径中的反斜杠进行替换
            const replacedSrc = src.replace(/\\/g, '/');
            return `![${desc}](${replacedSrc})`;
        });
        return replacedContent;
    }
}

module.exports = { plugin: ReplaceBackslash };
```

## 启用插件

1. 修改 `./plugin/global/settings/custom_plugin.user.toml`，添加配置：

```
[ReplaceBackslash]
name = "替换反斜杠为正斜杠"
enable = true
```

## 添加快捷方式

### 添加快捷键

修改

1. 修改 `./plugin/global/settings/custom_plugin.user.toml`，添加配置

在上一步的基础上，继续添加一行代码

```
[ReplaceBackslash]
name = "替换反斜杠为正斜杠"
enable = true
hotkey = ["ctrl+shift+/"]
```

这里快捷键设置为 `ctrl+shift+/` 可以根据自己需要修改

### 添加快捷按钮

在上一步的基础上，继续添加代码

```
[quickButton]
[quickButton.config]
#   disable:      禁用此按钮
#   coordinate:   按钮坐标。往上为x轴正方向，往左为y轴正方向，从零开始计数
#   icon:         按钮图标。填入css class。支持font-awesome-4.1.0和ionicons-2.0.1，所有的图标及其对应的css class请参考：https://www.adfwebmagazine.jp/wp-content/uploads/test_v4.1.pdf  和  https://ionic.io/ionicons/v2
#   size(可选):    图标大小。默认17px
#   color(可选):   图标颜色。默认跟随当前主题的配色方案
#   bgColor(可选): 图标背景色。默认跟随当前主题的配色方案
#   hint:         提示信息
#   callback:     回调函数。采用pluginName.MethodName的形式（功能就像hotkey.default.toml中的plugin参数和function参数的合体）
#                     MethodName请通过阅读源码查找。如果您不懂代码，但还是想添加按钮，有个碰运气技巧：在【右键菜单->常用插件->自定义插件下的插件】基本都是XXX.callback，其余插件基本都是XXX.call
#   evil(危险):    自定义回调函数。功能同hotkey.default.toml中的evil参数（它能用的，这里也能用）。这里的文本内容会被eval()。如果设置此参数，callback参数会失效
buttons = [
    # 默认的按钮
    { disable = false, coordinate = [0, 0], hint = "直达底部", size = "28px", icon = "fa fa-angle-down", callback = "go_top.goBottom" },
    { disable = false, coordinate = [1, 0], hint = "直达顶部", size = "28px", icon = "fa fa-angle-up", callback = "go_top.goTop" },
    { disable = false, coordinate = [2, 0], hint = "文字风格", size = "17px", icon = "fa fa-font", callback = "text_stylize.call" },
    { disable = false, coordinate = [3, 0], hint = "混排优化", size = "17px", icon = "fa fa-align-justify", callback = "md_padding.call" },
    { disable = false, coordinate = [0, 1], hint = "思维导图", size = "22px", icon = "fa fa-code-fork", callback = "markmap.onButtonClick" },
    { disable = false, coordinate = [1, 1], hint = "图片管理", size = "17px", icon = "fa fa-image", callback = "imageReviewer.callback" },
    { disable = false, coordinate = [2, 1], hint = "书签管理", size = "17px", icon = "fa fa-bookmark", callback = "scrollBookmarker.callback" },
    { disable = false, coordinate = [3, 1], hint = "高亮搜索", size = "17px", icon = "fa fa-search", callback = "search_multi.call" },

    # 你的按钮
    { disable = false, coordinate = [4, 1], hint = "正斜杠替换斜杠", size = "17px", icon = "fa fa-book", callback = "ReplaceBackslash.callback" },
]
```

重启 Typora 就可以在右下角看到添加的快捷按钮

## 鸣谢

1. https://github.com/obgnail/typora_plugin/issues/467
2. https://w1ndys.top/

2. https://chat.openai.com/

文章来自 https://blog.w1ndys.top/posts/520cc65
