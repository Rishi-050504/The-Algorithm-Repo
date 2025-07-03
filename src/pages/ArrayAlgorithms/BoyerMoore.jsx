import AlgorithmPage from '/src/components/AlgorithmPage';

export default function BoyerMoore() {
  return (
    <AlgorithmPage
      title="Boyer-Moore Majority Vote Algorithm"
      description="The Boyer-Moore Majority Voting Algorithm is a linear-time algorithm used to find the majority element in an array—an element that appears more than ⌊n/2⌋ times, if it exists. It works in two passes: In the first pass, it selects a candidate by maintaining a count and updating it while iterating through the array—incrementing when the current element matches the candidate and decrementing otherwise. If the count becomes zero, the current element becomes the new candidate. In the second pass, the algorithm verifies whether the selected candidate is actually the majority by counting its occurrences. This method runs in O(n) time with O(1) space and is widely used in vote and frequency-related problems."
      javaCode={`public int majorityElement(int[] nums) {
    int count = 0, candidate = 0;
    for (int num : nums) {
        if (count == 0) {
            candidate = num;
        }
        count += (num == candidate) ? 1 : -1;
    }
    return candidate;
}`}
      cppCode={`int majorityElement(vector<int>& nums) {
    int count = 0, candidate = 0;
    for (int num : nums) {
        if (count == 0) {
            candidate = num;
        }
        count += (num == candidate) ? 1 : -1;
    }
    return candidate;
}`}
      sampleInput={`nums = [2, 2, 1, 1, 1, 2, 2]`}
      sampleOutput={`2`}
      timeComplexity="O(n)"
      spaceComplexity="O(1)"
    />
  );
}
