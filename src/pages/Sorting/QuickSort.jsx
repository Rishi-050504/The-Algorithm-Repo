import AlgorithmPage from '/src/components/AlgorithmPage';

const quickSortDescription = `Quick Sort is a fast and efficient divide-and-conquer sorting algorithm that works by selecting a pivot element, partitioning the array so that elements less than the pivot are on the left and greater elements are on the right, and then recursively sorting the left and right partitions. It has an average and best-case time complexity of O(n log n), but in the worst case (e.g., sorted input with poor pivot choices), it degrades to O(n²). However, with good pivot selection (like using the median), it performs very well in practice. Quick Sort is in-place (requires no extra space), but it is not stable, meaning it may not preserve the relative order of equal elements.`;

const javaCode = `
// Java code for Quick Sort
int partition(int arr[], int low, int high) {
  int pivot = arr[high];
  int i = (low - 1);

  for (int j = low; j < high; j++) {
    if (arr[j] <= pivot) {
      i++;
      int temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
    }
  }

  int temp = arr[i + 1];
  arr[i + 1] = arr[high];
  arr[high] = temp;

  return i + 1;
}

void quickSort(int arr[], int low, int high) {
  if (low < high) {
    int pi = partition(arr, low, high);
    quickSort(arr, low, pi - 1);
    quickSort(arr, pi + 1, high);
  }
}
`;

const cppCode = `
// C++ code for Quick Sort
int partition(int arr[], int low, int high) {
  int pivot = arr[high];
  int i = (low - 1);

  for (int j = low; j < high; j++) {
    if (arr[j] <= pivot) {
      i++;
      swap(arr[i], arr[j]);
    }
  }

  swap(arr[i + 1], arr[high]);
  return i + 1;
}

void quickSort(int arr[], int low, int high) {
  if (low < high) {
    int pi = partition(arr, low, high);
    quickSort(arr, low, pi - 1);
    quickSort(arr, pi + 1, high);
  }
}
`;

export default function QuickSort() {
  return (
    <AlgorithmPage
      title="Quick Sort"
      description={quickSortDescription}
      javaCode={javaCode}
      cppCode={cppCode}
      sampleInput={`6\n10 7 8 9 1 5`}
      sampleOutput={`1 5 7 8 9 10`}
      timeComplexity="O(n log n) on average, O(n²) worst case"
      spaceComplexity="O(log n)"
    />
  );
}
