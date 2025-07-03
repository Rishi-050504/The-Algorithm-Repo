import AlgorithmPage from '/src/components/AlgorithmPage';

const description = `XOR has unique properties:
- x ^ x = 0
- x ^ 0 = x
These are useful in problems like finding the unique number in an array where every other number appears twice.`;

const javaCode = `
// Find the number that appears once when all others appear twice
int findUnique(int[] nums) {
    int result = 0;
    for (int num : nums) {
        result ^= num;
    }
    return result;
}
`;

const cppCode = `
// Find the number that appears once when all others appear twice
int findUnique(const vector<int>& nums) {
    int result = 0;
    for (int num : nums) {
        result ^= num;
    }
    return result;
}
`;

const sampleInput = `nums = [1, 2, 3, 2, 1]`;
const sampleOutput = `3`;

export default function XORTrick() {
  return (
    <AlgorithmPage
      title="XOR Trick"
      description={description}
      javaCode={javaCode}
      cppCode={cppCode}
      sampleInput={sampleInput}
      sampleOutput={sampleOutput}
      timeComplexity="O(n)"
      spaceComplexity="O(1)"
    />
  );
}
