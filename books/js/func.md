# 你不知道的JS

## 柯理化

**实现思路**

把接收多个参数的函数，变成接收多个或者单一参数的函数，并且返回接收余下参数而且返回结果的函数。。

类似于如下这种
```js
    function add (a, b) {
        return a+b;
    }

    curriedAdd(1)(2) // 3
```

柯理化的实现

```js
    function curry (fn, ...args) {
        if (args.length > fn.length) return fn.call(this, ...args);

        return (...args2) => curry.call(this, fn, ...args, ...args2)
    }
```

## 纯函数

**思想**
- 纯函数具有幂等特性。对于相等的参数，任何时间执行，都会得到相同的结果。它不会引起副作用。
- 纯函数与外部的关联应该都源于函数参数。如果一个函数直接依赖外部变量，那么它就不是纯函数，因为外部变量是可变的，那么纯函数的执行结果将是不可控的。

```js
    // 纯函数
    function pure (a, b) {
        return a+b;
    }

    // 非纯函数
    let d = 10;
    function impure(c) {
        return c + d;
    }
```

## 惰性函数

**思想**
惰性函数表示函数，执行的分支只会在函数第一次调用的时候执行，后续我们所使用的就是这个函数的执行结果。

```js
    function addEvent(ele, type, handler) {
        if (window.addEventListener) {
            ele.addEventListener(type, handler, false)
        } else if (window.attachEvent) {
            ele.attachEvent(`on$${type}`, handler)
        } else {
            ele[`on${type}`] = handler;
        }
    }

    // 利用惰性函数进行改造
    function addEvent(element, type, handler) {
    if (window.addEventListener) {
        addEvent = function(element, type, handler) {
        element.addEventListener(type, handler, false);
        }
    } else if (window.attachEvent){
        addEvent = function(element, type, handler) {
        element.attachEvent('on' + type, handler);
        }
    } else {
        addEvent = function(element, type, handler) {
        element['on' + type] = handler;
        }
    }
    addEvent(element, type, handler);
    }
```



