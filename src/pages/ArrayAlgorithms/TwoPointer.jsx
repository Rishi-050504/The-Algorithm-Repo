import AlgorithmPage from '/src/components/AlgorithmPage';

export default function TwoPointer() {
  return (
    <AlgorithmPage
      title="Two Pointer Technique"
      description="The Two Pointer Technique is a common algorithmic strategy used to solve problems involving arrays or sequences, especially when searching for pairs, subarrays, or specific conditions efficiently. It involves using two pointers (or indices) that move through the array in a coordinated way—typically one starting from the beginning and the other from the end, or both moving forward with one lagging behind. This method helps reduce time complexity by avoiding nested loops. It is especially useful for problems like finding pairs with a given sum, longest subarray with certain properties, or merging sorted arrays in O(n) time."
      javaCode={`boolean hasPairWithSum(int[] nums, int target) {
    int left = 0, right = nums.length - 1;
    while (left < right) {
        int sum = nums[left] + nums[right];
        if (sum == target) return true;
        else if (sum < target) left++;
        else right--;
    }
    return false;
}`}
      cppCode={`bool hasPairWithSum(vector<int>& nums, int target) {
    int left = 0, right = nums.size() - 1;
    while (left < right) {
        int sum = nums[left] + nums[right];
        if (sum == target) return true;
        else if (sum < target) left++;
        else right--;
    }
    return false;
}`}
      sampleInput={`nums = [1, 2, 3, 4, 6], target = 7`}
      sampleOutput={`true  // (1 + 6 = 7)`}
      timeComplexity={`O(n)`}
      spaceComplexity={`O(1)`}
    />
  );
}
