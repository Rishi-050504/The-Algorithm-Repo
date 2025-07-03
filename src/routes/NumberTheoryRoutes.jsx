import NumberTheory from '/src/pages/NumberTheory/NumberTheory';
import BinaryExponentiation from '/src/pages/NumberTheory/BinaryExponentiation';
import SieveOfEratosthenes from '/src/pages/NumberTheory/SieveOfEratosthenes';
import ExtendedEuclidean from '/src/pages/NumberTheory/ExtendedEuclidean';
import KthOrderStatistic from '/src/pages/NumberTheory/KthOrderStatistic';
import NimGame from '/src/pages/NumberTheory/NimGame';
import GCDandLCM from '/src/pages/NumberTheory/GCDandLCM';
import PrimeFactorization from '/src/pages/NumberTheory/PrimeFactorization';
import InclusionExclusion from '/src/pages/NumberTheory/InclusionExclusion';

export const numberTheoryRoutes = [
  { path: '/topic/number-theory', element: <NumberTheory /> },
  { path: '/topic/number-theory/binary-exponentiation', element: <BinaryExponentiation /> },
  { path: '/topic/number-theory/sieve-of-eratosthenes', element: <SieveOfEratosthenes /> },
  { path: '/topic/number-theory/extended-euclidean-algorithm', element: <ExtendedEuclidean /> },
  { path: '/topic/number-theory/kth-order-statistic', element: <KthOrderStatistic /> },
  { path: '/topic/number-theory/nim-game', element: <NimGame /> },
  { path: '/topic/number-theory/gcd-and-lcm', element: <GCDandLCM /> },
  { path: '/topic/number-theory/prime-factorization', element: <PrimeFactorization /> },
  { path: '/topic/number-theory/inclusion-exclusion-principle', element: <InclusionExclusion /> }
];
