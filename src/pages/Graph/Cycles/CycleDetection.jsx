import AlgorithmPage from '/src/components/AlgorithmPage';

const description = `Cycle Detection in Graphs involves determining whether a graph contains any cycles—paths where a node can be revisited. The approach depends on whether the graph is undirected or directed.

In an undirected graph, a Depth-First Search (DFS) is used while keeping track of the current node’s parent. During traversal, if a visited neighbor is found that is not the parent, it indicates a cycle. The idea is to avoid counting the bidirectional parent edge as a cycle.

In a directed graph, cycle detection uses DFS with a recursion stack. As the traversal progresses, each node is added to both the visited set and the recursion stack. If a node is encountered that is already in the recursion stack, a cycle exists. The stack helps trace the current path of recursion, and its presence ensures we only detect cycles that follow the direction of edges.`;

const javaCode = `
// Undirected Graph - DFS Approach
boolean dfsUndirected(int v, int parent, boolean[] visited, List<List<Integer>> adj) {
    visited[v] = true;
    for (int neighbor : adj.get(v)) {
        if (!visited[neighbor]) {
            if (dfsUndirected(neighbor, v, visited, adj)) return true;
        } else if (neighbor != parent) {
            return true; // cycle found
        }
    }
    return false;
}

// Directed Graph - Recursion Stack Approach
boolean dfsDirected(int v, boolean[] visited, boolean[] recStack, List<List<Integer>> adj) {
    visited[v] = recStack[v] = true;
    for (int neighbor : adj.get(v)) {
        if (!visited[neighbor]) {
            if (dfsDirected(neighbor, visited, recStack, adj)) return true;
        } else if (recStack[neighbor]) {
            return true; // cycle found
        }
    }
    recStack[v] = false;
    return false;
}
`;

const cppCode = `
// Undirected Graph - DFS
bool dfsUndirected(int v, int parent, vector<vector<int>>& adj, vector<bool>& visited) {
    visited[v] = true;
    for (int neighbor : adj[v]) {
        if (!visited[neighbor]) {
            if (dfsUndirected(neighbor, v, adj, visited)) return true;
        } else if (neighbor != parent) {
            return true; // cycle found
        }
    }
    return false;
}

// Directed Graph - DFS + Recursion Stack
bool dfsDirected(int v, vector<vector<int>>& adj, vector<bool>& visited, vector<bool>& recStack) {
    visited[v] = recStack[v] = true;
    for (int neighbor : adj[v]) {
        if (!visited[neighbor]) {
            if (dfsDirected(neighbor, adj, visited, recStack)) return true;
        } else if (recStack[neighbor]) {
            return true; // cycle found
        }
    }
    recStack[v] = false;
    return false;
}
`;

export default function CycleDetection() {
  return (
    <AlgorithmPage
      title="Cycle Detection"
      description={description}
      javaCode={javaCode}
      cppCode={cppCode}
      sampleInput={`Graph: 0-1, 1-2, 2-0 (Undirected)\nOr 0→1, 1→2, 2→0 (Directed)`}
      sampleOutput={`Cycle Found`}
      timeComplexity="O(V + E)"
      spaceComplexity="O(V)"
    />
  );
}
