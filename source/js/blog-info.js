//重置左上角跳转专用
document.addEventListener('DOMContentLoaded', function () {
    // 获取span元素
    var blogInfoSpan = document.getElementById('blog-info');

    // 给span元素添加点击事件监听器
    blogInfoSpan.addEventListener('click', function () {
        // 获取包含在span内的a元素
        var linkElement = blogInfoSpan.querySelector('a');

        // 修改a元素的href属性为你想要的跳转链接
        linkElement.href = '/';

        // 如果想在点击后立即跳转，可以使用以下代码
        // window.location.href = linkElement.href;
    });
});