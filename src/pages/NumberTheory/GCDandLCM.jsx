import AlgorithmPage from '/src/components/AlgorithmPage';

const description = (
  <>
    The <strong>Greatest Common Divisor (GCD)</strong> of two integers is the largest number that divides both without leaving a remainder, 
    while the <strong>Least Common Multiple (LCM)</strong> is the smallest number that is a multiple of both.<br />
    GCD is computed efficiently using the <strong>Euclidean algorithm</strong>, which repeatedly replaces the larger number 
    with the remainder of dividing the larger by the smaller until the remainder is zero—the last non-zero number is the GCD.<br />
    Once the GCD is found, LCM can be calculated using the formula: <br />
    <code>LCM(a, b) = (a × b) / GCD(a, b)</code><br />
    This ensures efficient and accurate computation even for large inputs.
  </>
);

const javaCode = `
int gcd(int a, int b) {
    return b == 0 ? a : gcd(b, a % b);
}

int lcm(int a, int b) {
    return a / gcd(a, b) * b;
}
`;

const cppCode = `
int gcd(int a, int b) {
    return b == 0 ? a : gcd(b, a % b);
}

int lcm(int a, int b) {
    return a / gcd(a, b) * b;
}
`;

export default function GCDandLCM() {
  return (
    <AlgorithmPage
      title="GCD and LCM"
      description={description}
      javaCode={javaCode}
      cppCode={cppCode}
      sampleInput={`12 18`}
      sampleOutput={`GCD: 6, LCM: 36`}
      timeComplexity="O(log(min(a, b)))"
      spaceComplexity="O(log(min(a, b)))"
    />
  );
}
