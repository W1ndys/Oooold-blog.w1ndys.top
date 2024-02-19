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

#### 单行输入

```python
data = list(map(int,input().split()))
#输入不定量的以空格分隔的连续输入
```

```python
m,n = map(int,intput().split())
#输入定量的以空格分隔的连续输入
```

注意：若间隔号不是空格，而是其他符号，只需要在 split(“”)中定义间隔号即可，例如

```python
data = list(map(int,input().split("-")))
m,n = map(int,intput().split("-"))
#用-分割
```

#### 多行输入

一个 input 输入一个数字，列表，每次每行只能输入一个数字

```python
data1 = [int(input()) for _ in range(2)]
# 一个 input 输入一个数字，列表，每次每行只能输入一个数字
print(data1)
# [1,2]
```

一个 input 输入一串数字，列表的列表

```python
data2 = [list(map(int, input().split())) for _ in range(2)]
# 一个 input 输入一串数字，列表的列表
print(data2)
# [[1], [15]]
```

有选择的保存数据

```python
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

#### 各种输入

- `input()` 返回的是字符串类型 `(str)`
- 一次输入多个值就用 `list(input().split())`
- 根据需求加 `map`，即 `map(int,input.split())`
- 每出现一个 `input()` 就代表了一行，加了 `map` 就代表是变量多接受输入

例如：

```python
a = input()  # 接受一个值
a, b = input().split()  # 接受两个值，空格输入，回车执行
c = input().split()  # 输入为列表
```

- 举例合集

```python
m = int(input())  # 输入一个数字

m, n = map(int, input().split())  # 输入两个数字

a, b = map(int, input().split("#"))  # 连续输入，井号间隔

str1 = list(map(int, input().split()))  # 一行输入无限多的整型数据，用list存储

data3 = [int(input()) for _ in range(10)]  # 多行input输入，存放在一个列表中

data4 = [
    list(map(int, input().split())) for i in range(2)
]  # 相同的思想生成列表，存储为列表的列表

data5 = [tuple(map(int, input().split())) for i in range(2)]
# 列表推导式

for i in range(5):
    x = input()
    # 连续输入
    
arr = input().split()  # 这里存储的是字符串型的列表
arr = list(map(int, input().split()))  # 这里存储的是整型的列表

a = 2.345
a = str(a)
print(float(a[0:4]) + 1)  # 通过变成str，不4舍5入，再float成数值
print("%.2f" % (float(a)))  # %.2f直接4舍5入
```

- 记录一下没见过的[`tuple`](/posts/249dac9b)函数的语法解释（元组）

- 记录一下[`map`](/posts/6bbcb18e)函数的语法解释（迭代器）

### 占位符

#### %占位符详解

占位符主要用于填充格式问题，通过加入格式化字符串来控制输出的格式。在Python中，常见的占位符及其使用方式如下：

- `%s`: 字符串的占位符，可以使用 `%s` 或者 `{}` 进行替换。例如：`'{:s}'.format('hello')`。
- `%d`: 整数的占位符，可以使用 `%d` 或者 `{}` 进行替换。例如：`'{:d}'.format(10)`。
- `%.2f`: 浮点数的占位符，控制保留小数点后两位，四舍五入。例如：`'{:.2f}'.format(3.14159)`。
- `%.2e`: 科学计数法的浮点数占位符，控制保留小数点后两位，以科学计数法表示。例如：`'{:.2e}'.format(1000)`。
- `%`：百分号占位符，用于在字符串中表示百分比。例如：`'{}%'.format(50)`。

常见用法示例：

```python
print('{} {}'.format('Hello', 'World'))  # 输出：Hello World
print('The value is %d' % 42)  # 输出：The value is 42
print('The value is {:.2f}'.format(3.14159))  # 输出：The value is 3.14
```

填充格式问题：

- `{:#x}`: 控制输出十六进制格式，`#` 表示保留进制前缀。例如：`'{:#x}'.format(18)` 输出 `'0x12'`。
- `{:0>5}`: 控制填充格式，在数字前填充指定字符，总长度为5。例如：`'{:0>5}'.format('33')` 输出 `'00033'`。

总的来说，`format()` 方法可以将数值按照指定的格式进行格式化输出，其中格式化的方式由参数决定，常见的参数包括 `b`（二进制）、`x`（十六进制）、`o`（八进制）等。

#### 关于format函数

`format()` 方法可以完全代替 `%` 格式化。实际上，Python 官方已经推荐使用 `format()` 方法进行字符串格式化，因为它提供了更多的功能和选项，并且更加灵活。`format()` 方法可以在格式化字符串中指定参数的顺序、精度、对齐方式等，而 `%` 格式化相对来说功能较为简单。

另外，从 Python 3.6 版本开始，引入了 f-string，它提供了一种更加简洁、直观的字符串格式化语法，更推荐在新的 Python 项目中使用。但是，即使使用 f-string，`format()` 方法仍然是一个非常有用的备选方法，特别是对于需要动态生成格式的情况。

当使用 `format()` 方法时，可以按照需要定义格式，并在字符串中插入对应的值。下面是一些示例：

1. **基本用法**：
```python
name = "Alice"
age = 30
print("My name is {}, and I am {} years old.".format(name, age))
# 输出: My name is Alice, and I am 30 years old.
```

2. **指定参数顺序**：
```python
print("{1} is {0} years old.".format(age, name))
# 输出: Alice is 30 years old.
```

3. **指定精度**：
```python
pi = 3.14159265359
print("The value of pi is {:.2f}".format(pi))
# 输出: The value of pi is 3.14
```

4. **对齐方式**：
```python
word = "hello"
print("'{:>10}'".format(word))  # 右对齐
print("'{:<10}'".format(word))  # 左对齐
print("'{:^10}'".format(word))  # 居中对齐
# 输出: '     hello'
# 输出: 'hello     '
# 输出: '  hello   '
```

5. **使用命名参数**：
```python
print("My name is {name}, and I am {age} years old.".format(name="Bob", age=25))
# 输出: My name is Bob, and I am 25 years old.
```

6. **格式化数字**：
```python
num = 12345
print("The number is {:,}".format(num))  # 千位分隔符
print("The number is {:b}".format(num))  # 二进制
# 输出: The number is 12,345
# 输出: The number is 11000000111001
```

这些示例展示了 `format()` 方法的灵活性，可以根据需要进行格式化，并支持多种不同的格式选项。
