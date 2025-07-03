import AlgorithmPage from '/src/components/AlgorithmPage';

export default function IntervalDP() {
  return (
    <AlgorithmPage
      title="Interval DP"
      description={`Interval DP is applied when you need to make decisions over segments or intervals of an array or string.
It's commonly used in problems like Matrix Chain Multiplication, Optimal BST, and Palindrome Partitioning.
The key idea is to solve for a range [i, j] by considering all possible partitions k in (i, j) and combining their results.`}
      javaCode={`// Java: Matrix Chain Multiplication
int[][] dp;
int[] dims;

int solve(int i, int j) {
    if (i + 1 == j) return 0;
    if (dp[i][j] != -1) return dp[i][j];
    
    int ans = Integer.MAX_VALUE;
    for (int k = i + 1; k < j; k++) {
        int cost = solve(i, k) + solve(k, j) + dims[i] * dims[k] * dims[j];
        ans = Math.min(ans, cost);
    }
    return dp[i][j] = ans;
}

int matrixChainOrder(int[] dimensions) {
    dims = dimensions;
    int n = dims.length;
    dp = new int[n][n];
    for (int[] row : dp)
        Arrays.fill(row, -1);
    return solve(0, n - 1);
}`}

      cppCode={`// C++: Matrix Chain Multiplication
vector<vector<int>> dp;
vector<int> dims;

int solve(int i, int j) {
    if (i + 1 == j) return 0;
    if (dp[i][j] != -1) return dp[i][j];

    int ans = INT_MAX;
    for (int k = i + 1; k < j; ++k) {
        int cost = solve(i, k) + solve(k, j) + dims[i] * dims[k] * dims[j];
        ans = min(ans, cost);
    }
    return dp[i][j] = ans;
}

int matrixChainOrder(vector<int>& dimensions) {
    dims = dimensions;
    int n = dims.size();
    dp.assign(n, vector<int>(n, -1));
    return solve(0, n - 1);
}`}

      sampleInput={`dimensions = [40, 20, 30, 10, 30]`}
      sampleOutput={`Minimum multiplication cost = 30000`}
      timeComplexity={`O(n^3), where n = number of matrices`}
      spaceComplexity={`O(n^2) for memoization table`}
    />
  );
}
