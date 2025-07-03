import AlgorithmPage from '/src/components/AlgorithmPage';

const description = `Dijkstra’s Algorithm is a graph traversal technique used to find the shortest paths from a single source vertex to all other vertices in a graph with non-negative edge weights. It works by maintaining a priority queue to always process the node with the smallest known distance, updating the shortest paths to neighboring nodes as it proceeds. The algorithm starts with a distance of zero for the source and infinity for all others, gradually refining these distances as it explores the graph. Dijkstra’s Algorithm is efficient and widely used in applications like GPS navigation, network routing, and pathfinding in games.`;

const javaCode = `
// Java code for Dijkstra's Algorithm using PriorityQueue
import java.util.*;

void dijkstra(List<List<int[]>> adj, int V, int src) {
    int[] dist = new int[V];
    Arrays.fill(dist, Integer.MAX_VALUE);
    dist[src] = 0;

    PriorityQueue<int[]> pq = new PriorityQueue<>(Comparator.comparingInt(a -> a[1]));
    pq.offer(new int[]{src, 0});

    while (!pq.isEmpty()) {
        int[] cur = pq.poll();
        int u = cur[0];

        for (int[] edge : adj.get(u)) {
            int v = edge[0], weight = edge[1];
            if (dist[u] + weight < dist[v]) {
                dist[v] = dist[u] + weight;
                pq.offer(new int[]{v, dist[v]});
            }
        }
    }

    System.out.println(Arrays.toString(dist));
}
`;

const cppCode = `
// C++ code for Dijkstra's Algorithm using priority_queue
#include <bits/stdc++.h>
using namespace std;

void dijkstra(int V, vector<pair<int, int>> adj[], int src) {
    vector<int> dist(V, INT_MAX);
    dist[src] = 0;
    priority_queue<pair<int, int>, vector<pair<int, int>>, greater<>> pq;
    pq.push({0, src});

    while (!pq.empty()) {
        auto [d, u] = pq.top(); pq.pop();
        if (d > dist[u]) continue;
        for (auto [v, w] : adj[u]) {
            if (dist[u] + w < dist[v]) {
                dist[v] = dist[u] + w;
                pq.push({dist[v], v});
            }
        }
    }

    for (int d : dist) cout << d << " ";
}
`;

export default function Dijkstra() {
  return (
    <AlgorithmPage
      title="Dijkstra's Algorithm"
      description={description}
      javaCode={javaCode}
      cppCode={cppCode}
      sampleInput={`Graph with 5 vertices\nEdges: 0-1(2), 0-2(4), 1-2(1), 1-3(7), 2-4(3)\nSource: 0`}
      sampleOutput={`0 2 3 9 6`}
      timeComplexity="O((V + E) log V)"
      spaceComplexity="O(V + E)"
    />
  );
}
