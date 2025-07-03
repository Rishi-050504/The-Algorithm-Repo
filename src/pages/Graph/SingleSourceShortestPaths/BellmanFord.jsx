import AlgorithmPage from '/src/components/AlgorithmPage';

const description = `Bellman-Ford Algorithm is a single source shortest path algorithm that works on graphs with both positive and negative edge weights. It repeatedly relaxes all edges, updating the shortest distance to each vertex, and does this for a total of (V - 1) iterations, where V is the number of vertices. Unlike Dijkstra’s Algorithm, Bellman-Ford can handle negative weights and also detect negative weight cycles—cycles where the total weight is negative. If any distance can still be updated after (V - 1) iterations, a negative cycle exists. It is useful in scenarios where negative edge weights are involved or such cycles need to be identified.`;

const javaCode = `
// Java code for Bellman-Ford
void bellmanFord(int V, int E, int[][] edges, int src) {
    int[] dist = new int[V];
    Arrays.fill(dist, Integer.MAX_VALUE);
    dist[src] = 0;

    for (int i = 0; i < V - 1; i++) {
        for (int[] edge : edges) {
            int u = edge[0], v = edge[1], w = edge[2];
            if (dist[u] != Integer.MAX_VALUE && dist[u] + w < dist[v]) {
                dist[v] = dist[u] + w;
            }
        }
    }

    // Detect negative cycles
    for (int[] edge : edges) {
        if (dist[edge[0]] + edge[2] < dist[edge[1]]) {
            System.out.println("Negative Cycle Detected");
            return;
        }
    }

    System.out.println(Arrays.toString(dist));
}
`;

const cppCode = `
// C++ code for Bellman-Ford
#include <bits/stdc++.h>
using namespace std;

void bellmanFord(int V, vector<tuple<int, int, int>> &edges, int src) {
    vector<int> dist(V, INT_MAX);
    dist[src] = 0;

    for (int i = 0; i < V - 1; ++i) {
        for (auto [u, v, w] : edges) {
            if (dist[u] != INT_MAX && dist[u] + w < dist[v]) {
                dist[v] = dist[u] + w;
            }
        }
    }

    for (auto [u, v, w] : edges) {
        if (dist[u] != INT_MAX && dist[u] + w < dist[v]) {
            cout << "Negative Cycle Detected";
            return;
        }
    }

    for (int d : dist) cout << d << " ";
}
`;

export default function BellmanFord() {
  return (
    <AlgorithmPage
      title="Bellman-Ford Algorithm"
      description={description}
      javaCode={javaCode}
      cppCode={cppCode}
      sampleInput={`Vertices: 5\nEdges: 0-1(6), 0-2(7), 1-2(8), 1-3(5), 2-3(-3), 3-4(9)\nSource: 0`}
      sampleOutput={`0 6 7 4 13`}
      timeComplexity="O(V * E)"
      spaceComplexity="O(V)"
    />
  );
}
