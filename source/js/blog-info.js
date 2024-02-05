//重置左上角跳转专用

    // 在页面加载完成后执行
    document.addEventListener("DOMContentLoaded", function() {
      // 获取要修改的链接元素
      var linkElement = document.querySelector("#blog-info a");

      // 修改链接的 href 属性
      if (linkElement) {
        linkElement.href = "/";
      }
    });
