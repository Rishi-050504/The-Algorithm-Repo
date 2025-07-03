import AlgorithmPage from '/src/components/AlgorithmPage';

const description = `Count the number of set bits (1s) in the binary representation of a number.
There are multiple methods, one of the most efficient is Brian Kernighan’s Algorithm.`;

const javaCode = `
int countSetBits(int n) {
    int count = 0;
    while (n > 0) {
        n &= (n - 1);
        count++;
    }
    return count;
}
`;

const cppCode = `
int countSetBits(int n) {
    int count = 0;
    while (n > 0) {
        n &= (n - 1);
        count++;
    }
    return count;
}
`;

export default function CountSetBits() {
  return (
    <AlgorithmPage
      title="Count Set Bits"
      description={description}
      javaCode={javaCode}
      cppCode={cppCode}
      sampleInput={`13`}
      sampleOutput={`3`}
      timeComplexity="O(number of set bits)"
      spaceComplexity="O(1)"
    />
  );
}
