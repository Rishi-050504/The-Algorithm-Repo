import AlgorithmPage from '/src/components/AlgorithmPage';

const description = `Bit shifting operations move bits to the left or right. 
- Left shift (<<) multiplies the number by 2.
- Right shift (>>) divides the number by 2 (floor division).`;

const javaCode = `
// Left Shift
int leftShift(int n, int shiftBy) {
    return n << shiftBy; // Equivalent to n * (2^shiftBy)
}

// Right Shift
int rightShift(int n, int shiftBy) {
    return n >> shiftBy; // Equivalent to n / (2^shiftBy)
}
`;

const cppCode = `
// Left Shift
int leftShift(int n, int shiftBy) {
    return n << shiftBy; // Equivalent to n * (2^shiftBy)
}

// Right Shift
int rightShift(int n, int shiftBy) {
    return n >> shiftBy; // Equivalent to n / (2^shiftBy)
}
`;

const sampleInput = `n = 4, shiftBy = 1`;
const sampleOutput = `Left Shift: 8\nRight Shift: 2`;

export default function ShiftBits() {
  return (
    <AlgorithmPage
      title="Left & Right Shift"
      description={description}
      javaCode={javaCode}
      cppCode={cppCode}
      sampleInput={sampleInput}
      sampleOutput={sampleOutput}
      timeComplexity="O(1)"
      spaceComplexity="O(1)"
    />
  );
}
