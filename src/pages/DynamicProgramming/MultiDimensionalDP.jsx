import AlgorithmPage from '/src/components/AlgorithmPage';

export default function MultiDimensionalDP() {
  return (
    <AlgorithmPage
      title="Multi Dimensional DP"
      description={`Multi-dimensional DP is used when the state depends on more than one parameter, typically forming a 2D or 3D DP table. 
Common examples include problems involving two strings (like LCS or Edit Distance), or bounded knapsack with multiple constraints.
The key idea is to memoize or tabulate over all state variables.`}
      javaCode={`// Java: Longest Common Subsequence (2D DP)
int lcs(String s1, String s2) {
    int n = s1.length(), m = s2.length();
    int[][] dp = new int[n + 1][m + 1];

    for (int i = 1; i <= n; i++) {
        for (int j = 1; j <= m; j++) {
            if (s1.charAt(i - 1) == s2.charAt(j - 1))
                dp[i][j] = 1 + dp[i - 1][j - 1];
            else
                dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
        }
    }

    return dp[n][m];
}`}

      cppCode={`// C++: Longest Common Subsequence (2D DP)
int lcs(string s1, string s2) {
    int n = s1.size(), m = s2.size();
    vector<vector<int>> dp(n + 1, vector<int>(m + 1, 0));

    for (int i = 1; i <= n; ++i) {
        for (int j = 1; j <= m; ++j) {
            if (s1[i - 1] == s2[j - 1])
                dp[i][j] = 1 + dp[i - 1][j - 1];
            else
                dp[i][j] = max(dp[i - 1][j], dp[i][j - 1]);
        }
    }

    return dp[n][m];
}`}

      sampleInput={`s1 = "abcde", s2 = "ace"`}
      sampleOutput={`LCS length = 3  // "ace" is the common subsequence`}
      timeComplexity={`O(n * m)`}
      spaceComplexity={`O(n * m) (can be optimized to O(min(n, m)) using two rows)`}
    />
  );
}
