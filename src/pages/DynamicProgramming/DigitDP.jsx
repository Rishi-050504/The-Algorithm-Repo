import AlgorithmPage from '/src/components/AlgorithmPage';

export default function DigitDP() {
  return (
    <AlgorithmPage
      title="Digit DP"
      description={`Digit DP is used to solve problems where the solution depends on the digits of a number and constraints are applied to each digit. 
It’s useful when you want to count or find numbers between 0 and N that satisfy some property (e.g., digit sum, no adjacent digits the same, etc.).
The key idea is to use recursion + memoization over: position, tight constraint (prefix), and any extra state (like digit sum).`}
      javaCode={`// Count numbers <= N with digit sum == target
int[][][] dp;

int count(int pos, int sum, boolean tight, String num, int target) {
    if (pos == num.length()) return sum == target ? 1 : 0;
    if (!tight && dp[pos][sum][target] != -1) return dp[pos][sum][target];

    int limit = tight ? num.charAt(pos) - '0' : 9;
    int ans = 0;
    for (int digit = 0; digit <= limit; digit++) {
        boolean newTight = tight && (digit == limit);
        ans += count(pos + 1, sum + digit, newTight, num, target);
    }

    if (!tight) dp[pos][sum][target] = ans;
    return ans;
}

int solve(String n, int target) {
    dp = new int[n.length()][200][200];
    for (int[][] layer : dp)
        for (int[] row : layer)
            Arrays.fill(row, -1);
    return count(0, 0, true, n, target);
}`}

      cppCode={`// Count numbers <= N with digit sum == target
int dp[20][200][2];

int count(int pos, int sum, bool tight, const string &num, int target) {
    if (pos == num.size()) return sum == target;
    if (!tight && dp[pos][sum][0] != -1) return dp[pos][sum][0];

    int limit = tight ? num[pos] - '0' : 9;
    int ans = 0;
    for (int digit = 0; digit <= limit; ++digit) {
        bool newTight = tight && (digit == limit);
        ans += count(pos + 1, sum + digit, newTight, num, target);
    }

    if (!tight) dp[pos][sum][0] = ans;
    return ans;
}

int solve(string n, int target) {
    memset(dp, -1, sizeof(dp));
    return count(0, 0, true, n, target);
}`}

      sampleInput={`n = "100", target = 5`}
      sampleOutput={`Count = 2  // (Numbers: 5, 14)`}
      timeComplexity={`O(D * S * 2), where D = number of digits, S = target sum`}
      spaceComplexity={`O(D * S * 2)`}
    />
  );
}
