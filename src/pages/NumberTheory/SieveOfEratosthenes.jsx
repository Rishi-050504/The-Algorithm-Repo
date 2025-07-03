import AlgorithmPage from '/src/components/AlgorithmPage';

const description = `The Sieve of Eratosthenes is a classic and efficient algorithm used to find all prime numbers up to a given number n. It works by creating a boolean array where each index represents a number, initially assumed to be prime. Starting from 2 (the first prime), it marks all multiples of 2 as non-prime, then moves to the next unmarked number and marks all its multiples, and so on up to √n. The remaining unmarked numbers in the array are primes. The sieve runs in O(n log log n) time and is widely used in number theory problems and competitive programming.`;

const javaCode = `
void sieve(int n) {
    boolean[] isPrime = new boolean[n + 1];
    Arrays.fill(isPrime, true);
    isPrime[0] = isPrime[1] = false;

    for (int i = 2; i * i <= n; i++) {
        if (isPrime[i]) {
            for (int j = i * i; j <= n; j += i)
                isPrime[j] = false;
        }
    }
}
`;

const cppCode = `
vector<bool> sieve(int n) {
    vector<bool> isPrime(n + 1, true);
    isPrime[0] = isPrime[1] = false;

    for (int i = 2; i * i <= n; ++i) {
        if (isPrime[i]) {
            for (int j = i * i; j <= n; j += i)
                isPrime[j] = false;
        }
    }
    return isPrime;
}
`;

export default function SieveOfEratosthenes() {
  return (
    <AlgorithmPage
      title="Sieve of Eratosthenes"
      description={description}
      javaCode={javaCode}
      cppCode={cppCode}
      sampleInput={`n = 20`}
      sampleOutput={`2 3 5 7 11 13 17 19`}
      timeComplexity="O(n log log n)"
      spaceComplexity="O(n)"
    />
  );
}
