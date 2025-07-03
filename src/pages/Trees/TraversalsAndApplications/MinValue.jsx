import AlgorithmPage from '/src/components/AlgorithmPage';

export default function MinValue() {
  return (
    <AlgorithmPage
      title="Minimum Value in Tree"
      description={
  <>
    Finding the Minimum Value in a Binary Tree involves visiting all nodes and selecting the smallest among them.<br />
    A recursive approach compares the current node’s value with the minimum values from the left and right subtrees.<br /><br />
    <code>
      minValue(node) = {'{'} <br />
      &nbsp;&nbsp;+∞&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;if node is null<br />
      &nbsp;&nbsp;min(node.val, minValue(node.left), minValue(node.right))&nbsp;&nbsp;&nbsp;&nbsp;otherwise<br />
      {'}'}<br />
    </code><br />
    This method ensures that every node is checked and the smallest value is returned. It's helpful in range checking, tree validation, and optimization problems.
  </>
}

      javaCode={`
class TreeNode {
    int val;
    TreeNode left, right;
    TreeNode(int v) { val = v; }
}

public class TreeMin {
    public int findMin(TreeNode root) {
        if (root == null) return Integer.MAX_VALUE;
        int leftMin = findMin(root.left);
        int rightMin = findMin(root.right);
        return Math.min(root.val, Math.min(leftMin, rightMin));
    }
}
`}
      cppCode={`
#include <iostream>
#include <climits>
using namespace std;

struct TreeNode {
    int val;
    TreeNode* left, *right;
    TreeNode(int v) : val(v), left(nullptr), right(nullptr) {}
};

class TreeMin {
public:
    int findMin(TreeNode* root) {
        if (!root) return INT_MAX;
        int leftMin = findMin(root->left);
        int rightMin = findMin(root->right);
        return min(root->val, min(leftMin, rightMin));
    }
};
`}
      sampleInput={`Manual Node Representation:
Node: 12 → Left: 7, Right: 15  
Node: 7 → Left: 3, Right: 9  
Node: 15 → Right: 20  
Node: 3 → Left: 1, Right: 5  
Node: 20 → Left: 17  
Node: 1 → Left: 0  
Nodes 0, 5, 9, 17 → No children

Array Representation (Level Order): [12, 7, 15, 3, 9, null, 20, 1, 5, null, null, 17, null, null, null, 0]`}
      sampleOutput={`Minimum Value in Tree: 0`}
      timeComplexity="O(n) in binary tree, O(h) in BST"
      spaceComplexity="O(h)"
    />
  );
}
