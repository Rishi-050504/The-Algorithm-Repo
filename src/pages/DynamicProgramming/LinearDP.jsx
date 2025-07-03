import AlgorithmPage from '/src/components/AlgorithmPage';

export default function LinearDP() {
  return (
    <AlgorithmPage
      title="Linear DP"
      description={`Linear DP is applied to problems where decisions are made in a linear sequence (arrays, lists). 
Each state depends on previous one(s), usually forming a recurrence like dp[i] = f(dp[i - 1], dp[i - 2], ...). 
A classic example is the House Robber problem where adjacent elements cannot be selected together.`}
      javaCode={`// Java: House Robber (Max sum with no two adjacent)
int rob(int[] nums) {
    int n = nums.length;
    if (n == 0) return 0;
    if (n == 1) return nums[0];

    int[] dp = new int[n];
    dp[0] = nums[0];
    dp[1] = Math.max(nums[0], nums[1]);

    for (int i = 2; i < n; i++) {
        dp[i] = Math.max(dp[i - 1], nums[i] + dp[i - 2]);
    }

    return dp[n - 1];
}`}

      cppCode={`// C++: House Robber (Max sum with no two adjacent)
int rob(vector<int>& nums) {
    int n = nums.size();
    if (n == 0) return 0;
    if (n == 1) return nums[0];

    vector<int> dp(n);
    dp[0] = nums[0];
    dp[1] = max(nums[0], nums[1]);

    for (int i = 2; i < n; ++i) {
        dp[i] = max(dp[i - 1], nums[i] + dp[i - 2]);
    }

    return dp[n - 1];
}`}

      sampleInput={`nums = [2, 7, 9, 3, 1]`}
      sampleOutput={`Max sum = 12  // Pick 2 + 9 + 1`}
      timeComplexity={`O(n)`}
      spaceComplexity={`O(n) (can be optimized to O(1) using two variables)`}
    />
  );
}
