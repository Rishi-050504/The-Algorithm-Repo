import AlgorithmPage from '/src/components/AlgorithmPage';

const description = `Topological sort is a linear ordering of vertices in a directed acyclic graph (DAG) such that for every directed edge from vertex A to vertex B, A appears before B in the ordering. It is commonly used to represent dependencies, like task scheduling where some tasks must precede others. The algorithm works by repeatedly selecting vertices with no incoming edges, adding them to the order, and removing their outgoing edges, continuing until all vertices are processed. It can be implemented using Depth-First Search or Kahn’s Algorithm and only applies to graphs without cycles.`;

const javaCode = `
// Java - DFS-based Topological Sort
void topologicalSortUtil(int v, boolean[] visited, Stack<Integer> stack, List<List<Integer>> adj) {
    visited[v] = true;
    for (int neighbor : adj.get(v)) {
        if (!visited[neighbor]) {
            topologicalSortUtil(neighbor, visited, stack, adj);
        }
    }
    stack.push(v);
}
`;

const cppCode = `
// C++ - DFS-based Topological Sort
void topologicalSortUtil(int v, vector<vector<int>>& adj, vector<bool>& visited, stack<int>& Stack) {
    visited[v] = true;
    for (int neighbor : adj[v]) {
        if (!visited[neighbor])
            topologicalSortUtil(neighbor, adj, visited, Stack);
    }
    Stack.push(v);
}
`;

export default function TopologicalSort() {
  return (
    <AlgorithmPage
      title="Topological Sort"
      description={description}
      javaCode={javaCode}
      cppCode={cppCode}
      sampleInput={`Graph: 5→2, 5→0, 4→0, 4→1, 2→3, 3→1`}
      sampleOutput={`Topological Order: 4 5 2 3 1 0`}
      timeComplexity="O(V + E)"
      spaceComplexity="O(V)"
    />
  );
}
