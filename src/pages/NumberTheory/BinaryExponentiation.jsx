import AlgorithmPage from '/src/components/AlgorithmPage';

const description = (
  <>
    Binary exponentiation is an efficient method to compute powers like <code>a<sup>b</sup></code> in O(log b) time.<br />
    It works by repeatedly squaring the base and halving the exponent.<br />
    - If the exponent is even: <code>a<sup>b</sup> = (a<sup>b/2</sup>)²</code><br />
    - If the exponent is odd: <code>a<sup>b</sup> = a × a<sup>b-1</sup></code><br />
    This reduces the number of multiplications compared to the naive method and is especially useful in modular arithmetic and competitive programming.
  </>
);

const javaCode = `
// Iterative method
int binaryExp(int a, int b) {
    int result = 1;
    while (b > 0) {
        if ((b & 1) == 1)
            result *= a;
        a *= a;
        b >>= 1;
    }
    return result;
}
`;

const cppCode = `
// Iterative method
int binaryExp(int a, int b) {
    int result = 1;
    while (b > 0) {
        if (b & 1)
            result *= a;
        a *= a;
        b >>= 1;
    }
    return result;
}
`;

export default function BinaryExponentiation() {
  return (
    <AlgorithmPage
      title="Binary Exponentiation"
      description={description}
      javaCode={javaCode}
      cppCode={cppCode}
      sampleInput={`2 10`}
      sampleOutput={`1024`}
      timeComplexity="O(log b)"
      spaceComplexity="O(1)"
    />
  );
}
