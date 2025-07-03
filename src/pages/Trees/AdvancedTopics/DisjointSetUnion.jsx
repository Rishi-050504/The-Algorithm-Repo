import AlgorithmPage from '/src/components/AlgorithmPage';

export default function DisjointSetUnion() {
  return (
    <AlgorithmPage
      title="Disjoint Set Union (Union-Find)"
      description="Disjoint Set Union (DSU), also known as Union-Find, is a data structure that keeps track of a collection of non-overlapping sets. It supports two main operations efficiently: Find, which determines which set a particular element belongs to, and Union, which merges two sets into one. The structure is typically implemented using parent pointers where each element points to a parent, and the root of the set acts as the representative. To optimize performance, DSU uses techniques like path compression (flattening the structure during Find to speed up future queries) and union by rank/size (attaching the smaller tree under the root of the larger one). This ensures nearly constant time, amortized O(α(n)) (inverse Ackermann function), for both operations."
      javaCode={`
public class DSU {
    int[] parent, size, rank;

    public DSU(int n) {
        parent = new int[n];
        size = new int[n];
        rank = new int[n];
        for (int i = 0; i < n; i++) {
            parent[i] = i;
            size[i] = 1;
            rank[i] = 0;
        }
    }

    // Find with path compression
    public int find(int a) {
        if (parent[a] == a) return a;
        return parent[a] = find(parent[a]); // path compression
    }

    // Union by size
    public boolean uniteBySize(int a, int b) {
        a = find(a);
        b = find(b);
        if (a == b) return false;

        if (size[a] < size[b]) {
            int temp = a; a = b; b = temp;
        }
        parent[b] = a;
        size[a] += size[b];
        return true;
    }

    // Union by rank
    public boolean uniteByRank(int a, int b) {
        a = find(a);
        b = find(b);
        if (a == b) return false;

        if (rank[a] < rank[b]) {
            parent[a] = b;
        } else if (rank[b] < rank[a]) {
            parent[b] = a;
        } else {
            parent[b] = a;
            rank[a]++;
        }
        return true;
    }
}
`}
      cppCode={`
#include <vector>
using namespace std;

class DSU {
    vector<int> parent, size, rank;

public:
    DSU(int n) {
        parent.resize(n);
        size.resize(n, 1);
        rank.resize(n, 0);
        for (int i = 0; i < n; i++)
            parent[i] = i;
    }

    // Find with path compression
    int find(int a) {
        if (parent[a] == a) return a;
        return parent[a] = find(parent[a]); // path compression
    }

    // Union by size
    bool uniteBySize(int a, int b) {
        a = find(a);
        b = find(b);
        if (a == b) return false;

        if (size[a] < size[b]) swap(a, b);
        parent[b] = a;
        size[a] += size[b];
        return true;
    }

    // Union by rank
    bool uniteByRank(int a, int b) {
        a = find(a);
        b = find(b);
        if (a == b) return false;

        if (rank[a] < rank[b]) {
            parent[a] = b;
        } else if (rank[b] < rank[a]) {
            parent[b] = a;
        } else {
            parent[b] = a;
            rank[a]++;
        }
        return true;
    }
};
`}
      sampleInput={`union 0 1
union 1 2
find 0 2
find 0 3
union 3 4
find 3 4
union 2 4
find 0 4
`}
      sampleOutput={`union(0, 1): merged
union(1, 2): merged
find(0, 2): YES (same set)
find(0, 3): NO (different sets)
union(3, 4): merged
find(3, 4): YES (same set)
union(2, 4): merged
find(0, 4): YES (same set)
`}
      timeComplexity="O(α(n)) per operation (Inverse Ackermann function)"
      spaceComplexity="O(n)"
    />
  );
}
