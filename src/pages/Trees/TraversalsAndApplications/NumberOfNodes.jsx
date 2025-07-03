import AlgorithmPage from '/src/components/AlgorithmPage';

export default function NumberOfNodes() {
  return (
    <AlgorithmPage
      title="Count Number of Nodes"
      description={
  <>
    Counting the Number of Nodes in a Binary Tree involves traversing the entire tree and summing up nodes from all subtrees.<br />
    A recursive approach adds 1 (for the current node) to the total count from the left and right subtrees.<br /><br />
    <code>
      countNodes(node) = {'{'} <br />
      &nbsp;&nbsp;0&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;if node is null<br />
      &nbsp;&nbsp;1 + countNodes(node.left) + countNodes(node.right)&nbsp;&nbsp;&nbsp;&nbsp;otherwise<br />
      {'}'}<br />
    </code><br />
    This ensures that each node contributes exactly once to the total count. It’s commonly used in size calculations, complete tree checks, and traversal-related problems.
  </>
}

      javaCode={`
class TreeNode {
    int val;
    TreeNode left, right;
    TreeNode(int v) {
        val = v;
    }
}

public class CountNodes {
    public int count(TreeNode root) {
        if (root == null) return 0;
        int leftCount = count(root.left);
        int rightCount = count(root.right);
        return 1 + leftCount + rightCount;
    }
}
`}
      cppCode={`
#include <iostream>
using namespace std;

struct TreeNode {
    int val;
    TreeNode* left, *right;
    TreeNode(int v) : val(v), left(nullptr), right(nullptr) {}
};

class CountNodes {
public:
    int count(TreeNode* root) {
        if (!root) return 0;
        return 1 + count(root->left) + count(root->right);
    }
};
`}
      sampleInput={`Input tree:\n    1\n   / \\\n  2   3\n / \\   \\\n4   5   6`}
      sampleOutput={`6`}
      timeComplexity="O(n)"
      spaceComplexity="O(h)"
    />
  );
}
