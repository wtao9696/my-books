# 链表

## 常见的链表问题
- 链表的处理：合并、删除等（删除操作画个记号，重点中的重点！）
- 链表的反转及其衍生题目
- 链表成环问题及其衍生题目

### 真题描述

> 将两个有序链表合并为一个新的有序链表。并返回。

```js
const mergeList = (l1, l2) => {
    let head = new ListNode();
    let cur = head;
    while(l1 && l2) {
        if (l1.val <= l2.val) {
            cur.next = l1;
            l1 = l1.next;
        } else {
            cur.next = l2;
            l2 = l2.next;
        }
        cur = cur.next;
    }

    cur.next = l1 ? l1 : l2;

    return head.next;
}
```
**节点的删除**

> 给定一个排序链表，删除所有重复的元素，使得每个元素只出现一次。

```js
const deleteDuplicates = (head) => {
    let cur = head;
    while(cur &&  cur.next) {

        if (cur.val === cur.next.val) {
            cur.next = cur.next.next
        } else {
            cur = cur.next;
        }
    }
    
    return head;
}
```

**节点删除的扩展**

> 给定一个排序链表，删除链表所有的重复的元素，只保留链表中，没有重复的元素

```js


```
