# 观察者模式

观察者模式： `发布-订阅模式` 

**定义发布者**

功能：
1. 收集订阅者
2. 增加订阅者
3. 移除订阅者
4. 通知订阅者

```js
class Publisher {
    constructor () {
        this.observers = [];
        console.log('publish created')
    }

    // 新增订阅者
    add(observer) {
        this.observers.push(observer)
    }

    // 移除订阅者
    remove(observer) {
        this.observers.filter(item => item !== observer)
    }

    // 通知订阅者
    notify() {
        this.observers.forEach(observer => observer.doSomething(this))
    }
}

```


**定义订阅者**

功能
1. 接收通知，然后做一些事情

```js
class Observer {
    constructor() {
        console.log('observer created');
    }

    // 收到通知后做的事情
    doSomething() {
        console.log('receive notification')
    }
}
```



## 观察者模式在实际中的应用

1. Vue 中的 `watch` 方法（它不仅是一个订阅者，还是一个发布者）
2. `Event Bus` 也是一个很好的发布-订阅模式


## 发布-订阅模式 与 观察者的区别

区别在与是否存在第三方，发布者能否直接感触订阅者
