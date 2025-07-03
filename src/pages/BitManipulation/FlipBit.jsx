import AlgorithmPage from '/src/components/AlgorithmPage';

const description = `Flipping a bit means toggling it: turning a 0 to 1 or a 1 to 0. To flip the i-th bit of a number, we use the bitwise XOR operation with a mask that has 1 at the i-th position.`;

const javaCode = `
// Flip the i-th bit of a number n (0-indexed)
int flipBit(int n, int i) {
    return n ^ (1 << i);
}

// Example:
// n = 5 (0101), i = 2
// (1 << 2) = 0100
// 0101 ^ 0100 = 0001 (1)
`;

const cppCode = `
// Flip the i-th bit of a number n (0-indexed)
int flipBit(int n, int i) {
    return n ^ (1 << i);
}

// Example:
// n = 5 (0101), i = 2
// (1 << 2) = 0100
// 0101 ^ 0100 = 0001 (1)
`;

const sampleInput = `n = 5
i = 2`;

const sampleOutput = `1`;

const timeComplexity = `O(1)`;
const spaceComplexity = `O(1)`;

export default function FlipBit() {
  return (
    <AlgorithmPage
      title="Flip Bit"
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
