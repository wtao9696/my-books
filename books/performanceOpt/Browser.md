# 浏览器的渲染进程

## 浏览器的主进程 Browser 进程

1. 负责下载资源
2. 创建销毁 render 进程
3. 负责将 render 进程生成的位图渲染到页面上
4. 与用户交互

## 浏览器内核 render 进程

**js引擎线程**

由一个主进程和多个 web worker 线程组成。 web worker线程不能操作 dom 


**GUI线程**

用户解析DOM，生成 DOM树， 解析 CSS 生成 CSS 树，布局 layout 、 绘制 paint。 重排和重绘依赖此线程


**事件线程**

当事件触发时，该线程将事件的回调函数放入 callback queue(任务队列)，等待js引擎线程处理


**定时器触发线程**

处理 `setTimout` & `setInterval` ，当定时器结束之后，将事件 放入 callback queue 排队处理。所以**定时器内的函数并不能按时的执行**


**http 请求线程**

每一个请求，都会开一个该线程，每当检测到状态变更，就会产生一个状态变更事件，并将对应事件的回调函数放入 callback queue


**任务队列轮询线程**

用于轮询监听事件队列


**页面的渲染流程如下：**

1. 获取HTML文件
2. 从上到下 解析HTML
3. 并行请求资源(css资源不会阻塞html解析，但是会阻塞页面渲染。js资源会组织html解析）
4. 生成DOM tree 和 CSS tree
5. 构建render tree
6. 执行布局过程(layout、也叫回流)，确定元素在屏幕上的具体坐标
7. 绘制到屏幕上(paint) 