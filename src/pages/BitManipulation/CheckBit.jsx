import AlgorithmPage from '/src/components/AlgorithmPage';

const description = `To check if the ith bit is set (1), use:
(n & (1 << i)) != 0`;

const javaCode = `
boolean isBitSet(int n, int i) {
    return (n & (1 << i)) != 0;
}
`;

const cppCode = `
bool isBitSet(int n, int i) {
    return (n & (1 << i)) != 0;
}
`;

export default function CheckBit() {
  return (
    <AlgorithmPage
      title="Check Bit"
      description={description}
      javaCode={javaCode}
      cppCode={cppCode}
      sampleInput={`n = 5 (0101), i = 2`}
      sampleOutput={`true`}
      timeComplexity="O(1)"
      spaceComplexity="O(1)"
    />
  );
}
