import AlgorithmPage from '/src/components/AlgorithmPage';

export default function SegmentTree() {
  return (
    <AlgorithmPage
      title="Segment Tree"
      description="A Segment Tree is a binary tree data structure used for storing information about intervals or segments, allowing efficient querying and updating of range-based data in an array. It divides the array into segments, with each node representing a segment (or range) and storing aggregated information like sum, minimum, or maximum for that segment. The tree is built recursively by splitting the array into halves until each leaf node represents a single element. Queries like range sum or range minimum are answered by combining results from relevant segments, significantly reducing the time compared to naive approaches. Updates to elements also propagate through the tree efficiently. Both query and update operations run in O(log n) time."
      javaCode={`
public class SegmentTree {
    private int n;
    private int[] tree;

    public SegmentTree(int[] a) {
        n = a.length;
        tree = new int[4 * n];
        build(a, 1, 0, n - 1);
    }

    // Build tree[node] for range [tl..tr]
    private void build(int[] a, int node, int tl, int tr) {
        if (tl == tr) {
            tree[node] = a[tl];
        } else {
            int tm = (tl + tr) / 2;
            build(a, node * 2, tl, tm);
            build(a, node * 2 + 1, tm + 1, tr);
            tree[node] = tree[node * 2] + tree[node * 2 + 1];
        }
    }

    // Point update: a[pos] = newVal
    public void update(int pos, int newVal) {
        update(1, 0, n - 1, pos, newVal);
    }

    private void update(int node, int tl, int tr, int pos, int newVal) {
        if (tl == tr) {
            tree[node] = newVal;
        } else {
            int tm = (tl + tr) / 2;
            if (pos <= tm)
                update(node * 2, tl, tm, pos, newVal);
            else
                update(node * 2 + 1, tm + 1, tr, pos, newVal);
            tree[node] = tree[node * 2] + tree[node * 2 + 1];
        }
    }

    // Sum query on range [l..r]
    public int query(int l, int r) {
        return query(1, 0, n - 1, l, r);
    }

    private int query(int node, int tl, int tr, int l, int r) {
        if (l > r) return 0;
        if (l == tl && r == tr) return tree[node];
        int tm = (tl + tr) / 2;
        return query(node * 2, tl, tm, l, Math.min(r, tm))
             + query(node * 2 + 1, tm + 1, tr, Math.max(l, tm + 1), r);
    }
}
`}
      cppCode={`
#include <vector>
using namespace std;

class SegmentTree {
    int n;
    vector<int> tree;

public:
    SegmentTree(const vector<int>& a) {
        n = a.size();
        tree.resize(4 * n);
        build(a, 1, 0, n - 1);
    }

    void build(const vector<int>& a, int node, int tl, int tr) {
        if (tl == tr) {
            tree[node] = a[tl];
        } else {
            int tm = (tl + tr) / 2;
            build(a, node * 2, tl, tm);
            build(a, node * 2 + 1, tm + 1, tr);
            tree[node] = tree[node * 2] + tree[node * 2 + 1];
        }
    }

    void update(int pos, int newVal) {
        update(1, 0, n - 1, pos, newVal);
    }

    void update(int node, int tl, int tr, int pos, int newVal) {
        if (tl == tr) {
            tree[node] = newVal;
        } else {
            int tm = (tl + tr) / 2;
            if (pos <= tm)
                update(node * 2, tl, tm, pos, newVal);
            else
                update(node * 2 + 1, tm + 1, tr, pos, newVal);
            tree[node] = tree[node * 2] + tree[node * 2 + 1];
        }
    }

    int query(int l, int r) {
        return query(1, 0, n - 1, l, r);
    }

    int query(int node, int tl, int tr, int l, int r) {
        if (l > r) return 0;
        if (l == tl && r == tr) return tree[node];
        int tm = (tl + tr) / 2;
        return query(node * 2, tl, tm, l, min(r, tm))
             + query(node * 2 + 1, tm + 1, tr, max(l, tm + 1), r);
    }
};
`}
      sampleInput={`Initial Array: [1, 3, 5, 7, 9, 11]

Query(1, 3)         // Sum from index 1 to 3 → 3 + 5 + 7
Update(1, 10)       // Change index 1 value from 3 to 10
Query(1, 3)         // New sum → 10 + 5 + 7
Query(0, 5)         // Sum of entire array
`}
      sampleOutput={`Query(1, 3): 15
After Update(1, 10)
Query(1, 3): 22
Query(0, 5): 43
`}
      timeComplexity="O(log n) per query/update, O(n) build"
      spaceComplexity="O(2n)"
    />
  );
}
