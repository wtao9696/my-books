# [Javascript的核心概念](https://juejin.im/post/6865184344990810126)
**1. js的运行环境**

js的运行环境是浏览器，js是一种脚本语言。浏览器的内核分为 渲染引擎和js引擎。

渲染引擎；负责网页页面的呈现
js引擎：解析脚本，进行js交互

**1.1 主流浏览器内核**

|主流浏览器|内核|
| ---- | ---- |
| IE   | trident |
| Chrome | webkit -> blink |
| Safari | webkit |
| Firfox | Gecko |
| Opera | Presto-> blink |


**1.2 Js 类型转换**

js的显示类型转换和隐士s类型转换

隐士类型转换
`+ - == ！><= <= >=`

经典体型
```js
1 + '1' 
true + 0
{}+[]
4 + {} 
4 + [1] 
'a' + + 'b'
console.log ( [] == 0 )
console.log ( ! [] == 0 )
console.log ( [] == ! [] )
console.log ( [] == [] )
console.log({} == !{})
console.log({} == {})
```

**1.2 js对象遍历**

- `for in` 自身和继承属性，可枚举，不含symbol
- `Object.keys` 可枚举，不含symbol
- `Object.values` 同上
- `Object.getOwnProperyNames` 自身所有属性
- `Relect.ownkeys` 自身所有属性

