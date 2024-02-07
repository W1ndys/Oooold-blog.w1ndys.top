// 检查本地存储中今天的弹窗次数
function checkPopup() {
    const today = new Date().toISOString().slice(0, 10);
    let popupCount = parseInt(localStorage.getItem('popupCount')) || 0;

    // 如果今天弹窗次数小于3，则可以继续弹窗
    if (popupCount < 3) {
        // 在此处弹窗逻辑，这里用一个简单的alert代替
        const remainingPopupCount = 3 - popupCount;
        alert(`W1ndys祝你新年快乐！(本弹窗每天出现三次今天还剩余 ${remainingPopupCount - 1} 次弹窗)`);

        // 更新弹窗次数
        popupCount++;
        localStorage.setItem('popupCount', popupCount);
    }
}

// 当页面加载完成时检查是否需要弹窗
window.onload = checkPopup;
