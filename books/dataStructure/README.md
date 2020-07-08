# 数据结构

## 常见的八大数据结构
    1. 数组 Array
    2. 堆栈 Stack
    3. 队列 Queue
    4. 链表 Linked Lists
    5. 树 Trees
    6. 图 Graphs
    7. 字典树 Trie
    8. 散列树（哈希表）Hash Tables
## 具体分析
### 1. 数组
    特点
        最常见的一种数据结构

#### 操作数据的方法
#### 数组中增加元素的方法
- unshift 添加元素到数组的头部
```js
const arr = [1, 2]
arr.unshift(0) // [0, 1, 2]
```
- push 添加元素到数组的尾部
```js
const arr = [1, 2]
arr.push(3) // [1, 2, 3]
```

- splice 添加元素到数组的任何位置
```js
const arr = [1, 2]
arr.splice(1, 0, 3) // [1, 3, 2]
```

    第一个参数是起始的索引值；
    第二个参数表示从起始索引开始要删除的元素个数；
    arr.splice(1, 1),表示从索引1的元素开始，删除掉一个元素，也就是把arr[1]删除掉。
    第三个及以后的参数，用于在删除同时完成，数组的新增，把第三个参数及以后的参数添加到数组里
```js
// eg
const arr = [1, 2]
arr.splice(1, 0, 3, 4) // [1, 3, 4, 2]
```
<!-- ![](/books/assets/splice.png) -->
<img src="../assets/splice.png" style="width: 300px;"/>

---
### 2. 堆栈
    特点:
        先进后出
```js
    class Stack {
        constructor() {}
    }
```
---
### 3. 队列
    特点:
        先进先出
```js
    class Queue {
        constructor() {}
    }
```
---
### 4. 链表
    特点：
        链表是按顺序存储数据元素
        链表不是保留索引，而是指向其他元素
#### 4.1 单链表和双链表

 单链表和双链表

#### 4.2 双向链表

### 5. 树

### 6. 图

### 7. 字典树

### 8. 散列树


