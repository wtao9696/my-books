<!-- 
<details>
<summary>解题思路</summary>


</details>
-->

# dp 动态规划
动态规划问题，一般就是求最值问题。

找规律（状态转移方程）求解动态规划的核心是穷举。

首先，
    动态规划的穷举， **存在「重叠子问题」**， 暴力穷举效率极低，需要「备忘录」或「dp table」避免不必要的计算。

而且，
    动态规划问题一定**具备「最优子结构」**，可以通过子问题的最值，求得原问题的最值。

**dp思维框架**

**明确base case -> 明确「状态」-> 明确「选择」 -> 定义dp数组/函数的含义**

```
// 初始化base case
dp[0][0][...] = base;
// 进行状态转移
for 状态1 in 状态1的所有值
  for 状态2 in 状态2的所有值
    for ...
        dp[状态1][状态2][....] = 求最值（选择1， 选择2，....）
```

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

## 2. [最大正方形](https://leetcode-cn.com/problems/maximal-square/)
> 在一个由 0 和 1 组成的二维矩阵内，找到只包含 1 的最大正方形，并返回其面积

<details>
<summary>解题思路</summary>
1. 找出最大正方形 => 找出最大边长
2. dp[i][j] 已（i, j）为又顶点，所能形成的最大边长。
3. maxLengt保存最大的边长

</details>

```js
var maximalSquare = function(matrix) {
    if (!matrix || !matrix[0]) return 0
    let l1 = matrix.length;
    let l2 = matrix[0].length;
    let dp = Array.from(new Array(l1), () => new Array(l2).fill(0));
    let maxStep = 0;
    for (let i = 0; i< l1; i++) {
        for (let j = 0; j < l2; j++) {
            if (matrix[i][j] === '0') continue;
            if (i === 0 || j == 0) {dp[i][j] = 1;}
            else { dp[i][j] = Math.min(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1]) + 1 }
            maxStep = Math.max(maxStep, dp[i][j]);
        }
    }
    // console.log(dp)
    return maxStep *  maxStep;
};
```

## 3. [零钱兑换](https://leetcode-cn.com/problems/coin-change/)
> 给定不同面额的硬币 coins 和一个总金额 amount。编写一个函数来计算可以凑成总金额所需的最少的硬币个数。如果没有任何一种硬币组合能组成总金额，返回 -1

dp思维模式推导

1. **明确base case** 目标金额为 0 时，返回 0；
2. **明确状态**

<details>
<summary>解题思路</summary>
 1. core  dp[i] = Math.min(dp[i], dp[i - coin] + 1);

</details>

```js
// 
const coinMin = (coins, amount) => {
    let dp = new Arrary(amount + 1).fill(Infinity);
    dp[0] = 0;
    for (let i = 1, len = dp.length; i < len; i++) {
        for (coin of coins) {
            i - coin >= 0 && (dp[i] = Math.min(dp[i], dp[i-coin]+1));
        }
    }
    return dp[amount] === Infinity ? - 1 : dp[amount];
}

// 以coin作为基准
const coinMin = (coins, amount) => {
    let dp = new Arrary(amount + 1).fill(Infinity);
    dp[0] = 0;
    for (coin of coins) {
        for (let i = coin; i < amount; i++) {
            dp[i] = Math.min(dp[i], dp[i-coin] + 1);
        }
    }
    return dp[amount] === Infinity ? -1  : dp[amount];
}
```

## 4. [不同路径](https://leetcode-cn.com/problems/unique-paths/)
> 一个机器人位于一个 m x n 网格的左上角 （起始点在下图中标记为“Start” ）。机器人每次只能向下或者向右移动一步。机器人试图达到网格的右下角（在下图中标记为“Finish”）。问总共有多少条不同的路径

<details>
<summary>解题思路</summary>


</details>

```js
const uniquePaths = function(m, n) {
    // 动态规划
    // 时间复杂度 O(n^2)
    // 空间复杂度 O(n^2)
    let dp = Array.from(new Arrary(m), () => new Arrary(n).fill(0))
    // 第一列的走法只有一种
    for (let i = 0; i < m; i++){
        dp[i][0] = 1;
    }
    // 第一行的走法只有一种
    for (let j = 0; j < n; j++){
        dp[0][j] = 1;
    }
    for (let i = 1; i < m; i++){
        for (let j = 1; j < n; j++){
            // 当前位置是从左边或上边走过来的
            dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
        }
    }
    return dp[m - 1][n - 1];
};
```


## 5. [最长回文子串](https://leetcode-cn.com/problems/longest-palindromic-substring/)
- 确定dp[i][j]是否是回文数，只需要dp[i+1][j-1]是回文数并且s[i] == s[j]即可。
- 但是长度为0或1的回文传需要特殊处理，即j-i < 2;
- 因为知道dp[i]需要先知道dp[i+1],所以i需要从大到小开始遍历
- 因为知道dp[j]需要先知道dp[j-1],所以j需要从小到大开始遍历

得到动态转移方程

`dp[i][j] = str[i] === str[j] && (j - i < 2 || dp[i+1][j-1])`

```js
const longestPalindrome = (str) => {
    let res = '';
    let len = str.length;
    let dp = array.from(new Array(length), () => new Array().fill(0));
    for (let i = n - 1; i >= 0; i++) {
        dp[i][i] = str[i] === str[j] && (j - i < 2 || dp[i+1][j-1]);
        if (dp[i][j] && j - i + 1 > res.length) {
            res = str.substr(i, j-i+1);
        }
    }
    return res;
}
```

## 

