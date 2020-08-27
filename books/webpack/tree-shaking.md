# Tree-Shaking

Tree-Shaking 的本质是消除无用的JS代码，它是 DCE的一种新实现。

**DCE**
Dead Code 具有以下特征

1. 代码不会被执行，不可到达
2. 代码执行的结果不会被用到。
3. 代码只会影响死变量（只写不读）

