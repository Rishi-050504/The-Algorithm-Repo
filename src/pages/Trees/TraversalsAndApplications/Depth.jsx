import AlgorithmPage from '/src/components/AlgorithmPage';

export default function Depth() {
  return (
    <AlgorithmPage
      title="Depth of a Node"
      description={
  <>
    Depth of a Tree is the length of the longest path from the root node down to the farthest leaf node, representing the maximum number of edges or levels in the tree. It can be calculated recursively using the formula:<br /><br />
    <code>
      Depth(node) = {'{'} <br />
      &nbsp;&nbsp;0&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;if node is null (empty)<br />
      &nbsp;&nbsp;1 + max(Depth(node.left), Depth(node.right))&nbsp;&nbsp;&nbsp;&nbsp;otherwise<br />
      {'}'}<br />
    </code><br />
    This means you find the depth of the left and right subtrees, take the maximum of the two, and add one for the current node, repeating until all leaf nodes are reached.
  </>
}


      javaCode={`
class TreeNode {
    int val;
    TreeNode left, right;
    TreeNode(int v) { val = v; }
}

public class TreeDepth {
    // Returns depth from the given node (as local root) to deepest leaf
    public int depthFrom(TreeNode node) {
        if (node == null) return 0;
        int left = depthFrom(node.left);
        int right = depthFrom(node.right);
        return 1 + Math.max(left, right);
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

class TreeDepth {
public:
    // Returns depth from the given node (as local root) to deepest leaf
    int depthFrom(TreeNode* node) {
        if (!node) return 0;
        int left = depthFrom(node->left);
        int right = depthFrom(node->right);
        return 1 + max(left, right);
    }
};
`}
      sampleInput={`Manual Node Representation:
Node: 3 → Left: 6, Right: 7  
Node: 6 → Right: 9  
Node: 7, 11 → No children  
Node: 9 → Right: 11

Array Representation (Level Order from node 3): [3, 6, 7, null, 9, null, null, null, 11]`}
      sampleOutput={`Depth from Node 3: 4`}
      timeComplexity="O(n)"
      spaceComplexity="O(h)"
    />
  );
}
