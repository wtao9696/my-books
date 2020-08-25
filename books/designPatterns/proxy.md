# 代理模式

代理模式，指的是由于条件限制，一个对象不能直接访问另一个对象，需要一个第三者从而间接达到访问的目的。

## ES6 proxy

```js
const proxy = new Proxy(obj, handler);
```

Vue3 的响应式就是通过 `proxy` 实现的

```js
let user = {
    name: '张三'
}

const proxy = new Proxy(user, {
    get(user, key) {
        console.log(`你正在获取user中的${key}属性`)；

        return user[key] ? user[key] : '你要的数据我这没有。。。'
    }

    set(user, key, val) {
        return user[key] === val ? '数据都没改，不给你操作！！！' : user[key] = val;
    }
})
```