import AlgorithmPage from '/src/components/AlgorithmPage';

const description = `Greedy coloring is a graph coloring technique that assigns colors to vertices one by one, ensuring that no two adjacent vertices share the same color. It works by iterating through each vertex, checking the colors of its neighbors, and assigning the smallest available color that hasn't been used by any of them. The algorithm maintains an array to track assigned colors and uses a temporary array to mark unavailable colors during each step.`;

const javaCode = `
// Java - Greedy Coloring
void greedyColoring(List<List<Integer>> adj, int V) {
    int[] result = new int[V];
    Arrays.fill(result, -1);
    result[0] = 0;

    boolean[] available = new boolean[V];

    for (int u = 1; u < V; u++) {
        Arrays.fill(available, true);

        for (int v : adj.get(u)) {
            if (result[v] != -1) {
                available[result[v]] = false;
            }
        }

        for (int c = 0; c < V; c++) {
            if (available[c]) {
                result[u] = c;
                break;
            }
        }
    }
}
`;

const cppCode = `
// C++ - Greedy Coloring
void greedyColoring(vector<vector<int>>& adj, int V) {
    vector<int> result(V, -1);
    result[0] = 0;

    vector<bool> available(V, true);

    for (int u = 1; u < V; ++u) {
        fill(available.begin(), available.end(), true);
        for (int v : adj[u]) {
            if (result[v] != -1)
                available[result[v]] = false;
        }
        for (int c = 0; c < V; ++c) {
            if (available[c]) {
                result[u] = c;
                break;
            }
        }
    }
}
`;

export default function GraphColoring() {
  return (
    <AlgorithmPage
      title="Graph Coloring"
      description={description}
      javaCode={javaCode}
      cppCode={cppCode}
      sampleInput={`Graph: 0-1, 1-2, 2-3, 3-0`}
      sampleOutput={`Colors assigned: 0 1 0 1`}
      timeComplexity="O(V²)"
      spaceComplexity="O(V)"
    />
  );
}
