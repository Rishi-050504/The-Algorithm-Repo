import AlgorithmPage from '/src/components/AlgorithmPage';

const description = `A negative cycle in a graph is a cycle whose total edge weight is negative. It allows the total path cost to decrease indefinitely by looping through the cycle, making shortest path results unreliable.

To detect a negative cycle using Bellman-Ford, the algorithm relaxes all edges for V - 1 times (where V is the number of vertices). After that, it performs one more iteration: if any edge can still be relaxed, it indicates the presence of a negative cycle.`;

const javaCode = `
// Java - Negative cycle detection using Bellman-Ford
boolean hasNegativeCycle(int V, List<Edge> edges) {
    int[] dist = new int[V];
    Arrays.fill(dist, Integer.MAX_VALUE);
    dist[0] = 0;

    for (int i = 0; i < V - 1; i++) {
        for (Edge e : edges) {
            if (dist[e.u] != Integer.MAX_VALUE && dist[e.v] > dist[e.u] + e.w) {
                dist[e.v] = dist[e.u] + e.w;
            }
        }
    }

    for (Edge e : edges) {
        if (dist[e.u] != Integer.MAX_VALUE && dist[e.v] > dist[e.u] + e.w) {
            return true;
        }
    }
    return false;
}
`;

const cppCode = `
// C++ - Negative cycle detection using Bellman-Ford
bool hasNegativeCycle(int V, vector<tuple<int, int, int>>& edges) {
    vector<int> dist(V, INT_MAX);
    dist[0] = 0;

    for (int i = 0; i < V - 1; ++i) {
        for (auto& [u, v, w] : edges) {
            if (dist[u] != INT_MAX && dist[v] > dist[u] + w)
                dist[v] = dist[u] + w;
        }
    }

    for (auto& [u, v, w] : edges) {
        if (dist[u] != INT_MAX && dist[v] > dist[u] + w)
            return true;
    }

    return false;
}
`;

export default function NegativeCycle() {
  return (
    <AlgorithmPage
      title="Negative Cycle Detection"
      description={description}
      javaCode={javaCode}
      cppCode={cppCode}
      sampleInput={`Graph with edge weights: (0-1,1), (1-2,-1), (2-0,-1)`}
      sampleOutput={`Negative Cycle Detected`}
      timeComplexity="O(V × E)"
      spaceComplexity="O(V)"
    />
  );
}
