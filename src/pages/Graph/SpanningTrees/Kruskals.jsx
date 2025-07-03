import AlgorithmPage from '/src/components/AlgorithmPage';

const description = `Kruskal’s Algorithm is a greedy algorithm used to find the Minimum Spanning Tree (MST) of a connected, undirected, weighted graph. It works by sorting all the edges in non-decreasing order of their weights and then adding them one by one to the MST, as long as they do not form a cycle. To efficiently check for cycles, it uses a Disjoint Set Union (DSU) or Union-Find data structure. The algorithm continues until the MST contains exactly (V - 1) edges, where V is the number of vertices. Kruskal’s Algorithm is particularly effective for sparse graphs.`;

const javaCode = `
// Java code for Kruskal's Algorithm
class Edge implements Comparable<Edge> {
    int u, v, weight;
    public int compareTo(Edge other) {
        return this.weight - other.weight;
    }
}

int find(int[] parent, int x) {
    if (parent[x] != x) parent[x] = find(parent, parent[x]);
    return parent[x];
}

void union(int[] parent, int[] rank, int x, int y) {
    int px = find(parent, x), py = find(parent, y);
    if (px != py) {
        if (rank[px] < rank[py]) parent[px] = py;
        else if (rank[px] > rank[py]) parent[py] = px;
        else {
            parent[py] = px;
            rank[px]++;
        }
    }
}

int kruskal(List<Edge> edges, int V) {
    Collections.sort(edges);
    int[] parent = new int[V];
    int[] rank = new int[V];
    for (int i = 0; i < V; i++) parent[i] = i;

    int cost = 0;
    for (Edge e : edges) {
        if (find(parent, e.u) != find(parent, e.v)) {
            union(parent, rank, e.u, e.v);
            cost += e.weight;
        }
    }
    return cost;
}
`;

const cppCode = `
// C++ code for Kruskal's Algorithm
#include <bits/stdc++.h>
using namespace std;

struct Edge {
    int u, v, w;
    bool operator<(const Edge &e) const {
        return w < e.w;
    }
};

int find(vector<int>& parent, int x) {
    if (parent[x] != x) parent[x] = find(parent, parent[x]);
    return parent[x];
}

void unite(vector<int>& parent, vector<int>& rank, int x, int y) {
    int rx = find(parent, x), ry = find(parent, y);
    if (rx != ry) {
        if (rank[rx] < rank[ry]) parent[rx] = ry;
        else if (rank[rx] > rank[ry]) parent[ry] = rx;
        else {
            parent[ry] = rx;
            rank[rx]++;
        }
    }
}

int kruskal(int V, vector<Edge>& edges) {
    sort(edges.begin(), edges.end());
    vector<int> parent(V), rank(V, 0);
    iota(parent.begin(), parent.end(), 0);

    int cost = 0;
    for (Edge e : edges) {
        if (find(parent, e.u) != find(parent, e.v)) {
            unite(parent, rank, e.u, e.v);
            cost += e.w;
        }
    }
    return cost;
}
`;

export default function Kruskals() {
  return (
    <AlgorithmPage
      title="Kruskal's Algorithm"
      description={description}
      javaCode={javaCode}
      cppCode={cppCode}
      sampleInput={`Graph with 4 vertices and 5 edges: (0-1,1), (0-2,3), (1-2,1), (1-3,4), (2-3,2)`}
      sampleOutput={`Minimum cost: 4`}
      timeComplexity="O(E log E)"
      spaceComplexity="O(V)"
    />
  );
}
