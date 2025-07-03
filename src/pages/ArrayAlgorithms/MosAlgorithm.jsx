import AlgorithmPage from '/src/components/AlgorithmPage';

export default function MosAlgorithm() {
  return (
    <AlgorithmPage
      title="Mo’s Algorithm"
      description="Mo’s Algorithm is an efficient offline algorithm used to answer multiple range queries (L, R) on an array, especially when the number of queries is large and each query asks for information like the number of distinct elements in a subarray. It works by sorting all queries in a specific order (usually block-wise by left index and right index within blocks) to minimize the movement of the range boundaries while processing queries. As it moves the current range to match each query, it adds or removes elements and updates the answer incrementally. This reduces the time complexity to approximately O((n + q) × √n), making it much faster than handling each query independently."
      javaCode={`class Query {
    int l, r, idx;
    public Query(int l, int r, int idx) {
        this.l = l;
        this.r = r;
        this.idx = idx;
    }
}

public int[] processQueries(int[] arr, List<Query> queries) {
    int n = arr.length;
    int q = queries.size();
    int block = (int)Math.sqrt(n);
    queries.sort((a, b) -> {
        if (a.l / block != b.l / block)
            return Integer.compare(a.l / block, b.l / block);
        return Integer.compare(a.r, b.r);
    });

    int[] freq = new int[1000001];
    int[] res = new int[q];
    int currL = 0, currR = -1, distinct = 0;

    for (Query query : queries) {
        while (currL > query.l) {
            currL--;
            if (++freq[arr[currL]] == 1) distinct++;
        }
        while (currR < query.r) {
            currR++;
            if (++freq[arr[currR]] == 1) distinct++;
        }
        while (currL < query.l) {
            if (--freq[arr[currL]] == 0) distinct--;
            currL++;
        }
        while (currR > query.r) {
            if (--freq[arr[currR]] == 0) distinct--;
            currR--;
        }
        res[query.idx] = distinct;
    }

    return res;
}`}
      cppCode={`struct Query {
    int l, r, idx;
};

bool compare(Query a, Query b) {
    int blockSize = sqrt(1e5);
    if (a.l / blockSize != b.l / blockSize)
        return a.l / blockSize < b.l / blockSize;
    return a.r < b.r;
}

vector<int> processQueries(vector<int>& arr, vector<Query>& queries) {
    int n = arr.size();
    int q = queries.size();
    int block = sqrt(n);
    sort(queries.begin(), queries.end(), compare);

    vector<int> freq(1000001, 0), res(q);
    int currL = 0, currR = -1, distinct = 0;

    for (auto& query : queries) {
        while (currL > query.l) {
            currL--;
            if (++freq[arr[currL]] == 1) distinct++;
        }
        while (currR < query.r) {
            currR++;
            if (++freq[arr[currR]] == 1) distinct++;
        }
        while (currL < query.l) {
            if (--freq[arr[currL]] == 0) distinct--;
            currL++;
        }
        while (currR > query.r) {
            if (--freq[arr[currR]] == 0) distinct--;
            currR--;
        }
        res[query.idx] = distinct;
    }

    return res;
}`}
      sampleInput={`arr = [1, 1, 2, 1, 3], queries = [(0, 4), (1, 3), (2, 4)]`}
      sampleOutput={`[3, 2, 3]`}
      timeComplexity="O((n + q) * √n)"
      spaceComplexity="O(n + q)"
    />
  );
}
