import AlgorithmPage from '/src/components/AlgorithmPage';

const mergeSortDescription = `Merge Sort is a stable, divide-and-conquer sorting algorithm that divides the array into halves, recursively sorts each half, and then merges the sorted halves to produce the final sorted array. The merging process involves comparing elements from each half and building a new sorted array. Merge Sort guarantees a time complexity of O(n log n) in all cases (best, average, and worst) but requires O(n) extra space for merging. It is efficient for large datasets and is commonly used in applications that require stable sorting or work with linked lists and external storage.`;

const javaCode = `
// Java code for Merge Sort
void mergeSort(int arr[], int l, int r) {
  if (l < r) {
    int m = l + (r - l) / 2;
    mergeSort(arr, l, m);
    mergeSort(arr, m + 1, r);
    merge(arr, l, m, r);
  }
}

void merge(int arr[], int l, int m, int r) {
  int n1 = m - l + 1;
  int n2 = r - m;
  int L[] = new int[n1];
  int R[] = new int[n2];

  for (int i = 0; i < n1; ++i)
    L[i] = arr[l + i];
  for (int j = 0; j < n2; ++j)
    R[j] = arr[m + 1 + j];

  int i = 0, j = 0, k = l;

  while (i < n1 && j < n2) {
    if (L[i] <= R[j]) {
      arr[k] = L[i];
      i++;
    } else {
      arr[k] = R[j];
      j++;
    }
    k++;
  }

  while (i < n1) {
    arr[k] = L[i];
    i++;
    k++;
  }

  while (j < n2) {
    arr[k] = R[j];
    j++;
    k++;
  }
}
`;

const cppCode = `
// C++ code for Merge Sort
void merge(int arr[], int l, int m, int r) {
  int n1 = m - l + 1;
  int n2 = r - m;
  int L[n1], R[n2];

  for (int i = 0; i < n1; i++)
    L[i] = arr[l + i];
  for (int j = 0; j < n2; j++)
    R[j] = arr[m + 1 + j];

  int i = 0, j = 0, k = l;

  while (i < n1 && j < n2) {
    if (L[i] <= R[j]) {
      arr[k] = L[i];
      i++;
    } else {
      arr[k] = R[j];
      j++;
    }
    k++;
  }

  while (i < n1) {
    arr[k] = L[i];
    i++;
    k++;
  }

  while (j < n2) {
    arr[k] = R[j];
    j++;
    k++;
  }
}

void mergeSort(int arr[], int l, int r) {
  if (l < r) {
    int m = l + (r - l) / 2;
    mergeSort(arr, l, m);
    mergeSort(arr, m + 1, r);
    merge(arr, l, m, r);
  }
}
`;

export default function MergeSort() {
  return (
    <AlgorithmPage
      title="Merge Sort"
      description={mergeSortDescription}
      javaCode={javaCode}
      cppCode={cppCode}
      sampleInput={`6\n38 27 43 3 9 82`}
      sampleOutput={`3 9 27 38 43 82`}
      timeComplexity="O(n log n)"
      spaceComplexity="O(n)"
    />
  );
}
