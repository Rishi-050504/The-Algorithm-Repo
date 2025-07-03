import AlgorithmPage from '/src/components/AlgorithmPage';

const description = `A bipartite graph is a graph whose vertices can be divided into two disjoint sets such that every edge connects a vertex from one set to a vertex in the other, with no two vertices within the same set being adjacent. This is equivalent to being 2-colorable, meaning it’s possible to assign two colors to the graph’s vertices so that no adjacent vertices share the same color. To check if a graph is bipartite, we use BFS or DFS to color the graph, starting from any node and alternating colors for its neighbors. If two adjacent nodes ever receive the same color, the graph is not bipartite.`;

const javaCode = `
// Java - BFS approach to check bipartiteness
boolean isBipartite(List<List<Integer>> adj, int V) {
    int[] color = new int[V];
    Arrays.fill(color, -1);

    for (int start = 0; start < V; start++) {
        if (color[start] != -1) continue;
        Queue<Integer> q = new LinkedList<>();
        q.add(start);
        color[start] = 0;

        while (!q.isEmpty()) {
            int u = q.poll();
            for (int v : adj.get(u)) {
                if (color[v] == -1) {
                    color[v] = 1 - color[u];
                    q.add(v);
                } else if (color[v] == color[u]) {
                    return false;
                }
            }
        }
    }
    return true;
}
`;

const cppCode = `
// C++ - BFS approach to check bipartite
bool isBipartite(vector<vector<int>>& adj, int V) {
    vector<int> color(V, -1);
    for (int start = 0; start < V; ++start) {
        if (color[start] != -1) continue;
        queue<int> q;
        q.push(start);
        color[start] = 0;

        while (!q.empty()) {
            int u = q.front(); q.pop();
            for (int v : adj[u]) {
                if (color[v] == -1) {
                    color[v] = 1 - color[u];
                    q.push(v);
                } else if (color[v] == color[u]) {
                    return false;
                }
            }
        }
    }
    return true;
}
`;

export default function Bipartite() {
  return (
    <AlgorithmPage
      title="Bipartite Check"
      description={description}
      javaCode={javaCode}
      cppCode={cppCode}
      sampleInput={`Graph: 0-1, 1-2, 2-3, 3-0`}
      sampleOutput={`Bipartite: Yes`}
      timeComplexity="O(V + E)"
      spaceComplexity="O(V)"
    />
  );
}
