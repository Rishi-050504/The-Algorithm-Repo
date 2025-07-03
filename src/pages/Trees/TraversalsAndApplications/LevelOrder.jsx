import AlgorithmPage from '/src/components/AlgorithmPage';

export default function LevelOrder() {
  return (
    <AlgorithmPage
      title="Level Order Traversal"
      description="Level Order Traversal is a method of visiting all the nodes in a tree level by level, starting from the root and moving down each level from left to right. It works by using a queue data structure: the root node is enqueued first, then in a loop, the front node is dequeued and processed, and its children are enqueued. This process repeats until the queue is empty, ensuring nodes are visited in breadth-first order."
      javaCode={`
import java.util.*;

class TreeNode {
    int val;
    TreeNode left, right;
    TreeNode(int v) { val = v; }
}

public class LevelOrderTraversal {
    public List<List<Integer>> levelOrder(TreeNode root) {
        List<List<Integer>> result = new ArrayList<>();
        if (root == null) return result;

        Queue<TreeNode> q = new LinkedList<>();
        q.add(root);

        while (!q.isEmpty()) {
            int levelSize = q.size();
            List<Integer> currentLevel = new ArrayList<>();

            for (int i = 0; i < levelSize; i++) {
                TreeNode node = q.poll();
                currentLevel.add(node.val);

                if (node.left != null) q.add(node.left);
                if (node.right != null) q.add(node.right);
            }

            result.add(currentLevel);
        }

        return result;
    }
}
`}
      cppCode={`
#include <iostream>
#include <vector>
#include <queue>
using namespace std;

struct TreeNode {
    int val;
    TreeNode* left, *right;
    TreeNode(int v) : val(v), left(nullptr), right(nullptr) {}
};

class LevelOrderTraversal {
public:
    vector<vector<int>> levelOrder(TreeNode* root) {
        vector<vector<int>> result;
        if (!root) return result;

        queue<TreeNode*> q;
        q.push(root);

        while (!q.empty()) {
            int levelSize = q.size();
            vector<int> currentLevel;

            for (int i = 0; i < levelSize; ++i) {
                TreeNode* node = q.front(); q.pop();
                currentLevel.push_back(node->val);

                if (node->left) q.push(node->left);
                if (node->right) q.push(node->right);
            }

            result.push_back(currentLevel);
        }

        return result;
    }
};
`}
      sampleInput={`Input tree:\n    1\n   / \\\n  2   3\n / \\   \\\n4   5   6`}
      sampleOutput={`1 2 3 4 5 6`}
      timeComplexity="O(n)"
      spaceComplexity="O(n)"
    />
  );
}
