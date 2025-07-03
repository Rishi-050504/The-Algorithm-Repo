import AlgorithmPage from '/src/components/AlgorithmPage';

const description = `Prim’s Algorithm is a greedy algorithm used to find the Minimum Spanning Tree (MST) of a connected, weighted, undirected graph. It starts with a single vertex and grows the spanning tree by repeatedly adding the smallest-weight edge that connects a visited vertex to an unvisited vertex. The algorithm maintains a priority queue (or min-heap) to efficiently select the next minimum edge. It continues until all vertices are included in the tree. Prim’s Algorithm ensures that the total weight of the spanning tree is minimized and is particularly efficient for dense graphs.`;

const javaCode = `
// Java code for Prim's Algorithm using PriorityQueue
import java.util.*;

void prim(List<List<int[]>> adj, int V) {
    boolean[] visited = new boolean[V];
    PriorityQueue<int[]> pq = new PriorityQueue<>(Comparator.comparingInt(a -> a[1]));
    pq.offer(new int[]{0, 0});
    int mstCost = 0;

    while (!pq.isEmpty()) {
        int[] cur = pq.poll();
        int u = cur[0], w = cur[1];
        if (visited[u]) continue;
        visited[u] = true;
        mstCost += w;

        for (int[] edge : adj.get(u)) {
            if (!visited[edge[0]]) {
                pq.offer(new int[]{edge[0], edge[1]});
            }
        }
    }

    System.out.println("Minimum Cost: " + mstCost);
}
`;

const cppCode = `
// C++ code for Prim's Algorithm
#include <bits/stdc++.h>
using namespace std;

int prim(int V, vector<pair<int, int>> adj[]) {
    vector<bool> visited(V, false);
    priority_queue<pair<int, int>, vector<pair<int, int>>, greater<>> pq;
    pq.push({0, 0});
    int mstCost = 0;

    while (!pq.empty()) {
        auto [w, u] = pq.top(); pq.pop();
        if (visited[u]) continue;
        visited[u] = true;
        mstCost += w;

        for (auto [v, wt] : adj[u]) {
            if (!visited[v]) {
                pq.push({wt, v});
            }
        }
    }
    return mstCost;
}
`;

export default function Prims() {
  return (
    <AlgorithmPage
      title="Prim's Algorithm"
      description={description}
      javaCode={javaCode}
      cppCode={cppCode}
      sampleInput={`Graph with 4 vertices and 5 edges: (0-1,1), (0-2,3), (1-2,1), (1-3,4), (2-3,2)`}
      sampleOutput={`Minimum cost: 4`}
      timeComplexity="O((V + E) log V)"
      spaceComplexity="O(V + E)"
    />
  );
}
