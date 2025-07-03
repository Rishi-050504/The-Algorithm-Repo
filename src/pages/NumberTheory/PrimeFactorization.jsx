import AlgorithmPage from '/src/components/AlgorithmPage';

const description = `Prime factorization is the process of breaking down a number into a product of its prime numbers. According to the Fundamental Theorem of Arithmetic, every integer greater than 1 has a unique prime factorization, regardless of the order of the factors. The simplest method involves dividing the number by the smallest prime (starting with 2) and continuing with higher primes until the number is reduced to 1. This method works efficiently up to √n, and can be further optimized using a precomputed list of primes (like from a Sieve of Eratosthenes) for faster factorization of multiple numbers.`;

const javaCode = `
void primeFactorization(int n) {
    for (int i = 2; i * i <= n; i++) {
        while (n % i == 0) {
            System.out.print(i + " ");
            n /= i;
        }
    }
    if (n > 1) System.out.print(n);
}
`;

const cppCode = `
void primeFactorization(int n) {
    for (int i = 2; i * i <= n; ++i) {
        while (n % i == 0) {
            cout << i << " ";
            n /= i;
        }
    }
    if (n > 1) cout << n;
}
`;

export default function PrimeFactorization() {
  return (
    <AlgorithmPage
      title="Prime Factorization"
      description={description}
      javaCode={javaCode}
      cppCode={cppCode}
      sampleInput={`60`}
      sampleOutput={`2 2 3 5`}
      timeComplexity="O(sqrt(n))"
      spaceComplexity="O(1)"
    />
  );
}
