import AlgorithmPage from '/src/components/AlgorithmPage';

export default function ClassicalDP() {
  return (
    <AlgorithmPage
      title="Classical DP"
      description={`Classical Dynamic Programming problems often serve as an introduction to DP techniques. 
The Fibonacci sequence is a standard example to demonstrate both top-down (with memoization) and bottom-up (tabulation) approaches.`}
      javaCode={`// Top-Down (Memoization)
int[] memo;
int fibMemo(int n) {
    memo = new int[n + 1];
    Arrays.fill(memo, -1);
    return helper(n);
}
int helper(int n) {
    if (n <= 1) return n;
    if (memo[n] != -1) return memo[n];
    return memo[n] = helper(n - 1) + helper(n - 2);
}

// Bottom-Up (Tabulation)
int fibTab(int n) {
    if (n <= 1) return n;
    int[] dp = new int[n + 1];
    dp[0] = 0; dp[1] = 1;
    for (int i = 2; i <= n; i++) {
        dp[i] = dp[i - 1] + dp[i - 2];
    }
    return dp[n];
}`}

      cppCode={`// Top-Down (Memoization)
int memo[1000];
int fibMemo(int n) {
    if (n <= 1) return n;
    if (memo[n] != -1) return memo[n];
    return memo[n] = fibMemo(n - 1) + fibMemo(n - 2);
}

// Bottom-Up (Tabulation)
int fibTab(int n) {
    if (n <= 1) return n;
    vector<int> dp(n + 1);
    dp[0] = 0; dp[1] = 1;
    for (int i = 2; i <= n; ++i)
        dp[i] = dp[i - 1] + dp[i - 2];
    return dp[n];
}`}

      sampleInput={`n = 7`}
      sampleOutput={`Fibonacci(7) = 13`}
      timeComplexity={`Top-Down: O(n), Bottom-Up: O(n)`}
      spaceComplexity={`Top-Down: O(n) for recursion stack + memo array, Bottom-Up: O(n)`}
    />
  );
}
