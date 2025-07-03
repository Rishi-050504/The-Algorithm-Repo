import AlgorithmPage from '/src/components/AlgorithmPage';

export default function PrefixSuffixSum() {
  return (
    <AlgorithmPage
      title="Prefix & Suffix Sum"
      description="Prefix and Suffix Sums are techniques used to efficiently compute the sum of elements over subarrays. A prefix sum array stores the cumulative sum from the start of the array to each index, allowing the sum of any subarray from index i to j to be computed in constant time using the formula prefix[j] - prefix[i - 1]. Similarly, a suffix sum array stores the cumulative sum from each index to the end of the array. Both are built in linear time and are widely used in problems involving multiple range sum queries, helping reduce time complexity from O(n) per query to O(1)."
      javaCode={`public int[] computePrefixSum(int[] nums) {
    int n = nums.length;
    int[] prefix = new int[n];
    prefix[0] = nums[0];
    for (int i = 1; i < n; i++) {
        prefix[i] = prefix[i - 1] + nums[i];
    }
    return prefix;
}

public int[] computeSuffixSum(int[] nums) {
    int n = nums.length;
    int[] suffix = new int[n];
    suffix[n - 1] = nums[n - 1];
    for (int i = n - 2; i >= 0; i--) {
        suffix[i] = suffix[i + 1] + nums[i];
    }
    return suffix;
}`}
      cppCode={`vector<int> computePrefixSum(vector<int>& nums) {
    int n = nums.size();
    vector<int> prefix(n);
    prefix[0] = nums[0];
    for (int i = 1; i < n; i++) {
        prefix[i] = prefix[i - 1] + nums[i];
    }
    return prefix;
}

vector<int> computeSuffixSum(vector<int>& nums) {
    int n = nums.size();
    vector<int> suffix(n);
    suffix[n - 1] = nums[n - 1];
    for (int i = n - 2; i >= 0; i--) {
        suffix[i] = suffix[i + 1] + nums[i];
    }
    return suffix;
}`}
      sampleInput={`nums = [1, 2, 3, 4, 5]`}
      sampleOutput={`Prefix Sum: [1, 3, 6, 10, 15], Suffix Sum: [15, 14, 12, 9, 5]`}
      timeComplexity="O(n)"
      spaceComplexity="O(n)"
    />
  );
}
