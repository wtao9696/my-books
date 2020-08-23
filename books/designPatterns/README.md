# 设计模式
### SOLID 设计原则
- 单一功能原则（Single Responsibility Principle）
- 开放封闭原则（Opened Closed Principle）
- 里氏替换原则（Liskov Substitution Principle）
- 接口隔离原则（Interface Segregation Principle）
- 依赖反转原则（Dependency Inversion Principle）
## 工厂模式
### 简单工厂
**思路**
    将创建对象的过程单独封装。

```js
    const workerMapping = {
        'coder': ["写代码", "写系统", "修bug"],
        'product manager': ['写prd'],
        'boss': ['喝茶']
    }
    function User(name, age, career, work) {
        this.name = name;
        this.age = age;
        this.career = career;
        this.work = work;
    }

    function Factory(name, age, career) {
        return new User(name, age, career, workerMapping[work]);
    }
```

### 抽象工厂模式
**抽象工厂的四个关键角色**
- **抽象工厂（抽象类，它不能用于生成具体实例）**用于声明最终目标产品的共性。
- **具体工厂（用于生成产品族里的一个具体的产品）**继承自抽象工厂，实现了抽象工厂里声明的那些方法，用于创建具体的产品的类
- **抽象产品（抽象类，它不能用于生成具体实例）**
- **具体产品（用于生产产品族里的一个具体的产品所依赖的更细粒度的产品）**

#### 生产手机的具体操作
1. 抽象手机共性：操作系统和硬件 （抽象工厂）
```js
    class MobilePhoneFactory {
        // 提供操作系统的接口
        createOS() {
            throw new Error('抽象工厂方法不允许直接调用，你需要重写');
        }
        // 提供硬件的接口
        createHardWare() {
            throw new Error('抽象工厂方法不允许直接调用，你需要重写');
        }
    }
```

2. 定制一个具体工厂生产xxx品牌手机 (具体工厂)
```js
// 具体工厂继承自抽象工厂
class FakeStarFactory extends MobilePhoneFactory {
    createOS() {
        // 提供安卓操作系统实例
        return new AndroidOS()
    }

    createHardWare() {
        // 提供高通硬件实例
        return new QualcommHardWare()
    }
}
```
3. 抽象产品

抽象产品---操作系统
```js
    // 定义操作系统这类产品的抽象产品类
    class OS {
        controlHardWare() {
            throw new Error("抽象产品方法不允许直接调用，你需要将我重写")
        }
    }

    // 定义具体操作系统的具体产品类
    class AndroidOs extends OS {
        controlHardWare() {
            console.log('这里是安卓操作系统');
        }
    }

    class AppleOs extends OS {
        controlHardWare() {
            console.log('这里是苹果操作系统');
        }
    }

```
抽象产品---硬件系统
```js
    class HardWare {
        operateByOrder() {
            console.log('抽象产品方法不能直接调用')
        }
    }

    // 定义具体硬件的具体产品类
    class QualcommHardWare extends HardWare {
        operateByOrder (){
            console.log('以高通处理器的方式运转');
        }
    }

    class MiWare extends HardWare {
        operateByOrder() {
            console.log('以小米的方式运转');
        }
    }
```
4. 具体产品
```js
const myPhone = new FakeStarFactory();
// 配置操作系统
const myOs = myPhone.createOS();
// 安装硬件
const myHardWare = myPhone.createHardWare();
// 启动操作系统
myOs.controlHardWare()
// 唤醒硬件
myHardWare.operateByOrder()
```

## 单例模式
**思想**
不管创建多少次，永远只会返回第一次创建那个唯一的一个实例

1. 实现单例的方式---静态方法版
```js
class SingleDog {
    static getInstance () {
        if (!SingleDog.instance) {
            SingleDog.instance = new SingleDog();
        }
        return SingleDog.instance
    }
}

const s1 = SingleDog.getInstance();
const s2 = SingleDog.getInstance();
s1 === s2 // true
```
2. 实现单例的方式---闭包的方式
```js
SingleDog.getInstance = (() => {
    let instance = null;
    return () => {
        if(!instance) {
            instance = new SingleDog()
        }
        return instance;
    }
})()
```
## 原型模式

## 装饰器模式

## 适配器模式

## 代理模式

## 策略模式

## 状态模式

## 观察者模式

[观察者模式](./observer.md)

## 迭代器模式