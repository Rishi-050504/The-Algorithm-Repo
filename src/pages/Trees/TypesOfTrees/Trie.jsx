import AlgorithmPage from '/src/components/AlgorithmPage';

export default function Trie() {
  return (
    <AlgorithmPage
      title="Trie"
      description="A Trie is a tree-like data structure used to store a dynamic set of strings where each node represents a character. Words are inserted by creating a path from the root through child nodes corresponding to each character. Each node can have multiple children representing different characters, and a special flag marks the end of a word. Searching checks if the path for a word exists and if the end-of-word flag is set. Prefix searches verify if any words start with a given prefix by traversing that path. Deletion removes a word by unmarking the end-of-word flag and pruning nodes that no longer lead to any words. Updating a word involves deleting the old word and inserting the new one, maintaining the trie's structure efficiently."
      javaCode={`
class TrieNode {
    TrieNode[] children = new TrieNode[26];
    boolean isEndOfWord;
}

public class Trie {
    TrieNode root = new TrieNode();

    // Insert a word
    public void insert(String word) {
        TrieNode node = root;
        for (char ch : word.toCharArray()) {
            int idx = ch - 'a';
            if (node.children[idx] == null)
                node.children[idx] = new TrieNode();
            node = node.children[idx];
        }
        node.isEndOfWord = true;
    }

    // Search full word
    public boolean search(String word) {
        TrieNode node = traverse(word);
        return node != null && node.isEndOfWord;
    }

    // Prefix search
    public boolean startsWith(String prefix) {
        return traverse(prefix) != null;
    }

    // Helper to traverse
    private TrieNode traverse(String word) {
        TrieNode node = root;
        for (char ch : word.toCharArray()) {
            int idx = ch - 'a';
            if (node.children[idx] == null)
                return null;
            node = node.children[idx];
        }
        return node;
    }

    // Delete a word from the trie
    public void delete(String word) {
        deleteHelper(root, word, 0);
    }

    private boolean deleteHelper(TrieNode node, String word, int i) {
        if (node == null) return false;

        if (i == word.length()) {
            if (!node.isEndOfWord) return false;
            node.isEndOfWord = false;
            return isEmpty(node);
        }

        int idx = word.charAt(i) - 'a';
        if (deleteHelper(node.children[idx], word, i + 1)) {
            node.children[idx] = null;
            return !node.isEndOfWord && isEmpty(node);
        }
        return false;
    }

    private boolean isEmpty(TrieNode node) {
        for (TrieNode child : node.children)
            if (child != null) return false;
        return true;
    }

    // Update word: delete old, insert new
    public void update(String oldWord, String newWord) {
        delete(oldWord);
        insert(newWord);
    }
}
`}
      cppCode={`
#include <iostream>
using namespace std;

struct TrieNode {
    TrieNode* children[26] = {};
    bool isEndOfWord = false;
};

class Trie {
    TrieNode* root = new TrieNode();

public:
    // Insert word
    void insert(const string& word) {
        TrieNode* node = root;
        for (char ch : word) {
            int idx = ch - 'a';
            if (!node->children[idx])
                node->children[idx] = new TrieNode();
            node = node->children[idx];
        }
        node->isEndOfWord = true;
    }

    // Search full word
    bool search(const string& word) {
        TrieNode* node = traverse(word);
        return node && node->isEndOfWord;
    }

    // Search prefix
    bool startsWith(const string& prefix) {
        return traverse(prefix) != nullptr;
    }

    // Delete word
    void deleteWord(const string& word) {
        deleteHelper(root, word, 0);
    }

    // Update word: delete old, insert new
    void update(const string& oldWord, const string& newWord) {
        deleteWord(oldWord);
        insert(newWord);
    }

private:
    TrieNode* traverse(const string& word) {
        TrieNode* node = root;
        for (char ch : word) {
            int idx = ch - 'a';
            if (!node->children[idx]) return nullptr;
            node = node->children[idx];
        }
        return node;
    }

    bool deleteHelper(TrieNode* node, const string& word, int i) {
        if (!node) return false;
        if (i == word.size()) {
            if (!node->isEndOfWord) return false;
            node->isEndOfWord = false;
            return isEmpty(node);
        }

        int idx = word[i] - 'a';
        if (deleteHelper(node->children[idx], word, i + 1)) {
            delete node->children[idx];
            node->children[idx] = nullptr;
            return !node->isEndOfWord && isEmpty(node);
        }
        return false;
    }

    bool isEmpty(TrieNode* node) {
        for (auto child : node->children)
            if (child) return false;
        return true;
    }
};
`}
      sampleInput={`Insert: "apple"
Insert: "app"
Search: "apple"
Search: "ap"
StartsWith: "ap"
Delete: "apple"
Search: "apple"
Search: "app"
Update: "app" → "application"
Search: "app"
Search: "application"
`}
      sampleOutput={`Inserted "apple"
Inserted "app"
Search "apple": true
Search "ap": false
StartsWith "ap": true
Deleted "apple"
Search "apple": false
Search "app": true
Updated "app" → "application"
Search "app": false
Search "application": true
`}
      timeComplexity="O(L) per operation, where L is word length"
      spaceComplexity="O(N * L)"
    />
  );
}
