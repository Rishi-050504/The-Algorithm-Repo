import AlgorithmPage from '/src/components/AlgorithmPage';

export default function Height() {
  return (
    <AlgorithmPage
      title="Height of a Tree"
      description={
  <>
    Height of a Tree is the number of edges on the longest path from the node down to a leaf. It’s often calculated recursively and is similar to the depth of the root node.<br /><br />
    <code>
      Height(node) = {'{'} <br />
      &nbsp;&nbsp;-1&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;if node is null (empty)<br />
      &nbsp;&nbsp;1 + max(Height(node.left), Height(node.right))&nbsp;&nbsp;&nbsp;&nbsp;otherwise<br />
      {'}'}<br />
    </code><br />
    The height of a leaf node is 0, and the height of an empty tree is typically considered -1. Height is widely used in balancing operations for trees like AVL, Red-Black, and segment trees.
  </>
}

      javaCode={`
class TreeNode {
    int val;
    TreeNode left, right;
    TreeNode(int v) {
        val = v;
        left = right = null;
    }
}

public class TreeHeight {
    public int height(TreeNode root) {
        if (root == null) return -1; // height of empty tree is -1
        int leftHeight = height(root.left);
        int rightHeight = height(root.right);
        return 1 + Math.max(leftHeight, rightHeight);
    }
}
`}
      cppCode={`
#include <iostream>
#include <algorithm>
using namespace std;

struct TreeNode {
    int val;
    TreeNode* left, *right;
    TreeNode(int v) : val(v), left(nullptr), right(nullptr) {}
};

class TreeHeight {
public:
    int height(TreeNode* root) {
        if (root == nullptr) return -1; // height of empty tree is -1
        int left = height(root->left);
        int right = height(root->right);
        return 1 + max(left, right);
    }
};
`}
      sampleInput={`Manual Node Representation:
Node: 1 → Left: 2, Right: 3  
Node: 2 → Left: 4, Right: null  
Node: 3 → Left: 5, Right: 6  
Node: 4 → Left: 7, Right: null  
Node: 5 → Left: null, Right: 8  
Node: 6 → Left: null, Right: null  
Node: 7, 8 → Left: null, Right: null

Array Representation (Level Order): [1, 2, 3, 4, null, 5, 6, 7, null, null, 8]`}
      sampleOutput={`Height of Tree: 4`}
      timeComplexity="O(n)"
      spaceComplexity="O(h)"
    />
  );
}
