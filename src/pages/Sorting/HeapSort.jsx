import AlgorithmPage from '/src/components/AlgorithmPage';

const heapSortDescription = `Heap Sort is a comparison-based sorting algorithm that uses a binary heap data structure to sort elements. It first builds a max heap (for ascending order) from the input array, where the largest element is at the root. Then, it repeatedly swaps the root with the last element, reduces the heap size, and restores the heap property using heapify. This process continues until all elements are sorted. Heap sort has a consistent time complexity of O(n log n) for best, average, and worst cases, and it sorts in-place with O(1) space complexity. However, it is not stable, meaning it may not preserve the order of equal elements.`;

const javaCode = `
// Java code for Heap Sort
public void heapSort(int arr[]) {
  int n = arr.length;

  for (int i = n / 2 - 1; i >= 0; i--)
    heapify(arr, n, i);

  for (int i = n - 1; i > 0; i--) {
    int temp = arr[0];
    arr[0] = arr[i];
    arr[i] = temp;

    heapify(arr, i, 0);
  }
}

void heapify(int arr[], int n, int i) {
  int largest = i;
  int l = 2 * i + 1;
  int r = 2 * i + 2;

  if (l < n && arr[l] > arr[largest])
    largest = l;

  if (r < n && arr[r] > arr[largest])
    largest = r;

  if (largest != i) {
    int swap = arr[i];
    arr[i] = arr[largest];
    arr[largest] = swap;

    heapify(arr, n, largest);
  }
}
`;

const cppCode = `
// C++ code for Heap Sort
void heapify(int arr[], int n, int i) {
  int largest = i;
  int l = 2 * i + 1;
  int r = 2 * i + 2;

  if (l < n && arr[l] > arr[largest])
    largest = l;

  if (r < n && arr[r] > arr[largest])
    largest = r;

  if (largest != i) {
    swap(arr[i], arr[largest]);
    heapify(arr, n, largest);
  }
}

void heapSort(int arr[], int n) {
  for (int i = n / 2 - 1; i >= 0; i--)
    heapify(arr, n, i);

  for (int i = n - 1; i > 0; i--) {
    swap(arr[0], arr[i]);
    heapify(arr, i, 0);
  }
}
`;

export default function HeapSort() {
  return (
    <AlgorithmPage
      title="Heap Sort"
      description={heapSortDescription}
      javaCode={javaCode}
      cppCode={cppCode}
      sampleInput={`6\n4 10 3 5 1 2`}
      sampleOutput={`1 2 3 4 5 10`}
      timeComplexity="O(n log n)"
      spaceComplexity="O(1)"
    />
  );
}
