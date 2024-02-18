---
title: Python蓝桥杯常用函数以及问题
tags:
  - Python
  - 蓝桥
categories:
  - Python
  - 蓝桥
abbrlink: 7bb4fcd
date: 2024-02-17 18:37:18
---

> 摘自 <https://blog.csdn.net/m0_46204224/article/details/109049999#/>

## Python 常用函数

### input 函数

### 单行输入

```Python
data = list(map(int,input().split()))
#输入不定量的以空格分隔的连续输入
```

```Python
m,n = map(int,intput().split())
#输入定量的以空格分隔的连续输入
```

注意：若间隔号不是空格，而是其他符号，只需要在 split(“”)中定义间隔号即可，例如

```Python
data = list(map(int,input().split("-")))
m,n = map(int,intput().split("-"))
#用-分割
```

### 多行输入

一个 input 输入一个数字，列表，每次每行只能输入一个数字

```Python
data1 = [int(input()) for _ in range(2)]
# 一个 input 输入一个数字，列表，每次每行只能输入一个数字
print(data1)
# [1,2]
```

一个 input 输入一串数字，列表的列表

```Python
data2 = [list(map(int, input().split())) for _ in range(2)]
# 一个 input 输入一串数字，列表的列表
print(data2)
# [[1], [15]]
```

有选择的保存数据

```Python
list3 = []
list4 = []
for i in range(2):
    m, n = map(int, input().split())
    if m > 0:
        list3.append(m)
    else:
        list4.append(n)
print(list3)
print(list4)
# 有选择的保存数据
# 这段代码的作用是从用户输入中获取两组数字对，并根据每对数字的第一个数字是正数还是非正数（包括负数和零），将其分别存储到两个不同的列表中。最后，打印出这两个列表中的内容。
```

### 各种输入

- `input()` 返回的是字符串类型 `(str)`
- 一次输入多个值就用 `list(input().split())`
- 根据需求加 `map`，即 `map(int,input.split())`
- 每出现一个 `input()` 就代表了一行，加了 `map` 就代表是变量多接受输入

例如：

```Python
a = input()  # 
a, b = input().split()  # 接受两个值，空格输入，回车执行
c = input().split()  # 输入为列表
```

- 举例合集

```Python
aaa=1
```

