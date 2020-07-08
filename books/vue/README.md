# Vue

## hookEvent
```js
export default {
    created() {
        window.addEventListener('visibilityChange', this.handler);
        this.$on('hook:beforeDestory', () => {
            window.removeEventListener('visibilityChange', this.handler)
        })
    },
    methods: {
        handler() {
            console.log('visibilityChange')
        }
    }
}
```

## 自定义生命周期钩子函数

## 