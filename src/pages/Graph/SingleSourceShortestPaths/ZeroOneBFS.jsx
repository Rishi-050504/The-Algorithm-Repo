import AlgorithmPage from '/src/components/AlgorithmPage';

const description = `0-1 BFS is a variation of the Breadth-First Search algorithm used to find the shortest path in a graph where edge weights are only 0 or 1. Instead of using a regular queue, it uses a double-ended queue (deque) to efficiently process nodes based on edge weights. When traversing an edge with weight 0, the adjacent node is added to the front of the deque, and when the edge weight is 1, it is added to the back. This ensures that nodes are always explored in increasing order of distance, making the algorithm efficient and faster than Dijkstra’s in such special cases.`;

const javaCode = `
// Java code for 0-1 BFS
import java.util.*;

void zeroOneBFS(List<List<int[]>> adj, int V, int src) {
    int[] dist = new int[V];
    Arrays.fill(dist, Integer.MAX_VALUE);
    dist[src] = 0;

    Deque<Integer> dq = new ArrayDeque<>();
    dq.addFirst(src);

    while (!dq.isEmpty()) {
        int u = dq.pollFirst();

        for (int[] edge : adj.get(u)) {
            int v = edge[0], w = edge[1];
            if (dist[u] + w < dist[v]) {
                dist[v] = dist[u] + w;
                if (w == 0) dq.addFirst(v);
                else dq.addLast(v);
            }
        }
    }

    System.out.println(Arrays.toString(dist));
}
`;

const cppCode = `
// C++ code for 0-1 BFS
#include <bits/stdc++.h>
using namespace std;

void zeroOneBFS(int V, vector<pair<int, int>> adj[], int src) {
    vector<int> dist(V, INT_MAX);
    dist[src] = 0;
    deque<int> dq;
    dq.push_front(src);

    while (!dq.empty()) {
        int u = dq.front(); dq.pop_front();
        for (auto [v, w] : adj[u]) {
            if (dist[u] + w < dist[v]) {
                dist[v] = dist[u] + w;
                if (w == 0) dq.push_front(v);
                else dq.push_back(v);
            }
        }
    }

    for (int d : dist) cout << d << " ";
}
`;

export default function ZeroOneBFS() {
  return (
    <AlgorithmPage
      title="0-1 BFS"
      description={description}
      javaCode={javaCode}
      cppCode={cppCode}
      sampleInput={`Graph: 0-1(0), 1-2(1), 2-3(0), 1-3(1)\nSource: 0`}
      sampleOutput={`0 0 1 1`}
      timeComplexity="O(V + E)"
      spaceComplexity="O(V)"
    />
  );
}
