import AlgorithmPage from '/src/components/AlgorithmPage';

export default function MaxValue() {
  return (
    <AlgorithmPage
      title="Maximum Value in Tree"
      description={
  <>
    Finding the Maximum Value in a Binary Tree involves traversing all nodes and comparing their values.<br />
    A recursive approach checks the current node's value and compares it with the maximum of the left and right subtrees.<br /><br />
    <code>
      maxValue(node) = {'{'} <br />
      &nbsp;&nbsp;−∞&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;if node is null<br />
      &nbsp;&nbsp;max(node.val, maxValue(node.left), maxValue(node.right))&nbsp;&nbsp;&nbsp;&nbsp;otherwise<br />
      {'}'}<br />
    </code><br />
    This ensures that all nodes are visited, and the largest value among them is returned. It's useful in problems involving tree validation, constraints checking, and range queries.
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

public class TreeMax {
    public int findMax(TreeNode node) {
        if (node == null) return Integer.MIN_VALUE;

        int leftMax = findMax(node.left);
        int rightMax = findMax(node.right);

        return Math.max(node.val, Math.max(leftMax, rightMax));
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

class TreeMax {
public:
    int findMax(TreeNode* node) {
        if (!node) return INT_MIN;

        int leftMax = findMax(node->left);
        int rightMax = findMax(node->right);

        return max(node->val, max(leftMax, rightMax));
    }
};
`}
      sampleInput={`Manual Node Representation:
Node: 12 → Left: 7, Right: 15  
Node: 7 → Left: 3, Right: 9  
Node: 15 → Right: 28  
Node: 3 → Left: 1, Right: 5  
Node: 28 → Left: 17  
Node: 1 → Left: 0  
Nodes 0, 5, 9, 17 → No children

Array Representation (Level Order): [12, 7, 15, 3, 9, null, 28, 1, 5, null, null, 17, null, null, null, 0]`}
      sampleOutput={`Maximum Value in Tree: 28`}
      timeComplexity="O(n) in binary tree, O(h) in BST"
      spaceComplexity="O(h)"
    />
  );
}
