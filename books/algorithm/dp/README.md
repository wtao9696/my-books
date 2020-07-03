# dp 动态规划
> 找规律，类似于高中数列
1. 爬楼梯
> 假设你正在爬楼梯。需要 n 阶你才能到达楼顶。每次你可以爬 1 或 2 个台阶。你有多少种不同的方法可以爬到楼顶呢

<details>
<summary>解题思路</summary>

1. 第n阶梯，可以是从第 n-1 || n-2 阶梯跨上去的。
2. dp[n] = dp[n - 1] + dp[n-2]
</details>

```js
const climbs = (n) => {
    let dp = [];
    dp[0] = 0;
    dp[1] = 1;
    dp[2] = 2;
    for (let i = 3; i <= n; i++) {
        dp[i] = dp[i - 1] + dp[i - 2];
    }
    return dp[n]
}
```