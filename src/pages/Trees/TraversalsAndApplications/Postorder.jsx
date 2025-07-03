import AlgorithmPage from '/src/components/AlgorithmPage';

export default function Postorder() {
  return (
    <AlgorithmPage
      title="Postorder Traversal"
      description="Postorder Traversal visits nodes in the order: left subtree, right subtree, then root. It works by recursively traversing the left child, then the right child, and finally processing the current node. This traversal is commonly used for deleting a tree or evaluating postfix expressions."
      javaCode={`
import java.util.*;

class TreeNode {
    int val;
    TreeNode left, right;
    TreeNode(int v) { val = v; }
}

public class PostorderTraversal {
    public List<Integer> postorder(TreeNode root) {
        List<Integer> result = new ArrayList<>();
        traverse(root, result);
        return result;
    }

    private void traverse(TreeNode node, List<Integer> res) {
        if (node == null) return;
        traverse(node.left, res);
        traverse(node.right, res);
        res.add(node.val);
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

class PostorderTraversal {
public:
    void postorder(TreeNode* root, vector<int>& res) {
        if (!root) return;
        postorder(root->left, res);
        postorder(root->right, res);
        res.push_back(root->val);
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
      sampleOutput={`Postorder Traversal: [4, 5, 2, 3, 1]`}
      timeComplexity="O(n)"
      spaceComplexity="O(h)"
    />
  );
}
