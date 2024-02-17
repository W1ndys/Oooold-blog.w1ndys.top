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
  .event-card {
    width: 100%;
    margin-bottom: 16px;
    padding: 16px;
    box-sizing: border-box;
    border: 1px solid #dddddd;
    border-radius: 8px;
  }
  .event-card h3 {
    margin-top: 0;
  }
  .data-source {
    margin-top: 20px;
    font-size: 12px;
  }
  .warning {
    color: red;
    font-size: 14px;
  }
</style>
</head>
<body>

<div class="data-source">数据来自：探姬、三哈</div>
<div class="warning" id="warningMessage" style="display: none;">
  由于远程数据源获取失败，您现在正在浏览博客本地数据，与实际可能会有延迟<br/>(远程数据源属GitHub托管，或许需要一些魔法)
</div>

<h2>比赛日历</h2>

<div id="calendarData">
</div>

<script>
  // 从URL获取JSON数据的函数
  function fetchData(url) {
    return fetch(url)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => data.data.result)
      .catch(error => {
        console.error('获取远程数据时发生错误:', error);
        document.getElementById('warningMessage').style.display = 'block';
        return fetch('/ctf_events/ctf_events.json')
          .then(response => response.json())
          .then(data => data.data.result)
          .catch(error => console.error('获取本地数据时发生错误:', error));
      });
  }

  // 将数据渲染到HTML中的函数
  function renderCalendar(data) {
    var calendarData = document.getElementById('calendarData');
    calendarData.innerHTML = ''; // 清除之前的数据

    data.forEach(function(event) {
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
