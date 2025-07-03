import AlgorithmPage from '/src/components/AlgorithmPage';

export default function DPonTrees() {
  return (
    <AlgorithmPage
      title="DP on Trees"
      description={`Tree DP is used when the problem involves trees (acyclic connected graphs) and requires computing optimal values over subtrees.
A common example is finding the maximum sum of non-adjacent nodes, where for each node we calculate two values:
- Include the node: we skip its children.
- Exclude the node: we take the best of including/excluding its children.`}
      javaCode={`// Java: Max sum of non-adjacent nodes
class TreeNode {
    int val;
    List<TreeNode> children;
}

int[] dfs(TreeNode node) {
    int include = node.val;
    int exclude = 0;
    
    for (TreeNode child : node.children) {
        int[] childRes = dfs(child);
        include += childRes[1]; // skip children if included
        exclude += Math.max(childRes[0], childRes[1]); // can include or not
    }

    return new int[]{include, exclude};
}

int maxSubsetSum(TreeNode root) {
    int[] res = dfs(root);
    return Math.max(res[0], res[1]);
}`}

      cppCode={`// C++: Max sum of non-adjacent nodes
struct TreeNode {
    int val;
    vector<TreeNode*> children;
};

pair<int, int> dfs(TreeNode* node) {
    int include = node->val;
    int exclude = 0;

    for (auto child : node->children) {
        auto [inc, exc] = dfs(child);
        include += exc;
        exclude += max(inc, exc);
    }

    return {include, exclude};
}

int maxSubsetSum(TreeNode* root) {
    auto [inc, exc] = dfs(root);
    return max(inc, exc);
}`}

      sampleInput={`Tree:
        10
       /  \\
      1    2
     / \\    \\
    3   4    5`}
      sampleOutput={`Max sum = 16  // (10 + 3 + 4 + 5)`}
      timeComplexity={`O(N), where N = number of nodes`}
      spaceComplexity={`O(H), where H = height of tree due to recursion stack`}
    />
  );
}
