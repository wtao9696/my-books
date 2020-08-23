# 性能优化之dns-prefetch、prefetch、preload、defer、async

## dns-prefetch

域名转IP是一个比较耗时的过程，dns-prefetch能让浏览器在空闲的时候来处理这件事。尤其大型网站会使用多域名，这时更需要加dns预取

```html
<link rel="dns-prefetch" href="//dss0.bdstatic.com">
<link rel="dns-prefetch" href="//dss1.bdstatic.com">
<link rel="dns-prefetch" href="//ss1.bdstatic.com">
<link rel="dns-prefetch" href="//sp0.baidu.com">
```

## prefetch

prefetch一般是用来预加载可能用到的资源。一般是对用户行为的一种判断，浏览器会在空闲的时候加载prefetch资源

```html
<link rel="prefetch" href="http://www.example.com/">
```

## preload

和prefetch 不同，prefetch通常加载接下来可能用到的页面资源，而 prelaod 加载当前页面要用到的脚本、样式、字体、图片等资源。

所以preload不是空闲时加载，它的优先级更高，并且会占用HTTP请求数量。

```html
<link rel='preload' href='style.css' as="style" onload="console.log('style loaded')"
```

`onload` 为加载完成后的回调

as值包括

- script
- style
- image
- media
- document


## defer & async

defer 和 async 都是异步加载资源， 但是不同的是 `async` 是加载完成后立即执行，缺点：**不能保证是按顺序执行**；

`defer` 加载完不执行，等到所有元素解析完在执行，也就是在 `DOMContentLoaded` 事件触发之前。

当初始的HTML文档被完全加载和解析完成(script脚本执行完，所属的script脚本之前的样式表加载解析完成)之后，DOMContentLoaded事件被触发

```html
//defer
<script defer src="script.js"></script>
//async
<script async src="script.js"></script>
```

