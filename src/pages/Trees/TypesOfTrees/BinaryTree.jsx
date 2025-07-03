import AlgorithmPage from '/src/components/AlgorithmPage';

export default function BinaryTree() {
  return (
    <AlgorithmPage
      title="Binary Tree"
      description="Binary Tree is a hierarchical data structure where each node has at most two children, commonly referred to as the left and right child. The tree starts with a root node and expands downward in levels. Nodes can be inserted either to the left or right recursively. Updating involves searching the tree for the first node matching a specified value and replacing it with a new value. Deletion here removes a node and its entire subtree by returning null for the matched node, effectively pruning that part of the tree. These operations maintain the tree structure by recursively traversing left or right subtrees to perform the changes."
      javaCode={`
class TreeNode {
    int val;
    TreeNode left, right;
    TreeNode(int v) { val = v; }
}

public class BinaryTree {
    TreeNode root;

    // Insert left or right recursively (for demonstration)
    public void insert(TreeNode node, int val, boolean toLeft) {
        if (toLeft) {
            if (node.left == null) node.left = new TreeNode(val);
            else insert(node.left, val, toLeft);
        } else {
            if (node.right == null) node.right = new TreeNode(val);
            else insert(node.right, val, toLeft);
        }
    }

    // Update first node with oldVal to newVal
    public boolean update(TreeNode node, int oldVal, int newVal) {
        if (node == null) return false;
        if (node.val == oldVal) {
            node.val = newVal;
            return true;
        }
        return update(node.left, oldVal, newVal) || update(node.right, oldVal, newVal);
    }

    // Delete a node by value (removes the node and its subtree)
    public TreeNode delete(TreeNode node, int val) {
        if (node == null) return null;
        if (node.val == val) return null;

        node.left = delete(node.left, val);
        node.right = delete(node.right, val);
        return node;
    }

    public void inorder(TreeNode node) {
        if (node == null) return;
        inorder(node.left);
        System.out.print(node.val + " ");
        inorder(node.right);
    }
}
`}
      cppCode={`
#include <iostream>
using namespace std;

struct TreeNode {
    int val;
    TreeNode *left, *right;
    TreeNode(int v) : val(v), left(nullptr), right(nullptr) {}
};

class BinaryTree {
public:
    TreeNode* root = nullptr;

    // Insert left or right recursively
    void insert(TreeNode* node, int val, bool toLeft) {
        if (toLeft) {
            if (!node->left) node->left = new TreeNode(val);
            else insert(node->left, val, toLeft);
        } else {
            if (!node->right) node->right = new TreeNode(val);
            else insert(node->right, val, toLeft);
        }
    }

    // Update first matching value
    bool update(TreeNode* node, int oldVal, int newVal) {
        if (!node) return false;
        if (node->val == oldVal) {
            node->val = newVal;
            return true;
        }
        return update(node->left, oldVal, newVal) || update(node->right, oldVal, newVal);
    }

    // Delete a node by value (removes the node and its subtree)
    TreeNode* deleteNode(TreeNode* node, int val) {
        if (!node) return nullptr;
        if (node->val == val) return nullptr;

        node->left = deleteNode(node->left, val);
        node->right = deleteNode(node->right, val);
        return node;
    }

    void inorder(TreeNode* node) {
        if (!node) return;
        inorder(node->left);
        cout << node->val << " ";
        inorder(node->right);
    }
};
`}
      sampleInput={`Create root: 1
Insert 2 to left of 1
Insert 3 to right of 1
Insert 4 to left of 2
Insert 5 to right of 2
Update node with value 3 → 30
Delete node with value 2 (removes 2, 4, 5)
Inorder traversal of final tree`}
      sampleOutput={`Step 1: Create root node 1
Inorder: 1

Step 2: Insert 2 to left of 1
Inorder: 2 1

Step 3: Insert 3 to right of 1
Inorder: 2 1 3

Step 4: Insert 4 to left of 2
Inorder: 4 2 1 3

Step 5: Insert 5 to right of 2
Inorder: 4 2 5 1 3

Step 6: Update node 3 → 30
Inorder: 4 2 5 1 30

Step 7: Delete node 2 (removes 2, 4, 5)
Inorder: 1 30`}
      timeComplexity="O(h)"
      spaceComplexity="O(h)"
    />
  );
}
