import AlgorithmPage from '/src/components/AlgorithmPage';

const insertionSortDescription = `Insertion Sort is a simple and intuitive sorting algorithm that builds the final sorted array one element at a time. It works by taking each element from the unsorted portion and inserting it into its correct position in the sorted portion by shifting larger elements to the right. This process is repeated for all elements until the array is sorted. Insertion sort is efficient for small or nearly sorted datasets, with a best-case time complexity of O(n) and a worst-case of O(n²). It is stable, in-place, and often used as a basic building block in more complex algorithms.`;

const javaCode = `
// Java code for Insertion Sort
void insertionSort(int arr[]) {
  int n = arr.length;
  for (int i = 1; i < n; ++i) {
    int key = arr[i];
    int j = i - 1;

    while (j >= 0 && arr[j] > key) {
      arr[j + 1] = arr[j];
      j = j - 1;
    }
    arr[j + 1] = key;
  }
}
`;

const cppCode = `
// C++ code for Insertion Sort
void insertionSort(int arr[], int n) {
  for (int i = 1; i < n; ++i) {
    int key = arr[i];
    int j = i - 1;

    while (j >= 0 && arr[j] > key) {
      arr[j + 1] = arr[j];
      j = j - 1;
    }
    arr[j + 1] = key;
  }
}
`;

export default function InsertionSort() {
  return (
    <AlgorithmPage
      title="Insertion Sort"
      description={insertionSortDescription}
      javaCode={javaCode}
      cppCode={cppCode}
      sampleInput={`5\n12 11 13 5 6`}
      sampleOutput={`5 6 11 12 13`}
      timeComplexity="O(n²)"
      spaceComplexity="O(1)"
    />
  );
}
