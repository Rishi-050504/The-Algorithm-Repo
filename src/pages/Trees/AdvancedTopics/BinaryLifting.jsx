import AlgorithmPage from '/src/components/AlgorithmPage';

export default function BinaryLifting() {
  return (
    <AlgorithmPage
      title="Binary Lifting"
      description="Binary Lifting is an efficient technique used in trees to quickly answer ancestor-related queries, such as finding the k-th ancestor of a node or the Lowest Common Ancestor (LCA) between two nodes. It preprocesses the tree by storing, for each node, its ancestors at powers of two distances (e.g., 1st ancestor, 2nd ancestor, 4th ancestor, etc.) in a sparse table. This allows jumping upwards in logarithmic steps instead of moving one step at a time. During a query, the algorithm breaks down the required jump length into sums of powers of two and uses the precomputed table to reach the target ancestor in O(log n) time."
      javaCode={`
import java.util.*;

class BinaryLifting {
    int N, LOG;
    List<List<Integer>> adj;
    int[][] up;
    int[] depth;
    int root;

    public BinaryLifting(int n, int root) {
        this.N = n;
        this.root = root;
        this.LOG = (int) Math.ceil(Math.log(n) / Math.log(2));
        adj = new ArrayList<>();
        for (int i = 0; i < N; i++) adj.add(new ArrayList<>());

        up = new int[N][LOG + 1];
        depth = new int[N];
    }

    public void addEdge(int u, int v) {
        adj.get(u).add(v);
        adj.get(v).add(u);
    }

    public void dfs(int v, int p) {
        up[v][0] = p;
        depth[v] = (p == v ? 0 : depth[p] + 1);
        for (int j = 1; j <= LOG; j++) {
            up[v][j] = up[ up[v][j-1] ][j-1];
        }
        for (int to : adj.get(v)) {
            if (to != p)
                dfs(to, v);
        }
    }

    public void preprocess() {
        dfs(root, root);
    }

    // Climb k ancestors up from node u
    public int kthAncestor(int u, int k) {
        for (int j = 0; j <= LOG; j++) {
            if (((k >> j) & 1) == 1)
                u = up[u][j];
        }
        return u;
    }

    public int lca(int u, int v) {
        if (depth[u] < depth[v]) {
            int t = u; u = v; v = t;
        }
        // lift u up to depth v
        u = kthAncestor(u, depth[u] - depth[v]);

        if (u == v) return u;

        for (int j = LOG; j >= 0; j--) {
            if (up[u][j] != up[v][j]) {
                u = up[u][j];
                v = up[v][j];
            }
        }
        return up[u][0];
    }
}
`}
      cppCode={`
#include <bits/stdc++.h>
using namespace std;

struct BinaryLifting {
    int N, LOG, root;
    vector<vector<int>> adj;
    vector<vector<int>> up;
    vector<int> depth;

    BinaryLifting(int n, int root) : N(n), root(root) {
        LOG = ceil(log2(n));
        adj.assign(N, {});
        up.assign(N, vector<int>(LOG + 1));
        depth.assign(N, 0);
    }

    void addEdge(int u, int v) {
        adj[u].push_back(v);
        adj[v].push_back(u);
    }

    void dfs(int v, int p) {
        up[v][0] = p;
        depth[v] = (p == v ? 0 : depth[p] + 1);

        for (int j = 1; j <= LOG; j++) {
            up[v][j] = up[ up[v][j-1] ][j-1];
        }

        for (int to : adj[v]) {
            if (to != p)
                dfs(to, v);
        }
    }

    void preprocess() {
        dfs(root, root);
    }

    int kthAncestor(int u, int k) {
        for (int j = 0; j <= LOG; j++) {
            if (k & (1 << j))
                u = up[u][j];
        }
        return u;
    }

    int lca(int u, int v) {
        if (depth[u] < depth[v]) swap(u, v);
        u = kthAncestor(u, depth[u] - depth[v]);
        if (u == v) return u;

        for (int j = LOG; j >= 0; j--) {
            if (up[u][j] != up[v][j]) {
                u = up[u][j];
                v = up[v][j];
            }
        }
        return up[u][0];
    }
};
`}
      sampleInput={`Edges: (0,1), (0,2), (0,3), (1,4), (1,5), (3,6)
Root: 0

Queries:
1. LCA of 4 and 5
2. LCA of 4 and 2
3. LCA of 6 and 5
4. 2nd ancestor of 4
5. 1st ancestor of 3`}
      sampleOutput={`LCA(4, 5): 1
LCA(4, 2): 0
LCA(6, 5): 0
2nd ancestor of 4: 0
1st ancestor of 3: 0
`}
      timeComplexity="O(log n) per query, O(n log n) preprocessing"
      spaceComplexity="O(n log n)"
    />
  );
}
