# 迭代器&生成器

## Iterator的作用
- 为各种数据，提供一个统一的、简便的访问入口。
- 使得数据结构的成员，能够按照某种次序排序。
- Iterator接口主要供for...of 消费

## 原生具备Iterator接口的数据
- Array
- Set 容器
- Map 容器
- String
- arguments
- NodeList对象

## 迭代器的工作原理
- 创建指针对象，指向数据结构的起始点。
- 第一次调用 `next` 方法，指针自动指向数据结构的第一个成员。
- 不断调用 `next` 方法指针不断向后移动，直到指向最后一个成员。
- 每次调用 `next` 方法，都会返回一个包含value 和 done的对象。 `{value: 当前值, done: 布尔值}`
    - value表示当前成员的值，done对应的布尔值表示当前的数据的结构是否遍历结束。
    - 当遍历结束的时候返回的value值是undefined，done值为true


**实现迭代器**
```js
function myInterator (arr) {
    let len = arr.length;
    let nextIndex = 0;
    return next: () => {
        return nextIndex < len ? {value: arr[nextIndex++], done: false} : {value: undefined, done: true}
    }
}
```

**敲黑板**

1. `for of` 不支持遍历普通对象。
2. 



# 生成器
 