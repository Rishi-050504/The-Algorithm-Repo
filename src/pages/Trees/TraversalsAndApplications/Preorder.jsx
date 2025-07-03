import AlgorithmPage from '/src/components/AlgorithmPage';

export default function Preorder() {
  return (
    <AlgorithmPage
      title="Preorder Traversal"
      description="Preorder Traversal visits nodes in the order: root, left subtree, then right subtree. It works by first processing the current node, then recursively traversing the left child followed by the right child. This traversal is useful for creating a copy of the tree or prefix expression of an expression tree."
      javaCode={`
import java.util.*;

class TreeNode {
    int val;
    TreeNode left, right;
    TreeNode(int v) { val = v; }
}

public class PreorderTraversal {
    public List<Integer> preorder(TreeNode root) {
        List<Integer> result = new ArrayList<>();
        traverse(root, result);
        return result;
    }

    private void traverse(TreeNode node, List<Integer> res) {
        if (node == null) return;
        res.add(node.val);
        traverse(node.left, res);
        traverse(node.right, res);
    }
}
`}
      cppCode={`
#include <iostream>
#include <vector>
using namespace std;

struct TreeNode {
    int val;
    TreeNode* left, *right;
    TreeNode(int v) : val(v), left(nullptr), right(nullptr) {}
};

class PreorderTraversal {
public:
    void preorder(TreeNode* root, vector<int>& res) {
        if (!root) return;
        res.push_back(root->val);
        preorder(root->left, res);
        preorder(root->right, res);
    }
};
`}
      sampleInput={`Manual Representation:
Node: 1 → Left: 2, Right: 3  
Node: 2 → Left: 4, Right: 5  
Node: 3 → Left: null, Right: null  
Node: 4 → Left: null, Right: null  
Node: 5 → Left: null, Right: null

Array Representation (Level Order): [1, 2, 3, 4, 5]`}
      sampleOutput={`Preorder Traversal: [1, 2, 4, 5, 3]`}
      timeComplexity="O(n)"
      spaceComplexity="O(h)"
    />
  );
}
