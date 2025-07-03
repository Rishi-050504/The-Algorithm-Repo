import AlgorithmPage from '/src/components/AlgorithmPage';

const description = `To check whether a number is a power of 2, we use the property that powers of 2 have exactly one bit set in their binary representation. So, n & (n - 1) will be 0 only when n is a power of 2 (and n > 0).`;

const javaCode = `
// Check if a number is a power of 2
boolean isPowerOf2(int n) {
    return n > 0 && (n & (n - 1)) == 0;
}

// Example:
// n = 8 (1000), n - 1 = 7 (0111)
// 1000 & 0111 = 0000 → true
`;

const cppCode = `
// Check if a number is a power of 2
bool isPowerOf2(int n) {
    return n > 0 && (n & (n - 1)) == 0;
}

// Example:
// n = 8 (1000), n - 1 = 7 (0111)
// 1000 & 0111 = 0000 → true
`;

const sampleInput = `n = 8`;
const sampleOutput = `true`;

const timeComplexity = `O(1)`;
const spaceComplexity = `O(1)`;

export default function PowerOf2() {
  return (
    <AlgorithmPage
      title="Check if Power of 2"
      description={description}
      javaCode={javaCode}
      cppCode={cppCode}
      sampleInput={sampleInput}
      sampleOutput={sampleOutput}
      timeComplexity={timeComplexity}
      spaceComplexity={spaceComplexity}
    />
  );
}
