// /src/pages/Sorting/CyclicSort.jsx

import AlgorithmPage from '/src/components/AlgorithmPage';

const cyclicSortDescription = `Cyclic Sort is an efficient sorting algorithm used primarily when the input array contains n distinct elements in the range 1 to n (or 0 to n-1). The idea is to place each element at its correct index by swapping it with the element currently at that index, repeating this process until all elements are in their correct positions. It works in-place with a time complexity of O(n) and space complexity of O(1), making it highly efficient for specific cases like finding missing numbers, duplicates, or misplaced elements. However, it is not suitable for general-purpose sorting where the elements are not in a known range.`;

const javaCode = `
// Java code for Cyclic Sort
void cyclicSort(int[] arr) {
  int i = 0;
  while (i < arr.length) {
    int correct = arr[i] - 1;
    if (arr[i] != arr[correct]) {
      int temp = arr[i];
      arr[i] = arr[correct];
      arr[correct] = temp;
    } else {
      i++;
    }
  }
}
`;

const cppCode = `
// C++ code for Cyclic Sort
void cyclicSort(vector<int>& arr) {
  int i = 0;
  while (i < arr.size()) {
    int correct = arr[i] - 1;
    if (arr[i] != arr[correct]) {
      swap(arr[i], arr[correct]);
    } else {
      i++;
    }
  }
}
`;

export default function CyclicSort() {
  return (
    <AlgorithmPage
      title="Cyclic Sort"
      description={cyclicSortDescription}
      javaCode={javaCode}
      cppCode={cppCode}
      sampleInput={`5\n3 1 5 4 2`}
      sampleOutput={`1 2 3 4 5`}
      timeComplexity="O(n)"
      spaceComplexity="O(1)"
    />
  );
}
