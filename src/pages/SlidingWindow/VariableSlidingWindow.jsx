import AlgorithmPage from '/src/components/AlgorithmPage';

const description = `Variable Sliding Window is a technique used when the window size can change dynamically based on certain conditions, often in problems involving constraints like sums, counts, or character frequency. Instead of maintaining a fixed-size window, we expand the window (usually by moving the right pointer) to include more elements and contract it (by moving the left pointer) when the condition is violated. This method is especially useful in problems like finding the longest substring without repeating characters or the smallest subarray with a sum greater than a target. It runs in O(n) time in most cases and efficiently handles dynamic, constraint-based scenarios.`;

const javaCode = `
// Smallest subarray with sum >= target
int minSubArrayLen(int target, int[] nums) {
    int n = nums.length, left = 0, sum = 0, minLen = Integer.MAX_VALUE;
    for (int right = 0; right < n; right++) {
        sum += nums[right];
        while (sum >= target) {
            minLen = Math.min(minLen, right - left + 1);
            sum -= nums[left++];
        }
    }
    return minLen == Integer.MAX_VALUE ? 0 : minLen;
}
`;

const cppCode = `
// Smallest subarray with sum >= target
int minSubArrayLen(int target, vector<int>& nums) {
    int n = nums.size(), left = 0, sum = 0, minLen = INT_MAX;
    for (int right = 0; right < n; ++right) {
        sum += nums[right];
        while (sum >= target) {
            minLen = min(minLen, right - left + 1);
            sum -= nums[left++];
        }
    }
    return minLen == INT_MAX ? 0 : minLen;
}
`;

export default function VariableSlidingWindow() {
  return (
    <AlgorithmPage
      title="Variable Sliding Window"
      description={description}
      javaCode={javaCode}
      cppCode={cppCode}
      sampleInput={`nums = [2,3,1,2,4,3], target = 7`}
      sampleOutput={`2`}
      timeComplexity="O(n)"
      spaceComplexity="O(1)"
    />
  );
}
