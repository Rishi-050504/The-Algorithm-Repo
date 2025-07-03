import AlgorithmPage from '/src/components/AlgorithmPage';

export default function MexElement() {
  return (
    <AlgorithmPage
      title="Minimum Excluded Element (MEX)"
      description="The Minimum Excluded Element (MEX) of a set or array is the smallest non-negative integer that is not present in the collection. For example, the MEX of [0, 1, 3] is 2, because 2 is the smallest number not in the array. To compute the MEX efficiently, especially when working with subarrays or multiple queries, a frequency array or a boolean array is often used to track which elements exist. One can iterate from 0 upward and return the first number with zero frequency. This concept is widely used in game theory (like Grundy numbers), segment tree problems, and optimization questions involving subarrays or constraints."
      javaCode={`public int findMex(int[] nums) {
    int n = nums.length;
    boolean[] present = new boolean[n + 1];
    for (int num : nums) {
        if (num >= 0 && num <= n) {
            present[num] = true;
        }
    }
    for (int i = 0; i <= n; i++) {
        if (!present[i]) {
            return i;
        }
    }
    return n + 1;
}`}
      cppCode={`int findMex(vector<int>& nums) {
    int n = nums.size();
    vector<bool> present(n + 1, false);
    for (int num : nums) {
        if (num >= 0 && num <= n) {
            present[num] = true;
        }
    }
    for (int i = 0; i <= n; i++) {
        if (!present[i]) return i;
    }
    return n + 1;
}`}
      sampleInput={`nums = [0, 1, 2, 6, 3, 5]`}
      sampleOutput={`4`}
      timeComplexity="O(n)"
      spaceComplexity="O(n)"
    />
  );
}
