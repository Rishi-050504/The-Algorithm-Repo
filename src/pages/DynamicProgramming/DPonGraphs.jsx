import AlgorithmPage from '/src/components/AlgorithmPage';

export default function DPonGraphs() {
  return (
    <AlgorithmPage
      title="Graph DP"
      description={`Graph DP refers to dynamic programming on graphs where the state transitions depend on node relationships. 
A classic example is finding the longest path in a Directed Acyclic Graph (DAG), where you can perform DP after topological sorting. 
This avoids cycles and ensures dependencies are computed in the correct order.`}
      javaCode={`// Java: Longest Path in DAG using Topo Sort + DP
List<List<Integer>> adj;
int[] dp;
boolean[] visited;
Stack<Integer> topo;

void dfs(int u) {
    visited[u] = true;
    for (int v : adj.get(u)) {
        if (!visited[v]) dfs(v);
    }
    topo.push(u);
}

int findLongestPath(int n) {
    dp = new int[n];
    visited = new boolean[n];
    topo = new Stack<>();
    
    for (int i = 0; i < n; i++) {
        if (!visited[i]) dfs(i);
    }

    while (!topo.isEmpty()) {
        int u = topo.pop();
        for (int v : adj.get(u)) {
            dp[v] = Math.max(dp[v], dp[u] + 1);
        }
    }

    int maxLen = 0;
    for (int len : dp) maxLen = Math.max(maxLen, len);
    return maxLen;
}`}

      cppCode={`// C++: Longest Path in DAG using Topo Sort + DP
vector<vector<int>> adj;
vector<int> dp, visited, topo;

void dfs(int u) {
    visited[u] = 1;
    for (int v : adj[u]) {
        if (!visited[v]) dfs(v);
    }
    topo.push_back(u);
}

int findLongestPath(int n) {
    dp.assign(n, 0);
    visited.assign(n, 0);
    topo.clear();

    for (int i = 0; i < n; i++)
        if (!visited[i]) dfs(i);

    reverse(topo.begin(), topo.end());

    for (int u : topo) {
        for (int v : adj[u]) {
            dp[v] = max(dp[v], dp[u] + 1);
        }
    }

    return *max_element(dp.begin(), dp.end());
}`}

      sampleInput={`n = 6
edges = [
  [0, 1],
  [0, 2],
  [1, 3],
  [2, 3],
  [3, 4],
  [4, 5]
]`}
      sampleOutput={`Longest Path Length = 5  // 0 → 1 → 3 → 4 → 5`}
      timeComplexity={`O(V + E)`}
      spaceComplexity={`O(V + E)`}
    />
  );
}
