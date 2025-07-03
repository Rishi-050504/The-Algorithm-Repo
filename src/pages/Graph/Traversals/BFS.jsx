import AlgorithmPage from '/src/components/AlgorithmPage';

const description = `Breadth-First Search (BFS) is a graph traversal technique that explores all the neighbors of a node before moving on to the next level of nodes. Starting from a given source vertex, it visits all its adjacent vertices, then visits the neighbors of those vertices, and so on. BFS uses a queue to keep track of the next vertex to visit, ensuring nodes are explored in order of their distance from the source. It is commonly used for finding the shortest path in unweighted graphs, checking connectivity, and solving problems that require level-wise exploration.`;

const javaCode = `
// Java code for BFS
import java.util.*;

void bfs(List<List<Integer>> adj, int V, int start) {
    boolean[] visited = new boolean[V];
    Queue<Integer> q = new LinkedList<>();
    visited[start] = true;
    q.add(start);

    while (!q.isEmpty()) {
        int node = q.poll();
        System.out.print(node + " ");
        for (int neighbor : adj.get(node)) {
            if (!visited[neighbor]) {
                visited[neighbor] = true;
                q.add(neighbor);
            }
        }
    }
}
`;

const cppCode = `
// C++ code for BFS
#include <iostream>
#include <vector>
#include <queue>
using namespace std;

void bfs(vector<vector<int>>& adj, int V, int start) {
    vector<bool> visited(V, false);
    queue<int> q;
    visited[start] = true;
    q.push(start);

    while (!q.empty()) {
        int node = q.front();
        q.pop();
        cout << node << " ";
        for (int neighbor : adj[node]) {
            if (!visited[neighbor]) {
                visited[neighbor] = true;
                q.push(neighbor);
            }
        }
    }
}
`;

export default function BFS() {
  return (
    <AlgorithmPage
      title="Breadth-First Search (BFS)"
      description={description}
      javaCode={javaCode}
      cppCode={cppCode}
      sampleInput={`Graph:\n0 -> 1, 2\n1 -> 0, 3\n2 -> 0\n3 -> 1\nStart: 0`}
      sampleOutput={`0 1 2 3`}
      timeComplexity="O(V + E)"
      spaceComplexity="O(V)"
    />
  );
}
