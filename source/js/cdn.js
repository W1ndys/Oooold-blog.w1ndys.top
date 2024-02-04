// 创建一个包含要添加到底部的内容的 HTML 字符串
var content = `
    <div style="text-align: center; display: flex; justify-content: center; align-items: center; margin: 20px;">
        <p style="margin-left: 10px;"><a href="https://www.dogecloud.com/" target="_blank" rel="noopener noreferrer">多吉云提供CDN加速服务</a></p>
    </div>
`;

// 获取目标元素
var targetElement = document.querySelector(".framework-info");

// 创建一个新的 div 元素
var newElement = document.createElement("div");

// 将内容添加到新元素中
newElement.innerHTML = content;

// 添加类名为 .foot-cdn
newElement.classList.add("foot-cdn");

// 将新元素插入到目标元素之后
if (targetElement) {
    targetElement.parentNode.insertBefore(newElement, targetElement.nextSibling);
} else {
    console.error("未找到目标元素（类名：framework-info）。请确保目标元素存在并具有正确的类名。");
}

// 为新元素设置居中样式
newElement.style.marginLeft = "auto";
newElement.style.marginRight = "auto";