import AlgorithmPage from '/src/components/AlgorithmPage';

const linearSearchDescription = `Linear Search is a straightforward algorithm that checks each element in a list one by one until the target is found or the end is reached. It works on both sorted and unsorted data and requires no extra space. The time complexity is O(n) in the worst case and O(1) in the best case, while the space complexity is O(1).`;

const javaCode = `
// Java code for Linear Search
int linearSearch(int[] arr, int x) {
  for (int i = 0; i < arr.length; i++) {
    if (arr[i] == x) {
      return i;
    }
  }
  return -1;
}
`;

const cppCode = `
// C++ code for Linear Search
int linearSearch(int arr[], int n, int x) {
  for (int i = 0; i < n; i++) {
    if (arr[i] == x)
      return i;
  }
  return -1;
}
`;

export default function LinearSearch() {
  return (
    <AlgorithmPage
      title="Linear Search"
      description={linearSearchDescription}
      javaCode={javaCode}
      cppCode={cppCode}
      sampleInput={`6\n1 3 5 7 9 11\n5`}
      sampleOutput={`2`}
      timeComplexity="O(n)"
      spaceComplexity="O(1)"
    />
  );
}
