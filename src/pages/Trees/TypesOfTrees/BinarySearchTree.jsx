import AlgorithmPage from '/src/components/AlgorithmPage';

export default function BinarySearchTree() {
  return (
    <AlgorithmPage
      title="Binary Search Tree (BST)"
      description="A Binary Search Tree (BST) is a tree structure where each node contains a value, and for every node, all values in the left subtree are less than the node’s value, and all values in the right subtree are greater. This property allows efficient searching, insertion, and deletion. To insert a value, the tree is recursively traversed from the root: if the value is smaller than the current node, it moves left; if greater, it moves right, until it finds the correct null position to add the new node. Deletion involves three cases — removing a leaf node, a node with one child, or a node with two children. When deleting a node with two children, the node’s value is replaced by its in-order successor (smallest value in the right subtree), and then the successor node is deleted. Updating is done by deleting the old value and inserting the new value to maintain BST properties.."
      javaCode={`
class TreeNode {
    int val;
    TreeNode left, right;
    TreeNode(int v) { val = v; }
}

public class BST {
    TreeNode root;

    // Insert in BST
    public TreeNode insert(TreeNode node, int val) {
        if (node == null) return new TreeNode(val);
        if (val < node.val) node.left = insert(node.left, val);
        else if (val > node.val) node.right = insert(node.right, val);
        return node;
    }

    // Update value: delete oldVal, insert newVal
    public void update(int oldVal, int newVal) {
        root = delete(root, oldVal);
        root = insert(root, newVal);
    }

    // Delete node in BST
    public TreeNode delete(TreeNode node, int val) {
        if (node == null) return null;

        if (val < node.val) {
            node.left = delete(node.left, val);
        } else if (val > node.val) {
            node.right = delete(node.right, val);
        } else {
            if (node.left == null) return node.right;
            if (node.right == null) return node.left;

            TreeNode successor = getMin(node.right);
            node.val = successor.val;
            node.right = delete(node.right, successor.val);
        }
        return node;
    }

    private TreeNode getMin(TreeNode node) {
        while (node.left != null) node = node.left;
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
    TreeNode* left, *right;
    TreeNode(int v) : val(v), left(nullptr), right(nullptr) {}
};

class BST {
public:
    TreeNode* root = nullptr;

    // Insert into BST
    TreeNode* insert(TreeNode* node, int val) {
        if (!node) return new TreeNode(val);
        if (val < node->val) node->left = insert(node->left, val);
        else if (val > node->val) node->right = insert(node->right, val);
        return node;
    }

    // Update by deleting oldVal and inserting newVal
    void update(int oldVal, int newVal) {
        root = deleteNode(root, oldVal);
        root = insert(root, newVal);
    }

    // Delete node from BST
    TreeNode* deleteNode(TreeNode* node, int val) {
        if (!node) return nullptr;

        if (val < node->val) {
            node->left = deleteNode(node->left, val);
        } else if (val > node->val) {
            node->right = deleteNode(node->right, val);
        } else {
            if (!node->left) return node->right;
            if (!node->right) return node->left;

            TreeNode* successor = getMin(node->right);
            node->val = successor->val;
            node->right = deleteNode(node->right, successor->val);
        }
        return node;
    }

    TreeNode* getMin(TreeNode* node) {
        while (node->left) node = node->left;
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
      sampleInput={`Insert: 10 5 15 2 7
Update: 15 -> 12
Delete: 5
`}
      sampleOutput={`Inorder after insertion: 2 5 7 10 15
Inorder after update:    2 5 7 10 12
Inorder after deletion:  2 7 10 12
`}
      timeComplexity="O(log n) average, O(n) worst"
      spaceComplexity="O(h)"
    />
  );
}
