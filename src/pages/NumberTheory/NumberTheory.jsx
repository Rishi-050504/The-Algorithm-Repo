import TopicPage from '/src/components/TopicPage';

const numberTheoryDescription = `Number theory is a branch of mathematics that deals with the properties and relationships of integers. It involves concepts like divisibility, prime numbers, greatest common divisors, modular arithmetic, and more. It forms the basis for many algorithms in cryptography, computer science, and competitive programming..`;

const numberTheoryAlgorithms = [
  'Binary Exponentiation',
  'Sieve of Eratosthenes',
  'Extended Euclidean Algorithm',
  'Kth Order Statistic',
  'Nim Game',
  'GCD and LCM',
  'Prime Factorization',
  'Inclusion-Exclusion Principle'
];

export default function NumberTheory() {
  return (
    <TopicPage
      title="Number Theory"
      description={numberTheoryDescription}
      algorithms={numberTheoryAlgorithms}
      basePath="/topic/number-theory"
    />
  );
}
