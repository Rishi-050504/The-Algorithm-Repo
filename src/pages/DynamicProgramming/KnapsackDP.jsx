import AlgorithmPage from '/src/components/AlgorithmPage';

export default function KnapsackDP() {
  return (
    <AlgorithmPage
      title="Knapsack DP"
      description={`Knapsack DP is used to solve optimization problems where you must choose items under certain constraints (like weight or volume). 
The most common variation is the 0/1 Knapsack, where each item can be picked at most once. 
It uses either memoization (top-down) or tabulation (bottom-up) to avoid recomputation of overlapping subproblems.`}
      javaCode={`// Java: 0/1 Knapsack using Bottom-Up DP
int knapsack(int[] weights, int[] values, int W) {
    int n = weights.length;
    int[][] dp = new int[n + 1][W + 1];

    for (int i = 1; i <= n; i++) {
        for (int w = 0; w <= W; w++) {
            if (weights[i - 1] <= w)
                dp[i][w] = Math.max(dp[i - 1][w],
                                    values[i - 1] + dp[i - 1][w - weights[i - 1]]);
            else
                dp[i][w] = dp[i - 1][w];
        }
    }
    return dp[n][W];
}`}

      cppCode={`// C++: 0/1 Knapsack using Bottom-Up DP
int knapsack(vector<int>& weights, vector<int>& values, int W) {
    int n = weights.size();
    vector<vector<int>> dp(n + 1, vector<int>(W + 1, 0));

    for (int i = 1; i <= n; ++i) {
        for (int w = 0; w <= W; ++w) {
            if (weights[i - 1] <= w)
                dp[i][w] = max(dp[i - 1][w],
                               values[i - 1] + dp[i - 1][w - weights[i - 1]]);
            else
                dp[i][w] = dp[i - 1][w];
        }
    }
    return dp[n][W];
}`}

      sampleInput={`weights = [2, 3, 4, 5]
values = [3, 4, 5, 6]
W = 5`}
      sampleOutput={`Maximum value = 7  // Choose items 0 and 1 (2+3 weight) with value 3+4`}
      timeComplexity={`O(n * W), where n = number of items, W = knapsack capacity`}
      spaceComplexity={`O(n * W) (can be optimized to O(W) with 1D DP)`}
    />
  );
}
