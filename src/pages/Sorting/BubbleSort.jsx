import AlgorithmPage from '/src/components/AlgorithmPage';


const bubbleSortDescription = `Bubble Sort is a simple sorting algorithm that repeatedly steps through the list, compares adjacent elements, and swaps them if they are in the wrong order. This process is repeated until no more swaps are needed, indicating the list is sorted. After each full pass through the array, the largest unsorted element moves to its correct position, hence the name "bubble" sort. Although easy to implement and understand, it is inefficient for large datasets due to its average and worst-case time complexity of O(n²). However, it performs well on small or nearly sorted arrays and can be optimized by stopping early if no swaps occur during a pass.`;

const javaCode = `
void bubbleSort(int arr[]) {
  int n = arr.length;
  for (int i = 0; i < n - 1; i++) {
    for (int j = 0; j < n - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        int temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
}
`;

const cppCode = `
void bubbleSort(int arr[], int n) {
  for (int i = 0; i < n - 1; i++) {
    for (int j = 0; j < n - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        std::swap(arr[j], arr[j + 1]);
      }
    }
  }
}
`;

export default function BubbleSort() {
  return (
    <AlgorithmPage
      title="Bubble Sort"
      description={bubbleSortDescription}
      javaCode={javaCode}
      cppCode={cppCode}
      sampleInput={`5\n4 3 1 5 2`}
      sampleOutput={`1 2 3 4 5`}
      timeComplexity="O(n²)"
      spaceComplexity="O(1)"
    />
  );
}
