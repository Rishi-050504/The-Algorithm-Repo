import AlgorithmPage from '/src/components/AlgorithmPage';

const description = `Eulerian Path in a graph is a path that visits every edge exactly once. It may or may not start and end at the same vertex. An Eulerian Circuit is a special case where the path starts and ends at the same vertexIn an undirected graph, an Eulerian Path exists if either 0 or 2 vertices have an odd degree, and the graph is connected. If all vertices have even degree, the path is a circuit.In a directed graph, an Eulerian Path exists if at most one vertex has out-degree = in-degree + 1 (start point) and one vertex has in-degree = out-degree + 1 (end point), with all other vertices having equal in-degree and out-degree. The graph must also be strongly connected (in the case of a circuit) or weakly connected (for a path).`;

const javaCode = `
// Java - Eulerian Path for undirected graph
boolean hasEulerianPath(int[] inDeg, int[] outDeg, int V) {
    int start = 0, end = 0;
    for (int i = 0; i < V; i++) {
        if (outDeg[i] - inDeg[i] == 1) start++;
        else if (inDeg[i] - outDeg[i] == 1) end++;
        else if (inDeg[i] != outDeg[i]) return false;
    }
    return (start == 0 && end == 0) || (start == 1 && end == 1);
}
// Java - Eulerian Path for directed graph
boolean hasEulerianPath(int[] inDeg, int[] outDeg, int V) {
    int start = 0, end = 0;
    for (int i = 0; i < V; i++) {
        if (outDeg[i] - inDeg[i] == 1) start++;
        else if (inDeg[i] - outDeg[i] == 1) end++;
        else if (inDeg[i] != outDeg[i]) return false;
    }
    return (start == 0 && end == 0) || (start == 1 && end == 1);
}

`;

const cppCode = `
// C++ - Eulerian Path for undirected graph
bool hasEulerianPath(vector<vector<int>>& adj, int V) {
    int odd = 0;
    for (int i = 0; i < V; ++i) {
        if (adj[i].size() % 2 != 0) odd++;
    }
    return (odd == 0 || odd == 2);
}

// C++ - Eulerian Path for directed graph
bool hasEulerianPath(vector<int>& inDeg, vector<int>& outDeg, int V) {
    int start = 0, end = 0;
    for (int i = 0; i < V; ++i) {
        if (outDeg[i] - inDeg[i] == 1) start++;
        else if (inDeg[i] - outDeg[i] == 1) end++;
        else if (inDeg[i] != outDeg[i]) return false;
    }
    return (start == 0 && end == 0) || (start == 1 && end == 1);
}
`;

export default function EulerianPath() {
  return (
    <AlgorithmPage
      title="Eulerian Path"
      description={description}
      javaCode={javaCode}
      cppCode={cppCode}
      sampleInput={`Directed graph: 0 → 1, 1 → 2, 2 → 0`}
      sampleOutput={`Eulerian Circuit Exists`}
      timeComplexity="O(V + E)"
      spaceComplexity="O(V)"
    />
  );
}
