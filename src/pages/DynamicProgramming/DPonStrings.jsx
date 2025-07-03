import AlgorithmPage from '/src/components/AlgorithmPage';

export default function DPonStrings() {
  return (
    <AlgorithmPage
      title="String DP"
      description={`String DP is used when solving problems involving subsequences, substrings, or string matching. 
A classic example is the Longest Common Subsequence (LCS), where we compare two strings character by character 
and store intermediate results using dynamic programming.`}
      javaCode={`// Java: LCS using Bottom-Up DP
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

      cppCode={`// C++: LCS using Bottom-Up DP
int lcs(string s1, string s2) {
    int n = s1.length(), m = s2.length();
    vector<vector<int>> dp(n + 1, vector<int>(m + 1, 0));

    for (int i = 1; i <= n; i++) {
        for (int j = 1; j <= m; j++) {
            if (s1[i - 1] == s2[j - 1])
                dp[i][j] = 1 + dp[i - 1][j - 1];
            else
                dp[i][j] = max(dp[i - 1][j], dp[i][j - 1]);
        }
    }
    return dp[n][m];
}`}

      sampleInput={`s1 = "abcde", s2 = "ace"`}
      sampleOutput={`LCS Length = 3  // The subsequence is "ace"`}
      timeComplexity={`O(n * m) where n = length of s1, m = length of s2`}
      spaceComplexity={`O(n * m) (can be optimized to O(min(n, m)) if needed)`}
    />
  );
}
