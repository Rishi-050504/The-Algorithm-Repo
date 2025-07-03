import AlgorithmPage from '/src/components/AlgorithmPage';

export default function Inorder() {
  return (
    <AlgorithmPage
      title="Inorder Traversal"
      description="Inorder Traversal is a method of visiting all the nodes in a binary tree where nodes are processed in the order: left subtree, root, then right subtree. It works by recursively traversing the left child, then visiting the current node, and finally traversing the right child. This traversal produces nodes in non-decreasing order for a binary search tree, making it useful for retrieving sorted data."
      javaCode={`
import java.util.*;

class TreeNode {
    int val;
    TreeNode left, right;
    TreeNode(int v) {
        val = v;
        left = right = null;
    }
}

public class BinaryTree {
    public List<Integer> inorderTraversal(TreeNode root) {
        List<Integer> result = new ArrayList<>();
        inorder(root, result);
        return result;
    }

    private void inorder(TreeNode node, List<Integer> res) {
        if (node == null) return;
        inorder(node.left, res);
        res.add(node.val);
        inorder(node.right, res);
    }
}
`}
      cppCode={`
#include <iostream>
#include <vector>
using namespace std;

struct TreeNode {
    int val;
    TreeNode* left;
    TreeNode* right;
    TreeNode(int v) : val(v), left(nullptr), right(nullptr) {}
};

class BinaryTree {
public:
    void inorderTraversal(TreeNode* root, vector<int>& res) {
        if (root == nullptr) return;
        inorderTraversal(root->left, res);
        res.push_back(root->val);
        inorderTraversal(root->right, res);
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


      sampleOutput={`Inorder Traversal: [4, 2, 5, 1, 3]`}
      timeComplexity="O(n)"
      spaceComplexity="O(h)"
    />
  );
}
