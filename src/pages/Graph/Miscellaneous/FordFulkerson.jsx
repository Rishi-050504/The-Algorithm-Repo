import AlgorithmPage from '/src/components/AlgorithmPage';

const description = `Ford-Fulkerson is an algorithm used to compute the maximum flow in a flow network from a source to a sink. It repeatedly finds augmenting paths—paths from source to sink with available capacity—using DFS or BFS, and increases the flow along those paths by the minimum residual capacity. The process continues until no more augmenting paths can be found. The total flow sent from the source to the sink at the end represents the maximum flow. It works with integer capacities and is the basis for more optimized versions like the Edmonds-Karp algorithm.`;

const javaCode = `
// Java - DFS-based Ford-Fulkerson
int fordFulkerson(int[][] capacity, int source, int sink) {
    int V = capacity.length;
    int[][] flow = new int[V][V];
    int maxFlow = 0;

    while (true) {
        boolean[] visited = new boolean[V];
        int augFlow = dfs(capacity, flow, visited, source, sink, Integer.MAX_VALUE);
        if (augFlow == 0) break;
        maxFlow += augFlow;
    }

    return maxFlow;
}

int dfs(int[][] capacity, int[][] flow, boolean[] visited, int u, int t, int currFlow) {
    if (u == t) return currFlow;
    visited[u] = true;

    for (int v = 0; v < capacity.length; v++) {
        if (!visited[v] && capacity[u][v] - flow[u][v] > 0) {
            int nextFlow = dfs(capacity, flow, visited, v, t, Math.min(currFlow, capacity[u][v] - flow[u][v]));
            if (nextFlow > 0) {
                flow[u][v] += nextFlow;
                flow[v][u] -= nextFlow;
                return nextFlow;
            }
        }
    }

    return 0;
}
`;

const cppCode = `
// C++ - DFS-based Ford-Fulkerson
int dfs(int u, int t, int flow, vector<vector<int>>& capacity, vector<vector<int>>& adj, vector<bool>& visited) {
    if (u == t) return flow;
    visited[u] = true;
    for (int v : adj[u]) {
        if (!visited[v] && capacity[u][v] > 0) {
            int currFlow = dfs(v, t, min(flow, capacity[u][v]), capacity, adj, visited);
            if (currFlow > 0) {
                capacity[u][v] -= currFlow;
                capacity[v][u] += currFlow;
                return currFlow;
            }
        }
    }
    return 0;
}

int fordFulkerson(int source, int sink, vector<vector<int>>& capacity, vector<vector<int>>& adj) {
    int maxFlow = 0, flow;
    vector<bool> visited;

    do {
        visited.assign(capacity.size(), false);
        flow = dfs(source, sink, INT_MAX, capacity, adj, visited);
        maxFlow += flow;
    } while (flow > 0);

    return maxFlow;
}
`;

export default function FordFulkerson() {
  return (
    <AlgorithmPage
      title="Ford-Fulkerson Algorithm"
      description={description}
      javaCode={javaCode}
      cppCode={cppCode}
      sampleInput={`Capacity matrix and source/sink nodes`}
      sampleOutput={`Maximum Flow: 5`}
      timeComplexity="O(max_flow × E)"
      spaceComplexity="O(V²)"
    />
  );
}
