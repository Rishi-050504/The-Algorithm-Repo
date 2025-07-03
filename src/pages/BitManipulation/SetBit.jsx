import AlgorithmPage from '/src/components/AlgorithmPage';

const description = `Setting a bit means turning it to 1. To set the i-th bit of a number, we use the bitwise OR operation with a mask that has 1 at the i-th position.`;

const javaCode = `
// Set the i-th bit of a number n (0-indexed)
int setBit(int n, int i) {
    return n | (1 << i);
}

// Example:
// n = 5 (0101), i = 1
// (1 << 1) = 0010
// 0101 | 0010 = 0111 (7)
`;

const cppCode = `
// Set the i-th bit of a number n (0-indexed)
int setBit(int n, int i) {
    return n | (1 << i);
}

// Example:
// n = 5 (0101), i = 1
// (1 << 1) = 0010
// 0101 | 0010 = 0111 (7)
`;

const sampleInput = `n = 5
i = 1`;

const sampleOutput = `7`;

const timeComplexity = `O(1)`;
const spaceComplexity = `O(1)`;

export default function SetBit() {
  return (
    <AlgorithmPage
      title="Set Bit"
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
