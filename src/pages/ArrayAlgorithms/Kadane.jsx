import AlgorithmPage from '/src/components/AlgorithmPage';

export default function Kadane() {
  return (
    <AlgorithmPage
      title="Kadane's Algorithm"
      description="Kadane's Algorithm is an efficient method to find the maximum sum of a contiguous subarray in a given array of integers. It works by iterating through the array while maintaining two variables: currentSum, which stores the sum of the current subarray, and maxSum, which keeps track of the highest sum found so far. At each step, the algorithm adds the current element to currentSum and resets it to zero if it becomes negative, since a negative sum can't contribute to a larger result. maxSum is updated whenever currentSum exceeds it. This approach runs in linear time O(n) and is optimal for solving the maximum subarray problem.
"
      javaCode={`public int maxSubArray(int[] nums) {
    int maxSum = nums[0];
    int currentSum = nums[0];
    for (int i = 1; i < nums.length; i++) {
        currentSum = Math.max(nums[i], currentSum + nums[i]);
        maxSum = Math.max(maxSum, currentSum);
    }
    return maxSum;
}`}
      cppCode={`int maxSubArray(vector<int>& nums) {
    int maxSum = nums[0];
    int currentSum = nums[0];
    for (int i = 1; i < nums.size(); i++) {
        currentSum = max(nums[i], currentSum + nums[i]);
        maxSum = max(maxSum, currentSum);
    }
    return maxSum;
}`}
      sampleInput={`nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4]`}
      sampleOutput={`6`}
      timeComplexity="O(n)"
      spaceComplexity="O(1)"
    />
  );
}
