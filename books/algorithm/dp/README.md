<!-- 
<details>
<summary>解题思路</summary>


</details>
-->

# dp 动态规划
> 找规律，类似于高中数列
## 1. 爬楼梯
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

## 2. 最大正方形
> 在一个由 0 和 1 组成的二维矩阵内，找到只包含 1 的最大正方形，并返回其面积

<details>
<summary>解题思路</summary>


</details>

```js

```

## 3. 零钱兑换
> 给定不同面额的硬币 coins 和一个总金额 amount。编写一个函数来计算可以凑成总金额所需的最少的硬币个数。如果没有任何一种硬币组合能组成总金额，返回 -1

<details>
<summary>解题思路</summary>


</details>

```js

```

## 4. 不同路径
> 一个机器人位于一个 m x n 网格的左上角 （起始点在下图中标记为“Start” ）。机器人每次只能向下或者向右移动一步。机器人试图达到网格的右下角（在下图中标记为“Finish”）。问总共有多少条不同的路径

<details>
<summary>解题思路</summary>


</details>

```js

```




