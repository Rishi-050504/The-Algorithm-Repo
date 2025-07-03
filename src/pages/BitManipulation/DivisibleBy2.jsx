import AlgorithmPage from '/src/components/AlgorithmPage';

const description = `A number is divisible by 2 if its least significant bit (LSB) is 0. 
This can be checked using bitwise AND with 1: (n & 1) == 0`;

const javaCode = `
boolean isDivisibleBy2(int n) {
    return (n & 1) == 0;
}
`;

const cppCode = `
bool isDivisibleBy2(int n) {
    return (n & 1) == 0;
}
`;

export default function DivisibleBy2() {
  return (
    <AlgorithmPage
      title="Is Divisible by 2"
      description={description}
      javaCode={javaCode}
      cppCode={cppCode}
      sampleInput={`4`}
      sampleOutput={`true`}
      timeComplexity="O(1)"
      spaceComplexity="O(1)"
    />
  );
}
