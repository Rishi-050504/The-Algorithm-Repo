import AlgorithmPage from '/src/components/AlgorithmPage';

const description = `
The Inclusion-Exclusion Principle is used to count the number of integers up to n that are divisible by either a or b without double-counting those divisible by both. It works by first adding the count of numbers divisible by a and by b, then subtracting the count of numbers divisible by both a and b (i.e., divisible by their LCM). This ensures each number is counted exactly once, providing an accurate total of values divisible by at least one of the given numbers.`;

const javaCode = `
// Count integers <= n divisible by a or b
int inclusionExclusion(int n, int a, int b) {
    return n / a + n / b - n / lcm(a, b);
}
`;

const cppCode = `
int gcd(int a, int b) {
    return b ? gcd(b, a % b) : a;
}

int lcm(int a, int b) {
    return a / gcd(a, b) * b;
}

int inclusionExclusion(int n, int a, int b) {
    return n / a + n / b - n / lcm(a, b);
}
`;

export default function InclusionExclusion() {
  return (
    <AlgorithmPage
      title="Inclusion-Exclusion Principle"
      description={description}
      javaCode={javaCode}
      cppCode={cppCode}
      sampleInput={`n = 100, a = 3, b = 5`}
      sampleOutput={`47`}
      timeComplexity="O(log(min(a, b)))"
      spaceComplexity="O(1)"
    />
  );
}
