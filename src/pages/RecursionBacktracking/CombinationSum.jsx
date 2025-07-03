import AlgorithmPage from '/src/components/AlgorithmPage';

export default function CombinationSum() {
  return (
    <AlgorithmPage
      title="Combination Sum"
      description="Combination Sum is a classic backtracking problem where the goal is to find all unique combinations of numbers from a given array that add up to a target sum. You can use the same element multiple times in a combination. The algorithm typically involves recursively building combinations, checking if the current sum equals the target, and backtracking when the sum exceeds it. Sorting the array first helps optimize the process by allowing early termination. This problem demonstrates the use of recursion and backtracking to explore all valid paths and prune invalid ones efficiently."
      javaCode={`public List<List<Integer>> combinationSum(int[] candidates, int target) {
    List<List<Integer>> result = new ArrayList<>();
    backtrack(candidates, 0, target, new ArrayList<>(), result);
    return result;
}

private void backtrack(int[] candidates, int start, int target, List<Integer> current, List<List<Integer>> result) {
    if (target == 0) {
        result.add(new ArrayList<>(current));
        return;
    }
    for (int i = start; i < candidates.length; i++) {
        if (candidates[i] <= target) {
            current.add(candidates[i]);
            backtrack(candidates, i, target - candidates[i], current, result);
            current.remove(current.size() - 1);
        }
    }
}`}
      cppCode={`void backtrack(vector<int>& candidates, int start, int target, vector<int>& current, vector<vector<int>>& result) {
    if (target == 0) {
        result.push_back(current);
        return;
    }
    for (int i = start; i < candidates.size(); i++) {
        if (candidates[i] <= target) {
            current.push_back(candidates[i]);
            backtrack(candidates, i, target - candidates[i], current, result);
            current.pop_back();
        }
    }
}

vector<vector<int>> combinationSum(vector<int>& candidates, int target) {
    vector<vector<int>> result;
    vector<int> current;
    backtrack(candidates, 0, target, current, result);
    return result;
}`}
      sampleInput={`candidates = [2,3,6,7], target = 7`}
      sampleOutput={`[[2,2,3], [7]]`}
      timeComplexity="O(2^n)"
      spaceComplexity="O(target)"
    />
  );
}
