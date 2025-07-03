import AlgorithmPage from '/src/components/AlgorithmPage';

const description = `An adjacency matrix is a graph representation that uses a 2D array to store edge information between vertices. Each cell at position (i, j) in the matrix indicates whether there is an edge between vertex i and vertex j. For unweighted graphs, the cell typically holds 1 if an edge exists and 0 otherwise; for weighted graphs, it stores the weight of the edge. This representation is simple and allows constant-time edge lookups, but it requires O(V²) space, making it less efficient for sparse graphs.`;

const javaCode = `
// Java code for adjacency matrix representation
class Graph {
    int[][] matrix;

    Graph(int V) {
        matrix = new int[V][V];
    }

    void addEdge(int u, int v) {
        matrix[u][v] = 1;
        matrix[v][u] = 1; // For undirected graph
    }
}
`;

const cppCode = `
// C++ code for adjacency matrix representation
#include <vector>
using namespace std;

class Graph {
public:
    vector<vector<int>> matrix;

    Graph(int V) {
        matrix.resize(V, vector<int>(V, 0));
    }

    void addEdge(int u, int v) {
        matrix[u][v] = 1;
        matrix[v][u] = 1; // For undirected graph
    }
};
`;

export default function MatrixRepresentation() {
  return (
    <AlgorithmPage
      title="Adjacency Matrix Representation"
      description={description}
      javaCode={javaCode}
      cppCode={cppCode}
      sampleInput={`4 edges:\n0-1\n1-2\n2-3\n3-0`}
      sampleOutput={`0: 0 1 0 1\n1: 1 0 1 0\n2: 0 1 0 1\n3: 1 0 1 0`}
      timeComplexity="O(V²)"
      spaceComplexity="O(V²)"
    />
  );
}
