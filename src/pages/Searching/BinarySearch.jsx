import AlgorithmPage from '/src/components/AlgorithmPage';

const binarySearchDescription = `Binary Search is an efficient algorithm used to find a target element in a sorted array by repeatedly dividing the search range in half. It compares the target with the middle element; if equal, the search ends, if not, it continues in the left or right half based on the comparison. This process continues until the element is found or the range is empty. Its time complexity is O(log n) in all cases, and space complexity is O(1) for the iterative version and O(log n) for the recursive version.`;

const javaCode = `
// Java code for Binary Search
int binarySearch(int[] arr, int x) {
  int left = 0, right = arr.length - 1;
  while (left <= right) {
    int mid = left + (right - left) / 2;
    if (arr[mid] == x) return mid;
    if (arr[mid] < x) left = mid + 1;
    else right = mid - 1;
  }
  return -1;
}
`;

const cppCode = `
// C++ code for Binary Search
int binarySearch(int arr[], int n, int x) {
  int left = 0, right = n - 1;
  while (left <= right) {
    int mid = left + (right - left) / 2;
    if (arr[mid] == x) return mid;
    if (arr[mid] < x) left = mid + 1;
    else right = mid - 1;
  }
  return -1;
}
`;

export default function BinarySearch() {
  return (
    <AlgorithmPage
      title="Binary Search"
      description={binarySearchDescription}
      javaCode={javaCode}
      cppCode={cppCode}
      sampleInput={`5\n1 3 5 7 9\n7`}
      sampleOutput={`3`}
      timeComplexity="O(log n)"
      spaceComplexity="O(1)"
    />
  );
}
