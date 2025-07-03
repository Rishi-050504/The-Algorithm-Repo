import AlgorithmPage from '/src/components/AlgorithmPage';

const description = `The k-th order statistic of an array is the element that would appear in the k-th position if the array were sorted. For example, the 1st order statistic is the minimum, the last is the maximum, and the median is the middle order statistic. To find it efficiently, especially without sorting the entire array, algorithms like Quickselect are used. Quickselect is a variation of Quicksort that partitions the array and recursively processes only the side that contains the k-th element, achieving average-case time complexity of O(n). This makes it highly efficient for large datasets where full sorting is unnecessary.`;

const javaCode = `
int quickSelect(int[] arr, int low, int high, int k) {
    if (low == high) return arr[low];
    int pivot = arr[high], i = low;
    for (int j = low; j < high; j++) {
        if (arr[j] <= pivot) {
            int tmp = arr[i]; arr[i] = arr[j]; arr[j] = tmp;
            i++;
        }
    }
    int tmp = arr[i]; arr[i] = arr[high]; arr[high] = tmp;
    
    int pos = i - low + 1;
    if (pos == k) return arr[i];
    else if (k < pos) return quickSelect(arr, low, i - 1, k);
    else return quickSelect(arr, i + 1, high, k - pos);
}
`;

const cppCode = `
int quickSelect(vector<int>& arr, int low, int high, int k) {
    if (low == high) return arr[low];
    int pivot = arr[high], i = low;
    for (int j = low; j < high; ++j) {
        if (arr[j] <= pivot)
            swap(arr[i++], arr[j]);
    }
    swap(arr[i], arr[high]);
    int pos = i - low + 1;
    if (pos == k) return arr[i];
    else if (k < pos) return quickSelect(arr, low, i - 1, k);
    else return quickSelect(arr, i + 1, high, k - pos);
}
`;

export default function KthOrderStatistic() {
  return (
    <AlgorithmPage
      title="Kth Order Statistic"
      description={description}
      javaCode={javaCode}
      cppCode={cppCode}
      sampleInput={`Array: [7, 10, 4, 3, 20, 15], K = 3`}
      sampleOutput={`7`}
      timeComplexity="O(n) on average"
      spaceComplexity="O(1)"
    />
  );
}
