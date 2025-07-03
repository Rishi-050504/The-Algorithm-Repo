import AlgorithmPage from '/src/components/AlgorithmPage';

const description = `An adjacency list is a way of representing a graph where each vertex stores a list of its neighboring vertices. This structure is especially efficient for sparse graphs, as it only stores existing edges. For each vertex, the list contains all other vertices it is directly connected to. For example, if vertex A is connected to B and C, the list for A will include B and C. This representation allows efficient traversal of neighbors and uses space proportional to the number of vertices and edges, i.e., O(V + E).`;

const javaCode = `
// Java code to represent a graph using adjacency list
import java.util.*;

class Graph {
    List<List<Integer>> adj;

    Graph(int V) {
        adj = new ArrayList<>();
        for (int i = 0; i < V; i++)
            adj.add(new ArrayList<>());
    }

    void addEdge(int u, int v) {
        adj.get(u).add(v);
        adj.get(v).add(u); // For undirected graph
    }
}
`;

const cppCode = `
// C++ code to represent a graph using adjacency list
#include <vector>
using namespace std;

class Graph {
public:
    vector<vector<int>> adj;

    Graph(int V) {
        adj.resize(V);
    }

    void addEdge(int u, int v) {
        adj[u].push_back(v);
        adj[v].push_back(u); // For undirected graph
    }
};
`;

export default function ListRepresentation() {
  return (
    <AlgorithmPage
      title="Adjacency List Representation"
      description={description}
      javaCode={javaCode}
      cppCode={cppCode}
      sampleInput={`5 edges:\n0-1\n0-2\n1-3\n1-4\n3-4`}
      sampleOutput={`0: 1 2\n1: 0 3 4\n2: 0\n3: 1 4\n4: 1 3`}
      timeComplexity="O(V + E)"
      spaceComplexity="O(V + E)"
    />
  );
}
