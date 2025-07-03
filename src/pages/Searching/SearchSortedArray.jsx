import AlgorithmPage from '/src/components/AlgorithmPage';

const description = `Searching in a sorted array is efficiently done using Binary Search, which repeatedly divides the search range in half to locate the target element. By comparing the target with the middle element, the algorithm decides whether to continue the search in the left or right half. This approach significantly reduces the number of comparisons, achieving a time complexity of O(log n) and space complexity of O(1) (iterative). It is commonly used in applications involving sorted data, such as databases, lookup tables, and boundary-based problems.`;

const javaCode = `
// Java code: Binary search on sorted array with open intervals
int searchSortedArray(int[] a, int n, int k) {
    int left = -1, right = n;
    while (right - left > 1) {
        int mid = (left + right) / 2;
        if (k < a[mid]) {
            right = mid; // a[left] <= k < a[mid] <= a[right]
        } else {
            left = mid;  // a[left] <= a[mid] <= k < a[right]
        }
    }
    return left; // Index of the largest element <= k
}
`;

const cppCode = `
// C++ code: Binary search with open boundaries
int searchSortedArray(const std::vector<int>& a, int k) {
    int n = a.size();
    int left = -1, right = n;
    while (right - left > 1) {
        int mid = (left + right) / 2;
        if (k < a[mid]) {
            right = mid;
        } else {
            left = mid;
        }
    }
    return left;
}
`;

export default function SearchSortedArray() {
  return (
    <AlgorithmPage
      title="Search on Sorted Arrays"
      description={description}
      javaCode={javaCode}
      cppCode={cppCode}
      sampleInput={`7\n1 2 4 5 7 9 10\n5`}
      sampleOutput={`3`}
      timeComplexity="O(log n)"
      spaceComplexity="O(1)"
    />
  );
}
