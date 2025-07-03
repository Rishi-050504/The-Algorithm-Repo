import AlgorithmPage from '/src/components/AlgorithmPage';

export default function SqrtDecomposition() {
  return (
    <AlgorithmPage
      title="Square Root Decomposition"
      description="Square Root Decomposition is a technique used to preprocess an array to answer range queries, such as range sums or minimums, more efficiently. The idea is to divide the array into √n blocks, each of size around √n, and store precomputed information (like the sum) for each block. To answer a query for a range [L, R], the algorithm sums the full blocks that lie completely within the range and handles the remaining elements at the boundaries directly. This reduces query time to O(√n) after O(n) preprocessing, offering a balance between brute-force and advanced data structures like segment trees"
      javaCode={`// Preprocessing
int[] block;
int blockSize;

public void preprocess(int[] arr) {
    int n = arr.length;
    blockSize = (int)Math.sqrt(n);
    block = new int[(n + blockSize - 1) / blockSize];
    for (int i = 0; i < n; i++) {
        block[i / blockSize] += arr[i];
    }
}

// Query
public int query(int[] arr, int l, int r) {
    int sum = 0;
    while (l <= r && l % blockSize != 0) {
        sum += arr[l++];
    }
    while (l + blockSize - 1 <= r) {
        sum += block[l / blockSize];
        l += blockSize;
    }
    while (l <= r) {
        sum += arr[l++];
    }
    return sum;
}`}
      cppCode={`// Preprocessing
vector<int> block;
int blockSize;

void preprocess(vector<int>& arr) {
    int n = arr.size();
    blockSize = sqrt(n);
    block.resize((n + blockSize - 1) / blockSize);
    for (int i = 0; i < n; i++) {
        block[i / blockSize] += arr[i];
    }
}

// Query
int query(vector<int>& arr, int l, int r) {
    int sum = 0;
    while (l <= r && l % blockSize != 0) {
        sum += arr[l++];
    }
    while (l + blockSize - 1 <= r) {
        sum += block[l / blockSize];
        l += blockSize;
    }
    while (l <= r) {
        sum += arr[l++];
    }
    return sum;
}`}
      sampleInput={`arr = [1, 2, 3, 4, 5, 6, 7, 8, 9], query(2, 6)`}
      sampleOutput={`25`}
      timeComplexity={`Preprocessing: O(n), Query: O(√n)`}
      spaceComplexity={`O(√n)`}
    />
  );
}
