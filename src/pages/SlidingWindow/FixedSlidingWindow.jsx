import AlgorithmPage from '/src/components/AlgorithmPage';

const description = `Fixed Sliding Window is a variation of the sliding window technique where the window size remains constant throughout the process. It is commonly used in problems that require analyzing all subarrays or substrings of a specific length, such as finding the maximum or minimum sum of k consecutive elements. The algorithm starts by calculating the sum or result for the first window, then slides the window one element at a time by removing the element that exits the window and adding the new one that enters, maintaining the required value efficiently. This approach reduces time complexity to O(n), making it much faster than checking every window from scratch.`;

const javaCode = `
// Maximum sum of subarray of size k
int maxSum(int[] arr, int k) {
    int n = arr.length;
    int windowSum = 0;
    for (int i = 0; i < k; i++)
        windowSum += arr[i];
    
    int maxSum = windowSum;
    for (int i = k; i < n; i++) {
        windowSum += arr[i] - arr[i - k];
        maxSum = Math.max(maxSum, windowSum);
    }
    return maxSum;
}
`;

const cppCode = `
// Maximum sum of subarray of size k
int maxSum(vector<int>& arr, int k) {
    int n = arr.size();
    int windowSum = 0;
    for (int i = 0; i < k; ++i)
        windowSum += arr[i];

    int maxSum = windowSum;
    for (int i = k; i < n; ++i) {
        windowSum += arr[i] - arr[i - k];
        maxSum = max(maxSum, windowSum);
    }
    return maxSum;
}
`;

export default function FixedSlidingWindow() {
  return (
    <AlgorithmPage
      title="Fixed Sliding Window"
      description={description}
      javaCode={javaCode}
      cppCode={cppCode}
      sampleInput={`arr = [2, 1, 5, 1, 3, 2], k = 3`}
      sampleOutput={`9`}
      timeComplexity="O(n)"
      spaceComplexity="O(1)"
    />
  );
}
