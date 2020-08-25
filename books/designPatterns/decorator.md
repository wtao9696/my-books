# 装饰器模式

装饰器模式又名装饰者模式，定义：在不改变原对象的基础上，通过对其进行包装拓展，使原有对象可以满足用户的更复杂的需求。

```js
// 装饰器的第一个参数是目标类

function classDecorator (target, name, descriptor) {
    let originMethod = descriptor.value;
    descriptor.value = function () {
        console.log('Func的装饰器逻辑')
        return originMethod.apply(this, arguments);
    }

    return descriptor;
}

class Button {
    @classDecorator;
    
    onClick() {
        console.log('Func的原有逻辑')
    }
}

```