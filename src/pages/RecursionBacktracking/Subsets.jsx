import AlgorithmPage from '/src/components/AlgorithmPage';

export default function Subsets() {
  return (
    <AlgorithmPage
      title="Subsets"
      description="Subsets refer to all possible combinations of elements from a given set, including the empty set and the set itself. To generate subsets, we typically use recursion and backtracking by making a binary choice at each step: either include the current element or exclude it. This forms a decision tree that explores all possible combinations. The total number of subsets for a set of size n is 2^n. Subsets are useful in solving problems related to combinations, powersets, and decision-making scenarios."
      javaCode={`public List<List<Integer>> subsets(int[] nums) {
    List<List<Integer>> result = new ArrayList<>();
    backtrack(0, nums, new ArrayList<>(), result);
    return result;
}

private void backtrack(int start, int[] nums, List<Integer> current, List<List<Integer>> result) {
    result.add(new ArrayList<>(current));
    for (int i = start; i < nums.length; i++) {
        current.add(nums[i]);
        backtrack(i + 1, nums, current, result);
        current.remove(current.size() - 1);
    }
}`}
      cppCode={`void backtrack(int start, vector<int>& nums, vector<int>& current, vector<vector<int>>& result) {
    result.push_back(current);
    for (int i = start; i < nums.size(); i++) {
        current.push_back(nums[i]);
        backtrack(i + 1, nums, current, result);
        current.pop_back();
    }
}

vector<vector<int>> subsets(vector<int>& nums) {
    vector<vector<int>> result;
    vector<int> current;
    backtrack(0, nums, current, result);
    return result;
}`}
      sampleInput={`nums = [1, 2, 3]`}
      sampleOutput={`[[], [1], [2], [3], [1,2], [1,3], [2,3], [1,2,3]]`}
      timeComplexity="O(2^n)"
      spaceComplexity="O(n)"
    />
  );
}
