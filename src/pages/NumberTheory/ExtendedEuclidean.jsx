import AlgorithmPage from '/src/components/AlgorithmPage';

const description = `
The Extended Euclidean Algorithm is an extension of the Euclidean Algorithm that not only computes the greatest common divisor (GCD) of two integers a and b, but also finds integers x and y such that ax + by = gcd(a, b). It does this by recursively applying the Euclidean algorithm and then backtracking to express the GCD as a linear combination of a and b. This method is especially useful for finding modular inverses and solving linear Diophantine equations.`;

const javaCode = `
int[] extendedGCD(int a, int b) {
    if (b == 0)
        return new int[]{a, 1, 0};
    int[] vals = extendedGCD(b, a % b);
    int g = vals[0], x = vals[2], y = vals[1] - (a / b) * vals[2];
    return new int[]{g, x, y};
}
`;

const cppCode = `
tuple<int, int, int> extendedGCD(int a, int b) {
    if (b == 0)
        return {a, 1, 0};
    auto [g, x1, y1] = extendedGCD(b, a % b);
    return {g, y1, x1 - (a / b) * y1};
}
`;

export default function ExtendedEuclidean() {
  return (
    <AlgorithmPage
      title="Extended Euclidean Algorithm"
      description={description}
      javaCode={javaCode}
      cppCode={cppCode}
      sampleInput={`30 20`}
      sampleOutput={`GCD: 10, x: 1, y: -1`}
      timeComplexity="O(log(min(a, b)))"
      spaceComplexity="O(log(min(a, b)))"
    />
  );
}
