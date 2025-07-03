import AlgorithmPage from '/src/components/AlgorithmPage';

const description = `To clear (set to 0) the ith bit of a number, use:
n & ~(1 << i)`;

const javaCode = `
int clearBit(int n, int i) {
    return n & ~(1 << i);
}
`;

const cppCode = `
int clearBit(int n, int i) {
    return n & ~(1 << i);
}
`;

export default function ClearBit() {
  return (
    <AlgorithmPage
      title="Clear Bit"
      description={description}
      javaCode={javaCode}
      cppCode={cppCode}
      sampleInput={`n = 13 (1101), i = 2`}
      sampleOutput={`9 (1001)`}
      timeComplexity="O(1)"
      spaceComplexity="O(1)"
    />
  );
}
