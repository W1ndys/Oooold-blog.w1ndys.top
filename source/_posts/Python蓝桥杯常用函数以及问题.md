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

> 摘自 https://blog.csdn.net/m0_46204224/article/details/109049999#/

## Python常用函数

### input函数

- 单行输入

```py
data = list(map(int,input().split()))
#输入不定量的以空格分隔的连续输入
```

```py
m,n = map(int,intput().split())
#输入定量的以空格分隔的连续输入
```

注意：若间隔号不是空格，而是其他符号，只需要在split(“”)中定义间隔号即可，例如

```py
data = list(map(int,input().split("-")))
m,n = map(int,intput().split("-"))
#用-分割
```

- 多行输入

```
data1=
```

