import AlgorithmPage from '/src/components/AlgorithmPage';

const answerSearchDescription = `Binary Search on Answer Space is a problem-solving technique where binary search is applied not on an array, but on a range of possible answers to a problem. Instead of searching for an element, we search for the minimum or maximum feasible value that satisfies certain conditions. At each step, we check if a chosen value (mid) is a valid solution using a helper function or condition. If it is valid, we move the search to the left (to find a better/minimum value), otherwise to the right. This technique is commonly used in optimization problems, such as minimum capacity, maximum distance, or threshold value problems, and works efficiently in O(log(range) × checkTime), where checkTime is the time to validate a mid value.`;

const javaCode = `
// Find minimum x such that isFeasible(x) == true
int binarySearchAnswer(int low, int high) {
    while (low < high) {
        int mid = (low + high) / 2;
        if (isFeasible(mid)) {
            high = mid;
        } else {
            low = mid + 1;
        }
    }
    return low;
}
`;

const cppCode = `
// Same logic in C++
int binarySearchAnswer(int low, int high) {
    while (low < high) {
        int mid = (low + high) / 2;
        if (isFeasible(mid)) {
            high = mid;
        } else {
            low = mid + 1;
        }
    }
    return low;
}
`;

export default function BinarySearchAnswer() {
  return (
    <AlgorithmPage
      title="Binary Search on Answer"
      description={answerSearchDescription}
      javaCode={javaCode}
      cppCode={cppCode}
      sampleInput={`Depends on problem-specific implementation.`}
      sampleOutput={`Minimum feasible value.`}
      timeComplexity="O(log(maximum possible answer) * check complexity)"
      spaceComplexity="O(1)"
    />
  );
}
