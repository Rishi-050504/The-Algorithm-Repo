import AlgorithmPage from '/src/components/AlgorithmPage';

const selectionSortDescription = `Selection Sort is a simple comparison-based sorting algorithm that divides the array into a sorted and an unsorted part. It repeatedly selects the smallest (or largest) element from the unsorted part and swaps it with the first unsorted element, thereby growing the sorted portion of the array one element at a time. This continues until the entire array is sorted. While it performs fewer swaps compared to bubble sort, its time complexity remains O(n²) for all cases, making it inefficient for large datasets. It is easy to implement and useful when memory writes are costly, as it minimizes the number of swaps.`;

const javaCode = `// Java code for Selection Sort
public class SelectionSort {
  public static void sort(int[] arr) {
    int n = arr.length;
    for (int i = 0; i < n - 1; i++) {
      int minIndex = i;
      for (int j = i + 1; j < n; j++) {
        if (arr[j] < arr[minIndex]) {
          minIndex = j;
        }
      }
      int temp = arr[minIndex];
      arr[minIndex] = arr[i];
      arr[i] = temp;
    }
  }
}`;

const cppCode = `// C++ code for Selection Sort
void selectionSort(int arr[], int n) {
  for (int i = 0; i < n - 1; i++) {
    int minIndex = i;
    for (int j = i + 1; j < n; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }
    std::swap(arr[i], arr[minIndex]);
  }
}`;

export default function SelectionSort() {
  return (
    <AlgorithmPage
      title="Selection Sort"
      description={selectionSortDescription}
      javaCode={javaCode}
      cppCode={cppCode}
      sampleInput={`5 4 3 2 1`}
      sampleOutput={`1 2 3 4 5`}
      timeComplexity="O(n^2)"
      spaceComplexity="O(1)"
    />
  );
}
