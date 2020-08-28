# 链表

## 单向链表


## 双向链表

```js
class Node {
    constructor(data) {
        this.data = data;
        this.prev = null;
        this.next = null;
    }
}
// 双向链表&操作方法
class doubleLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }
    /**
     * @methods append 在链表的尾部添加节点
     * @param item 要插入的节点 
     * */ 
    append(item) {
        let node = new Node(item);
        if (!this.head) {
            this.head = node;
            this.tail = node;
        } else {
            nodel.prev = this.tail;
            this.tail.next = node;
            this.tail = node;
        }
    }

    /**
     * @methods appendAt 在链表的指定位置添加节点
     * @param pos 节点哟啊插入的位置
     * @param item 要插入的节点
     * */ 
    appendAt(pos, item) {
        let node = new Node(item);
        let cur = this.head;
        let counter= 1;
        if (pos === 0) {
            this.head.prev = node;
            node.next = this.head;
            this.head = node;
        } else {
            while(cur) {
                cur = cur.next;
                if (counter === pos) {
                    node.prev = cureent.prev;
                    curent.prev.next = node;
                    node.next = cur;
                    cur.prev = node;
                }
                counter++
            }
        }
    }

    /**
     * @methods reverse 链表反转
     * */ 
    reverse() {}
}
```