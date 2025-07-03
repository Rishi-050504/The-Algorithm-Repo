import AlgorithmPage from '/src/components/AlgorithmPage';

export default function BitDP() {
  return (
    <AlgorithmPage
      title="Bit DP"
      description={`Bit DP is a dynamic programming technique used when the state can be represented using a bitmask. 
It is commonly used for problems involving subsets, permutations, or combinations of a small number of items (typically up to 20).
Each bit in the bitmask represents whether an item is included or a certain condition is met.`}
      javaCode={`// Java skeleton for Bit DP
int n = ...; // Number of elements
int[][] dp = new int[1 << n][n];
for (int[] row : dp)
    Arrays.fill(row, -1);

int solve(int mask, int pos) {
    if (mask == (1 << n) - 1) return 0; // all items used
    if (dp[mask][pos] != -1) return dp[mask][pos];
    
    int ans = Integer.MAX_VALUE;
    for (int i = 0; i < n; i++) {
        if ((mask & (1 << i)) == 0) {
            ans = Math.min(ans, cost[pos][i] + solve(mask | (1 << i), i));
        }
    }
    return dp[mask][pos] = ans;
}`}

      cppCode={`// C++ skeleton for Bit DP
int n; // number of elements
vector<vector<int>> dp(1 << n, vector<int>(n, -1));

int solve(int mask, int pos, const vector<vector<int>>& cost) {
    if (mask == (1 << n) - 1) return 0; // all elements used
    if (dp[mask][pos] != -1) return dp[mask][pos];

    int ans = INT_MAX;
    for (int i = 0; i < n; i++) {
        if (!(mask & (1 << i))) {
            ans = min(ans, cost[pos][i] + solve(mask | (1 << i), i, cost));
        }
    }
    return dp[mask][pos] = ans;
}`}

      sampleInput={`n = 3
cost = [
  [0, 10, 15],
  [10, 0, 20],
  [15, 20, 0]
]`}
      sampleOutput={`Minimum cost to visit all nodes: 35`}
      timeComplexity={`O(n^2 * 2^n)`}
      spaceComplexity={`O(n * 2^n)`}
    />
  );
}
