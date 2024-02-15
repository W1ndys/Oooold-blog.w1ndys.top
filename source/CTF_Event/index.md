---
title: 国内CTF近期赛事
date: 2024-02-15 15:50:35
---

<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>比赛日历</title>
<style>
  .event-card-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
  .event-card {
    width: calc(50% - 8px);
    margin-bottom: 16px;
    padding: 16px;
    box-sizing: border-box;
    border: 1px solid #dddddd;
    border-radius: 8px;
  }
  .event-card h3 {
    margin-top: 0;
  }
</style>
</head>
<body>

<h2>比赛日历</h2>
<div class="data-source">数据来自：探姬、三哈</div>
<div class="event-card-container" id="calendarData">
</div>

<script>
  // 从URL获取JSON数据的函数
  function fetchData(url) {
    return fetch(url)
      .then(response => response.json())
      .then(data => data.data.result)
      .catch(error => console.error('获取数据时发生错误:', error));
  }

  // 将数据渲染到HTML中的函数
  function renderCalendar(data) {
    var calendarData = document.getElementById('calendarData');
    calendarData.innerHTML = ''; // 清除之前的数据

    data.forEach(function(event, index) {
      var card = document.createElement('div');
      card.classList.add('event-card');
      card.innerHTML = `
        <h3>${event.name}</h3>
        <p><strong>类型:</strong> ${event.type}</p>
        <p><strong>开始时间:</strong> ${event.bmks}</p>
        <p><strong>结束时间:</strong> ${event.bmjz}</p>
        <p><strong>状态:</strong> ${getStatus(event.status)}</p>
        <p><strong>详情:</strong> ${event.readmore}</p>
      `;
      calendarData.appendChild(card);
      // 每两个卡片之后添加换行
      if ((index + 1) % 2 === 0) {
        calendarData.appendChild(document.createElement('br'));
      }
    });
  }

  // 根据状态码获取状态文本的函数
  function getStatus(statusCode) {
    switch (statusCode) {
      case 0:
        return "报名未开始";
      case 1:
        return "报名进行中";
      case 2:
        return "报名已结束";
      case 3:
        return "比赛进行中";
      case 4:
        return "比赛已结束";
      default:
        return "";
    }
  }

  // JSON数据源的URL
  var url = 'https://raw.githubusercontent.com/ProbiusOfficial/Hello-CTFtime/main/CN.json';

  // 获取数据并渲染日历
  fetchData(url).then(renderCalendar);
</script>

</body>
</html>
