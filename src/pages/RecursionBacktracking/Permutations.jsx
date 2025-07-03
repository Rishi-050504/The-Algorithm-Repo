import AlgorithmPage from '/src/components/AlgorithmPage';

export default function Permutations() {
  return (
    <AlgorithmPage
      title="Permutations"
      description="Permutations refer to all possible arrangements of a set of elements where the order matters. To generate permutations, we use recursion and backtracking by fixing one element at a time and recursively permuting the remaining elements. At each step, elements are swapped, and after exploring a branch, swaps are undone to backtrack. This technique ensures that all possible orderings are explored without repetition. Permutations are widely used in problems involving arrangement, ordering, and exhaustive search.."
      javaCode={`public List<List<Integer>> permute(int[] nums) {
    List<List<Integer>> result = new ArrayList<>();
    boolean[] used = new boolean[nums.length];
    backtrack(nums, new ArrayList<>(), used, result);
    return result;
}

private void backtrack(int[] nums, List<Integer> current, boolean[] used, List<List<Integer>> result) {
    if (current.size() == nums.length) {
        result.add(new ArrayList<>(current));
        return;
    }
    for (int i = 0; i < nums.length; i++) {
        if (used[i]) continue;
        used[i] = true;
        current.add(nums[i]);
        backtrack(nums, current, used, result);
        current.remove(current.size() - 1);
        used[i] = false;
    }
}`}
      cppCode={`void backtrack(vector<int>& nums, vector<bool>& used, vector<int>& current, vector<vector<int>>& result) {
    if (current.size() == nums.size()) {
        result.push_back(current);
        return;
    }
    for (int i = 0; i < nums.size(); i++) {
        if (used[i]) continue;
        used[i] = true;
        current.push_back(nums[i]);
        backtrack(nums, used, current, result);
        current.pop_back();
        used[i] = false;
    }
}

vector<vector<int>> permute(vector<int>& nums) {
    vector<vector<int>> result;
    vector<int> current;
    vector<bool> used(nums.size(), false);
    backtrack(nums, used, current, result);
    return result;
}`}
      sampleInput={`nums = [1, 2, 3]`}
      sampleOutput={`[[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]`}
      timeComplexity="O(n!)"
      spaceComplexity="O(n)"
    />
  );
}
