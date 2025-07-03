import AlgorithmPage from '/src/components/AlgorithmPage';

const description = `Depth-First Search (DFS) is a graph traversal method that explores a graph by going as deep as possible along each path before backtracking. Starting from a given node, it visits that node, marks it as visited, and then recursively explores its unvisited neighbors. This process continues until all reachable nodes are visited. DFS can be implemented using recursion or an explicit stack, and it is commonly used for problems like cycle detection, pathfinding, and topological sorting in directed graphs.`;

const javaCode = `
// Java code for DFS
void dfs(int node, boolean[] visited, List<List<Integer>> adj) {
    visited[node] = true;
    System.out.print(node + " ");
    for (int neighbor : adj.get(node)) {
        if (!visited[neighbor]) {
            dfs(neighbor, visited, adj);
        }
    }
}
`;

const cppCode = `
// C++ code for DFS
#include <iostream>
#include <vector>
using namespace std;

void dfs(int node, vector<bool>& visited, vector<vector<int>>& adj) {
    visited[node] = true;
    cout << node << " ";
    for (int neighbor : adj[node]) {
        if (!visited[neighbor]) {
            dfs(neighbor, visited, adj);
        }
    }
}
`;

export default function DFS() {
  return (
    <AlgorithmPage
      title="Depth-First Search (DFS)"
      description={description}
      javaCode={javaCode}
      cppCode={cppCode}
      sampleInput={`Graph:\n0 -> 1, 2\n1 -> 0, 3\n2 -> 0\n3 -> 1\nStart: 0`}
      sampleOutput={`0 1 3 2`}
      timeComplexity="O(V + E)"
      spaceComplexity="O(V) + O(Recursion Stack)"
    />
  );
}
