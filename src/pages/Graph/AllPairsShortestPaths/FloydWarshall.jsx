import AlgorithmPage from '/src/components/AlgorithmPage';

const floydDescription = `Floyd-Warshall Algorithm is a dynamic programming technique used to find the shortest paths between all pairs of vertices in a weighted graph. It works by iteratively considering each vertex as an intermediate point and updating the shortest distance between every pair of vertices if a shorter path is found through that intermediate. The algorithm maintains a distance matrix, where each cell initially holds the direct edge weight (or infinity if no edge exists), and repeatedly applies the relation: dist[i][j] = min(dist[i][j], dist[i][k] + dist[k][j]). It handles negative edge weights but not negative weight cycles, and is widely used for dense graphs or when multiple shortest path queries are needed.`;

const javaCode = `
// Java implementation of Floyd-Warshall
void floydWarshall(int[][] dist) {
    int V = dist.length;
    for (int k = 0; k < V; k++) {
        for (int i = 0; i < V; i++) {
            for (int j = 0; j < V; j++) {
                if (dist[i][k] != INF && dist[k][j] != INF)
                    dist[i][j] = Math.min(dist[i][j], dist[i][k] + dist[k][j]);
            }
        }
    }
}
`;

const cppCode = `
// C++ implementation of Floyd-Warshall
void floydWarshall(vector<vector<int>>& dist) {
    int V = dist.size();
    for (int k = 0; k < V; k++) {
        for (int i = 0; i < V; i++) {
            for (int j = 0; j < V; j++) {
                if (dist[i][k] != INF && dist[k][j] != INF)
                    dist[i][j] = min(dist[i][j], dist[i][k] + dist[k][j]);
            }
        }
    }
}
`;

export default function FloydWarshall() {
  return (
    <AlgorithmPage
      title="Floyd-Warshall"
      description={floydDescription}
      javaCode={javaCode}
      cppCode={cppCode}
      sampleInput={`4\n0 5 INF 10\nINF 0 3 INF\nINF INF 0 1\nINF INF INF 0`}
      sampleOutput={`0 5 8 9\nINF 0 3 4\nINF INF 0 1\nINF INF INF 0`}
      timeComplexity="O(V³)"
      spaceComplexity="O(V²)"
    />
  );
}
