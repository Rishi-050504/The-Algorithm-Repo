import AlgorithmPage from '/src/components/AlgorithmPage';

const boundSearchDescription = `Bound Search is a variation of binary search used to find the lower bound or upper bound of a target value in a sorted array. The lower bound refers to the index of the first element greater than or equal to the target, while the upper bound refers to the index of the first element strictly greater than the target. Bound search is commonly used in problems involving frequency counts, ranges, or insertion positions. It maintains the same time complexity as binary search, which is O(log n), and is efficient for handling duplicate values or determining exact boundaries for a given element.`;

const javaCode = `
// Java equivalent using binary search
int lowerBound(int[] a, int key) {
    int low = 0, high = a.length;
    while (low < high) {
        int mid = (low + high) / 2;
        if (a[mid] < key) low = mid + 1;
        else high = mid;
    }
    return low;
}

int upperBound(int[] a, int key) {
    int low = 0, high = a.length;
    while (low < high) {
        int mid = (low + high) / 2;
        if (a[mid] <= key) low = mid + 1;
        else high = mid;
    }
    return low;
}
`;

const cppCode = `
// C++ STL style
int lower = std::lower_bound(a, a + n, key) - a;
int upper = std::upper_bound(a, a + n, key) - a;
`;

export default function BoundSearch() {
  return (
    <AlgorithmPage
      title="Upper & Lower Bound"
      description={boundSearchDescription}
      javaCode={javaCode}
      cppCode={cppCode}
      sampleInput={`7\n1 2 2 2 3 4 5\nKey: 2`}
      sampleOutput={`Lower Bound: 1\nUpper Bound: 4`}
      timeComplexity="O(log n)"
      spaceComplexity="O(1)"
    />
  );
}
